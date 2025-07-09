import React, { useState, useEffect } from 'react';
import { getExpertise } from "../api/expertise";

const Expertise = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [expertiseList, setExpertiseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const response = await getExpertise();
        // If response is { success, count, data: [...] }
        setExpertiseList(response.data || []);
        setLoading(false);
      } catch {
        setError('Failed to load expertise data');
        setLoading(false);
      }
    };
    fetchExpertise();
  }, []);

  // Duplicate the list for scrolling effect
  const duplicatedServices = [...expertiseList, ...expertiseList];

  return (
    <div className="min-h-screen py-16 px-8 overflow-hidden p-4">
      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .scroll-animation {
    animation: scroll 30s linear infinite;
  }
  .scroll-animation.paused {
    animation-play-state: paused;
  }
`}</style>
      <div className="absolute top-20 left-10 w-8 h-8 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute top-40 left-20 w-4 h-4 bg-indigo-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 right-32 w-6 h-6 bg-orange-300 rounded transform rotate-45 opacity-40"></div>
      <div className="w-screen mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4 mr-4  ">OUR SERVICES</p>
          <h1 className="text-center text-4xl sm:text-xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 mr-8">
            Our Expertise Field
          </h1>
        </div>
        <div className="relative overflow-hidden">
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div
              className={`scroll-animation flex gap-8 w-max ${isHovered ? 'paused' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicatedServices.map((service, index) => (
                <div
                  key={`${service._id || service.id}-${index}`}
                  className="flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 w-80 h-96 flex flex-col justify-center border border-gray-100">
                    <img
                      src={service.image ? (service.image.startsWith('http') ? service.image : import.meta.env.VITE_BASE_URL + '/' + service.image.replace(/\\/g, '/')) : ''}
                      alt={service.name || service.title}
                      className="w-32 h-32 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.name || service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <button className="font-medium text-sm tracking-wide text-gray-400 hover:text-gray-600 transition-colors">
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expertise;