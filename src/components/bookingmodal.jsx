import React, { useState, useRef } from 'react';
import { Calendar, ArrowRight, CheckCircle, X, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const modalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Cinzel:wght@400;600&family=Jost:wght@200;300;400&display=swap');

  @keyframes bm-fade-in {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bm-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .bm-backdrop {
    animation: bm-backdrop-in 0.25s ease forwards;
  }
  .bm-card {
    animation: bm-fade-in 0.35s 0.05s ease both;
  }

  .bm-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(201,168,76,0.15);
    color: #f5f0e8;
    font-family: 'Jost', sans-serif;
    font-size: 0.82rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    outline: none;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .bm-input::placeholder { color: rgba(245,240,232,0.25); }
  .bm-input:focus {
    border-color: rgba(201,168,76,0.55);
    box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
  }
  .bm-input option { background: #0d0d0d; color: #f5f0e8; }

  .bm-label {
    display: block;
    font-family: 'Jost', sans-serif;
    font-size: 0.62rem;
    font-weight: 300;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: white;
    margin-bottom: 0.45rem;
  }

  .bm-submit {
    width: 100%;
    padding: 0.9rem 1.5rem;
    background: #d47f11;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: 'Cinzel', serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    position: relative;
    overflow: hidden;
    transition: color 0.35s;
    margin-top: 0.5rem;
  }
  .bm-submit::before {
    content: '';
    position: absolute; inset: 0;
    background: #0d0d0d;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.35s ease;
  }
  .bm-submit:hover { color: #d47f11; }
  .bm-submit:hover::before { transform: scaleX(1); transform-origin: left; }
  .bm-submit:disabled { opacity: 0.5; cursor: not-allowed; }
  .bm-submit span, .bm-submit svg { position: relative; z-index: 1; }
`;

const BookingModal = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const SERVICE_ID  = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setFormSubmitted(true);
      setTimeout(() => { setFormSubmitted(false); onClose(); }, 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send request. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{modalStyles}</style>

      <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bm-backdrop"
           style={{ background: 'rgba(5,5,5,0.88)', backdropFilter: 'blur(10px)' }}>

        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Card */}
        <div
          className="bm-card relative w-full"
          style={{
            maxWidth: '460px',
            background: '#0f0f0f',
            border: '1px solid rgba(201,168,76,0.18)',
            padding: '2.8rem 2.6rem 2.4rem',
          }}
        >
          {/* Gold top accent */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '56px', height: '2px', background: '#d47f11' }} />

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.2rem', right: '1.2rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(245,240,232,0.35)', fontSize: '1.1rem',
              lineHeight: 1, transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#d47f11'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.35)'}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {formSubmitted ? (
            /* ── Success State ── */
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{
                width: '64px', height: '64px', margin: '0 auto 1.4rem',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CheckCircle size={28} color="#d47f11" />
              </div>
              <p style={{ fontFamily: "'Jost'", fontSize: '0.62rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '0.7rem' }}>
                Confirmed
              </p>
              <h3 style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 300, fontSize: '2rem', color: '#f5f0e8', lineHeight: 1.1, marginBottom: '0.9rem' }}>
                Consultation Scheduled
              </h3>
              <p style={{ fontFamily: "'Jost'", fontWeight: 200, fontSize: '0.82rem', color: 'rgba(245,240,232,0.45)', letterSpacing: '0.05em', lineHeight: 1.8 }}>
                Our team will reach out within 15 minutes<br />to confirm your appointment.
              </p>
            </div>
          ) : (
            <>
              {/* ── Header ── */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontFamily: "'Jost'", fontSize: '0.6rem', letterSpacing: '0.36em', textTransform: 'uppercase', color: '#d47f11', marginBottom: '0.5rem' }}>
                  Gratia Legalities
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 300, fontSize: '1.9rem', color: '#f5f0e8', lineHeight: 1.1, marginBottom: '0.4rem' }}>
                  Schedule a Consultation
                </h3>
                <p style={{ fontFamily: "'Jost'", fontWeight: 200, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'rgba(245,240,232,0.38)' }}>
                  Select your preferred time &amp; we will get back to you.
                </p>
              </div>

              {/* ── Error ── */}
              {error && (
                <div style={{ marginBottom: '1.2rem', padding: '0.75rem 1rem', border: '1px solid rgba(249,87,56,0.3)', background: 'rgba(249,87,56,0.06)', color: '#F95738', fontSize: '0.75rem', fontFamily: "'Jost'", fontWeight: 300, letterSpacing: '0.04em' }}>
                  {error}
                </div>
              )}

              {/* ── Form ── */}
              <form ref={formRef} onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label className="bm-label">Full Name</label>
                  <input className="bm-input" type="text" name="user_name" required placeholder="Your full name" />
                </div>
                <div>
                  <label className="bm-label">Email Address</label>
                  <input className="bm-input" type="email" name="user_email" required placeholder="you@example.com" />
                </div>
                <div>
                  <label className="bm-label">Phone Number</label>
                  <input className="bm-input" type="tel" name="user_phone" required placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="bm-label">Preferred Time</label>
                  <select className="bm-input" name="preferred_time">
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning — 9 AM to 12 PM</option>
                    <option value="afternoon">Afternoon — 1 PM to 3 PM</option>
                    <option value="evening">Evening — 3 PM to 6 PM</option>
                    <option value="urgent">Urgent — Need Immediate Help</option>
                  </select>
                </div>

                <button type="submit" className="bm-submit" disabled={isLoading}>
                  {isLoading ? (
                    <><Loader2 size={16} className="animate-spin" /><span>Sending…</span></>
                  ) : (
                    <><span>Confirm Consultation</span><ArrowRight size={16} /></>
                  )}
                </button>
              </form>

              {/* Small disclaimer */}
              <p style={{ marginTop: '1.2rem', fontFamily: "'Jost'", fontWeight: 200, fontSize: '0.62rem', letterSpacing: '0.06em', color: 'rgba(245,240,232,0.22)', textAlign: 'center' }}>
                Your information is confidential and protected.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
