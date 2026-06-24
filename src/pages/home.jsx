import React, { useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustSignals from "../components/trustsignals";
import PracticeAreas from "../components/practiceareas";
import SignatureProtection from "../components/Signatureprotection";
import WhyChooseUs from "../components/whychooseus";
import Testimonials from "../components/testimonies";
import CallToAction from "../components/calltoaction";
import Footer from "../components/footer";
import InsightsPreview from "../components/insightspreview";
import BanterLoader from "../components/Banterloader";

function Home() {
    const [loaded, setLoaded] = useState(false);
    return (
        <>
            <BanterLoader onComplete={() => setLoaded(true)} />
            <Navbar />
             {/* Hero animates in after loader finishes */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}>
        <Hero isStarted={loaded} />
        </div>
        <TrustSignals />
        <PracticeAreas />
        <SignatureProtection />
        <WhyChooseUs />
        <Testimonials />
        <InsightsPreview />
        <CallToAction />
        <Footer />
     
        </>
    );
}
export default Home;