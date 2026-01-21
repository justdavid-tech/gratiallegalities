import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Building, 
  TrendingUp, 
  Globe, 
  Users, 
  Target,
  Shield,
  FileText,
  DollarSign,
  Home,
  Ship,
  Plane,
  Scale,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const BankingFinance = () => {
  const subpractices = [
    { name: 'Acquisition Finance', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Aircraft Leasing and Financing', icon: <Plane className="w-5 h-5" /> },
    { name: 'Bilateral and Syndicated Lending', icon: <FileText className="w-5 h-5" /> },
    { name: 'Consumer Finance', icon: <Users className="w-5 h-5" /> },
    { name: 'Derivatives', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Islamic Finance', icon: <Scale className="w-5 h-5" /> },
    { name: 'Leveraged Finance', icon: <Building className="w-5 h-5" /> },
    { name: 'Infrastructure and Project Finance', icon: <Target className="w-5 h-5" /> },
    { name: 'Real Estate Finance', icon: <Home className="w-5 h-5" /> },
    { name: 'Securitisations', icon: <Shield className="w-5 h-5" /> },
    { name: 'Shipping/Vessel Financing', icon: <Ship className="w-5 h-5" /> },
    { name: 'Structured Trade Finance', icon: <Globe className="w-5 h-5" /> }
  ];

  const bankingStats = [
    { value: '50+', label: 'Financial Institutions', description: 'Clients served' },
    { value: '$10B+', label: 'Transaction Value', description: 'Deals facilitated' },
    { value: '25+', label: 'Years Experience', description: 'In banking law' },
    { value: '98%', label: 'Success Rate', description: 'Deal completion' }
  ];

  const clientTypes = [
    'Major Nigerian & International Lending Institutions',
    'Multi-lateral Agencies & Developmental Financial Institutions',
    'Banks & Insurance Companies',
    'Leasing & Investment Firms',
    'Private Equity Firms & Conglomerates',
    'Top Multi-national Corporations'
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        Nigeria's dynamic banking and finance sectors operate within an evolving global regulatory landscape. 
        Our legal team stays at the forefront of regulatory developments, helping clients navigate rapid changes, 
        seize emerging opportunities, and achieve strategic objectives.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        We provide expert guidance to financial institutions and multinational corporations on cutting-edge 
        financial transactions across diverse industries. Our comprehensive support extends to daily business 
        operations, ensuring regulatory compliance while maximizing business potential.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Our Clientele
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {clientTypes.slice(0, 4).map((client, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-black">
      <Navbar />
      
      <PracticeHero
        practiceName="Banking & Finance Law"
        tagline="Navigating Nigeria's Dynamic Financial Landscape"
        customContent={customHeroContent}
        contactPerson="Kofo Dosekun, Oludare Senbore, Reginald Udom"
        contactEmail="banking@aluko-oyebode.com"
        keyFeatures={[
          "Regulatory compliance and policy advisory services",
          "Structuring complex financial transactions",
          "Day-to-day operational guidance for financial institutions",
          "Innovative solutions for challenging deals",
          "Cross-border financial transactions and compliance",
          "Risk management and regulatory strategy"
        ]}
        stats={[
          { value: "50+", label: "Institutions" },
          { value: "$10B+", label: "Transactions" },
          { value: "25+", label: "Years" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Subpractices Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Banking <span className="text-primary">Subpractices</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive legal services across all facets of banking and finance
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subpractices.map((practice, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {practice.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {practice.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Expert legal guidance for {practice.name.toLowerCase()} transactions and compliance.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Transaction <span className="text-primary">Excellence</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We represent major financial institutions in some of Nigeria's most dynamic and complex 
                  financial transactions, from sophisticated structured deals to conventional financing arrangements.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Our extensive experience and bespoke legal services enable us to devise creative solutions 
                  and innovative strategies for even the most challenging transactions, ensuring successful 
                  outcomes for our clients.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                  <h4 className="text-lg font-bold text-white mb-3">Transaction Types</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-gray-300 text-sm">Complex Deals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-gray-300 text-sm">Plain Vanilla Transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-gray-300 text-sm">Cross-border Financing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-gray-300 text-sm">Regulatory Approvals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Market Leadership</h3>
                    <p className="text-gray-400">Recognized expertise in banking law</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {bankingStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-gray-300">{stat.label}</div>
                      </div>
                      <div className="text-sm text-gray-400 text-right">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Practice Partners */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Practice <span className="text-primary">Partners</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Connect with our experienced banking and finance partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Kofo Dosekun', role: 'Managing Partner', email: 'kofo.dosekun@aluko-oyebode.com' },
                { name: 'Oludare Senbore', role: 'Practice Partner', email: 'oludare.senbore@aluko-oyebode.com' },
                { name: 'Reginald Udom', role: 'Practice Partner', email: 'reginald.udom@aluko-oyebode.com' }
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <p className="text-gray-400">{partner.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${partner.email}`}
                      className="text-primary hover:text-primary-400 transition-colors text-sm font-medium block truncate"
                    >
                      {partner.email}
                    </a>
                    <button className="w-full mt-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                      Schedule Consultation
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Reach Section */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Global <span className="text-primary">Perspective</span>, Local <span className="text-primary">Expertise</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  While deeply rooted in Nigeria's financial landscape, our banking practice maintains a 
                  global perspective. We help clients navigate international financial regulations while 
                  leveraging local market insights for optimal outcomes.
                </p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-lg font-bold text-primary">Multi-jurisdictional</div>
                    <div className="text-sm text-gray-400">Cross-border expertise</div>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="text-lg font-bold text-primary">Local Insight</div>
                    <div className="text-sm text-gray-400">Deep market knowledge</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">Global</div>
                  <div className="text-sm text-gray-400">Transactions</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Scale className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">Regulatory</div>
                  <div className="text-sm text-gray-400">Compliance</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">Institutional</div>
                  <div className="text-sm text-gray-400">Expertise</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">Strategic</div>
                  <div className="text-sm text-gray-400">Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Explore Our Banking & Finance Expertise
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Contact us to discuss how our banking and finance legal services can support your business objectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:banking@aluko-oyebode.com"
                className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Practice Partners
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Initial Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BankingFinance;