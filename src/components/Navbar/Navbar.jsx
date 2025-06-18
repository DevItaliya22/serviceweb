import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'py-4'
            }`}>
            <nav className="flex items-center justify-between max-w-7xl mx-auto p-6">
                <div className="flex items-center space-x-3">
                    <div className="flex">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded-lg -ml-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Iteck</h1>
                        <p className="text-sm text-gray-600 -mt-1">DATA ANALYSIS</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                        <span>Home</span>
                    </Link>

                    <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                        <span>Services</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>

                    <Link to="/about" className="text-gray-700 hover:text-gray-900 cursor-pointer">About Us</Link>
                    <Link to="/portfolio" className="text-gray-700 hover:text-gray-900 cursor-pointer">Portfolio</Link>
                    <Link to="/blog" className="text-gray-700 hover:text-gray-900 cursor-pointer">Blog</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact</Link>
                </div>
                <button className={`border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 font-medium ${isScrolled ? 'bg-blue-50' : 'bg-white'
                    }`}>
                    Request A Demo →
                </button>
            </nav>
        </header>
    )
};