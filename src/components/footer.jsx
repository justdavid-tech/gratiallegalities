import React from 'react';
import { FaTiktok } from "react-icons/fa";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram,
  Scale,
  Shield,
  FileText,
  ChevronRight,
  Copyright,
  Building,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { name: 'Commercial Law', href: '/practices/commercial' },
    { name: 'Business Legal Advisory', href: '/practices/business-legal-advisory' },
    { name: 'Commercial Documentation', href: '/practices/commercial-documentation' },
    { name: 'Contract Drafting', href: '/practices/contract-drafting' },
    { name: 'Corporate Law', href: '/practices/corporate-law' },
    { name: 'Employment & Labour', href: '/practices/employment' },
    { name: 'Legal Due Diligence', href: '/practices/legal-due-diligence' },
    { name: 'Online Business & E-Commerce', href: '/practices/online-business' },
    { name: 'Real Estate Law', href: '/practices/real-estate' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: <Shield className="w-4 h-4" /> },
    { name: 'Terms of Service', href: '/terms', icon: <FileText className="w-4 h-4" /> },
    { name: 'Sitemap', href: '/sitemap', icon: <Building className="w-4 h-4" /> }
  ];

  const socialLinks = [
    { name: 'TikTok', href: 'https://tiktok.com/@yourprofile', icon: <FaTiktok className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/gratiacorporate_consult', icon: <Instagram className="w-5 h-5" /> }
  ];

  return (
    /* Apply your custom bg hex and a subtle gradient to black at the bottom */
    <footer className="relative bg-[#030930] bg-gradient-to-b from-[#030930] via-[#030930] to-black border-t border-white/5">
      
      {/* Background Pattern: Reduced opacity for a "not shouty" vibe */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-grid-white bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Identity */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Gratia Corporate Consult</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Est. 2022</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary/70 mt-1 flex-shrink-0" />
                  <p className="text-white text-sm leading-relaxed">
                    1, Ondo Street, Area 1<br />
                    Garki, Abuja
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary/70 flex-shrink-0" />
                  <a href="tel:+2348138939107" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
                    +234 813 893 9107
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary/70 flex-shrink-0" />
                  <a href="mailto:info@gratiacorporateconsult.com" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">
                    info@gratiacorporateconsult.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Hours */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Office Hours
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white">Mon - Fri</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white">Saturday</span>
                  <span className="text-white font-medium text-xs">Emergency Only</span>
                </div>
                <p className="text-xs text-primary/80 pt-2 font-medium">By Appointment Only</p>
              </div>
            </div>

            {/* Column 3: Practice Areas */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                Practice Areas
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {practiceAreas.slice(0, 6).map((area, index) => (
                  <Link key={index} to={area.href} className="text-white hover:text-primary transition-all text-xs flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-6">Social Connect</h3>
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-gray-400 hover:text-white">
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <Link key={index} to={link.href} className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-xs">
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer: Muted background so it doesn't shout */}
          <div className="mt-16 border-t border-white/5 pt-10">
            <div className="p-6 bg-black/20 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Scale className="w-5 h-5 text-primary/60 mt-1 flex-shrink-0" />
                <p className="text-[11px] text-white leading-relaxed uppercase tracking-wider">
                  <strong className="text-white block mb-1">Legal Disclaimer</strong>
                  The information on this website is for general informational purposes only and does not constitute legal advice. 
                  No lawyer-client relationship is formed by viewing this website or contacting our firm. 
                  Prior results do not guarantee a similar outcome.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
              <div className="flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.15em]">
                <Copyright className="w-3 h-3" />
                <span>{currentYear} Gratia Corporate Consult</span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-white text-[10px] uppercase tracking-widest">Licensed in Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner: Slightly higher contrast against the dark navy bg */}
        <div className="bg-white/[0.02] border-t border-white/10 py-6 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-sm">24/7 Urgent Assistance</p>
                <p className="text-white text-xs">Direct access to legal counsel</p>
              </div>
            </div>
            <a href="tel:+2348138939107" className="px-8 py-3 bg-white text-[#030930] rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all transform hover:scale-105">
              +234 813 893 9107
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;