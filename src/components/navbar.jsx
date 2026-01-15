import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticesOpen, setIsPracticesOpen] = useState(false);
  const [isMobilePracticesOpen, setIsMobilePracticesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreas = {
    column1: [
      { name: 'AML/CFT Reporting and Compliance', path: '/practices/aml-cft-compliance' },
      { name: 'Banking', path: '/practices/banking' },
      { name: 'Capital Markets', path: '/practices/capital-markets' },
      { name: 'Competition & Antitrust', path: '/practices/competition-antitrust' },
      { name: 'Corporate Services', path: '/practices/corporate-services' },
      { name: 'Data Protection & Privacy', path: '/practices/data-protection-privacy' },
      { name: 'Employment, Immigration & Incentives', path: '/practices/employment-immigration-incentives' },
      { name: 'Energy & Natural Resources', path: '/practices/energy-natural-resources' },
      { name: 'Environmental, Social and Corporate Governance (ESG)', path: '/practices/esg' },
      { name: 'Financial Institutions Advisory', path: '/practices/financial-institutions-advisory' },
      { name: 'Financial Restructuring Insolvency', path: '/practices/financial-restructuring-insolvency' },
      { name: 'Governance, Risk and Compliance', path: '/practices/governance-risk-compliance' },
      { name: 'Infrastructure Finance & PPP', path: '/practices/infrastructure-finance-ppp' }
    ],
    column2: [
      { name: 'Intellectual Property', path: '/practices/intellectual-property' },
      { name: 'International Trade', path: '/practices/international-trade' },
      { name: 'Litigation, Dispute Resolution & Arbitration', path: '/practices/litigation-dispute-resolution' },
      { name: 'Mergers & Acquisitions', path: '/practices/mergers-acquisitions' },
      { name: 'Private Equity', path: '/practices/private-equity' },
      { name: 'Private Wealth Services', path: '/practices/private-wealth-services' },
      { name: 'Privatisation & Public Procurement', path: '/practices/privatisation-public-procurement' },
      { name: 'Real Estate', path: '/practices/real-estate' },
      { name: 'Reporting and Whistleblowing', path: '/practices/reporting-whistleblowing' },
      { name: 'Tax', path: '/practices/tax' },
      { name: 'Telecommunication, Media, Entertainment & Technology', path: '/practices/tmet' },
      { name: 'Venture Technology & Emerging Growth Companies', path: '/practices/venture-technology' },
      { name: 'White Collar & Business Crime Investigations', path: '/practices/white-collar-crime' }
    ]
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Practice Areas', href: '#practices', hasDropdown: true },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="/assets/logo.jpeg" 
                alt="Law Firm Logo" 
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsPracticesOpen(true)}
                    onMouseLeave={() => setIsPracticesOpen(false)}
                  >
                    <button className="px-4 py-2 text-gray-700 hover:text-[#e67e22] font-medium transition-colors duration-200 flex items-center group">
                      {link.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isPracticesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mega Dropdown */}
                    {isPracticesOpen && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-screen max-w-4xl">
                        <div className="bg-white shadow-xl border-t-4 border-[#e67e22] rounded-b-lg p-8">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
                                Core Practice Areas
                              </h3>
                              <ul className="space-y-2">
                                {practiceAreas.column1.map((practice) => (
                                  <li key={practice.name}>
                                    <a
                                      href={practice.path}
                                      className="text-gray-700 hover:text-[#e67e22] text-sm hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                      {practice.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
                                Specialized Practices
                              </h3>
                              <ul className="space-y-2">
                                {practiceAreas.column2.map((practice) => (
                                  <li key={practice.name}>
                                    <a
                                      href={practice.path}
                                      className="text-gray-700 hover:text-[#e67e22] text-sm hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                      {practice.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-[#e67e22] font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#location"
              className="bg-[#e67e22] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#d35400] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#e67e22] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMobilePracticesOpen(!isMobilePracticesOpen)}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:text-[#e67e22] hover:bg-gray-50 font-medium flex justify-between items-center"
                    >
                      {link.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobilePracticesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobilePracticesOpen && (
                      <div className="pl-4 pr-3 py-2 bg-gray-50 space-y-1">
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2">
                            Core Practice Areas
                          </p>
                          {practiceAreas.column1.map((practice) => (
                            <a
                              key={practice.name}
                              href={practice.path}
                              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#e67e22] hover:bg-white rounded"
                            >
                              {practice.name}
                            </a>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2">
                            Specialized Practices
                          </p>
                          {practiceAreas.column2.map((practice) => (
                            <a
                              key={practice.name}
                              href={practice.path}
                              className="block px-3 py-1.5 text-sm text-gray-600 hover:text-[#e67e22] hover:bg-white rounded"
                            >
                              {practice.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-gray-700 hover:text-[#e67e22] hover:bg-gray-50 font-medium"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#location"
              className="block mx-3 mt-4 text-center bg-[#e67e22] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#d35400] transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;