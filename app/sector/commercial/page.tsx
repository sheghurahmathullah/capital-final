"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  Building,
  Zap,
  Scale,
  BarChart3,
  Award,
  Clock,
  Shield,
  Lightbulb,
  GraduationCap,
  Train,
  Droplet,
  Power,
  Ship,
  Hotel,
  Factory,
  Map,
  Waves,
  Route,
  Fuel,
} from "lucide-react";
import { client1, urlForClient1 } from "../../../lib/sanity";

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

const Commercial = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch commercial projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Commercial"]._id)][0...3] {
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
        title="Commercial"
        subtitle="Crafting Exceptional Business Environments"
        bannerImage="/sector/commercial.jpeg"
        introduction="Elevating commercial spaces through sophisticated design and engineering excellence. At Capital Engineering Consultancy, we create distinctive environments where businesses thrive, combining aesthetic refinement with functional precision for offices, retail centers, and mixed-use developments."
        capabilities={[
          "Bespoke architectural solutions for premium commercial spaces",
          "Advanced structural engineering for iconic buildings",
          "Intelligent MEP systems integration",
          "Sustainable design with LEED and Estidama certifications",
          "Space optimization for maximum efficiency and ROI",
          "Seamless renovation and adaptive reuse of existing structures",
        ]}
        services={[
          {
            title: "Architectural Excellence",
            description:
              "Distinctive commercial spaces that harmonize form and function. Capital Engineering Consultancy designs reflect contemporary aesthetics while delivering environments that enhance productivity, well-being, and brand identity.",
            features: [
              "Signature façade design",
              "Human-centric interior planning",
              "Biophilic design integration",
              "Brand-aligned spatial experiences",
            ],
          },
          {
            title: "Structural Innovation",
            description:
              "Forward-thinking structural solutions that enable architectural vision while ensuring uncompromising safety and efficiency. Capital Engineering Consultancy delivers commercial developments of all scales with precision and expertise.",
            features: [
              "Advanced computational design",
              "Performance-based engineering",
              "Innovative material applications",
              "Future-proof structural systems",
            ],
          },
        ]}
        technologies={[
          {
            name: "Intelligent Building Ecosystems",
            icon: <Building className="h-7 w-7 text-primary" />,
            description:
              "Comprehensive digital infrastructure that creates responsive, adaptive commercial environments enhancing occupant experience while optimizing operational efficiency.",
          },
          {
            name: "Net-Zero Energy Solutions",
            icon: <Zap className="h-7 w-7 text-primary" />,
            description:
              "Advanced energy strategies that minimize environmental impact while delivering significant operational cost savings through innovative systems and envelope design.",
          },
          {
            name: "Circular Material Economy",
            icon: <Scale className="h-7 w-7 text-primary" />,
            description:
              "Premium material selection focused on sustainability, longevity, and wellness, creating spaces that are environmentally responsible and aesthetically refined.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Capital Engineering Consultancy's distinctive approach to commercial development integrates refined aesthetics with technical precision to create environments that elevate business performance. We understand that exceptional commercial spaces must balance immediate impact with long-term value, delivering environments that remain relevant and efficient throughout their lifecycle. Our multidisciplinary expertise ensures seamless integration of design, engineering, and sustainability to create commercial spaces that stand as a testament to your vision and values."
        downloadBrochure={{
          title:
            "Capital Engineering Consultancy - Premium Commercial Portfolio",
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

export default Commercial;
