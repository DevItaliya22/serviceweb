import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import IteckFooter from '../components/Footer/Footer';
import {  submitform } from '../api/contact';
import { getServices } from '../api/service';
import Loader from '../Spinner/Loader';

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

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openPrivacyModal = () => {
    setShowPrivacyModal(true);
  };

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

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

   if (loading) {
        return (
            <div className="overflow-hidden">
                <Navbar />
                <div className="flex justify-center items-center min-h-[60vh]">
                    <Loader />
                </div>
            </div>
        );
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
                <button
                  type="button"
                  onClick={openModal}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Terms & Conditions
                </button>
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

      {/* Terms & Conditions Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Terms & Conditions</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="text-gray-700 space-y-4">
                <p className="text-sm mb-4">
                  By submitting your information through this contact form, you agree to the following terms:
                </p>

                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Information Collection</h3>
                  <p>We collect the personal details you provide, including your name, email address, phone number, and any other information shared through this form, for the purpose of responding to your inquiry regarding our data analytics, web development, AI solutions, algorithmic trading, API integrations, and related digital services.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Use of Information</h3>
                  <p>Your information will be used to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Communicate with you regarding your inquiry</li>
                    <li>Understand your requirements and provide relevant solutions</li>
                    <li>Improve our services and offerings</li>
                  </ul>
                  <p className="mt-2">We may store your information for follow-up, service history, and record-keeping purposes.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Data Protection</h3>
                  <p>We value your privacy and will protect your personal data in accordance with applicable data protection laws. Your information will not be sold, rented, or shared with third parties without your explicit consent, except as required by law.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Accuracy and Responsibility</h3>
                  <p>You are responsible for ensuring that the information you provide is accurate, complete, and does not infringe upon any third-party rights.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Consent</h3>
                  <p>By submitting this form, you consent to the collection, use, and storage of your personal data as described in these terms and our{' '}
                    <button
                      type="button"
                      onClick={openPrivacyModal}
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Privacy Policy
                    </button>.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Confidentiality and Intellectual Property</h3>
                  <p>If your message contains project-related or proprietary information, please note that sending such details does not establish any formal partnership or non-disclosure agreement. For sensitive or confidential discussions, please request a signed NDA (Non-Disclosure Agreement) before sharing additional details.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">7. Changes</h3>
                  <p>We may update these terms occasionally. Any changes will be posted on this page, and continued use of the contact form after updates implies your acceptance of the revised terms.</p>
                </section>

                <p className="text-sm mt-4">
                  For more details on how we manage and protect your data, please refer to our{' '}
                  <button
                    type="button"
                    onClick={openPrivacyModal}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Privacy Policy
                  </button>{' '}
                  or contact us directly.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-[#5f3dc4] hover:bg-[#4b2fa0] text-white font-semibold py-2 px-6 rounded-full transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
                <button
                  onClick={closePrivacyModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="text-gray-700 space-y-4">
                <p className="text-sm font-medium">
                  <strong>Effective Date: 07.07.2018</strong>
                </p>
                
                <p>
                  <strong>3RP-TECHNETIUM</strong> ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our website, contact forms, services, and communications.
                </p>

                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
                  <p>When you interact with our website or contact us, we may collect the following information:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name (if provided)</li>
                    <li>Details of your inquiry or project</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                  <p className="mt-2">We may also collect technical data such as your IP address, browser type, and pages visited, to improve our website performance and user experience.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Respond to your inquiries</li>
                    <li>Provide our services, including data analytics, web development, AI solutions, algo trading systems, API integrations, and data automation</li>
                    <li>Maintain internal records and project tracking</li>
                    <li>Improve our services and website</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Information Sharing</h3>
                  <p>We do <strong>not</strong> sell or rent your personal information. We may share your data only in the following circumstances:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>With trusted service providers who support our business operations (bound by confidentiality agreements)</li>
                    <li>If required by law, regulation, or legal process</li>
                    <li>To protect our rights, property, or safety, or that of our clients</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
                  <p>We take appropriate measures to secure your personal data against unauthorized access, alteration, disclosure, or destruction, including technical safeguards and strict internal procedures.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Your Rights</h3>
                  <p>Depending on applicable data protection laws, you may have the right to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of incorrect or incomplete data</li>
                    <li>Request deletion of your personal data (subject to legal and business requirements)</li>
                    <li>Withdraw your consent for data processing at any time</li>
                  </ul>
                  <p className="mt-2">You can exercise these rights by contacting us at [your contact email].</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Data Retention</h3>
                  <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">7. Third-Party Links</h3>
                  <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external websites.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">8. Changes to This Policy</h3>
                  <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this page regularly.</p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">9. Contact Us</h3>
                  <p>If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at: <strong>contact@3rp-technetium.com</strong></p>
                </section>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closePrivacyModal}
                  className="bg-[#5f3dc4] hover:bg-[#4b2fa0] text-white font-semibold py-2 px-6 rounded-full transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;