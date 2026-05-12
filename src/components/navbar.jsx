import React, { useState, useEffect } from 'react';
import { FaTiktok } from "react-icons/fa";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Instagram,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from './bookingmodal';

const NAVY = '#030930';
const GOLD = '#d47f11';

const practiceAreas = {
  column1: [
    { name: 'Corporate Law', path: '/practices/corporate-law' },
    { name: 'Contracts & Legal Documentation', path: '/practices/contracts-legal-documentation' },
    { name: 'Commercial Law', path: '/practices/commercial' },
    { name: 'Real Estate Law', path: '/practices/real-estate' },
    { name: 'Commercial Advisory', path: '/practices/commercial-advisory' },
    { name: 'Contract Drafting', path: '/practices/contract-drafting' },
  ],

  column2: [
    { name: 'Employment Law', path: '/practices/employment' },
    { name: 'Legal Advisory', path: '/practices/legal-advisory' },
    { name: 'Legal Due Diligence', path: '/practices/legal-due-diligence' },
    { name: 'Online Business Law', path: '/practices/online-business' },
    { name: 'Property Dispute Resolution', path: '/practices/property-dispute' },
  ],
};

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Practice Areas', href: '/practices', hasDropdown: true },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePractices, setMobilePractices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobilePractices(false);
  };

  return (
    <>
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-7xl transition-all duration-500 ${
          scrolled ? 'scale-[0.98]' : 'scale-100'
        }`}
      >
        {/* Floating Glow Effects */}
        <div
          className="absolute -top-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ background: GOLD }}
        />

        <div
          className="absolute -right-10 top-0 w-40 h-40 rounded-full blur-3xl opacity-10"
          style={{ background: NAVY }}
        />

        {/* Glass Wrapper */}
        <div
          className="relative rounded-[28px] border backdrop-blur-2xl"
          style={{
            background: 'rgba(255,255,255,0.75)',
            borderColor: 'rgba(255,255,255,0.35)',
            boxShadow: '0 10px 50px rgba(0,0,0,0.08)',
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              background:
                'linear-gradient(120deg, rgba(212,127,17,0.12), transparent 35%, rgba(5,28,97,0.12))',
            }}
          />

      

          <div className="relative z-10 px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">

              {/* LOGO */}
              <Link
                to="/"
                className="flex items-center"
              >
                <img
                  src="/assets/logo-transparent.png"
                  alt="Gratial Legalities"
                  className="h-16 w-auto object-contain"
                />
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden lg:flex items-center gap-2">

                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button
                        className="
                        relative group
                        px-5 py-2.5
                        rounded-xl
                        text-[15px]
                        font-medium
                        transition-all duration-300
                        hover:bg-white/60
                        "
                        style={{
                          color: dropdownOpen ? NAVY : '#374151',
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        <span className="flex items-center gap-1 relative z-10">
                          {link.name}

                          <ChevronDown
                            className="w-4 h-4 transition-transform duration-300"
                            style={{
                              transform: dropdownOpen
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                            }}
                          />
                        </span>

                        <span
                          className="
                          absolute left-1/2 bottom-1
                          h-[2px] w-0
                          rounded-full
                          -translate-x-1/2
                          transition-all duration-300
                          group-hover:w-8
                          "
                          style={{ background: GOLD }}
                        />
                      </button>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.25 }}
                            className="
                            absolute left-1/2 -translate-x-1/2 mt-5
                            w-[650px]
                            rounded-[28px]
                            overflow-hidden
                            border
                            backdrop-blur-2xl
                            "
                            style={{
                              background: 'rgba(255,255,255,0.88)',
                              borderColor: 'rgba(255,255,255,0.4)',
                              boxShadow:
                                '0 20px 80px rgba(0,0,0,0.12)',
                            }}
                          >
                            <div
                              className="h-1 w-full"
                              style={{ background: GOLD }}
                            />

                            <div className="grid grid-cols-2 gap-10 p-8">

                              {/* COLUMN 1 */}
                              <div>
                                <p
                                  className="text-xs uppercase tracking-[0.3em] mb-5 font-bold"
                                  style={{
                                    color: GOLD,
                                    fontFamily: "'Clash Display', sans-serif",
                                  }}
                                >
                                  Core Practices
                                </p>

                                <ul className="space-y-3">
                                  {practiceAreas.column1.map((p) => (
                                    <li key={p.name}>
                                      <Link
                                        to={p.path}
                                        className="
                                        group flex items-center gap-3
                                        text-[15px]
                                        text-gray-600
                                        hover:text-black
                                        transition-all duration-300
                                        "
                                        style={{
                                          fontFamily: "'Manrope', sans-serif",
                                        }}
                                      >
                                        <span
                                          className="
                                          w-2 h-2 rounded-full
                                          group-hover:scale-125
                                          transition-transform
                                          "
                                          style={{ background: GOLD }}
                                        />

                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* COLUMN 2 */}
                              <div>
                                <p
                                  className="text-xs uppercase tracking-[0.3em] mb-5 font-bold"
                                  style={{
                                    color: GOLD,
                                    fontFamily: "'Clash Display', sans-serif",
                                  }}
                                >
                                  Specialized
                                </p>

                                <ul className="space-y-3">
                                  {practiceAreas.column2.map((p) => (
                                    <li key={p.name}>
                                      <Link
                                        to={p.path}
                                        className="
                                        group flex items-center gap-3
                                        text-[15px]
                                        text-gray-600
                                        hover:text-black
                                        transition-all duration-300
                                        "
                                        style={{
                                          fontFamily: "'Manrope', sans-serif",
                                        }}
                                      >
                                        <span
                                          className="
                                          w-2 h-2 rounded-full
                                          group-hover:scale-125
                                          transition-transform
                                          "
                                          style={{ background: GOLD }}
                                        />

                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* FOOTER */}
                            <div
                              className="px-8 py-5 flex items-center justify-between border-t"
                              style={{
                                borderColor: 'rgba(0,0,0,0.05)',
                                background: 'rgba(5,28,97,0.03)',
                              }}
                            >
                              <p
                                className="text-sm text-gray-500"
                                style={{
                                  fontFamily: "'Manrope', sans-serif",
                                }}
                              >
                                11 Specialized Legal Services
                              </p>

                              <Link
                                to="/practices"
                                className="flex items-center gap-2 text-sm font-bold"
                                style={{
                                  color: NAVY,
                                  fontFamily: "'Manrope', sans-serif",
                                }}
                              >
                                View All
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="
                      relative group
                      px-5 py-2.5
                      rounded-xl
                      text-[15px]
                      font-medium
                      transition-all duration-300
                      hover:bg-white/60
                      "
                      style={{
                        color: '#374151',
                        fontFamily: "'Manrope', sans-serif",
                      }}
                    >
                      {link.name}

                      <span
                        className="
                        absolute left-1/2 bottom-1
                        h-[2px] w-0
                        rounded-full
                        -translate-x-1/2
                        transition-all duration-300
                        group-hover:w-8
                        "
                        style={{ background: GOLD }}
                      />
                    </Link>
                  )
                )}
              </div>

              {/* RIGHT ACTIONS */}
              <div className="hidden lg:flex items-center gap-4">
     <a
                  href="tel:+2348138939107"
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{
                    color: NAVY,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  <Phone
                    className="w-4 h-4"
                    style={{ color: GOLD }}
                  />

                  +234 813 893 9107
                </a>

                <button
                  onClick={() => setModalOpen(true)}
                  className="
                  relative overflow-hidden
                  inline-flex items-center gap-2
                  px-6 py-3
                  rounded-2xl
                  text-sm font-bold text-white
                  transition-all duration-500
                  hover:scale-105
                  "
                  style={{
                    background: `#d47f11`,
                    boxShadow: `0 10px 30px ${NAVY}35`,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  <span className="relative z-10">
                    Book Appointment
                  </span>

                  <ArrowRight className="w-4 h-4 relative z-10" />

                  <div
                    className="
                    absolute inset-0
                    opacity-0 hover:opacity-100
                    transition-opacity duration-500
                    "
                    style={{
                      background:
                        'linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                  />
                </button>
              </div>

              {/* MOBILE BUTTON */}
              <button
                className="
                lg:hidden
                w-11 h-11
                rounded-2xl
                flex items-center justify-center
                "
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(20px)',
                }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X
                    className="w-5 h-5"
                    style={{ color: NAVY }}
                  />
                ) : (
                  <Menu
                    className="w-5 h-5"
                    style={{ color: NAVY }}
                  />
                )}
              </button>

            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="
            fixed inset-0 z-40 lg:hidden
            pt-28 pb-10 px-6
            flex flex-col overflow-y-auto
            "
            style={{
              background: 'linear-gradient(135deg, #051c61 0%, #030d2e 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Background Accent */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
              style={{ background: GOLD }}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* NAVIGATION LINKS */}
              <div className="space-y-2 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <div className="flex flex-col">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setMobilePractices(!mobilePractices);
                          }}
                          className="
                          flex items-center justify-between
                          px-5 py-4
                          rounded-xl
                          text-white/90
                          transition-all duration-300
                          hover:bg-white/5
                          "
                          style={{
                            border: '1px solid rgba(255,255,255,0.05)',
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        >
                          <span className="text-lg font-medium tracking-tight">
                            {link.name}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              mobilePractices ? 'rotate-180' : ''
                            }`}
                            style={{ color: GOLD }}
                          />
                        </button>

                        <AnimatePresence>
                          {mobilePractices && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-2 space-y-1"
                            >
                              {[
                                ...practiceAreas.column1,
                                ...practiceAreas.column2,
                              ].map((p) => (
                                <Link
                                  key={p.name}
                                  to={p.path}
                                  onClick={closeMenu}
                                  className="
                                  flex items-center gap-3
                                  px-5 py-3
                                  rounded-lg
                                  text-[14px]
                                  text-white/60
                                  hover:text-white
                                  hover:bg-white/5
                                  transition-all
                                  "
                                  style={{ fontFamily: "'Manrope', sans-serif" }}
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: GOLD }}
                                  />
                                  {p.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={closeMenu}
                        className="
                        flex items-center justify-between
                        px-5 py-4
                        rounded-xl
                        text-white/90
                        transition-all duration-300
                        hover:bg-white/5
                        "
                        style={{
                          border: '1px solid rgba(255,255,255,0.05)',
                          fontFamily: "'Manrope', sans-serif",
                        }}
                      >
                        <span className="text-lg font-medium tracking-tight">
                          {link.name}
                        </span>

                        <ArrowRight
                          className="w-4 h-4 opacity-40"
                          style={{ color: GOLD }}
                        />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* DIVIDER */}
              <div 
                className="w-full h-px mb-8 opacity-10" 
                style={{ background: 'white' }}
              />

              {/* CONTACT & CTA SECTION */}
              <div className="mt-auto space-y-6">
                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                {/* Social Handles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p 
                    className="text-[10px] uppercase tracking-[0.3em] mb-4 font-bold opacity-50"
                    style={{ color: GOLD }}
                  >
                    Social Handles
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-[#d47f11]/20 hover:border-[#d47f11]/30 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-[#d47f11]/20 hover:border-[#d47f11]/30 transition-all duration-300"
                    >
                      <FaTiktok className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>

                {/* Direct Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p 
                    className="text-[10px] uppercase tracking-[0.3em] mb-4 pt-5 font-bold opacity-50"
                    style={{ color: GOLD }}
                  >
                    Direct Contact
                  </p>
                  <a
                    href="tel:+2348138939107"
                    className="flex items-center gap-4 text-xl font-bold text-white group"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: 'rgba(212,127,17,0.3)', background: 'rgba(212,127,17,0.1)' }}
                    >
                      <Phone className="w-5 h-5" style={{ color: GOLD }} />
                    </div>
                    +234 813 893 9107
                  </a>
                </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => {
                    setModalOpen(true);
                    closeMenu();
                  }}
                  className="
                  w-full
                  relative overflow-hidden
                  flex items-center justify-center gap-3
                  px-8 py-5
                  rounded-2xl
                  text-base font-bold text-white
                  transition-all duration-500
                  active:scale-[0.98]
                  "
                  style={{
                    background: `linear-gradient(135deg, ${GOLD}, #d47f11)`,
                    boxShadow: `0 15px 35px rgba(212, 127, 17, 0.25)`,
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  <span className="relative z-10">Book Free Appointment</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;