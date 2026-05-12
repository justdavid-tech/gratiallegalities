import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./bookingmodal";

const slides = [
  {
    eyebrow: "Corporate Law",
    headline: ["Structuring Success,", "Protecting", "Your Enterprise."],
    italicLine: 1,
    sub: "From incorporations to M&A transactions,\nwe are your trusted strategic legal partner.",
    image: "/assets/corporate.jpeg",
  },
  {
    eyebrow: "Contract Drafting & Review",
    headline: ["Every Word", "In Your Contract", "Matters."],
    italicLine: 2,
    sub: "Precision-drafted agreements that protect your\ninterests and stand up in any jurisdiction.",
    image: "/assets/contract-drafting.jpeg",
  },
  {
    eyebrow: "Real Estate Law",
    headline: ["Secure Every", "Transaction,", "Protect Every Asset."],
    italicLine: 1,
    sub: "Comprehensive counsel for acquisitions, leases,\nand property disputes from contract to closing.",
    image: "/assets/real-estate.jpeg",
  },
];

const PRACTICE_AREAS = [
  { title: "Corporate Law", desc: "Entity formation, governance, M&A and shareholder matters.", path: "/practices/corporate-law" },
  { title: "Contract Drafting", desc: "Bespoke, enforceable agreements tailored to your needs.", path: "/practices/contract-drafting" },
  { title: "Real Estate Law", desc: "Acquisitions, disposals, leases and title verification.", path: "/practices/real-estate" },
  { title: "Commercial Law", desc: "Trade, finance and supply-chain legal frameworks.", path: "/practices/commercial" },
  { title: "Commercial Advisory", desc: "Strategic legal advice for your commercial decisions.", path: "/practices/commercial-advisory" },
  { title: "Contracts & Legal Documentation", desc: "End-to-end documentation for complex transactions.", path: "/practices/contracts-legal-documentation" },
  { title: "Employment Law", desc: "Workplace policies, disputes and regulatory compliance.", path: "/practices/employment" },
  { title: "Legal Advisory", desc: "General counsel services and risk management guidance.", path: "/practices/legal-advisory" },
  { title: "Legal Due Diligence", desc: "Thorough investigation before deals and investments.", path: "/practices/legal-due-diligence" },
  { title: "Online Business Law", desc: "E-commerce, data privacy and digital contracts.", path: "/practices/online-business" },
  { title: "Property Dispute", desc: "Boundary, ownership and landlord-tenant litigation.", path: "/practices/property-dispute" },
];

