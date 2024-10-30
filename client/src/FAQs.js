import { faChevronDown, faChevronUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

const FAQs = () => {
    const [showMore, setShowMore] = useState(false);
    const [openFAQs, setOpenFAQs] = useState({});
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(false);
    const R_URL = process.env.REACT_APP_API_URL;

    // Sample FAQs for SchoolCare
    const sampleFaqs = [
        {
            question: "What is SchoolCare?",
            answer: "SchoolCare is a comprehensive platform that connects parents, schools, and childcare providers to ensure seamless communication and support for children's development."
        },
        {
            question: "How do I register my child?",
            answer: "To register your child, simply visit our registration page, fill out the required information, and submit the form. You will receive a confirmation email once the registration is complete."
        },
        {
            question: "What types of services does SchoolCare offer?",
            answer: "SchoolCare offers a variety of services, including daycare options, after-school programs, and educational resources for both parents and educators."
        },
        {
            question: "Can I track my child's progress?",
            answer: "Yes! Parents can log into their accounts to track their child's progress, view reports, and communicate with teachers and caregivers."
        },
        // Add more FAQs if needed
    ];

    const fetchFaqs = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${R_URL}/api/faqs`);
            setFaqs(response.data.length > 0 ? response.data : sampleFaqs); // Use sample FAQs if none are fetched
            setLoading(false);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
            setLoading(false);
            setFaqs(sampleFaqs); // Fallback to sample FAQs on error
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    const handleFAQClick = (index) => {
        setOpenFAQs((prevOpenFAQs) => ({
            ...prevOpenFAQs,
            [index]: !prevOpenFAQs[index],
        }));
    };


    const visibleFaqs = showMore ? faqs : faqs.slice(0, 5); // Display 5 FAQs by default

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className='w-full bg-gradient-to-r from-purple-700 to-gray-300 text-center py-16'>
                <h2 className='text-5xl font-bold text-white'>Frequently Asked Questions</h2>
                <p className='text-white mt-4 max-w-2xl mx-auto text-lg'>
                    Find answers to some of the most common questions about SchoolCare, our services, and more.
                </p>
            </div>

            {/* FAQ Section */}
            <section className="p-10 md:p-14 bg-gray-100">
                <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-white rounded-lg shadow-md p-6">
                    {loading ? (
                        <p className="text-center text-gray-600">Loading FAQs...</p>
                    ) : (
                        visibleFaqs.map((faq, index) => (
                            <div className="border-b border-gray-300 py-4" key={index}>
                                <button
                                    className="flex justify-between items-center w-full text-left p-2.5 text-lg font-medium text-gray-800 hover:text-blue-600"
                                    onClick={() => handleFAQClick(index)}
                                    aria-expanded={openFAQs[index]}
                                >
                                    <span>{faq.question}</span>
                                    {openFAQs[index] ? (
                                        <FontAwesomeIcon icon={faChevronUp} className="text-blue-600" />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronDown} className="text-blue-600" />
                                    )}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFAQs[index] ? "max-h-40" : "max-h-0"}`}
                                >
                                    <p className="p-2 text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    )}
                    {faqs.length > 5 && (
                        <button
                            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>
            </section>
                {/* Contact Support Section */}
            <section className="bg-white py-16 px-10 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Need More Help?</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
                    If you can't find the answer to your question, feel free to reach out to our support team.
                    We're here to help you get the most out of our services.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="mailto:schoolcarehub@gmail.com" className="no-underline flex items-center gap-2 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email Us
                    </a>
                    <a href="tel:+923171619909" className="no-underline flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                        <FontAwesomeIcon icon={faPhone} />
                        Call Us
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default FAQs;
