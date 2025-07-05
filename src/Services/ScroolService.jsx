import React, { useState, useEffect } from 'react';

export default function ImprovedServicesCarousel({ services }) {
  console.log("Services data:", services?.data);
  console.log("First service icon:", services?.data?.[0]?.icon);
  console.log("VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 12;

  // Process the services data from API
  const processedServices = React.useMemo(() => {
    if (services?.data && Array.isArray(services.data)) {
      return services.data.map(service => {
        const iconUrl = service?.icon ? `${import.meta.env.VITE_BASE_URL || 'http://localhost:5000'}/${service.icon.replace(/\\/g, '/')}` : null;
        console.log('Processing service:', service.title, 'Icon URL:', iconUrl);
        return {
          title: service.title || 'Untitled Service',
          description: service.singleLineDescription || service.description || 'No description available',
          icon: iconUrl,
          category: service.type || 'Other',
          isTopService: service.isTopService || false,
          id: service._id,
          newService: service.newService || false
        };
      });
    }
    return [];
  }, [services]);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-4">
      <div className="w-full mx-auto px-4 overflow-x-hidden">

        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
            Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
        </div>

        <div className="flex justify-center mb-4">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {currentServices.map((service, index) => (
                <ServiceCard key={service.id || `${service.title}-${startIndex + index}`} service={service} />
              ))}
            </div>
          </div>

          {/* Pagination - Only show when there are more than 12 services */}
          {filteredServices.length > servicesPerPage && (
            <div className="flex justify-center items-center mt-4 space-x-3">
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
  const [iconError, setIconError] = useState(false);

  const handleIconError = () => {
    setIconError(true);
  };

  // Default icon component
  const DefaultIcon = () => (
    <div className="w-10 h-10 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 p-3 group border border-slate-100 hover:border-blue-200 active:border-blue-200 flex flex-col h-full transform hover:scale-105 active:scale-105 hover:-translate-y-1 active:-translate-y-1">
      <div className="text-center mb-3">
                 <div className="mb-3 group-hover:scale-110 active:scale-110 transition-transform duration-300 relative">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-0 group-hover:opacity-50 active:opacity-50 transition-opacity duration-300 -z-10"></div>
          
                     {/* Icon Display Logic */}
           {service.icon && !iconError ? (
             <div className="relative group/icon">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-0 group-hover/icon:opacity-30 active:opacity-30 transition-opacity duration-300"></div>
               <img
                 src={service.icon}
                 alt={`${service.title} icon`}
                 className="relative w-10 h-10 mx-auto object-contain rounded-xl shadow-lg group-hover/icon:shadow-xl active:shadow-xl transition-all duration-300 group-hover/icon:scale-110 active:scale-110 border-2 border-white"
                 onError={(e) => {
                   console.log('Icon failed to load:', service.icon);
                   console.log('Error target:', e.target);
                   handleIconError();
                 }}
                 onLoad={() => console.log('Icon loaded successfully:', service.icon)}
               />
             </div>
           ) : (
             <DefaultIcon />
           )}
          
                     {/* NEW Badge */}
           {isNew && (
             <span className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20 border-2 border-white transition-transform duration-200 group-hover:scale-110 active:scale-110">
               NEW
             </span>
           )}
        </div>
        
        <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
          {service.category}
        </span>
      </div>

      <div className="text-center flex-grow">
        <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed mb-2 line-clamp-2">
          {service.description}
        </p>
      </div>

      <div className="text-center mt-auto">
        <button 
          onClick={() => {
            window.location.href = '/contact';
          }}
          className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 group text-xs"
        >
          Enquiry
        </button>
      </div>
    </div>
  );
}