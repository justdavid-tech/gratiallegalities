import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PracticeHero from '../../components/practicehero';
import { 
  Users, 
  Briefcase, 
  Scale, 
  Shield, 
  FileText,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  Building,
  DollarSign,
  Heart,
  Target,
  ArrowRight,
  ChevronRight,
  Lock,
  BarChart3,
  ClipboardCheck,
  AlertTriangle,
  Handshake,
  GraduationCap,
  Network,
  Search,
  Globe
} from 'lucide-react';

const Employment = () => {
  const employmentServices = [
    {
      category: 'Employment Contracts & Policies',
      items: [
        'Employment contract drafting and review',
        'Employee handbook development',
        'Company policy creation and implementation',
        'Confidentiality and restrictive covenant agreements',
        'Executive employment packages'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      category: 'Workplace Compliance',
      items: [
        'Labour law compliance audits',
        'Health and safety compliance',
        'Equal opportunity and diversity policies',
        'Wage and hour law compliance',
        'Workplace discrimination prevention'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      category: 'Dispute Resolution',
      items: [
        'Employment tribunal representation',
        'Wrongful dismissal claims',
        'Discrimination and harassment cases',
        'Collective bargaining support',
        'Mediation and settlement negotiations'
      ],
      icon: <Scale className="w-6 h-6" />
    },
    {
      category: 'Workforce Management',
      items: [
        'Workforce restructuring advice',
        'Redundancy and severance planning',
        'Performance management systems',
        'Employee relations strategy',
        'Trade union negotiations'
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const specializedAreas = [
    {
      area: 'Executive Compensation',
      services: [
        'Equity and stock option plans',
        'Bonus and incentive structures',
        'Severance and termination packages',
        'Benefits and perquisites planning'
      ],
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      area: 'Workplace Investigations',
      services: [
        'Harassment and discrimination investigations',
        'Misconduct and disciplinary inquiries',
        'Whistleblower complaint handling',
        'Internal audit support'
      ],
      icon: <Search className="w-5 h-5" />
    },
    {
      area: 'Training & Development',
      services: [
        'Labour law compliance training',
        'Managerial training programs',
        'Workplace culture development',
        'Diversity and inclusion workshops'
      ],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      area: 'International Employment',
      services: [
        'Expatriate employment arrangements',
        'Cross-border workforce management',
        'International compliance standards',
        'Global mobility programs'
      ],
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const employmentStats = [
    { value: '72+', label: 'Employment Contracts', description: 'Drafted and reviewed' },
    { value: '98%', label: 'Compliance Rate', description: 'Regulatory compliance success' },
    { value: '95%', label: 'Dispute Resolution', description: 'Successful settlements' },
    { value: '24/7', label: 'HR Support', description: 'Available for urgent matters' }
  ];

  const industriesServed = [
    'Financial Services',
    'Manufacturing & Industrial',
    'Healthcare & Pharmaceuticals',
    'Retail & Hospitality',
    'Energy & Mining',
    'Construction & Engineering',
    'Telecommunications',
    'Transportation & Logistics',
    'Professional Services'
  ];

  const complianceAreas = [
    {
      regulation: 'Labour Act Compliance',
      focus: 'Employment terms, working hours, and employee rights',
      icon: <Scale className="w-5 h-5" />
    },
    {
      regulation: 'Health & Safety',
      focus: 'Workplace safety standards and accident prevention',
      icon: <Shield className="w-5 h-5" />
    },
    {
      regulation: 'Discrimination Laws',
      focus: 'Equal opportunity and anti-discrimination compliance',
      icon: <Users className="w-5 h-5" />
    },
    {
      regulation: 'Wage Regulations',
      focus: 'Minimum wage, overtime, and compensation compliance',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const customHeroContent = (
    <div className="space-y-6">
      <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
        We provide comprehensive employment and labour law solutions that help businesses 
        build productive, compliant, and harmonious workplaces while protecting their interests 
        in Nigeria's evolving labour landscape.
      </p>
      
      <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
        Our employment law specialists combine deep regulatory knowledge with practical 
        workplace insights to create employment frameworks that foster positive employee 
        relations while ensuring full legal compliance.
      </p>

      <div className="pt-4">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Workplace Solutions
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Compliance Management', 'Risk Mitigation', 'Dispute Resolution', 'Workplace Harmony', 'Strategic HR'].map((item, index) => (
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
        practiceName="Employment & Labour Law"
        tagline="Building Compliant and Productive Workplaces"
        customContent={customHeroContent}
        contactPerson="Employment Practice Partners"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Employment contract drafting and compliance",
          "Workplace dispute resolution and tribunal representation",
          "Labour law compliance audits and training",
          "Workforce restructuring and management",
          "Executive compensation and benefits planning",
          "International employment and expatriate arrangements"
        ]}
        stats={[
          { value: "72+", label: "Contracts" },
          { value: "98%", label: "Compliance" },
          { value: "95%", label: "Resolution Rate" }
        ]}
      />
      
      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-black to-secondary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Employment Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive <span className="text-primary">Employment Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Complete employment law solutions for modern workplaces
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {employmentServices.map((service, index) => (
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

          {/* Industries Served */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industry <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Sector-specific employment law knowledge across diverse industries
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
                      {index % 5 === 1 && <DollarSign className="w-6 h-6 text-primary" />}
                      {index % 5 === 2 && <Building className="w-6 h-6 text-primary" />}
                      {index % 5 === 3 && <Heart className="w-6 h-6 text-primary" />}
                      {index % 5 === 4 && <Briefcase className="w-6 h-6 text-primary" />}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {industry}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Employment Lifecycle Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Full <span className="text-primary">Employment Lifecycle</span> Support
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stage: 'Recruitment & Hiring',
                  services: ['Offer letters', 'Background checks', 'Employment terms', 'Probation periods'],
                  icon: <Users className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Employment Management',
                  services: ['Performance reviews', 'Promotions', 'Disciplinary actions', 'Training compliance'],
                  icon: <Briefcase className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Workplace Relations',
                  services: ['Grievance handling', 'Mediation services', 'Union relations', 'Workplace culture'],
                  icon: <Handshake className="w-8 h-8" />,
                  color: 'from-primary/20 to-primary-600/10'
                },
                {
                  stage: 'Termination & Transition',
                  services: ['Redundancy planning', 'Severance agreements', 'Exit interviews', 'References'],
                  icon: <AlertTriangle className="w-8 h-8" />,
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

          {/* Risk Management & Compliance */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Risk Management Framework</h3>
                  <p className="text-gray-300 mb-6">
                    Our proactive approach to employment risk management helps organizations 
                    identify, assess, and mitigate workplace risks before they become legal issues.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Search className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Risk Assessment</div>
                        <div className="text-sm text-gray-400">Comprehensive workplace risk analysis</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Preventive Measures</div>
                        <div className="text-sm text-gray-400">Proactive compliance implementation</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ClipboardCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Ongoing Monitoring</div>
                        <div className="text-sm text-gray-400">Continuous compliance tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Common Workplace Risks</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Discrimination Claims</div>
                      <div className="text-sm text-gray-400">Gender, age, disability, or ethnic discrimination</div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Wrongful Dismissal</div>
                      <div className="text-sm text-gray-400">Improper termination procedures</div>
                    </div>
                    
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-white font-bold mb-1">Compliance Violations</div>
                      <div className="text-sm text-gray-400">Regulatory non-compliance penalties</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training & Development */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Workplace <span className="text-primary">Training & Development</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Managerial Training</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Employment law for managers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Performance management best practices</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Disciplinary procedure training</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Compliance Training</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Labour Act compliance workshops</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Health and safety certification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Anti-discrimination training</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold text-white mb-3">Workplace Culture</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Diversity and inclusion programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Employee engagement strategies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <span>Conflict resolution workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why <span className="text-primary">Our Employment Practice</span> Stands Out
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Our employment law practice combines deep regulatory expertise with practical 
                  workplace understanding to provide solutions that not only ensure legal compliance 
                  but also foster positive employee relations and organizational success.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Proactive Approach</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Preventing employment issues before they escalate into legal disputes.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Rapid Response</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Immediate support for urgent workplace matters and crises.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Network className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">HR Partnership</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Collaborative approach working closely with your HR team.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold text-white">Industry Specialization</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Deep understanding of sector-specific employment challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-6">Employment Services</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">For Employment Matters</div>
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="text-primary hover:text-primary-400 transition-colors text-lg font-medium block"
                  >
                    gratialegals@gmail.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-2">Urgent Workplace Issues</div>
                  <div className="text-white font-medium">24/7 support for employment emergencies</div>
                </div>

                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="block w-full py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Request Compliance Audit
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
                    Build a Compliant and Productive Workplace
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Ensure your employment practices are legally sound and strategically effective
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:gratialegals@gmail.com"
                    className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Employment Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Compliance Review
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

export default Employment;