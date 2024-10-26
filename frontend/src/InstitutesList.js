import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Footer from './components/footer';

const InstituteCard = ({ institute }) => (
  <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="institute-header">
      <h3 className="text-lg font-semibold">{institute.Name}</h3>
      <div className="text-gray-600">
        <span>{institute.location}</span> • <span>{institute.schoolType}</span> •{' '}
        <span>{institute.syllabusType}</span> • <span>Ranking: {institute.rating}</span>
      </div>
      <p className="text-gray-700">This institute is near your location.</p>
      <div className="text-gray-600">
        <span>Students: 120</span> •{' '}
        {/* <span>Student-teacher ratio: {institute.ratio}</span> */}
      </div>
    </div>
    <div className="institute-actions mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        <Link to="/viewProfile">View Profile</Link>
      </button>
    </div>
  </div>
);

const FilterSection = () => (
  <section className="w-64 px-6 bg-gray-100 border-r border-gray-300 pt-12">
    <h2 className="font-bold text-lg mb-2">Institute Type</h2>
    <div className='flex flex-col mb-4'>
      <label className='flex items-center'>
        <input type="radio" id="public" name="institute-type" defaultChecked className="mr-2" />
        Public
      </label>
      <label className='flex items-center'>
        <input type="radio" id="private" name="institute-type" className="mr-2" />
        Private
      </label>
    </div>

    <h2 className="font-bold text-lg mb-2">Grade Level</h2>
    <div className='flex flex-col mb-4'>
      {["Pre-K", "Elementary", "Middle", "High School"].map((grade) => (
        <label key={grade} className='flex items-center'>
          <input type="checkbox" id={grade} className="mr-2" />
          {grade}
        </label>
      ))}
    </div>

    <h2 className="font-bold text-lg mb-2">Select by Rating</h2>
    <select className="mb-4 border border-gray-300 rounded py-2 px-4 w-full">
      <option value="">Any Rating...</option>
      {[5, 4, 3, 2, 1].map((star) => (
        <option key={star} value={`${star} star`}>{`${star} star rating`}</option>
      ))}
    </select>

    <h2 className="font-bold text-lg mb-2">Distance</h2>
    <select className="mb-4 border border-gray-300 rounded py-2 px-3 w-full">
      <option value="">Near by me...</option>
      {[200, 500, 700, 1000, 2000].map((meter) => (
        <option key={meter} value={meter}>{`${meter} meters`}</option>
      ))}
    </select>

    <div className="flex flex-col mt-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 mb-2">
        Apply Filters
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200">
        Reset Filters
      </button>
    </div>
  </section>
);

const InstitutesList = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="flex min-h-[100vh]">
        <FilterSection />
        <div className="flex-grow flex flex-col gap-4 p-20">
          {data && data.length > 0 ? (
            data.map((institute, index) => <InstituteCard key={index} institute={institute} />)
          ) : (
            <div className="bg-gray-200 flex justify-center items-center h-48 rounded-lg">
              <p className="text-gray-700">No institutes found</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstitutesList;
