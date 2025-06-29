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
];

export default function ImprovedServicesCarousel() {
  const [activeTab, setActiveTab] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const categories = ['All', ...new Set(services.map(service => service.category))];
  const filteredServices = activeTab === 'All'
    ? services
    : services.filter(service => service.category === activeTab);

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 3;
      return 1;
    }
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const maxSlides = Math.max(0, filteredServices.length - cardsPerView);
  const canGoNext = currentSlide < maxSlides;
  const canGoPrev = currentSlide > 0;

  const nextSlide = () => canGoNext && setCurrentSlide(prev => prev + 1);
  const prevSlide = () => canGoPrev && setCurrentSlide(prev => prev - 1);

  return (
    <div className="min-h-screen py-16">
      <div className="w-full mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          We provide perfect IT Solutions for your business
          </p>
        </div>

        {/* Separated Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((category) => {
              const count = category === 'All' ? services.length : services.filter(s => s.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-lg border-2 ${activeTab === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-xl transform scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:shadow-xl hover:scale-105'
                    }`}
                >
                  {category}
                  <span className={`ml-3 text-xs px-3 py-1 rounded-full font-medium ${activeTab === category
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

        {/* Carousel Container */}
        <div className="relative">

          {/* Navigation Arrows */}
          {filteredServices.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={!canGoPrev}
                className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 bg-transparent p-0 m-0 border-none shadow-none rounded-none ${canGoPrev
                    ? 'text-slate-700'
                    : 'text-slate-300 cursor-not-allowed'
                  }`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                disabled={!canGoNext}
                className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-300 bg-transparent p-0 m-0 border-none shadow-none rounded-none ${canGoNext
                    ? 'text-slate-700'
                    : 'text-slate-300 cursor-not-allowed'
                  }`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </>
          )}

          {/* Cards Container - NO OVERFLOW VISIBLE */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
              }}
            >
              {filteredServices.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="flex-none bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group border border-slate-100 hover:border-blue-200 mx-3"
                  style={{ width: `calc(${100 / cardsPerView}% - 1.5rem)` }}
                >
                  {/* Icon and Category */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <button onClick={() => {
                      window.location.href = '/contact';
                    }}
                     className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group">
                      Submit Enquirty
                      <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {filteredServices.length > cardsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}