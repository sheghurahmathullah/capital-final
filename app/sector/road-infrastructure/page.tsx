"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Map, Building, Shield, Compass } from "lucide-react";
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

const RoadsAndInfrastructure = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch infrastructure projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Roads & Infrastructure"]._id)][0...3] {
          _id,
          title,
          description,
          location,
          "area": properties.area,
          "completion": properties.completion,
      ]mainImage,
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
        title="Roads & Infrastructure"
        subtitle="Engineering the Foundation of Urban Development"
        bannerImage="https://images.unsplash.com/photo-1708356810781-279c0986e16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        introduction="Comprehensive engineering solutions for transportation networks and urban infrastructure. From highways and interchanges to bridges and tunnels, we deliver resilient, efficient, and sustainable infrastructure that connects communities, enhances mobility, and supports economic development."
        capabilities={[
          "Highway and expressway design",
          "Urban road networks",
          "Bridges and elevated structures",
          "Tunnels and underpasses",
          "Stormwater management systems",
          "Intelligent transportation systems",
        ]}
        services={[
          {
            title: "Road Design & Engineering",
            description:
              "Comprehensive design services for highways, urban streets, and specialized roadways optimized for safety, capacity, and durability.",
            features: [
              "Geometric design optimization",
              "Pavement engineering",
              "Traffic analysis and modeling",
              "Highway safety audits",
            ],
          },
          {
            title: "Structures Engineering",
            description:
              "Expert design of bridges, viaducts, and other elevated structures that balance structural integrity, aesthetics, and cost-effectiveness.",
            features: [
              "Bridge design and analysis",
              "Interchange structures",
              "Pedestrian bridges",
              "Structure rehabilitation",
            ],
          },
          {
            title: "Urban Infrastructure",
            description:
              "Integrated solutions for urban environments that coordinate transportation, utilities, and public spaces for livable communities.",
            features: [
              "Complete streets design",
              "Urban drainage systems",
              "Utility coordination",
              "Public realm integration",
            ],
          },
          {
            title: "Smart Transportation",
            description:
              "Implementation of intelligent systems that enhance mobility, safety, and efficiency through technology integration.",
            features: [
              "Traffic management systems",
              "Smart corridor implementation",
              "Connected infrastructure",
              "Mobility data analytics",
            ],
          },
        ]}
        technologies={[
          {
            name: "Intelligent Transportation Systems",
            icon: <Map className="h-6 w-6 text-primary" />,
            description:
              "Advanced technologies that enhance traffic management, safety, and mobility through real-time monitoring and control.",
          },
          {
            name: "Bridge Information Modeling",
            icon: <Building className="h-6 w-6 text-primary" />,
            description:
              "Digital modeling techniques that optimize bridge design, construction, and lifecycle management with enhanced accuracy.",
          },
          {
            name: "Resilient Infrastructure Design",
            icon: <Shield className="h-6 w-6 text-primary" />,
            description:
              "Engineering approaches that enhance infrastructure resilience against climate change impacts and extreme weather events.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our transportation and infrastructure team brings decades of specialized experience in delivering complex projects across the region. We understand the unique challenges of infrastructure development in demanding environments and provide innovative, sustainable solutions that enhance mobility and connectivity. From initial planning through detailed design and implementation, we work closely with stakeholders to deliver infrastructure assets that serve communities for generations to come."
        downloadBrochure={{
          title: "Roads & Infrastructure Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default RoadsAndInfrastructure;
