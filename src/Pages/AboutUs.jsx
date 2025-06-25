import React from 'react';
import { Code, Smartphone, MessageSquare } from 'lucide-react';
import IteckFooter from '../components/Footer/Footer';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Navbar from '../components/Navbar/Navbar';

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
            <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                        Iteck’s <br />
                        <span className="text-blue-600 underline underline-offset-4 decoration-blue-300">
                            Philosophy
                        </span>
                    </h2>

                    <p className="text-gray-500 mt-6 max-w-md">
                        Like any great agency, we are only as good as the result we deliver
                        of our recent work. Our developers are committed to maintaining the
                        highest web standards so that your site.
                    </p>

                    <div className="mt-10 space-y-6 text-black font-semibold">
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
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </section>

            <div className="bg-white py-16 px-4 md:px-12 lg:px-20">
                {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <div>
                        <img
                            src="https://rrfinserve.com/wp-content/uploads/2023/03/img_012.jpg"
                            alt="Arrow Man"
                            className="w-full h-auto"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600 relative inline-block">
                                Services
                                <span className="absolute left-0 bottom-0 w-full h-2 bg-blue-100 -z-10"></span>
                            </span>
                        </h2>

                        <p className="text-gray-600 mb-10">
                            With Iteck Marketplace, choose from hundreds of payment gateways for your customers.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
                                    alt="IT Consultation"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">IT Consultation</h3>
                                    <p className="text-gray-600 mt-1">
                                        Nanotechnology immersion along the information high will close the loop on focusing solely
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                                    alt="Software Design"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">Software Design & Development</h3>
                                    <p className="text-gray-600 mt-1">
                                        Our top-notch Experts with much years of experience certail will give best solutions for your business
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1161/1161388.png"
                                    alt="Cloud Services"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">Cloud Services</h3>
                                    <p className="text-gray-600 mt-1">
                                        Customer support is always our number one priority.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition">
                                See More
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <section className="py-16 bg-[#f7f8fd]">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our <span className="text-blue-600 underline decoration-blue-300">Leaders</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Professional & Friendly is our slogan. Meet our leaders
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-72 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="text-white hover:text-blue-400">
                                        <FaLinkedinIn size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-blue-400">
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-blue-400">
                                        <FaPinterestP size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}

            <IteckFooter />
        </div>
    );
}