import React from 'react';

const About = () => {
  const education = [
    {
      degree: "Masters in Robotics & Automation",
      university: "Swinburne University, Australia",
      description: "Specialized in advanced robotics systems, AI integration, and automation technologies that drive modern industry innovation."
    },
    {
      degree: "Bachelor in Mechanical Engineering",
      university: "Jawaharlal Nehru Technological University, Hyderabad, India",
      description: "Foundation in mechanical systems, engineering principles, and problem-solving methodologies that shaped my technical expertise."
    }
  ];

  const achievements = [
    {
      icon: "🚀",
      title: "Founded Golden Future Technologies",
      description: "Established a cutting-edge technology company focused on innovative solutions across multiple industries."
    },
    {
      icon: "🎯",
      title: "4 Successful Product Launches",
      description: "Led development and launch of Knock Fashion, Aashray Homes, Cattle Sphere, and Ai Next-Gen Farming - each addressing unique market needs."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Creating technology solutions that bridge the gap between traditional industries and modern digital transformation."
    },
    {
      icon: "💡",
      title: "Innovation Leadership",
      description: "Pioneering AI-driven solutions in farming, real estate, and e-commerce sectors with sustainable business models."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Floating Background Elements */}
        <div className="floating-element top-10 left-10 w-32 h-32 animate-float-slow"></div>
        <div className="floating-element top-20 right-20 w-24 h-24 animate-float" style={{animationDelay: '6s'}}></div>

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
            <span className="text-gray-800 animate-slide-up">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            A passionate entrepreneur driven by innovation, technology, and the vision to create 
            meaningful impact through cutting-edge solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Entrepreneurial Journey */}
          <div className="space-y-8">
            <div className="professional-card animate-slide-left hover:scale-105 transition-all duration-300 group" style={{animationDelay: '0.3s'}}>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 font-display">
                Entrepreneurial Journey
              </h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  My entrepreneurial journey began with a vision to bridge the gap between traditional 
                  industries and cutting-edge technology. As the CEO of Golden Future Technologies, 
                  I've dedicated myself to creating innovative solutions that address real-world challenges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The entrepreneurial life is about more than just building products—it's about 
                  understanding market needs, leading diverse teams, and constantly adapting to 
                  technological evolution. Every day brings new challenges and opportunities to 
                  make a lasting impact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From conceptualizing ideas to scaling successful businesses, I've learned that 
                  true innovation comes from combining technical expertise with deep market 
                  understanding and unwavering determination.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-right" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-display">
              Educational Background
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="professional-card hover:scale-105 transition-all duration-300 group animate-fade-in" style={{animationDelay: `${0.5 + index * 0.2}s`}}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
                    <span className="text-blue-600 font-bold text-lg group-hover:text-blue-700 transition-colors duration-150">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 font-medium mb-3">{edu.university}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 font-display animate-fade-in" style={{animationDelay: '0.6s'}}>
            <span className="text-gray-800 animate-slide-up">Key Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center card-hover animate-fade-in hover:scale-105 transition-all duration-300 group" style={{animationDelay: `${0.7 + index * 0.1}s`}}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-150">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-150">{achievement.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-150">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="glass-effect p-8 rounded-2xl text-center animate-fade-in hover:scale-105 transition-all duration-300 group" style={{animationDelay: '1.1s'}}>
          <h3 className="text-2xl font-bold text-blue-600 mb-6 font-display group-hover:text-blue-700 transition-colors duration-150">
            💭 My Philosophy
          </h3>
          <blockquote className="text-xl text-gray-600 italic leading-relaxed max-w-4xl mx-auto group-hover:text-gray-700 transition-colors duration-150">
            "Innovation is not just about creating new technology—it's about solving real problems 
            with sustainable solutions that make the world better. As an entrepreneur, I believe 
            in the power of technology to transform industries and improve lives."
          </blockquote>
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
            <span>🌟 Innovation</span>
            <span>🤝 Collaboration</span>
            <span>🌱 Sustainability</span>
            <span>📈 Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
