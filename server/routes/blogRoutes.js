// routes/blogRoutes.js
import { Router } from 'express';
import multer from 'multer';
import BlogPost from '../models/blog.js';
import path from 'path';

const router = Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    // Rename the file to prevent duplicate names
    const uniqueSuffix = Date.now() + '-' + Math.random().toString(36).substring(2, 15);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Save with unique name
  },
});

const upload = multer({ storage });

// POST request handler for blog creation with media upload
router.post('/', upload.single('mediaFile'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const imgurl = req.file ? req.file.path : ''; // Store the path of the uploaded file

    // Validate if all required fields are present
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    // Create and save the new blog post
    const newBlogPost = new BlogPost({ title, description, imgurl });
    await newBlogPost.save();

    return res.status(201).json({ message: 'Blog post created successfully', post: newBlogPost });
  } catch (error) {
    // Log the error and send a server error response
    console.error('Error creating blog post:', error);
    return res.status(500).json({ message: 'Error creating post', error });
  }
});

// Route to get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogPost.find(); // Fetch blogs from MongoDB
    res.json(blogs); // Send back as JSON
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a blog post (Admin only)
router.put('/:id', upload.single('mediaFile'), async (req, res) => {
  const { title, description } = req.body;
  const imgurl = req.file ? req.file.path : undefined; // Get the file path if a file was uploaded

  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, description, imgurl }, // Include imgurl if present
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: 'Error updating post', error: err });
  }
});

// Delete a blog post (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err });
  }
});

export default router;
