import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter,
  Facebook,
  Instagram,
  Scale,
  Shield,
  FileText,
  ChevronRight,
  Copyright,
  Building,
  Users,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { name: 'Corporate Law', href: '/practice-areas/corporate' },
    { name: 'Criminal Defense', href: '/practice-areas/criminal' },
    { name: 'Family Law', href: '/practice-areas/family' },
    { name: 'Real Estate Law', href: '/practice-areas/real-estate' },
    { name: 'Immigration Law', href: '/practice-areas/immigration' },
    { name: 'Civil Litigation', href: '/practice-areas/civil' },
    { name: 'Personal Injury', href: '/practice-areas/personal-injury' },
    { name: 'Employment Law', href: '/practice-areas/employment' },
    { name: 'Estate Planning', href: '/practice-areas/estate' },
    { name: 'Intellectual Property', href: '/practice-areas/ip' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy', icon: <Shield className="w-4 h-4" /> },
    { name: 'Terms of Service', href: '/terms', icon: <FileText className="w-4 h-4" /> },
    { name: 'Disclaimer', href: '/disclaimer', icon: <Scale className="w-4 h-4" /> },
    { name: 'Accessibility', href: '/accessibility', icon: <Users className="w-4 h-4" /> },
    { name: 'Sitemap', href: '/sitemap', icon: <Building className="w-4 h-4" /> }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/firmname', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/firmname', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/firmname', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/firmname', icon: <Instagram className="w-5 h-5" /> }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-secondary-900 to-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Contact Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Gratial legalities Group</h3>
                  <p className="text-sm text-gray-400">Est. 2022</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Main Office</p>
                    <p className="text-gray-400 text-sm">
                      123 Justice Avenue<br />
                      Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:+15551234567" 
                      className="text-white hover:text-primary transition-colors font-medium"
                    >
                      (+234) 813 893 9107
                    </a>
                    <p className="text-gray-400 text-sm">24/7 Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:info@sterlinglegal.com" 
                    className="text-white hover:text-primary transition-colors font-medium"
                  >
                    info@sterlinglegal.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Office Hours & Practice Areas */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Office Hours
              </h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white font-medium">Emergency Only</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-sm text-primary font-medium">
                    By Appointment Only
                  </p>
                  <p className="text-xs text-gray-500">
                    Virtual consultations available worldwide
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Quick Links
                </h4>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors font-medium"
                >
                  Book Appointment
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Column 3: Practice Areas */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Practice Areas
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {practiceAreas.map((area, index) => (
                  <Link 
                    key={index}
                    to={area.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm group"
                  >
                    <span className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {area.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Social & Legal */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Connect With Us</h3>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:bg-primary/10 hover:border-primary/30 transition-all group"
                    aria-label={social.name}
                  >
                    <div className="text-gray-400 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>


              {/* Legal Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Legal
                </h4>
                <div className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
                    >
                      <div className="opacity-50 group-hover:opacity-100">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Legal Disclaimer */}
            <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-2">Legal Disclaimer</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    The information on this website is for general informational purposes only and does not constitute legal advice. 
                    No attorney-client relationship is formed by viewing this website or contacting our firm. Past results do not 
                    guarantee future outcomes. Each case is unique and must be evaluated individually. 
                    Attorney advertising. Prior results do not guarantee a similar outcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Copyright className="w-4 h-4" />
                <span>{currentYear} Gratial Legalities Group. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-gray-500">Licensed in Nigeria</span>
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
              
              <div className="text-xs text-gray-500 text-center md:text-right">
                <p>Gratial Legalities Group is a law firm based in Abuja, Nigeria.</p>
                <p className="mt-1">Principal office: 123 Justice Avenue, Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-t border-primary/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-bold">24/7 Emergency Legal Assistance</span>
                  <span className="text-gray-300 ml-3">Available for urgent matters</span>
                </div>
              </div>
              <a 
                href="tel:+15551234567"
                className="px-6 py-2 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Emergency Call: (+234) 813 893 9107
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;