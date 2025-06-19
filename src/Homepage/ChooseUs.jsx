import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function ChooseUs() {
    return (
        <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="text-blue-500 font-semibold text-sm uppercase tracking-wider underline">
                            WHY CHOOSE US
                        </div>

                        <h2 className="text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Track And Analyze Your Business Statistics
                        </h2>

                        <div className="flex justify-between gap-6 mt-16">
                            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white w-1/2">
                                <div className="w-16 h-16 mb-4">
                                    <svg viewBox="0 0 64 64" className="w-full h-full">
                                        <path d="M12 20 L32 8 L52 20 L52 44 L32 56 L12 44 Z" fill="#4338ca" />
                                        <path d="M12 20 L32 8 L52 20 L32 32 Z" fill="#6366f1" />
                                        <path d="M32 32 L52 20 L52 44 L32 56 Z" fill="#3730a3" />
                                        <rect x="26" y="24" width="12" height="8" fill="#fbbf24" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">Target Audience</h3>
                            </div>

                            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white w-1/2">
                                <div className="w-16 h-16 mb-4">
                                    <svg viewBox="0 0 64 64" className="w-full h-full">
                                        <ellipse cx="32" cy="48" rx="20" ry="6" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="46" rx="20" ry="6" fill="#6366f1" />
                                        <ellipse cx="32" cy="36" rx="18" ry="5" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="34" rx="18" ry="5" fill="#8b5cf6" />
                                        <ellipse cx="32" cy="24" rx="16" ry="4" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="22" rx="16" ry="4" fill="#a855f7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">Various Options</h3>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-16">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-colors">
                                <span>Get Started Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex items-center space-x-3">
                                <div className="text-gray-500">
                                    <p className="text-sm">Support Email</p>
                                    <p className="font-semibold text-gray-900">info@support-iteck.com</p>
                                </div>
                                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://iteck-html.themescamp.com/assets/img/choose_us/3d_vector1.svg"
                            alt="Choose Us"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-100 opacity-50 rounded-lg"></div>    
                    </div>
                </div>
            </div>
        </section>
    );
}