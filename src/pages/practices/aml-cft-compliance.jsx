import React from 'react';
import PracticeHero from '../../components/practicehero';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const AMLCFTCompliance = () => {
  return (
    <div>
      <Navbar />
      <PracticeHero
        practiceName="AML/CFT Reporting and Compliance"
        tagline="Robust Governance, Risk & Compliance Solutions"
        description="We provide comprehensive legal advice on all aspects of Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) regulations, including Anti-Bribery and Anti-Corruption rules. Our expertise helps Nigerian, regional, and multinational clients across various industries navigate the complex regulatory landscape both locally and internationally."
        secondaryDescription="From implementing robust compliance measures to responding to regulatory inquiries, we ensure our clients meet all legal requirements while maintaining operational efficiency and business continuity."
        contactPerson="Adeolu Idowu"
        contactEmail="Adeolu.Idowu@aluko-oyebode.com"
        keyFeatures={[
          "Review and enhancement of AML/CFT policies, procedures, and internal controls",
          "Regulatory reporting requirements assistance and compliance monitoring",
          "Conduct bespoke training on AML/CFT laws and regulatory expectations",
          "Legal advice for KYC procedures and customer due diligence",
          "Assistance with regulatory inquiries, investigations, and enforcement actions",
          "Development and implementation of risk-based compliance frameworks",
          "International best practices alignment for multinational operations"
        ]}
        stats={[
          { value: "50+", label: "Compliance Programs" },
          { value: "100%", label: "Regulatory Success" },
          { value: "24/7", label: "Support Available" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default AMLCFTCompliance;