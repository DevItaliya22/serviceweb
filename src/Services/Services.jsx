import React, { useState, useEffect } from 'react';
import { Calendar, Code, Database, MessageSquare, Users, FileText, MapPin, Truck } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TopServices from './TopServices';
import CarouselComponent from './ScroolService';

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


    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4">
            <div className="w-full max-w-full mx-auto">
                <div className="mb-8 sm:mb-12">
                    <Navbar />
                </div>

                <div className="w-full sm:mt-12 ">
                    <TopServices />
                </div>

                <div className="text-center mt-4 mb-12 sm:mb-16 px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="text-blue-500">Services</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide perfect IT Solutions for your business
                    </p>
                </div>

                <div className="w-full sm:mt-16 mb-8 sm:mb-12">
                    <CarouselComponent />
                </div>
            </div>

            <div className="mt-12 sm:mt-16 py-8 sm:py-12">
                {/* Left Content */}

                {/* Footer */}
                <div className='w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    )
};

export default SoftwareServices;