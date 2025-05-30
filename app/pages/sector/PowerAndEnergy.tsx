"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Zap, Sun, Wind, BarChart3 } from "lucide-react";
import { client1, urlForClient1 } from "../../../lib/sanity";

type Project = {
  _id: string;
  title: string;
  description: string;
  location: string;
  area: string;
  completion: string;
  mainImage: any;
  slug: {
    current: string;
  };
};

const PowerAndEnergy = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch power & energy projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Power & Energy"]._id)][0...3] {
          _id,
          title,
          description,
          location,
          "area": properties.area,
          "completion": properties.completion,
          mainImage,
          "slug": slug.current
        }`;
        const data = await client1.fetch(query);
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Transform Sanity projects to match the template format
  const featuredProjects = projects.map((project) => ({
    title: project.title,
    description: project.description || "",
    image: project.mainImage ? urlForClient1(project.mainImage).url() : "",
    details: {
      location: project.location || "",
      area: project.area || "",
      completion: project.completion || "",
    },
    slug: typeof project.slug === "string" ? project.slug : project.slug.current,
  }));

  return (
    <>
      <Navbar />
      <SectorTemplate
        title="Power & Energy"
        subtitle="Engineering Sustainable Energy Solutions"
        bannerImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        introduction="Comprehensive engineering services for power generation, transmission, and distribution systems. From conventional power plants to renewable energy installations, we deliver reliable, efficient, and sustainable energy infrastructure that powers economic growth while addressing environmental challenges."
        capabilities={[
          "Conventional and renewable power generation",
          "High voltage transmission networks",
          "Substations and distribution systems",
          "Solar PV and CSP plants",
          "Wind farm design and engineering",
          "Energy storage solutions",
        ]}
        services={[
          {
            title: "Power Generation",
            description:
              "Complete engineering services for various power generation facilities, from traditional thermal power plants to cutting-edge renewable energy systems.",
            features: [
              "Combined cycle power plants",
              "Solar power facilities",
              "Wind farm development",
              "Hybrid power systems",
            ],
          },
          {
            title: "Transmission & Distribution",
            description:
              "Design and engineering for reliable electricity transmission and distribution networks that connect generation to consumers.",
            features: [
              "High-voltage transmission lines",
              "Substation design",
              "Distribution network planning",
              "SCADA and control systems",
            ],
          },
          {
            title: "Renewable Energy",
            description:
              "Specialized services for renewable energy projects, focusing on solar, wind, and energy storage to support the clean energy transition.",
            features: [
              "Utility-scale solar farms",
              "Onshore wind projects",
              "Battery storage systems",
              "Grid integration solutions",
            ],
          },
          {
            title: "Energy Efficiency",
            description:
              "Consultancy and engineering services to optimize energy consumption in industrial, commercial, and residential applications.",
            features: [
              "Energy audits and assessments",
              "Building energy modeling",
              "Efficiency retrofit design",
              "Smart grid solutions",
            ],
          },
        ]}
        technologies={[
          {
            name: "Solar Photovoltaic Systems",
            icon: <Sun className="h-6 w-6 text-primary" />,
            description:
              "Advanced solar PV technology that converts sunlight directly into electricity with increasing efficiency and decreasing costs.",
          },
          {
            name: "Wind Power Technology",
            icon: <Wind className="h-6 w-6 text-primary" />,
            description:
              "Modern wind turbine designs that maximize energy capture from wind resources with enhanced reliability and grid integration.",
          },
          {
            name: "Energy Storage Solutions",
            icon: <Zap className="h-6 w-6 text-primary" />,
            description:
              "Battery and alternative storage technologies that enable greater renewable integration and grid stability.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our power and energy team brings specialized expertise across the entire energy value chain, from generation to end-use. We understand the complex technical, regulatory, and environmental challenges of modern energy systems and deliver innovative solutions that balance reliability, sustainability, and cost-effectiveness. With experience in both conventional and renewable energy projects, we help clients navigate the energy transition while maintaining secure and affordable energy supplies."
        downloadBrochure={{
          title: "Power & Energy Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default PowerAndEnergy;
