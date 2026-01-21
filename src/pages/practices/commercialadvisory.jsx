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
  ClipboardCheck
} from 'lucide-react';

const CommercialAdvisory = () => {
  const advisoryServices = [
    {
      category: 'Strategic Business Advisory',
      items: [
        'Market entry and expansion strategy development',
        'Business model optimization and transformation',
        'Competitive positioning and market analysis',
        'Growth strategy formulation and implementation',
        'Digital transformation advisory'
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      category: 'Commercial Due Diligence',
      items: [
        'Pre-transaction commercial viability assessment',
        'Market opportunity and risk analysis',
        'Customer and supplier contract review',
        'Revenue model validation and projection',
        'Commercial integration planning'
      ],
      icon: <Search className="w-6 h-6" />
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
      category: 'Regulatory Strategy',
      items: [
        'Regulatory impact assessment and strategy',
        'Compliance roadmap development',
        'Government relations and advocacy strategy',
        'Policy change impact analysis',
        'Regulatory risk management framework'
      ],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const industrySolutions = [
    {
      sector: 'Technology & Digital',
      solutions: [
        'SaaS pricing and licensing strategy',
        'Data monetization advisory',
        'Platform business model development',
        'Digital partnership strategies'
      ],
      icon: <Zap className="w-5 h-5" />
    },
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
    }
  ];

  const advisoryStats = [
    { value: '200+', label: 'Strategic Projects', description: 'Commercial advisory engagements' },
    { value: '$2B+', label: 'Value Created', description: 'For client businesses' },
    { value: '95%', label: 'Client Retention', description: 'Repeat advisory engagements' },
    { value: '50+', label: 'Industries', description: 'Sector expertise' }
  ];

  const methodologies = [
    {
      name: 'Strategic Assessment',
      steps: ['Situation Analysis', 'Stakeholder Mapping', 'Opportunity Identification'],
      icon: <Target className="w-6 h-6" />
    },
    {
      name: 'Solution Design',
      steps: ['Option Development', 'Risk Assessment', 'Implementation Planning'],
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      name: 'Execution Support',
      steps: ['Change Management', 'Performance Monitoring', 'Continuous Optimization'],
      icon: <ClipboardCheck className="w-6 h-6" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide strategic commercial advisory services that transform business challenges into 
        opportunities for growth, innovation, and competitive advantage. Our approach combines 
        deep industry insight with practical commercial wisdom.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Beyond traditional legal advice, we serve as strategic partners who help businesses 
        navigate complex commercial landscapes, optimize operations, and capitalize on emerging 
        market opportunities.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Strategic Focus Areas
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Market Strategy', 'Commercial Optimization', 'Risk Mitigation', 'Growth Planning', 'Digital Transformation'].map((item, index) => (
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
        practiceName="Commercial Advisory"
        tagline="Strategic Insights for Business Excellence"
        customContent={customHeroContent}
        contactPerson="Strategic Advisory Partners"
        contactEmail="advisory@aluko-oyebode.com"
        keyFeatures={[
          "Strategic business planning and market analysis",
          "Commercial due diligence and opportunity assessment",
          "Contract strategy and commercial optimization",
          "Regulatory compliance and government relations strategy",
          "Digital transformation and innovation advisory",
          "Growth strategy and market expansion planning"
        ]}
        stats={[
          { value: "200+", label: "Projects" },
          { value: "$2B+", label: "Value Created" },
          { value: "95%", label: "Retention" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Advisory Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Strategic <span className="text-primary">Advisory Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive commercial advisory solutions that drive business growth and competitive advantage
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

          {/* Industry-Specific Solutions */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored commercial advisory for key industry sectors
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

          {/* Advisory Methodology */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our <span className="text-primary">Advisory Methodology</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
                    <div className="text-primary mb-6">
                      {method.icon}
                    </div>
                    
                    <div className="absolute top-8 right-8 text-5xl font-bold text-primary/20">
                      0{index + 1}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-6">{method.name}</h4>
                    
                    <div className="space-y-3">
                      {method.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Advisory */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why <span className="text-primary">Our Advisory</span> Stands Out
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Unique advantages that deliver exceptional strategic value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Integrated Legal-Commercial Approach',
                  description: 'Combines legal expertise with commercial strategy for holistic solutions',
                  icon: <Network className="w-6 h-6" />
                },
                {
                  title: 'Deep Industry Specialization',
                  description: 'Sector-specific insights that drive practical, implementable strategies',
                  icon: <Building className="w-6 h-6" />
                },
                {
                  title: 'Data-Driven Insights',
                  description: 'Analytics and market intelligence informing strategic recommendations',
                  icon: <PieChart className="w-6 h-6" />
                },
                {
                  title: 'Implementation Focus',
                  description: 'Strategy development with clear execution roadmaps and support',
                  icon: <ClipboardCheck className="w-6 h-6" />
                }
              ].map((advantage, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {advantage.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Advisory <span className="text-primary">Success Stories</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  challenge: 'Market Entry Strategy',
                  solution: 'Developed comprehensive market entry roadmap for European fintech',
                  outcome: 'Successful Nigerian launch with 50K+ users in first year',
                  industry: 'Financial Technology'
                },
                {
                  challenge: 'Distribution Optimization',
                  solution: 'Redesigned distribution network for consumer goods company',
                  outcome: '30% cost reduction and 25% market reach expansion',
                  industry: 'FMCG'
                },
                {
                  challenge: 'Digital Transformation',
                  solution: 'Created phased digital transformation strategy for traditional retailer',
                  outcome: '40% increase in online revenue within 18 months',
                  industry: 'Retail'
                }
              ].map((caseStudy, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <div className="text-sm text-primary font-semibold mb-2">{caseStudy.industry}</div>
                  <h4 className="text-lg font-bold text-white mb-4">{caseStudy.challenge}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Our Solution</div>
                      <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Business Outcome</div>
                      <p className="text-gray-300 text-sm">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Delivery Framework */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Value Delivery Framework</h3>
                  <p className="text-gray-300 mb-6">
                    Our structured approach ensures that advisory engagements deliver measurable 
                    business value and tangible results.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Clear Objectives</div>
                        <div className="text-sm text-gray-400">Specific, measurable goals defined upfront</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Progress Tracking</div>
                        <div className="text-sm text-gray-400">Regular milestone reviews and adjustments</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ThumbsUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Outcome Measurement</div>
                        <div className="text-sm text-gray-400">Quantifiable results and ROI assessment</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Engagement Options</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Strategic Advisory Project</div>
                      <div className="text-sm text-gray-400">Fixed-scope, time-bound strategic initiatives</div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Retainer Advisory</div>
                      <div className="text-sm text-gray-400">Ongoing strategic support and guidance</div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Executive Advisory</div>
                      <div className="text-sm text-gray-400">Board-level strategic counsel and planning</div>
                    </div>
                  </div>
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
                    Transform Your Business Strategy with Expert Commercial Advisory
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Unlock growth opportunities and build sustainable competitive advantage
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:advisory@aluko-oyebode.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Schedule Strategy Session
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

          {/* Quick Assessment Tool */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3">Quick Strategic Assessment</h4>
              <p className="text-gray-400 text-sm mb-4">
                Take our 2-minute assessment to identify key commercial opportunities
              </p>
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors font-medium"
              >
                Start Assessment
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommercialAdvisory;