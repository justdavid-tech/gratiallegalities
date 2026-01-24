import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Target, Shield, CheckCircle } from 'lucide-react';

const PracticeHero = ({ 
  practiceName,
  tagline,
  description,
  contactPerson,
  contactEmail,
  keyFeatures = [],
  stats = [],
  secondaryDescription = '',
  customContent = null  
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-secondary-900 to-secondary-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000"></div>
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary/20 rounded-lg -rotate-12 animate-float-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Practice Area Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-medium">Practice Area</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {practiceName}
            </h1>
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-2xl text-primary font-semibold">{tagline}</span>
            </div>


                   {/* Custom content or default description */}
        {customContent ? (
          customContent
        ) : (
          <>
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {secondaryDescription && (
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                {secondaryDescription}
              </p>
            )}
          </>
        )}
            
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {secondaryDescription && (
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                {secondaryDescription}
              </p>
            )}

            {/* Key Features */}
            {keyFeatures.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Our Expertise Includes:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`mailto:${contactEmail}`}
                className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact {contactPerson}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={scrollToContent}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More About This Practice
              </button>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Contact Card */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Practice Lead Contact</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Practice Lead</div>
                  <div className="text-xl font-bold text-white">{contactPerson}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">Direct Email</div>
                  <a 
                    href={`mailto:${contactEmail}`}
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium break-all"
                  >
                    {contactEmail}
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-1">For Immediate Assistance</div>
                  <div className="text-white font-medium">Contact for a detailed proposal and consultation</div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-lg font-bold text-white mb-3">What to Expect:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Tailored proposal for your needs</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Industry-specific insights</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Confidential assessment</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/2348138939107?text=Hello%20Gratia%20Legalities%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation%20for%20${encodeURIComponent(practiceName)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 py-3 bg-gradient-to-r from-primary to-primary-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Schedule {practiceName} Consultation via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-lg font-bold text-white mb-3">Practice Excellence</h4>
              <p className="text-gray-300 text-sm">
                Our team addresses all {practiceName.split(' ')[0]} needs in a practical, value-oriented and effective manner.
              </p>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PracticeHero;