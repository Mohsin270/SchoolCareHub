import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import video1 from './images/care-video0.mp4';
import ceoPic from './images/phalesteen.jpeg';
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

            {/* CEO Message Section */}
            <section className="bg-white p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-lg shadow-lg border-t-4 border-red-500 max-w-5xl">
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

            {/* Website Tutorial Section */}
            <section className="bg-gray-100 p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-lg shadow-lg border-t-4 border-blue-500 max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Website Tutorial</h2>
                <div className="flex justify-center items-center gap-10 lg:gap-16">
                    <video controls className="w-full lg:w-2/3 h-auto max-h-80 border border-gray-300 rounded-lg shadow-lg">
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Business Partners Section */}
            <section className="bg-white p-10 md:p-16 lg:p-20 mx-auto my-10 rounded-lg shadow-lg border-t-4 border-green-500 max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Business Partners</h2>
                <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                    We proudly collaborate with some of the best organizations to bring you the best services.
                    Our partners play a vital role in our mission to deliver exceptional experiences to our clients.
                </p>
                <div className="flex flex-wrap justify-evenly items-center gap-6">
                    <img src={ceoPic} alt="Partner 1" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <img src={ceoPic} alt="Partner 2" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                    <img src={ceoPic} alt="Partner 3" className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shadow-lg transform hover:scale-105 transition duration-300" />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
