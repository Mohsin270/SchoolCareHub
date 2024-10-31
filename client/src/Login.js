// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFacebook, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import lg from './images/icons/logo.jpg';
import g from './images/icons/google.jpg';
import lp from './images/design3.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const R_URL = process.env.REACT_APP_API_URL;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${R_URL}/api/users/login`, {
            email,
            password,
            userRole,
        });

        const { token, user } = response.data;

        // Store the token and user info securely in local storage
        if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // Navigate based on the user role
            if (user.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        } else {
            throw new Error('Authentication failed: No token received');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        setErrorMessage(error.response?.data.msg || 'Login failed. Please check your credentials.');
    }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-6 md:p-8 lg:p-10">
          <div className="flex items-center mb-6">
            <img src={lg} alt="SchoolCare Logo" className="w-6 h-6 mr-2" />
            <h1 className="text-xl font-serif text-purple-600"><Link to={'/'}>SchoolCare</Link></h1>
          </div>
          <h2 className="text-2xl font-bold mb-2">Log in to your Account</h2>
          <p className="text-gray-500 text-sm mb-4">Welcome back! Select a method to log in:</p>
          
          {/* Social Login Buttons */}
          <div className="flex space-x-3 mb-3">
            <button className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
              <img src={g} alt="Google Icon" className="w-4 h-4 mr-1" />
              <Link to={'/'}>Google</Link>
            </button>
            <button className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 text-sm">
              <FaFacebook className="w-4 h-4 mr-1 text-blue-400" />
              <Link to={'/'}>Facebook</Link>
            </button>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-400 text-xs my-3">--------------or continue with email-------------------</div>
          
          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-xs text-center mb-4">{errorMessage}</p>}
          
          {/* Email and Password Input */}
          <form onSubmit={handleLogin}>
            {/* Email Field with Icon */}
            <div className="mb-3 relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Field with Icon and Eye Button */}
            <div className="mb-3 relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-600 text-xs">
                <input type="checkbox" className="form-checkbox text-blue-600 mr-1" />
                Remember me
              </label>
              <Link to={'/'} className="text-blue-600 text-xs hover:underline">Forgot Password?</Link>
            </div>
            
            {/* Login Button */}
            <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md text-sm hover:bg-blue-700">
              Log in
            </button>
          </form>
          
          {/* Create Account Link */}
          <p className="text-center text-gray-600 text-xs mt-3">
            Don’t have an account? <Link to={'/signup'} className="text-blue-600 hover:underline">Create an account</Link>
          </p>
        </div>
        
        {/* Right Side - Graphic and Description */}
        <div className="w-1/2 bg-purple-700 text-white p-6 md:p-6 flex flex-col justify-between">
          <div className="mt-16">
            <img src={lp} alt="Application Icons" className="w-1/2 md:w-5/6 mx-auto rounded-full" />
          </div>
          <div className='text-center mb-2'>
            <h3 className="text-md font-semibold mb-2 font-serif">Connect with every institute.</h3>
            <p className="text-gray-900 text-sm">
              Everything you need in a friendly centralized platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
