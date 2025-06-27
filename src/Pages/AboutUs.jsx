import React from 'react';
import { Code, Smartphone, MessageSquare } from 'lucide-react';
import IteckFooter from '../components/Footer/Footer';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Navbar from '../components/Navbar/Navbar';
import FloatingBubbles from './Animation';

const teamMembers = [
    {
        name: "Michael Edwards",
        title: "CEO Founder",
        img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
    },
    {
        name: "Bobby Kane",
        title: "CTO",
        img: "https://images.pexels.com/photos/3778875/pexels-photo-3778875.jpeg",
    },
    {
        name: "Robert Downey Jr",
        title: "Project Manager",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
        name: "Andrew Robertson",
        title: "Marketing Leader",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
];

export default function AboutUs() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="mt-60 mb-8">
                <FloatingBubbles />
            </div>

            <div className="w-full min-h-screen relative overflow-hidden">
                {/* Left decorative element - responsive positioning */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 lg:-translate-x-8 md:-translate-x-6 sm:-translate-x-4 hidden sm:block">
                    <div className="relative scale-75 md:scale-90 lg:scale-100">
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

                {/* Top right decorative element - responsive positioning and scaling */}
                <div className="absolute right-4 md:right-10 lg:right-20 top-10 md:top-16 lg:top-20">
                    <div className="relative scale-75 md:scale-90 lg:scale-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg transform rotate-45 shadow-lg"></div>
                        <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                    </div>
                </div>

                {/* Bottom right decorative element - responsive positioning and scaling */}
                <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 right-4 md:right-10 lg:right-16 hidden md:block">
                    <div className="relative transform rotate-12 scale-75 md:scale-90 lg:scale-100">
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

                {/* Main content - responsive text and spacing */}
                <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-8 md:py-16">
                    <div className="text-center max-w-6xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-4 md:mb-6">
                            We provide perfect
                            <br />
                            <span className="block mt-2 md:mt-0">IT Solutions & Technology for</span>
                            <span className="block mt-2 md:mt-0">
                                any{' '}
                                <span className="relative inline-block">
                                    Startups
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2" viewBox="0 0 200 8">
                                        <path d="M0 4 Q50 0 100 4 T200 4" stroke="#60A5FA" strokeWidth="3" fill="none" className="opacity-80" />
                                    </svg>
                                </span>
                                <span className="ml-2 md:ml-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">✏️</span>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
                            Iteck helps you unify your brand identity by collecting, storing and distributing
                            <br className="hidden lg:block" />
                            design tokens and assets — automatically.
                        </p>

                        <div className="flex justify-center items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-2xl md:text-3xl">⭐</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Reasons Section - responsive grid and spacing */}
            <div className="py-8 md:py-12 lg:py-16 px-4">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Top <span className="text-blue-600">Reasons</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Unify your business data in one simple ecommerce dashboard
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 mx-4 md:mx-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative">
                            {/* Card 1 */}
                            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:h-full lg:after:w-px lg:after:bg-gray-300 lg:after:mx-4 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200 lg:border-none">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Code className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Front-End Friendly</h3>
                                    <p className="text-gray-600 mt-2">
                                        Easy-to-use interfaces built with modern design principles.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:h-full lg:after:w-px lg:after:bg-gray-300 lg:after:mx-4 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200 lg:border-none">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Smartphone className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Affordable Price</h3>
                                    <p className="text-gray-600 mt-2">
                                        Budget-friendly plans tailored for startups and businesses.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">24/7 Support</h3>
                                    <p className="text-gray-600 mt-2">
                                        Reliable support to assist you anytime, anywhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section - responsive layout and text */}
            <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <div className="lg:w-1/2 mb-8 md:mb-10 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                        Iteck's <br />
                        <span className="text-blue-600 underline underline-offset-4 decoration-blue-300">
                            Philosophy
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-4 md:mt-6 max-w-md mx-auto lg:mx-0">
                        Like any great agency, we are only as good as the result we deliver
                        of our recent work. Our developers are committed to maintaining the
                        highest web standards so that your site.
                    </p>

                    <div className="mt-6 md:mt-8 lg:mt-10 space-y-4 md:space-y-6 text-black font-semibold">
                        <div className="border-b border-gray-200 pb-2 hover:border-blue-500 cursor-pointer transition duration-200">
                            Become 1st in the IT industrial
                        </div>
                        <div className="border-b border-gray-200 pb-2 hover:border-blue-500 cursor-pointer transition duration-200">
                            Competitive Price
                        </div>
                        <div className="pb-2 hover:border-b hover:border-blue-500 cursor-pointer transition duration-200">
                            Enhance the quality of life
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src="https://digitalzeroz.com/assets/img/about/digital-zero-001.png"
                        alt="Philosophy illustration"
                        className="max-w-full w-full max-w-md lg:max-w-full h-auto object-contain"
                    />
                </div>
            </section>

            <div className="bg-white py-8 md:py-12 lg:py-16 px-4 md:px-12 lg:px-20">
            </div>

            <IteckFooter />
        </div>
    );
}