import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Audience from "../assets/audience.svg";
import Options from "../assets/option.svg";

export default function ChooseUs() {
    return (
        <section className="bg-gray-50 py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="text-blue-500 font-semibold text-sm uppercase tracking-wider underline">
                            WHY CHOOSE US
                        </div>

                        <h2 className="text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Track And Analyze Your Business Statistics
                        </h2>

                        <div className="flex justify-between gap-6 mt-16">
                            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white w-1/2">
                                <div className="w-16 h-16 mb-4">
                                    <img src={Audience} alt="Audience" className="w-full h-full" />                                 
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">Target Audience</h3>
                            </div>

                            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white w-1/2">
                                <div className="w-16 h-16 mb-4">
                                   <img src={Options} alt="Options" className="w-full h-full" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">Various Options</h3>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-16">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-colors">
                                <span>Get Started Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="flex items-center space-x-3">
                                <div className="text-gray-500">
                                    <p className="text-sm">Support Email</p>
                                    <p className="font-semibold text-gray-900">info@support-iteck.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://iteck-html.themescamp.com/assets/img/choose_us/3d_vector1.svg"
                            alt="Choose Us"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0  opacity-50 rounded-lg"></div>    
                    </div>
                </div>
            </div>
        </section>
    );
}