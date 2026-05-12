import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const WhyChooseUs = () => {
  const competitiveAdvantages = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Client-First Approach',
      description: 'Every decision starts with your needs. We prioritize your goals above all else.',
      features: ['Personalized Strategies', 'Regular Updates', '24/7 Availability', 'No Hidden Agendas'],
      metric: '98% Client Satisfaction',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Proven Track Record',
      description: 'Results that speak for themselves. Our success stories are your assurance.',
      features: ['Fully Licensed', '7 Years Experience', 'Industry Recognition', 'Repeat Clients'],
      metric: '96% Success Rate',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Confidential Handling',
      description: 'Your privacy is sacred. We implement strict security protocols on all matters.',
      features: ['Secure Communication', 'NDA Protection', 'Private Consultation', 'Data Encryption'],
      metric: 'Zero Breaches',
    }
  ];

  const comparisonData = [
    { feature: 'Legal Health Check', competitors: 'Limited' },
    { feature: 'Flat Fee Pricing Available', competitors: 'Rarely' },
    { feature: '24/7 Client Support', competitors: 'Business Hours' },
    { feature: 'Case Management Portal', competitors: 'Sometimes' },
    { feature: 'Monthly Progress Reports', competitors: 'Upon Request' },
    { feature: 'Multilingual Services', competitors: 'Limited' }
  ];

  return (
    // 👇 Change this bg color anytime
    <div className="py-20 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-5">
            <Target className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Competitive Edge</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Why <span className="text-primary">Leading Clients</span> Choose Us
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Experience the difference that sets us apart in the legal industry
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {competitiveAdvantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon + metric */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary">{advantage.icon}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full text-xs font-semibold text-primary">
                  <CheckCircle className="w-3 h-3" />
                  {advantage.metric}
                </span>
              </div>

              {/* Title + description */}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                {advantage.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {advantage.description}
              </p>

              {/* Feature list */}
              <div className="space-y-2 pt-5 border-t border-gray-100">
                {advantage.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
          <div className="px-8 py-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                How We <span className="text-primary">Compare</span>
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                A side-by-side look at how our client-first approach stacks up
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-medium text-gray-700">Our Firm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 text-center leading-none text-gray-400">~</span>
                <span>Average Competitor</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-8 text-xs font-semibold text-gray-400 uppercase tracking-wider">Feature</th>
                  <th className="text-center py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Our Firm</th>
                  <th className="text-center py-3 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Competitors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/60 transition-colors">
                    <td className="py-4 px-8 text-sm font-medium text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Yes
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-sm text-gray-400">{row.competitors}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">100% Satisfaction Guarantee</h4>
                <p className="text-sm text-gray-500">We're committed to delivering results you can trust</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
              <span className="ml-2 text-sm font-semibold text-gray-700">5.0 Rated</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;