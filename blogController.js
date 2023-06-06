const Blog = require('./Blog');

// Create a blog post
const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = new Blog({ title, content, author });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific blog post by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const blog = await Blog.findByIdAndUpdate(id, { title, content, author }, { new: true });
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
