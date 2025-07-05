import React, { useEffect, useState } from 'react';
import Logo from '../assets/Icon.png';

export default function Loader() {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // Increased to 5 seconds for more spinning time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative w-60 h-60 flex items-center justify-center">

        {/* Outer Circle */}
        <div className="absolute inset-0 w-60 h-60">
          <svg
            className={`w-full h-full -rotate-90 ${isSpinning ? '' : ''}`}
            style={{
              animation: isSpinning ? 'spin 1.2s linear infinite' : 'none',
            }}
          >
            <circle
              cx="120"
              cy="120"
              r="105"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="350 200"
              strokeLinecap="round"
              className="text-gray-500"
            />
          </svg>
        </div>

        {/* Middle Circle */}
        <div className="absolute inset-4 w-52 h-52">
          <svg
            className="w-full h-full -rotate-90"
            style={{
              animation: isSpinning ? 'spinReverse 1.8s linear infinite' : 'none',
            }}
          >
            <circle
              cx="104"
              cy="104"
              r="90"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="300 170"
              strokeLinecap="round"
              className="text-purple-300"
            />
          </svg>
        </div>

        {/* Inner Circle */}
        <div className="absolute inset-8 w-44 h-44">
          <svg
            className="w-full h-full -rotate-90"
            style={{
              animation: isSpinning ? 'spin 0.8s linear infinite' : 'none',
            }}
          >
            <circle
              cx="88"
              cy="88"
              r="75"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="250 140"
              strokeLinecap="round"
              className="text-pink-300"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
