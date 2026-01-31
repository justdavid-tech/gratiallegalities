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

const PropertyDispute = () => {
  const disputeServices = [
    {
      category: 'Land Boundary Disputes',
      items: [
        'Boundary demarcation and surveying disputes',
        'Encroachment and trespass resolution',
        'Adjoining property conflicts',
        'Right of way and easement disputes',
        'Survey plan discrepancies'
      ],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      category: 'Title & Ownership Disputes',
      items: [
        'Multiple ownership claims resolution',
        'Certificate of occupancy conflicts',
        'Family land inheritance disputes',
        'Title document forgery cases',
        'Adverse possession claims'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Lease & Tenancy Disputes',
      items: [
        'Landlord-tenant conflicts and evictions',
        'Rent arrears and lease violation cases',
        'Commercial lease agreement disputes',
        'Service charge disagreements',
        'Lease renewal and termination conflicts'
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      category: 'Development & Construction Disputes',
      items: [
        'Construction contract disagreements',
        'Building regulation violations',
        'Developer-purchaser conflicts',
        'Quality and defect disputes',
        'Planning permission conflicts'
      ],
      icon: <Building className="w-6 h-6" />
    }
  ];

  const resolutionMethods = [
    {
      method: 'Mediation & Negotiation',
      description: 'Facilitated settlement discussions for amicable resolution',
      benefits: ['Cost-effective', 'Confidential', 'Preserves relationships', 'Quick resolution'],
      icon: <Handshake className="w-5 h-5" />
    },
    {
      method: 'Arbitration',
      description: 'Binding dispute resolution through independent arbitrators',
      benefits: ['Expert determination', 'Final and binding', 'Flexible process', 'Private proceedings'],
      icon: <Scale className="w-5 h-5" />
    },
    {
      method: 'Litigation',
      description: 'Court proceedings for complex or unresolved disputes',
      benefits: ['Judicial enforcement', 'Legal precedent', 'Comprehensive discovery', 'Appeal options'],
      icon: <Gavel className="w-5 h-5" />
    },
    {
      method: 'Alternative Dispute Resolution',
      description: 'Structured settlement conferences and expert determination',
      benefits: ['Specialized expertise', 'Creative solutions', 'Non-adversarial', 'Future-focused'],
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];


  const propertyTypes = [
    'Residential Properties',
    'Commercial Real Estate',
    'Industrial Properties',
    'Agricultural Land',
    'Vacant Land & Plots',
    'Government Acquired Land',
    'Family Compound Disputes',
    'Estate Properties',
    'Strata Title Properties',
    'Mortgaged Properties'
  ];

  const commonDisputes = [
    {
      dispute: 'Boundary Conflicts',
      causes: ['Unclear survey plans', 'Missing beacons', 'Historical errors', 'Neighbor disputes'],
      icon: <MapPin className="w-5 h-5" />
    },
    {
      dispute: 'Title Disputes',
      causes: ['Multiple C of O', 'Forged documents', 'Inheritance conflicts', 'Registration errors'],
      icon: <FileText className="w-5 h-5" />
    },
    {
      dispute: 'Lease Disagreements',
      causes: ['Rent defaults', 'Property damage', 'Lease violations', 'Early termination'],
      icon: <Home className="w-5 h-5" />
    },
    {
      dispute: 'Construction Issues',
      causes: ['Contract breaches', 'Quality defects', 'Regulatory violations', 'Payment disputes'],
      icon: <Building className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide expert property dispute resolution services that protect your real estate 
        interests while seeking efficient, cost-effective solutions to property conflicts 
        through negotiation, mediation, and when necessary, litigation.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our property dispute resolution specialists combine deep real estate knowledge with 
        sophisticated conflict resolution skills to achieve favorable outcomes while 
        minimizing disruption and preserving property value.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-black">
      <Navbar />
      
      <PracticeHero
        practiceName="Property Dispute Resolution"
        tagline="Protecting Property Rights Through Effective Conflict Resolution"
        customContent={customHeroContent}
        contactPerson="Property Dispute Resolution Specialists"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Land boundary and surveying dispute resolution",
          "Title and ownership conflict management",
          "Lease and tenancy dispute settlement",
          "Construction and development conflict resolution",
          "Alternative dispute resolution methods",
          "Court representation for property litigation"
        ]}
        stats={[
          { value: "95%", label: "Success Rate" },
          { value: "50+", label: "Cases" },
          { value: "30 days", label: "Timeline" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dispute Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Dispute Resolution Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expert resolution of all types of property conflicts and real estate disputes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {disputeServices.map((service, index) => (
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

          {/* Resolution Methods */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Dispute <span className="text-primary">Resolution Methods</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored approaches for effective property conflict resolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resolutionMethods.map((method, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {method.method}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  
                  <div className="space-y-2">
                    {method.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Common Disputes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Common Property Disputes</h3>
                    <p className="text-gray-400">Frequent property conflicts and their causes</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {commonDisputes.map((dispute, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-primary">
                          {dispute.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{dispute.dispute}</h4>
                        <div className="flex flex-wrap gap-2">
                          {dispute.causes.map((cause, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-xs text-gray-400 rounded">
                              {cause}
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

          {/* Property Types */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Property <span className="text-primary">Types Covered</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Expertise across all types of real estate and property disputes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {propertyTypes.map((type, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      {index % 5 === 0 && <Home className="w-6 h-6 text-primary" />}
                      {index % 5 === 1 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <MapPin className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Home className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {type}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resolution Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Dispute <span className="text-primary">Resolution Process</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 'Case Assessment',
                  description: 'Comprehensive evaluation of dispute merits and options',
                  activities: ['Document review', 'Legal analysis', 'Strategy development', 'Cost estimation'],
                  icon: <Search className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
                },
                {
                  step: 'Strategy Development',
                  description: 'Customized resolution plan based on dispute specifics',
                  activities: ['Method selection', 'Timeline planning', 'Resource allocation', 'Goal setting'],
                  icon: <Target className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  step: 'Resolution Implementation',
                  description: 'Execution of chosen dispute resolution method',
                  activities: ['Negotiation sessions', 'Mediation meetings', 'Court proceedings', 'Settlement talks'],
                  icon: <Scale className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
                },
                {
                  step: 'Outcome Finalization',
                  description: 'Documentation and enforcement of resolution outcome',
                  activities: ['Agreement drafting', 'Court order enforcement', 'Compliance monitoring', 'Future prevention'],
                  icon: <FileText className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary/10'
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${step.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300`}
                >
                  <div className="text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-3">{step.step}</div>
                  <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-gray-300 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Framework & Expertise */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Legal Framework & Expertise</h3>
                  <p className="text-gray-300 mb-6">
                    Our deep understanding of Nigerian property law and dispute resolution 
                    mechanisms ensures comprehensive protection of your property rights 
                    through established legal frameworks and innovative resolution strategies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Scale className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Property Law Expertise</div>
                        <div className="text-sm text-gray-400">Deep knowledge of land use and property regulations</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Rights Protection</div>
                        <div className="text-sm text-gray-400">Comprehensive protection of property ownership rights</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Efficient Resolution</div>
                        <div className="text-sm text-gray-400">Streamlined processes for timely dispute resolution</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Key Legal Instruments</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { instrument: 'Land Use Act', focus: 'Land ownership and use regulations' },
                      { instrument: 'Property Law', focus: 'Ownership rights and transfers' },
                      { instrument: 'Tenancy Law', focus: 'Landlord-tenant relationships' },
                      { instrument: 'Survey Laws', focus: 'Boundary demarcation and plans' }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-white/10 rounded-lg">
                        <div className="text-white font-bold mb-1">{item.instrument}</div>
                        <div className="text-sm text-gray-400">{item.focus}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our Property Dispute Resolution</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our property dispute resolution practice combines deep real estate expertise 
                  with sophisticated conflict resolution skills to achieve favorable outcomes 
                  while minimizing costs, preserving relationships, and protecting property values.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Strategic Approach</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Customized resolution strategies based on specific dispute characteristics and client objectives.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Timely Resolution</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Efficient processes that resolve disputes promptly to minimize disruption and uncertainty.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Value Protection</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Focus on preserving and enhancing property value throughout the resolution process.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Relationship Management</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Skillful handling of sensitive disputes to preserve important business and neighbor relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Dispute Resolution Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Property Disputes</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Emergency Disputes</div>
                  <div className="text-white font-medium">24/7 support for urgent property conflict situations</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Case Assessment
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
                    Resolve Property Conflicts with Expert Guidance
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Protect your property rights and achieve favorable outcomes through effective dispute resolution
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Dispute Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Case Review
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

export default PropertyDispute;