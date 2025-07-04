import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import IteckFooter from '../components/Footer/Footer';
import {  submitform } from '../api/contact';
import { getServices } from '../api/service';
import Loader from '../Spinner/Loader';
import TermsAndConditions from './TermsAndConditions';

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

  // const [contactDetails, setContactDetails] = useState({
  //   email: 'info@iteck-info.com',
  //   phone: '907 000 999 22',
  //   address: '12/A, New Booston, NYC'
  // });

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, inquiry, message } = formData;

    if (!name || !email || !phone || !inquiry || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!import.meta.env.VITE_BASE_URL) {
      alert('Your request has been sent successfully. We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        inquiry: '',
        message: '',
        agree: false,
      });
      return;
    }

    try {
      const res = await submitform(name, email, phone, inquiry, message);
      if (res) {
        alert('Your request has been sent successfully. We will contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          inquiry: '',
          message: '',
          agree: false,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const servicesData = await getServices();

        if (Array.isArray(servicesData)) {
          setServices(servicesData);
        } else if (servicesData && Array.isArray(servicesData.data)) {
          setServices(servicesData.data);
        } else if (servicesData && Array.isArray(servicesData.services)) {
          setServices(servicesData.services);
        } else {
          console.warn('Services data is not an array:', servicesData);
          setServices([]);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-10 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            We will contact again after receiving your request in 24h
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative max-w-4xl mx-auto">
          <div className="h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-t-full relative z-10"></div>
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
              <option value="">Enquiry Type</option>
              {Array.isArray(services) && services.length > 0 && (
                services.map((service, index) => (
                  <option
                    key={service.id || service._id || index}
                    value={service.name || service.title || service.serviceName}
                  >
                    {service.name || service.title || service.serviceName}
                  </option>
                ))
              )}
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
                <a href="#" className="underline text-blue-600" onClick={openModal}>
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full h-[80vh] mx-4 p-8 relative flex flex-col">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <TermsAndConditions />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;