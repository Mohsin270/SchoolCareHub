import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import pic1 from './images/care1.jpeg';
import pic2 from './images/care2.jpg';
import pic3 from './images/school2.jpg';
import daycare1 from './images/daycare4.jpg';
import daycare2 from './images/care4.jpeg';
import daycare3 from './images/care3.jpeg';
import school1 from './images/school4.jpg';
import school2 from './images/school5.jpg';
import school3 from './images/school6.jpg';
import daycare from './images/daycare2.jpeg';
import Searchbar from './components/Searchbar';

const Home = () => {

    // Data for top-rated schools and daycares
    const schools = [
        { id: 1, name: 'Greenwood High School', description: 'Excellence in education.', imageUrl: school1, rating: 4.8 },
        { id: 2, name: 'Sunrise Public School', description: 'All-round development.', imageUrl: school2, rating: 4.7 },
        { id: 3, name: 'Maple Leaf Academy', description: 'Creative learning.', imageUrl: school3, rating: 4.6 },
        { id: 4, name: 'Riverdale High', description: 'Academic and extracurricular success.', imageUrl: daycare3, rating: 4.5 }
    ];

    const daycares = [
        { id: 1, name: 'Star Daycare', description: 'Premier care institution.', imageUrl: daycare, rating: 4.9 },
        { id: 2, name: 'National Public Daycare', description: 'Holistic growth.', imageUrl: daycare1, rating: 4.8 },
        { id: 3, name: 'Maple Daycare', description: 'Creative and nurturing.', imageUrl: daycare2, rating: 4.7 },
        { id: 4, name: 'Riverdale Daycare', description: 'Success and care.', imageUrl: daycare3, rating: 4.6 }
    ];

    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full mt-1">
                <div id="carouselExampleIndicators" className="carousel slide relative bg-gray-900" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full overflow-hidden opacity-[60%]">
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

                {/* Search Bar */}
                <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-[900px] px-4">
                    <h2 className="md:text-6xl font-semibold text-blue-100 md:mb-20">Find the Best Institutes Nearby</h2>
                    <Searchbar />
                </div>
            </div>

            {/* Curved Section for Top Rated Schools */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto text-center px-4" >
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

            {/* Curved Section for Top Rated Daycares */}
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

            <Footer />
        </div>
    );
};

export default Home;
