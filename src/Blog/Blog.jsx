import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Post from './Post';
import RecentBlog from './RecentBlog';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      category: "NEWS",
      timeAgo: "3 Days ago",
      title: "Solutions For Big Data Issue, Expert Perspective",
      description: "If there's one way that wireless technology has changed the way we work, it's that will everyone is now connected [...]",
      bgColor: "from-gray-300 to-blue-200"
    },
    {
      category: "TECH",
      timeAgo: "5 Days ago",
      title: "Machine Learning Trends in 2025",
      description: "Artificial intelligence continues to reshape industries across the globe with new innovations [...]",
      bgColor: "from-purple-300 to-pink-200"
    },
    {
      category: "BUSINESS",
      timeAgo: "1 Week ago",
      title: "Digital Transformation Strategies",
      description: "Companies are adapting to new digital landscapes faster than ever before [...]",
      bgColor: "from-green-300 to-teal-200"
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="text-center mt-40 mb-12 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Our <span className="text-blue-500">Journal</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Get the latest articles from our journal, writing, discuss and share
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl h-96 bg-gradient-to-br shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full h-full bg-gradient-to-br ${slide.bgColor} relative flex items-end p-8`}
                >
                  <div className="text-white max-w-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                        {slide.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm opacity-80">
                        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <span>Posted on {slide.timeAgo}</span>
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Posts Section */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <Post />
      </div>
      {/* Blog Posts Section */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <RecentBlog/>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
