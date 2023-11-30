import React, { useState, useEffect } from 'react';

const PersonalInfo = ({ collectData, userData }) => {
  const [formData, setFormData] = useState({
    firstName: userData.firstName || '',
    lastName:  userData.lastName || '',
    email: userData.email ||  '',
    mobileNumber:userData.mobileNumber ||  '',
    portfolio: userData.portfolio ||  '',
    careerObjective: userData.careerObjective ||  '',
    address: userData.address ||  '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitData = () => {
    // Collect all the data and provide the componentName 'personalInfo'
    collectData(formData);

  };

  return (
    <div className="p-4 space-y-4">
      <h5 className="font-bold mb-2">Personal Information</h5>
      <hr className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold mb-1">First Name</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold mb-1">Last Name</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold mb-1">Portfolio</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">Career Objective</label>
          <textarea
            className="w-full p-2 border rounded"
            name="careerObjective"
            value={formData.careerObjective}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">Address</label>
          <textarea
            className="w-full p-2 border rounded"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center content-center">
        <button
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          onClick={handleSubmitData}
        >
          Submit Data
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
