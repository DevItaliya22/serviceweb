import React from "react";
import {
  SiDropbox,
  SiGooglecalendar,
  SiSlack,
  SiPaypal,
} from "react-icons/si";
import { RiRocketLine } from "react-icons/ri";

export default function IconsDisplay() {
  const icons = [
    { icon: <SiDropbox className="text-blue-600" size={50} />, bg: "bg-indigo-100" },
    { icon: <SiGooglecalendar className="text-blue-500" size={50} />, bg: "bg-purple-200" },
    { icon: <RiRocketLine className="text-orange-400" size={50} />, bg: "bg-yellow-100" },
    { icon: <SiSlack className="text-green-600" size={50} />, bg: "bg-red-100" },
    { icon: <SiPaypal className="text-blue-800" size={50} />, bg: "bg-indigo-100" },
  ];

  const blobs = [
    "top-[30%] left-[6%] bg-purple-500",
    "top-[60%] left-[20%] bg-purple-300",
    "top-[55%] left-[35%] bg-red-500",
    "top-[25%] left-[55%] bg-red-400",
    "top-[15%] left-[80%] bg-purple-400",
  ];

  const responsiveLeft = [
    "left-[12%] sm:left-[10%] md:left-[5%]",
    "left-[25%] sm:left-[30%] md:left-[25%]",
    "left-[40%] sm:left-[50%] md:left-[45%]",
    "left-[60%] sm:left-[70%] md:left-[65%]",
    "left-[80%] sm:left-[90%] md:left-[85%]",
  ];

  return (
    <div className="relative min-h-[200px] sm:min-h-[280px] md:h-[320px] w-screen overflow-hidden">
      <style jsx>{`
        @keyframes bubbleFloat {
          0%, 100% { transform: translate(-50%, 0px) scale(1); }
          25% { transform: translate(-50%, -20px) scale(1.02); }
          50% { transform: translate(-50%, -35px) scale(1.05); }
          75% { transform: translate(-50%, -15px) scale(1.02); }
        }

        @keyframes slowBounce {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-6px) scale(1.1); opacity: 1; }
        }

        @keyframes wireFlow {
          0% { stroke-dashoffset: 0; opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: -100; opacity: 0.3; }
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes iconRotate {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        .animate-bubbleFloat {
          animation: bubbleFloat 4s ease-in-out infinite;
        }

        .animate-slowBounce {
          animation: slowBounce 3s ease-in-out infinite;
        }

        .animate-wireFlow {
          animation: wireFlow 8s linear infinite;
        }

        .animate-iconPulse {
          animation: iconPulse 2s ease-in-out infinite;
        }

        .animate-iconRotate {
          animation: iconRotate 6s ease-in-out infinite;
        }
      `}</style>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-slowBounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated wire paths */}
      <svg
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wireGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wireGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <path
          fill="none"
          stroke="url(#wireGradient1)"
          strokeWidth="3"
          strokeDasharray="10,5"
          d="M0,180 C240,90 480,270 720,120 C960,-30 1200,270 1440,120"
          className="animate-wireFlow"
        />
        <path
          fill="none"
          stroke="url(#wireGradient2)"
          strokeWidth="2"
          strokeDasharray="8,4"
          d="M0,200 C300,140 600,250 900,150 C1200,50 1440,180 1440,180"
          className="animate-wireFlow"
          style={{ animationDelay: '2s' }}
        />
        <path
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="6,3"
          d="M0,160 C360,200 720,80 1080,200 C1260,140 1440,100 1440,100"
          className="animate-wireFlow"
          style={{ animationDelay: '4s' }}
        />
      </svg>

      {/* Blobs */}
      {blobs.map((pos, idx) => (
        <div
          key={idx}
          className={`absolute w-4 h-4 rounded-full ${pos} animate-slowBounce shadow-lg`}
          style={{
            animationDelay: `${idx * 0.5}s`,
            animationDuration: `${3 + idx * 0.2}s`,
          }}
        >
          <div className="absolute inset-0 rounded-full animate-iconPulse opacity-50 bg-white"></div>
        </div>
      ))}

      {/* Floating Icons */}
      <div className="absolute top-[100px] sm:top-[110px] md:top-[120px] left-0 w-full">
        {icons.map((item, idx) => (
          <div
            key={idx}
            className={`absolute transform -translate-x-1/2 ${responsiveLeft[idx]} ${item.bg} 
                        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                        flex items-center justify-center rounded-full shadow-lg 
                        hover:shadow-xl transition-all duration-300 animate-bubbleFloat 
                        border-2 border-white/20 backdrop-blur-sm`}
            style={{ animationDelay: `${idx * 0.4}s` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50px) scale(1.15)';
              e.currentTarget.style.boxShadow = '0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div
              className="animate-iconRotate"
              style={{ animationDelay: `${idx * 0.6}s` }}
            >
              {item.icon}
            </div>

            <div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-iconPulse"
              style={{ animationDelay: `${idx * 0.4}s` }}
            />
            <div
              className="absolute inset-2 rounded-full border border-purple-300/20 animate-iconPulse"
              style={{ animationDelay: `${idx * 0.6}s` }}
            />
          </div>
        ))}
      </div>

      {/* Decorative SVG lines */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none opacity-30">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeDasharray="4,4"
          d="M72,150 Q216,100 360,150"
          filter="url(#glow)"
          className="animate-wireFlow"
          style={{ animationDelay: '1s' }}
        />
        <path
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1"
          strokeDasharray="4,4"
          d="M648,150 Q792,100 936,150"
          filter="url(#glow)"
          className="animate-wireFlow"
          style={{ animationDelay: '3s' }}
        />
      </svg>
    </div>
  );
}
