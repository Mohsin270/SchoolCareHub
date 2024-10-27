import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import blogImage1 from "./images/care1.jpeg"; 
import blogImage2 from "./images/school2.jpg";
import blogImage3 from "./images/school3.jpg";
import blogImage4 from "./images/school4.jpg";
import blogImage5 from "./images/school5.jpg";

const AllBlogs = () => {
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
      title: 'How to Support Your Child’s Learning at Home',
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
  ];

  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 min-h-screen'>
        {/* Header Section with Search Bar */}
        <div className='flex flex-col md:flex-row items-center justify-between px-6 py-6 bg-white shadow-sm'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4 md:mb-0'>Our Blogs</h1>
          <input
            type='text'
            placeholder='Search blogs by title...'
            className='w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Main Content */}
        <div className='py-8 px-0'>
          <div className='flex flex-col lg:flex-row gap-16'>
            
            {/* Sidebar for Filters */}
            <aside className='w-full lg:w-1/5 bg-white rounded-lg shadow-md border lg:order-2'>
              <h2 className='text-3xl font-bold mb-4 p-3 bg-purple-600 text-center text-white'>Filter Options</h2>
              <div className='mb-6 ml-8'>
                <h3 className='text-2xl font-semibold text-gray-700'>Categories</h3>
                <ul className='mt-3 ml-4 space-y-2'>
                  <li><input type="checkbox" className='mr-2' /> Child Care</li>
                  <li><input type="checkbox" className='mr-2' /> Education</li>
                  <li><input type="checkbox" className='mr-2' /> Parenting</li>
                </ul>
              </div>
            </aside>
            
            {/* Blog Tiles - Vertical List */}
            <div className='flex-1 lg:order-1'>
              {filteredBlogs.length > 0 ? (
                <div className='space-y-8 py-10 px-8 ml-20'>
                  {filteredBlogs.map(blog => (
                    <div key={blog.id} className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
                      <div className='flex flex-col md:flex-row'>
                        <img src={blog.image} alt={blog.title} className='w-full md:w-1/3 h-48 object-cover md:rounded-none rounded-t-lg' />
                        <div className='p-5 flex-1'>
                          <h3 className='text-xl font-semibold text-gray-800 mb-3'>{blog.title}</h3>
                          <p className='text-gray-600 mb-4'>{blog.description}</p>
                          <a href={blog.link} className='text-purple-600 hover:text-purple-800 font-semibold'>
                            Read More &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-gray-600 text-center mt-8'>No blogs found matching your search.</p>
              )}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBlogs;

/*
            <div className='flex-1 lg:order-1'>
            {filteredBlogs.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-8 ml-20'>
                {filteredBlogs.map(blog => (
                <div key={blog.id} className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
                    <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover rounded-t-lg' />
                    <div className='pt-4 pb-2 px-3'>
                    <h3 className='text-xl font-semibold text-gray-800 mb-1.5'>{blog.title}</h3>
                    <p className='text-gray-600 mb-2'>{blog.description}</p>
                    <a href={blog.link} className='text-purple-600 hover:text-purple-800 font-semibold'>
                        Read More &rarr;
                    </a>
                    </div>
                </div>
                ))}
            </div>
            ) : (
            <p className='text-gray-600 text-center mt-8'>No blogs found matching your search.</p>
            )}
            </div>
*/