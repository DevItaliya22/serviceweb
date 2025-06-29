import React, { useState } from 'react';

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
];

export default function ImprovedServicesCarousel() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...new Set(services.map(service => service.category))];
  const filteredServices = activeTab === 'All'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <div className="py-8">
      <div className="w-full mx-auto px-4">

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
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
                  className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 shadow-md border-2 ${activeTab === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg transform scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:scale-105'
                    }`}
                >
                  {category}
                  <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-medium ${activeTab === category
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
            {filteredServices.map((service, index) => (
              <ServiceCard key={`${service.title}-${index}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-3 group border border-slate-100 hover:border-blue-200">
      <div className="text-center mb-3">
        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <span className="inline-block px-1.5 py-0.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
          {service.category}
        </span>
      </div>

      <div className="text-center">
        <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs leading-tight mb-3 line-clamp-3">
          {service.description}
        </p>
      </div>

      <div className="text-center">
        <button 
          onClick={() => {
            window.location.href = '/contact';
          }}
          className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 group text-xs"
        >
          Submit Enquiry
          <svg className="inline-block w-2 h-2 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}