"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Home,
  Clock,
  Settings,
  Zap,
  Building,
  GraduationCap,
  Train,
  Ship,
  Hotel,
  Factory,
  Waves,
  Fuel,
  Route,
} from "lucide-react";

const topics = [
  {
    title: "Commercial",
    path: "/sector/commercial",
    icon: <Building className="h-6 w-6" />,
  },
  {
    title: "Education",
    path: "/sector/education",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Railways",
    path: "/sector/railways",
    icon: <Train className="h-6 w-6" />,
  },
  {
    title: "Oil & Gas",
    path: "/sector/oil-gases",
    icon: <Fuel className="h-6 w-6" />,
  },
  {
    title: "Power & Energy",
    path: "/sector/power-energy",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Marine & Ports",
    path: "/sector/marine-ports",
    icon: <Ship className="h-6 w-6" />,
  },
  {
    title: "Healthcare & Hospitality",
    path: "/sector/healthcare-hospitality",
    icon: <Hotel className="h-6 w-6" />,
  },
  {
    title: "Industrial & Logistics",
    path: "/sector/industrial-logistics",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    title: "Roads & Infrastructure",
    path: "/sector/road-infrastructure",
    icon: <Route className="h-6 w-6" />,
  },
  {
    title: "WTP, RO & Desalination",
    path: "/sector/wtp-ro-desalination",
    icon: <Waves className="h-6 w-6" />,
  },
];

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
        downloadBrochure={{
          title: "Shelter Solutions Brochure",
          url: "#",
        }}
      >
        {/* Navigation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">
              Explore Our Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <a
                  key={index}
                  href={topic.path}
                  className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-primary">{topic.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {topic.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </SectorTemplate>
      <Footer />
    </>
  );
};

export default Shelters;
