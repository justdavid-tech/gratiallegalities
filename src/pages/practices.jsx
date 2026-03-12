import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PracticeHero from '../components/practicehero';
import PracticeAreas from '../components/practiceareas';

const Practices = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PracticeHero 
        practiceName="Our Practice Areas"
        tagline="Expert Legal Solutions"
        description="Comprehensive legal representation tailored to your specific needs. From corporate law to real estate, our team is dedicated to your success."
        contactPerson="Barrister Grace Idoko"
        contactEmail="gratialegals@gmail.com"
        keyFeatures={[
          "Corporate & Commercial Law",
          "Real Estate & Property",
          "Legal Advisory",
          "Due Diligence"
        ]}
      />
      <div className="py-20">
        <PracticeAreas />
      </div>
      <Footer />
    </div>
  );
};

export default Practices;
