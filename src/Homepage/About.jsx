import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50  p-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative">
              <div className="w-96 h-64 relative">
                <div className="absolute top-0 left-8 w-80 h-48 bg-white rounded-t-lg border-4 border-indigo-600 transform perspective-1000 rotate-y-12">
                  <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                    <div className="flex gap-1 mb-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-orange-300 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-96 h-16 bg-indigo-600 rounded-b-lg transform perspective-1000 rotate-x-45"></div>
              </div>

              <div className="absolute top-24 left-32 z-10">
                <div className="w-8 h-12 bg-indigo-600 rounded-t-full relative">
                  <div className="w-6 h-6 bg-orange-300 rounded-full absolute -top-4 left-1"></div>
                  <div className="absolute top-2 -left-2 w-3 h-6 bg-orange-400 rounded-full transform rotate-45"></div>
                  <div className="absolute top-2 -right-2 w-3 h-6 bg-orange-400 rounded-full transform -rotate-45"></div>
                </div>
              </div>

              <div className="absolute top-8 left-4">
                <div className="w-12 h-14 bg-indigo-200 rounded-t-full relative">
                  <div className="absolute inset-2 bg-indigo-400 rounded-t-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-8 border-transparent border-t-indigo-400"></div>
                </div>
              </div>

              <div className="absolute top-4 right-12 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45"></div>
              <div className="absolute top-12 right-4 w-3 h-3 bg-gradient-to-br from-indigo-400 to-indigo-600 transform rotate-45"></div>
              <div className="absolute bottom-8 right-8 w-5 h-5 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45"></div>
              <div className="absolute bottom-16 left-12 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-600 transform rotate-45"></div>

              <div className="absolute top-16 -left-4 w-6 h-6 bg-gray-200 rounded transform rotate-45"></div>
              <div className="absolute top-32 -left-8 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-4 -right-8 w-8 h-8 bg-gray-200 rounded transform rotate-45"></div>

              <div className="absolute bottom-12 left-16">
                <div className="w-6 h-2 bg-indigo-400 rounded-full relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-8 right-16">
                <div className="space-y-1">
                  <div className="w-8 h-2 bg-indigo-500 rounded"></div>
                  <div className="w-8 h-2 bg-indigo-400 rounded"></div>
                  <div className="w-8 h-2 bg-indigo-300 rounded"></div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative">
                  <div className="absolute inset-2 border-2 border-orange-200 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-200 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-8 right-20 w-3 h-6 bg-gray-300 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-20 left-4 w-4 h-8 bg-gray-200 rounded transform rotate-12"></div>
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