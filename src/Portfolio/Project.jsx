import { useState } from 'react';

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All',
    'IT Consultation',
    'Data Security',
    'Website Development',
    'UI/UX Design',
    'Cloud Service',
    'Game Development'
  ];

  const services = {
    'All': [
      {
        id: 1,
        title: 'Infrastructure Upgrade',
        category: 'IT CONSULTATION',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['Consultation', 'Management'],
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center',
        rating: 4.8,
        reviewCount: 24,
        clientName: "TechCorp Solutions",
        clientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Exceptional infrastructure upgrade that improved our system performance by 60%."
      },
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
        rating: 4.9,
        reviewCount: 31,
        clientName: "Criftocy Inc",
        clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Beautiful design and flawless functionality. Our conversion rate increased by 45%."
      },
      {
        id: 3,
        title: 'AR/VR War 1986 Game',
        category: 'GAME DEVELOPMENT',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['VR/AR', 'iOS & Android', 'Unity 2D/3D'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center',
        rating: 4.7,
        reviewCount: 18,
        clientName: "GameStudio Pro",
        clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Immersive VR experience that exceeded our expectations. Top-quality game development!"
      }
    ],
    'IT Consultation': [
      {
        id: 1,
        title: 'Infrastructure Upgrade',
        category: 'IT CONSULTATION',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['Consultation', 'Management'],
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center',
        rating: 4.8,
        reviewCount: 24,
        clientName: "TechCorp Solutions",
        clientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Exceptional infrastructure upgrade that improved our system performance by 60%."
      },
      {
        id: 4,
        title: 'Digital Transformation',
        category: 'IT CONSULTATION',
        description: 'Comprehensive digital transformation strategy and implementation for modern businesses.',
        tags: ['Strategy', 'Implementation'],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center',
        rating: 4.9,
        reviewCount: 27,
        clientName: "Enterprise Corp",
        clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Transformed our entire business operations. The strategy was spot-on and execution flawless."
      }
    ],
    'Data Security': [
      {
        id: 5,
        title: 'Cybersecurity Audit',
        category: 'DATA SECURITY',
        description: 'Complete security assessment and vulnerability testing for enterprise systems.',
        tags: ['Audit', 'Penetration Testing'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center',
        rating: 5.0,
        reviewCount: 19,
        clientName: "SecureBank Ltd",
        clientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Comprehensive security audit that identified and fixed critical vulnerabilities. Outstanding work!"
      },
      {
        id: 6,
        title: 'Data Protection Suite',
        category: 'DATA SECURITY',
        description: 'Advanced encryption and data protection solutions for sensitive information.',
        tags: ['Encryption', 'Compliance'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center',
        rating: 4.8,
        reviewCount: 22,
        clientName: "DataGuard Solutions",
        clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Robust data protection that meets all compliance requirements. Excellent security implementation."
      }
    ],
    'Website Development': [
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
        rating: 4.9,
        reviewCount: 31,
        clientName: "Criftocy Inc",
        clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Beautiful design and flawless functionality. Our conversion rate increased by 45%."
      },
      {
        id: 7,
        title: 'E-commerce Platform',
        category: 'WEBSITE DEVELOPMENT',
        description: 'Custom e-commerce solution with advanced features and seamless user experience.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
        rating: 4.7,
        reviewCount: 35,
        clientName: "ShopMart Online",
        clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Fantastic e-commerce platform that boosted our online sales by 70%. Highly recommended!"
      }
    ],
    'UI/UX Design': [
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center',
        rating: 4.9,
        reviewCount: 31,
        clientName: "Criftocy Inc",
        clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Beautiful design and flawless functionality. Our conversion rate increased by 45%."
      },
      {
        id: 8,
        title: 'Mobile App Interface',
        category: 'UI/UX DESIGN',
        description: 'Modern mobile application design with intuitive user experience and clean aesthetics.',
        tags: ['Figma', 'Prototyping', 'User Research'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
        rating: 4.6,
        reviewCount: 28,
        clientName: "MobileFirst Labs",
        clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Intuitive design that our users absolutely love. User engagement increased significantly."
      }
    ],
    'Cloud Service': [
      {
        id: 9,
        title: 'AWS Migration',
        category: 'CLOUD SERVICE',
        description: 'Complete cloud migration strategy and implementation for scalable infrastructure.',
        tags: ['AWS', 'Migration', 'DevOps'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center',
        rating: 4.8,
        reviewCount: 21,
        clientName: "CloudTech Corp",
        clientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Seamless cloud migration with zero downtime. Our infrastructure is now more scalable than ever."
      },
      {
        id: 10,
        title: 'Multi-Cloud Architecture',
        category: 'CLOUD SERVICE',
        description: 'Hybrid cloud solutions for optimal performance and cost efficiency.',
        tags: ['Azure', 'GCP', 'Kubernetes'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center',
        rating: 4.9,
        reviewCount: 16,
        clientName: "HybridSoft Inc",
        clientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Excellent multi-cloud setup that reduced our infrastructure costs by 40%."
      }
    ],
    'Game Development': [
      {
        id: 3,
        title: 'AR/VR War 1986 Game',
        category: 'GAME DEVELOPMENT',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['VR/AR', 'iOS & Android', 'Unity 2D/3D'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center',
        rating: 4.7,
        reviewCount: 18,
        clientName: "GameStudio Pro",
        clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Immersive VR experience that exceeded our expectations. Top-quality game development!"
      },
      {
        id: 11,
        title: 'Mobile Racing Game',
        category: 'GAME DEVELOPMENT',
        description: 'High-performance mobile racing game with realistic physics and stunning graphics.',
        tags: ['Unity 3D', 'Mobile', 'Multiplayer'],
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop&crop=center',
        rating: 4.5,
        reviewCount: 33,
        clientName: "RaceGame Studios",
        clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
        testimonial: "Amazing racing game with incredible graphics and smooth gameplay. Players are loving it!"
      }
    ]
  };

  const currentServices = services[activeTab] || [];

  const StarRating = ({ rating, size = "sm" }) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    };

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClasses[size]} ${star <= Math.floor(rating) ? 'text-yellow-400' : star === Math.ceil(rating) && rating % 1 !== 0 ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 font-bold ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Rating Badge on Image */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <StarRating rating={service.rating} size="sm" />
                    <span className="text-sm font-bold text-gray-900 ml-1">
                      {service.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={service.rating} size="md" />
                    <span className="text-lg font-semibold text-gray-900">
                      {service.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({service.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentServices.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;