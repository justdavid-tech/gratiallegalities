import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Practices from "./pages/practices";
import GratiaLegalities from "./pages/legalities";
import Contact from "./pages/contact";
import FindUs from "./pages/findus";
import ArticlePage from "./pages/articlepage";
import InsightsPage from "./pages/insightspage";

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
import RealEstate from "./pages/practices/realestate";

// Footer Quick Access
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/termsofservice";
import LocationMap from "./pages/locationmap";

// Client Portal
import Portal from "./pages/portal";

// Admin (self-contained: handles its own auth + routing)
import AdminApp from "./pages/admin/AdminApp";

// Routes where the global floating Navbar should be hidden
const HIDE_NAVBAR_PATHS = ["/portal", "/admin"];

function App() {
  const location = useLocation();
  const hideNavbar = HIDE_NAVBAR_PATHS.some((p) =>
    location.pathname === p || location.pathname.startsWith(p + "/")
  );

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practices" element={<Practices />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/legalities" element={<GratiaLegalities />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<ArticlePage />} />

        {/* Practice Area Subpages */}
        <Route path="/practices/commercial" element={<Commercial />} />
        <Route path="/practices/commercial-advisory" element={<CommercialAdvisory />} />
        <Route path="/practices/contracts-legal-documentation" element={<CommercialDocumentation />} />
        <Route path="/practices/contract-drafting" element={<ContractDrafting />} />
        <Route path="/practices/corporate-law" element={<CorporateLaw />} />
        <Route path="/practices/employment" element={<Employment />} />
        <Route path="/practices/legal-advisory" element={<LegalAdvisory />} />
        <Route path="/practices/legal-due-diligence" element={<LegalDueDiligence />} />
        <Route path="/practices/online-business" element={<OnlineBusiness />} />
        <Route path="/practices/real-estate" element={<RealEstate />} />

        {/* Footer Quick Access */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sitemap" element={<LocationMap />} />

        {/* Client Portal */}
        <Route path="/portal" element={<Portal />} />

        {/* Admin — self-contained app with its own auth + login/dashboard routing */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </>
  );
}

export default App;