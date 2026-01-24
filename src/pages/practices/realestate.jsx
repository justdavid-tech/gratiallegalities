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
    { value: '30+ yrs', label: 'Combined Experience', description: 'Industry expertise' },
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
          { value: "500+", label: "Matters" },
          { value: "30+ yrs", label: "Experience" }
        ]}
      />

      {/* Services */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-1">
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

          {/* CTA */}
          <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Trusted Legal Support for Real Estate Matters
                </h3>
                <p className="text-gray-300 text-lg">
                  Secure your property investments with experienced real estate lawyers
                </p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="mailto:gratialegals@gmail.com"
                  className="px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 flex items-center gap-2"
                >
                  Contact Real Estate Team
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/contact"
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20"
                >
                  Schedule Consultation
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

export default RealEstate;
