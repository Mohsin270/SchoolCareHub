import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons/SCH Logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-600 shadow-md">
      <div className="h-16 flex items-center justify-between py-1 md:p-3">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 ml-12">
          <img src={logo} alt="SchoolCareHub Logo" className="w-10 h-10 object-cover rounded-full" />
          <Link to="/" className="text-white text-2xl font-bold font-serif tracking-wide">SchoolCareHub</Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menu Items (visible on Desktop) */}
        <div className={`md:flex items-center space-x-8 ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto mb-4 mr-6`}>
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

          {/* Registration Dropdown (Desktop & Mobile) */}
          <div className="relative mt-4 md:mt-0">
            <button
              onClick={toggleDropdown}
              className="bg-red-500 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200"
            >
              Registration
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-300 rounded-t transition-colors duration-200"
                >
                  Users
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-300 rounded-b transition-colors duration-200"
                >
                  Institutes
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// 1- create empty Node
// 2- enter data
// 3- enter address (link)=>default=0
// 4- if empty, make head
// 5- else: traverse from head, and find 0 in address & then place address of new node.
