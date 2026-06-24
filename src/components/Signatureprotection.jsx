import { useState, useEffect, useCallback } from "react";
import {
  Stethoscope,
  ClipboardCheck,
  ShieldCheck,
  Briefcase,
  X,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Footprints,
} from "lucide-react";

// ── DATA ────────────────────────────────────────────────────────────────────

const solutions = [
  {
    id: "health-check",
    Icon: Stethoscope,
    title: "Legal Health Check",
    teaser:
      "A comprehensive legal audit that uncovers compliance gaps, contractual weaknesses, and operational risks before they become costly problems.",
    badge: "Most Popular",
    color: "from-primary/10 to-primary/5",
    borderHover: "hover:border-primary",
    content: {
      what: `The GCC Legal Health Check is a comprehensive legal assessment designed to evaluate the legal health of your business, identify hidden risks, and ensure that your business is structured, protected, and positioned for sustainable growth.

Just as regular health checks help detect medical issues before they become serious, our Legal Health Check helps uncover legal, compliance, contractual, governance, and operational vulnerabilities before they result in disputes, penalties, financial losses, or business disruption.`,

      whoFor: [
        "Startups and emerging businesses",
        "Small and medium-sized enterprises (SMEs)",
        "Online and digital businesses",
        "Growing companies preparing for expansion",
        "Businesses seeking investment or funding",
        "Family-owned businesses",
        "Companies undergoing restructuring",
        "Organizations seeking stronger compliance and governance systems",
      ],

      problems: [
        "Compliance deficiencies",
        "Weak or missing contracts",
        "Governance and structural issues",
        "Employment and HR vulnerabilities",
        "Intellectual property risks",
        "Data protection and privacy concerns",
        "Regulatory exposure",
        "Business practices that may expose the company to unnecessary liability",
      ],

      benefits: [
        "Identify legal risks before they become costly problems",
        "Strengthen compliance and governance",
        "Improve investor and stakeholder confidence",
        "Protect business assets and intellectual property",
        "Reduce exposure to disputes and regulatory sanctions",
        "Build a stronger legal foundation for growth",
        "Gain clarity on priority legal issues requiring attention",
        "Operate with greater confidence and peace of mind",
      ],

      receive: [
        "A comprehensive Legal Health Check Report",
        "Identification of key legal and compliance risks",
        "A risk assessment summary",
        "Practical recommendations tailored to your business",
        "A prioritized action plan for addressing identified gaps",
        "A consultation session to discuss findings and next steps",
      ],

      howItWorks: [
        {
          step: "Initial Consultation",
          desc: "We take time to understand your business, operations, goals, and concerns.",
        },
        {
          step: "Assessment & Review",
          desc: "Relevant documents, contracts, policies, registrations, and compliance obligations are reviewed.",
        },
        {
          step: "Findings & Recommendations",
          desc: "We provide a detailed report outlining our findings, identified risks, and practical recommendations.",
        },
        {
          step: "Implementation Support",
          desc: "Where required, we assist with implementing recommendations and strengthening your legal framework.",
        },
      ],

      faqs: [
        {
          q: "Is the Legal Health Check only for registered companies?",
          a: "No. The service is suitable for startups, business name owners, companies, NGOs, and other organizations.",
        },
        {
          q: "How often should a business conduct a Legal Health Check?",
          a: "We recommend conducting a Legal Health Check annually or whenever there are significant changes within the business.",
        },
        {
          q: "Will I receive a report?",
          a: "Yes. A comprehensive report containing our findings and recommendations will be provided.",
        },
        {
          q: "Does the service include implementation?",
          a: "Implementation support may be provided as a separate engagement where required.",
        },
        {
          q: "How long does the process take?",
          a: "The timeline depends on the size and complexity of the business and will be discussed at the commencement of the engagement.",
        },
      ],

      cta: {
        heading: "Is Your Business Legally Healthy?",
        sub: "Many business owners only discover legal gaps when faced with disputes, regulatory issues, failed transactions, or investor scrutiny. A GCC Legal Health Check helps you identify risks early and position your business for sustainable growth.",
        label: "Book a Legal Health Check",
      },
    },
  },

  {
    id: "due-diligence",
    Icon: ClipboardCheck,
    title: "Due Diligence Passport™",
    teaser:
      "A structured verification and risk assessment system that helps investors and buyers make informed decisions before committing funds.",
    badge: null,
    color: "from-info-100 to-info-50",
    borderHover: "hover:border-info-400",
    content: {
      what: `The GCC Due Diligence Passport™ is a proprietary verification and transaction support solution designed to help individuals, businesses, and investors make informed decisions before committing funds to a property, business, investment opportunity, partnership, or major transaction.

By combining thorough verification, risk assessment, and structured record management, the Due Diligence Passport™ provides clients with greater clarity, confidence, and accountability throughout the decision-making process. More than a traditional due diligence exercise, it provides a documented pathway to informed investment and transaction decisions.`,

      whoFor: [
        "Property buyers and investors",
        "Real estate developers",
        "Land banking investors",
        "Businesses acquiring assets or interests",
        "Joint venture partners",
        "Investors evaluating opportunities",
        "Individuals making significant financial commitments",
        "Organizations seeking greater transaction certainty",
      ],

      problems: [
        "Uncertainty surrounding ownership and title",
        "Hidden legal and regulatory risks",
        "Incomplete or inaccurate transaction information",
        "Poor record management",
        "Investment decisions made without proper verification",
        "Difficulties retrieving transaction records when needed",
        "Risks that may affect future value, development, transferability, or profitability",
      ],

      benefits: [
        "Make informed decisions with confidence",
        "Reduce exposure to avoidable risks",
        "Protect investments and capital",
        "Gain clarity before committing funds",
        "Maintain organized transaction records",
        "Improve transaction transparency",
        "Support future reviews, financing, transfers, and investment decisions",
        "Preserve important transaction information for easy reference",
      ],

      receive: [
        "A GCC Due Diligence Passport™",
        "A Due Diligence Findings Report",
        "Verification and Risk Assessment Summary",
        "Professional observations and recommendations",
        "Organized access to relevant transaction information and records",
        "A consultation session to discuss findings and next steps",
      ],

      howItWorks: [
        {
          step: "Consultation",
          desc: "We obtain an understanding of the proposed transaction, investment, or opportunity.",
        },
        {
          step: "Verification & Assessment",
          desc: "Relevant information and documentation are reviewed and assessed using GCC's proprietary due diligence framework.",
        },
        {
          step: "Findings & Recommendations",
          desc: "Our findings, observations, identified risks, and recommendations are documented and presented to the client.",
        },
        {
          step: "Passport Issuance",
          desc: "The client receives their GCC Due Diligence Passport™ together with the relevant records and information associated with the engagement.",
        },
      ],

      faqs: [
        {
          q: "Is the Due Diligence Passport™ only for property transactions?",
          a: "No. While commonly used for property transactions, it may also be applied to businesses, investments, partnerships, acquisitions, and other significant transactions.",
        },
        {
          q: "Does the Due Diligence Passport™ guarantee that a transaction is risk-free?",
          a: "No. The purpose of due diligence is to identify and assess discoverable risks and provide information that supports informed decision-making.",
        },
        {
          q: "Can I use the Due Diligence Passport™ years after the transaction?",
          a: "Yes. The Passport is designed to serve as a structured reference point for information and records connected to the engagement.",
        },
        {
          q: "What happens if risks are identified?",
          a: "Identified risks do not automatically mean a transaction should be abandoned. In many cases, risks can be managed, mitigated, negotiated, or addressed before completion.",
        },
        {
          q: "Why is due diligence important?",
          a: "The cost of verification is often significantly lower than the cost of discovering a problem after funds have been committed.",
        },
      ],

      cta: {
        heading: "Before You Commit, Verify.",
        sub: "Whether you are acquiring property, making an investment, entering a partnership, or pursuing a significant transaction — informed decisions begin with proper verification.",
        label: "Request a Due Diligence Passport™",
      },
    },
  },

  {
    id: "legal-shield",
    Icon: ShieldCheck,
    title: "Gratia Legal Shield System™",
    teaser:
      "An ongoing legal protection framework providing proactive oversight, risk management, and strategic guidance so your business never operates blind.",
    badge: "Flagship",
    color: "from-primary/10 to-primary/5",
    borderHover: "hover:border-primary",
    content: {
      what: `The Gratia Legal Shield System™ is GCC's proprietary business protection solution designed to help businesses operate with greater confidence, reduce legal exposure, and build stronger foundations for sustainable growth.

Rather than waiting until problems arise, the Legal Shield System™ provides businesses with ongoing access to strategic legal support and business protection resources designed to help them navigate risks, opportunities, and important decisions more effectively. The system is founded on GCC's philosophy of prevention, protection, and proactive legal guidance.`,

      whoFor: [
        "Startups and emerging businesses",
        "Small and medium-sized enterprises (SMEs)",
        "Growing companies",
        "Online and digital businesses",
        "Real estate companies and developers",
        "Family-owned businesses",
        "Professional service firms",
        "Organizations seeking ongoing legal support and business protection",
      ],

      problems: [
        "Uncertainty regarding legal obligations",
        "Exposure to avoidable risks",
        "Compliance concerns",
        "Lack of ongoing legal guidance",
        "Business decisions made without professional legal input",
        "Inadequate business protection measures",
        "Legal challenges arising from poor planning",
      ],

      benefits: [
        "Make informed decisions with confidence",
        "Reduce exposure to avoidable legal risks",
        "Strengthen their legal and compliance position",
        "Access trusted legal guidance when needed",
        "Protect business interests and investments",
        "Improve operational confidence",
        "Support sustainable business growth",
        "Focus on growth while maintaining peace of mind",
      ],

      receive: [
        "Ongoing legal advisory support",
        "Business protection guidance",
        "Legal documentation assistance",
        "Compliance support",
        "Professional consultations",
        "Priority access to GCC services",
        "Business-focused legal resources",
      ],

      howItWorks: [
        {
          step: "Assessment",
          desc: "We evaluate your business's current legal position, risk profile, and protection needs.",
        },
        {
          step: "Plan Selection",
          desc: "We work with you to determine the most suitable protection plan for your business size and needs.",
        },
        {
          step: "Onboarding",
          desc: "Your business is onboarded onto the Legal Shield System™ with a structured orientation.",
        },
        {
          step: "Ongoing Support",
          desc: "You receive continuous access to legal guidance, support, and resources throughout your engagement.",
        },
      ],

      faqs: [
        {
          q: "Is the Gratia Legal Shield System™ a legal retainer?",
          a: "The Legal Shield System™ is a business protection solution that provides ongoing access to legal guidance, support, and resources. Depending on the selected plan, certain support services may be included.",
        },
        {
          q: "Is it suitable for small businesses?",
          a: "Yes. The system is designed to support businesses at different stages of growth.",
        },
        {
          q: "Can the protection plan be tailored to my business?",
          a: "Yes. We recognize that every business has unique needs and may require different levels of support.",
        },
        {
          q: "Does the system include litigation services?",
          a: "Litigation, court appearances, and dispute resolution services are generally handled as separate engagements unless otherwise agreed.",
        },
        {
          q: "Why is ongoing legal protection important?",
          a: "Many legal issues can be prevented or minimized through early guidance, proper planning, and informed decision-making.",
        },
      ],

      cta: {
        heading: "Protect Your Business Before Problems Arise.",
        sub: "Strong businesses are built on strong foundations. The Gratia Legal Shield System™ helps businesses access ongoing legal guidance, strengthen their position, and navigate growth with confidence.",
        label: "Schedule a Consultation",
      },
    },
  },

  {
    id: "retainers",
    Icon: Briefcase,
    title: "Business Legal Retainers",
    teaser:
      "Dedicated legal support giving your business continuous access to advisory, contract review, and compliance guidance — without the uncertainty of ad-hoc engagement.",
    badge: null,
    color: "from-info-100 to-info-50",
    borderHover: "hover:border-info-400",
    content: {
      what: `GCC Business Legal Retainers provide businesses with dedicated, ongoing legal support through a structured retainer arrangement. Rather than engaging legal counsel on a reactive, case-by-case basis, a retainer ensures that professional legal guidance is consistently available when your business needs it.

Our retainer arrangements are designed to give business owners, executives, and teams the confidence of having trusted legal support in place — helping them make informed decisions, review and manage legal documentation, navigate compliance requirements, and handle legal matters efficiently.`,

      whoFor: [
        "Businesses requiring regular contract review and drafting",
        "Companies with ongoing compliance obligations",
        "Organizations managing multiple transactions or relationships",
        "Businesses seeking consistent legal advisory support",
        "Entrepreneurs who want reliable access to legal guidance",
        "Companies looking to reduce the cost and uncertainty of ad-hoc legal engagement",
        "Businesses undergoing growth, expansion, or restructuring",
        "Organizations that value proactive legal risk management",
      ],

      problems: [
        "Uncertainty about when and how to engage legal counsel",
        "High costs associated with reactive, ad-hoc legal engagement",
        "Delays in obtaining legal advice when decisions need to be made",
        "Inconsistent legal support across different matters",
        "Legal decisions made without adequate professional guidance",
        "Gaps in contract review and documentation management",
        "Compliance risks arising from lack of ongoing legal oversight",
      ],

      benefits: [
        "Consistent access to trusted legal advisory support",
        "Predictable legal support costs",
        "Faster response times for legal queries and matters",
        "Proactive identification of legal risks and opportunities",
        "Stronger contract and documentation management",
        "Improved compliance and governance",
        "Greater confidence in business decisions",
        "A trusted legal partner who understands your business",
      ],

      receive: [
        "Dedicated legal advisory support",
        "Contract review and drafting assistance",
        "Compliance guidance and support",
        "Priority access to GCC's legal team",
        "Regular legal updates relevant to your business",
        "Structured legal support tailored to your retainer arrangement",
      ],

      howItWorks: [
        {
          step: "Initial Discussion",
          desc: "We discuss your business's legal needs, volume of matters, and the level of support required.",
        },
        {
          step: "Retainer Structuring",
          desc: "A retainer arrangement is structured to match your business's specific requirements and budget.",
        },
        {
          step: "Engagement Commencement",
          desc: "Your retainer begins and you gain access to dedicated legal support from GCC's team.",
        },
        {
          step: "Ongoing Advisory",
          desc: "Legal support, contract review, compliance guidance, and advisory services are provided throughout the retainer period.",
        },
      ],

      faqs: [
        {
          q: "What is included in a Business Legal Retainer?",
          a: "The scope of a retainer is tailored to your business needs and will be clearly set out in your retainer agreement. Common inclusions are legal advisory, contract review, compliance support, and priority access to GCC's team.",
        },
        {
          q: "How is a retainer different from engaging a lawyer for a specific matter?",
          a: "A retainer provides ongoing, structured access to legal support rather than engaging counsel reactively for individual matters. It ensures legal guidance is available when you need it.",
        },
        {
          q: "Can the retainer scope be adjusted over time?",
          a: "Yes. Retainer arrangements can be reviewed and adjusted to reflect changes in your business's needs.",
        },
        {
          q: "Does a retainer cover litigation?",
          a: "Retainers typically cover advisory, documentation, and compliance support. Litigation and court representation are generally handled as separate engagements.",
        },
        {
          q: "How do I know which retainer arrangement is right for my business?",
          a: "Our team will work with you to understand your legal needs and recommend a suitable arrangement during an initial consultation.",
        },
      ],

      cta: {
        heading: "Ready for Consistent Legal Support?",
        sub: "Stop engaging legal counsel reactively. A GCC Business Legal Retainer gives your business the confidence of having trusted legal support in place — consistently, predictably, and professionally.",
        label: "Enquire About a Retainer",
      },
    },
  },
];

