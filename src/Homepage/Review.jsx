import React from 'react';
import { Star } from 'lucide-react';

export default function Review() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "It uses a directory of over 20 latin words combine a half of model sentence structures.",
      author: "Alonso D. Dowson",
      position: "HEAD OF IDEA",
      avatar: "👨🏽‍💼"
    },
    {
      id: 2,
      rating: 4,
      text: "It uses a directory of over 20 latin words combine a half of model sentence structures.",
      author: "Miranda H. Halim",
      position: "CEO",
      avatar: "👨🏽‍💼"
    },
    {
      id: 3,
      rating: 5,
      text: "It uses a directory of over 20 latin words combine a half of model sentence structures.",
      author: "Rosalina D. William",
      position: "FOUNDER",
      avatar: "👨🏼‍💼"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Happy User Reviews
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative mb-8 w-full max-w-sm">
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {renderStars(review.rating)}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed text-center">
                  " {review.text} "
                </blockquote>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-white rotate-45 shadow-lg"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-lg"
                     style={{
                       background: review.id === 1 ? 'linear-gradient(135deg, #ff6b6b, #ff8e8e)' :
                                  review.id === 2 ? 'linear-gradient(135deg, #667eea, #764ba2)' :
                                  'linear-gradient(135deg, #74b9ff, #0984e3)'
                     }}>
                  {review.avatar}
                </div>

                <div className="text-center">
                  <div className="mb-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {review.position}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {review.author}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}