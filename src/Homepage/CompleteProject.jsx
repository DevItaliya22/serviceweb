import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getProjects } from '../api/project'; 
import { getReviewById } from '../api/review';
import Loader from '../Spinner/Loader';

const CompletedProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slideDirection, setSlideDirection] = useState('right');
    const [isAnimating, setIsAnimating] = useState(false);
    const [reviewInfo, setReviewInfo] = useState(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            let response = await getProjects();
            console.log(response);
            
            if (typeof response === 'string' && response.includes('<!doctype html>')) {
                throw new Error('API endpoint returned HTML instead of JSON. Please check your API configuration and ensure the backend server is running.');
            }
            
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
            let errorMessage = 'Failed to load projects';
            
            if (err.message.includes('HTML instead of JSON')) {
                errorMessage = 'Backend server is not running or API endpoint is incorrect. Please start your backend server and check the API configuration.';
            } else if (err.code === 'ECONNREFUSED') {
                errorMessage = 'Cannot connect to the backend server. Please ensure the server is running on the correct port.';
            } else if (err.response?.status === 404) {
                errorMessage = 'API endpoint not found. Please check the endpoint URL.';
            } else if (err.response?.status >= 500) {
                errorMessage = 'Server error occurred. Please try again later.';
            } else if (err.message) {
                errorMessage = err.message;
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Fetch review info when current project changes
    useEffect(() => {
        const fetchReview = async () => {
            if (projects.length > 0 && projects[currentIndex]?._id) {
                try {
                    const reviewResponse = await getReviewById(projects[currentIndex]._id);
                    setReviewInfo(reviewResponse?.data);
                } catch (error) {
                    console.error('Error fetching review:', error);
                    setReviewInfo(null);
                }
            }
        };
        fetchReview();
    }, [currentIndex, projects]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
            setIsAnimating(false);
        }, 300);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            setIsAnimating(false);
        }, 300);
    };

    // Helper function to normalize technologies data
    function getTechnologies(technologies) {
        let techs = technologies;
        try {
            // If it's a string, try to parse it
            if (typeof techs === 'string') {
                techs = JSON.parse(techs);
            }
            // If it's an array with a single string that looks like an array, parse again
            if (Array.isArray(techs) && techs.length === 1 && typeof techs[0] === 'string' && techs[0].startsWith('[')) {
                techs = JSON.parse(techs[0]);
            }
            // Flatten any nested arrays
            if (Array.isArray(techs)) {
                techs = techs.flat(Infinity);
            }
            // Now split by comma, remove double quotes, and trim
            techs = techs
                .filter(t => typeof t === 'string')
                .flatMap(t => t.split(','))
                .map(t => t.replace(/"/g, '').trim())
                .filter(t => t.length > 0);
        } catch {
            // fallback: return as array of strings, split by comma, remove double quotes, and trim
            if (Array.isArray(technologies)) {
                techs = technologies
                    .filter(t => typeof t === 'string')
                    .flatMap(t => t.split(','))
                    .map(t => t.replace(/"/g, '').trim())
                    .filter(t => t.length > 0);
            } else {
                techs = [];
            }
        }
        return techs;
    }

  if (loading) {
    return <Loader />;
  }

    if (error) {
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
                        <div className="text-center max-w-md">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Unable to Load Projects</h3>
                            <p className="text-gray-600 mb-6">{error}</p>
                            <div className="space-y-3">
                                <button
                                    onClick={fetchProjects}
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Try Again
                                </button>
                                <div className="text-sm text-gray-500">
                                    <p>Make sure your backend server is running and the API endpoint is accessible.</p>
                                </div>
                            </div>
                        </div>
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

                        <div className={`relative z-10 mx-8 transition-all duration-300 ease-in-out transform ${
                            isAnimating 
                                ? slideDirection === 'right' 
                                    ? 'translate-x-full opacity-0' 
                                    : '-translate-x-full opacity-0'
                                : 'translate-x-0 opacity-100'
                        }`}>
                            {currentProject.image ? (
                                <div className="w-full max-w-md mx-auto">
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <div className="aspect-video w-full">
                                            <img
                                                src={`${import.meta.env.VITE_BASE_URL || 'http://localhost:5000'}/${currentProject.image.replace(/\\/g, '/')}`}
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

                    <div className={`space-y-6 transition-all duration-300 ease-in-out transform ${
                        isAnimating 
                            ? slideDirection === 'right' 
                                ? 'translate-x-full opacity-0' 
                                : '-translate-x-full opacity-0'
                            : 'translate-x-0 opacity-100'
                    }`}>
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
                                        {reviewInfo?.averageRating ? (
                                            <div className="flex items-center gap-1">
                                                {[...Array(Math.max(1, Math.min(10, reviewInfo?.averageRating)))].map((_, index) => (
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
                                        {reviewInfo?.totalCount || 0}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {currentProject.technologies && getTechnologies(currentProject.technologies).length > 0 && (
                            <div>
                                <div className="text-gray-500 text-sm mb-2">Technologies</div>
                                <div className="flex flex-wrap gap-2">
                                    {getTechnologies(currentProject.technologies).map((tech, index) => (
                                        <button
                                            key={index}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            onClick={() => console.log(`Technology clicked: ${tech}`)}
                                        >
                                            {tech}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation Controls */}
                        {projects.length > 1 && (
                            <div className="flex items-center justify-start pt-6 border-t border-gray-200 ">
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="p-3 rounded-full border border-gray-300 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={projects.length <= 1}
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={projects.length <= 1}
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedProject;