import React, { useState } from 'react';
import Slider from 'react-slick';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import blogImage1 from './images/care1.jpeg';
import blogImage2 from './images/school2.jpg';
import blogImage3 from './images/school3.jpg';
import blogImage4 from './images/school4.jpg';
import blogImage5 from './images/school5.jpg'; // Add more images as needed
import { Link } from 'react-router-dom';

// Import the necessary CSS for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
  // Blog data
  const blogs = [
    {
      id: 1,
      title: 'Top 5 Child Care Tips for Parents',
      image: blogImage1,
      description: 'Learn the essential tips that can help you navigate child care and support your child\'s growth and development.',
      link: '/blog/child-care-tips',
    },
    {
      id: 2,
      title: 'Understanding Early Childhood Education',
      image: blogImage2,
      description: 'Discover the importance of early childhood education and how it can benefit your child\'s development.',
      link: '/blog/early-childhood-education',
    },
    {
      id: 3,
      title: 'How to Support Your Childs Learning at Home',
      image: blogImage3,
      description: 'Explore effective strategies to support your child\'s learning and development right from home.',
      link: '/blog/support-learning-at-home',
    },
    {
      id: 4,
      title: 'Choosing the Right School for Your Child',
      image: blogImage4,
      description: 'Selecting the right school is crucial for your child\'s development. Explore our tips and considerations to make an informed decision.',
      link: '/blog/choosing-the-right-school',
    },
    {
      id: 5,
      title: 'The Importance of Communication in Child Care',
      image: blogImage5,
      description: 'Learn how effective communication can enhance the child care experience for both parents and providers.',
      link: '/blog/importance-of-communication',
    },
    // Add more blogs as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show navigation arrows
  };

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100'>

        {/* Header Section with Slider */}
        <header className='w-full h-96 relative'>
          <Slider {...settings}>
            <div>
              <img src={blogImage1} alt='Slider Image 1' className='w-full h-96 object-cover' />
            </div>
            <div>
              <img src={blogImage2} alt='Slider Image 2' className='w-full h-96 object-cover' />
            </div>
            <div>
              <img src={blogImage3} alt='Slider Image 3' className='w-full h-96 object-cover' />
            </div>
            <div>
              <img src={blogImage4} alt='Slider Image 4' className='w-full h-96 object-cover' />
            </div>
          </Slider>
          <div className='absolute inset-0 bg-gray-800 bg-opacity-60 flex flex-col justify-center items-center'>
            <h1 className='text-white text-5xl font-bold mb-4'>School & Child Care Blog</h1>
            <p className='text-purple-200 text-xl max-w-2xl text-center'>
              Discover valuable insights, tips, and resources for school and child care services in your area. Stay informed with our latest articles!
            </p>
          </div>
        </header>

        {/* Highlighted Blog Section */}
        <section className='w-5/6 my-20 mx-auto '>
          <div className='text-center mb-8'>
            <h2 className='text-4xl font-bold text-gray-800'>Latest Blog</h2>
          </div>
          <div className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row'>
            <img src={blogImage2} alt='Featured Blog' className='w-full md:w-1/2 h-96 object-cover' />
            <div className='p-8 flex flex-col justify-between'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Featured Article: Choosing the Right School for Your Child</h2>
              <p className='text-gray-600 text-lg'>
                Selecting the right school is crucial for your child's development. Explore our tips and considerations to make an informed decision.
              </p>
              <a href='/blog/choosing-the-right-school' className='no-underline mt-4 inline-block bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300'>
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* Small Blog Tiles Section */}
        <section className='my-12 px-20 py-4 bg-gray-200'>
          <div className='text-center mb-8'>
            <h2 className='text-4xl font-bold text-gray-800'>More Articles</h2>
          </div>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {blogs.slice(1, 4).map(blog => (
              <div key={blog.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
                <img src={blog.image} alt={blog.title} className='w-full h-56 object-cover' />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800'>{blog.title}</h3>
                  <p className='text-gray-600 mt-2'>{blog.description}</p>
                  <a href={blog.link} className='mt-4 inline-block text-purple-500 hover:text-purple-600 font-bold'>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-6'>
            <Link to='/all-blogs' className='inline-block bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300'>
              More Blogs
            </Link>
          </div>
        </section>

        {/* Subscription Section */}
        <section className='my-12 px-6 bg-purple-500 py-12'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white'>Subscribe to Our Blog</h2>
            <p className='text-white text-lg mt-2'>Stay updated with the latest tips and resources for school and child care services delivered straight to your inbox.</p>
            <form className='mt-6 flex flex-col md:flex-row justify-center'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full md:w-1/3 px-4 py-3 mt-4 rounded-l-lg focus:outline-none'
              />
              <button type='submit' className='mt-4 md:mt-0 bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-700 transition duration-300'>
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;