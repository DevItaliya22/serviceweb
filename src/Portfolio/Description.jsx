import IteckFooter from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import phonesImage from "../assets/phonesImage.png";
import boardImage from "../assets/ch_1.png";
import ipadImage from "../assets/ch_2.png";
import { Circle } from "lucide-react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaGoogle, FaLinkedinIn } from 'react-icons/fa';


const Description = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow text-center px-4 py-16 mt-24">
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
                    Notero - Easy Notes App
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-left ">
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">CLIENT</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            Micosoft Holding Ltd,<br />
                            Australia Area
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">SERVICES</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            IT Consultation, UI/UX Design,<br />
                            Cloud Service
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">DATE</p>
                        <p className="text-sm font-semibold text-black">February 25th, 2023</p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">TEAM</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            Logan Cee – Designer<br />
                            Martin Moussa – iOS Developer
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-screen-lg mx-auto">
                    <div className="mt-12 h-1 w-full bg-gray-200 rounded"></div>
                </div>
            </div>

            <section className="relative bg-white py-20 px-4">
                <div className="relative max-w-5xl mx-auto">
                    <img
                        src={phonesImage}
                        alt="Phones"
                        className="mx-auto max-w-full"
                    />
                </div>

                <div className="mt-16 max-w-3xl mx-auto text-center">
                    <p className="text-lg sm:text-xl font-bold text-gray-800 leading-relaxed">
                        Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc.
                    </p>
                </div>
                <div className="w-full max-w-screen-lg mx-auto">
                    <div className="mt-12 h-1 w-full bg-gray-200 rounded"></div>
                </div>
            </section>

            <section className="bg-white py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div>
                            <h2 className="text-6xl font-bold text-black leading-tight">
                                Our
                                <span className="block text-blue-500 relative">
                                    Challenge
                                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 z-[-1] rounded-md"></span>
                                </span>
                            </h2>

                        </div>
                        <div className="text-gray-700 space-y-4 text-[17px]">
                            <p>
                                Create an unconventional yet user-friendly website – innovative, with a clean & simple design that
                                communicates and showcases multi-media content. Site that spreads the message: "It’s stories your love.”
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-black">
                                <li>Develop easy-to-find and easy-to-navigate mobile friendly website</li>
                                <li>
                                    Showcase each type of content: interactive books, animated stories and picture books, audio stories.
                                    Create an experience people want to share with others
                                </li>
                                <li>Persuade to download app and subscribe</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <img
                            src={boardImage}
                            alt="Challenge Board"
                            className="rounded-2xl shadow-lg object-cover w-full"
                        />
                        <img
                            src={ipadImage}
                            alt="iPad"
                            className="rounded-2xl shadow-lg object-cover w-full"
                        />
                    </div>
                </div>
                <div className="w-full max-w-screen-lg mx-auto">
                    <div className="mt-12 h-1 w-full bg-gray-200 rounded"></div>
                </div>

            </section>

            <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Solution & <br />
                            <span className="text-blue-500 relative inline-block">
                                Result
                                <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 z-[-1] rounded-md"></span>
                            </span>
                        </h2>
                    </div>

                    <div className="md:col-span-3">
                        <div className="text-gray-600 text-lg leading-relaxed mb-8">
                            <p>
                                Our approach was to present the site as a visual editorial platform with quarterly features
                                based on events and occasions the brand was focused on. Each quarterly focus would be marked
                                by the hero and custom tags that filter content.
                            </p>
                            <p className="mt-6">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                                believable.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                "Create & Save your notes with multi-media",
                                "Web Clipper Extension",
                                "Complete note editor with rich text options",
                                "Automatically sync in real time",
                            ].map((text, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <Circle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                                    <span className="font-semibold text-black">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-20 px-6 text-center">
                <p className="text-2xl sm:text-3xl text-gray-900 font-medium max-w-4xl mx-auto mb-8">
                    “The team at <span className="text-blue-500 font-medium">@iteck</span> is incredibly dedicated,
                    knowledgeable, and helpful. The finished product was beautiful, and worth every penny.
                    I would absolutely recommend Moonex Labs.”
                </p>

                <p className="text-gray-500 font-medium">
                    - <span className="font-bold text-black">JHON HENRY</span>, CEO AT NOTERO JSC -
                </p>

                <p className="text-sm text-gray-400 tracking-widest uppercase mt-16 mb-4">
                    Share This Project
                </p>

                <div className="flex justify-center space-x-4">
                    {[FaTwitter, FaFacebookF, FaPinterestP, FaGoogle, FaLinkedinIn].map((Icon, index) => (
                        <div key={index} className="bg-gray-100 hover:bg-blue-100 text-black rounded-full w-10 h-10 flex items-center justify-center transition">
                            <Icon className="w-4 h-4" />
                        </div>
                    ))}
                </div>
            </div>
            <IteckFooter />
        </div>
    );
};

export default Description;
