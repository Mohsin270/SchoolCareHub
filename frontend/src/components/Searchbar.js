import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
                console.log(response.data);
                navigate('/listing', { state: { data: response.data } });
            } else {
                navigate('/listing', { state: { data: response.data } });
                alert('No data found.');
            }
        } catch (err) {
            console.error(err);
            alert('Error fetching data.');
        }
    };

    return (
        <div>
            <form
            id="searchbar"
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row justify-between gap-4 bg-[rgba(148,167,169,0.311)] shadow-xl rounded-lg p-8"
            >
            <div className="input-group flex flex-col md:flex-row items-center w-full md:w-5/6">
                <input
                className="form-control w-full md:w-1/2 px-4 py-3 rounded-full border border-gray-300 text-gray-800 placeholder-gray-400
                focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:ring focus:ring-opacity-50 transition"
                type="search"
                placeholder="Enter Location 🔍"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
                <select
                className="form-select w-full md:w-1/3 px-4 py-3 bg-gray-100 rounded-full border border-gray-300
                focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:ring focus:ring-opacity-50 transition"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                <option value="">Select Institute Type</option>
                <option value="School">Schools</option>
                <option value="ChildCare">Daycares</option>
                </select>
            </div>
            <button
                className="w-full md:w-32 bg-purple-600 text-white font-serif py-3 rounded-lg hover:bg-purple-700 transition duration-300 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                type="submit"
            >
                Search
            </button>
            </form>
        </div>
    );
};

export default Searchbar;
