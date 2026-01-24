import React from 'react';
import { 
  Briefcase, 
  Scale, 
  Home, 
  Users, 
  Globe, 
  FileText,
  Building,
  FileEdit,
  MessageSquare,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom'; 

const PracticeAreas = () => {
const practiceAreas = [
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Corporate Law',
    description: 'Business formation, mergers & acquisitions, contracts, and corporate governance for companies of all sizes.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Business Formation', 'M&A', 'Contracts', 'Compliance']
  },
  {
    id: 'commercial',
    slug: 'commercial',
    icon: <Building className="w-6 h-6" />,
    title: 'Commercial Law',
    description: 'Legal services for commercial transactions, business operations, and commercial disputes.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Transactions', 'Operations', 'Disputes', 'Regulations']
  },
  {
    id: 'commercial-advisory',
    slug: 'commercialadvisory',
    icon: <Scale className="w-6 h-6" />,
    title: 'Commercial Advisory',
    description: 'Strategic legal advice for business decisions, risk management, and commercial strategy.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Strategic Advice', 'Risk Management', 'Business Decisions', 'Compliance']
  },
  {
    id: 'commercial-documentation',
    slug: 'commercialdocumentation',
    icon: <FileText className="w-6 h-6" />,
    title: 'Commercial Documentation',
    description: 'Drafting and reviewing commercial agreements, contracts, and business documentation.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Agreements', 'Contracts', 'Documentation', 'Reviews']
  },
  {
    id: 'contract-drafting',
    slug: 'contractdrafting',
    icon: <FileEdit className="w-6 h-6" />,
    title: 'Contract Drafting',
    description: 'Professional drafting, review, and negotiation of various types of contracts and agreements.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Drafting', 'Review', 'Negotiation', 'Enforcement']
  },
  {
    id: 'employment',
    slug: 'employment',
    icon: <Users className="w-6 h-6" />,
    title: 'Employment Law',
    description: 'Workplace discrimination, wrongful termination, wage disputes, and employment contracts.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Discrimination', 'Termination', 'Wages', 'Contracts']
  },
  {
    id: 'legal-advisory',
    slug: 'legaladvisory',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Legal Advisory',
    description: 'Comprehensive legal advice and counsel for various personal and business matters.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Legal Counsel', 'Advice', 'Guidance', 'Consultation']
  },
  {
    id: 'legal-due-diligence',
    slug: 'legalDueDiligence',
    icon: <Search className="w-6 h-6" />,
    title: 'Legal Due Diligence',
    description: 'Thorough investigation and assessment of legal risks in transactions and business operations.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Risk Assessment', 'Investigations', 'Compliance', 'Reporting']
  },
  {
    id: 'online-business',
    slug: 'onlinebusiness',
    icon: <Globe className="w-6 h-6" />,
    title: 'Online Business Law',
    description: 'Legal services for e-commerce, digital businesses, online contracts, and internet law.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['E-commerce', 'Digital Contracts', 'Online Compliance', 'Internet Law']
  },
  {
    id: 'property-dispute',
    slug: 'propertydispute',
    icon: <Home className="w-6 h-6" />,
    title: 'Property Dispute Resolution',
    description: 'Resolution of property conflicts, boundary disputes, title issues, and real estate litigation.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Dispute Resolution', 'Boundary Issues', 'Title Disputes', 'Litigation']
  },
  {
    id: 'real-estate',
    slug: 'realestate',
    icon: <Building className="w-6 h-6" />,
    title: 'Real Estate Law',
    description: 'Property transactions, zoning issues, landlord-tenant disputes, and real estate development.',
    gradient: 'from-primary/20 to-primary/10',
    features: ['Transactions', 'Zoning', 'Disputes', 'Development']
  }
];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-secondary-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-primary/10 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Legal Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-primary">Legal Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Specialized legal representation across multiple practice areas with proven results
          </p>
          
          {/* Practice Areas Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-400">Practice Areas</div>
            </div>
            <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-primary">210+</div>
              <div className="text-sm text-gray-400">Cases Yearly</div>
            </div>
            <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-primary">96%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Practice Areas Grid - 3 rows, 2 columns on lg, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {practiceAreas.map((area, index) => (
            <Link 
              key={area.id}
              to={`/practices/${area.slug}`}
              className="group block"
            >
              <div className="h-full relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-brand-lg">
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Title Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                        <div className="text-primary">
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Features and Stats Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/5 text-xs text-gray-400 rounded-full border border-white/10 group-hover:border-primary/20 group-hover:text-primary transition-all"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                      {area.stats}
                    </div>
                  </div>

                  {/* Consultation CTA */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      Click for detailed information
                    </span>
                    <button className="text-sm font-medium text-primary hover:text-primary-600 transition-colors">
                      Free Consultation →
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Consultation Banner */}
        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-gray-400 text-lg">
                  Schedule a free consultation with our legal experts to discuss your specific case
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Call Now: (+234) 813 893 9107
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;