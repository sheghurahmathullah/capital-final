"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Home, Clock, Settings, Zap } from "lucide-react";

const Shelters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <SectorTemplate
        title="Shelters"
        subtitle="Resilient Housing and Emergency Solutions"
        bannerImage="https://images.unsplash.com/photo-1711446703531-b8003909e87f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        introduction="Innovative shelter solutions for emergency response, displaced populations, and rapid deployment housing. Our designs balance durability, efficiency, and human comfort while meeting critical needs during challenging situations and transitions to permanent housing."
        capabilities={[
          "Rapid deployment emergency shelters",
          "Modular housing systems",
          "Transitional accommodation facilities",
          "Disaster-resilient community shelters",
          "Climate-adaptive housing solutions",
          "Portable medical and educational facilities",
        ]}
        services={[
          {
            title: "Emergency Shelter Design",
            description:
              "Rapid response shelter solutions designed for immediate deployment in disaster and emergency scenarios with minimal setup time.",
            features: [
              "Quick assembly structures",
              "Transportable shelter units",
              "Community shelter planning",
              "Post-disaster recovery facilities",
            ],
          },
          {
            title: "Modular Housing",
            description:
              "Prefabricated and modular housing solutions that provide dignified living spaces while maximizing efficiency and adaptability.",
            features: [
              "Scalable modular systems",
              "Factory-built quality control",
              "Customizable interior layouts",
              "Community integration features",
            ],
          },
          {
            title: "Transitional Facilities",
            description:
              "Medium-term accommodation facilities that bridge the gap between emergency response and permanent housing solutions.",
            features: [
              "Community-focused designs",
              "Support service integration",
              "Progressive upgrade pathways",
              "Multi-family housing options",
            ],
          },
          {
            title: "Resilient Communities",
            description:
              "Comprehensive planning for resilient communities that integrates shelter solutions with essential infrastructure and services.",
            features: [
              "Community infrastructure planning",
              "Water and sanitation integration",
              "Public space development",
              "Climate adaptation strategies",
            ],
          },
        ]}
        technologies={[
          {
            name: "Rapid Deployment Systems",
            icon: <Clock className="h-6 w-6 text-primary" />,
            description:
              "Engineered shelter solutions that can be transported and assembled quickly for emergency response scenarios.",
          },
          {
            name: "Modular Construction",
            icon: <Home className="h-6 w-6 text-primary" />,
            description:
              "Prefabricated building components that enable fast assembly, quality control, and scalability for various shelter needs.",
          },
          {
            name: "Adaptable Systems",
            icon: <Settings className="h-6 w-6 text-primary" />,
            description:
              "Flexible designs that can be reconfigured based on changing needs, family sizes, and local conditions.",
          },
        ]}
        featuredProjects={[]}
        whyChooseUs="Our shelter solutions are developed through years of experience in crisis response, humanitarian engineering, and sustainable design. We understand the complex requirements of emergency and transitional housing, balancing immediate needs with long-term sustainability. Our multidisciplinary team works closely with humanitarian organizations, government agencies, and communities to create shelter solutions that provide safety, dignity, and resilience in challenging circumstances."
        downloadBrochure={{
          title: "Shelter Solutions Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default Shelters;
