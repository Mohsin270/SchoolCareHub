// components/ShowList.js

import React from 'react';

const ShowList = ({ searchResults }) => {
    return (
        <div className="show-list">
            {searchResults.length > 0 ? (
                searchResults.map((institute) => (
                    <div key={institute._id} className="institute-card">
                        <h2>{institute.name}</h2>
                        <p>Type: {institute.type}</p>
                        <p>Location: {institute.location}</p>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default ShowList;
