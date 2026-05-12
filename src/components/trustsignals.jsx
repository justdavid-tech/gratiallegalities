import React from 'react';
import { 
  Briefcase, 
  Users, 
  Scale, 
  FileText,
  CheckCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      value: "7+",
      label: "Years Experience",
      description: "Dedicated years of proven legal expertise",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      value: "11",
      label: "Practice Areas",
      description: "Specialized legal expertise across sectors",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "96%",
      label: "Client Satisfaction",
      description: "Positive feedback & referrals from clients",
    }
  ];

  const certifications = [
    {
      name: "Nigeria Bar Association",
      icon: <Scale className="w-4 h-4" />,
    },
    {
      name: "Institute of Chartered Mediators and Conciliators",
      icon: <ShieldCheck className="w-4 h-4" />,
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-5">
            <CheckCircle className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-widest">Trust & Credibility</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            Why Clients <span className="text-primary">Trust</span> Us
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Proven track record of excellence, recognised by clients and industry peers alike
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-primary">{metric.icon}</span>
              </div>
              <div className="text-5xl font-black text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                {metric.value}
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full"
            >
              <span className="text-primary">{cert.icon}</span>
              <span className="text-sm text-gray-600 font-medium">{cert.name}</span>
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Free Case Evaluation</h4>
                <p className="text-sm text-gray-500">Get a confidential assessment of your case at no cost</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-300 whitespace-nowrap flex-shrink-0"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustSignals;