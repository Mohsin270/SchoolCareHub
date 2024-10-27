import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    category: 'School',    
    Name: '',  
    email: '',
    phone: '',
    location: '',   
    licenceNo: '',  
    schoolType: '',
    syllabusType: '',
    fee: '',
    rating: 1,
    religion: '',
    careType: '',   
    openingHours: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json' // Ensure content type is set
        }
      });

      // Check if the response status indicates success
      if (response.status === 200) { // Use response.status instead of response.ok
        console.log(response.data);
        alert('Great! You registered successfully!');
        navigate('/'); 
      } else {
        setError('Please enter valid data');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.msg : 'Server error occurred due to a logical reason');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-400">
      <div className="w-full max-w-6xl m-5 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-semibold text-center text-purple-900 my-9">Welcome, Register Your Institute</h2>
        {error && <p className="text-red-500 text-md text-center my-3">{error}</p>}
        <form onSubmit={handleSubmit}> 
          <div className="grid grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="School">School</option>
                <option value="ChildCare">ChildCare</option>
              </select>
            </div>

            {/* Conditional Rendering based on the selected category */}
            {formData.category === "ChildCare" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">Care Type</label>
                <select
                  name="careType"
                  value={formData.careType}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="PreSchooling">PreSchooling</option>
                  <option value="Special-care">Special Child Care</option>
                </select>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">School Type</label>
                  <select
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select School Type</option>
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                  </select>
                </div> 
                <div>
                  <label className="block text-sm font-medium text-gray-700">Syllabus Type</label>
                  <input
                    type="text"
                    name="syllabusType"
                    value={formData.syllabusType}
                    onChange={handleChange}
                    required
                    placeholder="Enter syllabus type"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </>
            )}
            
            {/* School/Daycare Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">School/Daycare Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                placeholder="Enter name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter location"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* License Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">License No</label>
              <input
                type="text"
                name="licenceNo"
                value={formData.licenceNo}
                onChange={handleChange}
                required
                placeholder="Enter license number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Fee</label>
              <input
                type="text"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                required
                placeholder="Enter fee"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Religion */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Religion</label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
                placeholder="Enter religion"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Opening Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Opening Hours</label>
              <input
                type="text"
                name="openingHours"
                value={formData.openingHours}
                onChange={handleChange}
                required
                placeholder="e.g., Mon-Fri, 8 AM - 5 PM"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <button type="submit" className="w-96 mt-5 ml-80 py-2.5 px-4 bg-purple-800 text-white rounded-md shadow-sm hover:bg-indigo-700">
            Register School
          </button>
        </form> 
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account? 
          <Link to="/" className="text-purple-800 hover:underline"> Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
