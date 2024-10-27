import React from 'react';
import { Link } from 'react-router-dom';

const Panel = () => {
  return (
    <nav className="bg-blue-950 h-screen w-56 flex flex-col justify-between p-4">
      <div>
        <h2 className="text-center text-2xl text-yellow-100 font-bold mb-10 pb-2 border-b-4 border-red-700">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/admin/dashboard" 
              className="block text-white text-md px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/add-institute"
              className="block text-white text-md px-3 py-2 rounded hover:bg-indigo-950 transition duration-200">
              Add Institute
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/view-institutes" 
              className="block text-white text-md px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              View Institutes
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/verify-requests" 
              className="block text-white text-md px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Verify Requests
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/report-reviews" 
              className="block text-white text-md px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Report Reviews
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/blogM" 
              className="block w-48 text-white text-md px-3 py-2 rounded hover:bg-indigo-900 transition duration-200">
              Blog Management
            </Link>
          </li>
        </ul>
      </div>
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
