"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Settings,
  Truck,
  BarChart3,
  Package,
  Building,
  GraduationCap,
  Train,
  Ship,
  Hotel,
  Factory,
  Waves,
  Fuel,
  Zap,
  Route,
} from "lucide-react";
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
    path: "/sector/oil-gas",
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
    path: "/sector/roads-infrastructure",
    icon: <Route className="h-6 w-6" />,
  },
  {
    title: "WTP, RO & Desalination",
    path: "/sector/wtp-ro-desalination",
    icon: <Waves className="h-6 w-6" />,
  },
];

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
        bannerImage="/sector/industrial.jpeg"
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

export default IndustrialAndLogistics;
