import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Scale, 
  Target, 
  Shield, 
  Users, 
  Brain,
  Lightbulb,
  Zap,
  Globe,
  Clock,
  CheckCircle,
  Award,
  ArrowRight,
  ChevronRight,
  PieChart,
  Network,
  Search,
  Lock,
  TrendingUp,
  ClipboardCheck,
  FileText,
  BarChart3,
  DollarSign
} from 'lucide-react';

const LegalAdvisory = () => {
  const advisoryServices = [
    {
      category: 'Strategic Legal Counsel',
      items: [
        'Business strategy legal alignment',
        'Regulatory compliance roadmap development',
        'Risk management framework design',
        'Corporate governance advisory',
        'Legal due diligence for strategic decisions'
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      category: 'Operational Legal Support',
      items: [
        'Day-to-day operational legal guidance',
        'Contract review and management advisory',
        'Regulatory compliance monitoring',
        'Internal policy development',
        'Legal process optimization'
      ],
      icon: <Scale className="w-6 h-6" />
    },
    {
      category: 'Risk Assessment & Mitigation',
      items: [
        'Comprehensive legal risk assessments',
        'Compliance gap analysis',
        'Dispute prevention strategies',
        'Liability minimization planning',
        'Crisis management legal preparation'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Business Transformation Advisory',
      items: [
        'Digital transformation legal support',
        'Market expansion legal strategy',
        'Organizational restructuring guidance',
        'Merger and acquisition preparation',
        'Innovation and R&D legal framework'
      ],
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const advisoryAreas = [
    {
      area: 'Regulatory Advisory',
      services: [
        'Regulatory compliance assessments',
        'Licensing and permit guidance',
        'Government relations strategy',
        'Policy interpretation and application',
        'Regulatory reporting requirements'
      ],
      icon: <FileText className="w-5 h-5" />
    },
    {
      area: 'Compliance Management',
      services: [
        'Compliance program development',
        'Internal control systems',
        'Audit and monitoring frameworks',
        'Training and awareness programs',
        'Compliance reporting structures'
      ],
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      area: 'Legal Operations',
      services: [
        'Legal department optimization',
        'Outside counsel management',
        'Legal technology implementation',
        'Budget and resource planning',
        'Performance metrics development'
      ],
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      area: 'Stakeholder Advisory',
      services: [
        'Board and committee support',
        'Shareholder relations guidance',
        'Management team legal counsel',
        'Employee legal awareness programs',
        'External stakeholder engagement'
      ],
      icon: <Users className="w-5 h-5" />
    }
  ];

  const advisoryStats = [
    { value: '300+', label: 'Advisory Clients', description: 'Businesses and organizations' },
    { value: '95%', label: 'Client Retention', description: 'Long-term advisory relationships' },
    { value: '24/7', label: 'Legal Support', description: 'Available for urgent matters' },
    { value: '50+', label: 'Industries Served', description: 'Cross-sector expertise' }
  ];

  const advisoryMethodology = [
    {
      step: 'Assessment & Analysis',
      description: 'Comprehensive evaluation of legal needs and risks',
      activities: ['Situation analysis', 'Risk identification', 'Stakeholder mapping'],
      icon: <Search className="w-6 h-6" />
    },
    {
      step: 'Strategy Development',
      description: 'Creating tailored legal strategies and solutions',
      activities: ['Option development', 'Risk assessment', 'Implementation planning'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: 'Implementation Support',
      description: 'Practical guidance for strategy execution',
      activities: ['Process implementation', 'Training delivery', 'Monitoring setup'],
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: 'Continuous Improvement',
      description: 'Ongoing evaluation and strategy refinement',
      activities: ['Performance review', 'Strategy adjustment', 'Best practices updating'],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const valueDimensions = [
    {
      dimension: 'Proactive Guidance',
      description: 'Anticipating legal challenges before they arise',
      icon: <Target className="w-5 h-5" />
    },
    {
      dimension: 'Strategic Alignment',
      description: 'Aligning legal strategy with business objectives',
      icon: <PieChart className="w-5 h-5" />
    },
    {
      dimension: 'Risk Optimization',
      description: 'Balancing risk management with business growth',
      icon: <Shield className="w-5 h-5" />
    },
    {
      dimension: 'Cost Efficiency',
      description: 'Optimizing legal spending and resource allocation',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive general legal advisory services that serve as your strategic 
        legal compass, guiding your business through complex regulatory landscapes while 
        aligning legal strategy with your commercial objectives.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our general legal advisory practice functions as your trusted legal partner, 
        providing ongoing counsel that helps you make informed decisions, manage risks effectively, 
        and capitalize on opportunities with confidence.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Strategic Legal Partnership
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Proactive Counsel', 'Risk Management', 'Strategic Alignment', 'Compliance Excellence', 'Business Integration'].map((item, index) => (
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
        practiceName="General Legal Advisory"
        tagline="Your Strategic Legal Compass for Business Success"
        customContent={customHeroContent}
        contactPerson="General Advisory Partners"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Strategic legal counsel and business alignment",
          "Comprehensive risk assessment and management",
          "Regulatory compliance and governance advisory",
          "Operational legal support and optimization",
          "Business transformation legal guidance",
          "Continuous legal monitoring and improvement"
        ]}
        stats={[
          { value: "300+", label: "Clients" },
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
                Strategic legal guidance across all aspects of your business operations
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

          {/* Advisory Areas */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Specialized <span className="text-primary">Advisory Areas</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Focused legal advisory services for specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisoryAreas.map((area, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {area.area}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {area.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Advisory Methodology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Advisory Excellence</h3>
                    <p className="text-gray-400">Our commitment to strategic legal partnership</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {advisoryStats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center border border-primary/20"
                    >
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-lg text-white font-medium mb-1">{stat.label}</div>
                      <div className="text-sm text-gray-400">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Advisory Methodology</h3>
                    <p className="text-gray-400">Our structured approach to legal counsel</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {advisoryMethodology.map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{step.step}</h4>
                        <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.activities.map((activity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-xs text-gray-400 rounded">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Value Dimensions */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Value <span className="text-primary">Dimensions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive benefits of our general legal advisory services
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
                  color: 'from-blue-500/20 to-blue-600/10'
                },
                {
                  model: 'Project Advisory',
                  description: 'Focused legal counsel for specific initiatives or projects',
                  features: ['Defined scope and timeline', 'Specialized expertise', 'Milestone-based delivery', 'Comprehensive reporting'],
                  icon: <Target className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  model: 'Emergency Advisory',
                  description: 'Immediate legal support for urgent matters and crises',
                  features: ['24/7 availability', 'Rapid response team', 'Crisis management', 'Immediate risk assessment'],
                  icon: <Zap className="w-8 h-8" />,
                  color: 'from-green-500/20 to-green-600/10'
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

          {/* Strategic Advisory Framework */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Strategic Advisory Framework</h3>
                  <p className="text-gray-300 mb-6">
                    Our comprehensive framework ensures that legal counsel is integrated 
                    into your business strategy, providing ongoing guidance that evolves 
                    with your organization's needs and objectives.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Strategic Alignment</div>
                        <div className="text-sm text-gray-400">Legal strategy integrated with business goals</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Risk Intelligence</div>
                        <div className="text-sm text-gray-400">Proactive identification and management</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Performance Measurement</div>
                        <div className="text-sm text-gray-400">Metrics-driven advisory effectiveness</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Advisory Focus Areas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { area: 'Governance', score: '95%' },
                      { area: 'Compliance', score: '98%' },
                      { area: 'Risk Management', score: '96%' },
                      { area: 'Strategic Alignment', score: '94%' }
                    ].map((focus, index) => (
                      <div key={index} className="p-4 bg-white/10 rounded-lg">
                        <div className="text-white font-bold text-lg mb-1">{focus.score}</div>
                        <div className="text-sm text-gray-400">{focus.area} Effectiveness</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Industry <span className="text-primary">Applications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Startups & Growth Companies</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Legal foundation establishment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Funding and investment guidance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Growth strategy legal support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Established Enterprises</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Operational legal optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Compliance program enhancement</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Strategic transformation support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Multinational Organizations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Cross-border legal coordination</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Global compliance management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>International expansion strategy</span>
                  </li>
                </ul>
              </div>
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
                  Our general legal advisory practice serves as your strategic legal partner, 
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
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
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
                  <a 
                    href="#"
                    className="block w-full py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
                  >
                    Download Advisory Services Guide
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
                    Transform Your Legal Strategy with Expert Advisory Guidance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Make informed decisions, manage risks effectively, and achieve business objectives with confidence
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
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

          {/* Quick Assessment */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-md">
              <h4 className="text-lg font-bold text-white mb-3">Legal Advisory Assessment</h4>
              <p className="text-gray-400 text-sm mb-4">
                Take our 5-minute assessment to identify your key legal advisory needs
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

export default LegalAdvisory;