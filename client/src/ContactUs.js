import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        userRole: "",
        email: "",
        subject: "",
        description: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.userRole) errors.userRole = "Role is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.subject) errors.subject = "Subject is required";
        if (!formData.description) errors.description = "Description is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            setLoading(true);
            console.log("Form submitted successfully with data:", formData);
            setFormData({
                userRole: "",
                email: "",
                subject: "",
                description: "",
            });
            setTimeout(() => {
                setIsSubmitted(false);
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Header Section */}
            <section className='w-full bg-gradient-to-r from-purple-700 to-gray-100 text-center py-16'>
                <h1  className='text-5xl font-bold text-white'>Contact Us</h1>
                <p className='text-white mt-4 max-w-2xl mx-auto text-lg'>
                    Have questions or need support? Reach out to us and we'll get back to you as soon as possible.
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="p-6 md:p-16 bg-white mx-auto my-10 rounded-lg shadow-2xl max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userRole" className="block text-lg font-medium">Role:</label>
                        <select
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                        required
                        >
                        <option value="">Select Your Role</option>
                        <option value="admin">Admin</option>
                        <option value="accountant">Accountant</option>
                        <option value="stockHolder">Purchaser</option>
                        <option value="employee">Employee</option>
                        <option value="agent">Agent</option>
                        </select>
                        {formErrors.userRole && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="block text-lg font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="Enter your official email"
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="block text-lg font-medium">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="Enter the subject"
                        />
                        {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="block text-lg font-medium">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                            placeholder="Breifly describe your issue"
                            rows="5"
                        />
                        {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {isSubmitted && !loading && (
                        <p className="text-green-500 text-sm mt-4 text-center">
                            Thank you for contacting us. We will get back to you soon!
                        </p>
                    )}
                </form>
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
        </div>
    );
};

export default ContactUs;
