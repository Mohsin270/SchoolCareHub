import React from "react";
import "./AdminPanel.css"; // Custom CSS for styling
import Panel from "./Panel";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa"; // Import icons for buttons

const ViewInstitutes = () => {
  return (
    <div className="admin-container">
      <Panel />

      <div className="admin-main p-6 bg-gray-100">
        <div className="view-container">
          <div className="header flex items-center justify-between mb-6">
          <div className="py-12 bg-gray-100">
            <h2 className="text-center text-4xl text-blue-900 font-bold">Institutes list</h2>
          </div>
            <div className="search-filter flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Search institutes..." 
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                <FaSearch />
              </button>
            </div>
          </div>

          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-3 px-6 font-semibold text-gray-600">Name</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Contact</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Location</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Type</th>
                <th className="py-3 px-6 font-semibold text-gray-600 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 border-b border-gray-200">
                <td className="py-4 px-6 text-gray-700">Phillips Exeter Academy</td>
                <td className="py-4 px-6 text-gray-700">(603) 772-3437</td>
                <td className="py-4 px-6 text-gray-700">Exeter, NH</td>
                <td className="py-4 px-6 text-gray-700">Private</td>
                <td className="py-4 px-6 text-center flex justify-center space-x-2">
                  <button className="btn-edit bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-150">
                    <FaEdit />
                  </button>
                  <button className="btn-delete bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-150">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
              {/* Additional rows would be mapped here */}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination flex justify-end items-center mt-4 space-x-1">
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Previous</button>
            <span className="text-gray-600">Page 1 of 5</span>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInstitutes;
