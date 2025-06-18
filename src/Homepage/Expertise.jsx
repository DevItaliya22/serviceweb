import React, { useState, useEffect } from 'react';

const Expertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "Business Intelligence",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "business-intelligence"
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "machine-learning",
      isHighlighted: true
    },
    {
      id: 3,
      title: "BI Implementation",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "bi-implementation"
    },
    {
      id: 4,
      title: "AI Data Analytics",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "ai-data"
    },
    {
      id: 5,
      title: "Data Visualization",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "data-viz"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: "cloud"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    },1000); 

    return () => clearInterval(interval);
  }, [services.length]);

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  const renderIcon = (iconType, isHighlighted = false) => {
    const baseClasses = "w-16 h-16 mx-auto mb-6";
    
    switch (iconType) {
      case "business-intelligence":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg transform rotate-12 opacity-60"></div>
              <div className="absolute inset-2 bg-white rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "machine-learning":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-2 bg-indigo-300 rounded-lg"></div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-800 rotate-45"></div>
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        );
      case "bi-implementation":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-lg transform rotate-12"></div>
              <div className="absolute top-2 left-2 w-8 h-8 bg-indigo-600 rounded"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded"></div>
            </div>
          </div>
        );
      case "ai-data":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-lg transform rotate-12"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-orange-400 rotate-45"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 bg-indigo-600 rounded-full"></div>
            </div>
          </div>
        );
      case "data-viz":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-lg transform rotate-12"></div>
              <div className="absolute inset-2 bg-white rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end gap-1">
                  <div className="w-1 h-3 bg-indigo-400"></div>
                  <div className="w-1 h-4 bg-indigo-500"></div>
                  <div className="w-1 h-2 bg-indigo-400"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case "cloud":
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-lg transform rotate-12"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-white rounded-full"></div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className={baseClasses}>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-lg transform rotate-12"></div>
          </div>
        );
    }
  };

  const visibleServices = getVisibleServices();

  return (
    <div className=" min-h-screen py-16 px-8 overflow-hidden p-4">
      <div className="absolute top-20 left-10 w-8 h-8 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute top-40 left-20 w-4 h-4 bg-indigo-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 right-32 w-6 h-6 bg-orange-300 rounded transform rotate-45 opacity-40"></div>

      <div className="max-w-10xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">OUR SERVICES</p>
          <h1 className="text-5xl font-bold text-gray-900">Our Expertise Field</h1>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center gap-8">
            {visibleServices.map((service, index) => {
              const isCenter = index === 1;
              const isHighlighted = service.isHighlighted || isCenter;
              
              return (
                <div
                  key={service.id}
                  className={`transition-all duration-700 ease-in-out transform ${
                    isCenter ? 'scale-105 z-10' : 'scale-95 opacity-75'
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 w-80 h-96 flex flex-col justify-center ${
                      isHighlighted ? 'border-2 border-blue-400' : 'border border-gray-100'
                    }`}
                  >
                    {renderIcon(service.icon, isHighlighted)}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <button
                      className={`font-medium text-sm tracking-wide transition-colors ${
                        isHighlighted
                          ? 'text-blue-600 hover:text-blue-700'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="flex justify-center mt-12 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Expertise;