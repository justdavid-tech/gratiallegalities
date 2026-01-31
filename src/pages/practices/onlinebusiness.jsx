import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  ShoppingCart, 
  Globe, 
  Shield, 
  Zap, 
  CreditCard,
  Package,
  Truck,
  Smartphone,
  Database,
  Lock,
  ArrowRight,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  Clock,
  MessageSquare,
  Cloud,
  Cpu
} from 'lucide-react';

const OnlineBusinessEcommerce = () => {
  const ecommerceServices = [
    {
      category: 'E-Commerce Platform Setup',
      items: [
        'Website terms of service and privacy policies',
        'Payment processing and gateway agreements',
        'Platform development and hosting agreements',
        'Domain name registration and protection',
        'Mobile app terms and conditions'
      ],
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      category: 'Digital Payments & Compliance',
      items: [
        'Payment Card Industry (PCI) compliance',
        'Digital payment system agreements',
        'Cryptocurrency and blockchain compliance',
        'Anti-money laundering regulations',
        'Cross-border payment processing'
      ],
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      category: 'Data Protection & Privacy',
      items: [
        'GDPR and data protection compliance',
        'Privacy policy development and implementation',
        'Cookie consent and tracking compliance',
        'Data breach response planning',
        'International data transfer agreements'
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: 'Digital Marketing Compliance',
      items: [
        'Advertising standards and regulations',
        'Email marketing compliance (CAN-SPAM, CASL)',
        'Social media marketing agreements',
        'Influencer and affiliate marketing contracts',
        'Consumer protection in digital advertising'
      ],
      icon: <MessageSquare className="w-6 h-6" />
    }
  ];

  const specializedAreas = [
    {
      area: 'Marketplace Operations',
      services: [
        'Marketplace terms for buyers and sellers',
        'Dispute resolution mechanisms',
        'Commission and fee structures',
        'Seller onboarding agreements',
        'Marketplace liability protection'
      ],
      icon: <Globe className="w-5 h-5" />
    },
    {
      area: 'Logistics & Fulfillment',
      services: [
        'Shipping and delivery agreements',
        'Warehousing and storage contracts',
        'Last-mile delivery partnerships',
        'Returns and refunds policies',
        'Cross-border logistics compliance'
      ],
      icon: <Truck className="w-5 h-5" />
    },
    {
      area: 'Mobile Commerce',
      services: [
        'Mobile app development agreements',
        'App store compliance (Apple, Google)',
        'In-app purchase regulations',
        'Push notification compliance',
        'Mobile payment integration'
      ],
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      area: 'Subscription Services',
      services: [
        'Subscription agreement drafting',
        'Recurring billing compliance',
        'Free trial and cancellation policies',
        'Membership program terms',
        'Auto-renewal regulations'
      ],
      icon: <Package className="w-5 h-5" />
    }
  ];

  const ecommerceStats = [
    { value: '29+', label: 'E-Commerce Clients', description: 'Online businesses supported' },
    { value: '99%', label: 'Compliance Rate', description: 'Regulatory compliance success' },
    { value: '48h', label: 'Rapid Setup', description: 'Basic legal framework setup' },
    { value: '24/7', label: 'Digital Support', description: 'Online legal support available' }
  ];

  const complianceAreas = [
    {
      regulation: 'Consumer Protection',
      focus: 'Online consumer rights, refunds, and dispute resolution',
      icon: <Shield className="w-5 h-5" />
    },
    {
      regulation: 'Data Privacy',
      focus: 'GDPR, NDPR, and international data protection standards',
      icon: <Lock className="w-5 h-5" />
    },
    {
      regulation: 'Payment Security',
      focus: 'PCI DSS compliance and secure payment processing',
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      regulation: 'Digital Advertising',
      focus: 'Advertising standards and online marketing regulations',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive legal solutions for online businesses and e-commerce platforms, 
        helping digital entrepreneurs and established companies navigate the complex legal 
        landscape of the digital economy.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our specialized e-commerce legal team combines digital expertise with regulatory knowledge 
        to create robust legal frameworks that protect your online business while facilitating growth 
        and innovation.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          Digital Business Protection
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Platform Compliance', 'Data Security', 'Payment Processing', 'Consumer Protection', 'Digital Contracts'].map((item, index) => (
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
        practiceName="Online Business & E-Commerce Law"
        tagline="Legal Solutions for the Digital Economy"
        customContent={customHeroContent}
        contactPerson="Digital Business Legal Specialists"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "E-commerce platform legal setup and compliance",
          "Digital payment system regulations and security",
          "Data protection and privacy law compliance",
          "Online consumer protection and dispute resolution",
          "Digital marketing and advertising regulations",
          "Cross-border e-commerce legal frameworks"
        ]}
        stats={[
          { value: "29+", label: "Clients" },
          { value: "99%", label: "Compliance" },
          { value: "48h", label: "Rapid Setup" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* E-Commerce Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">E-Commerce Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Complete legal solutions for online businesses and digital platforms
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ecommerceServices.map((service, index) => (
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

          {/* E-Commerce Lifecycle */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              E-Commerce <span className="text-primary">Business Lifecycle</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stage: 'Platform Setup',
                  services: ['Website legal framework', 'Domain registration', 'Hosting agreements', 'Payment integration'],
                  icon: <Cloud className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Operations & Sales',
                  services: ['Order processing', 'Customer agreements', 'Payment processing', 'Inventory management'],
                  icon: <ShoppingCart className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Fulfillment & Delivery',
                  services: ['Shipping agreements', 'Warehouse contracts', 'Delivery partnerships', 'Returns management'],
                  icon: <Truck className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Growth & Scaling',
                  services: ['Market expansion', 'New market compliance', 'Partnership agreements', 'International sales'],
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
                  <div className="text-lg font-bold text-white mb-4">{item.stage}</div>
                  <div className="space-y-2">
                    {item.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-gray-300 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our E-Commerce Practice</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our online business and e-commerce legal practice combines digital expertise 
                  with practical business understanding to provide solutions that not only ensure 
                  legal compliance but also support growth, innovation, and customer trust in 
                  the digital marketplace.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Digital Expertise</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of digital technologies and online business models.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Rapid Implementation</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Quick legal framework setup to match the speed of digital business.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Global Perspective</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      International compliance knowledge for cross-border e-commerce.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Customer Trust Focus</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Legal frameworks that build customer confidence and loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">E-Commerce Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Online Business Inquiries</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Quick Setup Assessment</div>
                  <div className="text-white font-medium">Free 30-minute e-commerce compliance review</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request E-Commerce Audit
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
                    Build a Legally Secure Online Business
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Ensure your e-commerce platform is compliant, secure, and ready for growth
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact E-Commerce Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Platform Audit
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

export default OnlineBusinessEcommerce;