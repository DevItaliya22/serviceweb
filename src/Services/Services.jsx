import React, { useState, useEffect } from 'react';
import { Calendar, Code, Database, MessageSquare, Users, FileText, MapPin, Truck } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TopServices from './TopServices';
import 'aos/dist/aos.css'; 

const SoftwareServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

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
            setCurrentIndex(prev => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    useEffect(() => {
        if (currentIndex === services.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 700); 
            
            return () => clearTimeout(timer);
        }
    }, [currentIndex, services.length]);

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

    const getCardWidth = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 280; 
            if (window.innerWidth < 768) return 256; 
            if (window.innerWidth < 1024) return 256; 
            return 256; 
        }
        return 256;
    };

    const getGapSize = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 16; 
            if (window.innerWidth < 768) return 20; 
            return 24; 
        }
        return 24;
    };

    const [cardWidth, setCardWidth] = useState(256);
    const [gapSize, setGapSize] = useState(24);

    useEffect(() => {
        const handleResize = () => {
            setCardWidth(getCardWidth());
            setGapSize(getGapSize());
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4">
            <div className="w-full max-w-full mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <Navbar />
                </div>

                <div className="w-full sm:mt-12 ">
                    <TopServices />
                </div>

                <div className="text-center mb-12 sm:mb-16 px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="text-blue-500">Services</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide perfect IT Solutions for your business
                    </p>
                </div>
                
                <div className="relative mb-12 sm:mb-16 py-8 sm:py-12" data-aos="fade-up">
                    <div className="overflow-hidden">
                        <div
                            className="flex"
                            style={{
                                gap: `${gapSize}px`,
                                transform: `translateX(-${currentIndex * (cardWidth + gapSize)}px)`,
                                transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
                            }}
                        >
                            {duplicatedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 ${getStaggeredMargin(index)}`}
                                    style={{ width: `${cardWidth}px` }}
                                >
                                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-72 sm:h-80 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group hover:scale-105 border border-gray-100">
                                        <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
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

                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2 px-4">
                        {services.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === (currentIndex % services.length) 
                                        ? 'bg-blue-500 w-6 sm:w-8' 
                                        : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 sm:mt-16 py-8 sm:py-12">
                {/* Left Content */}

                {/* Footer */}
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default SoftwareServices;