"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Anchor, Ship, Map, BarChart3 } from "lucide-react";
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

const MarineAndPorts = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch marine & ports projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Marine & Ports"]._id)][0...3] {
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
        title="Marine & Ports"
        subtitle="Engineering Excellence for Maritime Infrastructure"
        bannerImage="/sector/marine.jpg"
        introduction="Comprehensive engineering solutions for ports, harbors, and maritime facilities. Our expertise spans from conceptual planning to detailed design and construction supervision, ensuring safe, efficient, and sustainable maritime infrastructure that supports global trade and economic development."
        capabilities={[
          "Container terminal design and optimization",
          "Bulk and liquid cargo facilities",
          "Marina and waterfront developments",
          "Coastal protection structures",
          "Dredging and reclamation works",
          "Naval and defense port facilities",
        ]}
        services={[
          {
            title: "Port Planning & Design",
            description:
              "Comprehensive planning and engineering services for new ports and expansion of existing port facilities optimized for operational efficiency.",
            features: [
              "Master planning and feasibility studies",
              "Terminal layout optimization",
              "Marine traffic simulation",
              "Port capacity analysis",
            ],
          },
          {
            title: "Marine Structures",
            description:
              "Design and engineering of key port infrastructure elements including quay walls, breakwaters, jetties, and specialized handling facilities.",
            features: [
              "Quay wall and berth design",
              "Breakwater engineering",
              "Mooring and berthing analysis",
              "Specialized marine terminals",
            ],
          },
          {
            title: "Coastal Engineering",
            description:
              "Specialized services addressing the complex interface between land and sea, including coastal protection, reclamation, and environmental management.",
            features: [
              "Shoreline protection systems",
              "Beach nourishment and restoration",
              "Land reclamation design",
              "Coastal environmental assessments",
            ],
          },
          {
            title: "Port Operations",
            description:
              "Engineering solutions to optimize cargo handling, vessel operations, and overall port efficiency through technology integration.",
            features: [
              "Terminal operating systems",
              "Equipment specification and layout",
              "Process optimization",
              "Simulation and modeling",
            ],
          },
        ]}
        technologies={[
          {
            name: "Terminal Automation",
            icon: <BarChart3 className="h-6 w-6 text-primary" />,
            description:
              "Advanced automation technologies for container handling, vessel berthing, and cargo management that enhance efficiency and safety.",
          },
          {
            name: "Mooring Systems",
            icon: <Anchor className="h-6 w-6 text-primary" />,
            description:
              "Specialized mooring solutions that ensure vessel security in various sea conditions while optimizing berth utilization.",
          },
          {
            name: "Vessel Traffic Management",
            icon: <Ship className="h-6 w-6 text-primary" />,
            description:
              "Integrated systems for monitoring and managing vessel movements, enhancing port efficiency and maritime safety.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our marine and ports team brings together specialized expertise in maritime engineering, logistics, and environmental management to deliver world-class port facilities. We understand the complex interplay of factors that influence port design and operations, from vessel characteristics to cargo handling requirements to environmental concerns. With our comprehensive approach, we help clients develop port assets that maximize efficiency, safety, and return on investment while minimizing environmental impact."
        downloadBrochure={{
          title: "Marine & Ports Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default MarineAndPorts;
