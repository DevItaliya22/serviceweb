import React, { useState } from 'react';
import { Mail, User, Phone, Globe, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Navbar from "../components/Navbar/Navbar";  
import IteckFooter from "../components/Footer/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.agreeToTerms) {
      alert('Please fill in required fields and agree to terms');
      return;
    }
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-pink-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mt-12 mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? We'd love to hear from you and help bring your ideas to life.
            </p>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/30 overflow-hidden">
            <div className="absolute top-8 right-8 opacity-15">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl transform rotate-12 flex items-center justify-center shadow-2xl">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-sm font-bold">?</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 opacity-10">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl transform -rotate-12 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-8 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-green-600 animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <p className="text-red-500 text-sm font-medium flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    The field is required mark as *
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-all duration-300" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md text-gray-800 placeholder-gray-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address <span className="text-red-500 text-lg">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-all duration-300" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md text-gray-800 placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Website Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number (optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-500 transition-all duration-300" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md text-gray-800 placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Website (optional)
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-all duration-300" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md text-gray-800 placeholder-gray-400"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How can we help you?
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-indigo-500 transition-all duration-300" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md resize-none text-gray-800 placeholder-gray-400"
                      placeholder="Tell us about your project, questions, or how we can help you achieve your goals..."
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-200">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200"
                      required
                    />
                  </div>
                  <label className="text-sm text-gray-600 leading-6">
                    By submitting, I'm agreed to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2 hover:decoration-blue-700 transition-all duration-200">
                      Terms & Conditions
                    </a>{' '}
                    and acknowledge that my information will be handled according to our privacy policy.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Your Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
                          <span>Send Your Request</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 text-lg">contact@company.com</p>
              <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="group bg-white/70 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 text-lg">Available 24/7</p>
              <p className="text-sm text-gray-500 mt-2">Instant support online</p>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      <IteckFooter />
    </div>
  );
}