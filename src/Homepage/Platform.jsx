import React from "react";
import { FaSlack, FaGithub, FaDiscord, FaTrello, FaDropbox, FaSpotify } from "react-icons/fa";
import { FcGoogle, FcAndroidOs } from "react-icons/fc";
import logo from '../assets/logo_home8_icon.png';

const Integrations = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white-50 relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="pt-20 z-10 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 bg-opacity-10 backdrop-blur-lg border border-blue-300 border-opacity-30 mb-6">
          <span className="text-blue-700 uppercase tracking-widest text-sm font-bold">
         Integration Platform
          </span>
        </div>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
          Seamless Integrations
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Connect all your favorite tools and platforms in one unified, powerful workspace
        </p>
      </div>

      <div className="relative w-[1000px] h-[1000px] mt-12 flex items-center justify-center">
        <div className="absolute w-[1000px] h-[1000px] rounded-full border-2 border-dashed border-blue-300 border-opacity-60 animate-spin" 
             style={{animationDuration: '30s'}}></div>

        <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-dashed border-purple-300 border-opacity-70 animate-spin" 
             style={{animationDuration: '40s', animationDirection: 'reverse'}}></div>

        <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-pink-300 border-opacity-80 animate-spin" 
             style={{animationDuration: '25s'}}></div>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-blue-300/50 border-2 border-gray-100">
            <FaSlack size={30} className="text-[#4A154B]" />
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-green-300/50 border-2 border-gray-100">
            <FcGoogle size={30} />
          </div>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-gray-300/50 border-2 border-gray-100">
            <FaGithub size={28} className="text-black" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-blue-300/50 border-2 border-gray-100">
            <FcAndroidOs size={28} />
          </div>
        </div>

        <div className="absolute top-[calc(50%-200px)] left-1/2 transform -translate-x-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-purple-300/50 border-2 border-gray-100">
            <FaGithub size={28} className="text-black" />
          </div>
        </div>

        <div className="absolute bottom-[calc(50%-200px)] left-1/2 transform translate-y-full -translate-x-1/2 hover:scale-110 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-orange-300/50 border-2 border-gray-100">
            <FcAndroidOs size={28} />
          </div>
        </div>

        <div className="absolute z-10">
          <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
            <img
                src={logo}
              alt="Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 px-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
          <div className="text-gray-600">Integrations</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">1M+</div>
          <div className="text-gray-600">Connections</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
          <div className="text-gray-600">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
          <div className="text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;