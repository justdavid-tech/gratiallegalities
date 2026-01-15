import React from 'react';
import { 
  Target, 
  Users, 
  Shield, 
  Award, 
  HeartHandshake,
  ArrowRight,
  Building,
  Star,
  CheckCircle,
  Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom'; // or your routing method

const AboutFirm = () => {
  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity First',
      description: 'Unwavering honesty in all our dealings',
      color: 'text-primary'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Pursuing the highest standards in legal practice',
      color: 'text-primary'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centered',
      description: 'Your success is our ultimate measure',
      color: 'text-primary'
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Compassion',
      description: 'Understanding with empathy and care',
      color: 'text-primary'
    }
  ];

  const milestones = [
    { year: '1998', event: 'Firm Founded', highlight: true },
    { year: '2005', event: 'First Major Case Win', highlight: false },
    { year: '2012', event: 'Expanded to National Practice', highlight: false },
    { year: '2020', event: 'Digital Transformation', highlight: false },
    { year: '2024', event: 'Industry Recognition Award', highlight: true }
  ];

  return (
    <div className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Building className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            More Than <span className="text-primary">Just a Law Firm</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A legacy of trust, excellence, and client success spanning decades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Brief History */}
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 pt-2">Our Foundation</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Founded in 1998 by Johnathan Sterling, our firm began as a small practice dedicated to providing 
                  exceptional legal representation with personal attention. What started with just three attorneys 
                  has grown into a nationally recognized firm with over 50 legal experts.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Over the past 25+ years, we've built our reputation on successfully handling complex cases while 
                  maintaining the personal touch of a boutique firm. Our growth has been strategic, always focused 
                  on enhancing our ability to serve clients better.
                </p>
                <div className="flex items-center gap-2 text-primary mt-6">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Serving clients for 25+ years</span>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6">Key Milestones</h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 p-3 rounded-lg ${milestone.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-white/5'}`}
                  >
                    <div className={`w-16 h-12 flex items-center justify-center rounded-lg ${milestone.highlight ? 'bg-primary text-white' : 'bg-white/10 text-gray-300'}`}>
                      <span className="font-bold">{milestone.year}</span>
                    </div>
                    <span className={`${milestone.highlight ? 'text-white font-semibold' : 'text-gray-300'}`}>
                      {milestone.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Values */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <blockquote className="text-xl italic text-gray-200 leading-relaxed border-l-4 border-primary pl-6 py-2">
                "To provide exceptional legal representation that empowers our clients, 
                upholds justice, and sets new standards for excellence in the legal profession."
              </blockquote>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Johnathan Sterling</div>
                    <div className="text-gray-400 text-sm">Founding Partner</div>
                  </div>
                </div>
                <div className="text-sm text-primary font-medium">Since 1998</div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                        <div className={value.color}>
                          {value.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">
                          {value.title}
                        </h5>
                        <p className="text-gray-400 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Community Impact</h4>
                  <p className="text-gray-400 text-sm">Beyond the courtroom</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-xs text-gray-400">Pro Bono Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-gray-400">Charity Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2M+</div>
                  <div className="text-xs text-gray-400">Community Giving</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Want to Know the Full Story?
                </h3>
                <p className="text-gray-400 text-lg">
                  Discover our complete journey, meet our entire team, and learn about our firm's philosophy
                </p>
              </div>
              <Link 
                to="/about" 
                className="group flex items-center gap-2 px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Read Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-12 text-center">
          <div className="inline-block max-w-2xl">
            <div className="text-gray-400 text-lg italic mb-4">
              "Great legal counsel is more than just knowledge of the law—it's about understanding people, 
              anticipating challenges, and being there when it matters most."
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
              <div>
                <div className="text-white font-semibold">Sarah Chen</div>
                <div className="text-gray-400 text-sm">Managing Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirm;