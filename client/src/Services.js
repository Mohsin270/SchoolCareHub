import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <Navbar />

            <div className="relative">
                {/* Hero Section */}
                <div className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-16'>
                    <h2 className='text-5xl font-bold text-white'>Our Services</h2>
                    <p className='text-white mt-4 max-w-2xl mx-auto text-lg'>
                        SchoolCareHub is designed to be a centralized platform for families to find schools, childcare facilities, and special needs centers in their area.
                    </p>
                </div>

                {/* Purpose Section */}
                <section className="max-w-7xl mx-auto px-4 py-12">
                    <h2 className="text-3xl font-serif text-center font-bold mb-8 text-purple-700">Our Mission</h2>
                    <p className="w-1/2 text-lg text-center mx-auto text-gray-700 mb-6">
                        We aim to streamline the process of finding quality educational and childcare services. Get detailed insights to help you find the best fit for your child's needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Service Card 1: Daycares */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                            <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">Daycares</h3>
                            <p className="mt-2">
                                Find quality daycare facilities that provide a nurturing environment for young children, ensuring safety, learning, and fun.
                            </p>
                            <Link to="/services/daycares" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                                Learn More
                            </Link>
                        </div>

                        {/* Service Card 2: Special Childcare Centers */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                            <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">Special Childcare Centers</h3>
                            <p className="mt-2">
                                Discover centers that offer specialized care and educational programs for children with special needs, focusing on support and growth.
                            </p>
                            <Link to="/services/special-childcare" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                                Learn More
                            </Link>
                        </div>

                        {/* Service Card 3: Pick the Right School */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                            <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">Pick the Right School</h3>
                            <p className="mt-2">
                                Our platform assists in finding the ideal school for your child by comparing ratings, activities, facilities, and location.
                            </p>
                            <Link to="/services/right-school" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-gpurple-700 transition">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Service Highlights Section */}
                <section className="my-20 py-20 bg-gray-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-purple-700">Why Choose SchoolCareHub?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
                                <h3 className="text-xl font-semibold text-center">Location-Based Search</h3>
                                <p className="mt-3 px-2.5">
                                    Easily find nearby childcare and educational facilities based on your location.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
                                <h3 className="text-xl font-semibold text-center">Verified Reviews & Ratings</h3>
                                <p className="mt-3 px-2.5">
                                    Access genuine ratings to understand the quality of services and parent satisfaction.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
                                <h3 className="text-xl font-semibold text-center">Activity & Event Updates</h3>
                                <p className="mt-3 px-2.5">
                                    Stay informed about the latest activities, events, and programs offered by facilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-gray-100 py-12 mt-20">
                  <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-8 text-purple-700">What Parents Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">"SchoolCareHub has been a blessing for my child. The environment is nurturing and supportive!"</p>
                        <h4 className="mt-4 font-semibold">- Sarah K.</h4>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">"The after-school programs have helped my son develop socially and academically."</p>
                        <h4 className="mt-4 font-semibold">- John D.</h4>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="italic">"The tutors at SchoolCareHub are fantastic! My daughter is thriving!"</p>
                        <h4 className="mt-4 font-semibold">- Emily R.</h4>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Navigation Links for FAQs and Contact Us */}
                <section className="py-20 text-center mt-12">
                  <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif mb-4">Need More Information?</h2>
                    <p>If you have any questions, feel free to check out our:</p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <Link to="/faqs" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                        Frequently Asked Questions
                      </Link>
                      <Link to="/blogs" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                        Blogs
                      </Link>
                    </div>
                  </div>
                </section>
            </div>
            <Footer />
        </div>
  );
};

export default Services;
