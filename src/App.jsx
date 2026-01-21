import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Practices from "./pages/practices";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import FindUs from "./pages/findus";

// Practice Area Pages
import Commercial from "./pages/practices/commercial";
import CommercialAdvisory from "./pages/practices/commercialadvisory";
import CommercialDocumentation from "./pages/practices/commercialdocumentation";
import ContractDrafting from "./pages/practices/contractdrafting";
import CorporateLaw from "./pages/practices/corporate";
import Employment from "./pages/practices/employment";
import LegalAdvisory from "./pages/practices/legaladvisory";
import LegalDueDiligence from "./pages/practices/legalDueDiligence";
import OnlineBusiness from "./pages/practices/onlinebusiness";
import PropertyDispute from "./pages/practices/propertydispute";
import RealEstate from "./pages/practices/realestate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-us" element={<FindUs />} />

        {/* Practice Area Subpages */}
        <Route path="/practices/commercial" element={<Commercial />} />
        <Route path="/practices/commercial-advisory" element={<CommercialAdvisory />} />
        <Route path="/practices/commercial-documentation" element={<CommercialDocumentation />} />
        <Route path="/practices/contract-drafting" element={<ContractDrafting />} />
        <Route path="/practices/corporate-law" element={<CorporateLaw />} />
        <Route path="/practices/employment" element={<Employment />} />
        <Route path="/practices/legal-advisory" element={<LegalAdvisory />} />
        <Route path="/practices/legal-due-diligence" element={<LegalDueDiligence />} />
        <Route path="/practices/online-business" element={<OnlineBusiness />} />
        <Route path="/practices/property-dispute" element={<PropertyDispute />} />
        <Route path="/practices/real-estate" element={<RealEstate />} />
      </Routes>
    </>
  );
}

export default App;