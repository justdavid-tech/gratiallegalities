import React from 'react';
import { Building, Scale, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAVY = '#051c61';
const GOLD = '#d47f11';

const serviceStats = [
  { value: '7+', label: 'Years Experience' },
  { value: '96%', label: 'Success Rate' },
  { value: '11', label: 'Practice Areas' },
];

const AboutHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">

      {/* Top navy bar */}
      <div className="h-1.5 w-full" style={{ background: GOLD }} />

      {/* Background image — replace URL with your own image later */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&auto=format&fit=crop&q=80')`,
          top: '6px', // offset for the gold bar
        }}
      />
      {/* Overlay — keeps text readable over the image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.97) 45%, rgba(255,255,255,0.75) 70%, rgba(255,255,255,0.4) 100%)',
          top: '6px',
        }}
      />

      <div className="relative z-10 pt-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh] items-center gap-12 py-20">

          {/* ── Left: Text content ── */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ background: `${NAVY}10`, color: NAVY }}
            >
              <Building className="w-3.5 h-3.5" />
              About Our Firm · Est. 2022
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-black leading-[1.08] mb-6"
              style={{ color: NAVY }}>
              Legal Expertise <br />
              You Can{' '}
              <span
                className="relative inline-block"
                style={{ color: GOLD }}
              >
                Trust
                {/* Underline squiggle */}
                <svg
                  viewBox="0 0 120 10"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                  style={{ height: '8px' }}
                >
                  <path
                    d="M0 6 Q30 0 60 6 Q90 12 120 6"
                    fill="none"
                    stroke={GOLD}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-black text-lg leading-relaxed mb-8 max-w-lg">
              Based in Abuja, Nigeria, Gratial Legalities delivers strategic, client-first legal
              solutions across corporate, commercial, and property law with clarity and care at
              every step.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'Nigeria Bar Association',
                'Institute of Chartered Mediators',
                'Licensed in Nigeria',
              ].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: `${NAVY}25`,
                    color: NAVY,
                    background: `${NAVY}06`,
                  }}
                >
                  <CheckCircle className="w-3 h-3" style={{ color: GOLD }} />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                style={{ background: NAVY }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+2348138939107"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-gray-200 text-gray-700 hover:border-gray-300 transition-all duration-300 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                (+234) 813 893 9107
              </a>
            </div>
          </div>

          {/* ── Right: Visual panel ── */}
          <div className="relative flex flex-col gap-5">

            {/* Main navy card */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{ background: NAVY }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10"
                style={{ border: `40px solid ${GOLD}` }}
              />

              <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: GOLD }}>
                Our Promise
              </p>
              <p className="text-white text-xl font-bold leading-snug mb-6 max-w-xs">
                "Clear advice, practical solutions, genuine commitment to protecting your interests."
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `${GOLD}40` }}
                >
                  GI
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Barrister Grace Idoko</p>
                  <p className="text-blue-200 text-xs">CEO & Lead Counsel</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {serviceStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md transition-all duration-300"
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}60`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#f3f4f6'}
                >
                  <div className="text-3xl font-black mb-0.5" style={{ color: NAVY }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Gold accent strip */}
            <div
              className="rounded-xl px-5 py-4 flex items-center gap-3"
              style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}30` }}
            >
              <Scale className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
              <p className="text-sm font-medium" style={{ color: NAVY }}>
                Serving individuals & businesses across Abuja and beyond since 2022
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHero;