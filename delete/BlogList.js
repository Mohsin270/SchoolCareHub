// components/BlogList.js
import React, { useEffect, useState } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="bg-white shadow-lg p-4 mb-6 rounded">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.content}</p>
            {post.mediaUrl && post.mediaType === 'image' && (
              <img src={post.mediaUrl} alt={post.title} className="w-full h-auto" />
            )}
            {post.mediaUrl && post.mediaType === 'video' && (
              <video controls className="w-full h-auto">
                <source src={post.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogList;
