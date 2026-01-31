import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Home, 
  Scale, 
  Users, 
  Target, 
  Shield,
  FileText,
  AlertTriangle,
  Handshake,
  Clock,
  CheckCircle,
  Award,
  ArrowRight,
  ChevronRight,
  PieChart,
  Building,
  MapPin,
  Lock,
  BarChart3,
  Gavel,
  MessageSquare,
  Search,
  Zap,
  DollarSign
} from 'lucide-react';

const RealEstate = () => {
  const realEstateServices = [
    {
      category: 'Land & Property Transactions',
      items: [
        'Land acquisition and due diligence',
        'Property sale and purchase agreements',
        'Title verification and perfection',
        'Certificate of Occupancy processing',
        'Property registration and documentation'
      ],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      category: 'Title & Ownership Matters',
      items: [
        'Ownership verification',
        'Family and inherited property advisory',
        'Title regularization',
        'Rectification of defective titles',
        'Advisory on adverse possession'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Leases & Tenancy',
      items: [
        'Commercial and residential leases',
        'Landlord and tenant advisory',
        'Lease drafting and review',
        'Rent recovery support',
        'Termination and renewal advisory'
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      category: 'Development & Construction',
      items: [
        'Construction contract advisory',
        'Real estate development structuring',
        'Regulatory compliance',
        'Developer–investor agreements',
        'Project risk management'
      ],
      icon: <Building className="w-6 h-6" />
    }
  ];

  const practiceStats = [
    { value: '95%', label: 'Client Satisfaction', description: 'Successful engagements' },
    { value: '500+', label: 'Transactions Handled', description: 'Real estate matters' },
    { value: '30+', label: 'Combined Experience', description: 'Industry expertise' },
    { value: '₦5B+', label: 'Property Value', description: 'Transactions managed' }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        Our Real Estate Law practice provides comprehensive legal support across property
        acquisition, development, leasing, and dispute management, ensuring your real estate
        investments are secure and legally sound.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        We combine deep industry knowledge with practical legal solutions to protect property
        value, manage risk, and support successful real estate transactions.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Building className="w-5 h-5 text-primary" />
          Practice Coverage
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Land Transactions', 'Leases & Tenancy', 'Property Development', 'Title Advisory', 'Real Estate Compliance'].map((item, index) => (
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
        practiceName="Real Estate Law"
        tagline="Protecting Property Value Through Strategic Legal Expertise"
        customContent={customHeroContent}
        contactPerson="Real Estate Law Team"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Land acquisition and title verification",
          "Property sale and lease documentation",
          "Real estate development advisory",
          "Regulatory and compliance support",
          "Risk mitigation and value protection",
          "Property dispute management"
        ]}
        stats={[
          { value: "95%", label: "Satisfaction" },
          { value: "50+", label: "Matters" },
          { value: "6+", label: "Experience" }
        ]}
      />

      {/* Services */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Real Estate Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Real Estate Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                End-to-end legal support across real estate transactions and advisory
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {realEstateServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{service.icon}</div>
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

          {/* Risk Management Focus */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proactive <span className="text-primary">Risk Management</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Protecting your real estate investments through diligent legal oversight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  risk: 'Title Defects',
                  solution: 'Comprehensive title verification and clearance',
                  icon: <FileText className="w-5 h-5" />
                },
                {
                  risk: 'Regulatory Compliance',
                  solution: 'Ensuring adherence to land use and zoning laws',
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  risk: 'Transaction Disputes',
                  solution: 'Clear documentation and dispute resolution clauses',
                  icon: <Scale className="w-5 h-5" />
                },
                {
                  risk: 'Property Valuation',
                  solution: 'Due diligence to verify market value and liens',
                  icon: <BarChart3 className="w-5 h-5" />
                }
              ].map((item, index) => (
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
                Property <span className="text-primary">Sectors</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized real estate legal services across diverse property types
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Residential Properties',
                'Commercial Real Estate',
                'Industrial Sites',
                'Agricultural Land',
                'Mixed-Use Developments',
                'Hospitality Properties',
                'Retail Centers',
                'Office Buildings',
                'Land Banking'
              ].map((sector, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      {index % 5 === 0 && <Home className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <MapPin className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <Shield className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Target className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {sector}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Transaction Excellence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Transaction <span className="text-primary">Excellence</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  element: 'Due Diligence',
                  focus: 'Thorough investigation of property history and status',
                  icon: <Search className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  element: 'Documentation',
                  focus: 'Precise preparation of sale, lease, and transfer documents',
                  icon: <FileText className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
                },
                {
                  element: 'Compliance',
                  focus: 'Ensuring regulatory adherence and proper registrations',
                  icon: <Shield className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
                },
                {
                  element: 'Closing Support',
                  focus: 'Seamless transaction completion and handover',
                  icon: <CheckCircle className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
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

          {/* Technology & Innovation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Real Estate <span className="text-primary">Technology & Innovation</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Property Search Tools</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Advanced title search systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Land registry database access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Transaction Management</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Digital property documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Real-time transaction tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Secure document storage</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Client Portal</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>24/7 case status updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Secure document sharing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Electronic signing capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our Real Estate Practice</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our real estate law practice combines deep property law expertise with practical 
                  transaction experience to deliver comprehensive legal solutions that protect your 
                  investments and facilitate successful property dealings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Local Expertise</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of Nigerian land laws, customs, and local property markets.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Timely Processing</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Efficient handling of documentation and registrations to meet your deadlines.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Risk Protection</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Comprehensive due diligence to identify and mitigate property-related risks.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Client-Centered Approach</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Personalized service with clear communication throughout the entire process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Real Estate Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Property Matters</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Free Property Assessment</div>
                  <div className="text-white font-medium">Submit your property details for a complimentary review</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Secure Your Property Investments with Expert Legal Guidance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Protect your real estate interests with experienced property lawyers
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Real Estate Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Property Review
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

export default RealEstate;
