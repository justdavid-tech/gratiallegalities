import React from 'react';
import AboutHero from '../components/abouthero'
import { 
  Target, 
  Shield, 
  Users, 
  Building,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

// ─── Brand tokens ───────────────────────────────────────────
const NAVY  = '#051c61';
const GOLD  = '#d47f11';
// ────────────────────────────────────────────────────────────

const About = () => {
  const coreValues = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Integrity First',
      description: 'We uphold the highest ethical standards in every case, ensuring transparency and honesty in all our dealings.'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Excellence',
      description: 'Pursuing the highest standards in legal practice, constantly evolving to deliver exceptional results.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Client-Centered',
      description: 'Your success is our ultimate measure. We tailor strategies to your unique needs and goals.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: 'Compassion',
      description: 'Understanding with empathy and care, guiding you through challenges with support and respect.'
    }
  ];

  const serviceStats = [
    { icon: <Scale className="w-5 h-5" />, value: '7+', label: 'Years Experience' },
    { icon: <CheckCircle className="w-5 h-5" />, value: '96%', label: 'Success Rate' },
    { icon: <Building className="w-5 h-5" />, value: '11', label: 'Practice Areas' },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <AboutHero />

        {/* ── Our Journey ──────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ background: `${NAVY}10`, color: NAVY }}>
              Who We Are
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black leading-tight mb-4"
              style={{ color: NAVY }}>
              Our <span style={{ color: GOLD }}>Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2022, Gratial Legalities began with a simple yet powerful vision — to provide exceptional legal
              services that prioritise client success above all else. Based in Abuja, Nigeria, we've built a reputation
              for delivering strategic legal solutions tailored to our clients' unique needs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine legal expertise with a personal touch, ensuring that every client receives the attention and
              commitment they deserve. Our growth has been deliberate, focusing on quality of service over volume.
            </p>
            <div className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
              style={{ color: GOLD }}>
              <CheckCircle className="w-4 h-4" />
              Serving clients with dedication since 2022
            </div>
          </div>
        </div>

        {/* ── Leadership ───────────────────────────────────── */}
        <div className="bg-[#f9f9f7] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest"
                style={{ background: `${NAVY}10`, color: NAVY }}>
                Leadership
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black leading-tight"
                style={{ color: NAVY }}>
                Meet Our <span style={{ color: GOLD }}>Leadership</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Photo side */}
                <div className="relative min-h-[360px] flex items-center justify-center"
                  style={{ background: `${NAVY}08` }}>
                  {/* Replace the block below with an <img> when you have the photo */}
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${NAVY}15` }}>
                      <Users className="w-10 h-10" style={{ color: NAVY }} />
                    </div>
                    <p className="text-sm text-gray-400">Add CEO photo here</p>
                  </div>
                  {/* Gold accent bar on the right edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-1" style={{ background: GOLD }} />
                </div>

                {/* Info side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: GOLD }}>
                    Chief Executive Officer & Lead Counsel
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black mb-1" style={{ color: NAVY }}>
                    Barrister Grace Idoko
                  </h3>
                  <div className="w-12 h-1 rounded-full mb-6" style={{ background: GOLD }} />

                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                    <p>
                      Hi, I'm Grace Sani — a corporate and business lawyer and Principal Consultant at
                      Gratia Legalities and Gratia Corporate Consult. I work with entrepreneurs, companies,
                      and property investors to help them avoid legal pitfalls, structure their dealings
                      properly, and operate with confidence.
                    </p>
                    <p>
                      With over 7 years of legal expertise, I lead Gratial Legalities with a commitment to
                      excellence and client-focused service. My approach is simple: clear advice, practical
                      solutions, and genuine commitment to protecting your business interests.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold pt-5 border-t border-gray-100"
                    style={{ color: NAVY }}>
                    <CheckCircle className="w-4 h-4" style={{ color: GOLD }} />
                    Licensed to practice in Nigeria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Core Values ──────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest"
              style={{ background: `${NAVY}10`, color: NAVY }}>
              What Drives Us
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black leading-tight mb-4"
              style={{ color: NAVY }}>
              Our <span style={{ color: GOLD }}>Core Values</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and action at Gratial Legalities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5"
                style={{ '--hover-border': `${GOLD}50` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}50`}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#f3f4f6'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: `${NAVY}10` }}
                  onMouseEnter={e => e.currentTarget.style.background = `${NAVY}20`}
                >
                  <span style={{ color: NAVY }}>{value.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5 transition-colors duration-300"
                    style={{ color: NAVY }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mission & Vision ─────────────────────────────── */}
        <div className="bg-[#f9f9f7] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Mission — navy card */}
              <div className="rounded-2xl p-8 md:p-10" style={{ background: NAVY }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${GOLD}25` }}>
                  <Target className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To provide exceptional legal representation that empowers our clients, upholds justice,
                  and sets new standards for excellence in the legal profession through innovation,
                  integrity, and unwavering dedication.
                </p>
              </div>

              {/* Vision — white card with navy border accent */}
              <div className="rounded-2xl p-8 md:p-10 bg-white border border-gray-100 shadow-sm"
                style={{ borderLeft: `4px solid ${GOLD}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${NAVY}10` }}>
                  <Shield className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: NAVY }}>Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted legal services provider in Nigeria, recognised for our
                  commitment to client success and the advancement of accessible, high-quality
                  legal representation for all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact CTA ──────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

            {/* Top strip */}
            <div className="p-8 md:p-10 bg-white flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black mb-2" style={{ color: NAVY }}>
                  Ready to Work With Us?
                </h3>
                <p className="text-gray-500">
                  Experience the Gratial Legalities difference for yourself.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90 whitespace-nowrap"
                  style={{ background: NAVY }}
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+2348138939107"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 text-gray-700 transition-all duration-300 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact details strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-t border-gray-100 bg-[#f9f9f7]">
              {[
                {
                  icon: <Mail className="w-4 h-4" />,
                  label: 'Email Us',
                  value: 'gratialegals@gmail.com',
                  href: 'mailto:gratialegals@gmail.com'
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  label: 'Visit Us',
                  value: '1, Ondo Street, Garki, Abuja',
                  href: null
                },
                {
                  icon: <Clock className="w-4 h-4" />,
                  label: 'Office Hours',
                  value: 'Mon – Fri: 8am – 6pm',
                  href: null
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-8 py-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${NAVY}10`, color: NAVY }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:underline"
                        style={{ color: NAVY }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: NAVY }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default About;