import { useState } from "react";
import {
  Scale,
  Landmark,
  Briefcase,
  Users,
  ScrollText,
  Handshake,
  Building2,
  ShieldCheck,
  Eye,
  Brain,
  Lock,
  ArrowRight,
  Phone,
  ChevronDown,
} from "lucide-react";
import Footer from "../components/footer";


const practiceAreas = [
  {
    Icon: Scale,
    title: "Civil Litigation",
    description:
      "Representation in a wide range of civil disputes, including contractual disputes, debt recovery matters, property disputes, and enforcement of legal rights.",
  },
  {
    Icon: Landmark,
    title: "Real Estate & Property Disputes",
    description:
      "Matters involving land ownership disputes, title conflicts, trespass, recovery of possession, landlord and tenant matters, estate-related disputes, and property enforcement actions.",
  },
  {
    Icon: Briefcase,
    title: "Commercial Litigation",
    description:
      "Representation of businesses, investors, and entrepreneurs in commercial disputes arising from business transactions, partnerships, contractual relationships, and commercial obligations.",
  },
  {
    Icon: Users,
    title: "Employment & Labour Matters",
    description:
      "Advisory and representation in employment-related disputes involving employers, employees, workplace obligations, and labour matters.",
  },
  {
    Icon: ScrollText,
    title: "Family & Probate Matters",
    description:
      "Legal representation and advisory services relating to probate administration, estate matters, letters of administration, wills, and family-related legal issues.",
  },
  {
    Icon: Handshake,
    title: "Alternative Dispute Resolution",
    description:
      "Where appropriate, we assist clients in resolving disputes through negotiation, mediation, and arbitration as efficient alternatives to litigation.",
  },
  {
    Icon: Building2,
    title: "Regulatory & Administrative Matters",
    description:
      "Representation and engagement with regulatory bodies, government agencies, and administrative authorities where legal intervention is required.",
  },
];

const commitments = [
  { Icon: Phone,       label: "Responsive",   sub: "We keep you informed at every stage of your matter." },
  { Icon: Brain,       label: "Strategic",    sub: "Every matter is approached with careful analysis and planning." },
  { Icon: Lock,        label: "Confidential", sub: "All client matters are handled with absolute discretion." },
  { Icon: ShieldCheck, label: "Diligent",     sub: "Unwavering dedication to protecting your interests." },
];

const stats = [
  { value: "7+", label: "Years of Practice" },
  { value: "7",   label: "Practice Areas" },
  { value: "38+", label: "Matters Handled" },
  { value: "99%", label: "Client Commitment" },
];

