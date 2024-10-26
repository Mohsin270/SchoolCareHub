import React from 'react';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import pic1 from './images/care1.jpeg';
import pic2 from './images/care2.jpg';
import daycare3 from './images/care3.jpeg';
import daycare2 from './images/care4.jpeg';
import daycare from './images/daycare2.jpeg';
import daycare1 from './images/daycare4.jpg';
import pic3 from './images/school2.jpg';
import school3 from './images/school3.jpg';
import school1 from './images/school4.jpg';
import school2 from './images/school5.jpg';
import school4 from './images/school6.jpg';

const Home = () => {

  // Data for top-rated schools and daycares
  const schools = [
    { id: 1, name: 'Greenwood High School', description: 'Excellence in education.', imageUrl: school1, rating: 4.8 },
    { id: 2, name: 'Sunrise Public School', description: 'All-round development.', imageUrl: school2, rating: 4.7 },
    { id: 3, name: 'Maple Leaf Academy', description: 'Creative learning.', imageUrl: school3, rating: 4.6 },
    { id: 4, name: 'Riverdale High', description: 'Academic and extracurricular success.', imageUrl: school4, rating: 4.5 }
  ];

  const daycares = [
    { id: 1, name: 'Star Daycare', description: 'Premier care institution.', imageUrl: daycare, rating: 4.9 },
    { id: 2, name: 'National Public Daycare', description: 'Holistic growth.', imageUrl: daycare1, rating: 4.8 },
    { id: 3, name: 'Maple Daycare', description: 'Creative and nurturing.', imageUrl: daycare2, rating: 4.7 },
    { id: 4, name: 'Riverdale Daycare', description: 'Success and care.', imageUrl: daycare3, rating: 4.6 }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="slider-container mt-1 relative w-full">
        <div id="carouselExampleIndicators" className="carousel slide relative bg-gray-900" data-bs-ride="carousel">
          <div className="carousel-indicators absolute bottom-0 flex justify-center p-0 mb-2">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden opacity-[70%]">
            <div className="carousel-item active relative float-left w-full">
              <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" src={pic1} alt="Slide 1" />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" src={pic2} alt="Slide 2" />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" src={pic3} alt="Slide 3" />
            </div>
          </div>
        </div>

        {/* Redesigned Search Bar */}
        <div className="absolute bottom-[20%] left-[40%] transform -translate-x-1/2 w-full max-w-[900px] px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-purple-700 mb-3">Find the Best<br /> Institutes Nearby</h2>
          <p className="text-base md:text-lg text-gray-200 font-serif mb-5 mx-4">
            Search for schools and daycares in your preferred location.
          </p>
          <Searchbar />
        </div>
      </div>

      {/* Top Rated Schools Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">Top Rated Schools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {schools.map((school) => (
              <div 
                key={school.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-2"
              >
                <img className="w-full h-48 object-cover" src={school.imageUrl} alt={school.name} />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-medium text-blue-600">{school.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2">{school.description}</p>
                  <p className="text-yellow-500 mt-1">Rating: {school.rating} ★</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Rated Daycares Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">Top Rated Daycares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {daycares.map((daycare) => (
              <div 
                key={daycare.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-2"
              >
                <img className="w-full h-48 object-cover" src={daycare.imageUrl} alt={daycare.name} />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-medium text-blue-600">{daycare.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mt-2">{daycare.description}</p>
                  <p className="text-yellow-500 mt-1">Rating: {daycare.rating} ★</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parents Reviews Section */}
      <div className="bg-white py-12 mt-4">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">What Parents Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic">"Amazing school with dedicated staff!"</p>
              <p className="mt-2 text-gray-800 font-bold">- Sarah M. </p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic">"Safe and nurturing environment."</p>
              <p className="mt-2 text-gray-800 font-bold">- Jolia D.</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic">"Clean and disciplined behaviour."</p>
              <p className="mt-2 text-gray-800 font-bold">- Ibrahim A.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-20 mt-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-600">School Registration</h3>
              <p className="mt-2 text-gray-600">Find the best schools in your area and register online.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-600">Daycare Finder</h3>
              <p className="mt-2 text-gray-600">Locate nearby daycares that fit your needs.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-600">School Finder</h3>
              <p className="mt-2 text-gray-600">Locate nearby schools that fit your needs.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
