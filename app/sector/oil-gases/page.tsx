
"use client";import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Flame, Shield, BarChart3, Settings } from "lucide-react";
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

const OilAndGas = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch oil and gas projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Oil & Gas"]._id)][0...3] {
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
        title="Oil & Gas"
        subtitle="Engineering Excellence for Energy Infrastructure"
        bannerImage="https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        introduction="Comprehensive engineering solutions for upstream, midstream, and downstream oil and gas operations. Our expertise ensures safe, efficient, and sustainable energy infrastructure development that meets the highest industry standards and environmental regulations."
        capabilities={[
          "Offshore platform design and engineering",
          "Refinery and petrochemical facilities",
          "Oil and gas processing plants",
          "Pipeline systems and pump stations",
          "Storage facilities and terminals",
          "Environmental compliance and safety systems",
        ]}
        services={[
          {
            title: "Upstream Facilities",
            description:
              "Engineering services for exploration and production facilities, including onshore and offshore infrastructure for oil and gas extraction.",
            features: [
              "Production platform design",
              "Well site facilities",
              "Gathering systems",
              "Water injection systems",
            ],
          },
          {
            title: "Midstream Infrastructure",
            description:
              "Comprehensive design for transportation and storage of crude oil, natural gas, and refined products through pipeline networks and terminals.",
            features: [
              "Pipeline engineering",
              "Compressor and pump stations",
              "Metering and custody transfer",
              "Terminal design and optimization",
            ],
          },
          {
            title: "Downstream Processing",
            description:
              "Engineering solutions for refining, petrochemical processing, and product distribution to convert crude oil and gas into marketable products.",
            features: [
              "Refinery process design",
              "Petrochemical plant engineering",
              "Product storage systems",
              "Loading and distribution facilities",
            ],
          },
          {
            title: "Environmental & Safety",
            description:
              "Specialized services focusing on environmental protection, regulatory compliance, and operational safety throughout oil and gas infrastructure.",
            features: [
              "Emissions control systems",
              "Fire and gas detection",
              "Emergency shutdown systems",
              "Environmental impact assessments",
            ],
          },
        ]}
        technologies={[
          {
            name: "Advanced Process Control",
            icon: <Settings className="h-6 w-6 text-primary" />,
            description:
              "Sophisticated control systems that optimize production, efficiency, and safety in oil and gas operations.",
          },
          {
            name: "Safety Instrumented Systems",
            icon: <Shield className="h-6 w-6 text-primary" />,
            description:
              "Integrated safety systems designed to prevent hazardous events and mitigate their consequences in high-risk environments.",
          },
          {
            name: "Corrosion Management",
            icon: <Flame className="h-6 w-6 text-primary" />,
            description:
              "Comprehensive corrosion protection strategies that extend infrastructure lifespan and prevent integrity failures.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="With decades of experience in the oil and gas sector, our specialized team delivers engineering excellence for some of the most complex energy projects in the region. We combine industry-specific expertise with cutting-edge technology to ensure projects are completed safely, efficiently, and sustainably. Our comprehensive approach addresses technical challenges while maintaining focus on environmental responsibility and operational safety throughout the project lifecycle."
        downloadBrochure={{
          title: "Oil & Gas Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default OilAndGas;
