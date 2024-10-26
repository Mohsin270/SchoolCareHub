import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import c1 from "./images/care1.jpeg"; // Background image

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
        const { email, password } = formData;

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
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Logged in successfully!');
                navigate('/');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred during login');
        }
    };

    return (
        <div 
            className="min-h-screen flex justify-center items-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${c1})` }} // Background image
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="border-b-4 border-red-700 mx-20 pb-2 italic text-3xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
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
                            placeholder="Your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-sm text-center">
                    <p className='mt-5'>Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-purple-800">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;


/* Left Side -  
//->    <div className="w-2/4 min-h-full flex justify-center bg-white shadow-lg rounded-lg overflow-hidden">
<div className="w-1/2 relative">
<img src={c1} alt="Signup visual" className="object-cover w-full h-full" />
<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-4 p-8">
    <h2 className="text-white text-lg font-semibold">Join Us Today!</h2>
    <p className="text-gray-300 text-sm text-center">Create an account to explore exclusive features and connect with our community.</p>
</div>
</div>
            
>>right side >> <div className="p-8 w-1/2">
              
*/