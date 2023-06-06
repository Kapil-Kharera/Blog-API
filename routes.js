const express = require('express');
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('./blogController');

// Create a blog post
router.post('/blogs', createBlog);

// Get all blog posts
router.get('/blogs', getAllBlogs);

// Get a specific blog post by ID
router.get('/blogs/:id', getBlogById);

// Update a blog post
router.put('/blogs/:id', updateBlog);

// Delete a blog post
router.delete('/blogs/:id', deleteBlog);

module.exports = router;
