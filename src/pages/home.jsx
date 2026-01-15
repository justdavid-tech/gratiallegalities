import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustSignals from "../components/trustsignals";
import PracticeAreas from "../components/practiceareas";
import AboutFirm from "../components/aboutfirm";
import WhyChooseUs from "../components/whychooseus";
import Testimonials from "../components/testimonies";
import CallToAction from "../components/calltoaction";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustSignals />
            <PracticeAreas />
            <AboutFirm />
            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
        </>
    );
}
export default Home;