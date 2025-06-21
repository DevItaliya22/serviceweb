import React from "react";
import { FaSlack, FaGithub, FaDiscord, FaTrello, FaDropbox, FaSpotify, FaCube } from "react-icons/fa";
import { FcGoogle, FcAndroidOs } from "react-icons/fc";
import logo from '../assets/logo_home8_icon.png';
import fig1 from '../assets/5M.png';
import fig2 from '../assets/3M.png';
import fig3 from '../assets/Dm.png';
import fig4 from '../assets/100k.png';

const Integrations = () => {
    return (
        <div className="w-screen min-h-screen bg-white relative overflow-visible flex flex-col items-center">
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 z-2 ">
                <div className="w-32 h-64 bg-gradient-to-r from-orange-400 to-orange-500 rounded-r-full opacity-60"></div>
            </div>

            <div className="absolute bottom-20 right-20 z-10">
                <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
                        <FaSpotify size={24} className="text-white transform -rotate-12 hover:rotate-0 transition-all duration-500" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-300 to-purple-500 rounded-lg opacity-50 blur-sm"></div>
                </div>
            </div>

            <div className="pt-20 z-10 text-center">
                <div className="inline-flex items-center px-6  backdrop-blur-lg  mb-2   ">
                    <span className="text-blue-500 underline uppercase tracking-widest text-sm font-bold">
                        Support Platform
                    </span>
                </div>
                <h1 className="text-4xl font-extrabold text-black mb-4">
                    Integrations Platforms
                </h1>
            </div>

            <div className="relative w-[1000px] h-[1000px] mt-12 flex items-center justify-center">
                <div className="absolute w-[1000px] h-[1000px] rounded-full border-2 border-dashed border-gray-400 border-opacity-60 animate-spin"
                    style={{ animationDuration: '30s' }}></div>

                <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-dashed border-gray-400 border-opacity-70 animate-spin"
                    style={{ animationDuration: '40s' }}></div>

                <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-400 border-opacity-80 animate-spin"
                    style={{ animationDuration: '25s' }}></div>

                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-blue-300/50 border-2 border-gray-100">
                        <FaSlack size={90} className="text-[#4A154B]" />
                    </div>
                </div>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-green-300/50 border-2 border-gray-100">
                        <FcGoogle size={90} />
                    </div>
                </div>

                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-gray-300/50 border-2 border-gray-100">
                        <FaGithub size={90} className="text-black" />
                    </div>
                </div>


                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-blue-300/50 border-2 border-gray-100">
                        <FaDiscord size={90} />
                    </div>
                </div>

                <div className="absolute top-[calc(50%-200px)] left-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-purple-300/50 border-2 border-gray-100">
                        <FaGithub size={90} className="text-black" />
                    </div>
                </div>

                <div className="absolute bottom-[calc(50%-200px)] left-1/2 transform translate-y-full -translate-x-1/2 hover:scale-110 transition-all duration-300">
                    <div className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-orange-300/50 border-2 border-gray-100">
                        <FcAndroidOs size={190} />
                    </div>
                </div>

                <div className="absolute z-10">
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[130px] h-[130px] object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Overlapping Stats Section */}
            <div className="w-full relative  z-20">
                <div className="bg-white h-1/2 absolute top-0 left-0 right-0 z-[-1]"></div>
                <div className="bg-[#f1effa] h-1/2 absolute bottom-0 left-0 right-0 z-[-1]"></div>

                <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center bg-white shadow-md rounded-xl py-10 px-8">
                    {/* 1 */}
                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <img
                                src={fig1}
                                alt="Project Management Icon"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">3 M+</h3>
                            <p className="text-gray-500 text-sm">Projects Executed</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <img
                                src={fig2}
                                alt="Data Analytics Icon"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">5 M+</h3>
                            <p className="text-gray-500 text-sm">Data Analytics</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <img
                                src={fig3}
                                alt="Data Management Icon"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">3 M+</h3>
                            <p className="text-gray-500 text-sm">Data Management</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex items-center gap-4 mb-6">
                        <div>
                            <img
                                src={fig4}
                                alt="Happy Users Icon"
                                className="w-16 h-16 mx-auto"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">100 K+</h3>
                            <p className="text-gray-500 text-sm">Happy Users</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Integrations;