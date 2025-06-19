import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when clicking outside
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
        { to: "/services", label: "Services" },
        { to: "/about", label: "About Us" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
                : 'py-4'
        }`}>
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
  <Link to="/" className="flex items-center space-x-3">
    <img
      src={Logo}
      alt="Company Logo"
      className="w-18 h-18 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain rounded-lg"
    />
    {/* <div className="hidden sm:block">
      <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Technitium</h1>
      <p className="text-xs lg:text-sm text-gray-600 -mt-1">Experience The Excellence</p>
    </div> */}
  </Link>
</div>


                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:block">
                    <button className={`border-2 border-blue-500 hover:border-orange-500 text-blue-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium ${
                        isScrolled ? 'bg-blue-50' : 'bg-white'
                    }`}>
                        Request A Demo →
                    </button>
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
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 pointer-events-none'
            } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}>
                <div className="px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={closeMobileMenu}
                            className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-200">
                        <button
                            onClick={closeMobileMenu}
                            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 font-medium"
                        >
                            Request A Demo →
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}