import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {
  const [isInstitutesOpen, setIsInstitutesOpen] = useState(false);
  const [isRequestsOpen, setIsRequestsOpen] = useState(false);

  // Toggle dropdowns
  const toggleInstitutes = () => setIsInstitutesOpen(!isInstitutesOpen);
  const toggleRequests = () => setIsRequestsOpen(!isRequestsOpen);

  return (
    <nav className="bg-blue-950 h-screen w-56 flex flex-col justify-between p-4">
      <div>
        <h2 className="text-center text-2xl text-yellow-100 font-bold mb-10 pb-2 border-b-4 border-red-700">Admin Portal</h2>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/admin/dashboard" 
              className="block text-white text-xl px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Dashboard
            </Link>
          </li>

          {/* Institutes Dropdown */}
          <li className="relative">
            <button
              onClick={toggleInstitutes}
              className="w-full flex justify-between items-center text-white text-xl px-3 py-2 rounded hover:bg-indigo-900 transition duration-200 text-left"
            >
              Institutes
              <span className="ml-2 text-gray-500">{isInstitutesOpen ? '▲' : '▼'}</span>
            </button>
            {isInstitutesOpen && (
              <div className="mt-2 ml-3 space-y-2">
                <Link 
                  to="/admin/view-institutes"
                  className="block text-white text-lg px-3 py-2 rounded hover:bg-indigo-900 transition duration-200"
                >
                  List of Institutes
                </Link>
                <Link 
                  to="/admin/add-institute" 
                  className="block text-white text-lg px-3 py-2 rounded hover:bg-indigo-900 transition duration-200"
                >
                  Add Institute
                </Link>
              </div>
            )}
          </li>

          {/* Requests Dropdown */}
          <li className="relative">
            <button
              onClick={toggleRequests}
              className="w-full flex justify-between items-center text-white text-xl px-3 py-2 rounded hover:bg-indigo-900 transition duration-200 text-left"
            >
              Requests
              <span className="ml-2 text-gray-500">{isRequestsOpen ? '▲' : '▼'}</span>
            </button>
            {isRequestsOpen && (
              <div className="mt-2 ml-3 space-y-2">
                <Link 
                  to="/admin/all-requests" 
                  className="block text-white text-lg px-3 py-2 rounded hover:bg-indigo-900 transition duration-200"
                >
                  All Requests
                </Link>
                <Link 
                  to="/admin/pending-requests" 
                  className="block text-white text-lg px-3 py-2 rounded hover:bg-indigo-900 transition duration-200"
                >
                  Pending Requests
                </Link>
                <Link 
                  to="/admin/verified-requests" 
                  className="block text-white text-lg px-3 py-2 rounded hover:bg-indigo-900 transition duration-200"
                >
                  Verified Requests
                </Link>
              </div>
            )}
          </li>

          {/* Individual Buttons for Reviews and Blogs */}
          <li>
            <Link 
              to="/admin/report-reviews" 
              className="block text-white text-xl px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Reviews
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/blogM" 
              className="block text-white text-xl px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div>
        <Link 
          to="/" 
          className="block text-white text-lg px-4 py-2 rounded hover:bg-red-700 bg-red-600 transition duration-300 text-center">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Panel;
