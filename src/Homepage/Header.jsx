import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

export default function IteckLandingPage() {
    const [email, setEmail] = useState('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50  relative overflow-hidden">
            <Navbar />

            <main className="relative z-10 px-6 py-12 mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-blue-600 font-semibold text-lg tracking-wide">
                                    WE BRING IDEAS TO LIFE
                                </p>
                                <h1 className="text-6xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Ai & Data Machine
                                    <br />
                                    <span className="text-gray-900">Deep Solutions.</span>
                                </h1>
                            </div>

                            <p className="text-xl text-gray-600 mb-8">
                                Subscribe & Get 7-Days Trail
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                                <div className="flex-1 relative">
                                    <input
                                        type="email"
                                        placeholder="Business email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                </div>
                                <button className="bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap">
                                    Get A Demo →
                                </button>
                            </div>

                            <p className="text-sm text-gray-500">
                                *** We are not going to save your data
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://iteck-html.themescamp.com/assets/img/header/3d_vector_head8.svg"
                                alt="Landing"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </main>



            <div className="fixed bottom-8 right-8 space-y-4 z-40">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow">
                    <Settings className="w-6 h-6 text-gray-600" />
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow">
                    <span className="text-white text-xl">💬</span>
                </div>
            </div>

            <div className="absolute top-1/4 left-8 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
        </div>
    );
}