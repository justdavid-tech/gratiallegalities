import React, { useState, useEffect } from 'react';
import { ArrowRight, Scale, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PracticeAreasModal from './PracticeAreasModal';

const backgroundImages = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80', // courtroom/law
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80', // corporate office
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80', // handshake/deal
];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [nextBg, setNextBg] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);

  const rotatingWords = ['Excellence', 'Integrity', 'Innovation', 'Results'];

  const practiceAreas = {
    column1: [
      { name: 'Corporate Law', path: '/practices/corporate-law' },
      { name: 'Contracts & Legal Documentation', path: '/practices/contracts-legal-documentation' },
      { name: 'Commercial Law', path: '/practices/commercial' },
      { name: 'Real Estate Law', path: '/practices/real-estate' },
      { name: 'Commercial Advisory', path: '/practices/commercial-advisory' },
      { name: 'Contract Drafting', path: '/practices/contract-drafting' },
    ],
    column2: [
      { name: 'Employment Law', path: '/practices/employment' },
      { name: 'Legal Advisory', path: '/practices/legal-advisory' },
      { name: 'Legal Due Diligence', path: '/practices/legal-due-diligence' },
      { name: 'Online Business Law', path: '/practices/online-business' },
      { name: 'Property Dispute Resolution', path: '/practices/property-dispute' },
    ],
  };

  useEffect(() => {
    setIsVisible(true);

    // Rotate words
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    // Switch background images with crossfade
    const bgInterval = setInterval(() => {
      const next = (currentBg + 1) % backgroundImages.length;
      setNextBg(next);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBg(next);
        setIsTransitioning(false);
      }, 1500); // crossfade duration
    }, 6000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(bgInterval);
    };
  }, [currentBg]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* === BACKGROUND IMAGES === */}
      {/* Current image - always visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />
      {/* Next image - fades in during transition */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[nextBg]})`,
          opacity: isTransitioning ? 1 : 0,
        }}
      />

      {/* Dark overlay — keeps content readable, gives corporate depth */}
      <div className="absolute inset-0 bg-black/66" />
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40" />

      {/* Animated Geometric Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/8 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-float" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-primary rounded-lg -rotate-12 animate-float-delayed" />
          <div className="absolute bottom-40 left-1/4 w-28 h-28 border border-primary/20 rounded-lg rotate-45 animate-float" />
        </div>
      </div>

      {/* Background image indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-700 ${
              i === currentBg ? 'w-8 bg-primary' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">

          {/* Left Column */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Award-Winning Legal Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Offering Legal Solutions and Protection with
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent animate-gradient">
                {rotatingWords[currentWord]}
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              We deliver strategic legal solutions tailored to your needs. With decades of combined experience,
              we transform complex challenges into successful outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Legal Health Check
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setIsPracticeModalOpen(true)}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Our Practice Areas
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">11+</div>
                <div className="text-sm text-gray-400 mt-1">Practice Areas</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">96%</div>
                <div className="text-sm text-gray-400 mt-1">Success Rate</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[
              {
                icon: <Scale className="w-7 h-7 text-primary" />,
                title: 'Expert Legal Counsel',
                desc: 'We provide comprehensive legal guidance across multiple practice areas with proven track records.',
              },
              {
                icon: <Shield className="w-7 h-7 text-primary" />,
                title: 'Client-Focused Approach',
                desc: 'Your success is our priority. We deliver personalized strategies that align with your goals and protect your interests.',
              },
              {
                icon: <Users className="w-7 h-7 text-primary" />,
                title: 'Trusted Partnership',
                desc: 'Build lasting relationships with a firm that values transparency, communication, and unwavering dedication.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-gradient-to-br from-white/8 to-white/0 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-brand-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PracticeAreasModal
        isOpen={isPracticeModalOpen}
        onClose={() => setIsPracticeModalOpen(false)}
        practiceAreas={practiceAreas}
      />

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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF0000; border-radius: 3px; }
      `}</style>
    </div>
  );
};

export default Hero;