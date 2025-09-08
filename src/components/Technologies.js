import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      category: "Artificial Intelligence & Machine Learning",
      icon: "🤖",
      description: "Advanced AI solutions for predictive analytics, computer vision, and intelligent automation",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras", "Pandas"]
    },
    {
      category: "Web Development & Frontend",
      icon: "💻",
      description: "Modern web technologies for creating responsive, interactive user experiences",
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      category: "Backend & Database",
      icon: "⚙️",
      description: "Robust backend systems and database management for scalable applications",
      technologies: ["Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      description: "Cloud infrastructure and deployment strategies for modern applications",
      technologies: ["AWS", "Google Cloud", "Azure", "Terraform", "Jenkins", "Git"]
    },
    {
      category: "Mobile & IoT",
      icon: "📱",
      description: "Mobile applications and Internet of Things solutions for connected devices",
      technologies: ["React Native", "Flutter", "Arduino", "Raspberry Pi", "MQTT", "ESP32"]
    },
    {
      category: "Data Science & Analytics",
      icon: "📊",
      description: "Data analysis, visualization, and business intelligence solutions",
      technologies: ["Jupyter", "Tableau", "Power BI", "Apache Spark", "NumPy", "Matplotlib"]
    }
  ];

  const expertise = [
    {
      title: "AI & Machine Learning",
      description: "Specialized in developing intelligent systems that learn, adapt, and make decisions autonomously.",
      icon: "🧠",
      projects: "15+ AI Projects"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development expertise from frontend user interfaces to backend infrastructure.",
      icon: "🔧",
      projects: "25+ Web Applications"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Floating Background Elements */}
        <div className="floating-element top-10 right-10 w-24 h-24 animate-float"></div>
        <div className="floating-element top-1/3 left-10 w-28 h-28 animate-float-slow" style={{animationDelay: '10s'}}></div>

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
            <span className="text-gray-800">Technologies & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit of cutting-edge technologies and frameworks that power 
            innovative solutions across multiple domains.
          </p>
        </div>

        {/* Expertise Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div key={index} className="professional-card text-center">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">{item.description}</p>
              <span className="text-gray-500 font-semibold text-lg">{item.projects}</span>
            </div>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="professional-card">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 font-display mb-3">{category.category}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 border border-blue-200 rounded-full px-3 py-1 text-sm text-blue-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Statement */}
        <div className="mt-16 text-center">
          <div className="professional-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-display">
              Innovation Through Technology
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              My approach to technology is not just about using the latest tools, but about 
              understanding how to combine them effectively to solve real-world problems. 
              From AI-driven insights to scalable cloud architectures, every technology 
              choice is made with purpose and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
