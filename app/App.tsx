"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import LeadershipCapital from "./pages/LeadershipCapital";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import PowerInfrastructure from "./pages/expertise/Power-Infrastructure";
import StructuralEngineering from "./pages/expertise/StructuralEngineering";
import ArchitectureLandscape from "./pages/expertise/ArchitectureLandscape";
import BimService from "./pages/expertise/BimService";
import EnvironmentalSolutions from "./pages/expertise/EnvironmentalSolutions";
import FitoutInterior from "./pages/expertise/FitoutInterior";
import MepDesign from "./pages/expertise/MepDesign";
import Oilgases from "./pages/expertise/Oilgas";
// Correcting the import path for ProjectManagement using the correct file name
import Projectmanagement from "./pages/expertise/Project-Management";
import Commercial from "./pages/sector/Commercial";
import Education from "./pages/sector/Education";
import Railways from "./pages/sector/Railways";
import Shelters from "./pages/sector/Shelters";
import OilAndGas from "./pages/sector/OilAndGas";
import PowerAndEnergy from "./pages/sector/PowerAndEnergy";
import MarineAndPorts from "./pages/sector/MarineAndPorts";
import HealthcareAndHospitality from "./pages/sector/HealthcareAndHospitality";
import IndustrialAndLogistics from "./pages/sector/IndustrialAndLogistics";
import RoadsAndInfrastructure from "./pages/sector/RoadsAndInfrastructure";
import WaterDesalination from "./pages/sector/WaterDesalination";
// import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/leaders" element={<LeadershipCapital />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/portfolio/:slug" element={<PortfolioDetail />} /> */}
        
        {/* Careers Pages */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareerDetail />} />

        {/* Expertise Pages */}
        <Route
          path="/expertise/architecture-landscape"
          element={<ArchitectureLandscape />}
        />
        <Route path="/expertise/bim-service" element={<BimService />} />
        <Route
          path="/expertise/environmental-solutions"
          element={<EnvironmentalSolutions />}
        />
        <Route path="/expertise/fitout-interior" element={<FitoutInterior />} />
        <Route path="/expertise/mep-design" element={<MepDesign />} />
        <Route path="/expertise/oilgas" element={<Oilgases />} />
        <Route
          path="/expertise/power-infrastructure"
          element={<PowerInfrastructure />}
        />
        <Route
          path="/expertise/project-management"
          element={<Projectmanagement />}
        />
        <Route
          path="/expertise/structural-engineering"
          element={<StructuralEngineering />}
        />

        {/* Sector Pages */}
        <Route path="/sector/commercial" element={<Commercial />} />
        <Route path="/sector/education" element={<Education />} />
        <Route path="/sector/railways" element={<Railways />} />
        <Route path="/sector/shelters" element={<Shelters />} />
        <Route path="/sector/oil-and-gas" element={<OilAndGas />} />
        <Route path="/sector/power-and-energy" element={<PowerAndEnergy />} />
        <Route path="/sector/marine-and-ports" element={<MarineAndPorts />} />
        <Route
          path="/sector/healthcare-and-hospitality"
          element={<HealthcareAndHospitality />}
        />
        <Route
          path="/sector/industrial-and-logistics"
          element={<IndustrialAndLogistics />}
        />
        <Route
          path="/sector/roads-and-infrastructure"
          element={<RoadsAndInfrastructure />}
        />
        <Route
          path="/sector/water-desalination"
          element={<WaterDesalination />}
        />

        {/* Newsroom Pages */}
        {/* <Route path="/newsroom" element={<NewsroomLayout />}>
          <Route index element={<Blog />} />
          <Route path="/newsroom/blog" element={<Blog />} />
          <Route path="/newsroom/blog/:slug" element={<BlogDetail />} />
          <Route path="/newsroom/press-release" element={<PressRelease />} />
          <Route
            path="/newsroom/press-release/:slug"
            element={<PressReleaseDetail />}
          />
          <Route path="/newsroom/media-coverage" element={<MediaCoverage />} />
          <Route
            path="/newsroom/media-coverage/:id"
            element={<MediaCoverageDetail />}
          />
          <Route path="/newsroom/ceo-letter" element={<CEOLetter />} />
          <Route
            path="/newsroom/ceo-letter/:id"
            element={<CEOLetterDetail />}
          />
        </Route> */}

        {/* Old Expertise Pages - For backwards compatibility */}
       
        <Route path="/powerinfrastructure" element={<PowerInfrastructure />} />
      
        <Route
          path="/structuralengineering"
          element={<StructuralEngineering />}
        />

        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
