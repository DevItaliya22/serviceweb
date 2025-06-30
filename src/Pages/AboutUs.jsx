import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, MessageSquare } from 'lucide-react';
import IteckFooter from '../components/Footer/Footer';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Navbar from '../components/Navbar/Navbar';
import FloatingBubbles from './Animation';

const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, inView];
};


const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView(0.1);
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ 
        transitionDelay: inView ? `${delay}ms` : '0ms' 
      }}
    >
      {children}
    </div>
  );
};



export default function AboutUs() {
    return (
        <div className="min-h-screen overflow-hidden ">
                <Navbar />

            <div className="w-full min-h-screen relative overflow-hidden">
                {/* Left decorative element */}
                <AnimatedSection delay={200} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 lg:-translate-x-8 md:-translate-x-6 sm:-translate-x-4 hidden sm:block">
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
                </AnimatedSection>

                {/* Top right decorative element */}
                <AnimatedSection delay={400} className="absolute right-4 md:right-10 lg:right-20 top-10 md:top-16 lg:top-20">
                    <div className="relative scale-75 md:scale-90 lg:scale-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg transform rotate-45 shadow-lg"></div>
                        <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                    </div>
                </AnimatedSection>

                {/* Main content */}
                <AnimatedSection delay={100} className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16 xl:py-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                    <div className="text-center max-w-4xl lg:max-w-6xl w-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black leading-tight mb-4 md:mb-6 lg:mb-8">
                            We provide perfect
                            <br className="hidden sm:block" />
                            <span className="block mt-1 sm:mt-2 md:mt-0">IT Solutions & Technology for</span>
                            <span className="block mt-1 sm:mt-2 md:mt-0">
                                any{' '}
                                <span className="relative inline-block">
                                    Startups
                                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2" viewBox="0 0 200 8">
                                        <path d="M0 4 Q50 0 100 4 T200 4" stroke="#60A5FA" strokeWidth="3" fill="none" className="opacity-80" />
                                    </svg>
                                </span>
                                <span className="ml-1 sm:ml-2 md:ml-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">✏️</span>
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4">
                            Iteck helps you unify your brand identity by collecting, storing and distributing
                            <br className="hidden lg:block" />
                            design tokens and assets — automatically.
                        </p>

                        <div className="flex justify-center items-center space-x-1 mb-8 md:mb-12 lg:mb-16">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-xl sm:text-2xl md:text-3xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>⭐</span>
                            ))}
                        </div>
                        
                        {/* Floating Bubbles below the main content */}
                        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                            <FloatingBubbles />
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* Top Reasons Section */}
            <AnimatedSection delay={100} className="py-8 md:py-12 lg:py-16 px-4">
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
                            <AnimatedSection delay={300} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:h-full lg:after:w-px lg:after:bg-gray-300 lg:after:mx-4 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200 lg:border-none">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <Code className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Front-End Friendly</h3>
                                    <p className="text-gray-600 mt-2">
                                        Easy-to-use interfaces built with modern design principles.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Card 2 */}
                            <AnimatedSection delay={500} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative lg:after:content-[''] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:h-full lg:after:w-px lg:after:bg-gray-300 lg:after:mx-4 pb-6 lg:pb-0 border-b lg:border-b-0 border-gray-200 lg:border-none">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <Smartphone className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">Affordable Price</h3>
                                    <p className="text-gray-600 mt-2">
                                        Budget-friendly plans tailored for startups and businesses.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Card 3 */}
                            <AnimatedSection delay={700} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                                    <MessageSquare className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">24/7 Support</h3>
                                    <p className="text-gray-600 mt-2">
                                        Reliable support to assist you anytime, anywhere.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Philosophy Section */}
            <AnimatedSection delay={100} className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
                <AnimatedSection delay={200} className="lg:w-1/2 mb-8 md:mb-10 lg:mb-0 text-center lg:text-left">
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
                        <AnimatedSection delay={400} className="border-b border-gray-200 pb-2 hover:border-blue-500 cursor-pointer transition duration-200">
                            Become 1st in the IT industrial
                        </AnimatedSection>
                        <AnimatedSection delay={600} className="border-b border-gray-200 pb-2 hover:border-blue-500 cursor-pointer transition duration-200">
                            Competitive Price
                        </AnimatedSection>
                        <AnimatedSection delay={800} className="pb-2 hover:border-b hover:border-blue-500 cursor-pointer transition duration-200">
                            Enhance the quality of life
                        </AnimatedSection>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={400} className="lg:w-1/2 flex justify-center">
                    <img
                        src="https://digitalzeroz.com/assets/img/about/digital-zero-001.png"
                        alt="Philosophy illustration"
                        className="max-w-full w-full max-w-md lg:max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                    />
                </AnimatedSection>
            </AnimatedSection>

            <AnimatedSection className="bg-white py-8 md:py-12 lg:py-16 px-4 md:px-12 lg:px-20">
            </AnimatedSection>

            <AnimatedSection>
                <IteckFooter />
            </AnimatedSection>
        </div>
    );
}