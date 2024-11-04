import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Searchbar = () => {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const R_URL = process.env.REACT_APP_API_URL;

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!location.trim() || !category.trim()) {
            alert("Please enter both location and category.");
            return;
        }
        try {
            const response = await axios.get(`${R_URL}/api/institutes/search`, {
                params: { location, category }
            });
            
            const data = response.data;
            navigate('/listing', { state: { data: data.length > 0 ? data : [] } });
            if (data.length === 0) {
                alert('No data found.');
            }
        } catch (err) {
            console.error("Error fetching data:", err);
            alert('There was an error fetching data. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-between bg-transparent shadow-lg p-4 transition duration-300 ease-in-out hover:shadow-xl">
            <div className="flex w-full md:w-3/4">
                {/* Location Input with rounded left border */}
                <input
                    type="search"
                    placeholder="Enter Location 🔍"
                    className="w-full md:w-1/2 px-4 py-2.5 rounded-l-full border border-gray-100 focus:outline-none focus:ring-purple-0 transition duration-300"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                {/* Category Select without rounded corners */}
                <select
                    className="appearance-none w-full md:w-1/2 px-4 py-2.5 rounded-r-full border-t border-b border-gray-100 text-gray-700 focus:outline-none focus:ring-purple-0 transition duration-300"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="School">School</option>
                    <option value="ChildCare">Daycare</option>
                </select>
            </div>

            <button
                type="submit"
                className="mt-2 md:mt-0 md:ml-4 px-12 py-2.5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
            >
                Search
            </button>
        </form>
    );
};

export default Searchbar;
