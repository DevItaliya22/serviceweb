import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Spinner/Loader';
import { getProjects } from '../api/project';

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects();
      const projectsData = response.data || response || [];
      setProjects(projectsData);

      const uniqueCategories = ['All', ...new Set(
        projectsData
          .filter(project => project.category)
          .map(project => project.category.trim())
          .filter(category => category.length > 0)
      )];

      setCategories(uniqueCategories);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const filterProjectsByCategory = (category) => {
    if (category === 'All') {
      return projects;
    }
    return projects.filter(project =>
      project.category && project.category.trim().toLowerCase() === category.toLowerCase()
    );
  };

  const currentProjects = filterProjectsByCategory(activeTab);

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; 
      if (window.innerWidth < 1024) return 2; 
      return 3; 
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); 
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const StarRating = ({ rating, size = "sm" }) => {
    const sizeClasses = {
      sm: "w-3 h-3 sm:w-4 sm:h-4",
      md: "w-4 h-4 sm:w-5 sm:h-5",
      lg: "w-5 h-5 sm:w-6 sm:h-6"
    };

    const numericRating = parseFloat(rating) || 0;
    const clampedRating = Math.min(Math.max(numericRating, 0), 5);

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= clampedRating;
          const isPartial = star === Math.ceil(clampedRating) && clampedRating % 1 !== 0;

          return (
            <svg
              key={star}
              className={`${sizeClasses[size]} ${isFilled
                  ? 'text-yellow-400'
                  : isPartial
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block w-full">
  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
    <img
      src={project.image ? `${import.meta.env.VITE_BASE_URL}/${project.image.replace(/\\/g, '/')}` : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'}
      alt={project.title || 'Project'}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={(e) => {
        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

    {project.rating && (
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 shadow-lg">
        <div className="flex items-center space-x-1">
          <StarRating rating={project.rating} size="sm" />
          <span className="text-xs sm:text-sm font-bold text-gray-900 ml-1">
            {parseFloat(project.rating).toFixed(1)}
          </span>
        </div>
      </div>
    )}
  </div>

  <div className="p-4 sm:p-6">
    <div className="flex items-center justify-between mb-2 sm:mb-3">
      <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
        {project.category || 'PROJECT'}
      </span>
    </div>

    <Link
      to={`/portfolio/${project.id || project._id}`}
      className="block"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer">
        {project.title || 'Untitled Project'}
      </h3>
    </Link>

    <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
      {project.description || 'No description available'}
    </p>

    {project.rating && (
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <StarRating rating={project.rating} size="md" />
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            {parseFloat(project.rating).toFixed(1)}
          </span>
          {project.reviewCount && (
            <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">
              ({project.reviewCount} reviews)
            </span>
          )}
        </div>
        <button
          onClick={() => {
            window.location.href = '/contact';
          }}
          className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium"
        >
          Submit Enquiry
        </button>
      </div>
    )}

    {project.tags && project.tags.length > 0 && (
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.tags.slice(0, 3).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
            +{project.tags.length - 3}
          </span>
        )}
      </div>
    )}
  </div>
</div>
  );

  const CarouselControls = () => {
    const totalSlides = Math.ceil(currentProjects.length / itemsPerSlide);

    if (totalSlides <= 1) return null;

    return (
      <>
        <button
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          disabled={currentSlide === 0}
          className="absolute left-0 sm:-left-2 md:left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-4 rounded-full bg-white shadow-xl border border-gray-200 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-blue-600 hover:shadow-2xl transition-all duration-200 disabled:hover:bg-white disabled:hover:text-gray-300"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
          disabled={currentSlide === totalSlides - 1}
          className="absolute right-0 sm:-right-2 md:right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-4 rounded-full bg-white shadow-xl border border-gray-200 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-blue-600 hover:shadow-2xl transition-all duration-200 disabled:hover:bg-white disabled:hover:text-gray-300"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </>
    );
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab, itemsPerSlide]);

  if (loading) {
    return (
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-48 sm:h-64">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{error}</h3>
            <button
              onClick={fetchProjects}
              className="text-blue-500 hover:text-blue-600 font-medium text-sm sm:text-base"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="flex gap-2 min-w-max sm:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-200 font-bold whitespace-nowrap ${activeTab === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {currentProjects.length > itemsPerSlide ? (
          <div className="relative px-8 sm:px-16 md:px-20 lg:px-24">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(currentProjects.length / itemsPerSlide) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                      {currentProjects
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((project) => (
                          <ProjectCard key={project.id || project._id} project={project} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CarouselControls />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id || project._id} project={project} />
            ))}
          </div>
        )}

        {currentProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-sm sm:text-base text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Project;