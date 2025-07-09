import React, { useState, useEffect } from "react";
import { FaSlack, FaGithub, FaDiscord, FaTrello, FaDropbox, FaSpotify, FaCube } from "react-icons/fa";
import { FcGoogle, FcAndroidOs } from "react-icons/fc";
import { getStats } from "../api/stats";
import { getPlatform } from "../api/platform";
import logo from '../assets/logo_home8_icon.png';
import fig1 from '../assets/5M.png';
import fig2 from '../assets/3M.png';
import fig3 from '../assets/Dm.png';
import fig4 from '../assets/100K.png';

const Integrations = () => {

    const [stats, setStats] = useState({
        projectsExecuted: 0,
        dataAnalytics: 0,
        dataManagement: 0,
        happyUsers: 0
    });
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await getStats();
                setStats({
                    projectsExecuted: data.projectsExecuted || 0,
                    dataAnalytics: data.dataAnalytics || 0,
                    dataManagement: data.dataManagement || 0,
                    happyUsers: data.happyUsers || 0
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        const fetchPlatforms = async () => {
            try {
                const res = await getPlatform();
                if (res && res.success && Array.isArray(res.data)) {
                    setPlatforms(res.data);
                }
            } catch (error) {
                console.error('Error fetching platforms:', error);
            }
        };

        fetchStats();
        fetchPlatforms();
    }, []);
    return (
        <div className="w-screen min-h-screen bg-white relative overflow-visible flex flex-col items-center">
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 z-2">
                <div className="w-16 h-32 sm:w-24 sm:h-48 lg:w-32 lg:h-64 bg-gradient-to-r from-orange-400 to-orange-500 rounded-r-full opacity-60"></div>
            </div>
            <div className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 lg:bottom-20 lg:right-20 z-10">
                <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 flex items-center justify-center">
                        <FaSpotify size={20} className="sm:text-xl lg:text-2xl text-white transform -rotate-12 hover:rotate-0 transition-all duration-500" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-300 to-purple-500 rounded-lg opacity-50 blur-sm"></div>
                </div>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20 z-10 text-center px-4">
                <div className="inline-flex items-center px-4 sm:px-6 backdrop-blur-lg mb-2">
                    <span className="text-blue-500 underline uppercase tracking-widest text-xs sm:text-sm font-bold">
                        Support Platform
                    </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-4">
                    Integrations Platforms
                </h1>
            </div>

            {/* Circular Integration Layout - Responsive */}
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center">
                {/* Outer Circle */}
                <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-400 border-opacity-60 animate-spin"
                    style={{ animationDuration: '30s' }}></div>

                {/* Middle Circle */}
                <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-dashed border-gray-400 border-opacity-70 animate-spin"
                    style={{ animationDuration: '40s' }}></div>

                {/* Inner Circle */}
                <div className="absolute w-[40%] h-[40%] rounded-full border-2 border-dashed border-gray-400 border-opacity-80 animate-spin"
                    style={{ animationDuration: '25s' }}></div>

                {/* Dynamic Platform Icons in Original Positions */}
                {(() => {
                    // Define the 6 positions as before
                    const positions = [
                        // left, right, top, bottom, top-middle, bottom-middle
                        {
                            style: 'absolute left-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300',
                        },
                        {
                            style: 'absolute right-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300',
                        },
                        {
                            style: 'absolute top-0 left-1/2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300',
                        },
                        {
                            style: 'absolute bottom-0 left-1/2 transform -translate-x-1/2  hover:scale-110 transition-all duration-300',
                        },
                        {
                            style: 'absolute top-[25%] sm:top-[30%] md:top-[25%] lg:top-[calc(50%-200px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300',
                        },
                        {
                            style: 'absolute bottom-[25%] sm:bottom-[30%] md:bottom-[25%] lg:bottom-[calc(50%-200px)] left-1/2 transform -translate-x-1/2 translate-y-1/2 hover:scale-110 transition-all duration-300',
                        },
                    ];
                    return positions.map((pos, idx) => {
                        if (!platforms[idx]) return null;
                        const platform = platforms[idx];
                        return (
                            <div key={platform._id} className={pos.style}>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[130px] lg:h-[130px] rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-100">
                                    <img
                                        src={
                                            platform.image.startsWith('http')
                                                ? platform.image
                                                : `${import.meta.env.VITE_BASE_URL}/${platform.image.replace(/\\/g, '/')}`
                                        }
                                        alt={platform.name}
                                        className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] object-contain"
                                    />
                                </div>
                            </div>
                        );
                    });
                })()}

                {/* Center Logo */}
                <div className="absolute z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[130px] lg:h-[130px] object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section - Responsive */}
            <div className="w-full relative z-20 px-4 sm:px-6 lg:px-8">
                <div className="bg-white h-1/2 absolute top-0 left-0 right-0 z-[-1]"></div>
                <div className="bg-[#f1effa] h-1/2 absolute bottom-0 left-0 right-0 z-[-1]"></div>

                <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
                    {/* Mobile: Stack vertically, Tablet+: Grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {/* Project Executed */}
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div>
                                <img
                                    src={fig1}
                                    alt="Project Management Icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{stats.projectsExecuted}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">Projects Executed</p>
                            </div>
                        </div>

                        {/* Data Analytics */}
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div>
                                <img
                                    src={fig2}
                                    alt="Data Analytics Icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{stats.dataAnalytics}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">Data Analytics</p>
                            </div>
                        </div>

                        {/* Data Management */}
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div>
                                <img
                                    src={fig3}
                                    alt="Data Management Icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{stats.dataManagement}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">Data Management</p>
                            </div>
                        </div>

                        {/* Happy Users */}
                        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                            <div>
                                <img
                                    src={fig4}
                                    alt="Happy Users Icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{stats.happyUsers}</h3>
                                <p className="text-gray-500 text-xs sm:text-sm">Happy Users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Integrations;