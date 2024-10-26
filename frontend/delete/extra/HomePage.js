// components/HomePage.js
import React, { useState } from 'react';
import SearchBaar from './SearchBar';
import "./SearchBar.css";
import ShowList from './ShowList';

const HomePage = () => {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="home-page">
            <SearchBaar setSearchResults={setSearchResults} />
            <ShowList searchResults={searchResults} />
        </div>
    );
};

export default HomePage;
