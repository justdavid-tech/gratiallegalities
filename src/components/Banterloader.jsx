import React, { useState, useEffect } from 'react';

const BanterLoader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out at 2.8s, fully finish at 3.3s
    const fadeTimer = setTimeout(() => setFading(true), 2800);
    const doneTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        /* From Uiverse.io by mobinkakei */ 
        .wrapper {
          width: 200px;
          height: 60px;
          position: relative;
          z-index: 1;
        }

        .circle {
          width: 20px;
          height: 20px;
          position: absolute;
          border-radius: 50%;
          background-color: #fff;
          left: 15%;
          transform-origin: 50%;
          animation: circle7124 .5s alternate infinite ease;
        }

        @keyframes circle7124 {
          0% {
            top: 60px;
            height: 5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
          }

          40% {
            height: 20px;
            border-radius: 50%;
            transform: scaleX(1);
          }

          100% {
            top: 0%;
          }
        }

        .circle:nth-child(2) {
          left: 45%;
          animation-delay: .2s;
          background-color: #d47f11;
          box-shadow: 0 0 14px rgba(212, 127, 17, 0.55);
        }

        .circle:nth-child(3) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        .shadow {
          width: 20px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.9);
          position: absolute;
          top: 62px;
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: shadow046 .5s alternate infinite ease;
        }

        @keyframes shadow046 {
          0% {
            transform: scaleX(1.5);
          }

          40% {
            transform: scaleX(1);
            opacity: .7;
          }

          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .shadow:nth-child(4) {
          left: 45%;
          animation-delay: .2s;
        }

        .shadow:nth-child(5) {
          left: auto;
          right: 15%;
          animation-delay: .3s;
        }

        .shadow:nth-child(6) {
          left: 15%;
          right: auto;
          animation-delay: 0s;
        }
      `}</style>

      {/* Full-screen overlay */}
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030930] overflow-hidden"
        style={{
          transition: 'opacity 0.5s ease',
          opacity: fading ? 0 : 1,
          pointerEvents: fading ? 'none' : 'auto',
        }}
      >
        {/* Background gradient from contact.jsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

        {/* Firm name above loader */}
        <div className="mb-12 relative z-10 text-center px-4">
          <p className="font-heading text-white text-sm sm:text-base font-semibold uppercase tracking-[0.3em]">
            Gratia <span style={{ color: '#d47f11' }}>Legalities</span>
          </p>
          <div className="h-[2px] w-6 mx-auto mt-2.5 rounded-full" style={{ background: '#d47f11' }} />
        </div>

        {/* The bouncing balls loader */}
        <div className="wrapper relative z-10">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="shadow" />
          <div className="shadow" />
          <div className="shadow" />
        </div>
      </div>
    </>
  );
};

export default BanterLoader;