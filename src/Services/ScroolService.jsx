import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'Content Strategy',
    description: 'Provide answers that your potential customers are seeking to become the industry authority.',
    icon: '🎯',
    category: 'Marketing'
  },
  {
    title: 'Google/FB Ads',
    description: 'Drive targeted traffic and increase conversions with data-driven advertising campaigns.',
    icon: '📣',
    category: 'Advertising'
  },
  {
    title: 'Email Marketing',
    description: 'Build lasting relationships with personalized email campaigns that convert.',
    icon: '📧',
    category: 'Marketing'
  },
  {
    title: 'Social Media',
    description: 'Grow your brand presence and engage audiences across all social platforms.',
    icon: '📱',
    category: 'Marketing'
  },
  {
    title: 'Website Design',
    description: 'Create stunning, fast-loading websites that convert visitors into customers.',
    icon: '🖥️',
    category: 'Development'
  },
  {
    title: 'PPC Marketing',
    description: 'Maximize ROI with strategic pay-per-click campaigns and optimization.',
    icon: '💰',
    category: 'Advertising'
  },
  {
    title: 'SEO Services',
    description: 'Dominate search results and drive organic traffic with proven SEO strategies.',
    icon: '🔍',
    category: 'Marketing'
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that resonates with your audience and drives engagement.',
    icon: '✍️',
    category: 'Marketing'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to optimize your marketing strategies and track performance.',
    icon: '📊',
    category: 'Development'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    icon: '📱',
    category: 'Development'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with secure payment gateways and inventory management.',
    icon: '🛒',
    category: 'Development'
  },
  {
    title: 'Digital Consulting',
    description: 'Strategic digital transformation consulting to optimize your business processes and growth.',
    icon: '💼',
    category: 'Consulting'
  },
  {
    title: 'Digital Consulting',
    description: 'Strategic digital transformation consulting to optimize your business processes and growth.',
    icon: '💼',
    category: 'Consulting'
  },
];

export default function ImprovedServicesCarousel() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 12;

  const categories = ['All', ...new Set(services.map(service => service.category))];
  const filteredServices = activeTab === 'All'
    ? services
    : services.filter(service => service.category === activeTab);

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  
  const startIndex = currentPage * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [activeTab]);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="py-8">
      <div className="w-full mx-auto px-4">

        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Our <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          We provide perfect IT Solutions for your business
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => {
              const count = category === 'All' ? services.length : services.filter(s => s.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-sm border-2 ${activeTab === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md transform scale-105'
                      : 'bg-white text-black border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-105'
                    }`}
                >
                  <span className="inline-block align-middle">{category}</span>
                  <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full font-medium inline-block align-middle ${activeTab === category
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

        <div className="max-w-7xl mx-auto relative">
          {/* Left Arrow */}
          {totalPages > 1 && currentPage > 0 && (
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {totalPages > 1 && currentPage < totalPages - 1 && (
            <button
              onClick={() => goToPage(currentPage + 1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {currentServices.map((service, index) => (
              <ServiceCard key={`${service.title}-${startIndex + index}`} service={service} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-3">
              {/* Previous Arrow */}
              <button
                onClick={() => goToPage(Math.max(0, currentPage - 1))}
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
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                      ? 'bg-blue-600 w-10'
                      : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}

              {/* Next Arrow */}
              <button
                onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
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
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-3 group border border-slate-100 hover:border-blue-200 flex flex-col h-full transform hover:scale-105 hover:-translate-y-2">
      <div className="text-center mb-3">
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          {service.icon}
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