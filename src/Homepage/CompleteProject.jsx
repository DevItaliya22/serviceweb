import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CompletedProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            clientName: "Miranda H. Halim",
            budget: "$12,000",
            estimate: "3 Months",
            title: "Hayden Co. Market Data Analysis",
            description: "Stay focused and productive with a clean and clutter-free note space the flexible ways to organize. Everything melancholy uncommonly but solicitude.",
            stats: {
                totalOrders: "689.58",
                avgOrder: "586.65"
            }
        },
        {
            id: 2,
            clientName: "Sarah J. Thompson",
            budget: "$8,500",
            estimate: "2 Months",
            title: "TechFlow Analytics Dashboard",
            description: "Streamline your workflow with intelligent data visualization and real-time monitoring capabilities. Comprehensive solutions for modern businesses.",
            stats: {
                totalOrders: "542.32",
                avgOrder: "412.18"
            }
        },
        {
            id: 3,
            clientName: "David R. Martinez",
            budget: "$15,200",
            estimate: "4 Months",
            title: "CloudSync Integration Platform",
            description: "Seamless integration between multiple cloud services with advanced security protocols. Efficient synchronization for enterprise-level operations.",
            stats: {
                totalOrders: "721.89",
                avgOrder: "638.44"
            }
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-2">CASE STUDY</p>
                        <h1 className="text-4xl font-bold text-gray-900">Completed Projects</h1>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-gray-300 hover:bg-white transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-12 relative overflow-visble">
                            <div className="absolute top-4 right-4">
                                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white text-sm font-medium">
                                    ANALYSIS
                                </span>
                            </div>

                            <div className="flex justify-center items-center h-64">
                                <div className="relative">
                                    <div className="w-32 h-32 bg-white rounded-full relative shadow-lg">
                                        <div className="w-24 h-16 bg-gray-900 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="flex justify-center items-center h-full gap-3">
                                                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                            <div className="w-8 h-4 border-b-2 border-gray-900 rounded-b-full"></div>
                                        </div>
                                    </div>

                                    <div className="w-4 h-4 bg-white bg-opacity-40 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
                                </div>
                            </div>

                            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg" style={{ width: '120px' }}>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>Total Orders</span>
                                    <span className="text-gray-900 font-bold text-sm">{currentProject.stats.totalOrders}</span>
                                </div>

                                <div className="mt-4 flex items-center gap-3">

                                    <div className="relative w-12 h-12">
                                        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">

                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="2"
                                            />

                                            <path
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="url(#gradient)"
                                                strokeWidth="2"
                                                strokeDasharray="75, 100"
                                                strokeLinecap="round"
                                            />

                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="#f97316" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-semibold text-gray-700">{currentProject.stats.avgOrder}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs">Avg Order</div>
                                        <div className="text-gray-400 text-xs">Monthly</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-8 left-8 w-16 h-16 border border-white border-opacity-20 rounded-full"></div>
                            <div className="absolute bottom-8 right-8 w-24 h-24 border border-white border-opacity-20 rounded-full"></div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="text-sm font-medium">HAYDEN</span>
                            <div className="text-xs">BUSINESS INTELLIGENCE</div>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            {currentProject.title}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {currentProject.description}
                        </p>

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Client Name</div>
                                    <div className="font-semibold text-gray-900">{currentProject.clientName}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Budget</div>
                                    <div className="font-semibold text-gray-900">{currentProject.budget}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Estimate</div>
                                    <div className="font-semibold text-gray-900">{currentProject.estimate}</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompletedProject;