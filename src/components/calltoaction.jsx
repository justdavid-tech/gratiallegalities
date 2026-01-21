import React, { useState } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  Shield,
  ArrowRight,
  Users,
  Award,
  Zap
} from 'lucide-react';
import BookingModal from './bookingmodal';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    { icon: <Clock className="w-5 h-5" />, text: 'Free Initial Consultation', highlight: true },
    { icon: <Shield className="w-5 h-5" />, text: 'Confidential Assessment', highlight: false },
    { icon: <Users className="w-5 h-5" />, text: 'Expert Attorney Match', highlight: false },
    { icon: <Award className="w-5 h-5" />, text: 'No Obligation', highlight: true }
  ];

  const urgencyTriggers = [
    'Limited availability this week',
    'Free case review expires soon',
    'Immediate attention for urgent matters'
  ];

  return (
    <>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <div className="relative py-24 bg-gradient-to-br from-secondary-900 via-black to-secondary-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-primary/10 rounded-full animate-float"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main CTA Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-pulse">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Need <span className="text-primary">Legal Assistance</span>?
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Speak with an experienced attorney today for a <span className="text-primary font-semibold">free case evaluation</span>.
              Your first consultation is on us.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '15', label: 'Minute Response', suffix: 'Avg.' },
              { value: '24/7', label: 'Availability', suffix: 'Support' },
              { value: '100%', label: 'Confidential', suffix: 'Private' },
              { value: '$0', label: 'Initial Cost', suffix: 'Free Consult' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.suffix}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Primary CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-12 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[280px] shadow-brand-lg animate-pulse-slow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Calendar className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Schedule Free Consultation</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Phone CTA */}
            <a 
              href="tel:+15551234567"
              className="group relative px-10 py-5 bg-white/5 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 min-w-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Phone className="w-6 h-6 relative z-10" />
              <div className="relative z-10 text-left">
                <div className="text-sm text-gray-400">Click to Call</div>
                <div className="text-xl">(+234) 813 893 9107</div>
              </div>
            </a>
          </div>

          {/* Urgency Triggers */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 border border-primary/20 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Act Now For Immediate Assistance</h4>
                <div className="space-y-1">
                  {urgencyTriggers.map((trigger, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{trigger}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Secure Your Spot
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(0deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(0deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-slow {
            0%, 100% { box-shadow: 0 10px 40px 0 rgba(230, 126, 34, 0.2); }
            50% { box-shadow: 0 10px 60px 0 rgba(230, 126, 34, 0.4); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
          .animate-pulse-slow {
            animation: pulse-slow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default CallToAction;