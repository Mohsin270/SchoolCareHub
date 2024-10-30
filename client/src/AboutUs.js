import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import video1 from './images/care-video0.mp4';
import ceoPic from './images/phalesteen.jpeg';
import p1 from './images/sl1.png';
import p2 from './images/sl2.jpg';
import p3 from './images/sl3.png';
import p4 from './images/sl4.jpg';
import p5 from './images/sl5.jpg';

const AboutUs = () => {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-16'>
              <h2 className='text-5xl font-bold text-white'>About US</h2>
              <p className='text-white mt-4 max-w-2xl mx-auto text-lg'>
                Learn more about our values, mission, and what drives us to deliver the best for our community.
              </p>
            </div>

            {/* Website Tutorial Section */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-800 p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-xl shadow-xl max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-6 text-white leading-tight">
                    Discover How to Use Our Platform
                </h2>
                <p className="text-lg text-center text-purple-200 mb-10 max-w-3xl mx-auto">
                    Watch our quick and easy tutorial to explore the features and benefits of SchoolCareHub. 
                    Learn how to find the best school or childcare services for your family.
                </p>
                <div className="flex justify-center items-center gap-10 lg:gap-16">
                    <div className="relative w-full lg:w-2/3 h-auto max-h-96 border-4 border-white rounded-lg shadow-2xl overflow-hidden">
                        <video controls className="w-full h-96 object-cover rounded-lg hover:scale-102 transition-transform duration-500 ease-in-out">
                            <source src={video1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        {/* <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-300"></div> */}
                    </div>
                </div>
            </section>

            {/* CEO Message Section */}
            <section className="bg-white p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-lg shadow-lg max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">CEO's Message</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
                    <img src={ceoPic} alt="CEO" className="w-72 lg:w-80 h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                    <p className="lg:w-1/2 text-lg text-justify text-gray-600 leading-relaxed">
                        Welcome to SchoolCareHub. Our mission is to create a supportive and enriching environment for children,
                        where they can grow, learn, and thrive. At SchoolCareHub, we believe that every child deserves the best
                        possible care and education. Our dedicated team works tirelessly to provide a safe, nurturing, and stimulating 
                        atmosphere that encourages curiosity and fosters a love of learning. Together, we can make a positive impact 
                        on their lives and future.
                    </p>
                </div>
            </section>

            {/* Business Partners Section */}
            <section className="bg-white p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-lg shadow-lg border-t-4 border-green-500 max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Business Partners</h2>
                <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                    We proudly collaborate with some of the best organizations to bring you the best services.
                    Our partners play a vital role in our mission to deliver exceptional experiences to our clients.
                </p>
                <div className="flex flex-wrap justify-evenly items-center gap-6">
                    <img src={p1} alt="Partner 1" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <img src={p2} alt="Partner 2" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <img src={p3} alt="Partner 3" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <img src={p4} alt="Partner 4" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    {/* <img src={p5} alt="Partner 5" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" /> */}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
