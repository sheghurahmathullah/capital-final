"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Train, Map, Shield, BarChart3 } from "lucide-react";
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

const Railways = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch railway projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Railway"]._id)][0...3] {
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
        title="Railways"
        subtitle="Engineering the Future of Rail Infrastructure"
        bannerImage="https://images.unsplash.com/photo-1660198348421-d80e956c7db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        introduction="Comprehensive engineering solutions for railway systems, stations, and supporting infrastructure. Our expertise spans from metro networks to high-speed rail, delivering safe, efficient, and sustainable transportation systems that connect communities and drive economic growth."
        capabilities={[
          "Rail station design and modernization",
          "Metro and light rail transit systems",
          "High-speed railway infrastructure",
          "Railway bridges and tunnels",
          "Signaling and control systems",
          "Transit-oriented development planning",
        ]}
        services={[
          {
            title: "Railway Infrastructure Design",
            description:
              "Comprehensive engineering services for rail networks, including track design, bridges, tunnels, and related infrastructure.",
            features: [
              "Track alignment optimization",
              "Railway bridge engineering",
              "Tunnel design and construction",
              "Earthworks and drainage systems",
            ],
          },
          {
            title: "Station Architecture",
            description:
              "Creating modern, efficient, and aesthetically pleasing railway stations that enhance passenger experience and urban integration.",
            features: [
              "Passenger flow optimization",
              "Multi-modal transit hubs",
              "Historic station renovations",
              "Commercial integration opportunities",
            ],
          },
          {
            title: "Railway Systems Engineering",
            description:
              "Design and implementation of essential railway systems including signaling, electrification, and communications technologies.",
            features: [
              "Signaling and train control",
              "Traction power and electrification",
              "Communications systems",
              "Operational control centers",
            ],
          },
          {
            title: "Transit Planning",
            description:
              "Strategic planning for new and expanding rail networks, focused on optimizing connectivity, capacity, and urban integration.",
            features: [
              "Network feasibility studies",
              "Transit-oriented development",
              "Capacity enhancement planning",
              "Multi-modal integration strategies",
            ],
          },
        ]}
        technologies={[
          {
            name: "Advanced Signaling Systems",
            icon: <Train className="h-6 w-6 text-primary" />,
            description:
              "State-of-the-art CBTC and ERTMS implementations that enhance safety, reliability, and operational capacity of rail networks.",
          },
          {
            name: "Digital Twin Technology",
            icon: <Map className="h-6 w-6 text-primary" />,
            description:
              "Creating virtual replicas of physical rail systems for optimized design, predictive maintenance, and enhanced operations.",
          },
          {
            name: "Safety and Security Systems",
            icon: <Shield className="h-6 w-6 text-primary" />,
            description:
              "Integrated surveillance, access control, and emergency management solutions for railway infrastructure protection.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our railway engineering team brings decades of specialized experience in delivering complex rail projects across the region and internationally. We combine technical excellence with innovative approaches to create rail solutions that are safe, efficient, and sustainable. From initial feasibility studies through detailed design and construction support, we provide comprehensive services tailored to the unique requirements of each railway project, ensuring on-time delivery and optimal performance."
        downloadBrochure={{
          title: "Railways Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default Railways;
