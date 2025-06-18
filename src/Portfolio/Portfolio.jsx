import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Project from './Project';
import IteckFooter from '../components/Footer/Footer';

const Portfolio = () => {
    return (
        <div className="">
            <Navbar />
            <main className="pt-32 pb-16">
                <section className="text-center px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="text-gray-900">Our </span>
                            <span className="text-blue-600 bg-[linear-gradient(transparent_60%,#dbeafe_60%)] px-2">
                                Projects
                            </span>
                        </h1>
                        
                        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                            We have an experienced team of production and inspection personnel to ensure quality.
                        </p>
                    </div>
                </section>

                <section className="px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <Project />
                    </div>
                </section>
                <section className="px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative py-16 px-8 text-center overflow-hidden">
                            <div className="absolute inset-0 opacity-5">
                                <svg width="100%" height="100%" className="absolute inset-0">
                                    <defs>
                                        <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                                            <line x1="0" y1="0" x2="0" y2="40" stroke="#000000" strokeWidth="1"/>
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12 max-w-4xl mx-auto">
                                    Access your business potentials today & find opportunity for{' '}
                                    <span className="relative inline-block">
                                        bigger success
                                        <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                                            <path d="M0,4 Q50,0 100,4 T200,4" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                                        </svg>
                                        <span className="absolute -right-6 -top-4 text-3xl">✏️</span>
                                    </span>
                                </h2>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        Start A Project Now
                                    </button>
                                    <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                        See Pricing & Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <IteckFooter />
        </div>
    );
};

export default Portfolio;