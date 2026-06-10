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
  ArrowRight,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom'; 

const PracticeAreas = () => {
  const practiceAreas = [
    {
      id: 'corporate-law',
      slug: 'corporate-law',
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Corporate Law',
      description: 'Business name & company registration (CAC), company structuring & shareholding advisory, partnership and shareholder agreements.',
      features: ['Business Formation', 'M&A', 'Contracts', 'Compliance']
    },
    {
      id: 'contracts-legal-documentation',
      slug: 'contracts-legal-documentation',
      icon: <FileText className="w-5 h-5" />,
      title: 'Contracts & Legal Documentation',
      description: 'Client service agreements, vendor & supplier contracts, non-disclosure agreements (NDAs), partnership & collaboration agreements.',
      features: ['Agreements', 'Contracts', 'Documentation', 'Reviews']
    },
    {
      id: 'commercial',
      slug: 'commercial',
      icon: <Building className="w-5 h-5" />,
      title: 'Commercial Law',
      description: 'Legal services for commercial transactions, business operations, and commercial disputes.',
      features: ['Transactions', 'Operations', 'Disputes', 'Regulations']
    },
    {
      id: 'real-estate',
      slug: 'real-estate',
      icon: <Building className="w-5 h-5" />,
      title: 'Real Estate Law',
      description: 'Property transactions, zoning issues, landlord-tenant disputes, and real estate development.',
      features: ['Transactions', 'Zoning', 'Disputes', 'Development']
    },
    {
      id: 'commercial-advisory',
      slug: 'commercial-advisory',
      icon: <Scale className="w-5 h-5" />,
      title: 'Commercial Advisory',
      description: 'Strategic legal advice for business decisions, risk management, and commercial strategy.',
      features: ['Strategic Advice', 'Risk Management', 'Business Decisions', 'Compliance']
    },
    {
      id: 'contract-drafting',
      slug: 'contract-drafting',
      icon: <FileEdit className="w-5 h-5" />,
      title: 'Contract Drafting',
      description: 'Professional drafting, review, and negotiation of various types of contracts and agreements.',
      features: ['Drafting', 'Review', 'Negotiation', 'Enforcement']
    },
    {
      id: 'employment',
      slug: 'employment',
      icon: <Users className="w-5 h-5" />,
      title: 'Employment Law',
      description: 'Workplace discrimination, wrongful termination, wage disputes, and employment contracts.',
      features: ['Discrimination', 'Termination', 'Wages', 'Contracts']
    },
    {
      id: 'legal-advisory',
      slug: 'legal-advisory',
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'Legal Advisory',
      description: 'Comprehensive legal advice and counsel for various personal and business matters.',
      features: ['Legal Counsel', 'Advice', 'Guidance', 'Consultation']
    },
    {
      id: 'legal-due-diligence',
      slug: 'legalDueDiligence',
      icon: <Search className="w-5 h-5" />,
      title: 'Legal Due Diligence',
      description: 'Thorough investigation and assessment of legal risks in transactions and business operations.',
      features: ['Risk Assessment', 'Investigations', 'Compliance', 'Reporting']
    },
    {
      id: 'online-business',
      slug: 'online-business',
      icon: <Globe className="w-5 h-5" />,
      title: 'Online Business Law',
      description: 'Legal services for e-commerce, digital businesses, online contracts, and internet law.',
      features: ['E-commerce', 'Digital Contracts', 'Online Compliance', 'Internet Law']
    }
  ];

return (
  <div className="relative py-24 overflow-hidden bg-[#030930]">

    {/* Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* SECTION HEADER */}
      <div className="text-center mb-20">

        <div
          className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          border
          backdrop-blur-xl
          mb-6
          "
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <Scale
            className="w-4 h-4"
            style={{ color: '#d47f11' }}
          />

          <span
            className="
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-white/80
            "
          >
            Legal Expertise
          </span>
        </div>

        <h2
          className="
          text-5xl md:text-6xl
          font-black
          leading-[1.1]
          mb-6
          font-heading
          text-white
          "
        // style={{
        //   fontFamily: "'Clash Display', sans-serif",
        // }}
        >
          Comprehensive{' '}

          <span
            className="relative inline-block"
            style={{ color: '#d47f11' }}
          >
            Legal Services
          </span>
        </h2>

        <p
          className="
          text-lg
          text-white/60
          max-w-2xl
          mx-auto
          leading-relaxed
          "
        >
          Specialized legal representation across multiple
          practice areas with strategic solutions,
          personalized counsel, and proven results.
        </p>
      </div>

      {/* PRACTICE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {practiceAreas.map((area) => (
          <Link
            key={area.id}
            to={`/practices/${area.slug}`}
            className="group block"
          >
            <div
              className="
              relative h-full
              rounded-[30px]
              overflow-hidden
              border
              p-8
              transition-all duration-500
              hover:-translate-y-2
              "
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                boxShadow:
                  '0 10px 40px rgba(0,0,0,0.18)',
              }}
            >
              {/* Hover Glow */}
              <div
                className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-opacity duration-500
                "
                style={{
                  background:
                    'linear-gradient(135deg, rgba(212,127,17,0.08), transparent 40%, rgba(255,255,255,0.03))',
                }}
              />

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between mb-6">

                <div className="flex items-center gap-4">

                  {/* ICON */}
                  <div
                    className="
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    flex-shrink-0
                    transition-all duration-500
                    group-hover:scale-110
                    "
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(212,127,17,0.18), rgba(255,255,255,0.06))',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span
                      style={{ color: '#d47f11' }}
                    >
                      {area.icon}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-white
                    leading-snug
                    transition-all duration-300
                    group-hover:text-[#d47f11]
                    "
                    style={{
                      fontFamily:
                        "'Clash Display', sans-serif",
                    }}
                  >
                    {area.title}
                  </h3>
                </div>

                {/* ARROW */}
                <ArrowRight
                  className="
                  w-5 h-5
                  text-white/30
                  group-hover:text-[#d47f11]
                  group-hover:translate-x-1
                  transition-all duration-300
                  "
                />
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                relative z-10
                text-[15px]
                leading-relaxed
                text-white/60
                mb-7
                "
                style={{
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {area.description}
              </p>

              {/* FEATURES */}
              <div
                className="
                relative z-10
                flex flex-wrap gap-2
                pt-5
                border-t
                "
                style={{
                  borderColor:
                    'rgba(255,255,255,0.06)',
                }}
              >
                {area.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="
                    px-3 py-1.5
                    rounded-full
                    text-xs
                    transition-all duration-300
                    group-hover:scale-105
                    "
                    style={{
                      background:
                        'rgba(255,255,255,0.05)',
                      border:
                        '1px solid rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily:
                        "'Manrope', sans-serif",
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA SECTION */}
      <div
        className="
        relative overflow-hidden
        rounded-[32px]
        border
        p-10 md:p-14
        "
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Glow */}
        <div
          className="
          absolute top-0 right-0
          w-72 h-72
          rounded-full
          blur-3xl
          opacity-20
          "
          style={{ background: '#d47f11' }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="text-center lg:text-left">

            <h3
              className="
              text-3xl md:text-4xl
              font-black
              text-white
              mb-4
              "
              style={{
                fontFamily:
                  "'Clash Display', sans-serif",
              }}
            >
              Not Sure Which Service You Need?
            </h3>

            <p
              className="
              text-white/60
              max-w-2xl
              leading-relaxed
              "
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Schedule a confidential consultation with our
              legal experts to discuss your specific needs
              and receive strategic guidance.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">

            <Link
              to="/contact"
              className="
              group relative overflow-hidden
              inline-flex items-center justify-center gap-2
              px-8 py-4
              rounded-2xl
              text-sm font-bold text-white
              transition-all duration-500
              hover:scale-105
              "
              style={{
                background:
                  'linear-gradient(135deg, #d47f11, #f0a63d)',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <span className="relative z-10">
                Book Free Consultation
              </span>

              <ArrowRight
                className="
                w-4 h-4 relative z-10
                group-hover:translate-x-1
                transition-transform
                "
              />

              <div
                className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                "
                style={{
                  background:
                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)',
                }}
              />
            </Link>

            <a
              href="tel:+2348138939107"
              className="
              inline-flex items-center justify-center gap-2
              px-8 py-4
              rounded-2xl
              text-sm font-semibold
              transition-all duration-300
              hover:bg-white/10
              "
              style={{
                border:
                  '1px solid rgba(255,255,255,0.08)',
                color: 'white',
                background: 'rgba(255,255,255,0.04)',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <Phone className="w-4 h-4" />
              +234 813 893 9107
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
);
};

export default PracticeAreas;