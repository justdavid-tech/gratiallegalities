import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  FileText, 
  Edit, 
  Search, 
  CheckCircle, 
  Shield,
  Clock,
  Layers,
  Zap,
  Users,
  Target,
  Award,
  ArrowRight,
  ChevronRight,
  FileCheck,
  FilePlus,
  FileMinus,
  FileSearch,
  PenTool,
  Lock,
  Scale,
  BarChart3,
  ClipboardList,
  Building,
  Globe,
  Truck
} from 'lucide-react';

const ContractDrafting = () => {
  const draftingServices = [
    {
      category: 'Commercial Contracts',
      items: [
        'Supply and distribution agreements',
        'Service level agreements (SLAs)',
        'Licensing and franchise agreements',
        'Joint venture and partnership agreements',
        'Consultancy and professional services contracts'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Corporate Contracts',
      items: [
        'Shareholder and investment agreements',
        'Merger and acquisition documentation',
        'Corporate governance documents',
        'Board resolutions and minutes',
        'Share purchase agreements'
      ],
      icon: <Layers className="w-6 h-6" />
    },
    {
      category: 'Specialized Contracts',
      items: [
        'Technology and software agreements',
        'Construction and engineering contracts',
        'Real estate and property agreements',
        'Employment and contractor agreements',
        'Intellectual property licensing'
      ],
      icon: <PenTool className="w-6 h-6" />
    },
    {
      category: 'Transactional Documents',
      items: [
        'Term sheets and letters of intent',
        'Due diligence questionnaires',
        'Warranty and indemnity agreements',
        'Escrow and security documents',
        'Closing and completion documents'
      ],
      icon: <ClipboardList className="w-6 h-6" />
    }
  ];

  const contractTypes = [
    {
      type: 'Standard Agreements',
      examples: ['NDAs', 'Service Agreements', 'Supply Contracts', 'Distribution Agreements', 'Agency Agreements'],
      icon: <FileText className="w-5 h-5" />
    },
    {
      type: 'Complex Contracts',
      examples: ['Joint Ventures', 'M&A Documents', 'PPP Agreements', 'Franchise Networks', 'Technology Licenses'],
      icon: <Layers className="w-5 h-5" />
    },
    {
      type: 'Industry Specific',
      examples: ['Construction Contracts', 'Healthcare Agreements', 'Energy PPAs', 'Financial Services', 'Real Estate'],
      icon: <Building className="w-5 h-5" />
    },
    {
      type: 'International Contracts',
      examples: ['Cross-border Agreements', 'Offshore Contracts', 'Multi-jurisdictional Deals', 'Trade Agreements', 'Foreign Investment'],
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const draftingStats = [
    { value: '5,000+', label: 'Contracts Drafted', description: 'Across all industries' },
    { value: '99.8%', label: 'Enforceability Rate', description: 'Legally sound contracts' },
    { value: '72h', label: 'Average Turnaround', description: 'Complex contract drafting' },
    { value: '150+', label: 'Contract Templates', description: 'Pre-approved and customizable' }
  ];

  const draftingProcess = [
    {
      step: 'Requirement Analysis',
      description: 'Understanding business objectives and legal requirements',
      activities: ['Stakeholder interviews', 'Risk assessment', 'Scope definition'],
      icon: <Search className="w-6 h-6" />
    },
    {
      step: 'Strategic Drafting',
      description: 'Creating contracts aligned with business strategy',
      activities: ['Template selection', 'Custom clause drafting', 'Risk allocation'],
      icon: <Edit className="w-6 h-6" />
    },
    {
      step: 'Quality Assurance',
      description: 'Multi-layer review for legal and commercial soundness',
      activities: ['Legal compliance check', 'Commercial review', 'Consistency verification'],
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      step: 'Client Finalization',
      description: 'Client review and final adjustments',
      activities: ['Client feedback integration', 'Final revisions', 'Execution preparation'],
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const riskManagement = [
    {
      risk: 'Ambiguity Risks',
      solution: 'Clear, precise language with defined terms',
      icon: <FileSearch className="w-5 h-5" />
    },
    {
      risk: 'Compliance Gaps',
      solution: 'Regulatory alignment and compliance clauses',
      icon: <Shield className="w-5 h-5" />
    },
    {
      risk: 'Enforceability Issues',
      solution: 'Jurisdiction and dispute resolution provisions',
      icon: <Scale className="w-5 h-5" />
    },
    {
      risk: 'Commercial Imbalances',
      solution: 'Balanced terms protecting all parties interests',
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const industriesServed = [
    'Technology & Startups',
    'Financial Services',
    'Manufacturing',
    'Healthcare & Pharmaceuticals',
    'Real Estate & Construction',
    'Energy & Utilities',
    'Telecommunications',
    'Retail & E-commerce',
    'Transportation & Logistics',
    'Media & Entertainment'
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide expert contract drafting services that transform business agreements into 
        precise, enforceable legal instruments that protect your interests while facilitating 
        successful commercial relationships.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our contract drafting specialists combine legal expertise with commercial insight to 
        create contracts that are not only legally sound but also strategically aligned with 
        your business objectives and operational realities.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Edit className="w-5 h-5 text-primary" />
          Drafting Excellence
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Precision Language', 'Risk Mitigation', 'Commercial Alignment', 'Regulatory Compliance', 'Timely Delivery'].map((item, index) => (
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
        practiceName="Contract Drafting"
        tagline="Precision Drafting for Enforceable Agreements"
        customContent={customHeroContent}
        contactPerson="Contract Drafting Specialists"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Commercial and corporate contract drafting",
          "Specialized industry-specific agreements",
          "International and cross-border contracts",
          "Transaction and closing documentation"
        ]}
        stats={[
          { value: "5,000+", label: "Contracts" },
          { value: "99.8%", label: "Enforceability" },
          { value: "72h", label: "Turnaround" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Drafting Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Contract Drafting Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expert drafting solutions for all types of commercial and legal agreements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {draftingServices.map((service, index) => (
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

          {/* Contract Types */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Contract <span className="text-primary">Types & Specializations</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expertise across diverse contract categories and complexities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contractTypes.map((contract, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {contract.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {contract.type}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {contract.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Drafting Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Drafting Excellence</h3>
                    <p className="text-gray-400">Our commitment to quality and precision</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {draftingStats.map((stat, index) => (
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
                    <h3 className="text-2xl font-bold text-white">Structured Drafting Process</h3>
                    <p className="text-gray-400">Our methodical approach to contract creation</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {draftingProcess.map((step, index) => (
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

          {/* Risk Management Focus */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proactive <span className="text-primary">Risk Management</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Addressing common contract risks through precise drafting
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskManagement.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {item.risk}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Sector-specific contract drafting knowledge and experience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industriesServed.map((industry, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      {index % 5 === 0 && <Zap className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <FileText className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <Shield className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Truck className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {industry}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Elements Excellence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Contract <span className="text-primary">Elements Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  element: 'Definitions & Interpretation',
                  focus: 'Clear, precise language eliminating ambiguity',
                  icon: <FileSearch className="w-8 h-8" />,
                  color: 'from-blue-500/20 to-blue-600/10'
                },
                {
                  element: 'Obligations & Deliverables',
                  focus: 'Specific, measurable performance requirements',
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  element: 'Risk Allocation',
                  focus: 'Balanced liability, indemnity, and insurance provisions',
                  icon: <Shield className="w-8 h-8" />,
                  color: 'from-green-500/20 to-green-600/10'
                },
                {
                  element: 'Dispute Resolution',
                  focus: 'Effective jurisdiction, governing law, and arbitration clauses',
                  icon: <Scale className="w-8 h-8" />,
                  color: 'from-purple-500/20 to-purple-600/10'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <div className="text-primary mb-4">
                    {item.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-3">{item.element}</div>
                  <p className="text-gray-400 text-sm">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Template Library & Customization */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Template Library & Customization</h3>
                  <p className="text-gray-300 mb-6">
                    Our extensive library of pre-approved contract templates provides a strong foundation, 
                    which we then customize to meet your specific business needs and risk profile.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">150+ Templates</div>
                        <div className="text-sm text-gray-400">Pre-approved contract templates</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Edit className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Full Customization</div>
                        <div className="text-sm text-gray-400">Tailored to your specific requirements</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Secure Repository</div>
                        <div className="text-sm text-gray-400">Protected client-specific template storage</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Template Categories</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { category: 'Commercial', count: '65+' },
                      { category: 'Corporate', count: '35+' },
                      { category: 'Employment', count: '25+' },
                      { category: 'Specialized', count: '30+' }
                    ].map((cat, index) => (
                      <div key={index} className="p-4 bg-white/10 rounded-lg">
                        <div className="text-white font-bold text-lg mb-1">{cat.count}</div>
                        <div className="text-sm text-gray-400">{cat.category} Templates</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology & Innovation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Drafting <span className="text-primary">Technology & Innovation</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Drafting Tools</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Advanced document assembly systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Smart clause libraries</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Automated consistency checking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Quality Assurance</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Automated compliance verification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Risk assessment algorithms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Version control and tracking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Collaboration Platform</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Real-time collaborative editing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Secure client portals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>Electronic signature integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our Contract Drafting</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our contract drafting practice combines legal precision with commercial practicality 
                  to create agreements that not only protect your legal interests but also facilitate 
                  successful business relationships and transactions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Strategic Alignment</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Contracts drafted to align with your business objectives and commercial strategy.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Efficient Turnaround</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Streamlined processes ensure timely delivery without compromising quality.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Risk Mitigation</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Proactive identification and management of contractual risks.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Client Collaboration</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Collaborative approach ensuring your input and requirements are fully integrated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contract Drafting Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Drafting Requests</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Quick Draft Assessment</div>
                  <div className="text-white font-medium">Submit any draft for a free 30-minute quality review</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Contract Drafting
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
                    Secure Your Business with Professionally Drafted Contracts
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Ensure your agreements are legally sound, commercially practical, and strategically aligned
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Request Contract Drafting
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Draft Review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Services Menu */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Standard Drafting</h4>
                <p className="text-gray-400 text-sm mb-4">Routine contract drafting services</p>
                <a href="#" className="text-primary hover:text-primary-400 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Complex Contracts</h4>
                <p className="text-gray-400 text-sm mb-4">Specialized and complex agreement drafting</p>
                <a href="#" className="text-primary hover:text-primary-400 text-sm font-medium">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <h4 className="text-lg font-bold text-white mb-3">Template Development</h4>
                <p className="text-gray-400 text-sm mb-4">Custom template creation for your business</p>
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

export default ContractDrafting;