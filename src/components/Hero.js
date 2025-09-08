import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0"></div>
      </div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Grid Glow Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}></div>
      </div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px, 120px 120px'
        }}></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="floating-element top-20 left-10 w-32 h-32 animate-float-slow"></div>
      <div className="floating-element top-40 right-20 w-24 h-24 animate-float" style={{animationDelay: '4s'}}></div>
      <div className="floating-element bottom-20 left-1/4 w-28 h-28 animate-float-slow" style={{animationDelay: '8s'}}></div>
      <div className="floating-element top-1/2 right-1/3 w-20 h-20 animate-float" style={{animationDelay: '12s'}}></div>
      
      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
      </div>
      
      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl"></div>
      
      {/* Tech Hologram Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-indigo-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-indigo-500 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8">
            <span className="block text-gray-800 mb-2">I'm</span>
            <span className="block text-rainbow font-bold">Vasavi Tiriveedhi</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-10">
            <p className="text-2xl md:text-3xl text-gray-600 mb-4">
              <span className="text-shine-subtle font-semibold">🚀 Entrepreneur & CEO</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Golden Future Technologies
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with AI, Robotics & Innovation that transforms industries
            </p>
          </div>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="professional-card px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="text-gray-800 font-semibold text-base">🎓 Masters in Robotics</span>
            </div>
            <div className="professional-card px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="text-gray-800 font-semibold text-base">🚀 4 Innovative Products</span>
            </div>
            <div className="professional-card px-6 py-4 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="text-gray-800 font-semibold text-base">🤖 AI & Automation Expert</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="group relative btn-primary text-lg px-10 py-4 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Discover My Journey
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button 
              onClick={() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })}
              className="group relative btn-secondary text-lg px-10 py-4 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                💡 View My Products
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
