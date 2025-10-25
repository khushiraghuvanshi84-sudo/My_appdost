import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      category: "DESIGN",
      readingTime: "12 min",
      title: "TestDisabled This account doesn't meet our policy...",
      excerpt: "TestDisabled This account doesn't meet our policy guidelines. Disabled This account doesn't meet our policy guidelines. Disabled This accou...",
      author: "AppDost Team",
      date: "Oct 12, 2025",
      authorInitials: "AP"
    },
    {
      id: 2,
      category: "DEVELOPMENT",
      readingTime: "8 min",
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Learn how to structure your React applications for scalability using modern patterns like custom hooks, context API, and component composition...",
      author: "AppDost Team",
      date: "Oct 10, 2025",
      authorInitials: "AP"
    },
    {
      id: 3,
      category: "TECHNOLOGY",
      readingTime: "15 min",
      title: "The Future of Web Development: Trends and Predictions",
      excerpt: "Explore the latest trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks...",
      author: "AppDost Team",
      date: "Oct 8, 2025",
      authorInitials: "AP"
    }
  ];

  return (
    <section id="blog" className="min-h-screen bg-white">
      {/* Purple Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            {/* Blog Icon */}
            <div className="flex items-center space-x-2 mr-4">
              <div className="w-8 h-8 bg-green-500 rounded-sm"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-sm -mt-2"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-sm -mt-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our Blog
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Insights, tutorials, and tech stories from the AppDost team
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-200 h-110 flex flex-col"
              >
                {/* Blog Post Thumbnail */}
                <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 rounded-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                </div>

                {/* Category and Reading Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-base">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
                    </svg>
                    {post.readingTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-lg text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {post.authorInitials}
                      </span>
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg text-base font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
