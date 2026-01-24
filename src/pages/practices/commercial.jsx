import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  FileText, 
  Handshake, 
  Scale, 
  ShoppingCart, 
  Truck,
  Package,
  Globe,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  ArrowRight,
  ChevronRight,
  Zap,
  Building,
  BarChart3,
  Wallet,
  Tag,
  Percent,
  Clipboard,
  Lock
} from 'lucide-react';

const Commercial = () => {
  const serviceAreas = [
    {
      category: 'Commercial Contracts',
      items: [
        'Drafting and negotiation of commercial agreements',
        'Supply and distribution agreements',
        'Service level agreements (SLAs)',
        'Franchise and licensing agreements',
        'Agency and representative agreements'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Procurement & Supply Chain',
      items: [
        'Procurement process advisory and documentation',
        'Vendor and supplier agreements',
        'Logistics and transportation contracts',
        'Warehousing and storage agreements',
        'Supply chain risk management'
      ],
      icon: <Truck className="w-6 h-6" />
    },
    {
      category: 'Consumer Protection',
      items: [
        'Compliance with consumer protection regulations',
        'Product liability and safety compliance',
        'Advertising and marketing legal review',
        'Warranty and guarantee agreements',
        'Returns and refunds policy development'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Competition & Antitrust',
      items: [
        'Competition law compliance advisory',
        'Merger control and regulatory approvals',
        'Anti-competitive practice risk assessment',
        'Distribution and pricing strategy review',
        'Competition Authority investigations'
      ],
      icon: <Scale className="w-6 h-6" />
    }
  ];

  const additionalServices = [
    
    {
      category: 'Trade & Distribution',
      items: [
        'Import/export documentation and compliance',
        'Customs and excise regulations',
        'International trade agreements',
        'Distribution network agreements',
        'Trade finance documentation'
      ],
      icon: <Package className="w-5 h-5" />
    },
    {
      category: 'Franchising',
      items: [
        'Franchise system development',
        'Franchise disclosure documents',
        'Territory and exclusivity agreements',
        'Franchisee training and support agreements',
        'Franchise relationship management'
      ],
      icon: <Building className="w-5 h-5" />
    },
    {
      category: 'Advertising & Marketing',
      items: [
        'Advertising campaign legal review',
        'Celebrity endorsement agreements',
        'Social media marketing compliance',
        'Comparative advertising guidelines',
        'Promotional competition rules'
      ],
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const commercialStats = [
    { value: '1,000+', label: 'Contracts Drafted', description: 'Commercial agreements' },
    { value: '200+', label: 'Client Industries', description: 'Sectors served' },
    { value: '98%', label: 'Success Rate', description: 'Contract enforcement' },
    { value: '24h', label: 'Response Time', description: 'Urgent reviews' }
  ];

  const industriesServed = [
    'Retail & Consumer Goods',
    'Manufacturing',
    'Healthcare & Pharmaceuticals',
    'Food & Beverage',
    'Energy & Utilities',
    'Telecommunications',
    'Hospitality & Tourism',
    'Financial Services'
  ];



  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive commercial legal solutions that enable businesses to conduct transactions 
        efficiently, mitigate risks, and capitalize on market opportunities within Nigeria's dynamic commercial landscape.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our commercial law practice combines deep regulatory knowledge with practical business insights 
        to draft, negotiate, and enforce commercial agreements that protect your interests while 
        facilitating profitable business relationships.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Handshake className="w-5 h-5 text-primary" />
          Transaction Excellence
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Contract Drafting', 'Risk Mitigation', 'Regulatory Compliance', 'Dispute Prevention', 'Commercial Strategy'].map((item, index) => (
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
        practiceName="Commercial Law"
        tagline="Navigating Business Transactions with Legal Precision"
        customContent={customHeroContent}
        contactPerson="Commercial Practice Partners"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Drafting and negotiation of complex commercial agreements",
          "Regulatory compliance across multiple industries",
          "Supply chain and procurement legal support",
          "Consumer protection and product liability",
          "Competition law and antitrust advisory",
          "E-commerce and digital transaction compliance"
        ]}
        stats={[
          { value: "74+", label: "Contracts" },
          { value: "37+", label: "Industries" },
          { value: "95%", label: "Success Rate" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Core Service Areas */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Core <span className="text-primary">Commercial Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive legal support for all aspects of commercial transactions and business operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceAreas.map((service, index) => (
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

          {/* Additional Services */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Specialized <span className="text-primary">Commercial Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Targeted legal support for specific commercial sectors and transaction types
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                  </div>
                  
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
                Sector-specific commercial legal support across diverse industries
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
                      {index % 5 === 0 && <ShoppingCart className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <Zap className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <Shield className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Wallet className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {industry}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contract Lifecycle Management */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              End-to-End <span className="text-primary">Contract Management</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stage: 'Drafting & Strategy',
                  desc: 'Creating tailored agreements aligned with business objectives',
                  icon: <FileText className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Negotiation',
                  desc: 'Strategic negotiation to secure favorable terms and conditions',
                  icon: <Handshake className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Execution',
                  desc: 'Proper execution and implementation of finalized agreements',
                  icon: <Clipboard className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Management & Renewal',
                  desc: 'Ongoing contract administration and renewal optimization',
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <div className="text-primary mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.stage}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our <span className="text-primary">Commercial Advantage</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our commercial law practice combines legal excellence with practical business understanding. 
                  We don't just draft contracts, we create commercial frameworks that facilitate growth, 
                  manage risk, and build sustainable business relationships.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Industry Specialists</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Lawyers with specific industry experience who understand your business context and challenges.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Rapid Turnaround</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Efficient contract review and drafting to keep pace with your business needs and opportunities.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Risk Mitigation</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Proactive identification and management of commercial risks before they become liabilities.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Global Standards</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      International best practices adapted to Nigeria's regulatory environment and business culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contract Review Service</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Quick Assessment</div>
                  <div className="text-white font-medium">Submit any commercial agreement for a free 30-minute risk assessment</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Key risk identification</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Negotiation strategy advice</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Regulatory compliance check</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Submit Contract for Review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Compliance Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Regulatory <span className="text-primary">Compliance Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Consumer Protection</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Federal Competition & Consumer Protection Act</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Product labeling and safety standards</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Advertising standards compliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Competition Law</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Merger control regulations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Anti-competitive agreements review</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Market dominance regulations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Industry Specific</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>NAFDAC regulations (food & drugs)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>SON standards (manufacturing)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>NCC regulations (telecoms)</span>
                  </li>
                </ul>
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
                    Secure Your Commercial Transactions with Expert Legal Guidance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Transform business agreements into strategic assets with our commercial law expertise
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Commercial Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Contract Review
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

export default Commercial;