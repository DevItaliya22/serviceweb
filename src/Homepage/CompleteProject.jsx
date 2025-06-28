import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getProjects } from '../api/project'; 

const CompletedProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await getProjects();
                let projectsData = [];
                if (Array.isArray(response)) {
                    projectsData = response;
                } else if (response && Array.isArray(response.data)) {
                    projectsData = response.data;
                } else if (response && Array.isArray(response.projects)) {
                    projectsData = response.projects;
                } else {
                    console.error('Unexpected API response structure:', response);
                    throw new Error('Invalid data format received from API');
                }

                const completedProjects = projectsData.filter(project =>
                    project.status && project.status.toLowerCase() === 'completed'
                );

                setProjects(completedProjects);
                setError(null);
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError(err.message || 'Failed to load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    // Loading state
    if (loading) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto flex items-center justify-center h-64">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading completed projects...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto flex items-center justify-center h-64">
                    <div className="text-center">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // No completed projects state
    if (projects.length === 0) {
        return (
            <div className="p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-2">CASE STUDY</p>
                            <h1 className="text-4xl font-bold text-gray-900">Completed Projects</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <p className="text-gray-600 text-lg">No completed projects found.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentProject = projects[currentIndex];

    return (
        <div className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <p className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-2">CASE STUDY</p>
                        <h1 className="text-4xl font-bold text-gray-900">Completed Projects</h1>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-gray-300 hover:bg-white transition-colors"
                            disabled={projects.length <= 1}
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            disabled={projects.length <= 1}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                    <div className="relative flex justify-center items-center h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl"></div>
                        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-blue-200 rounded-full opacity-60"></div>
                        <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-purple-200 rounded-full opacity-60"></div>
                        <div className="absolute top-1/2 right-4 w-8 h-8 bg-blue-200 rounded-full opacity-40"></div>

                        {/* <div className="absolute top-1 right-6 z-20">
                            <span className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow-sm">
                                {currentProject.category?.toUpperCase() || 'PROJECT'}
                            </span>
                        </div> */}

                        <div className="relative z-10 mx-8">
                            {currentProject.image ? (
                                <div className="w-full max-w-md mx-auto">
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <div className="aspect-video w-full">
                                            <img
                                                src={`${import.meta.env.VITE_BASE_URL}/${currentProject.image.replace(/\\/g, '/')}`}
                                                alt={currentProject.title || 'Project'}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentNode.querySelector('.fallback-design').style.display = 'flex';
                                                }}
                                            />
                                            {/* Fallback design */}
                                            <div className="fallback-design w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 hidden items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-20 h-16 bg-gray-400 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                                        <div className="flex gap-2">
                                                            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                                            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-500 text-sm">Project Image</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full max-w-md mx-auto">
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden aspect-video flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-20 h-16 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-sm">No Image Available</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="text-sm font-medium">{currentProject.category || 'CATEGORY'}</span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            {currentProject.title || 'Project Title'}
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {currentProject.description || 'No description available.'}
                        </p>
                        {currentProject.mainDescription?.challenge && (
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Challenge</h3>
                                <p className="text-gray-600">{currentProject.mainDescription.challenge}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Created By</div>
                                    <div className="font-semibold text-gray-900">
                                        {currentProject.createdBy?.name || 'N/A'}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Rating</div>
                                    <div className="font-semibold text-gray-900 flex items-center gap-1">
                                        {currentProject.rating ? (
                                            <div className="flex items-center gap-1">
                                                {[...Array(Math.max(1, Math.min(10, currentProject.rating)))].map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        className="w-4 h-4 text-yellow-500 fill-current"
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <span>N/A</span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm mb-1">Reviews</div>
                                    <div className="font-semibold text-gray-900">
                                        {currentProject.reviewCount || 0}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {currentProject.technologies && currentProject.technologies.length > 0 && (
                            <div>
                                <div className="text-gray-500 text-sm mb-2">Technologies</div>
                                <div className="flex flex-wrap gap-2">
                                    {(() => {
                                        try {
                                            const techs = typeof currentProject.technologies[0] === 'string' &&
                                                currentProject.technologies[0].startsWith('[')
                                                ? JSON.parse(currentProject.technologies[0])
                                                : currentProject.technologies;
                                            return techs.map((tech, index) => (
                                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ));
                                        } catch (e) {
                                            return currentProject.technologies.map((tech, index) => (
                                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ));
                                        }
                                    })()}
                                </div>
                            </div>
                        )}

                        <div className="pt-4">
                            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {projects.length > 1 && (
                    <div className="flex justify-center mt-12 gap-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompletedProject;