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
  const startTimeRef = useRef(Date.now());

  // Create multiple copies for seamless infinite scroll
  const infiniteServices = [...services, ...services, ...services];
  const cardWidth = 280; // Width including gap
  const serviceLength = services.length;

  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTimeRef.current;
      const speed = 25; // pixels per second

      const newTranslateX = (elapsedTime * speed / 1000) % (serviceLength * cardWidth);
      setTranslateX(newTranslateX);

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
  const getWaveOffset = (index) => {
    const waveHeight = 60;
    const frequency = 2;
    const time = translateX * 0.05;
    const phase = (index / serviceLength) * frequency * 2 * Math.PI + time;
    const offset = Math.sin(phase) * waveHeight;
    return offset;
  };



  return (
    <div className="w-full overflow-hidden py-24 bg-gray-50">
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
            className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 hover:scale-105"
            style={{
              transform: `translateY(${getWaveOffset(index)}px)`,
              height: '400px', 
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="flex-shrink-0 mb-4">
              <div className="text-6xl transform hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="flex-shrink-0 mt-4">
                <button
                  className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-8">
        <svg width="100%" height="80" className="opacity-30" viewBox="0 0 100 80">
          <path
            d={`M 0,40 ${Array.from({ length: 50 }, (_, i) => {
              const x = (i / 49) * 100;
              const y = 40 + Math.sin((i / 49) * 1.5 * 2 * Math.PI + translateX * 0.01) * 15;
              return `L ${x},${y}`;
            }).join(' ')}`}
            stroke="url(#gradient)"
            strokeWidth="2"
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