import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import HousePlanPage from './components/Houseplan.js';
import ServicesPage from './components/ServicesPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import ElevationPage from './components/ElevationPage.js';
import DesignPage from './components/DesignPage.js';
import Pricing from './components/Pricing.js';
import Blog from './components/Blog.js';
import OurStory from './components/OurStory.js';
import Careers from './components/Careers.js';
import ReadyHouseDesigns from './components/ReadyHouseDesigns.js';
import FloorPlan from './components/FloorPlan.js';
import HouseConstruction from './components/HouseConstruction.js';
import HomeInteriorDesign from './components/HomeInteriorDesign.js';
import OfficeInteriorDesign from './components/OfficeInteriorDesign.js';
import DesignIdeas from './components/DesignIdeas.js';
import TwoDPlansElevations from './components/TwoDPlansElevations.js';
import ThreeDArchitecturalModeling from './components/ThreeDArchitecturalModeling.js';
import ThreeDRenderingVisualization from './components/ThreeDRenderingVisualization.js';
import BuildingInformationModeling from './components/BuildingInformationModeling.js';
import VirtualToursWalkthroughs from './components/VirtualToursWalkthroughs.js';
import ThreeDInteriorDesign from './components/ThreeDInteriorDesign.js';
import ResidentialConstruction from './components/ResidentialConstruction.js';
import CommercialConstruction from './components/CommercialConstruction.js';
import Renovations from './components/Renovations.js';
import FootingConstruction from './components/FootingConstruction.js';
import DailyChecklistsInspections from './components/DailyChecklistsInspections.js';
import ProgressReportsDocumentation from './components/ProgressReportsDocumentation.js';
import CommunicationCollaboration from './components/CommunicationCollaboration.js';
import SafetyProtocolsCompliance from './components/SafetyProtocolsCompliance.js';
import MaterialManagementInventory from './components/MaterialManagementInventory.js';
import QualityAssuranceControl from './components/QualityAssuranceControl.js';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/house-plans" element={<HousePlanPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/elevation" element={<ElevationPage />} />
          <Route path="/designpage" element={<DesignPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ready-designs" element={<ReadyHouseDesigns />} />
          <Route path="/floor-plans" element={<FloorPlan />} />
          <Route path="/house-construction" element={<HouseConstruction />} />
          <Route path="/home-interior" element={<HomeInteriorDesign />} />
          <Route path="/office-interior" element={<OfficeInteriorDesign />} />
          <Route path="/design-ideas" element={<DesignIdeas />} />
          <Route path="/two-d-plans-elevations" element={<TwoDPlansElevations />} />
          <Route path="/three-d-architectural-modeling" element={<ThreeDArchitecturalModeling />} />
          <Route path="/three-d-rendering-visualization" element={<ThreeDRenderingVisualization />} />
          <Route path="/building-information-modeling" element={<BuildingInformationModeling />} />
          <Route path="/virtual-tours-walkthroughs" element={<VirtualToursWalkthroughs />} />
          <Route path="/three-d-interior-design" element={<ThreeDInteriorDesign />} />
          <Route path="/residential-construction" element={<ResidentialConstruction />} />
          <Route path="/commercial-construction" element={<CommercialConstruction />} />
          <Route path="/renovations" element={<Renovations />} />
          <Route path="/footing-construction" element={<FootingConstruction />} />
          <Route path="/daily-checklists-inspections" element={<DailyChecklistsInspections />} />
          <Route path="/progress-reports-documentation" element={<ProgressReportsDocumentation />} />
          <Route path="/communication-collaboration" element={<CommunicationCollaboration />} />
          <Route path="/safety-protocols-compliance" element={<SafetyProtocolsCompliance />} />
          <Route path="/material-management-inventory" element={<MaterialManagementInventory />} />
          <Route path="/quality-assurance-control" element={<QualityAssuranceControl />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;