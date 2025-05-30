
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from '@/components/About';
import ClientLogos from "@/components/ClientLogos";
import ExpertiseSection from "@/components/ExpertiseSection";
import SectorsGrid from "@/components/SectorsGrid";
import CapitalAdvantage from "@/components/CapitalAdvantage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LeadershipInsight from "@/components/LeadershipInsight";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ExperienceCards from "@/components/ExperienceCards";
import NewsroomTeasers from "@/components/NewsroomTeasers";
import ProjectsShowcase from "@/components/ProjectsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About/>
        <ClientLogos />
        <ExpertiseSection />
        {/* Space for future 3JS Experience Section */}
        <div className="py-20 bg-gray-50 text-center">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision in Motion</h2>
            <p className="text-xl text-gray-400">Space reserved for 3JS Experience</p>
          </div>
        </div>
        <SectorsGrid />
        <ProjectsShowcase />
        {/* <CapitalAdvantage />
        <ExperienceCards /> */}
        <TestimonialsSlider />
        <LeadershipInsight />
        <NewsroomTeasers />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
