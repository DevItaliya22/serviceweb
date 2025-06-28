import IteckFooter from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import phonesImage from "../assets/phonesImage.png";
import boardImage from "../assets/ch_1.png";
import ipadImage from "../assets/ch_2.png";
import { Circle } from "lucide-react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { getProjectById } from "../api/project";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Spinner/Loader";


const Description = () => {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("Project ID:", id);
    console.log("Project Data:", project);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true);
                const res = await getProjectById(id);
                setProject(res?.data);
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProject();
    }, [id]);
    if (loading) {
        return <Loader />;
    }
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <div className="flex-grow text-center px-4 py-16 mt-24">
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
                    {project?.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left ">
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">CLIENT</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            {project?.createdBy?.name}<br />
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">SERVICES</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            {project?.technologies}<br />
                        </p>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">DATE</p>
                        <p className="text-sm font-semibold text-black">
                            {project?.createdAt &&
                                new Date(project.createdAt).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                }).replace(/ /g, '-')}
                        </p>
                    </div>

{/* 
                    <div className="text-center mt-8">
                        <p className="text-sm text-gray-400 font-medium mb-1">TEAM</p>
                        <p className="text-sm font-semibold text-black leading-snug">
                            Logan Cee – Designer<br />
                            Martin Moussa – iOS Developer
                        </p>
                    </div> */}
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
                            <p>{project?.mainDescription?.challenge}</p>

                            <ul className="list-disc list-inside space-y-2 text-black">
                                {project?.mainDescription?.challenge &&
                                    project.mainDescription.challenge
                                        .split(/[.;\n]+/) 
                                        .map((point, index) => {
                                            const trimmed = point.trim();
                                            return trimmed ? <li key={index}>{trimmed}</li> : null;
                                        })}
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
                        {project?.mainDescription?.solution && (() => {
                            const solutionText = project.mainDescription.solution;
                            const parts = solutionText.split(/[.;\n]+/).map(s => s.trim()).filter(Boolean);

                            const introParagraph = parts[0];
                            const bulletPoints = parts.slice(1);

                            return (
                                <>
                                    <div className="text-gray-600 text-lg leading-relaxed mb-8">
                                        <p>{introParagraph}</p>

                                        {bulletPoints.length > 0 && (
                                            <p className="mt-6">
                                                These were the key implementations and outcomes we achieved:
                                            </p>
                                        )}
                                    </div>

                                    {bulletPoints.length > 0 && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {bulletPoints.map((text, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <Circle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                                                    <span className="font-semibold text-black">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            );
                        })()}

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
