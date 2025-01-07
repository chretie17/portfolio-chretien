import React, { useState, useEffect } from 'react';
import './styles.css';
import ProfileImage from './images/TC Chretien.jpg';
import GolfImage from './images/5 days kigali golf.jpg';
import LakeKivu from './images/day lake kivu.jpg';
import Christmas from './images/package.jpg';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/95 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="relative flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">TC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {['Home', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:text-blue-200 transition-colors px-3 py-2 text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-blue-900/95 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          <div className="absolute inset-0 opacity-20">
            {/* Animated background patterns */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,#3B82F6,transparent)]"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="space-y-6 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  Turashimye Chretien
                </h1>
                <div className="h-1 w-32 bg-blue-500 mx-auto md:mx-0"></div>
                <p className="text-2xl md:text-3xl text-blue-200 font-light">
                  IT Professional & Digital Creator
                </p>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Passionate IT professional specializing in Networking and Communication Systems,
                  with a creative edge in graphic design and digital marketing.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://github.com/chretie17" 
                    className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-blue-500/50"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/chretie17" 
                    className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-white/50"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image - Now visible on mobile */}
            <div className="flex-1">
              <div className="relative max-w-md mx-auto">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative">
                  <div className="relative z-10 rounded-full border-4 border-blue-300 overflow-hidden shadow-2xl aspect-square">
                    <img
                      src={ProfileImage}
                      alt="Turashimye Chretien"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-float-delayed"></div>
                  
                  {/* Additional decorative circles */}
                  <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                  <div className="absolute bottom-1/3 -left-8 w-20 h-20 bg-blue-200 rounded-full opacity-10 animate-pulse-delayed"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* Rest of the sections with added IDs */}
      <section id="skills" className="py-20 bg-white">
        {/* Skills section content remains the same */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Core Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Network Infrastructure', icon: '🌐' },
              { title: 'System Administration', icon: '⚙️' },
              { title: 'Adobe Creative Suite', icon: '🎨' },
              { title: 'Digital and Social Media Communication or management', icon: '📱' }
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience section with ID */}
      <section id="experience" className="py-20 bg-blue-50">
        {/* Experience section content remains the same */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-800">RivExcel</h3>
              <p className="text-blue-600 mb-4">Graphics Design & Digital Marketing - Part Time | October 2024 - Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Developed engaging designs and flyers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Managed Social Media Handles
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-800">Twelve Corners Transportation/John Global Marketing</h3>
              <p className="text-blue-600 mb-4">Web Developer & Graphic Designer | May 2023 - October 2024</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Developed and maintained websites to ensure optimal user experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Created visually appealing graphics for marketing campaigns
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-800">Wale's Tours du Rwanda</h3>
              <p className="text-blue-600 mb-4">Graphic Designer | May 2021 - June 2023</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Designed engaging marketing materials, including brochures and social media content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Managed social media platforms to boost engagement and visibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section with ID */}
      <section id="portfolio" className="py-20 bg-white">
        {/* Portfolio section content remains the same */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Portfolio Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Golf in Rwanda by RivExcel Tours",
                description: "Comprehensive branding and marketing materials using Adobe Suite.",
                image: GolfImage
              },
              {
                title: "Tourism Marketing Portfolio",
                description: "Visual materials showcasing Rwanda's beauty for tourism.",
                image: LakeKivu
              },
              {
                title: "Digital Growth Campaign",
                description: "Social media strategy achieving 30% engagement growth.",
                image: Christmas
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section with ID */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        {/* Contact section content remains the same */}
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col items-center space-y-4">
          <p className="text-xl">📍 Kigali, Rwanda</p>
            <p className="text-xl">📧 turachretien@gmail.com</p>
            <p className="text-xl">📞 +250 788 841 213</p>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/chretie17" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/chretie17" 
                className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-300 shadow-lg hover:shadow-white/50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
