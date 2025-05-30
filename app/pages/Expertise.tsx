
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/expertise/HeroSection";
import ExpertiseSection from "@/components/expertise/ExpertiseSection";
import CallToAction from "@/components/expertise/CallToAction";
import { servicesData } from "@/components/expertise/ServicesData";

const Expertise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection 
        title="Our Expertise" 
        subtitle="World-class solutions for architecture, engineering, and infrastructure projects."
      />
      
      {servicesData.map((service, index) => (
        <ExpertiseSection
          key={index}
          title={service.title}
          description={service.description}
          projects={service.projects}
          deliverables={service.deliverables}
          imageSrc={service.imageSrc}
          icon={service.icon}
          learnMoreLink={service.learnMoreLink}
          isReversed={index % 2 !== 0}
        />
      ))}
      
      <CallToAction />
      <Footer />
    </>
  );
};

export default Expertise;
