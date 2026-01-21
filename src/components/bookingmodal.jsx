import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  X,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send request. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-secondary-900 to-black rounded-2xl p-8 border border-primary/30 max-w-md w-full shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        {formSubmitted ? (
          <div className="text-center animate-fade-in py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>
            <p className="text-gray-300">
              My team will contact you within 15 minutes to confirm your appointment.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Consultation</h3>
              <p className="text-gray-400">Select preferred time & contact method</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="user_name" // Identifying name for EmailJS
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="user_email" // Identifying name for EmailJS
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="user_phone" // Identifying name for EmailJS
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Preferred Time</label>
                <select 
                  name="preferred_time" // Identifying name for EmailJS
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="" className="bg-black">Select a time slot</option>
                  <option value="morning" className="bg-black">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon" className="bg-black">Afternoon (1 PM - 5 PM)</option>
                  <option value="evening" className="bg-black">Evening (6 PM - 8 PM)</option>
                  <option value="urgent" className="bg-black">Urgent - Need Immediate Help</option>
                </select>
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Confirm Consultation
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>

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
  );
};

export default BookingModal;
