import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const SpecialChildCare = () => {
    return (
        <div>
            <Navbar />

            <div className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-6'>
                <h1 className="text-4xl font-bold text-white mb-4">Special Childcare Centers</h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <p className="text-lg text-gray-800 mb-6 font-serif">
                    Our special childcare centers focus on children with unique needs, providing tailored programs to ensure a supportive, enriching environment.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Features and Services</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Specialized educators and therapists</li>
                    <li>Customized learning plans</li>
                    <li>Focus on sensory and motor skill development</li>
                    <li>Safe and accessible environment</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default SpecialChildCare;
