"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Flame,
  Shield,
  BarChart3,
  Settings,
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
        bannerImage="/sector/oilgas.webp"
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

export default OilAndGas;
