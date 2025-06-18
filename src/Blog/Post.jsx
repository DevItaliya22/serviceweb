import React from "react";

const posts = [
  {
    title: "Crypto Trend 2023",
    category: "NEWS",
    date: "Posted on 3 Days ago",
    description:
      "If there’s one way that wireless technology has changed the way we work, it’s that well everyone is now connected [...]",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
  },
  {
    title: "AI With Fingerprint",
    category: "NEWS",
    date: "Posted on 3 Days ago",
    description:
      "If there’s one way that wireless technology has changed the way we work, it’s that well everyone is now connected [...]",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
  },
  {
    title: "NFT Game! New Opportunity",
    category: "NEWS",
    date: "Posted on 3 Days ago",
    description:
      "If there’s one way that wireless technology has changed the way we work, it’s that well everyone is now connected [...]",
    image:
      "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png",
  },
];

const Post = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold tracking-widest text-gray-800 uppercase mb-12">
        Popular Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="text-blue-600 font-semibold">{post.category}</span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    A
                  </div>
                  <span>By Admin</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v10a2 2 0 002 2h2m0-16V4a2 2 0 012-2h6a2 2 0 012 2v4m-2 4H9m4 4H9"
                      />
                    </svg>
                    <span>24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553 4.553a2.121 2.121 0 01-3 3L12 13l-4.553 4.553a2.121 2.121 0 01-3-3L9 10"
                      />
                    </svg>
                    <span>774k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
