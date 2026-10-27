import React, { useState } from "react";
import {
  Scale,
  Landmark,
  Briefcase,
  Users,
  ScrollText,
  Handshake,
  Building2,
  ShieldCheck,
  Brain,
  Lock,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "./bookingmodal";

const practiceAreas = [
  {
    Icon: Scale,
    title: "Civil Litigation",
    description:
      "Representation in a wide range of civil disputes, including contractual disputes, debt recovery matters, property disputes, and enforcement of legal rights.",
    tag: "Court Advocacy",
  },
  {
    Icon: Landmark,
    title: "Real Estate & Property Disputes",
    description:
      "Matters involving land ownership disputes, title conflicts, trespass, recovery of possession, landlord and tenant matters, and property enforcement actions.",
    tag: "Property Rights",
  },
  {
    Icon: Briefcase,
    title: "Commercial Litigation",
    description:
      "Representation of businesses, investors, and entrepreneurs in commercial disputes arising from business transactions, partnerships, and commercial obligations.",
    tag: "Business Disputes",
  },
  {
    Icon: Users,
    title: "Employment & Labour Matters",
    description:
      "Advisory and representation in employment-related disputes involving employers, employees, workplace obligations, and labour matters.",
    tag: "Workplace Law",
  },
  {
    Icon: ScrollText,
    title: "Family & Probate Matters",
    description:
      "Legal representation and advisory services relating to probate administration, estate matters, letters of administration, wills, and family-related legal issues.",
    tag: "Estate & Probate",
  },
  {
    Icon: Handshake,
    title: "Alternative Dispute Resolution",
    description:
      "Assisting clients in resolving disputes efficiently through structured negotiation, mediation, and arbitration as alternatives to prolonged litigation.",
    tag: "Mediation & ADR",
  },
  {
    Icon: Building2,
    title: "Regulatory & Administrative Matters",
    description:
      "Representation and engagement with regulatory bodies, government agencies, and administrative tribunals where formal legal intervention is required.",
    tag: "Regulatory Defense",
  },
];

const commitments = [
  {
    Icon: Phone,
    label: "Responsive",
    sub: "We keep you informed at every critical stage of your matter with absolute clarity.",
  },
  {
    Icon: Brain,
    label: "Strategic",
    sub: "Every dispute is approached with rigorous factual analysis and calculated planning.",
  },
  {
    Icon: Lock,
    label: "Confidential",
    sub: "All client disclosures and case strategies are guarded with utmost discretion.",
  },
  {
    Icon: ShieldCheck,
    label: "Diligent",
    sub: "Unwavering courtroom advocacy and dedication to protecting your rights and assets.",
  },
];

const stats = [
  { value: "7+", label: "Years of Practice" },
  { value: "7", label: "Litigation Areas" },
  { value: "38+", label: "Matters Handled" },
  { value: "99%", label: "Client Commitment" },
];

export default function LitigationSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative bg-[#030930] text-white py-24 overflow-hidden border-t border-white/10">
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HEADER & INTRO ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
                Litigation & Dispute Resolution
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Trusted Legal Counsel <br />
              <span className="text-primary">When It Matters Most.</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Beyond proactive corporate structuring, Gratia Legalities provides strategic legal
              representation, dispute resolution, advocacy, and solicitor services before courts,
              tribunals, and regulatory authorities across Nigeria.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-6">
                Litigation & Practice Track Record
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <p className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs text-white uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PRACTICE AREAS GRID ── */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.25em] font-bold mb-2">
                What We Handle
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Dispute & Courtroom Representation
              </h3>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Protecting clients&apos; rights, investments, commercial agreements, and real estate
              assets through targeted legal advocacy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => {
              const { Icon } = area;
              const isHovered = hoveredCard === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? "bg-white/10 border-primary shadow-xl shadow-primary/10 -translate-y-1"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isHovered
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary border border-primary/20"
                        }`}
                      >
                        <Icon size={24} strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium px-2.5 py-1 rounded bg-white/5">
                        {area.tag}
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold text-white mb-3">
                      {area.title}
                    </h4>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-primary font-medium tracking-wide">
                      Formal Representation
                    </span>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-xs text-white/80 hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      Consult <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── COMMITMENTS / TEAM PILLARS ── */}
        <div className="bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-bold">
                Our Advocacy Promise
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                The Principles Behind Every Matter
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Legal disputes can affect businesses, investments, families, and livelihoods. We
                approach each case with strategic foresight and unwavering dedication to achieve
                the most practical, enforceable outcome.
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-200">
                  Direct oversight by experienced practitioners
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {commitments.map(({ Icon, label, sub }, i) => (
                <div
                  key={i}
                  className="bg-black/30 border border-white/10 hover:border-primary/50 rounded-2xl p-6 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h5 className="font-heading text-lg font-bold text-white mb-1.5">{label}</h5>
                  <p className="text-white text-xs leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CALL TO ACTION BANNER ── */}
        <div className="text-center max-w-3xl mx-auto pt-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Strategic Legal Representation?
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Whether you are navigating a commercial contract dispute, property conflict, or need
            representation before a court or regulatory tribunal, our team is ready to step in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-lg shadow-primary/20"
            >
              Seek Legal Representation <ArrowRight size={16} />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-primary text-gray-200 hover:text-white px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
