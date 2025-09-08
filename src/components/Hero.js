import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-indigo-200 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>🤖</div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>💻</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>⚡</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>🚀</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full min-h-[70vh]">
          
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Heading */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-20"></div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 relative">
                <span className="block text-gray-800 mb-2">I'm</span>
                <span className="block text-rainbow font-bold">Vasavi Tiriveedhi</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-4 relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                🚀 Entrepreneur & CEO
              </p>
              <p className="text-lg md:text-xl text-gray-800 font-bold">
                Golden Future Technologies
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Transforming industries through cutting-edge AI, robotics, and innovative technology solutions
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <div className="text-2xl font-bold text-blue-600">4+</div>
                <div className="text-xs text-gray-600">Products</div>
              </div>
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-xs text-gray-600">AI Projects</div>
              </div>
              <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50">
                <div className="text-2xl font-bold text-indigo-600">3+</div>
                <div className="text-xs text-gray-600">Industries</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Achievements Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Key Achievements</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Founded Golden Future Technologies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Led 4 successful product launches
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    15+ AI projects completed
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Global impact across industries
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Focus Areas Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Focus Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-center">AI & ML</div>
                  <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-center">Robotics</div>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full text-center">E-commerce</div>
                  <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-center">AgriTech</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                className="group relative btn-primary text-base px-8 py-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 Discover My Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              <button 
                onClick={() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })}
                className="group relative btn-secondary text-base px-8 py-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  💡 View My Products
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;