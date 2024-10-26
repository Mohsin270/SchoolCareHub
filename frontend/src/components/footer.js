import { faFacebookSquare, faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2a2e32] w-full py-12 px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4 text-center">
          <h4 className="w-40 text-[#ccc] mb-4 text-xl font-serif border-b-2 border-purple-600 pb-2 mx-auto">Useful Links</h4>
          <p className="text-justify leading-relaxed">
            Welcome to SchoolCareHub. Our mission is to create a supportive and enriching environment for children,
            where they can grow, learn, and thrive. At SchoolCareHub, we believe that every child deserves the best
            possible care and education.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4 text-center">
          <h4 className="w-40 text-[#ccc] mb-4 text-xl font-serif border-b-2 border-purple-600 pb-2 mx-auto">Useful Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
            <li><Link to="/blogs" className="text-gray-400 hover:text-white transition">Blogs</Link></li>
            <li><Link to="/faqs" className="text-gray-400 hover:text-white transition">FAQ's</Link></li>
            <li><Link to="/abouts" className="text-gray-400 hover:text-white transition">About</Link></li>
            <li><Link to="/contacts" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Centered Contact Us Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 px-4 h-52 text-center">
          <h4 className="w-40 text-[#ccc] mb-4 text-xl font-serif border-b-2 border-purple-600 pb-2 mx-auto">Contact Us</h4>
          <div className=" space-y-2">
            <p><strong>Email:</strong> <a href="mailto:schoolcarehub@gmail.com" className="text-gray-400 hover:text-white transition">schoolcare@gmail.com</a></p>
            <p className=''><strong>Cell:</strong> <a href="tel:03171619909" className="text-gray-400 hover:text-white transition">0312 1234567</a></p>
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-blue-600 cursor-pointer hover:opacity-80 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-white cursor-pointer hover:opacity-80 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-600 cursor-pointer hover:opacity-80 transition" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500 cursor-pointer hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-white text-sm">
            &copy; 2024 SchoolCareHub | All Rights Reserved by{' '}
            <Link to="/" className="text-red-600 hover:text-purple-500 transition">Developers</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
