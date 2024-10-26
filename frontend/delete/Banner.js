// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import pic3 from '../images/daycare5.jpg';
// import pic1 from '../images/school1.webp';
// import pic2 from '../images/school2.jpg';
// import "./home.css";

// const Search = ({ setSearchResults}) => {
//     const [location, setLocation] = useState('');
//     const [category, setCategory] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get('http://localhost:5000/api/institutes/search', {
//                 params: { location, category }
//             });
//             if (response.data.length > 0) {
//                 setSearchResults(response.data);
//                 console.log(response.data);
//                 navigate('/listing', { state: { setSearchResults } });
//                 alert('data found');
//             } else {
//                 alert('No data found.');
//             }
//         } catch (err) {
//             console.error(err);
//             alert('Error fetching data.');
//         }
//     };

//     return (
//         <div className="slider-container">
//             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={pic1} className="d-block w-100" alt="Slide 1" style={{ height: '600px', objectFit: 'cover', opacity: 0.7 }} />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={pic2} className="d-block w-100" alt="Slide 2" style={{ height: '600px', objectFit: 'cover', opacity: 0.7 }} />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={pic3} className="d-block w-100" alt="Slide 3" style={{ height: '600px', objectFit: 'cover', opacity: 0.7 }} />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             <form id="searchbar" onSubmit={handleSearch}>
//                 <div className="input-group">
//                     <input
//                         className="form-control"
//                         type="search"
//                         placeholder="Search by Location"
//                         aria-label="Search"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                     />

//                     <select
//                         className="form-select"
//                         aria-label="Dropdown"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         <option value="">Choose Institute</option>
//                         <option value="school">Schools</option>
//                         <option value="daycare">Daycares</option>
//                     </select>
//                 </div>

//                 <div>
//                 <button className="medium-btn" type="submit">Search</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Search;


import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './listofinst.css';

const SearchPage = () => {
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
            const response = await axios.get('http://localhost:5000/api/institutes/search', {
                params: { location, category }
            });

            if (response.data.length > 0) {
                navigate('/results', { state: { data: response.data } });
            } else {
                alert("No data found.");
            }
        } catch (error) {
            console.error("Error fetching data", error);
            alert("Error fetching data.");
        }
    };

    return (
        <div className="searchbar-container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="school">School</option>
                    <option value="daycare">Daycare</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

const ResultsPage = () => {
    const location = useLocation();
    const { data } = location.state || {};

    const [showFilter, setShowFilter] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    
    const toggleFilter = () => {
      setShowFilter(!showFilter);
    };
    return (
    <>
        <div>
             <section className='filter-section'>
        <div className="filter-toggle">
          <button onClick={toggleFilter}>Apply Filters</button>
        </div>
      {showFilter && (
        <div className="filter-container">
          <h2>Institute type</h2  >
         <div className='f-type'>
          <div>
            <input type="radio" id="public" name="institute-type" defaultChecked />
            <label htmlFor="public">Public</label>
          </div>
          <div>
            <input type="radio" id="private" name="institute-type" />
            <label htmlFor="private">Private</label>
          </div>
         </div>

          <h2>Grade level</h2>
         <div className='f-type'>
          <div>
            <input type="checkbox" id="pre-k" />
            <label htmlFor="pre-k">Pre-K</label>
          </div>
          <div>
            <input type="checkbox" id="elementary" />
            <label htmlFor="elementary">Elementary</label>
          </div>
          <div>
            <input type="checkbox" id="middle" />
            <label htmlFor="middle">Middle</label>
          </div>
          <div>
            <input type="checkbox" id="high-school" />
            <label htmlFor="high-school">High school</label>
          </div>
         </div>

          <h2>Select by Rating</h2>
         <div className='f-type'>
          <select>
            <option value="">Any Rating...</option>
            <option value="">5 star rating</option>
            <option value="">4 star rating</option>
            <option value="">3 star rating</option>
            <option value="">2 star rating</option>
            <option value="">1 star rating</option>
          </select>
         </div>

          <h2>Distance</h2>
         <div className='f-type'>
          <select>
            <option value="">Near by me...</option>
            <option value="">5 Miles</option>
            <option value="">10 Miles</option>
            <option value="">20 Miles</option>
            <option value="">40 Miles</option>
            <option value="">60 Miles</option>
          </select>
         </div>

        </div>
      )}
      </section>
        </div>
        <div className="listing-container">
            {data && data.length > 0 ? (
                data.map((institute, index) => (
                    <div key={index} className="institute-card">
                        <h3>{institute.name}</h3>
                        <p>{institute.location}</p>
                        <p>{institute.type}</p>
                        {/* Add other fields you want to display */}
                    </div>
                ))
            ) : (
                <p>No institutes found.</p>
            )}
        </div>
    </>
    );
};

export { ResultsPage, SearchPage };

