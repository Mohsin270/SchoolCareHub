import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Searchbar = () => {
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!location || !category) {
            alert("Please enter both location and category");
            return;
        }
        try {
            const response = await axios.get('http://localhost:5000/api/register/search', {
                params: { location, category }
            });
            if (response.data.length > 0) {
                navigate('/listing', { state: { data: response.data } });
            } else {
                alert('No data found.');
                navigate('/listing', { state: { data: [] } }); // Send empty array if no data found
            }
        } catch (err) {
            console.error(err);
            alert('Error fetching data.');
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-between bg-transparent shadow-lg p-4 transition duration-300 ease-in-out hover:shadow-xl">
        <input
            type="search"
            placeholder="Enter Location 🔍"
            className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
        <select
            className="mt-2 md:mt-0 md:ml-4 flex-shrink-0 px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
            <option value="">Select Category</option>
            <option value="School">School</option>
            <option value="ChildCare">Daycare</option>
        </select>
        <button
            type="submit" onClick={'/listing'}
            className="mt-2 md:mt-0 md:ml-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
            Search
        </button>
    </form>
    );
};

export default Searchbar;
