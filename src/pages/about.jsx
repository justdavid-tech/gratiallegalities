import React from 'react';
import { 
  Target, 
  Shield, 
  Users, 
  Award, 
  HeartHandshake,
  Building,
  Star,
  CheckCircle,
  Leaf,
  TrendingUp,
  Globe,
  BookOpen,
  ArrowRight,
  Quote,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  GraduationCap,
  Scale,
  Briefcase,
  Home,
  Globe2,
  FileText,
  Car,
  Heart
} from 'lucide-react';
import Footer from '../components/footer';

const About = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity First',
      description: 'We uphold the highest ethical standards in every case, ensuring transparency and honesty in all our dealings.',
      principles: ['Ethical Practice', 'Transparency', 'Honesty', 'Accountability']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Pursuing the highest standards in legal practice, constantly evolving to deliver exceptional results.',
      principles: ['Quality', 'Precision', 'Continuous Improvement', 'Attention to Detail']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centered',
      description: 'Your success is our ultimate measure. We tailor strategies to your unique needs and goals.',
      principles: ['Personalized Service', 'Client Success', 'Communication', 'Accessibility']
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Compassion',
      description: 'Understanding with empathy and care, guiding you through challenges with support and respect.',
      principles: ['Empathy', 'Support', 'Respect', 'Understanding']
    }
  ];

  const timeline = [
    { year: '1998', title: 'Foundation', description: 'Sterling Legal Group founded with a vision for client-first legal services' },
    { year: '2003', title: 'First Expansion', description: 'Moved to larger offices and expanded practice areas' },
    { year: '2010', title: 'Digital Innovation', description: 'Implemented advanced case management technology' },
    { year: '2015', title: 'National Recognition', description: 'Received first national industry awards' },
    { year: '2020', title: 'Virtual Services', description: 'Launched comprehensive virtual legal services' },
    { year: '2024', title: 'Modern Approach', description: 'Continued innovation with AI-assisted legal research' }
  ];

  const serviceStats = [
    { icon: <Scale className="w-6 h-6" />, value: '25+', label: 'Years Experience', suffix: 'Legal Excellence' },
    { icon: <Award className="w-6 h-6" />, value: '500+', label: 'Cases Won', suffix: 'Successful Outcomes' },
    { icon: <Users className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction', suffix: 'Happy Clients' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '95%', label: 'Success Rate', suffix: 'Courtroom Wins' }
  ];

  const practiceAreas = [
    { icon: <Briefcase className="w-5 h-5" />, name: 'Corporate Law', cases: '120+' },
    { icon: <Shield className="w-5 h-5" />, name: 'Criminal Defense', cases: '85+' },
    { icon: <Heart className="w-5 h-5" />, name: 'Family Law', cases: '95+' },
    { icon: <Home className="w-5 h-5" />, name: 'Real Estate', cases: '110+' },
    { icon: <Globe2 className="w-5 h-5" />, name: 'Immigration', cases: '75+' },
    { icon: <FileText className="w-5 h-5" />, name: 'Civil Litigation', cases: '100+' },
    { icon: <Car className="w-5 h-5" />, name: 'Personal Injury', cases: '90+' },
    { icon: <GraduationCap className="w-5 h-5" />, name: 'Education Law', cases: '50+' }
  ];

  const communityInitiatives = [
    'Annual Pro Bono Week providing free legal services',
    'Partnership with local non-profits for community legal education',
    'Scholarship program for aspiring law students',
    'Environmental sustainability initiatives in office operations'
  ];

  const technologyFeatures = [
    'Secure client portal for real-time case updates',
    'AI-powered legal research tools',
    'Electronic document management system',
    'Virtual consultation capabilities',
    'Encrypted communication channels'
  ];

  return (
    <>
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Story Since 1998</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-primary">Sterling Legal</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A legacy of trust, excellence, and unwavering commitment to client success for over two decades.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-white font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.suffix}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-primary">Journey</span> of Excellence
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in 1998, Sterling Legal Group began with a simple yet powerful vision: to provide exceptional legal 
                services that prioritize client success above all else. What started as a small practice has grown into 
                a respected legal institution, recognized for its commitment to excellence and innovative approach to law.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Over the past 25+ years, we've evolved to meet the changing needs of our clients while maintaining the 
                personal touch and attention to detail that defined our early days. Our growth has been strategic, 
                focusing on enhancing our capabilities without compromising the quality of service that our clients deserve.
              </p>
              
              <div className="flex items-center gap-2 text-primary mt-8">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Serving clients with dedication since 1998</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Our Evolution</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <div className="text-primary font-bold">{item.year}</div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision and action at Sterling Legal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {value.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {value.principles.map((principle, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/10 group-hover:border-primary/20 group-hover:text-primary transition-all"
                        >
                          {principle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Areas Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Legal <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with proven results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-primary mb-3">
                  {area.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {area.name}
                </h4>
                <div className="text-sm text-gray-400">{area.cases} Cases</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology & Innovation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Innovation in <span className="text-primary">Legal Services</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We embrace technology to enhance our legal services, ensuring efficiency, security, and accessibility 
              for all our clients. Our commitment to innovation allows us to provide cutting-edge solutions while 
              maintaining the highest standards of legal excellence.
            </p>

            <div className="space-y-4">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-6">Client Experience</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Streamlined Process</h4>
                  <p className="text-gray-400">From initial consultation to case resolution, we prioritize clear communication and efficient workflows.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Transparent Communication</h4>
                  <p className="text-gray-400">Regular updates and clear explanations ensure you're always informed about your case.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Security & Privacy</h4>
                  <p className="text-gray-400">Advanced security measures protect your sensitive information throughout the legal process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Commitment */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Community <span className="text-primary">Commitment</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Giving back to the community that has supported our growth for over 25 years
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Social Responsibility</h3>
                    <p className="text-gray-400">Making a positive impact beyond the courtroom</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {communityInitiatives.map((initiative, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">5000+</div>
                  <div className="text-gray-300">Pro Bono Hours</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Community Partners</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">$2M+</div>
                  <div className="text-gray-300">Community Investment</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">25</div>
                  <div className="text-gray-300">Years of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-400">Our commitment to excellence</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-200 leading-relaxed border-l-4 border-primary pl-6 py-2">
              "To provide exceptional legal representation that empowers our clients, 
              upholds justice, and sets new standards for excellence in the legal profession 
              through innovation, integrity, and unwavering dedication."
            </blockquote>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-gray-400">Where we're headed</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the most trusted and innovative legal services provider, recognized nationally 
              for our commitment to client success, community impact, and the advancement of 
              accessible, high-quality legal representation for all.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Ready to Work With Us?
                </h3>
                <p className="text-gray-300 text-lg">
                  Experience the Sterling Legal difference for yourself
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+15551234567"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <a href="mailto:info@sterlinglegal.com" className="text-gray-400 hover:text-primary transition-colors">
                      info@sterlinglegal.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Visit Us</div>
                    <div className="text-gray-400">123 Justice Ave, NYC 10001</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Office Hours</div>
                    <div className="text-gray-400">Mon-Fri: 8am-8pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;