import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getReviews } from '../api/review';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews();
        // Only show reviews where isShow is true
        setReviews(Array.isArray(res.data) ? res.data.filter(r => r.isShow) : []);
      } catch {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

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

  if (loading) {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-500">Loading reviews...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </section>
    );
  }

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
          {reviews.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No reviews to show.</div>
          ) : (
            reviews.map((review) => (
              <div key={review._id} className="flex flex-col items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg relative mb-8 w-full max-w-sm">
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {renderStars(review.rating)}
                  </div>

                  <blockquote className="text-gray-700 text-lg leading-relaxed text-center">
                    " {review.reviewText} "
                  </blockquote>

                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white rotate-45 shadow-lg"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {review.profileImage ? (
                    <img
                      src={
                        review.profileImage.startsWith('http')
                          ? review.profileImage
                          : `${import.meta.env.VITE_BASE_URL || 'http://localhost:5000'}/${review.profileImage.replace(/\\/g, '/')}`
                      }
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-white"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-lg bg-gray-200">
                      👤
                    </div>
                  )}
                  <div className="text-center">
                    <div className="mb-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        {review.designation || 'User'}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {review.name}
                    </h4>
                    {review.company && (
                      <div className="text-xs text-gray-500">{review.company}</div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}