export default function GratiaLegalities() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen font-sans"
    >
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" 
        style={{
    backgroundImage: "url('/assets/legalities.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 bg-black/70" 
        />
        {/* Orange glow top-left */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary opacity-[0.08] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-33 pb-0">
          <div className="grid lg:grid-cols-2 gap-16 items-end">

            {/* Left — headline */}
            <div className="pb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-primary" />
                <span className="text-primary text-xs uppercase tracking-[0.35em] font-medium">
                  Experienced Legal Practice
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl text-white leading-[1.04] mb-7">
                Trusted Legal Counsel<br />
                When It Matters{" "}
                <span className="relative inline-block">
                  <span className="text-primary">Most.</span>
                </span>
              </h1>

              <p className="text-white text-lg leading-relaxed mb-10 max-w-lg">
                Gratia Legalities provides strategic legal representation, dispute resolution,
                advocacy, and solicitor services to clients requiring formal legal intervention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
                >
                  Seek Representation <ArrowRight size={15} />
                </a>
                <a
                  href="#practice"
                  className="inline-flex items-center gap-2 border border-info-600 hover:border-primary text-info-200 hover:text-primary px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
                >
                  Practice Areas <ChevronDown size={15} />
                </a>
              </div>
            </div>

            {/* Right — stats panel */}
            <div className="hidden lg:block pb-20">
              <div className="border border-info-700 bg-[#05014a] bg-opacity-60 p-8">
                <p className="text-info-400 text-xs uppercase tracking-[0.3em] mb-8 font-medium">
                  At a Glance
                </p>
                <div className="grid grid-cols-2 gap-px bg-info-700">
                  {stats.map((s, i) => (
                    <div key={i} className="bg-[#05014a] bg-opacity-80 p-6">
                      <p className="font-heading text-4xl text-primary font-bold mb-1">{s.value}</p>
                      <p className="text-white text-xs uppercase tracking-widest">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-start gap-3">
                  <Scale size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-white text-sm leading-relaxed">
                    Protecting clients' rights, interests, businesses, and assets through strategic
                    legal representation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="h-px bg-info-700 opacity-60" />
      </section>

      {/* ── INTRO BAND ── */}
      <section className="bg-[#05014a] border-b border-info-700">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-info-100 text-base leading-relaxed">
              While Gratia Corporate Consult focuses on helping clients structure, protect, and manage
              their businesses proactively,{" "}
              <span className="text-white font-semibold">Gratia Legalities</span> provides legal
              representation and advocacy where disputes, enforcement actions, or formal legal
              proceedings arise.
            </p>
          </div>
          <div>
            <p className="text-white text-base leading-relaxed">
              Our goal is to protect our clients' rights, interests, businesses, investments, and
              assets through strategic, professional, and effective legal representation.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section id="practice" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
                What We Handle
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900">
              Our Practice Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {practiceAreas.map((area, i) => {
              const { Icon } = area;
              const hovered = hoveredCard === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 transition-colors cursor-default ${hovered ? "bg-info-900" : "bg-white"}`}
                >
                  <div className={`mb-5 transition-colors ${hovered ? "text-primary" : "text-info-700"}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`font-heading text-lg font-semibold mb-3 transition-colors ${
                      hovered ? "text-primary" : "text-neutral-900"
                    }`}
                  >
                    {area.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      hovered ? "text-info-300" : "text-neutral-500"
                    }`}
                  >
                    {area.description}
                  </p>
                  <div
                    className={`mt-6 h-px transition-all duration-300 ${
                      hovered ? "bg-primary w-12" : "bg-neutral-200 w-6"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LITIGATION TEAM ── */}
      <section id="team" className="bg-[#05014a] border-y border-info-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">The Team</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight">
              Our Litigation Team
            </h2>
            <p className="text-white leading-relaxed mb-4">
              Gratia Legalities works with a dedicated team of experienced legal practitioners
              committed to delivering professional advocacy and effective representation across
              various practice areas.
            </p>
            <p className="text-white leading-relaxed">
              We recognise that every dispute is unique. Accordingly, each matter is approached with
              careful analysis, strategic planning, and a commitment to achieving the most practical
              outcome for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {commitments.map(({ Icon, label, sub }, i) => (
              <div
                key={i}
                className="border border-info-700 hover:border-primary p-6 transition-colors group"
              >
                <Icon size={22} className="text-primary mb-3" strokeWidth={1.5} />
                <p className="text-white font-heading text-lg font-semibold mb-2">{label}</p>
                <p className="text-white text-sm leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">Our Promise</span>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl text-black mb-8">
              Our Commitment
            </h2>
            <p className="text-black text-lg leading-relaxed mb-5">
              At Gratia Legalities, we understand that legal disputes can affect businesses,
              investments, families, and livelihoods.
            </p>
            <p className="text-black leading-relaxed">
              Our commitment is to provide responsive, strategic, and professional legal
              representation while keeping our clients informed throughout the process. We approach
              every matter with diligence, integrity, confidentiality, and an unwavering dedication
              to protecting our clients' interests.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-[#05014a] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-primary opacity-40" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">Get In Touch</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-white mb-6 max-w-3xl mx-auto leading-tight">
            Need Legal Representation?
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are involved in a dispute, require legal enforcement of your rights, need
            representation before a court or tribunal, or require strategic legal guidance on a
            contentious matter, our team is available to assist.
          </p>
          <a
            href="mailto:info@gratiacorporateconsult.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-10 py-4 text-sm font-medium uppercase tracking-widest transition-colors"
          >
            Contact Our Team <ArrowRight size={15} />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary opacity-20" />
      </section>

    <Footer />
    </div>

  );
}