import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const RightSchool = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
            <Navbar />

            {/* Introductory Banner with Gradient Background */}
            <div className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 text-center py-12">
                <h1 className="text-5xl font-bold text-white mb-4">Pick the Right School</h1>
                <p className="text-lg text-gray-100 max-w-xl mx-auto">
                    Discover top schools, specialized programs, and extracurriculars that match your child’s unique needs.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                
                {/* Introductory Overview */}
                <section className="text-center mb-12">
                    <p className="text-xl text-gray-700 font-light leading-relaxed">
                        From academic excellence to extracurricular opportunities, finding the right school is about more than just location. Explore key aspects to make the best decision for your child.
                    </p>
                </section>

                {/* Key Considerations Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Key Considerations</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">School Ratings & Reviews</h3>
                            <p className="text-gray-600">Gauge parent and student satisfaction through trusted reviews, which reflect both academics and overall school environment.</p>
                        </li>
                        <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">Extracurricular Programs</h3>
                            <p className="text-gray-600">Look for diverse offerings that support holistic growth through sports, arts, and clubs.</p>
                        </li>
                        <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">Location & Accessibility</h3>
                            <p className="text-gray-600">Ensure the school is within a practical distance, with convenient transport options to make daily commutes easier.</p>
                        </li>
                        <li className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">Specialized Support Services</h3>
                            <p className="text-gray-600">Consider schools with tailored programs and support for unique educational needs, if applicable.</p>
                        </li>
                    </ul>
                </section>

                {/* Academic Excellence and School Culture */}
                <section className="mt-16">
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Academic Excellence and School Culture</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Renowned researcher Dr. John Hattie emphasizes that student success is influenced not only by curriculum but also by school culture and supportive relationships.
                    </p>
                    <blockquote className="p-4 border-l-4 border-purple-700 bg-gray-100 italic text-gray-700">
                        "A positive school culture with strong support systems can significantly boost a student’s learning engagement and emotional well-being." – Education Week
                    </blockquote>
                </section>

                {/* Extracurricular Programs and Holistic Development */}
                <section className="mt-16">
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Extracurricular Programs and Holistic Development</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Diverse programs contribute to character building and social growth, helping students manage time, teamwork, and resilience.
                    </p>
                </section>

                {/* Specialized Programs and Support Services */}
                <section className="mt-16">
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Specialized Programs and Support Services</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Schools offering STEM, language immersion, or other programs give students unique learning opportunities.
                    </p>
                </section>

                {/* Resources Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Recommended Resources</h2>
                    <ul className="space-y-4">
                        <li className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="font-bold text-purple-700">*Visible Learning* by Dr. John Hattie</h3>
                            <p className="text-gray-600">Research on factors impacting student achievement.</p>
                        </li>
                        <li className="bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="font-bold text-purple-700">*Outliers* by Malcolm Gladwell</h3>
                            <p className="text-gray-600">Insights on the role of environment and practice in success.</p>
                        </li>
                    </ul>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default RightSchool;
