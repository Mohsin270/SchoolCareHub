import React, { useEffect, useState } from 'react';
import Panel from '../src/adminControl/Panel';

// Reusable Blog Modal Component (for create & edit)
const BlogModal = ({ isOpen, closeModal, onSubmit, initialData = {} }) => {
  const [blog, setBlog] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    mediaUrl: initialData.mediaUrl || '',
    mediaType: initialData.mediaType || 'image',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(blog);
    closeModal();
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">{initialData.title ? 'Edit' : 'Create'} Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full p-2 mb-2 border"
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="w-full p-2 mb-2 border"
            placeholder="Content"
            rows="4"
            required
          />
          <input
            name="mediaUrl"
            value={blog.mediaUrl}
            onChange={handleChange}
            className="w-full p-2 mb-2 border"
            placeholder="Media URL"
          />
          <select
            name="mediaType"
            value={blog.mediaType}
            onChange={handleChange}
            className="w-full p-2 mb-4 border"
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            {initialData.title ? 'Update' : 'Create'}
          </button>
        </form>
        <button onClick={closeModal} className="mt-4 text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  ) : null;
};

// Blog Manager Component
const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleSaveBlog = async (blogData) => {
    const method = currentBlog ? 'PUT' : 'POST';
    const url = currentBlog ? `/api/blog/${currentBlog._id}` : '/api/blog';
    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });
      fetchBlogs();
      setCurrentBlog(null);
    } catch (error) {
      console.error(`Error ${currentBlog ? 'updating' : 'creating'} blog:`, error);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await fetch(`/api/blog/${id}`, { method: 'DELETE' });
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div className="admin-container">
      <Panel />
      <div className="admin-main">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Admin Blog Management</h1>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setCurrentBlog(null); // Reset for new blog creation
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded float-right mb-4"
          >
            Create New Blog
          </button>

          <BlogModal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
            onSubmit={handleSaveBlog}
            initialData={currentBlog || {}}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog._id} className="bg-white shadow-lg p-4 rounded">
                  <h2 className="text-2xl font-semibold">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.content.slice(0, 100)}...</p>
                  {blog.mediaUrl && blog.mediaType === 'image' && (
                    <img src={blog.mediaUrl} alt={blog.title} className="w-full h-auto" />
                  )}
                  {blog.mediaUrl && blog.mediaType === 'video' && (
                    <video controls className="w-full h-auto">
                      <source src={blog.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setCurrentBlog(blog); // Load blog data for editing
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-2 text-center text-gray-500">No blogs available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
