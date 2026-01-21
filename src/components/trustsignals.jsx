import React from 'react';
import { 
  Award, 
  Briefcase, 
  Trophy, 
  ShieldCheck, 
  Users, 
  Scale, 
  Star,
  FileText,
  CheckCircle,
  BadgeCheck,
  ArrowRight
} from 'lucide-react';

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: "6+",
      label: "Years Experience",
      description: "Dedication years of proven legal expertise",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "54+",
      label: "Cases Won",
      description: "Successful outcomes for our clients",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "5+",
      label: "Awards",
      description: "Industry recognition & excellence",
      gradient: "from-primary/20 to-primary/10"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "96%",
      label: "Client Satisfaction",
      description: "Positive feedback & referrals",
      gradient: "from-primary/20 to-primary/10"
    }
  ];

  const certifications = [
    {
      name: "State Bar Association",
      icon: <Scale className="w-5 h-5" />,
      verified: true
    },
    {
      name: "American Bar Association",
      icon: <ShieldCheck className="w-5 h-5" />,
      verified: true
    },
    {
      name: "Super Lawyers",
      icon: <Star className="w-5 h-5" />,
      verified: true
    },
    {
      name: "Avvo Rating: 10/10",
      icon: <BadgeCheck className="w-5 h-5" />,
      verified: true
    }
  ];

  const awards = [
    "Best Law Firm 2023",
    "Legal Excellence Award",
    "Top 100 Trial Lawyers",
    "Client Choice Award"
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-secondary-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Trust & Credibility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Clients <span className="text-primary">Trust</span> Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proven track record of excellence, recognized by clients and industry peers alike
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-brand-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                  <div className="text-primary">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {metric.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
                <p className="text-gray-400">Professional credentials & memberships</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {cert.icon}
                    </div>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">
                      {cert.name}
                    </span>
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <CheckCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Verified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
                <p className="text-gray-400">Industry accolades & achievements</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="group relative p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trophy className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">
                      {award}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Badge */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Continuing Excellence</h4>
                  <p className="text-gray-400 text-sm">Maintaining highest standards since 1998</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">25</div>
                  <div className="text-sm text-gray-400">Years Running</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Banner */}
        <div className="mt-16 relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Free Case Evaluation</h4>
                  <p className="text-gray-400">Get a confidential assessment of your case</p>
                </div>
              </div>
              <button className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;