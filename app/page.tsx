"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import ExpertiseSection from "@/components/ExpertiseSection";
import SectorsGrid from "@/components/SectorsGrid";
import CapitalAdvantage from "@/components/CapitalAdvantage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LeadershipInsight from "@/components/LeadershipInsight";
import ContactCTA from "@/components/ContactCTA";
import ExperienceCards from "@/components/ExperienceCards";
import NewsroomTeasers from "@/components/NewsroomTeasers";
import Awards from "@/components/Awards";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

import { cn } from "@/lib/utils";

const Page = () => {
  const twoDRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main
        className={cn("relative no-scrollbar", "overflow-visible")}
        ref={twoDRef}
      >
        <Navbar />
        <div>
          <Hero />
          <About />
          <ClientLogos />
          <ExpertiseSection />
        </div>
        <div>
          <SectorsGrid />
          <ProjectsShowcase />
          <CapitalAdvantage />
          <ExperienceCards />
          <TestimonialsSlider />
          <LeadershipInsight />
          <NewsroomTeasers />
          <Awards />
          <FAQSection />
          <ContactCTA />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Page;
