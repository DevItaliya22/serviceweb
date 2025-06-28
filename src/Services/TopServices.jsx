import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Megaphone, Mail, Instagram, Globe } from 'lucide-react';

const TopServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [visibleCards, setVisibleCards] = useState(4);

  const services = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Content Strategy",
      description: "You can provide the answers that your potential customers are trying to find, so you can become the industry",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconBg: "bg-white",
      accentColor: "orange"
    },
    {
      icon: <Megaphone className="w-8 h-8 text-red-500" />,
      title: "Google/FB Ads",
      description: "Get more website traffic, more customers & more online visibility with powerful SEO services.",
      bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
      iconBg: "bg-white",
      accentColor: "red"
    },
    {
      icon: <Mail className="w-8 h-8 text-yellow-500" />,
      title: "Email Marketing",
      description: "Your website has to impress your visitors within just a few seconds",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-white",
      accentColor: "yellow"
    },
    {
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      title: "Social Media",
      description: "Get more website traffic, more customers for your social channel",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      iconBg: "bg-white",
      accentColor: "pink"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Website Design and Development",
      description: "Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconBg: "bg-white",
      accentColor: "blue"
    }
  ];

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleTransition('next');
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleTransition = (dir) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(dir);
    
    setTimeout(() => {
      if (dir === 'next') {
        setCurrentIndex((prevIndex) => 
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    handleTransition('next');
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    handleTransition('prev');
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 'next' : 'prev');
    handleTransition(index > currentIndex ? 'next' : 'prev');
    setTimeout(() => {
      setCurrentIndex(index);
    }, 300);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push({ ...services[index], originalIndex: index, position: i });
    }
    return visible;
  };

  const getAccentColors = (color) => {
    const colors = {
      orange: 'shadow-orange-200 border-orange-100',
      red: 'shadow-red-200 border-red-100',
      yellow: 'shadow-yellow-200 border-yellow-100',
      pink: 'shadow-pink-200 border-pink-100',
      blue: 'shadow-blue-200 border-blue-100'
    };
    return colors[color] || 'shadow-gray-200 border-gray-100';
  };

  return (
    <div className="w-screen flex flex-col justify-center py-8 md:py-16 overflow-hidden">
      {/* Animated Header */}
      <div className="text-center mb-8 md:mb-16 animate-fadeInDown px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
          Our Top <span className="text-blue-500 inline-block">Services</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
          Iteck Dashboard is a powerhouse when it comes to the feature list. This ensures you have every 
          functionality you need to build, run, and expand your marketplace
        </p>
      </div>

      {/* Carousel Container - Full Width */}
      <div className="relative w-full px-2 sm:px-4">
        {/* Animated Navigation Buttons - Responsive positioning */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-1 sm:left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:rotate-6 md:hover:rotate-12 disabled:opacity-50 animate-slideInLeft group"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-1 sm:right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:-rotate-6 md:hover:-rotate-12 disabled:opacity-50 animate-slideInRight group"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Services Grid - Responsive */}
        <div className={`grid gap-3 sm:gap-4 md:gap-6 px-8 sm:px-12 md:px-16 lg:px-20 relative ${
          visibleCards === 1 ? 'grid-cols-1' : 
          visibleCards === 2 ? 'grid-cols-2' : 
          'grid-cols-4'
        }`}>
          {getVisibleServices().map((service, index) => (
            <div
              key={`${service.originalIndex}-${currentIndex}`}
              className={`bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 md:hover:-translate-y-6 hover:rotate-1 group cursor-pointer border-2 ${getAccentColors(service.accentColor)} relative overflow-hidden h-full flex flex-col ${
                isTransitioning 
                  ? direction === 'next' 
                    ? 'animate-slideOutLeft' 
                    : 'animate-slideOutRight'
                  : 'animate-slideInUp'
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Animated Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Animated Icon Container */}
              <div className={`${service.bgColor} rounded-xl md:rounded-2xl p-3 md:p-4 mb-4 md:mb-6 relative overflow-hidden group-hover:scale-105 md:group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-bounceIn`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent animate-shimmer"></div>
                <div className={`${service.iconBg} rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg relative z-10 mx-auto w-fit group-hover:shadow-xl transition-all duration-300 animate-pulse`}>
                  <div className="animate-spin-slow">
                    {React.cloneElement(service.icon, { 
                      className: "w-6 h-6 md:w-8 md:h-8 " + service.icon.props.className.split(' ').slice(2).join(' ')
                    })}
                  </div>
                </div>
                
                {/* Animated Decorative elements */}
                <div className="absolute top-1 md:top-2 right-1 md:right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-0.5 md:right-1 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                
                {/* Floating particles */}
                <div className="absolute top-2 md:top-3 left-2 md:left-3 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-1 h-1 bg-green-400 rounded-full animate-float-delayed"></div>
              </div>

              {/* Animated Content */}
              <div className="text-center relative z-10 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 animate-fadeInUp">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 animate-fadeInUp flex-grow">
                  {service.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Animated Dots Indicator */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3 animate-fadeInUp">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative overflow-hidden transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-6 md:w-8 h-2.5 md:h-3 bg-gradient-to-r from-blue-500 to-purple-500 scale-110 md:scale-125' 
                  : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-180deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s ease-in;
        }

        .animate-slideOutRight {
          animation: slideOutRight 0.3s ease-in;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TopServices;