import React from 'react';
import { Code, Smartphone, MessageSquare } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="min-h-screen">
            <div className="w-full h-screen relative overflow-hidden">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                    <div className="relative">
                        <div className="w-20 h-32 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full relative transform rotate-12">
                            <div className="absolute top-6 -left-2 w-6 h-12 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full transform -rotate-45"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </div>

                        <div className="absolute top-8 left-16 w-40 h-28 relative">
                            <div className="w-full h-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 rounded-full relative shadow-2xl">
                                <div className="absolute inset-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full">
                                    <div className="absolute inset-3 bg-gradient-to-r from-purple-400 to-blue-300 rounded-full">
                                        <div className="absolute inset-2 bg-white opacity-30 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 space-y-2">
                                    <div className="w-8 h-0.5 bg-purple-400 rounded-full opacity-70"></div>
                                    <div className="w-12 h-0.5 bg-purple-400 rounded-full opacity-70"></div>
                                    <div className="w-8 h-0.5 bg-purple-400 rounded-full opacity-70"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-20 top-20">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg transform rotate-45 shadow-lg"></div>
                        <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                    </div>
                </div>

                <div className="absolute bottom-16 right-16">
                    <div className="relative transform rotate-12">
                        <div className="w-32 h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl relative">
                            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl">
                                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-purple-400 rounded-full"></div>
                                <div className="absolute top-6 inset-x-2 bottom-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-80">
                                    <div className="absolute inset-2 bg-white opacity-10 rounded-lg"></div>
                                </div>
                            </div>

                            <div className="absolute -right-2 top-2 w-32 h-40 bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl -z-10 transform translate-x-1"></div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex items-center justify-center px-8">
                    <div className="text-center max-w-6xl w-full">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-black leading-tight mb-6">
                            We provide perfect
                            <br />
                            <span className="block">IT Solutions & Technology for</span>
                            <span className="block">
                                any{' '}
                                <span className="relative inline-block">
                                    Startups
                                    <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                                        <path d="M0 4 Q50 0 100 4 T200 4" stroke="#60A5FA" strokeWidth="3" fill="none" className="opacity-80" />
                                    </svg>
                                </span>
                                <span className="ml-4 text-6xl">✏️</span>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Iteck helps you unify your brand identity by collecting, storing and distributing
                            <br className="hidden md:block" />
                            design tokens and assets — automatically.
                        </p>

                        <div className="flex justify-center items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-3xl">⭐</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            Top <span className="text-blue-600">Reasons</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Unify your business data in one simple ecommerce dashboard
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Card 1 */}
                            <div className="flex items-start space-x-4 relative md:after:content-[''] md:after:absolute md:after:top-0 md:after:right-0 md:after:h-full md:after:w-px md:after:bg-gray-300 md:after:mx-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Code className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Front-End Friendly</h3>
                                    <p className="text-gray-600 mt-2">
                                        Easy-to-use interfaces built with modern design principles.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-start space-x-4 relative md:after:content-[''] md:after:absolute md:after:top-0 md:after:right-0 md:after:h-full md:after:w-px md:after:bg-gray-300 md:after:mx-4">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Smartphone className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Affordable Price</h3>
                                    <p className="text-gray-600 mt-2">
                                        Budget-friendly plans tailored for startups and businesses.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
                                    <p className="text-gray-600 mt-2">
                                        Reliable support to assist you anytime, anywhere.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}