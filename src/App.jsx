import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Practices from "./pages/practices";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import FindUs from "./pages/findus";

// Practice Area Pages - Column 1
import AmlCftCompliance from "./pages/practices/aml-cft-compliance";
import Banking from "./pages/practices/banking";
import CapitalMarkets from "./pages/practices/capital-markets";
import CompetitionAntitrust from "./pages/practices/competition-antitrust";
import CorporateServices from "./pages/practices/corporate-services";
import DataProtectionPrivacy from "./pages/practices/data-protection-privacy";
import EmploymentImmigration from "./pages/practices/employment-immigration-incentives";
import EnergyNaturalResources from "./pages/practices/energy-natural-resources";
import ESG from "./pages/practices/esg";
import FinancialInstitutions from "./pages/practices/financial-institutions-advisory";
import FinancialRestructuring from "./pages/practices/financial-restructuring-insolvency";
import GovernanceRiskCompliance from "./pages/practices/governance-risk-compliance";
import InfrastructureFinance from "./pages/practices/infrastructure-finance-ppp";

// Practice Area Pages - Column 2
import IntellectualProperty from "./pages/practices/intellectual-property";
import InternationalTrade from "./pages/practices/international-trade";
import LitigationDispute from "./pages/practices/litigation-dispute-resolution";
import MergersAcquisitions from "./pages/practices/mergers-acquisitions";
import PrivateEquity from "./pages/practices/private-equity";
import PrivateWealthServices from "./pages/practices/private-wealth-services";
import PrivatisationProcurement from "./pages/practices/privatisation-public-procurement";
import RealEstate from "./pages/practices/real-estate";
import ReportingWhistleblowing from "./pages/practices/reporting-whistleblowing";
import Tax from "./pages/practices/tax";
import TMET from "./pages/practices/tmet";
import VentureTechnology from "./pages/practices/venture-technology";
import WhiteCollarCrime from "./pages/practices/white-collar-crime";

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

        {/* Practice Area Subpages - Column 1 */}
        <Route path="/practices/aml-cft-compliance" element={<AmlCftCompliance />} />
        <Route path="/practices/banking" element={<Banking />} />
        <Route path="/practices/capital-markets" element={<CapitalMarkets />} />
        <Route path="/practices/competition-antitrust" element={<CompetitionAntitrust />} />
        <Route path="/practices/corporate-services" element={<CorporateServices />} />
        <Route path="/practices/data-protection-privacy" element={<DataProtectionPrivacy />} />
        <Route path="/practices/employment-immigration-incentives" element={<EmploymentImmigration />} />
        <Route path="/practices/energy-natural-resources" element={<EnergyNaturalResources />} />
        <Route path="/practices/esg" element={<ESG />} />
        <Route path="/practices/financial-institutions-advisory" element={<FinancialInstitutions />} />
        <Route path="/practices/financial-restructuring-insolvency" element={<FinancialRestructuring />} />
        <Route path="/practices/governance-risk-compliance" element={<GovernanceRiskCompliance />} />
        <Route path="/practices/infrastructure-finance-ppp" element={<InfrastructureFinance />} />

        {/* Practice Area Subpages - Column 2 */}
        <Route path="/practices/intellectual-property" element={<IntellectualProperty />} />
        <Route path="/practices/international-trade" element={<InternationalTrade />} />
        <Route path="/practices/litigation-dispute-resolution" element={<LitigationDispute />} />
        <Route path="/practices/mergers-acquisitions" element={<MergersAcquisitions />} />
        <Route path="/practices/private-equity" element={<PrivateEquity />} />
        <Route path="/practices/private-wealth-services" element={<PrivateWealthServices />} />
        <Route path="/practices/privatisation-public-procurement" element={<PrivatisationProcurement />} />
        <Route path="/practices/real-estate" element={<RealEstate />} />
        <Route path="/practices/reporting-whistleblowing" element={<ReportingWhistleblowing />} />
        <Route path="/practices/tax" element={<Tax />} />
        <Route path="/practices/tmet" element={<TMET />} />
        <Route path="/practices/venture-technology" element={<VentureTechnology />} />
        <Route path="/practices/white-collar-crime" element={<WhiteCollarCrime />} />
      </Routes>
    </>
  );
}

export default App;