import React from 'react';
import Aboutimg from "../assets/About.svg"

const About = () => {
  return (
    <div className="bg-gray-50  p-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative">
              <img
                src={Aboutimg}
                alt="About Us"
                className="w-full h-auto object-cover rounded-3xl "
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-3">ABOUT OUR SERVICE</p>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                We Offer Real-Time<br />Data Solutions.
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Stay focused and productive with a clean and clutter-free note space the flexible ways to organize
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 transform rotate-45 flex-shrink-0"></div>
                <span className="text-gray-900 font-medium text-lg">Various AI Data Analysis Options</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45 flex-shrink-0"></div>
                <span className="text-gray-900 font-medium text-lg">Auto Generate AI Content</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  {/* <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E5E7EB'/%3E%3Ccircle cx='50' cy='35' r='15' fill='%23374151'/%3E%3Cpath d='M25 75 Q25 55 50 55 Q75 55 75 75 Z' fill='%23374151'/%3E%3C/svg%3E" 
                    alt="Alonso D. Dowson"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                {/* <div>
                  <p className="text-blue-600 text-sm">Certified By</p>
                  <p className="font-semibold text-gray-900">Alonso D.Dowson</p>
                </div> */}
              </div>
              {/* <div className="ml-8">
                <div className="text-2xl font-bold text-gray-400 italic">Michael M</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-8 right-8">
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default About;