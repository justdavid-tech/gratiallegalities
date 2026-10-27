import React, { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Scale, 
  Building2,
  Lock,
  CheckCircle2
} from 'lucide-react';
import BookingModal from './bookingmodal';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    { icon: <Lock className="w-4 h-4 text-primary" />, title: 'Strict Discretion', desc: 'All communications are protected under professional legal privilege.' },
    { icon: <Scale className="w-4 h-4 text-primary" />, title: 'Direct Partner Oversight', desc: 'Briefs are managed with calculated, experienced strategic oversight.' },
    { icon: <Building2 className="w-4 h-4 text-primary" />, title: 'Abuja & Nationwide', desc: 'In-person consultations at our Abuja office or secure virtual sessions.' },
  ];

  return (
    <>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <section className="relative py-24 bg-[#030930] text-white overflow-hidden border-t border-white/10">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Initiate Counsel
              </span>
              <div className="h-px w-8 bg-primary/60" />
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight font-black mb-6">
              Protect Your Enterprise, Assets, <br />
              <span className="text-primary">& Legal Interests.</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need proactive corporate structuring, contract negotiation, property transaction due diligence, or courtroom advocacy in a contentious dispute, our team is ready.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group px-10 py-4 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 min-w-[260px]"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Legal Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="tel:+2348138939107"
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/50 text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-3 min-w-[240px]"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-[11px] text-gray-400 uppercase tracking-wider">Office Line</div>
                <div className="text-sm font-bold text-white">+234 813 893 9107</div>
              </div>
            </a>
          </div>

          {/* Institutional Pillars */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white mb-1">{pillar.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default CallToAction;