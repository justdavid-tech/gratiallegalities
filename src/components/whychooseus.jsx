import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  Award, 
  Users, 
  DollarSign,
  Gavel,
  Clock,
  MessageSquare,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const WhyChooseUs = () => {
  const competitiveAdvantages = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-First Approach',
      description: 'Every decision starts with your needs. We prioritize your goals above all else.',
      features: ['Personalized Strategies', 'Regular Updates', '24/7 Availability', 'No Hidden Agendas'],
      metric: '98% Client Satisfaction',
      gradient: 'from-primary/20 to-primary/10'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Track Record',
      description: 'Results that speak for themselves. Our success stories are your assurance.',
      features: ['56+ Cases Won', '6+ Years Experience', 'Industry Recognition', 'Repeat Clients'],
      metric: '96% Success Rate',
      gradient: 'from-primary/20 to-primary/10'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Confidential Handling',
      description: 'Your privacy is sacred. We implement military-grade security protocols.',
      features: ['Secure Communication', 'NDA Protection', 'Private Consultation', 'Data Encryption'],
      metric: 'Zero Breaches',
      gradient: 'from-primary/20 to-primary/10'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Transparent Pricing',
      description: 'No surprises, just clarity. Know exactly what you’re paying for.',
      features: ['Fixed Fees Available', 'Itemized Billing', 'No Hidden Costs', 'Payment Plans'],
      metric: 'Upfront Quotes',
      gradient: 'from-primary/20 to-primary/10'
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: 'Strong Courtroom Advocacy',
      description: 'Aggressive representation when it matters most. We never back down.',
      features: ['Trial Experience', 'Persuasive Advocacy', 'Quick Thinking', 'Jury Rapport'],
      metric: 'Courtroom Wins',
      gradient: 'from-primary/20 to-primary/10'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Speed & Efficiency',
      description: 'Rapid response times without compromising quality or attention to detail.',
      features: ['Same-Day Responses', 'Streamlined Processes', 'Quick Turnaround', 'E-Filing'],
      metric: '48h Response Guarantee',
      gradient: 'from-primary/20 to-primary/10'
    }
  ];

  const comparisonData = [
    { feature: 'Free Initial Consultation', us: true, competitors: 'Limited' },
    { feature: 'Flat Fee Pricing Available', us: true, competitors: 'Rarely' },
    { feature: '24/7 Client Support', us: true, competitors: 'Business Hours' },
    { feature: 'Case Management Portal', us: true, competitors: 'Sometimes' },
    { feature: 'Monthly Progress Reports', us: true, competitors: 'Upon Request' },
    { feature: 'Multilingual Services', us: true, competitors: 'Limited' }
  ];

  const testimonials = [
    {
      quote: "They turned my complex case into a straightforward victory. Their attention to detail was incredible.",
      author: "Michael R., Corporate Client",
      role: "CEO, Tech Innovations Inc."
    },
    {
      quote: "Transparent pricing and constant communication. I always knew what was happening with my case.",
      author: "Sarah L., Individual Client",
      role: "Real Estate Investor"
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-black to-secondary-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-1/3 right-10 w-40 h-40 border border-primary/20 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Competitive Edge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-primary">Leading Clients</span> Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the difference that sets us apart in the legal industry
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {competitiveAdvantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-brand-lg"
            >
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                    <div className="text-primary">
                      {advantage.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                      {advantage.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-primary">{advantage.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {advantage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Badge */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 group-hover:text-gray-400">
                      Exclusive Advantage
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              How We <span className="text-primary">Compare</span>
            </h3>
            <p className="text-gray-400">A side-by-side look at how our client-first approach stacks up against industry standards.</p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg">
                        <Star className="w-4 h-4" />
                        <span>Our Firm</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 text-gray-400">Average Competitor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0">
                      <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        <div className="inline-flex items-center gap-2 text-primary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-semibold">Yes</span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`${row.competitors === 'Limited' || row.competitors === 'Rarely' ? 'text-gray-400' : 'text-gray-300'}`}>
                          {row.competitors}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        {/* Guarantee Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-white">
              <span className="font-semibold">100% Satisfaction Guarantee</span>
              <span className="text-gray-400 ml-2">or your money back*</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;