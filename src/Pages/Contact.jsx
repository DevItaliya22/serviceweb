import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e5f5 100%)'}}>
      {/* Background decorative elements */}
      <div className="absolute top-16 right-16 z-0">
        <div className="relative">
          {/* Blue circle */}
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 right-0"></div>
          {/* Orange envelope */}
          <div className="w-16 h-12 bg-orange-400 absolute top-4 right-8 transform rotate-12 rounded-lg shadow-lg flex items-center justify-center">
            <div className="w-8 h-6 bg-white rounded-sm relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-b-3 border-transparent border-b-white"></div>
            </div>
          </div>
          {/* Blue question mark circle */}
          <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-2 right-6 flex items-center justify-center">
            <span className="text-white text-xs font-bold">?</span>
          </div>
        </div>
      </div>

      {/* Bottom left decorative element */}
      <div className="absolute bottom-0 left-0 z-0">
        <div className="relative">
          {/* Blue circle */}
          <div className="w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
          {/* Gray rectangle */}
          <div className="w-16 h-20 bg-gray-300 absolute bottom-0 left-8 opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 relative">
          {/* Required field notice */}
          <div className="text-center mb-8">
            <p className="text-red-400 text-sm font-medium">The field is required mark as *</p>
          </div>

          <div className="space-y-8">
            {/* First row - Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 bg-gray-50 border-0 rounded-3xl text-gray-700 placeholder-gray-400 text-lg focus:outline-none focus:ring-0 focus:bg-gray-100 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 bg-gray-50 border-0 rounded-3xl text-gray-700 placeholder-gray-400 text-lg focus:outline-none focus:ring-0 focus:bg-gray-100 transition-all"
                />
              </div>
            </div>

            {/* Second row - Phone and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (option)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 bg-gray-50 border-0 rounded-3xl text-gray-700 placeholder-gray-400 text-lg focus:outline-none focus:ring-0 focus:bg-gray-100 transition-all"
                />
              </div>
              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="Your Website (option)"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-8 py-5 bg-gray-50 border-0 rounded-3xl text-gray-700 placeholder-gray-400 text-lg focus:outline-none focus:ring-0 focus:bg-gray-100 transition-all"
                />
              </div>
            </div>

            {/* Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-8 py-5 bg-gray-50 border-0 rounded-3xl text-left text-gray-400 text-lg focus:outline-none focus:bg-gray-100 transition-all flex justify-between items-center"
              >
                How can we help you?
                <svg 
                  className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-3xl shadow-xl z-20">
                  <div className="p-4">
                    <div className="px-6 py-4 hover:bg-gray-50 rounded-2xl cursor-pointer text-gray-600 text-lg">Web Development</div>
                    <div className="px-6 py-4 hover:bg-gray-50 rounded-2xl cursor-pointer text-gray-600 text-lg">Mobile App Development</div>
                    <div className="px-6 py-4 hover:bg-gray-50 rounded-2xl cursor-pointer text-gray-600 text-lg">UI/UX Design</div>
                    <div className="px-6 py-4 hover:bg-gray-50 rounded-2xl cursor-pointer text-gray-600 text-lg">Consulting</div>
                  </div>
                </div>
              )}
            </div>

            {/* Message textarea */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={8}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-8 py-6 bg-white border-2 border-blue-300 rounded-3xl text-gray-700 placeholder-gray-400 text-lg focus:outline-none focus:border-blue-400 transition-all resize-none"
              ></textarea>
              <div className="absolute bottom-4 right-6">
                <span className="text-red-400 text-2xl font-bold">*</span>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start space-x-4 px-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="terms" className="text-gray-600 text-lg leading-relaxed">
                By submitting, I'm agreed to the{' '}
                <span className="text-gray-800 underline cursor-pointer font-medium">Terms & Conditions</span>
              </label>
            </div>

            {/* Submit button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="px-16 py-5 text-white text-lg font-semibold rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'}}
              >
                Send Your Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}