import React, { useState, useEffect } from "react";
import Panel from './Panel';
import axios from "axios";

const BlogM = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imgurl: '',
        mediaFile: null // Added for file upload
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Toggle modal visibility
    const blogpopup = () => {
        setModalOpen(!isModalOpen);
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setFormData({ ...formData, mediaFile: e.target.files[0] });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        if (formData.mediaFile) {
            formDataToSend.append('mediaFile', formData.mediaFile);
        }

        try {
            await axios.post('http://localhost:5000/api/blog', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' } // Set the content type
            });
            setModalOpen(false);  // Close modal after submission
            fetchBlogs();  // Refresh the blog list
        } catch (error) {
            console.error('Error creating blog post:', error);
            setError('An error occurred while creating the post. Please try again.');
        }
    };

    // Fetch blogs data    
    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/blog');
            setBlogData(response.data);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            setError('Failed to fetch blog posts.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch blogs on component mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="admin-container">
            <Panel />
            <div className='admin-main'>
                <div className="bg-gray-100 w-full h-36">
                    <h1 className="text-3xl text-blue-900 font-bold py-4 text-center">Admin Blog Management</h1>
                    <button onClick={blogpopup} className="bg-blue-700 hover:bg-blue-800 p-2.5 rounded mr-7 text-white float-right">Add new Blog</button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
                            <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="border p-2 w-full mb-2"
                                    placeholder="Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    className="border p-2 w-full mb-2"
                                    placeholder="Content"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="file"
                                    className="border p-2 w-full mb-2"
                                    name="mediaFile"
                                    accept="image/*,video/*" // Accepts both image and video files
                                    onChange={handleFileChange}
                                />
                                <button className="bg-blue-800 text-white px-4 py-2 rounded mt-4" type="submit">Create</button>
                                <button className="ml-5" type="button" onClick={blogpopup}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Blog List in Table Format */}
                <div className="p-6 bg-white">
                    <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
                    {loading ? (
                        <p>Loading blogs...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : blogData.length > 0 ? (
                        <table className="min-w-full bg-gray-200 border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-left bg-blue-950">Title</th>
                                    <th className="border px-4 py-2 text-left bg-blue-950">Description</th>
                                    <th className="border px-4 py-2 text-left bg-blue-950">Posted by</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogData.map((post) => (
                                    <tr key={post._id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{post.title}</td>
                                        <td className="border px-4 py-2">{post.description}</td>
                                        <td className="border px-4 py-2">Admin</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogM;
