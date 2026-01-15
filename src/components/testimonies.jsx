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
      quote: "After a complex corporate merger, we faced unexpected legal challenges. The team's strategic approach not only saved us millions but also protected our company's future. Their attention to detail was extraordinary.",
      author: "Robert Chen",
      initials: "RC",
      caseType: "Corporate Merger",
      rating: 5,
      date: "March 2024",
      industry: "Technology",
      avatarColor: "bg-primary/20"
    },
    {
      id: 2,
      quote: "Facing criminal charges was the most frightening experience of my life. My attorney fought tirelessly, never gave up, and achieved a complete dismissal. I owe my freedom to this firm.",
      author: "Michael Rodriguez",
      initials: "MR",
      caseType: "Criminal Defense",
      rating: 5,
      date: "February 2024",
      industry: "Individual",
      avatarColor: "bg-primary/20"
    },
    {
      id: 3,
      quote: "Our family went through a difficult divorce and custody battle. The compassion and professionalism shown was beyond expectations. They protected our children's interests above all.",
      author: "Sarah Johnson",
      initials: "SJ",
      caseType: "Family Law",
      outcome: "Favorable Custody",
      rating: 5,
      date: "January 2024",
      industry: "Family",
      avatarColor: "bg-primary/20"
    },
    {
      id: 4,
      quote: "Navigating immigration law was overwhelming. The firm guided us through every step, communicated clearly in our native language, and secured our green cards. Life-changing service.",
      author: "The Nguyen Family",
      initials: "TN",
      caseType: "Immigration",
      rating: 5,
      date: "December 2023",
      industry: "Immigration",
      avatarColor: "bg-primary/20"
    },
    {
      id: 5,
      quote: "When our real estate deal was about to collapse, the legal team stepped in with creative solutions that satisfied all parties. Their negotiation skills saved the transaction.",
      author: "David Park",
      initials: "DP",
      caseType: "Real Estate",
      rating: 5,
      date: "November 2023",
      industry: "Real Estate",
      avatarColor: "bg-primary/20"
    },
    {
      id: 6,
      quote: "After a serious accident, I was overwhelmed by medical bills. The personal injury team secured a settlement that covered all expenses and provided for my family's future.",
      author: "James Wilson",
      initials: "JW",
      caseType: "Personal Injury",
      rating: 5,
      date: "October 2023",
      industry: "Individual",
      avatarColor: "bg-primary/20"
    }
  ];

  const stats = [
    { value: "500+", label: "5-Star Reviews" },
    { value: "98%", label: "Recommendation Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24h", label: "Response Time" }
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
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

          {/* Additional Testimonials Sidebar */}
          <div className="space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`group cursor-pointer bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  index === activeIndex ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-primary/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3 h-3 text-primary fill-primary" 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-white font-medium mb-1 line-clamp-2">
                      "{testimonial.quote.substring(0, 80)}..."
                    </div>
                    <div className="text-xs text-gray-400">{testimonial.caseType}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Verification Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-white font-bold">Verified Reviews</div>
                  <div className="text-gray-400 text-sm">All testimonials verified</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Authentic client experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;