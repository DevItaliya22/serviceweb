import React, { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'Content Strategy',
    description:
      'You can provide the answers that your potential customers are trying to find, so you can become the industry.',
    icon: '🎯',
  },
  {
    title: 'Google/FB Ads',
    description:
      'Get more website traffic, more customers & more online visibility with powerful SEO services.',
    icon: '📣',
  },
  {
    title: 'Email Marketing',
    description:
      'Your website has to impress your visitors within just a few seconds.',
    icon: '📧',
  },
  {
    title: 'Social Media',
    description:
      'Get more website traffic, more customers for your social channel',
    icon: '📱',
  },
  {
    title: 'Website Design and Development',
    description:
      'Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated',
    icon: '🖥️',
  },
  {
    title: 'PPC Marketing',
    description:
      'Optimize your website on Google results with targeted PPC campaigns.',
    icon: '💰',
  },
  {
    title: 'SEO Services',
    description:
      'Improve your search rankings and drive organic traffic to your website.',
    icon: '🔍',
  },
];

export default function WaveCarousel() {
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef();
  const lastTimeRef = useRef(0);

  // Create multiple copies for seamless infinite scroll
  const infiniteServices = [...services, ...services, ...services, ...services];
  const cardWidth = 280; // Width including gap
  const serviceLength = services.length;

  useEffect(() => {
    const animate = (currentTime) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      const speed = 0.05; // Pixels per millisecond

      setTranslateX(prev => {
        const newTranslateX = prev + deltaTime * speed;
        
        // Reset position seamlessly when we've moved one full set
        if (newTranslateX >= serviceLength * cardWidth) {
          return newTranslateX - serviceLength * cardWidth;
        }
        
        return newTranslateX;
      });

      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [serviceLength, cardWidth]);

  // Create a smooth wave pattern using sine function
  const getWaveOffset = (index, scrollOffset = 0) => {
    const waveHeight = 120; // Maximum wave height in pixels
    const frequency = 2; // Number of complete waves across all items
    const phase = ((index + scrollOffset * 0.01) / serviceLength) * frequency * 2 * Math.PI;
    const offset = Math.sin(phase) * waveHeight;
    return offset;
  };

  // Calculate current index for dots indicator
  const currentIndex = Math.floor((translateX / cardWidth) % serviceLength);

  return (
    <div className="w-full overflow-hidden py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div 
        className="flex gap-6"
        style={{
          transform: `translateX(-${translateX}px)`,
          width: `${infiniteServices.length * cardWidth}px`
        }}
      >
        {infiniteServices.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-96 bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:scale-105 flex flex-col"
            style={{
              transform: `translateY(${getWaveOffset(index, translateX)}px)`,
            }}
          >
            <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Wave visualization at bottom */}
      <div className="mt-8 px-8">
        <svg width="100%" height="120" className="opacity-30">
          <path
            d={`M 0 60 ${services.map((_, index) => {
              const x = (index / (services.length - 1)) * 100;
              const y = 60 + getWaveOffset(index, translateX) * 0.5;
              return `L ${x} ${y}`;
            }).join(' ')}`}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}