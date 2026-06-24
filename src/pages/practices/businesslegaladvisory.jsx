import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Brain,
  Lightbulb,
  Zap,
  Shield,
  Globe,
  FileText,
  CheckCircle,
  Award,
  ArrowRight,
  ChevronRight,
  PieChart,
  DollarSign,
  Building,
  Network,
  Search,
  Lock,
  ThumbsUp,
  ClipboardCheck,
  Scale,
  Clock
} from 'lucide-react';

const BusinessLegalAdvisory = () => {
  const advisoryServices = [
    {
      category: 'Strategic Legal & Business Counsel',
      items: [
        'Business strategy legal alignment',
        'Market entry and expansion strategy development',
        'Business model optimization and transformation',
        'Corporate governance advisory',
        'Growth strategy formulation and implementation'
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      category: 'Due Diligence & Risk Management',
      items: [
        'Pre-transaction commercial viability assessment',
        'Comprehensive legal risk assessments',
        'Market opportunity and risk analysis',
        'Dispute prevention strategies',
        'Liability minimization planning'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Contract Strategy & Optimization',
      items: [
        'Commercial agreement strategy development',
        'Contract portfolio analysis and optimization',
        'Risk allocation and pricing strategy',
        'Performance monitoring framework design',
        'Renewal and renegotiation strategy'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Regulatory Strategy & Compliance',
      items: [
        'Regulatory impact assessment and strategy',
        'Compliance program development and roadmap',
        'Government relations and advocacy strategy',
        'Internal control systems and audits',
        'Regulatory risk management framework'
      ],
      icon: <ClipboardCheck className="w-6 h-6" />
    }
  ];

  const industrySolutions = [
    {
      sector: 'Energy & Infrastructure',
      solutions: [
        'Project commercial structuring',
        'PPA and offtake agreement strategy',
        'Regulatory compliance roadmap',
        'Stakeholder management strategy'
      ],
      icon: <Building className="w-5 h-5" />
    },
    {
      sector: 'Consumer Goods & Retail',
      solutions: [
        'Distribution channel optimization',
        'Pricing and promotion strategy',
        'Supplier relationship strategy',
        'Customer experience enhancement'
      ],
      icon: <Users className="w-5 h-5" />
    },
    {
      sector: 'Financial Services',
      solutions: [
        'Product commercialization strategy',
        'Partnership and alliance advisory',
        'Regulatory compliance strategy',
        'Market expansion planning'
      ],
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      sector: 'Technology & Startups',
      solutions: [
        'Digital transformation legal support',
        'Innovation and R&D legal framework',
        'Funding and investment guidance',
        'Intellectual property strategy'
      ],
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  const advisoryStats = [
    { value: '300+', label: 'Advisory Clients', description: 'Businesses and organizations' },
    { value: '30+', label: 'Strategic Projects', description: 'Complex commercial engagements' },
    { value: '95%', label: 'Client Retention', description: 'Long-term advisory relationships' },
    { value: '24/7', label: 'Support', description: 'Available for urgent matters' }
  ];

  const valueDimensions = [
    {
      dimension: 'Proactive Guidance',
      description: 'Anticipating legal and commercial challenges before they arise',
      icon: <Target className="w-5 h-5" />
    },
    {
      dimension: 'Strategic Alignment',
      description: 'Aligning legal strategy with business objectives and growth',
      icon: <PieChart className="w-5 h-5" />
    },
    {
      dimension: 'Risk Optimization',
      description: 'Balancing robust risk management with aggressive business growth',
      icon: <Shield className="w-5 h-5" />
    },
    {
      dimension: 'Cost Efficiency',
      description: 'Optimizing legal spending and commercial resource allocation',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide strategic business and legal advisory services that serve as your 
        compass, guiding your enterprise through complex regulatory landscapes while 
        optimizing commercial operations.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        By blending deep industry insight with practical legal wisdom, we function as your 
        trusted partner, helping you navigate challenges, manage risks effectively, 
        and capitalize on emerging market opportunities.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Strategic Focus Areas
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Market Strategy', 'Proactive Counsel', 'Risk Mitigation', 'Compliance Excellence', 'Digital Transformation'].map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/10 hover:border-primary/20 hover:text-primary transition-all"
            >
              {item}
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
        practiceName="Business Legal Advisory"
        tagline="Strategic Legal and Commercial Insights for Business Excellence"
        customContent={customHeroContent}
        contactPerson="Strategic Advisory Partners"
        contactEmail="info@gratiacorporateconsult.com"
        keyFeatures={[
          "Strategic legal counsel and business planning",
          "Commercial due diligence and risk assessment",
          "Contract strategy and commercial optimization",
          "Regulatory compliance and governance advisory",
          "Digital transformation and innovation legal guidance",
          "Continuous legal monitoring and improvement"
        ]}
        stats={[
          { value: "300+", label: "Clients" },
          { value: "30+", label: "Projects" },
          { value: "95%", label: "Retention" },
          { value: "24/7", label: "Support" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Advisory Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Advisory Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Integrated legal and commercial solutions that drive business growth and competitive advantage
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advisoryServices.map((service, index) => (
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

          {/* Value Dimensions */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Value <span className="text-primary">Dimensions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive benefits of our integrated business legal advisory
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueDimensions.map((dimension, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {dimension.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {dimension.dimension}
                  </h4>
                  <p className="text-gray-400 text-sm">{dimension.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry-Specific Solutions */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored commercial and legal advisory for key industry sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrySolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {solution.sector}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {solution.solutions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Delivery Models */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Advisory <span className="text-primary">Delivery Models</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  model: 'Retainer Advisory',
                  description: 'Ongoing strategic legal partnership with dedicated advisor',
                  features: ['Monthly strategy sessions', 'Unlimited email consultation', 'Priority response times', 'Regular legal updates'],
                  icon: <Users className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  model: 'Project Advisory',
                  description: 'Focused legal and commercial counsel for specific initiatives',
                  features: ['Defined scope and timeline', 'Specialized expertise', 'Milestone-based delivery', 'Comprehensive reporting'],
                  icon: <Target className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  model: 'Emergency Advisory',
                  description: 'Immediate legal support for urgent matters and crises',
                  features: ['24/7 availability', 'Rapid response team', 'Crisis management', 'Immediate risk assessment'],
                  icon: <Zap className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                }
              ].map((model, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${model.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <div className="text-primary mb-4">
                    {model.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-3">{model.model}</div>
                  <p className="text-gray-400 text-sm mb-4">{model.description}</p>
                  <div className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our General Advisory</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our business legal advisory practice serves as your strategic partner, 
                  providing comprehensive counsel that integrates legal considerations into 
                  your business decision-making process, ensuring both compliance and competitive advantage.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Network className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Integrated Approach</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Legal counsel seamlessly integrated with business operations and strategy.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Responsive Partnership</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Timely guidance and support when you need it most.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Strategic Insight</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Forward-looking legal guidance anticipating business challenges and opportunities.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Comprehensive Coverage</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Holistic legal support across all aspects of your business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Advisory Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For General Advisory</div>
                  <a 
                    href="mailto:info@gratiacorporateconsult.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    info@gratiacorporateconsult.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Initial Consultation</div>
                  <div className="text-white font-medium">Free 60-minute strategy session to assess your legal needs</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Schedule Strategy Session
                  </a>
                </div>
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
                    Transform Your Business Strategy with Expert Advisory
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Make informed decisions, manage risks effectively, and achieve business objectives with confidence
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@gratiacorporateconsult.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Advisory Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Advisory Proposal
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

export default BusinessLegalAdvisory;
