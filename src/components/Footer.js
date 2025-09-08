import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    { name: 'Knock Fashion', description: 'E-commerce Platform' },
    { name: 'Aashray Homes', description: 'Real Estate Platform' },
    { name: 'Cattle Sphere', description: 'AI Farming Technology' },
    { name: 'Ai Next-Gen Farming', description: 'Advanced Agricultural AI' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/vasavi-tiriveedhi' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/vasavi_tiriveedhi' },
    { name: 'GitHub', icon: '🐙', href: 'https://github.com/vasavi-tiriveedhi' },
    { name: 'Email', icon: '📧', href: 'mailto:vasavi.tiriveedhi@gftglobal.com.au' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700 relative overflow-hidden">
      {/* Minimal Floating Background Elements */}
      <div className="floating-element top-20 left-20 w-20 h-20 animate-float-slow"></div>
      <div className="floating-element top-40 right-20 w-24 h-24 animate-float" style={{animationDelay: '14s'}}></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                {/* VT Icon */}
                <div className="relative group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    {/* VT Text */}
                    <span className="text-white font-bold text-lg tracking-tight relative z-10">VT</span>
                  </div>
                  
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Vasavi Tiriveedhi
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Entrepreneur & CEO of Golden Future Technologies. Pioneering innovative 
                solutions in AI, robotics, and digital transformation across multiple industries.
              </p>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <div>
                    <p className="text-white font-medium">{product.name}</p>
                    <p className="text-gray-400 text-sm">{product.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-display">Contact Information</h4>
            
            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-sm">📧</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:vasavi.tiriveedhi@gftglobal.com.au"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    vasavi.tiriveedhi@gftglobal.com.au
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-sm">📱</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href="tel:+61433310399"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +61 433 310 399
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-sm">🌐</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Company Website</p>
                  <a 
                    href="https://goldenfuturetechnologies.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    goldenfuturetechnologies.com.au
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-sm">💼</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/vasavitiriveedhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    linkedin.com/in/vasavitiriveedhi
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Vasavi Tiriveedhi. All rights reserved. | Golden Future Technologies Pty Ltd
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 border border-gray-500 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-500 transition-all duration-200 z-50"
        title="Back to top"
      >
        <span className="text-white text-xl">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
