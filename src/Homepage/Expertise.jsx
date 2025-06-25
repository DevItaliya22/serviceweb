import React from 'react';
import ML from "../assets/28.png";
import BI from "../assets/BI.png";
import AI from "../assets/AI.png";
import Artificial from "../assets/Artificial.png";

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "Business Intelligence",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: Artificial
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: ML
    },
    {
      id: 3,
      title: "BI Implementation",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: BI
    },
    {
      id: 4,
      title: "AI Data Analytics",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: AI
    },
    {
      id: 5,
      title: "Data Visualization",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: BI
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Provides easy-to-use platform and tool for app analytics data.",
      icon: ML
    }
  ];

  const duplicatedServices = [...services, ...services];


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
`}</style>


      <div className="absolute top-20 left-10 w-8 h-8 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute top-40 left-20 w-4 h-4 bg-indigo-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-indigo-200 rounded transform rotate-45 opacity-30"></div>
      <div className="absolute bottom-20 right-32 w-6 h-6 bg-orange-300 rounded transform rotate-45 opacity-40"></div>

      <div className="w-screen mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">OUR SERVICES</p>
          <h1 className="text-5xl font-bold text-gray-900">Our Expertise Field</h1>
        </div>

        <div className="relative overflow-hidden">
          <div className="scroll-animation flex gap-8 w-max">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 w-80 h-96 flex flex-col justify-center border border-gray-100">
                  <img src={service.icon} alt={service.title} className="w-32 h-32 mx-auto mb-4" />

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
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
        </div>
      </div>
    </div>
  );
};

export default Expertise;