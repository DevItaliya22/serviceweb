// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowScrollTop(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScrollTop && (
                <div className="fixed bottom-8 right-8 z-40">
                    <div 
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow hover:bg-blue-600"
                    >
                        <ChevronUp className="w-6 h-6 text-white" />
                    </div>
                </div>
            )}
        </>
    );
}
