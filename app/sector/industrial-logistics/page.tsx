"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Settings, Truck, BarChart3, Package } from "lucide-react";
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

const IndustrialAndLogistics = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch industrial and logistics projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && (title=="Industrial" || title=="Logistics & Warehouses")]._id)][0...3] {
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
        title="Industrial & Logistics"
        subtitle="Engineering Efficient Production and Distribution"
        bannerImage="https://images.unsplash.com/photo-1590496794008-383c8070b257?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        introduction="Comprehensive engineering solutions for industrial facilities and logistics centers. Our expertise spans manufacturing plants, warehouses, and distribution networks, creating efficient, sustainable, and technology-driven environments that optimize operations and enhance supply chain performance."
        capabilities={[
          "Manufacturing facility design",
          "Warehouse and distribution centers",
          "Automated storage and retrieval systems",
          "Cold chain facilities",
          "Industrial process engineering",
          "Smart logistics infrastructure",
        ]}
        services={[
          {
            title: "Industrial Facility Design",
            description:
              "Comprehensive engineering for manufacturing plants, processing facilities, and industrial complexes optimized for production efficiency.",
            features: [
              "Factory layout optimization",
              "Production line engineering",
              "Industrial building systems",
              "Clean room design",
            ],
          },
          {
            title: "Logistics Infrastructure",
            description:
              "Design and engineering for distribution centers, warehouses, and logistics hubs that enhance supply chain efficiency and throughput.",
            features: [
              "Warehouse layout optimization",
              "Material handling systems",
              "Cross-docking facilities",
              "Last-mile distribution centers",
            ],
          },
          {
            title: "Automation Systems",
            description:
              "Implementation of advanced automation technologies to enhance productivity, accuracy, and safety in industrial and logistics operations.",
            features: [
              "Automated storage and retrieval",
              "Conveyor and sortation systems",
              "Robotic integration",
              "AGV implementation",
            ],
          },
          {
            title: "Supply Chain Facilities",
            description:
              "Specialized infrastructure supporting various stages of the supply chain, from raw material processing to finished goods distribution.",
            features: [
              "Cold chain facilities",
              "E-commerce fulfillment centers",
              "Intermodal logistics hubs",
              "Urban distribution facilities",
            ],
          },
        ]}
        technologies={[
          {
            name: "Smart Manufacturing",
            icon: <Settings className="h-6 w-6 text-primary" />,
            description:
              "Industry 4.0 technologies that enhance manufacturing efficiency through automation, data exchange, and advanced analytics.",
          },
          {
            name: "Warehouse Automation",
            icon: <Package className="h-6 w-6 text-primary" />,
            description:
              "Robotic and automated systems that optimize storage, retrieval, and order fulfillment processes in distribution facilities.",
          },
          {
            name: "Fleet Management Systems",
            icon: <Truck className="h-6 w-6 text-primary" />,
            description:
              "Integrated technologies for tracking, routing, and managing transportation assets to enhance logistics efficiency.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our industrial and logistics team combines specialized expertise in manufacturing processes, materials handling, and supply chain optimization. We understand how to create facilities that balance operational efficiency, technological integration, and sustainable design. From initial concept through detailed design and implementation, we partner with clients to deliver industrial and logistics infrastructure that enhances productivity, reduces costs, and supports long-term business growth."
        downloadBrochure={{
          title: "Industrial & Logistics Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default IndustrialAndLogistics;
