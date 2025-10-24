import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-400/50">
                🚀 Complete IT Solution Provider Since 2025
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Transform Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-blue-100 leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
              we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all text-center"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 transform hover:-translate-y-1 transition-all text-center"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-blue-300">10+</div>
                <div className="text-blue-200 mt-1">Web Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-purple-300">4+</div>
                <div className="text-purple-200 mt-1">Android Apps</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-pink-300">100%</div>
                <div className="text-pink-200 mt-1">Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-green-300">24/7</div>
                <div className="text-green-200 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}

              
              <div className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-5 transform rotate-6 hover:rotate-3 transition-transform animate-float-slow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Web Development</div>
                    <div className="text-sm text-gray-500">10+ Projects</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-32 left-0 w-64 bg-white rounded-2xl shadow-2xl p-5 transform -rotate-6 hover:-rotate-3 transition-transform animate-float-medium">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Mobile Apps</div>
                    <div className="text-sm text-gray-500">4+ Apps</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-12 w-64 bg-white rounded-2xl shadow-2xl p-5 transform rotate-3 hover:rotate-0 transition-transform animate-float-fast">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Fast Delivery</div>
                    <div className="text-sm text-gray-500">On Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;