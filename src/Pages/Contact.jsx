import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import IteckFooter from '../components/Footer/Footer';
import { getContactDetails } from '../api/contact';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    inquiry: '',
    message: '',
    agree: false,
  });

  const [contactDetails, setContactDetails] = useState({
    email: 'info@iteck-info.com',
    phone: '907 000 999 22',
    address: '12/A, New Booston, NYC'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const details = await getContactDetails();
        setContactDetails({
          email: details.email || 'info@iteck-info.com',
          phone: details.phone || '907 000 999 22',
          address: details.address || '12/A, New Booston, NYC',
        });
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchContactDetails();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            We will contact again after receiving your request in 24h
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold">{contactDetails.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold">{contactDetails.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-gray-800 font-semibold">{contactDetails.phone}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative max-w-4xl mx-auto">
          <div className="h-8 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 shadow-lg rounded-t-full relative z-10"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-white/30 rounded-t-full blur-sm z-20"></div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-xl shadow-md relative z-0 space-y-5">
            <p className="text-red-500 text-center font-medium">
              The field is required mark as <span className="text-red-700">*</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                className="p-3 rounded-full border border-gray-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="p-3 rounded-full border border-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                className="p-3 rounded-full border border-gray-300"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full p-3 rounded-full border border-gray-300"
            >
              <option value="">How can we help you?</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="design">UI/UX Design</option>
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              className="w-full p-4 rounded-2xl border border-gray-300"
              value={formData.message}
              onChange={handleChange}
            />

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-4 h-4 mt-1"
                required
              />
              <label htmlFor="agree" className="text-sm text-gray-700">
                By submitting, I'm agreed to the{' '}
                <a href="#" className="underline text-blue-600">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-[#5f3dc4] hover:bg-[#4b2fa0] text-white font-semibold py-3 px-8 rounded-full transition"
              >
                Send Your Request
              </button>
            </div>
          </form>
        </div>
      </main>

      <IteckFooter />
    </div>
  );
};

export default ContactForm;
