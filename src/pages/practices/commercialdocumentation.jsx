import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  FileText, 
  ClipboardCheck, 
  Edit, 
  Shield, 
  Layers,
  Clock,
  Search,
  CheckCircle,
  Zap,
  Users,
  Globe,
  Award,
  ArrowRight,
  ChevronRight,
  PieChart,
  Building,
  Truck,
  Package,
  FileSearch,
  FileCheck,
  FilePlus,
  FileMinus,
  Lock,
  BarChart3
} from 'lucide-react';

const CommercialDocumentation = () => {
  const documentationServices = [
    {
      category: 'Contract Drafting & Review',
      items: [
        'Comprehensive commercial agreement drafting',
        'Contract review and risk assessment',
        'Standard form agreements development',
        'Ancillary document preparation',
        'Contract amendment and variation drafting'
      ],
      icon: <Edit className="w-6 h-6" />
    },
    {
      category: 'Compliance Documentation',
      items: [
        'Regulatory compliance documentation packages',
        'Policy and procedure manuals',
        'Compliance certification documents',
        'Reporting templates and frameworks',
        'Audit and inspection documentation'
      ],
      icon: <ClipboardCheck className="w-6 h-6" />
    },
    {
      category: 'Transaction Documentation',
      items: [
        'M&A documentation suites',
        'Joint venture and partnership agreements',
        'Shareholder and investment agreements',
        'Asset purchase documentation',
        'Closing sets and completion documents'
      ],
      icon: <Layers className="w-6 h-6" />
    },
    {
      category: 'Operational Documentation',
      items: [
        'Internal governance documents',
        'Employee handbooks and policies',
        'Operational procedure manuals',
        'Quality management documentation',
        'Health and safety documentation'
      ],
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const documentTypes = [
    {
      type: 'Commercial Agreements',
      examples: ['Supply Agreements', 'Distribution Agreements', 'Service Contracts', 'Licensing Agreements', 'Franchise Agreements'],
      icon: <FileText className="w-5 h-5" />
    },
    {
      type: 'Corporate Documents',
      examples: ['Shareholder Agreements', 'Board Resolutions', 'Company Policies', 'Meeting Minutes', 'Compliance Certificates'],
      icon: <Building className="w-5 h-5" />
    },
    {
      type: 'Transaction Documents',
      examples: ['Due Diligence Reports', 'Term Sheets', 'Share Purchase Agreements', 'Disclosure Letters', 'Completion Documents'],
      icon: <FileSearch className="w-5 h-5" />
    },
    {
      type: 'Regulatory Documents',
      examples: ['Compliance Manuals', 'Regulatory Filings', 'Licensing Applications', 'Annual Returns', 'Statutory Reports'],
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const documentationStats = [
    { value: '10,000+', label: 'Documents Drafted', description: 'Commercial agreements and documents' },
    { value: '99.9%', label: 'Accuracy Rate', description: 'Error-free documentation' },
    { value: '48h', label: 'Standard Turnaround', description: 'Document preparation time' },
    { value: '200+', label: 'Template Library', description: 'Pre-approved document templates' }
  ];

  const industriesServed = [
    'Financial Services',
    'Technology & SaaS',
    'Manufacturing',
    'Healthcare',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Telecommunications',
    'Real Estate',
    'Transportation',
    'Hospitality'
  ];

  const qualityAssurance = [
    {
      step: 'Initial Draft',
      process: 'Template-based drafting with custom tailoring',
      checks: ['Legal compliance', 'Commercial terms', 'Risk allocation'],
      icon: <FilePlus className="w-6 h-6" />
    },
    {
      step: 'Quality Review',
      process: 'Multi-layer review by senior practitioners',
      checks: ['Consistency check', 'Regulatory alignment', 'Commercial logic'],
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      step: 'Finalization',
      process: 'Client review and final adjustments',
      checks: ['Client feedback integration', 'Final formatting', 'Execution readiness'],
      icon: <FileCheck className="w-6 h-6" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide precise, comprehensive, and legally sound commercial documentation services that 
        ensure your business agreements are clear, enforceable, and aligned with your strategic objectives.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our documentation specialists combine legal expertise with meticulous attention to detail to 
        deliver documents that protect your interests while facilitating smooth business operations 
        and transactions.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Documentation Excellence
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Precision Drafting', 'Risk Mitigation', 'Regulatory Compliance', 'Commercial Clarity', 'Timely Delivery'].map((item, index) => (
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
        practiceName="Commercial Documentation"
        tagline="Precision Documentation for Business Certainty"
        customContent={customHeroContent}
        contactPerson="Documentation Practice Partners"
        contactEmail="documentation@aluko-oyebode.com"
        keyFeatures={[
          "Comprehensive commercial agreement drafting and review",
          "Regulatory compliance documentation packages",
          "Transaction documentation suites",
          "Operational and governance documentation",
          "Document template development and management",
          "Multi-jurisdictional documentation support"
        ]}
        stats={[
          { value: "10,000+", label: "Documents" },
          { value: "99.9%", label: "Accuracy" },
          { value: "48h", label: "Turnaround" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Documentation Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Documentation Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                End-to-end documentation solutions for all commercial and operational needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {documentationServices.map((service, index) => (
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

          {/* Document Types */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Document <span className="text-primary">Types & Categories</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized documentation across multiple business domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documentTypes.map((docType, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {docType.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {docType.type}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {docType.examples.map((example, idx) => (
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

          {/* Stats & Quality Assurance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Documentation Excellence</h3>
                    <p className="text-gray-400">Our commitment to quality and efficiency</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {documentationStats.map((stat, index) => (
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
                    <h3 className="text-2xl font-bold text-white">Quality Assurance Process</h3>
                    <p className="text-gray-400">Multi-stage review for document perfection</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {qualityAssurance.map((step, index) => (
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
                        <p className="text-gray-300 text-sm mb-3">{step.process}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.checks.map((check, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-xs text-gray-400 rounded">
                              {check}
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

          {/* Industries Served */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Documentation Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Sector-specific documentation knowledge and experience
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
                      {index % 5 === 0 && <FileText className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <Zap className="w-6 h-6 text-primary" />}
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

          {/* Documentation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our <span className="text-primary">Documentation Process</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 'Requirement Analysis',
                  description: 'Understanding your documentation needs and objectives',
                  icon: <Search className="w-8 h-8" />,
                  color: 'from-blue-500/20 to-blue-600/10'
                },
                {
                  step: 'Document Drafting',
                  description: 'Precision drafting using approved templates and best practices',
                  icon: <Edit className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  step: 'Quality Review',
                  description: 'Multi-layer review for accuracy, compliance, and clarity',
                  icon: <FileSearch className="w-8 h-8" />,
                  color: 'from-green-500/20 to-green-600/10'
                },
                {
                  step: 'Delivery & Support',
                  description: 'Timely delivery with implementation guidance and support',
                  icon: <FileCheck className="w-8 h-8" />,
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
                  <div className="text-lg font-bold text-white mb-3">{item.step}</div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Template Management */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Template Management System</h3>
                  <p className="text-gray-300 mb-6">
                    Our extensive library of pre-approved document templates ensures consistency, 
                    efficiency, and compliance across all your documentation needs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">200+ Templates</div>
                        <div className="text-sm text-gray-400">Pre-approved document templates</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Regular Updates</div>
                        <div className="text-sm text-gray-400">Templates updated for regulatory changes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Secure Access</div>
                        <div className="text-sm text-gray-400">Protected client portal access</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Template Categories</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { category: 'Commercial', count: '75+' },
                      { category: 'Corporate', count: '45+' },
                      { category: 'Employment', count: '35+' },
                      { category: 'Compliance', count: '55+' }
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

          {/* Technology & Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Documentation <span className="text-primary">Technology & Tools</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Document Automation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>Automated document assembly</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt=2"></div>
                    <span>Clause library management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt=2"></div>
                    <span>Version control systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Quality Control Tools</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Automated consistency checks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Compliance verification tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt=2"></div>
                    <span>Error detection systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-3">Client Collaboration</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
                    <span>Secure document portals</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
                    <span>Real-time collaboration tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt=2"></div>
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
                Why <span className="text-primary">Our Documentation</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our commercial documentation practice combines legal precision with business practicality 
                  to create documents that not only protect your interests but also facilitate smooth 
                  business operations and transactions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Legal Precision</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Every document is meticulously crafted to ensure legal enforceability and compliance.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Timely Delivery</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Efficient processes ensure documents are delivered within agreed timelines.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Risk Mitigation</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Proactive identification and management of documentation-related risks.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Global Standards</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      International best practices adapted to Nigeria's legal and business environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Documentation Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Documentation Requests</div>
                  <a 
                    href="mailto:documentation@aluko-oyebode.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    documentation@aluko-oyebode.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Quick Document Review</div>
                  <div className="text-white font-medium">Submit any document for a free 30-minute compliance check</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Document Drafting
                  </a>
                  <a 
                    href="#"
                    className="block w-full py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors text-center"
                  >
                    Access Template Library
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
                    Achieve Documentation Excellence with Precision and Confidence
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Ensure your commercial documents are legally sound, commercially practical, and professionally prepared
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:documentation@aluko-oyebode.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Request Documentation Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Document Review
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

export default CommercialDocumentation;