const INTERVAL = 5000;

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;900&family=Jost:wght@200;300;400&display=swap');

  .lf-hero {
    position: relative; width: 100vw; height: 100vh;
    overflow: hidden; background: #0d0d0d;
    font-family: 'Jost', sans-serif;
  }

  /* ── GRAIN OVERLAY ── */
  .lf-hero::after {
    content: ''; position: absolute; inset: 0;
    pointer-events: none; z-index: 6;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    background-size: 200px 200px; opacity: 0.4;
  }

  /* ── SLIDE ── */
  .lf-slide {
    position: absolute; inset: 0;
    opacity: 0; transition: opacity 1.6s ease-in-out; will-change: opacity;
  }
  .lf-slide.active { opacity: 1; }

  /* Real photo */
  .lf-slide-img {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.06);
    transition: transform 6s ease-out;
  }
  .lf-slide.active .lf-slide-img { transform: scale(1); }

  /* Dark gradient overlay ON the photo */
  .lf-slide-overlay {
    position: absolute; inset: 0;
    background:
      linear-gradient(105deg,
        rgba(0,0,0,0.82) 0%,
        rgba(0,0,0,0.55) 45%,
        rgba(0,0,0,0.72) 100%),
      linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
  }

  /* Gold grid */
  .lf-grid {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background:
      repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(201,168,76,0.025) 120px, rgba(201,168,76,0.025) 121px),
      repeating-linear-gradient(0deg,  transparent, transparent 120px, rgba(201,168,76,0.025) 120px, rgba(201,168,76,0.025) 121px);
  }

  /* ── DECO LINES ── */
  .lf-deco-line {
    position: absolute; top: 0; bottom: 0; width: 1px; z-index: 7;
    background: linear-gradient(180deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent);
  }

  /* ── ACCENT FRAME ── */
  .lf-accent {
    position: absolute; right: 6%; top: 50%; transform: translateY(-50%);
    z-index: 8; width: clamp(180px, 26vw, 380px); aspect-ratio: 3/4;
    border: 1px solid rgba(201,168,76,0.22); pointer-events: none;
    opacity: 0; animation: lfFadeIn 1.4s 1s forwards;
  }
  .lf-accent::before {
    content: ''; position: absolute; inset: 14px;
    border: 1px solid rgba(201,168,76,0.1);
  }
  .lf-accent::after {
    content: ''; position: absolute;
    top: -1px; left: 50%; width: 48px; height: 1px;
    background: #d47f11; transform: translateX(-50%);
  }

  /* ── TOP BAR ── */
  .lf-topbar {
    position: absolute; top: 0; left: 0; right: 0; z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    padding: 2.2rem 8vw;
    border-bottom: 1px solid rgba(201,168,76,0.18);
    background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%);
  }
  .lf-logo-main {
    font-family: 'Cinzel', serif; font-weight: 600;
    font-size: clamp(0.78rem, 1.3vw, 1rem);
    letter-spacing: 0.26em; color: #d47f11; text-transform: uppercase;
    display: block;
  }
  .lf-logo-sub {
    font-size: 0.6rem; font-weight: 300; letter-spacing: 0.34em;
    color: rgba(201,168,76,0.48); text-transform: uppercase;
    margin-top: 4px; display: block;
  }
  .lf-nav { display: flex; gap: clamp(1.4rem, 2.8vw, 2.8rem); align-items: center; }
  .lf-nav a {
    font-family: 'Jost', sans-serif;
    font-size: 0.7rem; font-weight: 300; letter-spacing: 0.2em;
    color: rgba(245,240,232,0.62); text-decoration: none; text-transform: uppercase;
    position: relative; transition: color 0.3s;
  }
  .lf-nav a::after {
    content: ''; position: absolute; bottom: -4px; left: 0;
    width: 0; height: 1px; background: #d47f11; transition: width 0.3s;
  }
  .lf-nav a:hover { color: #d47f11; }
  .lf-nav a:hover::after { width: 100%; }
  .lf-nav-cta {
    color: #0d0d0d !important; background: #d47f11 !important;
    padding: 0.62rem 1.5rem; font-weight: 400 !important;
    transition: background 0.3s !important;
  }
  .lf-nav-cta::after { display: none !important; }
  .lf-nav-cta:hover { background: #d47f11 !important; }

  /* ── SLIDE TEXTS ── */
  .lf-text-wrap { position: absolute; inset: 0; z-index: 9; pointer-events: none; }
  .lf-text-item {
    position: absolute; inset: 0;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 8vw; padding-top: 5rem;
    opacity: 0; transition: opacity 1.6s ease-in-out; pointer-events: none;
  }
  .lf-text-item.active { opacity: 1; pointer-events: auto; }

  .lf-eyebrow {
    display: flex; align-items: center; gap: 1.2rem; margin-bottom: 1.8rem;
    opacity: 0; transform: translateY(18px);
    animation: lfFadeUp 0.9s 0.4s forwards;
  }
  .lf-eyebrow-line { width: 44px; height: 1px; background: #d47f11; flex-shrink: 0; }
  .lf-eyebrow-text {
    font-family: 'Jost', sans-serif;
    font-size: 0.66rem; font-weight: 300; letter-spacing: 0.36em;
    color: #d47f11; text-transform: uppercase;
  }

  .lf-headline {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(3rem, 7vw, 6.6rem);
    line-height: 1.04; color: #f5f0e8; max-width: 68%;
    opacity: 0; transform: translateY(26px);
    animation: lfFadeUp 1s 0.6s forwards;
  }
  .lf-headline em { font-style: italic; color: #d47f11; font-weight: 300; }

  .lf-sub {
    font-family: 'Jost', sans-serif;
    font-size: clamp(0.87rem, 1.2vw, 0.94rem); font-weight: 200;
    letter-spacing: 0.1em; line-height: 2;
    color: #fff; max-width: 380px;
    margin-top: 2rem; white-space: pre-line;
    opacity: 0; transform: translateY(20px);
    animation: lfFadeUp 1s 0.9s forwards;
  }

  .lf-actions {
    display: flex; gap: 1.4rem; margin-top: 2.8rem; align-items: center;
    opacity: 0; transform: translateY(20px);
    animation: lfFadeUp 1s 1.15s forwards;
  }

  .lf-btn-primary {
    font-family: 'Cinzel', serif; font-size: 0.66rem; font-weight: 600;
    letter-spacing: 0.25em; text-transform: uppercase; text-decoration: none;
    color: #fff; background: #d47f11;
    padding: 1rem 2.4rem; position: relative; overflow: hidden;
    transition: color 0.4s; display: inline-block;
  }
  .lf-btn-primary::before {
    content: ''; position: absolute; inset: 0; background: #0d0d0d;
    transform: scaleX(0); transform-origin: right; transition: transform 0.4s ease;
  }
  .lf-btn-primary:hover { color: #d47f11; }
  .lf-btn-primary:hover::before { transform: scaleX(1); transform-origin: left; }
  .lf-btn-primary span { position: relative; z-index: 1; }

  .lf-btn-ghost {
    font-family: 'Jost', sans-serif;
    font-size: 0.7rem; font-weight: 300; letter-spacing: 0.2em;
    text-transform: uppercase; text-decoration: none;
    color: rgba(245,240,232,0.58);
    display: flex; align-items: center; gap: 0.7rem; transition: color 0.3s;
  }
  .lf-btn-ghost svg { transition: transform 0.3s; }
  .lf-btn-ghost:hover { color: #d47f11; }
  .lf-btn-ghost:hover svg { transform: translateX(5px); }

  /* ── COUNTER ── */
  .lf-counter {
    position: absolute; bottom: 4.5rem; left: 8vw; z-index: 10;
    display: flex; align-items: center; gap: 1.2rem;
    opacity: 0; animation: lfFadeUp 1s 1.4s forwards;
  }
  .lf-counter-cur {
    font-family: 'Cormorant Garamond', serif; font-size: 2.2rem;
    font-weight: 300; color: #d47f11; line-height: 1;
  }
  .lf-counter-sep { width: 38px; height: 1px; background: rgba(201,168,76,0.32); }
  .lf-counter-tot {
    font-family: 'Cormorant Garamond', serif; font-size: 1rem;
    font-weight: 300; color: rgba(245,240,232,0.28);
    align-self: flex-end; margin-bottom: 4px;
  }

  /* ── DOTS ── */
  .lf-dots {
    position: absolute; bottom: 4.5rem; right: 8vw; z-index: 10;
    display: flex; flex-direction: column; gap: 0.7rem;
    opacity: 0; animation: lfFadeIn 1s 1.5s forwards;
  }
  .lf-dot {
    width: 2px; height: 24px; background: rgba(201,168,76,0.2);
    cursor: pointer; transition: background 0.4s, height 0.4s;
    position: relative; overflow: hidden; border: none; outline: none;
  }
  .lf-dot.active { height: 46px; background: rgba(201,168,76,0.22); }
  .lf-dot-fill {
    position: absolute; top: 0; left: 0; right: 0;
    background: #d47f11; height: 0%;
    animation: lfDotFill 5s linear forwards;
  }

  

  /* ── KEYFRAMES ── */
  @keyframes lfFadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes lfFadeIn {
    to { opacity: 1; }
  }
  @keyframes lfDotFill {
    from { height: 0%; } to { height: 100%; }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .lf-headline { max-width: 85%; }
    .lf-accent { display: none; }
  }
  /* ── PRACTICE AREAS MODAL ── */
  .lf-modal-backdrop {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(5,5,5,0.92);
    backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; animation: lfFadeIn 0.35s forwards;
    padding: 2rem;
  }
  .lf-modal {
    position: relative;
    background: #0f0f0f;
    border: 1px solid rgba(201,168,76,0.18);
    width: 100%; max-width: 900px;
    max-height: 88vh; overflow-y: auto;
    padding: 3.5rem 4rem;
    transform: translateY(24px);
    animation: lfFadeUp 0.4s 0.05s forwards;
  }
  .lf-modal::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 60px; height: 2px; background: #F95738;
  }
  .lf-modal-close {
    position: absolute; top: 1.6rem; right: 1.8rem;
    background: none; border: none; cursor: pointer;
    color: rgba(245,240,232,0.4); font-size: 1.4rem;
    line-height: 1; transition: color 0.2s;
  }
  .lf-modal-close:hover { color: #d47f11; }
  .lf-modal-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 0.62rem; font-weight: 300; letter-spacing: 0.38em;
    color: #d47f11; text-transform: uppercase; margin-bottom: 0.7rem;
  }
  .lf-modal-title {
    font-family: 'Cormorant Garamond', serif; font-weight: 300;
    font-size: clamp(2rem, 4vw, 3rem);
    color: #f5f0e8; line-height: 1.1; margin-bottom: 2.8rem;
  }
  .lf-modal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1px;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.1);
  }
  .lf-modal-card {
    background: #0f0f0f;
    padding: 1.6rem 1.8rem;
    text-decoration: none;
    display: block;
    transition: background 0.25s;
    position: relative;
  }
  .lf-modal-card::after {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px; background: #d47f11;
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.3s ease;
  }
  .lf-modal-card:hover { background: #161616; }
  .lf-modal-card:hover::after { transform: scaleX(1); }
  .lf-modal-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.72rem; color: rgba(201,168,76,0.3);
    margin-bottom: 0.6rem; display: block;
  }
  .lf-modal-card-name {
    font-family: 'Cinzel', serif;
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em;
    color: #f5f0e8; text-transform: uppercase;
    margin-bottom: 0.5rem; display: block;
    transition: color 0.25s;
  }
  .lf-modal-card:hover .lf-modal-card-name { color: #d47f11; }
  .lf-modal-card-desc {
    font-family: 'Jost', sans-serif;
    font-size: 0.7rem; font-weight: 200; letter-spacing: 0.06em;
    color: rgba(245,240,232,0.38); line-height: 1.7;
  }
  .lf-modal-footer {
    margin-top: 2.4rem;
    display: flex; align-items: center; gap: 1.4rem;
  }

  @media (max-width: 680px) {
    .lf-headline { max-width: 100%; font-size: clamp(2.4rem, 10vw, 3.5rem); }
    .lf-nav { display: none; }
    .lf-stats { display: none; }
    .lf-scroll { display: none; }
    .lf-deco-line { display: none; }
    .lf-sub { max-width: 100%; }
    .lf-counter { bottom: 2rem; }
    .lf-dots { bottom: 2rem; }
  }
`;

function ArrowIcon() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <path
        d="M1 5h16M12 1l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [dotKey, setDotKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Prevent body scroll when either modal is open
  useEffect(() => {
    document.body.style.overflow = (modalOpen || bookingOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen, bookingOpen]);

  const goTo = useCallback(
    (index) => {
      setCurrent((index + slides.length) % slides.length);
      setDotKey((k) => k + 1);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <>
      <style>{globalStyles}</style>

      <section className="lf-hero">

        {/* ── SLIDES (real images) ── */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`lf-slide${i === current ? " active" : ""}`}
          >
            <div
              className="lf-slide-img"
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="lf-slide-overlay" />
            <div className="lf-grid" />
          </div>
        ))}

        {/* ── DECORATIVE LINES ── */}
        <div className="lf-deco-line" style={{ left: "7vw" }} />
        <div className="lf-deco-line" style={{ right: "7vw" }} />

        {/* ── ACCENT FRAME ── */}
        <div className="lf-accent" />

        {/* ── SLIDE TEXT ── */}
        <div className="lf-text-wrap">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`lf-text-item${i === current ? " active" : ""}`}
            >
              <div className="lf-eyebrow">
                <div className="lf-eyebrow-line" />
                <span className="lf-eyebrow-text">{s.eyebrow}</span>
              </div>

              <h1 className="lf-headline">
                {s.headline.map((line, li) => (
                  <span key={li}>
                    {li === s.italicLine ? <em>{line}</em> : line}
                    {li < s.headline.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="lf-sub">{s.sub}</p>

              <div className="lf-actions">
                <button
                  className="lf-btn-primary"
                  style={{ background: "#d47f11", border: "none", cursor: "pointer" }}
                  onClick={() => setBookingOpen(true)}
                >
                  <span>Book Consultation</span>
                </button>
                <button
                  className="lf-btn-ghost"
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onClick={() => setModalOpen(true)}
                >
                  Explore Practice Areas <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── COUNTER ── */}
        <div className="lf-counter">
          <span className="lf-counter-cur">
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="lf-counter-sep" />
          <span className="lf-counter-tot">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── DOTS ── */}
        <div className="lf-dots">
          {slides.map((_, i) => (
            <button
              key={i === current ? `dot-${i}-${dotKey}` : i}
              className={`lf-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && <div className="lf-dot-fill" />}
            </button>
          ))}
        </div>

      </section>

      {/* ── PRACTICE AREAS MODAL ── */}
      {modalOpen && (
        <div
          className="lf-modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="lf-modal">
            <button className="lf-modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
              ✕
            </button>
            <p className="lf-modal-eyebrow">Gratia Legalities</p>
            <h2 className="lf-modal-title">Our Practice Areas</h2>

            <div className="lf-modal-grid">
              {PRACTICE_AREAS.map((area, i) => (
                <Link
                  key={i}
                  to={area.path}
                  className="lf-modal-card"
                  onClick={() => setModalOpen(false)}
                >
                  <span className="lf-modal-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lf-modal-card-name">{area.title}</span>
                  <span className="lf-modal-card-desc">{area.desc}</span>
                </Link>
              ))}
            </div>

            <div className="lf-modal-footer">
              <button
                className="lf-btn-ghost"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                onClick={() => setModalOpen(false)}
              >
                Close <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ── BOOKING MODAL ── */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}