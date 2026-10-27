import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PracticeHero from '../components/practicehero';
import PracticeAreas from '../components/practiceareas';
import LitigationSection from '../components/litigationsection';

const Practices = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PracticeHero 
        practiceName="Our Practice Areas"
        tagline="Corporate Advisory & Dispute Resolution"
        description="Comprehensive legal solutions tailored to your specific needs. From corporate governance and transaction protection to commercial litigation and advocacy before the courts."
        contactPerson="Grace Enenu Sani-Odeh Esq."
        contactEmail="info@gratialegalities.com"
        keyFeatures={[
          "Corporate & Commercial Law",
          "Real Estate & Property Disputes",
          "Civil & Commercial Litigation",
          "Due Diligence & Compliance"
        ]}
      />
      <div className="py-12">
        <PracticeAreas />
        <LitigationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Practices;
