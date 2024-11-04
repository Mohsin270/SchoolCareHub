// src/components/FormPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lg from './images/icons/logo.jpg';

function FormPage() {
  const [formData, setFormData] = useState({
    category: 'School',
    careType: '',
    schoolType: '',
    syllabusType: '',
    Name: '',
    email: '',
    phone: '',
    location: '',
    licenceNo: '',
    fee: '',
    religion: '',
    openingHours: '',
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic here
    console.log("Form Submitted", formData);
  };

  // Step 1: Category Information
  const StepOne = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="School">School</option>
          <option value="ChildCare">ChildCare</option>
        </select>
      </div>

      {formData.category === "ChildCare" ? (
        <div>
          <label className="block text-sm font-medium text-gray-700">Care Type</label>
          <select
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="PreSchooling">PreSchooling</option>
            <option value="Special-care">Special Child Care</option>
          </select>
        </div>
      ) : (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">School Type</label>
            <select
              name="schoolType"
              value={formData.schoolType}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select School Type</option>
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Syllabus Type</label>
            <input
              type="text"
              name="syllabusType"
              value={formData.syllabusType}
              onChange={handleChange}
              placeholder="Enter syllabus type"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </>
      )}
    </div>
  );

  // Step 2: Basic Information
  const StepTwo = () => (
    <div className="space-y-4">
      <input
        type="text"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        placeholder="School/Daycare Name"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="Phone"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>
  );

  // Step 3: Address and License
  const StepThree = () => (
    <div className="space-y-4">
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        placeholder="Location"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="licenceNo"
        value={formData.licenceNo}
        onChange={handleChange}
        required
        placeholder="License Number"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>
  );

  // Step 4: Additional Details
  const StepFour = () => (
    <div className="space-y-4">
      <input
        type="text"
        name="fee"
        value={formData.fee}
        onChange={handleChange}
        required
        placeholder="Fee"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        required
        placeholder="Religion"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="openingHours"
        value={formData.openingHours}
        onChange={handleChange}
        required
        placeholder="Opening Hours (e.g., Mon-Fri, 8 AM - 5 PM)"
        className="w-full p-3 border border-gray-300 rounded-md"
      />
    </div>
  );

  // Define steps array
  const steps = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];

  return (
    <div className='w-3/4 mx-auto bg-gray-200 mt-12'>
      <div className="flex h-full">
        {/* Left Static Section */}
        <div className="w-1/3 bg-blue-600 text-white p-8 space-y-16 flex flex-col justify-between">
          <div className="flex items-center">
            <img src={lg} alt="SchoolCare Logo" className="w-6 h-6 mr-2" />
            <h1 className="text-xl font-serif text-purple-200"><Link to={'/'}>SchoolCare</Link></h1>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Let's setup your Operating Agreement</h2>
            <p className="mt-4">
              All-in-one solution for your business in the state. Form a new company from scratch or onboard your existing US company.
            </p>
          </div>
          <div className="mt-8 p-4 bg-blue-700 rounded">
            <p className="italic">"I barely had to do anything"</p>
            <p className="text-sm mt-2">
              Love the experience. Got my business set up and all necessary details in about a month, and I barely had to do anything. Definitely recommend!
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full" />
              <span className="font-bold">Catherine Johns</span>
            </div>
          </div>
        </div>

        {/* Right dynamic Section */}
        <div className="w-2/3 p-8 flex flex-col justify-evenly">
          <div className=''>
            <h3 className="text-3xl text-center font-serif">Register Your Institute</h3>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
          
          <div className="px-4">
            <form onSubmit={handleSubmit} className='flex flex-col justify-between space-y-20'>
              {/* Render the current step */}
              {steps[currentStep]}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded ${currentStep === 0 ? 'bg-gray-300' : 'bg-green-500 text-white'}`}
                >
                  Back
                </button>
                <button
                  onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
                  type={currentStep === steps.length - 1 ? "submit" : "button"}
                  className="px-4 py-2 bg-purple-500 text-white rounded"
                >
                  {currentStep === steps.length - 1 ? 'Register' : 'Next'}
                </button>
              </div>
            </form>            
          </div>

        </div>
      </div>  
    </div>
  );
}

export default FormPage;
