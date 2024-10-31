import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/icons/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();
   
  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-purple-600 shadow-md">
      <div className="flex items-center justify-between h-16 py-1 md:p-3">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 ml-4 md:ml-12">
          <img src={logo} alt="SchoolCareHub Logo" className="w-10 h-10 object-cover rounded-full" />
          <Link to="/" className="text-white text-2xl font-bold font-serif tracking-wide">SchoolCareHub</Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden mx-52 text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Items */}
        <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mb-4 md:mb-0 mr-6`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0 text-white mr-8">
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/">Home</Link>
            </li>
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/services">Services</Link>
            </li>
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/faqs">FAQ's</Link>
            </li>
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/abouts">About</Link>
            </li>
            <li>
              <Link className='pb-2 hover:border-b-2 hover:border-red-700 hover:text-yellow-400 transition-colors duration-200' to="/contacts">Contact</Link>
            </li>
          </ul>

          {/* Registration Dropdown */}
          <div className="mt-4 md:mt-0 flex space-x-2">
              <button
                  onClick={() => navigate('/login')}
                  className="bg-red-500 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200"
              >
                  Users
              </button>
              <button
                  onClick={() => navigate('/register')}
                  className="bg-red-500 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200"
              >
                  Institutes
              </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-600">
          <ul className="flex flex-col items-center text-white pb-4">
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/">Home</Link>
            </li>
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/services">Services</Link>
            </li>
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/blogs">Blogs</Link>
            </li>
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/faqs">FAQ's</Link>
            </li>
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/abouts">About</Link>
            </li>
            <li className="w-full text-center">
              <Link className='block py-2 hover:text-yellow-400' to="/contacts">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
