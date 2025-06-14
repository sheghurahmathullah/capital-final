"use client";
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Home,
  Leaf,
  Shield,
  Sparkles,
  Heart,
  Umbrella,
  Flower,
  Sun,
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

const ResidentialVilla = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch residential projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Residential & Villa"]._id)][0...3] {
          _id,
          title,
          description,
          location,
          "area": properties.area,
          "completion": properties.completion,
          mainImage,
          slug
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
    slug: project.slug?.current || "",
  }));

  return (
    <>
      <Navbar />
      <SectorTemplate
        title="Residential & Villa"
        subtitle="Designing Exceptional Living Spaces"
        bannerImage="/sector/residential.jpg"
        introduction="Transforming living spaces into personalized sanctuaries of comfort, elegance, and functionality. At Capital Engineering Consultancy, we craft residential environments that seamlessly blend innovative design, sustainable technologies, and individual lifestyle needs."
        capabilities={[
          "Bespoke architectural design for luxury villas and residences",
          "Innovative spatial planning and interior optimization",
          "Advanced sustainable home technologies",
          "Customized solutions for diverse family requirements",
          "Integrated smart home systems",
          "Holistic approach to comfort, efficiency, and aesthetics",
        ]}
        services={[
          {
            title: "Architectural Personalization",
            description:
              "Tailored residential designs that reflect individual lifestyles, preferences, and aspirational living. Our approach transforms living spaces into personalized expressions of comfort and style.",
            features: [
              "Custom villa and home designs",
              "Adaptive spatial configurations",
              "Personalized aesthetic solutions",
              "Lifestyle-centric architectural planning",
            ],
          },
          {
            title: "Sustainable Living Solutions",
            description:
              "Integrating cutting-edge sustainable technologies to create energy-efficient, environmentally responsible homes that reduce carbon footprint without compromising luxury.",
            features: [
              "Passive design strategies",
              "Renewable energy integration",
              "Water conservation systems",
              "Eco-friendly material selection",
            ],
          },
          {
            title: "Smart Home Innovation",
            description:
              "Advanced technological integration that enhances comfort, security, and efficiency through intelligent home automation and responsive design systems.",
            features: [
              "Comprehensive home automation",
              "Advanced security systems",
              "Energy management solutions",
              "Adaptive environmental controls",
            ],
          },
          {
            title: "Holistic Interior Engineering",
            description:
              "Precision engineering of interior spaces that optimize functionality, comfort, and aesthetic appeal through meticulous design and technical expertise.",
            features: [
              "Ergonomic space planning",
              "Acoustic and thermal optimization",
              "Lighting design integration",
              "Flexible living configurations",
            ],
          },
        ]}
        technologies={[
          {
            name: "Smart Home Ecosystems",
            icon: <Home className="h-7 w-7 text-primary" />,
            description:
              "Comprehensive digital infrastructure creating responsive, adaptive living environments that enhance comfort, security, and energy efficiency.",
          },
          {
            name: "Sustainable Living Technologies",
            icon: <Leaf className="h-7 w-7 text-primary" />,
            description:
              "Advanced ecological design strategies that minimize environmental impact while maximizing residential comfort and efficiency.",
          },
          {
            name: "Wellness-Centric Design",
            icon: <Flower className="h-7 w-7 text-primary" />,
            description:
              "Innovative design approaches that prioritize occupant well-being through biophilic principles, natural light, and holistic environmental considerations.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Capital Engineering Consultancy's distinctive approach to residential design transcends traditional architecture. We create living spaces that are not merely structures, but personalized environments that adapt, inspire, and nurture. Our multidisciplinary expertise ensures each residential project is a unique reflection of individual aspirations, technical innovation, and sustainable living."
        downloadBrochure={{
          title:
            "Capital Engineering Consultancy - Residential Design Portfolio",
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

export default ResidentialVilla;
