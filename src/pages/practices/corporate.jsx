import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Building, 
  Target, 
  Users, 
  FileText, 
  Scale,
  Globe,
  TrendingUp,
  Shield,
  CheckCircle,
  Briefcase,
  Handshake,
  DollarSign,
  Award,
  ArrowRight,
  ChevronRight,
  Zap,
  PieChart,
  BarChart3,
  Lock,
  Network
} from 'lucide-react';

const CorporateLaw = () => {
  const services = [
    {
      category: 'Business Formation & Structuring',
      items: [
        'Company incorporation and registration',
        'Joint ventures and partnerships',
        'Corporate restructuring and reorganization',
        'Shareholder agreements and corporate governance',
        'Startup legal advisory and venture structuring'
      ],
      icon: <Building className="w-6 h-6" />
    },
    {
      category: 'Mergers & Acquisitions',
      items: [
        'Due diligence and risk assessment',
        'Transaction structuring and documentation',
        'Share purchase and asset purchase agreements',
        'Post-merger integration strategies',
        'Cross-border M&A transactions'
      ],
      icon: <Handshake className="w-6 h-6" />
    },
    {
      category: 'Corporate Governance & Compliance',
      items: [
        'Board advisory and director responsibilities',
        'Regulatory compliance and reporting',
        'Corporate secretarial services',
        'Risk management frameworks',
        'ESG (Environmental, Social, Governance) compliance'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Commercial Contracts & Transactions',
      items: [
        'Drafting and negotiating commercial agreements',
        'Supplier and distributor arrangements',
        'Technology and licensing agreements',
        'Service level agreements',
        'Franchising and agency agreements'
      ],
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const corporateStats = [
    { value: '500+', label: 'Companies Served', description: 'From startups to multinationals' },
    { value: '$5B+', label: 'Transaction Value', description: 'M&A and corporate deals' },
    { value: '25+', label: 'Years Experience', description: 'Corporate legal expertise' },
    { value: '95%', label: 'Deal Success Rate', description: 'Transaction completion' }
  ];

  const industries = [
    'Financial Services',
    'Energy & Natural Resources',
    'Healthcare & Pharmaceuticals',
    'Manufacturing & Industrial',
    'Retail & Consumer Goods',
    'Real Estate & Construction',
    'Telecommunications',
    'Transportation & Logistics',
    'Media & Entertainment'
  ];



  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive corporate legal solutions that empower businesses to achieve their strategic objectives 
        while navigating Nigeria's dynamic regulatory environment. Our expertise spans from startup formation to 
        multinational corporate operations.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our corporate law team combines deep local knowledge with international best practices to deliver practical, 
        business-focused legal advice. We help clients seize opportunities, mitigate risks, and build sustainable 
        corporate structures for long-term success.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Industry Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {industries.slice(0, 6).map((industry, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/10 hover:border-primary/20 hover:text-primary transition-all"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-black">
      <Navbar />
      
      <PracticeHero
        practiceName="Corporate Law"
        tagline="Strategic Legal Solutions for Business Success"
        customContent={customHeroContent}
        contactPerson="Gratia Legalities"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "End-to-end corporate lifecycle support",
          "Mergers, acquisitions, and strategic transactions",
          "Corporate governance and compliance advisory",
          "Commercial contract drafting and negotiation",
          "Shareholder and stakeholder relations management"
        ]}
        stats={[
          { value: "54+", label: "Companies" },
          { value: "40+", label: "Deals" },
          { value: "6+", label: "Years" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Corporate Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From formation to expansion, we provide strategic legal guidance at every stage of your business journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Specialization */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Specialization</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Sector-specific corporate legal expertise for diverse industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      {index % 5 === 0 && <Zap className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <DollarSign className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <Network className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <BarChart3 className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Globe className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {industry}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our <span className="text-primary">Corporate Practice</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our corporate law practice stands out through our commitment to understanding each client's unique 
                  business objectives and industry context. We don't just provide legal advice we become strategic 
                  partners in your business journey.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Business-Focused Approach</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      We align legal strategies with your business goals, ensuring practical solutions that drive growth.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Global Perspective</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      International experience with deep local market knowledge for cross-border operations.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Senior Attention</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Direct access to experienced partners who provide strategic guidance throughout your engagement.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Proactive Compliance</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Anticipate regulatory changes and implement compliance strategies before they become issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Corporate Inquiries</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Quick Consultation</div>
                  <div className="text-white font-medium">Schedule a 30-minute strategy call with our corporate partners</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Consultation
                  </a>
                  {/* <a 
                    href="#"
                    className="block w-full py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
                  >
                    Download Corporate Services Guide
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Lifecycle Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Supporting Your <span className="text-primary">Corporate Journey</span>
            </h2>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
              
              <div className="space-y-8">
                {[
                  { stage: 'Startup & Formation', desc: 'Legal structuring and incorporation services' },
                  { stage: 'Growth & Funding', desc: 'Capital raising, investment rounds, and expansion' },
                  { stage: 'Operations & Compliance', desc: 'Day-to-day legal support and regulatory management' },
                  { stage: 'Strategic Transactions', desc: 'M&A, partnerships, and market entry strategies' },
                  { stage: 'Restructuring & Exit', desc: 'Corporate reorganization and exit planning' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="lg:w-1/2">
                      <div className={`bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${
                        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                      }`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <div className="text-xl font-bold text-primary">{index + 1}</div>
                          </div>
                          <h4 className="text-lg font-bold text-white">{item.stage}</h4>
                        </div>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex items-center justify-center w-8 h-8 bg-primary rounded-full relative z-10 mx-4">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="lg:w-1/2 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Transform Your Business with Expert Corporate Guidance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Partner with Nigeria's leading corporate law practice for strategic legal solutions
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Corporate Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Strategy Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CorporateLaw;