import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  Scale, 
  FileCheck2,
  Lock,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const practicePillars = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Partner-Led Oversight',
      description: 'Your brief is directly steered by experienced practitioners with deep knowledge of Nigerian commercial realities and dispute dynamics.',
      features: ['Direct access to lead counsel', 'Calculated strategic planning', 'Transparent milestone updates', 'Proactive risk mitigation'],
      badge: 'Direct Counsel',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Substantive Track Record',
      description: 'Seven years of advising high-growth ventures, corporate entities, investors, and individuals on high-stakes transactions and contentious matters.',
      features: ['CAC & statutory compliance', 'Title due diligence at AGIS', 'Commercial arbitration & litigation', 'Enforceable contract drafting'],
      badge: 'Proven Advocacy',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Privilege & Discretion',
      description: 'Every disclosure, document, and transaction is guarded under strict legal professional privilege and rigorous data protection standards.',
      features: ['Absolute confidentiality', 'Strict conflict checks', 'Secure document handling', 'Regulatory compliance standards'],
      badge: 'Legal Privilege',
    }
  ];

  const serviceStandards = [
    {
      title: 'Comprehensive Legal Health Checks',
      detail: 'Systematic audits of corporate structure, employment policies, and regulatory exposures before they manifest as costly disputes.'
    },
    {
      title: 'Transparent Fee Architecture',
      detail: 'Clear, upfront engagement scopes and milestone-based fee arrangements without hidden overheads.'
    },
    {
      title: 'Integrated Practice Model',
      detail: 'Seamless transition between proactive commercial structuring and court litigation when contentious disputes arise.'
    },
    {
      title: 'Client Matter Portal',
      detail: 'Centralized, secure digital access for real-time matter tracking, document repositories, and direct messaging.'
    },
    {
      title: 'Rigorous Land & Asset Due Diligence',
      detail: 'On-ground verification across registries, title histories, and planning authorities to secure property transactions.'
    },
    {
      title: 'Alternative Dispute Resolution (ADR)',
      detail: 'Certified mediation and negotiation capacity to preserve commercial relationships and achieve cost-effective settlements.'
    }
  ];

  return (
    <div className="py-24 bg-[#fbfbf9] border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
              The Gratia Standard
            </span>
            <div className="h-px w-8 bg-primary/60" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Why Discerning Clients <span className="text-primary">Rely on Our Counsel</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A practice grounded in legal rigor, meticulous execution, and steadfast commitment to our clients&apos; commercial and personal interests.
          </p>
        </div>

        {/* Practice Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {practicePillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary px-3 py-1 bg-primary/5 rounded border border-primary/15">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-6 border-t border-stone-100">
                {pillar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Standards Grid */}
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-8 sm:p-12 mb-12">
          <div className="max-w-3xl mb-10">
            <span className="text-primary text-xs uppercase tracking-[0.25em] font-bold">
              Our Professional Commitments
            </span>
            <h3 className="font-heading text-3xl font-bold text-gray-900 mt-2 mb-3">
              Institutional Benchmarks in Legal Practice
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We hold every brief to verified service standards designed to provide certainty, strategic clarity, and dependable counsel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceStandards.map((std, i) => (
              <div key={i} className="border-l-2 border-primary/40 pl-5 space-y-2">
                <h4 className="font-heading text-base font-bold text-gray-900">
                  {std.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {std.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Endorsement Strip */}
        <div className="bg-[#030930] rounded-2xl border border-white/10 p-8 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/15 border border-primary/30 rounded-xl flex items-center justify-center text-primary shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-white">Admitted to the Supreme Court of Nigeria</h4>
                <p className="text-xs text-gray-300 mt-0.5">Licensed to practice law and represent clients before all superior courts of record in Nigeria.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-primary-600 transition-all shrink-0"
            >
              Consult Counsel <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;