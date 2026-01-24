import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Search, 
  FileText, 
  Shield, 
  Target, 
  CheckCircle,
  Zap,
  ZoomIn,
  DollarSign,
  Clock,
  Award,
  ArrowRight,
  Scale,
  PieChart,
  Building,
  Network,
  Lock,
  BarChart3,
  ClipboardCheck,
  FileSearch,
  FileCheck,
  AlertCircle,
  TrendingUp,
  Users,
  Database
} from 'lucide-react';

const LegalDueDiligence = () => {
  const diligenceServices = [
    {
      category: 'Transaction Due Diligence',
      items: [
        'Mergers and acquisitions legal review',
        'Investment and financing diligence',
        'Joint venture partner assessment',
        'Asset purchase investigations',
        'Share purchase agreement support'
      ],
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      category: 'Compliance Due Diligence',
      items: [
        'Regulatory compliance assessment',
        'Licensing and permit verification',
        'Environmental compliance review',
        'Anti-corruption and anti-bribery checks',
        'Tax compliance and obligation review'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Contract Due Diligence',
      items: [
        'Contract portfolio analysis',
        'Obligation and liability assessment',
        'Termination and renewal review',
        'IP and confidentiality agreement audit',
        'Supplier and customer contract review'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Corporate Due Diligence',
      items: [
        'Corporate structure and governance review',
        'Shareholder and ownership verification',
        'Directors and officers liability assessment',
        'Minutes and resolutions examination',
        'Subsidiary and affiliate relationship review'
      ],
      icon: <Building className="w-6 h-6" />
    }
  ];

  const diligenceAreas = [
    {
      area: 'Financial Due Diligence',
      focus: [
        'Debt and liability assessment',
        'Financial obligation review',
        'Asset valuation verification',
        'Contingent liability identification',
        'Financial statement accuracy'
      ],
      icon: <PieChart className="w-5 h-5" />
    },
    {
      area: 'Commercial Due Diligence',
      focus: [
        'Market position assessment',
        'Customer and supplier review',
        'Competitive landscape analysis',
        'Commercial contract obligations',
        'Revenue stream verification'
      ],
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      area: 'Operational Due Diligence',
      focus: [
        'Operational capability assessment',
        'Facility and asset review',
        'Supply chain evaluation',
        'Employee and labor relations',
        'Operational risk identification'
      ],
      icon: <Network className="w-5 h-5" />
    },
    {
      area: 'Technology Due Diligence',
      focus: [
        'IP portfolio assessment',
        'Technology infrastructure review',
        'Data privacy and security compliance',
        'Software licensing verification',
        'Technology risk assessment'
      ],
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const diligenceStats = [
    { value: '500+', label: 'Due Diligence Projects', description: 'Completed successfully' },
    { value: '99%', label: 'Accuracy Rate', description: 'Risk identification accuracy' },
    { value: '72h', label: 'Rapid Assessment', description: 'Preliminary report turnaround' },
    { value: '$10B+', label: 'Transaction Value', description: 'Deals supported' }
  ];

  const diligenceProcess = [
    {
      phase: 'Planning & Scoping',
      description: 'Defining diligence objectives, scope, and methodology',
      activities: ['Scope definition', 'Resource allocation', 'Timeline planning', 'Stakeholder coordination'],
      icon: <Target className="w-6 h-6" />
    },
    {
      phase: 'Data Collection',
      description: 'Systematic gathering and organization of relevant information',
      activities: ['Document requests', 'Interviews', 'Site visits', 'Database searches'],
      icon: <Search className="w-6 h-6" />
    },
    {
      phase: 'Analysis & Assessment',
      description: 'Comprehensive review and risk evaluation',
      activities: ['Document review', 'Risk assessment', 'Gap analysis', 'Compliance verification'],
      icon: <ZoomIn className="w-6 h-6" />
    },
    {
      phase: 'Reporting & Recommendation',
      description: 'Detailed findings and strategic recommendations',
      activities: ['Findings documentation', 'Risk categorization', 'Recommendations', 'Action planning'],
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const riskCategories = [
    {
      category: 'Legal & Regulatory Risks',
      examples: ['Compliance violations', 'Pending litigation', 'Regulatory penalties', 'License deficiencies'],
      icon: <Scale className="w-5 h-5" />
    },
    {
      category: 'Financial Risks',
      examples: ['Undisclosed liabilities', 'Tax exposures', 'Debt obligations', 'Financial misrepresentation'],
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      category: 'Operational Risks',
      examples: ['Contract breaches', 'Supply chain issues', 'Facility problems', 'Employee disputes'],
      icon: <Building className="w-5 h-5" />
    },
    {
      category: 'Reputational Risks',
      examples: ['Environmental issues', 'Social responsibility concerns', 'Governance failures', 'Ethical violations'],
      icon: <Users className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive legal due diligence services that uncover risks, validate opportunities, 
        and provide the critical insights needed for informed business decisions and successful transactions.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our due diligence specialists combine meticulous investigation with strategic analysis to deliver 
        clear, actionable insights that protect your investments and support successful business outcomes.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          Diligence Excellence
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Risk Identification', 'Compliance Verification', 'Opportunity Validation', 'Strategic Insight', 'Transaction Support'].map((item, index) => (
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
        practiceName="Legal Due Diligence"
        tagline="Uncovering Risks, Validating Opportunities"
        customContent={customHeroContent}
        contactPerson="Due Diligence Specialists"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Comprehensive transaction due diligence services",
          "Regulatory and compliance investigations",
          "Contract portfolio analysis and assessment",
          "Corporate structure and governance review",
          "Risk identification and mitigation strategies",
          "Strategic recommendations and action planning"
        ]}
        stats={[
          { value: "500+", label: "Projects" },
          { value: "99%", label: "Accuracy" },
          { value: "72h", label: "Rapid Assessment" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Diligence Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Due Diligence Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Complete due diligence solutions for informed business decisions and successful transactions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {diligenceServices.map((service, index) => (
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

          {/* Diligence Focus Areas */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Specialized <span className="text-primary">Focus Areas</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Targeted due diligence investigations across key business dimensions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diligenceAreas.map((area, index) => (
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
                    {area.focus.map((focus, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Due Diligence Excellence</h3>
                    <p className="text-gray-400">Our track record of successful investigations</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {diligenceStats.map((stat, index) => (
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
                    <h3 className="text-2xl font-bold text-white">Structured Due Diligence Process</h3>
                    <p className="text-gray-400">Our methodical approach to comprehensive investigations</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {diligenceProcess.map((phase, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {phase.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{phase.phase}</h4>
                        <p className="text-gray-300 text-sm mb-3">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.activities.map((activity, idx) => (
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

          {/* Risk Categories */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Risk Identification</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Systematic identification and categorization of potential risks and exposures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskCategories.map((risk, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {risk.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {risk.category}
                  </h4>
                  <div className="space-y-2">
                    {risk.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Due Diligence Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Due Diligence <span className="text-primary">Framework</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  component: 'Document Review',
                  description: 'Comprehensive examination of all relevant documents and records',
                  features: ['Contract analysis', 'Financial review', 'Regulatory documents', 'Corporate records'],
                  icon: <FileText className="w-8 h-8" />,
                  color: 'from-blue-500/20 to-blue-600/10'
                },
                {
                  component: 'Verification Process',
                  description: 'Systematic validation of information and representations',
                  features: ['Fact verification', 'Third-party validation', 'Site inspections', 'Reference checks'],
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  component: 'Risk Assessment',
                  description: 'Evaluation and categorization of identified risks',
                  features: ['Risk quantification', 'Impact analysis', 'Probability assessment', 'Mitigation planning'],
                  icon: <Shield className="w-8 h-8" />,
                  color: 'from-green-500/20 to-green-600/10'
                },
                {
                  component: 'Reporting Structure',
                  description: 'Clear presentation of findings and recommendations',
                  features: ['Executive summary', 'Detailed findings', 'Risk matrix', 'Action recommendations'],
                  icon: <ClipboardCheck className="w-8 h-8" />,
                  color: 'from-purple-500/20 to-purple-600/10'
                }
              ].map((component, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${component.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <div className="text-primary mb-4">
                    {component.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-3">{component.component}</div>
                  <p className="text-gray-400 text-sm mb-4">{component.description}</p>
                  <div className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Tools */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Technology-Enhanced Diligence</h3>
                  <p className="text-gray-300 mb-6">
                    We leverage advanced technology and specialized tools to enhance the 
                    efficiency, accuracy, and depth of our due diligence investigations.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Search className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Advanced Document Analysis</div>
                        <div className="text-sm text-gray-400">AI-powered document review and analysis</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Database className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Data Analytics</div>
                        <div className="text-sm text-gray-400">Advanced data analysis and pattern recognition</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Secure Collaboration</div>
                        <div className="text-sm text-gray-400">Encrypted document sharing and collaboration</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Diligence Tools</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { tool: 'Document Management', capability: 'Centralized document repository' },
                      { tool: 'Risk Assessment', capability: 'Automated risk scoring' },
                      { tool: 'Compliance Checking', capability: 'Regulatory database integration' },
                      { tool: 'Reporting Platform', capability: 'Customizable report generation' }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-white/10 rounded-lg">
                        <div className="text-white font-bold mb-1">{item.tool}</div>
                        <div className="text-sm text-gray-400">{item.capability}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Transaction <span className="text-primary">Types Supported</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Mergers & Acquisitions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Target company legal assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Purchase agreement due diligence</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Post-merger integration planning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Investments & Financing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Investment target assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Financing agreement review</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Security and collateral review</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Joint Ventures & Partnerships</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
                    <span>Partner capability assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
                    <span>JV agreement due diligence</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
                    <span>Operational integration review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our Due Diligence</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our legal due diligence practice combines meticulous investigation with strategic 
                  insight to provide the comprehensive understanding needed for confident business 
                  decisions and successful transactions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <ZoomIn className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Thorough Investigation</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Comprehensive examination leaving no stone unturned in risk identification.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Efficient Process</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Streamlined methodology delivering timely insights without compromising quality.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Strategic Insight</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Actionable recommendations that support informed decision-making and risk management.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Risk Protection</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Comprehensive risk identification and mitigation strategies to protect your interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Due Diligence Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Due Diligence Inquiries</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Rapid Assessment</div>
                  <div className="text-white font-medium">72-hour preliminary due diligence report available</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Due Diligence Proposal
                  </a>
                  <a 
                    href="#"
                    className="block w-full py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
                  >
                    Download Due Diligence Checklist
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
                    Make Informed Decisions with Comprehensive Due Diligence
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Uncover risks, validate opportunities, and proceed with confidence in your business transactions
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Due Diligence Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Rapid Assessment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Full Due Diligence</h4>
                <p className="text-gray-400 text-sm mb-4">Comprehensive investigation for major transactions</p>
                <a href="#" className="text-primary hover:text-primary-400 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Rapid Due Diligence</h4>
                <p className="text-gray-400 text-sm mb-4">72-hour preliminary assessment</p>
                <a href="#" className="text-primary hover:text-primary-400 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Focused Due Diligence</h4>
                <p className="text-gray-400 text-sm mb-4">Targeted investigation for specific risk areas</p>
                <a href="#" className="text-primary hover:text-primary-400 text-sm font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalDueDiligence;