import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            setIsMobileMenuOpen(false);
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/services", label: "Our Services" },
        { to: "/about", label: "About Us" },
        // { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact Us" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'py-4'
            }`}>
            <nav className="flex items-center justify-between max-screen mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Link to="/" className="flex items-center space-x-3">
                        <img
                            src={Logo}
                            alt="Company Logo"
                            className="w-34 h-20 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`relative group font-bold transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a
                        href="#"
                        className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-5 h-5 text-blue-600" />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-5 h-5 text-blue-400" />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Youtube"
                    >
                        <Youtube className="w-5 h-5 text-red-600" />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        aria-label="Linkedin"
                    >
                        <Linkedin className="w-5 h-5 text-blue-700" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}>
                <div className="px-4 py-4 space-y-3">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeMobileMenu}
                                className={`block py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}
