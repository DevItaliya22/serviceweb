import React, { useState, useEffect } from 'react';
import { Calendar, Code, Database, MessageSquare, Users, FileText, MapPin, Truck } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { CheckCircle2 } from 'lucide-react';
import Reviews from './Reviews';
import TopServices from './TopServices';

const SoftwareServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-500" />
            </div>,
            title: "VBA Coding for Excel Automation",
            description: "Streamline your workflow with comprehensive project tracking and team collaboration tools."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Custom Website Development",
            description: "Build tailored applications and solutions that perfectly fit your business requirements."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Python coding and Integration",
            description: "Connect multiple data sources and gain insights through advanced analytics dashboards."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-500" />
            </div>,
            title: "JAVA Script Coding and Development",
            description: "Enhance customer experience with integrated support ticketing and communication systems."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Power BI - Data Analysis and Dashboards",
            description: "Secure user authentication, role-based access control, and comprehensive user profiles."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-500" />
            </div>,
            title: "MySQL Database Coding and Development",
            description: "Organize, track, and automate document processes with version control and approval workflows."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Google App Script Coding and Integration",
            description: "Integrate GPS tracking, geofencing, and location analytics for mobile and web applications."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Custom Android App development in AppSheet",
            description: "Optimize inventory management, order tracking, and supply chain visibility solutions."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-500" />
            </div>,
            title: "Platform integration and Automation via Make.com",
            description: "Leverage AI and machine learning for predictive analytics and personalized user experiences."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-500" />
            </div>,
            title: "SMS, WhatsApp Automation and Chatbot development",
            description: "Implement data security measures, encryption, and compliance with industry standards."
        },
        {
            icon: <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-500" />
            </div>,
            title: "System Integration and API coding",
            description: "Create custom software solutions that address specific business challenges and enhance operational efficiency."
        }
    ];

    const duplicatedServices = [...services, ...services];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const next = prev + 1;
                if (next >= services.length) {
                    setTimeout(() => {
                        setCurrentIndex(next);
                    }, 700); 
                    return next;
                }
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [services.length]);

    const getStaggeredMargin = (index) => {
        const pattern = index % 4;
        switch (pattern) {
            case 0: return 'mt-16'; // Down
            case 1: return 'mt-0';  // Up
            case 2: return 'mt-8';  // Middle
            case 3: return 'mt-24'; // More down
            default: return 'mt-0';
        }
    };

    return (
        <div className="py-16 px-4">
            <div className="w-screen mx-auto">
                <div className="text-center mb-12">
                    <Navbar />
                </div>

                <div className="max-w-7xl mx-auto px-4 mt-16">
                    <TopServices />
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="text-blue-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        We provide perfect IT Solutions for your business
                    </p>
                </div>
                <div className="relative mb-16 py-12">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * 280}px)`,
                                transitionDuration: currentIndex >= services.length ? '0ms' : '700ms'
                            }}
                        >
                            {duplicatedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-64 min-w-0 ${getStaggeredMargin(index)}`}
                                >
                                    <div className="bg-white rounded-3xl p-8 h-80 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group hover:scale-105 border border-gray-100">
                                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {services.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === (currentIndex % services.length) 
                                        ? 'bg-blue-500 w-8' 
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-16 py-12">
                {/* Left Content */}

                <section className="w-full py-20 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* <div className="w-full md:w-1/2">
                    <img
                        src="https://niograph.com/wp-content/uploads/2021/01/image2-home7.png"
                        alt="Payment Logos"
                        className="w-full h-auto"
                    />
                </div> */}

                    {/* <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                        100+ Payment <span className="text-blue-600  px-1 rounded ">Gateways</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-6">
                        With Iteck Marketplace, choose from hundreds of payment gateways for your customers. From PayPal to Stripe to Skrill, Visa Debit, Master Card, etc
                    </p>
                    <ul className="space-y-4 text-black font-semibold mb-8">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-600 w-5 h-5" />
                            100% Guarantee Secure Payment
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-600 w-5 h-5" />
                            1% Extra Fees For All
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="text-blue-600 w-5 h-5" />
                            Support Dispute & Refund 24/7
                        </li>
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
                        Book A Free Demo
                    </button>
                </div> */}
                </section>
                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default SoftwareServices;