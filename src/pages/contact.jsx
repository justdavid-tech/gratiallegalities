import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  User,
  Building,
  FileText,
  Globe,
  Shield,
  ArrowRight,
  AlertCircle,
  Calendar,
  Headphones,
  Check
} from 'lucide-react';
import Footer from '../components/footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    practiceArea: '',
    urgency: 'standard'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const practiceAreas = [
    'Commercial Law',
    'Commercial Advisory',
    'Commercial Documentation',
    'Contract Drafting',
    'Corporate Law',
    'Employment & Labour',
    'General Legal Advisory',
    'Legal Due Diligence',
    'Online Business & E-Commerce',
    'Property Dispute Resolution',
    'Real Estate Law',
    'Not Sure'
  ];

  const urgencyLevels = [
    { value: 'standard', label: 'Standard Inquiry', desc: 'Response within 24 hours' },
    { value: 'urgent', label: 'Urgent Matter', desc: 'Response within 2 hours' },
    { value: 'emergency', label: 'Emergency', desc: 'Immediate callback - 24/7' }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['(234) 8138939107'],
      description: 'Call us directly for immediate assistance',
      cta: 'Call Now',
      href: 'tel:+2348138939107',
      color: 'from-primary/20 to-primary/10'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['gratialegals@gmail.com'],
      description: 'Send us your questions or documents',
      cta: 'Send Email',
      href: 'mailto:gratialegals@gmail.com',
      color: 'from-primary/20 to-primary/10'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit',
      details: ['1, Ondo Street, Area 1, Garki, Abuja'],
      description: 'Schedule an in-person consultation',
      cta: 'Get Directions',
      href: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3468448860203!2d7.468666399999999!3d9.0320904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b7791750fe1%3A0x546dd2a544dcb21!2sGratia%20Corporate%20Consult%20-RC%207617592!5e0!3m2!1sen!2sng!4v1769680867814!5m2!1sen!2sng',
      color: 'from-primary/20 to-primary/10'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: 'Emergency Services Only' },
    { day: 'Virtual Consultations', hours: 'Available 24/7' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Handle form submission - integrate with your backend or email service
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        practiceArea: '',
        urgency: 'standard'
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact <span className="text-primary">Gratial Legalities</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your first step toward expert legal guidance. We're here to listen and help.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">15 min</div>
              <div className="text-gray-300">Avg. Response Time</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Emergency Support</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-300">Confidential</div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Free</div>
              <div className="text-gray-300">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Success Message */}
        {formSubmitted && (
          <div className="mb-8 bg-gradient-to-r from-success/20 to-success/10 border border-success/30 rounded-2xl p-8 text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-300 mb-4">
              Thank you for contacting Sterling Legal. Our team will reach out to you shortly.
            </p>
            <p className="text-sm text-gray-400">
              For urgent matters, please call us directly at <a href="tel:+15551234567" className="text-primary hover:underline">(555) 123-4567</a>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${method.color} backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {method.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">{detail}</p>
                  ))}
                </div>
                
                <a
                  href={method.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors font-medium group/cta"
                >
                  <span>{method.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Office Hours</h3>
                  <p className="text-gray-400 text-sm">When we're available</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-300">{item.day}</span>
                    <span className="text-white font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Assurance */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-white font-bold">Security & Privacy</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-primary" />
                  All communications are encrypted
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-primary" />
                  Your information is confidential
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-primary" />
                  No obligation for initial consultation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-primary" />
                  GDPR compliant data handling
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                  <p className="text-gray-400">We typically respond within 15 minutes</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Full Name *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.name ? 'border-error/50' : 'border-white/10 focus:border-primary'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="mt-2 text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.email ? 'border-error/50' : 'border-white/10 focus:border-primary'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.phone ? 'border-error/50' : 'border-white/10 focus:border-primary'
                      }`}
                      placeholder="09039977439"
                    />
                    {formErrors.phone && (
                      <p className="mt-2 text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        Subject
                      </div>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>
                </div>

                {/* Practice Area & Urgency Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        Practice Area
                      </div>
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="">Select a practice area</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Urgency Level
                      </div>
                    </label>
                    <div className="space-y-2">
                      {urgencyLevels.map((level) => (
                        <label 
                          key={level.value}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-colors ${
                            formData.urgency === level.value 
                              ? 'bg-primary/10 border-primary/30' 
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleChange}
                            className="text-primary focus:ring-primary"
                          />
                          <div>
                            <div className="text-white font-medium">{level.label}</div>
                            <div className="text-xs text-gray-400">{level.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      Your Message *
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      formErrors.message ? 'border-error/50' : 'border-white/10 focus:border-primary'
                    }`}
                    placeholder="Please describe your legal matter in detail..."
                  />
                  {formErrors.message && (
                    <p className="mt-2 text-sm text-error flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-400">
                    By submitting, you agree to our Privacy Policy
                  </div>
                  <button
                    type="submit"
                    className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brand-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16" id="directions">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Find Our Office</h2>
              <p className="text-gray-400">Visit us for an in-person consultation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                {/* Map Container */}
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3468448860203!2d7.468666399999999!3d9.0320904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b7791750fe1%3A0x546dd2a544dcb21!2sGratia%20Corporate%20Consult%20-RC%207617592!5e0!3m2!1sen!2sng!4v1769680867814!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-white mb-4">Office Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Address</div>
                    <div className="text-white">
                      1, Ondo Street, Area 1<br />
                      Garki, Abuja
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Parking</div>
                    <div className="text-white">Validated parking available in building garage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Emergency Legal Help</h3>
                <p className="text-gray-400">24/7 assistance for urgent matters</p>
              </div>
            </div>
            <a
              href="tel:+2348138939107"
              className="w-full py-3 bg-[#e67e22] text-white rounded-lg font-semibold hover:bg-[#e67e22]/40 transition-colors flex items-center justify-center gap-2"
            >
              Emergency Call: (234) 8138939107  
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default Contact;