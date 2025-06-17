import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, PhoneCall, Mic, Video, MoreHorizontal, Settings } from 'lucide-react';

export default function IteckLandingPage() {
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50  relative overflow-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'py-4'
      }`}>
        <nav className="flex items-center justify-between max-w-7xl mx-auto p-6">
          <div className="flex items-center space-x-3">
            <div className="flex">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-lg -ml-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Iteck</h1>
              <p className="text-sm text-gray-600 -mt-1">DATA ANALYSIS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Homes</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Pages</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Portfolio</span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Blog</span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span>
          </div>

          <button className={`border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium ${
            isScrolled ? 'bg-blue-50' : 'bg-white'
          }`}>
            Request A Demo →
          </button>
        </nav>
      </header>

      <main className="relative z-10 px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-blue-600 font-semibold text-lg tracking-wide">
                  WE BRING IDEAS TO LIFE
                </p>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Ai & Data Machine
                  <br />
                  <span className="text-gray-900">Deep Solutions.</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                Subscribe & Get 7-Days Trail
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Business email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap">
                  Get A Demo →
                </button>
              </div>

              <p className="text-sm text-gray-500">
                *** We are not going to save your data
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute top-20 left-10 w-80 h-80">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path
                      d="M50 200 Q200 50 350 200 Q200 350 50 200"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="40"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute top-16 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-12 shadow-lg"></div>
                <div className="absolute top-32 right-8 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform -rotate-12 shadow-lg"></div>
                
                <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg transform rotate-45 shadow-lg"></div>
                <div className="absolute bottom-20 right-24 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
                
                <div className="absolute top-40 left-32 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-gray-600">15TH</div>
                  <div className="text-sm font-bold text-purple-600">83%</div>
                </div>

                <div className="absolute bottom-40 right-16 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-gray-600">125M $</div>
                </div>

                <div className="absolute top-8 left-1/2 w-8 h-20 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full transform -rotate-12 shadow-lg"></div>
                <div className="absolute bottom-8 left-8 w-16 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transform rotate-45 shadow-lg"></div>
                
                <div className="absolute top-1/2 right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
                <div className="absolute bottom-16 left-1/3 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg transform rotate-12 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed top-32 right-6 bg-gray-900 rounded-lg overflow-hidden shadow-2xl z-50" style={{ width: '280px', height: '200px' }}>
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-white text-sm font-medium">Video call - WhatsApp</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative h-full bg-gray-700">
          <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 relative">
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center">
                <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 w-12 h-12 bg-gray-600 rounded-lg"></div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <PhoneCall className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 space-y-4 z-40">
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow">
          <Settings className="w-6 h-6 text-gray-600" />
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow">
          <span className="text-white text-xl">💬</span>
        </div>
      </div>

      <div className="absolute top-1/4 left-8 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
}