// frontend/src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaFacebook, FaGoogle} from 'react-icons/fa';
import lg from './images/icons/logo.jpg'; // Logo for branding
import sfp from './images/icons/boy.jpg';

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form validation function
    const validateForm = () => {
        const { name, email, password } = formData;
        if (!name) return "Name is required";
        if (!/^[A-Za-z\s]+$/.test(name)) return "Name should contain only letters and spaces";
        if (!email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) return "Invalid email format";
        if (!password || password.length < 6) return "Password must be at least 6 characters long";
        return null;
    };

    const R_URL = process.env.REACT_APP_API_URL;

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const response = await axios.post(`${R_URL}/api/users/signup`, formData);
            alert('Signup successful!');
            navigate('/');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.msg);
            } else {
                setError('An error occurred during signup');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg flex overflow-hidden">
                {/* Left Side - Signup Options */}
                <div className="w-1/2 bg-purple-700 text-white p-4 flex flex-col justify-between">
                    <div className='py-0 px-4'>
                        <img src={sfp} alt='photoo' className='w-72 h-72 opacity-90 rounded-full' />
                    </div>
                    <div className='mb-4'>
                        <div className='text-center mb-4'>
                            <h3 className="text-md font-semibold mb-3 font-serif">Join the SchoolCare Community.</h3>
                            <p className="text-gray-200 text-sm">
                                Everything you need in a friendly centralized platform.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-3 px-6">
                            <button className="flex items-center justify-center bg-red-600 text-white p-2.5 rounded transition hover:bg-blue-700">
                                <FaGoogle className="w-4 h-4 mr-3 text-yellow-400" />
                                <Link to={'/'}>Sign up with Google</Link>
                            </button>
                            <button className="flex items-center justify-center bg-blue-600 text-white p-2.5 rounded transition hover:bg-blue-700">
                                <FaFacebook className="w-4 h-4 mr-3 text-blue-100" />
                                <Link to={'/'}>Sign up with Facebook</Link>
                            </button>
                        </div>
                    </div>
                </div>


                {/* Right Side - Signup Form */}
                <div className="w-1/2 p-6 md:p-8 lg:p-10">
                    <div className="flex items-center mb-6">
                        <img src={lg} alt="SchoolCare Logo" className="w-6 h-6 mr-2" />
                        <h1 className="text-xl font-serif text-purple-600"><Link to={'/'}>SchoolCare</Link></h1>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
                    <p className="text-gray-500 text-sm mb-4">Please fill in the details below:</p>
                    
                    {/* Error Message */}
                    {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
                    
                    {/* Signup Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Link to Login Page */}
                    <p className="text-center text-gray-600 text-xs mt-3">
                        Already have an account? <Link to={'/login'} className="text-blue-600 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
