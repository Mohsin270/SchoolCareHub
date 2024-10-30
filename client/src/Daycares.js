import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Daycares = () => {
    return (
        <div className='mx-auto'>
            <Navbar />

                {/* Introductory Overview */}
            <div className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-6'>
                <h1 className="text-4xl font-bold text-white mb-4">Daycare Services</h1>
            </div>

            <div className="max-w-7xl mx-auto px-40 py-16 bg-gray-50 ">                
                <p className="mx-w-3xl mx-auto font-serif">
                    Our daycare centers provide a warm, safe, and nurturing environment for young children,
                    where growth, exploration, and development are prioritized. With professional caregivers,
                    our facilities support early childhood education in ways that are engaging, holistic, and tailored to the needs of each child.
                </p>
                {/* Program Highlights */}
                <h2 className="text-2xl font-semibold my-4">Program Highlights</h2>
                <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Age-appropriate learning activities, from music and movement to early literacy and STEM</li>
                    <li>Healthy snacks and meals provided, adhering to nutrition guidelines</li>
                    <li>Outdoor and indoor play areas that inspire creativity and physical activity</li>
                    <li>Focus on social and emotional growth to build positive relationships and self-awareness</li>
                </ul>

                {/* Safety and Hygiene Policies */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Safety and Hygiene Policies</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Safety is our top priority. Our daycare centers are equipped with secure entry systems, supervised play areas, and frequent sanitization of all surfaces and toys. Staff members are trained in CPR, first aid, and child safety protocols to ensure every child is safe and secure. Routine health checks are conducted, and parents are notified immediately of any concerns.
                </p>

                {/* Curriculum and Daily Schedule */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum and Daily Schedule</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Our curriculum blends structured learning with free play, allowing children to explore their interests. Each day includes a mix of storytime, arts and crafts, sensory activities, and music sessions. Educators also incorporate early math and literacy skills through fun, engaging exercises to prepare children for preschool and beyond.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Creative arts, including painting, clay modeling, and crafting</li>
                    <li>Language and literacy development through storytelling and group reading</li>
                    <li>Outdoor time and physical activities for motor skills development</li>
                    <li>Quiet time and naps for balanced rest</li>
                </ul>

                {/* Parent Engagement and Communication */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Parent Engagement and Communication</h2>
                <p className="text-lg text-gray-800 mb-6">
                    We believe that active communication between caregivers and parents enhances a child's experience. Our centers provide daily reports, monthly newsletters, and regular parent-teacher meetings to keep parents informed of their child's progress and milestones. Through our mobile app, parents can check updates, view photos, and message caregivers directly.
                </p>

                {/* Developmental Milestones and Progress Tracking */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Developmental Milestones and Progress Tracking</h2>
                <p className="text-lg text-gray-800 mb-6">
                    Our staff regularly assess each child's development to ensure they are progressing at a healthy pace. We track key milestones in cognitive, emotional, and physical growth, providing parents with progress reports. Should any delays or challenges arise, we work closely with families to offer additional support or guidance.
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Bi-annual developmental assessments</li>
                    <li>Goal setting in partnership with parents for individualized learning</li>
                    <li>Special resources for language, social skills, and motor development</li>
                </ul>

                {/* Contact Information and Enrollment Process */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information and Enrollment Process</h2>
                <p className="text-lg text-gray-800 mb-6">
                    For enrollment, parents are encouraged to tour our facility and meet our caregivers. Enrollment can be completed through an application process, where we guide parents step-by-step to ensure a seamless transition. Contact us at (555) 123-4567 or email us at daycare@schoolcarehub.com to schedule a visit or learn more about our services.
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default Daycares;
