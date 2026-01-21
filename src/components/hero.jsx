import React, { useState, useEffect } from 'react';
import { ArrowRight, Scale, Shield, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  
  const rotatingWords = [
    'Excellence',
    'Integrity',
    'Innovation',
    'Results'
  ];

  const practiceAreas = {
    column1: [
      { name: 'Commercial Law', path: '/practices/commercial' },
      { name: 'Commercial Advisory', path: '/practices/commercial-advisory' },
      { name: 'Commercial Documentation', path: '/practices/commercial-documentation' },
      { name: 'Contract Drafting', path: '/practices/contract-drafting' },
      { name: 'Corporate Law', path: '/practices/corporate-law' },
      { name: 'Employment & Labour', path: '/practices/employment' }
    ],
    column2: [
      { name: 'General Legal Advisory', path: '/practices/legal-advisory' },
      { name: 'Legal Due Diligence', path: '/practices/legal-due-diligence' },
      { name: 'Online Business & E-Commerce', path: '/practices/online-business' },
      { name: 'Property Dispute Resolution', path: '/practices/property-dispute' },
      { name: 'Real Estate Law', path: '/practices/real-estate' }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000"></div>
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-lg -rotate-12 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-28 h-28 border border-primary/20 rounded-lg rotate-45 animate-float"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-medium">Award-Winning Legal Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Offering Legal Solutions and Protection with
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary-400 to-primary-600 bg-clip-text text-transparent animate-gradient">
                {rotatingWords[currentWord]}
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We deliver strategic legal solutions tailored to your needs. With decades of combined experience, we transform complex challenges into successful outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to = "/contact" className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Practice Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                onMouseLeave={() => setIsPracticeDropdownOpen(false)}
              >
                <Link
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  aria-expanded={isPracticeDropdownOpen}
                  aria-haspopup="menu"
                >
                  Our Practice Areas
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isPracticeDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Dropdown Menu */}
                {isPracticeDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-secondary-950 border border-primary/20 rounded-xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Column 1 */}
                        <div className="space-y-2">
                          {practiceAreas.column1.map((area, index) => (
                            <Link
                              key={index}
                              to={area.path}
                              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200 text-sm"
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                        
                        {/* Column 2 */}
                        <div className="space-y-2">
                          {practiceAreas.column2.map((area, index) => (
                            <Link
                              key={index}
                              to={area.path}
                              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-200 text-sm"
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* View All Link */}
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <Link
                          to="/practice-areas"
                          className="flex items-center justify-center gap-2 text-primary hover:text-primary-400 transition-colors text-sm font-medium"
                        >
                          View All Practice Areas
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">54+</div>
                <div className="text-sm text-gray-400 mt-1">Cases Won</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">96%</div>
                <div className="text-sm text-gray-400 mt-1">Success Rate</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Scale className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text`-2xl font-bold text-white mb-3">Expert Legal Counsel</h3>
                <p className="text-gray-400 leading-relaxed">
                  We provide comprehensive legal guidance across multiple practice areas with proven track records.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Client-Focused Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your success is our priority. We deliver personalized strategies that align with your goals and protect your interests.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Trusted Partnership</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build lasting relationships with a firm that values transparency, communication, and unwavering dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-30px) rotate(-12deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;