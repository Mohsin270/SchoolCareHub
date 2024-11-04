import React, { useEffect, useState, useMemo } from "react";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";
import Panel from "./Panel";
import axios from "axios";

const InstituteList = () => {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // API URL should be stored in a `.env` file for security and flexibility
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/institutes`);
        console.log(response.data); // Log response data for debugging
        setInstitutes(response.data);
      } catch (err) {
        setError("Failed to fetch institutes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchInstitutes();
  }, [API_URL]);

  // Memoize the filtered results to avoid unnecessary recalculations
  const filteredInstitutes = useMemo(() => {
    return institutes.filter((institute) =>
      institute.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [institutes, searchTerm]);

  const handleEdit = (id) => {
    alert(`Edit institute with ID: ${id}`);
    // Navigate to edit page or open edit modal
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/institutes/${id}`);
      setInstitutes(institutes.filter((institute) => institute._id !== id));
    } catch (error) {
      console.error("Failed to delete institute:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="admin-container">
      <Panel />

      <div className="admin-main p-6 bg-gray-100 min-h-screen">
        <div className="view-container">
          <div className="header flex items-center justify-between mb-6">
            <h2 className="text-4xl text-blue-900 font-bold text-center py-4">
              Institutes List
            </h2>

            <div className="search-filter flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search institutes..."
                className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md">
                <FaSearch />
              </button>
            </div>
          </div>

          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="py-3 px-8 font-semibold text-gray-600">Name</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Contact</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Location</th>
                <th className="py-3 px-6 font-semibold text-gray-600">Type</th>
                <th className="py-3 px-6 font-semibold text-gray-600 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {institutes.length > 0 ? (
                institutes.map((institute) => (
                  <tr
                    key={institute._id}
                    className="hover:bg-gray-100 border-b border-gray-200"
                  >
                    <td className="py-4 px-6 text-gray-700">{institute.Name}</td>
                    <td className="py-4 px-6 text-gray-700">{institute.phone}</td>
                    <td className="py-4 px-6 text-gray-700">{institute.location}</td>
                    <td className="py-4 px-6 text-gray-700">{institute.category}</td>
                    <td className="py-4 px-6 text-center flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(institute._id)}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-150"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(institute._id)}
                        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-150"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-6 text-center text-gray-500">
                    No institutes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination (placeholder - customize as needed) */}
          <div className="pagination flex justify-end items-center mt-4 mr-4 space-x-1">
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              Previous
            </button>
            <span className="text-gray-600">Page 1 of 1</span>
            <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteList;
