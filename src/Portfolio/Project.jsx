import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Spinner/Loader';
import { getProjects } from '../api/project';
import { getReviewById } from '../api/review';

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjectsPage = currentProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentProjects.length / itemsPerPage);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Scroll to top when page changes
  useEffect(() => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

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

  const ProjectCard = ({ project }) => {
    const [reviewInfo, setReviewInfo] = useState(null);
    useEffect(() => {
      const fetchReview = async () => {
        const reviewResponse = await getReviewById(project?._id);
        setReviewInfo(reviewResponse?.data);
      };
      fetchReview();
    }, [project.id]);
    const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 p-2 group border border-slate-100 hover:border-blue-200 active:border-blue-200 flex flex-col h-full transform hover:scale-105 active:scale-105 hover:-translate-y-1 active:-translate-y-1">
        <div className="text-center mb-2">
          <div className="mb-2 group-hover:scale-110 active:scale-110 transition-transform duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-0 group-hover:opacity-50 active:opacity-50 transition-opacity duration-300 -z-10"></div>
            <img
              src={project.image ? `${baseUrl}/${project.image.replace(/\\/g, '/')}` : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'}
              alt={project.title || 'Project'}
              className="relative w-16 h-16 mx-auto object-cover rounded-xl shadow-lg group-hover:shadow-xl active:shadow-xl transition-all duration-300 group-hover:scale-110 active:scale-110 border-2 border-white"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center';
              }}
            />
            {/* NEW Badge Example (if you want to add a badge for new projects) */}
            {/* {project.isNew && (
              <span className="absolute top-2 right-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20 border-2 border-white transition-transform duration-200 group-hover:scale-110 active:scale-110">
                NEW
              </span>
            )} */}
          </div>
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold rounded-full">
            {project.category || 'PROJECT'}
          </span>
        </div>
        <div className="text-center flex-grow">
          <Link
            to={`/portfolio/${project.id || project._id}`}
            className="block"
          >
            <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2 cursor-pointer">
              {project.title || 'Untitled Project'}
            </h3>
          </Link>
          <p className="text-slate-600 text-xs leading-relaxed mb-1 line-clamp-2">
            {project.description || 'No description available'}
          </p>
        </div>
        {reviewInfo && (
          <div className="mb-1 flex flex-col items-center">
            <div className="w-full flex justify-center items-center">
              <StarRating rating={reviewInfo.averageRating} size="md" />
              <span className="ml-2 text-lg font-bold text-yellow-500">
                {reviewInfo.averageRating}
              </span>
              <span className="ml-1 text-xs text-gray-400 font-medium">
                ({reviewInfo?.totalCount} reviews)
              </span>
            </div>
            <div className="w-2/3 border-t border-gray-100 my-1"></div>
          </div>
        )}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 justify-center">
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
        <div className="text-center mt-auto">
          <button
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 group text-xs"
          >
            Enquiry
          </button>
        </div>
      </div>
    );
  };

  const Pagination = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1);
          pages.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        }
      }

      return pages;
    };

    return (
      <div className="flex justify-center items-center mt-2 sm:mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`px-3 py-2 rounded-lg transition-colors ${page === currentPage
              ? 'bg-blue-500 text-white'
              : page === '...'
                ? 'text-gray-400 cursor-default'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-blue-600'
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

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
    <div className="py-2 sm:py-4 px-4 sm:px-6 lg:px-8 projects-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2 sm:mb-4">
          <div className="flex justify-center mb-1">
            <div className="flex justify-start items-center w-full max-w-7xl px-4 gap-2 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
              {categories.map((category) => {
                const count = category === 'All' ? projects.length : projects.filter(p => p.category && p.category.trim().toLowerCase() === category.toLowerCase()).length;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-3 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-sm border whitespace-nowrap flex-shrink-0 ${activeTab === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md transform scale-105'
                        : 'bg-white text-black border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-105'
                      }`}
                  >
                    <span className="inline-block align-middle">{category}</span>
                    <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-medium inline-block align-middle ${activeTab === category
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600'
                      }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {currentProjectsPage.map((project) => (
            <ProjectCard key={project.id || project._id} project={project} />
          ))}
        </div>

        <Pagination />

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