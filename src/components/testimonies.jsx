import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Gratial Legalities took the stress out of my land documentation. They handled the entire process with incredible speed and precision, ensuring my title was secured without a single hitch. If you need property papers done right, this is the firm to call.",
      author: "Chukwuma Eze",
      initials: "CE",
      caseType: "Land Documentation",
      outcome: "Successful Completion",
      rating: 5,
      date: "March 2025",
    },
    {
      id: 2,
      quote: "Our international commercial contract negotiations were at a standstill. The firm's expertise in commercial law and cross-border transactions broke the deadlock, resulting in favorable terms that exceeded our expectations.",
      author: "Amara Okafor",
      initials: "AO",
      caseType: "Commercial Contract Law",
      outcome: "Favorable Agreement",
      rating: 5,
      date: "February 2025",
    },
    {
      id: 3,
      quote: "When our real estate development faced zoning challenges, the legal team's deep knowledge of property law and government relations secured all necessary approvals. Project delivered on time.",
      author: "Stephanie Nwankwo",
      initials: "SN",
      caseType: "Real Estate Development",
      outcome: "Project Approved",
      rating: 5,
      date: "April 2025",
    },
    {
      id: 4,
      quote: "The firm provided comprehensive guidance on compliance, board structure, and shareholder agreements. Our business operations are now seamless and legally sound.",
      author: "Funke Adeyemi",
      initials: "FA",
      caseType: "Corporate Governance",
      outcome: "Full Compliance",
      rating: 5,
      date: "December 2025",
    },
    {
      id: 5,
      quote: "A commercial lease dispute threatened our retail expansion. The firm's aggressive negotiation expertise resolved the matter favorably, allowing us to open 12 new locations ahead of schedule.",
      author: "Ibrahim Musa",
      initials: "IM",
      caseType: "Commercial Litigation",
      outcome: "Favorable Settlement",
      rating: 5,
      date: "November 2025",
    },
    {
      id: 6,
      quote: "Our commercial property acquisition in Wuse 2 was complex with multiple stakeholders. The team conducted thorough due diligence, negotiated masterfully, and delivered a clean title. Outstanding real estate counsel.",
      author: "Ngozi Okoro",
      initials: "NO",
      caseType: "Commercial Real Estate",
      outcome: "Successful Acquisition",
      rating: 5,
      date: "October 2025",
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const active = testimonials[activeIndex];

  // Show 3 preview cards (excluding active)
  const previews = testimonials
    .filter((_, i) => i !== activeIndex)
    .slice(0, 3);

return (
  <div className="relative py-24 overflow-hidden bg-[#030930]">

    <div
      className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10"
      style={{ background: '#1e40ff' }}
    />

    {/* GRID PATTERN */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
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
          <Quote
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
            style={{
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Client Stories
          </span>
        </div>

        <h2
          className="
          text-5xl md:text-6xl
          font-black
          text-white
          font-heading
          leading-[1.1]
          mb-6
          "
        >
          Trusted by{' '}

          <span
            className="relative inline-block"
            style={{ color: '#d47f11' }}
          >
            500+ Clients

            {/* Underline */}
            {/* <svg
              viewBox="0 0 120 10"
              className="absolute -bottom-3 left-0 w-full"
              preserveAspectRatio="none"
              style={{ height: '10px' }}
            >
              <path
                d="M0 6 Q30 0 60 6 Q90 12 120 6"
                fill="none"
                stroke="#d47f11"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg> */}
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
          Real stories from clients who trusted us
          with their most important legal matters.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* FEATURED TESTIMONIAL */}
        <div
          className="
          lg:col-span-2
          relative overflow-hidden
          rounded-[32px]
          border
          p-8 md:p-10
          "
          style={{
            background: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            boxShadow:
              '0 10px 40px rgba(0,0,0,0.18)',
          }}
        >
          {/* CARD GLOW */}
          <div
            className="
            absolute top-0 right-0
            w-72 h-72
            rounded-full
            blur-3xl
            opacity-10
            "
            style={{ background: '#d47f11' }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full">

            {/* TOP */}
            <div>

              {/* STARS + DATE */}
              <div className="flex items-center justify-between mb-8">

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{
                        color: '#d47f11',
                        fill: '#d47f11',
                      }}
                    />
                  ))}
                </div>

                <span
                  className="text-xs text-white/40 font-medium"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {active.date}
                </span>
              </div>

              {/* QUOTE ICON */}
              <div
                className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                mb-6
                "
                style={{
                  background:
                    'linear-gradient(135deg, rgba(212,127,17,0.15), rgba(255,255,255,0.03))',
                  border:
                    '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <Quote
                  className="w-7 h-7"
                  style={{ color: '#d47f11' }}
                />
              </div>

              {/* TESTIMONIAL */}
              <blockquote
                className="
                text-2xl md:text-3xl
                text-white
                leading-relaxed
                font-medium
                mb-10
                "
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                "{active.quote}"
              </blockquote>
            </div>

            {/* BOTTOM */}
            <div>

              {/* DIVIDER */}
              <div
                className="mb-6 border-t"
                style={{
                  borderColor:
                    'rgba(255,255,255,0.06)',
                }}
              />

              <div className="flex items-center justify-between flex-wrap gap-6">

                {/* AUTHOR */}
                <div className="flex items-center gap-4">

                  {/* INITIALS */}
                  <div
                    className="
                    w-14 h-14
                    rounded-full
                    flex items-center justify-center
                    "
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(212,127,17,0.2), rgba(255,255,255,0.05))',
                      border:
                        '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: '#d47f11',
                        fontFamily:
                          "'Clash Display', sans-serif",
                      }}
                    >
                      {active.initials}
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div>

                    <p
                      className="text-base font-bold text-white"
                      style={{
                        fontFamily:
                          "'Manrope', sans-serif",
                      }}
                    >
                      {active.author}
                    </p>

                    <div className="flex items-center gap-2 mt-1 flex-wrap">

                      <span
                        className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        "
                        style={{
                          background:
                            'rgba(212,127,17,0.12)',
                          color: '#d47f11',
                          border:
                            '1px solid rgba(212,127,17,0.15)',
                          fontFamily:
                            "'Manrope', sans-serif",
                        }}
                      >
                        {active.caseType}
                      </span>

                      <span
                        className="
                        flex items-center gap-1
                        text-xs
                        text-white/50
                        "
                        style={{
                          fontFamily:
                            "'Manrope', sans-serif",
                        }}
                      >
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: '#22c55e' }}
                        />

                        {active.outcome}
                      </span>
                    </div>
                  </div>
                </div>

                {/* NAVIGATION */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={prev}
                    className="
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-105
                    "
                    style={{
                      background:
                        'rgba(255,255,255,0.05)',
                      border:
                        '1px solid rgba(255,255,255,0.06)',
                      color: 'white',
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span
                    className="
                    text-xs
                    text-white/40
                    font-medium
                    tabular-nums
                    "
                    style={{
                      fontFamily:
                        "'Manrope', sans-serif",
                    }}
                  >
                    {activeIndex + 1} / {testimonials.length}
                  </span>

                  <button
                    onClick={next}
                    className="
                    w-11 h-11
                    rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-105
                    "
                    style={{
                      background:
                        'rgba(255,255,255,0.05)',
                      border:
                        '1px solid rgba(255,255,255,0.06)',
                      color: 'white',
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* SIDE PREVIEW CARDS */}
        <div className="flex flex-col gap-4">

          {previews.map((t) => {
            const realIndex = testimonials.findIndex(
              (x) => x.id === t.id
            );

            return (
              <button
                key={t.id}
                onClick={() => setActiveIndex(realIndex)}
                className="
                text-left
                group
                relative overflow-hidden
                rounded-[28px]
                border
                p-5
                transition-all duration-500
                hover:-translate-y-1
                "
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* HOVER GLOW */}
                <div
                  className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  "
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(212,127,17,0.08), transparent)',
                  }}
                />

                <div className="relative z-10">

                  {/* STARS */}
                  <div className="flex items-center gap-1 mb-4">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3"
                        style={{
                          color: '#d47f11',
                          fill: '#d47f11',
                        }}
                      />
                    ))}

                    <span
                      className="
                      ml-auto
                      text-xs
                      text-white/40
                      "
                      style={{
                        fontFamily:
                          "'Manrope', sans-serif",
                      }}
                    >
                      {t.date}
                    </span>
                  </div>

                  {/* QUOTE */}
                  <p
                    className="
                    text-sm
                    text-white/65
                    leading-relaxed
                    line-clamp-3
                    mb-5
                    "
                    style={{
                      fontFamily:
                        "'Manrope', sans-serif",
                    }}
                  >
                    "{t.quote}"
                  </p>

                  {/* AUTHOR */}
                  <div className="flex items-center gap-3">

                    <div
                      className="
                      w-10 h-10
                      rounded-full
                      flex items-center justify-center
                      "
                      style={{
                        background:
                          'rgba(212,127,17,0.12)',
                        border:
                          '1px solid rgba(212,127,17,0.15)',
                      }}
                    >
                      <span
                        className="text-xs font-bold"
                        style={{
                          color: '#d47f11',
                          fontFamily:
                            "'Clash Display', sans-serif",
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>

                    <div>

                      <p
                        className="
                        text-sm font-bold text-white
                        group-hover:text-[#d47f11]
                        transition-colors
                        "
                        style={{
                          fontFamily:
                            "'Manrope', sans-serif",
                        }}
                      >
                        {t.author}
                      </p>

                      <p
                        className="
                        text-xs text-white/40
                        "
                        style={{
                          fontFamily:
                            "'Manrope', sans-serif",
                        }}
                      >
                        {t.caseType}
                      </p>
                    </div>

                  </div>
                </div>
              </button>
            );
          })}

          {/* DOT INDICATORS */}
          <div className="flex items-center justify-center gap-2 pt-2">

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '22px' : '7px',
                  height: '7px',
                  background:
                    i === activeIndex
                      ? '#d47f11'
                      : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default Testimonials;