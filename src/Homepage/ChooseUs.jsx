import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

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
                                    <svg viewBox="0 0 64 64" className="w-full h-full">
                                        <path d="M12 20 L32 8 L52 20 L52 44 L32 56 L12 44 Z" fill="#4338ca" />
                                        <path d="M12 20 L32 8 L52 20 L32 32 Z" fill="#6366f1" />
                                        <path d="M32 32 L52 20 L52 44 L32 56 Z" fill="#3730a3" />
                                        <rect x="26" y="24" width="12" height="8" fill="#fbbf24" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">Target Audience</h3>
                            </div>

                            <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white w-1/2">
                                <div className="w-16 h-16 mb-4">
                                    <svg viewBox="0 0 64 64" className="w-full h-full">
                                        <ellipse cx="32" cy="48" rx="20" ry="6" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="46" rx="20" ry="6" fill="#6366f1" />
                                        <ellipse cx="32" cy="36" rx="18" ry="5" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="34" rx="18" ry="5" fill="#8b5cf6" />
                                        <ellipse cx="32" cy="24" rx="16" ry="4" fill="#e5e7eb" />
                                        <ellipse cx="32" cy="22" rx="16" ry="4" fill="#a855f7" />
                                    </svg>
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
                        <svg viewBox="0 0 600 500" className="w-full h-auto">
                            <g opacity="0.1">
                                <rect x="50" y="50" width="20" height="20" fill="#6366f1" transform="rotate(45 60 60)" />
                                <rect x="500" y="80" width="15" height="15" fill="#f59e0b" transform="rotate(45 507 87)" />
                                <rect x="480" y="300" width="25" height="25" fill="#8b5cf6" transform="rotate(45 492 312)" />
                            </g>

                            <g transform="translate(200, 100)">
                                <ellipse cx="100" cy="280" rx="60" ry="12" fill="#e5e7eb" />
                                <rect x="85" y="260" width="30" height="20" fill="#d1d5db" />

                                <rect x="20" y="80" width="160" height="100" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="8" />
                                <rect x="30" y="90" width="140" height="80" fill="#f8fafc" />

                                <g transform="translate(40, 100)">
                                    <rect x="0" y="40" width="8" height="20" fill="#f59e0b" />
                                    <rect x="15" y="25" width="8" height="35" fill="#ef4444" />
                                    <rect x="30" y="15" width="8" height="45" fill="#10b981" />
                                    <rect x="45" y="30" width="8" height="30" fill="#3b82f6" />
                                    <rect x="60" y="10" width="8" height="50" fill="#8b5cf6" />
                                    <rect x="75" y="35" width="8" height="25" fill="#f59e0b" />
                                    <rect x="90" y="20" width="8" height="40" fill="#ef4444" />
                                    <rect x="105" y="5" width="8" height="55" fill="#10b981" />
                                </g>
                            </g>

                            <g transform="translate(100, 150)">
                                <polygon points="0,20 20,10 40,20 20,30" fill="#6366f1" />
                                <polygon points="20,10 40,20 40,40 20,50" fill="#4338ca" />
                                <polygon points="0,20 20,30 20,50 0,40" fill="#5b21b6" />
                            </g>

                            <g transform="translate(450, 200)">
                                <polygon points="0,15 15,8 30,15 15,22" fill="#f59e0b" />
                                <polygon points="15,8 30,15 30,30 15,37" fill="#d97706" />
                                <polygon points="0,15 15,22 15,37 0,30" fill="#b45309" />
                            </g>

                            <g transform="translate(80, 320)">
                                <polygon points="0,25 25,12 50,25 25,38" fill="#8b5cf6" />
                                <polygon points="25,12 50,25 50,50 25,63" fill="#7c3aed" />
                                <polygon points="0,25 25,38 25,63 0,50" fill="#6d28d9" />
                            </g>

                            {/* Person sitting */}
                            <g transform="translate(400, 300)">
                                {/* Body */}
                                <ellipse cx="0" cy="30" rx="25" ry="8" fill="#e5e7eb" />
                                <rect x="-15" y="10" width="30" height="25" rx="15" fill="#fbbf24" />

                                {/* Head */}
                                <circle cx="0" cy="-5" r="12" fill="#fbbf24" />
                                <rect x="-8" y="-12" width="16" height="10" rx="8" fill="#1f2937" />
                            </g>

                            {/* Documents/papers */}
                            <g transform="translate(300, 350)">
                                <rect x="0" y="0" width="40" height="30" fill="#f8fafc" stroke="#e5e7eb" strokeWidth="2" />
                                <rect x="5" y="15" width="30" height="30" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
                                <rect x="10" y="30" width="35" height="25" fill="#f1f5f9" stroke="#e5e7eb" strokeWidth="2" />
                            </g>

                            {/* Additional geometric elements */}
                            <g transform="translate(500, 120)">
                                <polygon points="0,0 20,0 30,10 10,10" fill="#ddd6fe" />
                                <polygon points="20,0 30,10 30,30 20,20" fill="#c4b5fd" />
                                <polygon points="0,0 10,10 10,30 0,20" fill="#a78bfa" />
                            </g>

                            {/* Wireframe cubes */}
                            <g transform="translate(520, 350)" fill="none" stroke="#cbd5e1" strokeWidth="2">
                                <polygon points="0,0 15,0 22,7 7,7" />
                                <polygon points="15,0 22,7 22,22 15,15" />
                                <polygon points="0,0 7,7 7,22 0,15" />
                                <polygon points="7,7 22,7 22,22 7,22" />
                            </g>

                            {/* Chart elements */}
                            <g transform="translate(150, 50)">
                                <path d="M0,30 Q10,10 20,25 T40,15" stroke="#ef4444" strokeWidth="3" fill="none" />
                                <circle cx="0" cy="30" r="3" fill="#ef4444" />
                                <circle cx="20" cy="25" r="3" fill="#ef4444" />
                                <circle cx="40" cy="15" r="3" fill="#ef4444" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}