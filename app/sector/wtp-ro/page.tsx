"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Droplet, Zap, BarChart3, Shield } from "lucide-react";
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

const WaterDesalination = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch projects from both categories
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && (title=="RO & Desalination Plants" || title=="Wastewater Treatment Plants")]._id)][0...3] {
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
    slug: project.slug.current,
  }));

  return (
    <>
      <Navbar />
      <SectorTemplate
        title="WTP, RO & Desalination"
        subtitle="Engineering Water Solutions for Arid Environments"
        bannerImage="/sector/wtp.jpg"
        introduction="Comprehensive engineering solutions for water treatment, reverse osmosis, and desalination systems. Our expertise ensures reliable, efficient, and sustainable water infrastructure that addresses the critical needs of water-scarce regions while optimizing energy consumption and environmental impact."
        capabilities={[
          "Seawater desalination plants",
          "Reverse osmosis systems design",
          "Water treatment plants",
          "Brine management solutions",
          "Energy recovery systems",
          "Water distribution networks",
        ]}
        services={[
          {
            title: "Desalination Engineering",
            description:
              "Comprehensive design and engineering services for seawater and brackish water desalination plants using various technologies.",
            features: [
              "Thermal desalination systems",
              "Reverse osmosis plant design",
              "Hybrid desalination solutions",
              "Plant optimization services",
            ],
          },
          {
            title: "Water Treatment",
            description:
              "Engineering solutions for water treatment plants that produce safe, high-quality water for municipal and industrial applications.",
            features: [
              "Conventional treatment processes",
              "Advanced filtration systems",
              "Disinfection technologies",
              "Specialized industrial treatment",
            ],
          },
          {
            title: "Energy Optimization",
            description:
              "Specialized services focusing on energy efficiency and renewable integration in water treatment and desalination facilities.",
            features: [
              "Energy recovery devices",
              "Renewable energy integration",
              "Process optimization",
              "Energy audit and retrofits",
            ],
          },
          {
            title: "Water Infrastructure",
            description:
              "Design and engineering of distribution networks, storage facilities, and pumping systems that ensure reliable water delivery.",
            features: [
              "Transmission main design",
              "Pumping station optimization",
              "Storage facility engineering",
              "Network hydraulic modeling",
            ],
          },
        ]}
        technologies={[
          {
            name: "Advanced Membrane Systems",
            icon: <Droplet className="h-6 w-6 text-primary" />,
            description:
              "Cutting-edge membrane technologies that enhance water production efficiency while reducing energy consumption in desalination.",
          },
          {
            name: "Energy Recovery Devices",
            icon: <Zap className="h-6 w-6 text-primary" />,
            description:
              "Innovative systems that capture and reuse energy in high-pressure desalination processes, significantly reducing overall energy needs.",
          },
          {
            name: "Smart Water Management",
            icon: <BarChart3 className="h-6 w-6 text-primary" />,
            description:
              "Digital monitoring and control systems that optimize water treatment processes, quality, and distribution in real-time.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our water technology team brings specialized expertise in desalination and water treatment processes critical for water security in arid regions. We understand the complex technical challenges of producing fresh water from seawater while maximizing energy efficiency and minimizing environmental impact. Our solutions balance reliable water production with sustainability considerations, delivering water infrastructure that serves communities and industries with the highest standards of quality and efficiency."
        downloadBrochure={{
          title: "WTP & Desalination Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default WaterDesalination;
