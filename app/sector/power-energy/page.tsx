"use client";
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Zap,
  Wind,
  Sun,
  Battery,
  Globe,
  Bolt,
  Shield,
  Lightbulb,
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
import { client1, urlForClient1 } from "../../../lib/sanity";

type Project = {
  _id: string;
  title: string;
  description: string;
  location: string;
  capacity: string;
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

const PowerEnergy = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch power and energy projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Power & Energy"]._id)][0...3] {
          _id,
          title,
          description,
          location,
          "capacity": properties.capacity,
          "completion": properties.completion,
          mainImage,
          slug
        }`;
        const data = await client1.fetch(query);
        setProjects(data);

        // Transform Sanity projects to match the template format
        const transformedProjects = data.map((project: Project) => ({
          title: project.title,
          description: project.description || "",
          image: project.mainImage
            ? urlForClient1(project.mainImage).url()
            : "",
          details: {
            location: project.location || "",
            capacity: project.capacity || "",
            completion: project.completion || "",
          },
          slug: project.slug?.current || "",
        }));

        setFeaturedProjects(transformedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
        setFeaturedProjects([]); // Ensure featuredProjects is an empty array on error
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <SectorTemplate
        title="Power & Energy"
        subtitle="Powering Tomorrow's Sustainable Future"
        bannerImage="/sector/power.webp"
        introduction="Pioneering innovative energy solutions that drive sustainable development and technological advancement. Capital Engineering Consultancy delivers cutting-edge power infrastructure, renewable energy systems, and intelligent grid technologies that transform how we generate, distribute, and consume energy."
        capabilities={[
          "Advanced renewable energy infrastructure design",
          "Comprehensive grid modernization solutions",
          "Hybrid power system engineering",
          "Energy storage and transmission optimization",
          "Smart grid and IoT integration",
          "Sustainable energy transition strategies",
        ]}
        services={[
          {
            title: "Renewable Energy Solutions",
            description:
              "Comprehensive design and engineering of renewable energy infrastructure, including solar, wind, and hybrid power systems that maximize efficiency and sustainability.",
            features: [
              "Utility-scale solar farm design",
              "Offshore and onshore wind farm engineering",
              "Hybrid renewable energy systems",
              "Performance optimization technologies",
            ],
          },
          {
            title: "Grid Modernization",
            description:
              "Intelligent power transmission and distribution solutions that enhance grid resilience, efficiency, and integration of renewable energy sources.",
            features: [
              "Smart grid technologies",
              "Advanced metering infrastructure",
              "Predictive maintenance systems",
              "Decentralized energy network design",
            ],
          },
          {
            title: "Energy Storage Solutions",
            description:
              "Cutting-edge energy storage technologies that enable stable, reliable, and flexible power systems with advanced battery and alternative storage technologies.",
            features: [
              "Utility-scale battery storage",
              "Hydrogen energy storage",
              "Thermal energy storage systems",
              "Integrated energy management",
            ],
          },
          {
            title: "Sustainable Infrastructure",
            description:
              "Holistic approach to energy infrastructure that balances technological innovation, environmental responsibility, and economic feasibility.",
            features: [
              "Carbon-neutral energy solutions",
              "Circular economy integration",
              "Resilient infrastructure design",
              "Comprehensive sustainability consulting",
            ],
          },
        ]}
        technologies={[
          {
            name: "Smart Grid Ecosystems",
            icon: <Zap className="h-7 w-7 text-primary" />,
            description:
              "Advanced digital infrastructure enabling real-time monitoring, adaptive management, and seamless integration of diverse energy sources.",
          },
          {
            name: "Renewable Energy Optimization",
            icon: <Wind className="h-7 w-7 text-primary" />,
            description:
              "Sophisticated computational models and AI-driven technologies maximizing renewable energy generation and grid performance.",
          },
          {
            name: "Sustainable Energy Transition",
            icon: <Battery className="h-7 w-7 text-primary" />,
            description:
              "Comprehensive strategies for transitioning to low-carbon energy systems, integrating advanced storage and distribution technologies.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Capital Engineering Consultancy's approach to power and energy transcends traditional engineering. We combine technological innovation, environmental stewardship, and strategic vision to develop energy solutions that are not just efficient, but transformative. Our multidisciplinary expertise ensures holistic solutions that address the complex challenges of modern energy infrastructure."
        downloadBrochure={{
          title: "Capital Engineering Consultancy - Power & Energy Portfolio",
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

export default PowerEnergy;
