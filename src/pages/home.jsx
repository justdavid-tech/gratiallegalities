import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrustSignals from "../components/trustsignals";
import PracticeAreas from "../components/practiceareas";
import WhyChooseUs from "../components/whychooseus";
import Testimonials from "../components/testimonies";
import CallToAction from "../components/calltoaction";
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustSignals />
            <PracticeAreas />
            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    );
}
export default Home;