import React from 'react';
import blogImage1 from "./images/care1.jpeg"; // Update with your images
import blogImage2 from "./images/school2.jpg";
import blogImage3 from "./images/school3.jpg";
import blogImage4 from "./images/school4.jpg";
import Slider from 'react-slick';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
    // Slider settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    
  return (
    <div>
      <Navbar />
      
      <div className="relative">
        {/* Hero Section */}
        <div className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-16'>
          <h2 className='text-5xl font-bold text-white'>Services</h2>
          <p className='text-white mt-4 max-w-2xl mx-auto text-lg'>
            Discover valuable insights, tips, and resources for school and child care services in your area. Stay informed with our latest articles!
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-serif text-center font-bold mb-8 text-purple-700">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">Early Childhood Education</h3>
              <p className="mt-2">
                We provide a nurturing environment for children aged 3-5, focusing on holistic development through play-based learning.
              </p>
              <Link to="/services" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                Learn More
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">After School Programs</h3>
              <p className="mt-2">
                Our after school programs offer a safe and engaging environment for children to learn and grow through various activities.
              </p>
              <Link to="/services" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                Learn More
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold border-b-2 border-gray-400 pb-2">Tutoring Services</h3>
              <p className="mt-2">
                We offer personalized tutoring sessions to help children excel academically, tailored to their unique needs.
              </p>
              <Link to="/services" className="mt-4 block text-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights Section */}
      <section className="my-20 py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-8 text-purple-700">Service Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Highlight 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold text-center">Interactive Learning</h3>
              <p className="mt-3 px-2.5">
                We incorporate technology and hands-on activities to enhance learning experiences.
              </p>
            </div>
            {/* Highlight 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold text-center">Qualified Educators</h3>
              <p className="mt-3 px-2.5">
                Our dedicated staff are trained professionals passionate about child development.
              </p>
            </div>
            {/* Highlight 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-semibold text-center">Flexible Scheduling</h3>
              <p className="mt-3 px-2.5">
                We offer flexible program timings to accommodate the busy schedules of families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-8">What Parents Say</h2>
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
            <Link to="/faqs" className="bg-[#2a2e32] text-white py-2 px-4 rounded hover:bg-gray-700 transition">
              Frequently Asked Questions
            </Link>
            <Link to="/contacts" className="bg-[#2a2e32] text-white py-2 px-4 rounded hover:bg-gray-700 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