// ── FAQ ACCORDION ITEM ───────────────────────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-neutral-800 font-medium text-sm leading-snug group-hover:text-primary transition-colors">
          {q}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-primary shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-neutral-400 shrink-0 group-hover:text-primary transition-colors" />
        )}
      </button>
      {open && (
        <p className="text-neutral-500 text-sm leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}

// ── DRAWER ───────────────────────────────────────────────────────────────────
function Drawer({ solution, onClose }) {
  const { Icon, title, content } = solution;

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel — slides in from right */}
      <div className="relative ml-auto w-full max-w-3xl h-full bg-white flex flex-col shadow-2xl animate-slide-in">

        {/* Sticky header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon size={18} className="text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-lg font-semibold text-neutral-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 hover:text-neutral-900"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10">

          {/* What It Is */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              What It Is
            </h3>
            {content.what.split("\n\n").map((p, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed text-sm mb-3">{p}</p>
            ))}
          </div>

          {/* Who It's For + Problems side by side */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                Who It's For
              </h3>
              <ul className="space-y-2">
                {content.whoFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                Problems It Solves
              </h3>
              <ul className="space-y-2">
                {content.problems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Benefits
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {content.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-600">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You'll Receive */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              What You Will Receive
            </h3>
            <ul className="space-y-2">
              {content.receive.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                  <ArrowRight size={13} className="text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5">
              How It Works
            </h3>
            <div className="space-y-0">
              {content.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-4">
                  {/* Connector line */}
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    {i < content.howItWorks.length - 1 && (
                      <div className="w-px flex-1 bg-primary/20 my-1" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="font-semibold text-neutral-800 text-sm mb-1">{step.step}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Frequently Asked Questions
            </h3>
            <div>
              {content.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#05014a] rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl text-white font-bold mb-3">
              {content.cta.heading}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              {content.cta.sub}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-colors"
            >
              {content.cta.label} <ArrowRight size={14} />
            </a>
          </div>

          {/* Bottom padding */}
          <div className="h-4" />
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0.6; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
}

// ── MAIN SECTION ─────────────────────────────────────────────────────────────
export default function SignatureProtection() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <section className="bg-neutral-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium">
                Proprietary Solutions
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-neutral-900 mb-5 leading-tight">
              GCC Signature Business<br />Protection Solutions
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed">
              Beyond traditional legal services, GCC has developed proprietary business protection
              solutions designed to help business owners, investors, and organizations identify risks
              early, protect their interests, and make informed decisions with confidence.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map((sol) => {
              const { Icon } = sol;
              return (
                <div
                  key={sol.id}
                  className={`relative bg-white border border-neutral-200 ${sol.borderHover} rounded-2xl p-8 transition-all duration-200 group cursor-pointer hover:shadow-lg`}
                  onClick={() => setActive(sol)}
                >
                  {/* Badge */}
                  {sol.badge && (
                    <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {sol.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 group-hover:bg-primary/10 transition-colors flex items-center justify-center mb-5">
                    <Icon size={22} className="text-neutral-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {sol.teaser}
                  </p>

                  {/* Learn more */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowUpRight
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <p className="text-center text-neutral-400 text-xs mt-10 tracking-wide">
            Our assessments, recommendations, and support are informed by GCC's proprietary frameworks, methodologies, and professional experience.
          </p>
        </div>
      </section>

      {/* Drawer */}
      {active && <Drawer solution={active} onClose={close} />}
    </>
  );
}