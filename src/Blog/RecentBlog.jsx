import React from 'react';
import { Search, MessageSquare, Eye, Clock } from 'lucide-react';

export default function RecentBlog() {
    const mainPosts = [
        {
            id: 1,
            category: 'NEWS',
            title: 'How To Become A Python Develop Expert',
            excerpt: 'If there\'s one way that wireless technology has changed the way we work, it\'s that will everyone [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
            author: 'Admin',
            comments: 24,
            views: '774k',
            timeAgo: '12 Days ago'
        },
        {
            id: 2,
            category: 'NEWS',
            title: 'VR Game, Opportunity & Challenge',
            excerpt: 'If there\'s one way that wireless technology has changed the way we work, it\'s that will everyone [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
            author: 'Admin',
            comments: 24,
            views: '774k',
            timeAgo: '12 Days ago'
        },
        {
            id: 3,
            category: 'TIPS & TRICKS',
            title: 'Social Media Marketing',
            excerpt: 'If there\'s one way that wireless technology has changed the way we work, it\'s that will everyone [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
            author: 'Admin',
            comments: 24,
            views: '774k',
            timeAgo: '12 Days ago'
        },
         {
            id: 3,
            category: 'TIPS & TRICKS',
            title: 'Social Media Marketing',
            excerpt: 'If there\'s one way that wireless technology has changed the way we work, it\'s that will everyone [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
            author: 'Admin',
            comments: 24,
            views: '774k',
            timeAgo: '12 Days ago'
        }
    ];

    const sidebarPosts = [
        {
            title: 'Crypto Trend 2023',
            excerpt: 'If there\'s one way that wireless technology has [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
        },
        {
            title: 'How To Become Web Developer',
            excerpt: 'If there\'s one way that wireless technology has [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
        },
        {
            title: 'Wireframe for UI/UX',
            excerpt: 'If there\'s one way that wireless technology has [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
        },
        {
            title: 'AI With Fingerprint',
            excerpt: 'If there\'s one way that wireless technology has [...]',
            image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png"
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {mainPosts.map((post) => (
                            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-48 md:h-full object-cover"
                                            style={{
                                                background: post.id === 1 ?
                                                    'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)' :
                                                    post.id === 2 ?
                                                        'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)' :
                                                        'linear-gradient(135deg, #F56500 0%, #FBD38D 100%)'
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-2/3 p-6">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-blue-500 text-sm font-medium">{post.category}</span>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {post.timeAgo}
                                            </div>
                                        </div>

                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                                                    <span className="text-white text-xs font-medium">A</span>
                                                </div>
                                                <span className="text-gray-700 text-sm">By {post.author}</span>
                                            </div>

                                            <div className="flex items-center gap-4 text-gray-500 text-sm">
                                                <div className="flex items-center">
                                                    <MessageSquare className="w-4 h-4 mr-1" />
                                                    {post.comments}
                                                </div>
                                                <div className="flex items-center">
                                                    <Eye className="w-4 h-4 mr-1" />
                                                    {post.views}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Search */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wider">SEARCH</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type and hit enter"
                                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <Search className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wider">RECENT POST</h3>
                            <div className="space-y-4">
                                {sidebarPosts.map((post, index) => (
                                    <div key={index} className="flex gap-4">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                            style={{
                                                background: index === 0 ?
                                                    'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)' :
                                                    index === 1 ?
                                                        'linear-gradient(135deg, #059669 0%, #047857 100%)' :
                                                        index === 2 ?
                                                            'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)' :
                                                            'linear-gradient(135deg, #1F2937 0%, #111827 100%)'
                                            }}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-gray-900 text-sm mb-1 leading-tight">
                                                {post.title}
                                            </h4>
                                            <p className="text-gray-600 text-xs leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Categories */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-wider">CATEGORIES</h3>
                            <ul className="space-y-3 text-sm text-gray-800">
                                {[
                                    { name: "ALL", count: 265 },
                                    { name: "NEWS", count: 38 },
                                    { name: "TECHNOLOGY", count: 16 },
                                    { name: "TIPS & TRICKS", count: 85 },
                                    { name: "CAREER", count: 21 },
                                    { name: "COMMUNITY", count: 874 },
                                    { name: "VIDEOS", count: 54 },
                                    { name: "OTHERS", count: 85 },
                                ].map((category, idx) => (
                                    <li
                                        key={idx}
                                        className="flex justify-between items-center border-b border-gray-100 pb-2"
                                    >
                                        <span>{category.name}</span>
                                        <span className="text-gray-500">{category.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}