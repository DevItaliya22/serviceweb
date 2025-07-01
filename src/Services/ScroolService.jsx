import React, { useState, useEffect } from 'react';

export default function ImprovedServicesCarousel(Services) {
  console.log(Services?.services?.data);
  
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 12;

  // Process the services data from API
  const processedServices = React.useMemo(() => {
    if (Services?.services?.data && Array.isArray(Services.services.data)) {
      return Services.services.data.map(service => ({
        title: service.title,
        description:  service.singleLineDescription,
        icon: service.icon ? `${import.meta.env.VITE_BASE_URL}/${service.icon.replace(/\\/g, '/')}` : '🔧',
        category: service.type,
        isTopService: service.isTopService,
        id: service._id,
        newService: service.newService
      }));
    }
    return [];
  }, [Services]);

  const categories = ['All', ...new Set(processedServices.map(service => service.category))];
  const filteredServices = activeTab === 'All'
    ? processedServices
    : processedServices.filter(service => service.category === activeTab);

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  
  const startIndex = currentPage * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  // Early return if no services data
  if (!processedServices || processedServices.length === 0) {
    return (
      <div className="py-8">
        <div className="w-full mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
              Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-600 text-lg">No services available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
    // Scroll to top when changing pages, especially useful on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-8">
      <div className="w-full mx-auto px-4 overflow-x-hidden">

        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex justify-start items-center w-full max-w-7xl px-4 gap-2 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const count = category === 'All' ? processedServices.length : processedServices.filter(s => s.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-3 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-sm border whitespace-nowrap flex-shrink-0 ${activeTab === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md transform scale-105'
                      : 'bg-white text-black border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-105'
                    }`}
                >
                  <span className="inline-block align-middle">{category}</span>
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-medium inline-block align-middle ${activeTab === category
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => currentPage > 0 && goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-10 p-3 rounded-full shadow-lg transition-all duration-300 border group ${
                currentPage === 0
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed border-gray-200'
                  : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-xl border-slate-200 hover:border-blue-300'
              }`}
            >
              <svg className="w-6 h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => currentPage < totalPages - 1 && goToPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-10 p-3 rounded-full shadow-lg transition-all duration-300 border group ${
                currentPage === totalPages - 1
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed border-gray-200'
                  : 'bg-white text-slate-600 hover:text-blue-600 hover:shadow-xl border-slate-200 hover:border-blue-300'
              }`}
            >
              <svg className="w-6 h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {currentServices.map((service, index) => (
                <ServiceCard key={service.id || `${service.title}-${startIndex + index}`} service={service} />
              ))}
            </div>
          </div>

          {/* Pagination - Only show when there are more than 12 services */}
          {filteredServices.length > servicesPerPage && (
            <div className="flex justify-center items-center mt-8 space-x-3">
              {/* Previous Arrow */}
              <button
                onClick={() => {
                  console.log('Previous clicked, currentPage:', currentPage, 'totalPages:', totalPages);
                  goToPage(Math.max(0, currentPage - 1));
                }}
                disabled={currentPage === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Dots */}
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log('Dot clicked, going to page:', index);
                    goToPage(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                      ? 'bg-blue-600 w-10'
                      : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}

              {/* Next Arrow */}
              <button
                onClick={() => {
                  console.log('Next clicked, currentPage:', currentPage, 'totalPages:', totalPages);
                  goToPage(Math.min(totalPages - 1, currentPage + 1));
                }}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === totalPages - 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const isNew = !!service.newService;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-3 group border border-slate-100 hover:border-blue-200 flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
      <div className="text-center mb-3">
        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          {service.icon !== '🔧' ? (
            <img src={service.icon} alt={service.title} className="w-8 h-8 mx-auto object-contain" />
          ) : (
            service.icon
          )}
          {isNew && (
            <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md z-20 border border-white whitespace-nowrap min-w-[40px] text-center">NEW</span>
          )}
        </div>
        <span className="inline-block px-1.5 py-0.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
          {service.category}
        </span>
      </div>

      <div className="text-center flex-grow">
        <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs leading-tight mb-3 line-clamp-3">
          {service.description}
        </p>
      </div>

      <div className="text-center mt-auto">
        <button 
          onClick={() => {
            window.location.href = '/contact';
          }}
          className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 group text-xs"
        >
          Enquiry
          <svg className="inline-block w-2 h-2 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}