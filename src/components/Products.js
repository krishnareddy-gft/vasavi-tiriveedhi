import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Knock Fashion",
      category: "E-commerce Platform",
      description: "A revolutionary e-commerce platform that transforms the fashion retail experience with AI-powered recommendations, virtual try-ons, and seamless shopping experiences.",
      features: [
        "AI-powered fashion recommendations",
        "Virtual try-on technology",
        "Personalized shopping experience",
        "Multi-vendor marketplace",
        "Advanced analytics dashboard",
        "Mobile-first responsive design"
      ],
      technologies: ["React", "Node.js", "AI/ML", "Computer Vision", "MongoDB", "AWS"],
      color: "from-pink-500 to-rose-500",
      icon: "👗",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      name: "Aashray Homes",
      category: "Real Estate Platform",
      description: "An innovative real estate platform that revolutionizes property discovery and management with advanced search algorithms, virtual tours, and comprehensive property analytics.",
      features: [
        "360° virtual property tours",
        "AI-powered property matching",
        "Market trend analysis",
        "Investment opportunity insights",
        "Property management tools",
        "Real-time market updates"
      ],
      technologies: ["Vue.js", "Python", "Machine Learning", "3D Visualization", "PostgreSQL", "Google Cloud"],
      color: "from-emerald-500 to-teal-500",
      icon: "🏠",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 3,
      name: "Cattle Sphere",
      category: "AI Farming Technology",
      description: "A cutting-edge AI-powered farming solution that optimizes livestock management, health monitoring, and farm operations through intelligent automation and predictive analytics.",
      features: [
        "AI-powered health monitoring",
        "Predictive analytics for livestock",
        "Automated feeding systems",
        "Real-time health alerts",
        "Farm optimization insights",
        "IoT sensor integration"
      ],
      technologies: ["React Native", "Python", "TensorFlow", "IoT", "Edge Computing", "Azure"],
      color: "from-amber-500 to-orange-500",
      icon: "🐄",
      gradient: "from-amber-400 to-orange-400"
    },
    {
      id: 4,
      name: "Ai Next-Gen Farming",
      category: "Advanced Agricultural AI",
      description: "Revolutionary AI-driven agricultural platform that transforms traditional farming with precision agriculture, automated crop management, and intelligent resource optimization for sustainable food production.",
      features: [
        "Precision agriculture algorithms",
        "Automated crop monitoring",
        "Smart irrigation systems",
        "Predictive yield analysis",
        "Soil health optimization",
        "Climate adaptation AI"
      ],
      technologies: ["Machine Learning", "Computer Vision", "IoT Sensors", "Python", "TensorFlow", "AWS"],
      color: "from-green-500 to-emerald-500",
      icon: "🌱",
      gradient: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Floating Background Elements */}
        <div className="floating-element top-20 left-20 w-32 h-32 animate-float-slow"></div>
        <div className="floating-element top-40 right-40 w-28 h-28 animate-float" style={{animationDelay: '8s'}}></div>

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-8">
            <span className="text-gray-800 animate-slide-up">My Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Four innovative platforms that showcase the power of technology in transforming 
            traditional industries and creating exceptional user experiences.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div key={product.id} className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`} style={{animationDelay: `${index * 0.3}s`}}>
              {/* Product Image/Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-left`} style={{animationDelay: `${index * 0.3 + 0.1}s`}}>
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${product.color} opacity-80 hover:scale-105 transition-all duration-200 group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-150">{product.icon}</div>
                    <div className="bg-white/90 border border-gray-200 p-6 rounded-2xl group-hover:bg-white transition-colors duration-150">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-150">{product.name}</h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-150">{product.category}</p>
                    </div>
                  </div>
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {product.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100/90 border border-blue-200 px-3 py-1 rounded-full text-xs text-blue-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-right`} style={{animationDelay: `${index * 0.3 + 0.2}s`}}>
                <div className="professional-card h-full">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 font-display">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 border border-blue-200 px-3 py-1 rounded-lg text-sm text-blue-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gray-700 border border-gray-600 transition-all duration-300 hover:bg-gray-600 hover:border-gray-500">
                    Learn More About {product.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="professional-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-display">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-gray-600 mb-6">
              Each of these products represents years of innovation, research, and dedication to 
              creating solutions that make a real difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View All Products
              </button>
              <button className="btn-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
