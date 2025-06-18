import React from 'react';
import { Calendar, Code, Database, MessageSquare, Users, FileText, MapPin, Truck } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { CheckCircle2 } from 'lucide-react';
import Reviews from './Reviews';
import TopServices from './TopServices';

const SoftwareServices = () => {
    const services = [
        {
            icon: <Calendar className="w-16 h-16 text-blue-500" />,
            title: "Project Management",
            subtitle: "and Planning",
            description: "Streamline your workflow with comprehensive project tracking and team collaboration tools."
        },
        {
            icon: <Code className="w-16 h-16 text-blue-500" />,
            title: "Custom Software",
            subtitle: "Development",
            description: "Build tailored applications and solutions that perfectly fit your business requirements."
        },
        {
            icon: <Database className="w-16 h-16 text-blue-500" />,
            title: "Data Integration and",
            subtitle: "Analytics",
            description: "Connect multiple data sources and gain insights through advanced analytics dashboards."
        },
        {
            icon: <MessageSquare className="w-16 h-16 text-blue-500" />,
            title: "Customer Support",
            subtitle: "Platform",
            description: "Enhance customer experience with integrated support ticketing and communication systems."
        },
        {
            icon: <Users className="w-16 h-16 text-blue-500" />,
            title: "User Management",
            subtitle: "System",
            description: "Secure user authentication, role-based access control, and comprehensive user profiles."
        },
        {
            icon: <FileText className="w-16 h-16 text-blue-500" />,
            title: "Document Management",
            subtitle: "and Workflow",
            description: "Organize, track, and automate document processes with version control and approval workflows."
        },
        {
            icon: <MapPin className="w-16 h-16 text-blue-500" />,
            title: "Location-Based",
            subtitle: "Services",
            description: "Integrate GPS tracking, geofencing, and location analytics for mobile and web applications."
        },
        {
            icon: <Truck className="w-16 h-16 text-blue-500" />,
            title: "Logistics and",
            subtitle: "Supply Chain",
            description: "Optimize inventory management, order tracking, and supply chain visibility solutions."
        }
    ];

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <Navbar />
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Our <span className="text-blue-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        We provide perfect IT Solutions for your business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="bg-blue-50 rounded-2xl p-4">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">
                                {service.subtitle}
                            </h4>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 py-12">
                <div className="flex flex-col lg:flex-row items-center justify-between  py-16 px-6 lg:px-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Optimized User <br />
                            <span className="text-blue-600 relative inline-block">
                                Experiences
                                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-10" />
                            </span>
                        </h1>
                        <p className="mt-6 text-gray-500 max-w-lg">
                            The uploading and updating processes made by suppliers can be
                            streamlined through front-end dashboards that create better ease of
                            access.
                        </p>

                        {/* Links */}
                        <div className="mt-10 space-y-6 text-sm text-black font-semibold ">
                            <div className="border-b pb-2 cursor-pointer hover:text-blue-600">
                                Sales Breakdown & Funnel
                            </div>
                            <div className="border-b pb-2 cursor-pointer hover:text-blue-600">
                                Abandoned Carts
                            </div>
                            <div className="border-b pb-2 cursor-pointer hover:text-blue-600">
                                Revenue by Channel & Devices
                            </div>
                            <div className="pb-2 cursor-pointer hover:text-blue-600">
                                Sales Forecast
                            </div>
                        </div>
                    </div>

                    {/* Right Dashboard Image (Static) */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://cdn.dribbble.com/users/3316972/screenshots/15779528/media/293f4765747578a091fb286cf6a15083.jpg?resize=400x300&vertical=center"
                            alt="Dashboard"
                            className="max-w-[600px] w-full"
                        />
                    </div>
                </div>
            </div>

            <section className="w-full py-20 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://niograph.com/wp-content/uploads/2021/01/image2-home7.png"
                        alt="Payment Logos"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-full md:w-1/2">
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
                </div>
            </section>
            <div className="">
                <div className="max-w-7xl mx-auto px-4">
                    <Reviews />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16">
                <TopServices />
                    </div>
            {/* Footer */}
            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default SoftwareServices;