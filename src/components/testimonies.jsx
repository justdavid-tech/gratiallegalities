import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  UserCheck, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  ThumbsUp,
  Shield,
  ArrowRight
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Gratial Legalities took the stress out of my land documentation. They handled the entire process with incredible speed and precision, ensuring my title was secured without a single hitch. If you need property papers done right, this is the firm to call.",
      author: "Chukwuma Eze",
      initials: "CE",
      caseType: "Land Documentation",
      outcome: "Successful Completion",
      rating: 5,
      date: "March 2025",
      industry: "Technology",
      avatarColor: "bg-primary/20"
    },
    {
      id: 2,
      quote: "Our international commercial contract negotiations were at a standstill. The firm's expertise in commercial law and cross-border transactions broke the deadlock, resulting in favorable terms that exceeded our expectations.",
      author: "Amara Okafor",
      initials: "AO",
      caseType: "Commercial Contract Law",
      outcome: "Favorable Agreement",
      rating: 5,
      date: "February 2025",
      industry: "Manufacturing",
      avatarColor: "bg-primary/20"
    },
    {
      id: 3,
      quote: "When our real estate development faced zoning challenges, the legal team's deep knowledge of property law and government relations secured all necessary approvals. Project delivered on time.",
      author: "Stephanie Nwankwo",
      initials: "SN",
      caseType: "Real Estate Development",
      outcome: "Project Approved",
      rating: 5,
      date: "April 2025",
      industry: "Real Estate Development",
      avatarColor: "bg-primary/20"
    },
    {
      id: 4,
      quote: "The firm provided comprehensive guidance on compliance, board structure, and shareholder agreements. Our business operations are now seamless and legally sound.",
      author: "Funke Adeyemi",
      initials: "FA",
      caseType: "Corporate Governance",
      outcome: "Full Compliance",
      rating: 5,
      date: "December 2025",
      industry: "Financial Services",
      avatarColor: "bg-primary/20"
    },
    {
      id: 5,
      quote: "A commercial lease dispute threatened our retail expansion. The firm's aggressive negotiation expertise resolved the matter favorably, allowing us to open 12 new locations ahead of schedule.",
      author: "Ibrahim Musa",
      initials: "IM",
      caseType: "Commercial Litigation",
      outcome: "Favorable Settlement",
      rating: 5,
      date: "November 2025",
      industry: "Retail",
      avatarColor: "bg-primary/20"
    },
    {
      id: 6,
      quote: "Our commercial property acquisition in Wuse 2 was complex with multiple stakeholders. The team conducted thorough due diligence, negotiated masterfully, and delivered a clean title. Outstanding real estate counsel.",
      author: "Ngozi Okoro",
      initials: "NO",
      caseType: "Commercial Real Estate",
      outcome: "Successful Acquisition",
      rating: 5,
      date: "October 2025",
      industry: "Real Estate Investment",
      avatarColor: "bg-primary/20"
    }
  ];

  const stats = [
    { value: "110+", label: "5-Star Reviews" },
    { value: "94%", label: "Recommendation Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "1h", label: "Response Time" }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-secondary-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-primary/20 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-primary">500+ Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from clients who trusted us with their most important legal matters
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 mb-12">
          {/* Main Testimonial Carousel */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-primary fill-primary" 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">{testimonials[activeIndex].date}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl text-white italic mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${testimonials[activeIndex].avatarColor} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">
                      {testimonials[activeIndex].initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {testimonials[activeIndex].caseType}
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">{testimonials[activeIndex].outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute -bottom-25 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-primary/50 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex ? 'bg-primary w-8' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-primary/50 transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;