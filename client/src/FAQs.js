import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

const FAQs = () => {
    const [showMore, setShowMore] = useState(false);
    const [openFAQs, setOpenFAQs] = useState({});
    const [formData, setFormData] = useState({ name: '', email: '', question: '' });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.question) errors.question = 'Question is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post(`${R_URL}/api/faqs`, formData);
                console.log(response.data.message);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', question: '' });
                setTimeout(() => setIsSubmitted(false), 3000);
                fetchFaqs(); // Refresh the FAQs list after submitting a new question
            } catch (error) {
                console.error('Error submitting question:', error);
            }
        }
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
            
            {/* Can't Find Your Question? Section */}
            <section className="bg-white p-10 md:p-14">
                <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Can't Find Your Question?</h2>
                    <p className="text-lg text-gray-600 text-center mb-6">
                        If you don't find the answer you're looking for, please submit your question below, and our support team will get back to you.
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}

                        <textarea
                            name="question"
                            rows="4"
                            placeholder="Write your question here..."
                            value={formData.question}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.question ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                        ></textarea>
                        {formErrors.question && <p className="text-red-500 text-sm">{formErrors.question}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Submit Your Question
                        </button>
                        {isSubmitted && (
                            <p className="text-green-500 text-center mt-4">Thank you! Your question has been submitted. We'll get back to you soon.</p>
                        )}
                    </form>
                </div>
            </section>

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

            <Footer />
        </>
    );
};

export default FAQs;
