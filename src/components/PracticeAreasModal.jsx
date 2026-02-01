import React from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

const PracticeAreasModal = ({ isOpen, onClose, practiceAreas }) => {
  if (!isOpen) return null;

  // Combine all practice areas into one array
  const allPracticeAreas = [...practiceAreas.column1, ...practiceAreas.column2];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative bg-gradient-to-br from-secondary-950 to-black border border-primary/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-xl border-b border-primary/20 px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Our Practice Areas</h2>
                <p className="text-gray-400 mt-1">Select an area to learn more about our expertise</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-300 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-140px)] custom-scrollbar">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allPracticeAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={area.path}
                    onClick={onClose}
                    className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-brand-lg hover:scale-105"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
                          {area.name}
                        </h3>
                        <p className="text-gray-500 text-sm">Click to explore</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gradient-to-t from-secondary-950 to-secondary-950/95 backdrop-blur-xl border-t border-primary/20 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                Need help choosing? Contact us for a consultation
              </p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="px-6 py-2 bg-gradient-primary text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center gap-2"
                >
                  Reach Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #EE7B30;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff8c42;
        }
      `}</style>
    </>
  );
};

export default PracticeAreasModal;
