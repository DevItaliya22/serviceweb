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
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 3,
        title: 'AR/VR War 1986 Game',
        category: 'GAME DEVELOPMENT',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['VR/AR', 'iOS & Android', 'Unity 2D/3D'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'IT Consultation': [
      {
        id: 1,
        title: 'Infrastructure Upgrade',
        category: 'IT CONSULTATION',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['Consultation', 'Management'],
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 4,
        title: 'Digital Transformation',
        category: 'IT CONSULTATION',
        description: 'Comprehensive digital transformation strategy and implementation for modern businesses.',
        tags: ['Strategy', 'Implementation'],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'Data Security': [
      {
        id: 5,
        title: 'Cybersecurity Audit',
        category: 'DATA SECURITY',
        description: 'Complete security assessment and vulnerability testing for enterprise systems.',
        tags: ['Audit', 'Penetration Testing'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 6,
        title: 'Data Protection Suite',
        category: 'DATA SECURITY',
        description: 'Advanced encryption and data protection solutions for sensitive information.',
        tags: ['Encryption', 'Compliance'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'Website Development': [
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 7,
        title: 'E-commerce Platform',
        category: 'WEBSITE DEVELOPMENT',
        description: 'Custom e-commerce solution with advanced features and seamless user experience.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'UI/UX Design': [
      {
        id: 2,
        title: 'Criftocy Landing Page',
        category: 'WEBSITE DEVELOPMENT, UI/UX DESIGN',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['WordPress', 'PHP', 'HTML/CSS', 'Figma'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 8,
        title: 'Mobile App Interface',
        category: 'UI/UX DESIGN',
        description: 'Modern mobile application design with intuitive user experience and clean aesthetics.',
        tags: ['Figma', 'Prototyping', 'User Research'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'Cloud Service': [
      {
        id: 9,
        title: 'AWS Migration',
        category: 'CLOUD SERVICE',
        description: 'Complete cloud migration strategy and implementation for scalable infrastructure.',
        tags: ['AWS', 'Migration', 'DevOps'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 10,
        title: 'Multi-Cloud Architecture',
        category: 'CLOUD SERVICE',
        description: 'Hybrid cloud solutions for optimal performance and cost efficiency.',
        tags: ['Azure', 'GCP', 'Kubernetes'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center'
      }
    ],
    'Game Development': [
      {
        id: 3,
        title: 'AR/VR War 1986 Game',
        category: 'GAME DEVELOPMENT',
        description: 'Trust our top minds to eliminate workflow pain points, implement new tech & app.',
        tags: ['VR/AR', 'iOS & Android', 'Unity 2D/3D'],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop&crop=center'
      },
      {
        id: 11,
        title: 'Mobile Racing Game',
        category: 'GAME DEVELOPMENT',
        description: 'High-performance mobile racing game with realistic physics and stunning graphics.',
        tags: ['Unity 3D', 'Mobile', 'Multiplayer'],
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop&crop=center'
      }
    ]
  };

  const currentServices = services[activeTab] || [];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="mb-3">
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
                
                <div className="flex flex-wrap gap-2">
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