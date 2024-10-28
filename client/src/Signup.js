import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import c1 from "./images/care2.jpg";
const R_URL = process.env.REACT_APP_API_URL;

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const { name, email, password } = formData;

        if (!name) {
            setError('Name is required');
            return false;
        }
        if (!/^[A-Za-z\s]+$/.test(name)) {
            setError('Name should contain only letters and spaces');
            return false;
        }
        if (!email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            setError('Invalid email format');
            return false;
        }
        if (!password || password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        if (!validateForm()) return;
    
        try {
            const response = await fetch(`${R_URL}/api/auth/signup`, {  // Ensure endpoint is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert('Congrats! You are registered.');
                navigate('/login');
            } else {
                setError(data.msg || 'Signup failed');  // Access error message using `msg`
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred during signup');
        }
    };
    

    return (
        <div className="min-h-screen flex px-80 items-center bg-purple-400">
            <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Signup Form */}
                <div className="p-8 w-1/2">
                    <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Password (min 6 characters)"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input type="checkbox" required className="mr-2" />
                            <label className="text-sm">I agree to the Terms & Conditions</label>
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-sm text-center">
                        <p>Already have an account? <Link to="/login" className="text-blue-500 hover:text-purple-800">Sign in</Link></p>
                        <p className='mt-2'>Go to <Link to="/" className="text-blue-500">homepage</Link></p>
                    </div>
                </div>

                {/* Right Side - Social Signups */}
                <div className="w-1/2 relative">
                    <img src={c1} alt="Signup visual" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-4 p-8">
                        <h2 className="text-white text-lg font-semibold">Join Us Today!</h2>
                        <p className="text-gray-300 text-sm text-center">Create an account to explore exclusive features and connect with our community.</p>
                        <button className="bg-red-600 text-white mt-5 p-2 w-full rounded-full hover:bg-red-700">Sign up with Google</button>
                        <button className="bg-blue-800 text-white p-2 w-full rounded-full hover:bg-blue-900">Sign up with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
