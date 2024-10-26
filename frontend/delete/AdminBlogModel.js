import React, { useState } from 'react';

const AdminBlogModal = ({ isOpen, toggleModal, fetchBlogs }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState('image');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content, mediaUrl, mediaType, author: 'Admin' };

    try {
      const response = await fetch('http://localhost:5000/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        fetchBlogs();
        toggleModal();
        alert('your blog succesfully posted');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg"> 
        <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            className="border p-2 w-full mb-2"
            placeholder="Media URL"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
          />
          <select
            className="border p-2 w-full mb-4"
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
          <button className="bg-purple-600 text-white px-4 py-2 rounded" type="submit">
            Create
          </button>
        </form>
        <button className="mt-4" onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </div>
  ) : null;
};

export default AdminBlogModal;
