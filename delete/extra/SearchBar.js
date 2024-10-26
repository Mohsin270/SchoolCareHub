// components/SearchBar.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setSearchResults }) => {
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/institutes/search', {
                params: { type, location }
            });
            setSearchResults(response.data);
        } catch (err) {
            console.error(err);
            alert('Error fetching data.');
        }
    };

    return (
        <div className="search-bar">
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Select Type</option>
                <option value="school">School</option>
                <option value="daycare">Daycare</option>
                {/* Add more options as needed */}
            </select>
            <input 
                type="text" 
                placeholder="Enter Location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
