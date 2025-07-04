import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getReviews } from '../api/review';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews();
        // Only show reviews where isShow is true
        setReviews(Array.isArray(res.data) ? res.data.filter(r => r.isShow) : []);
      } catch {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set initial load flag after first render
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
    }, 2000); // Wait for initial animations to complete

    return () => clearTimeout(timer);
  }, []);

  const handleTransition = (dir) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      if (dir === 'next') {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const nextSlide = () => {
    handleTransition('next');
  };

  const prevSlide = () => {
    handleTransition('prev');
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push({ ...reviews[index], originalIndex: index, position: i });
    }
    return visible;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-500">Loading reviews...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 ${!hasInitiallyLoaded ? 'animate-fadeInDown' : ''}`}>
            Happy User Reviews
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Reviews Grid */}
          <div className={`grid gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-10 relative ${visibleCards === 1 ? 'grid-cols-1' :
            visibleCards === 2 ? 'grid-cols-2' :
              'grid-cols-3'
            }`}>
            
            {/* Navigation Buttons - Positioned relative to the grid */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className={`absolute -left-4 sm:-left-6 md:-left-8 lg:-left-10 top-1/4 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:rotate-6 md:hover:rotate-12 disabled:opacity-50 group ${!hasInitiallyLoaded ? 'animate-slideInLeft' : ''}`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className={`absolute -right-4 sm:-right-6 md:-right-8 lg:-right-10 top-1/4 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:-rotate-6 md:hover:-rotate-12 disabled:opacity-50 group ${!hasInitiallyLoaded ? 'animate-slideInRight' : ''}`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            {reviews.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No reviews to show.</div>
            ) : (
              getVisibleReviews().map((review, index) => (
                <div
                  key={`${review.originalIndex}-${currentIndex}`}
                  className={`flex flex-col items-center ${!hasInitiallyLoaded ? 'animate-slideInUp' : ''}`}
                  style={{
                    animationDelay: !hasInitiallyLoaded ? `${index * 0.15}s` : '0s',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg relative mb-8 w-full max-w-xs sm:max-w-sm hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 group">
                    <div className="flex items-center justify-center space-x-1 mb-6">
                      {renderStars(review.rating)}
                    </div>

                    <blockquote className="text-gray-700 text-lg leading-relaxed text-center group-hover:text-gray-900 transition-colors duration-300">
                      " {review.reviewText} "
                    </blockquote>

                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-white rotate-45 shadow-lg"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {review.profileImage ? (
                      <img
                        src={
                          review.profileImage.startsWith('http')
                            ? review.profileImage
                            : `${import.meta.env.VITE_BASE_URL || 'http://localhost:5000'}/${review.profileImage.replace(/\\/g, '/')}`
                        }
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-lg bg-gray-200">
                        👤
                      </div>
                    )}
                    <div className="text-center">
                      <div className="mb-1">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {review.designation || 'User'}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {review.name}
                      </h4>
                      {review.company && (
                        <div className="text-xs text-gray-500">{review.company}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
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

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out;
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
      `}</style>
    </section>
  );
}