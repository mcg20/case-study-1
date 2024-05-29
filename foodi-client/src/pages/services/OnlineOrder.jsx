// src/pages/services/OnlineOrder.jsx

import React, { useState } from 'react';
import { FaUser, FaHome, FaPhone, FaEnvelope, FaClipboardList } from 'react-icons/fa';

const OnlineOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    orderDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nDetails:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="container mx-auto p-8 mt-16 bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl font-bold mb-6 text-center text-indigo-600">Place Your Order</h1>
      <p className="text-xl text-center mb-12 text-gray-700">Welcome to the Online Order page! Fill out the form below to get your order delivered to your doorstep.</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center space-x-3">
          <FaUser className="text-indigo-600 text-xl" />
          <div className="flex-1">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaHome className="text-indigo-600 text-xl" />
          <div className="flex-1">
            <label className="block text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="text-indigo-600 text-xl" />
          <div className="flex-1">
            <label className="block text-lg font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-indigo-600 text-xl" />
          <div className="flex-1">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaClipboardList className="text-indigo-600 text-xl" />
          <div className="flex-1">
            <label className="block text-lg font-medium text-gray-700">Order Details</label>
            <textarea
              name="orderDetails"
              value={formData.orderDetails}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnlineOrder;
