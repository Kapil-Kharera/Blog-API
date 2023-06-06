const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes');

// Create Express app
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
