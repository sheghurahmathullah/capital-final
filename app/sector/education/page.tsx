"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import {
  GraduationCap,
  Building,
  Scale,
  Lightbulb,
  Train,
  Droplet,
  Power,
  Ship,
  Hotel,
  Factory,
  Map,
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

const Education = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch education projects from Sanity
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && title=="Education"]._id)][0...3] {
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
        title="Education"
        subtitle="Designing Spaces for Learning and Growth"
        bannerImage="/sector/education.jpeg"
        introduction="Creating innovative educational environments that inspire learning, collaboration, and academic excellence. Our designs integrate smart technology, sustainable practices, and flexible spaces to meet the evolving needs of educational institutions."
        capabilities={[
          "K-12 school design and campus planning",
          "Higher education facilities and research centers",
          "Library and media center modernization",
          "STEM and vocational training spaces",
          "Student housing and recreational facilities",
          "Green building certifications for educational buildings",
        ]}
        services={[
          {
            title: "Educational Facility Design",
            description:
              "Comprehensive architectural design for schools, universities, and educational institutions that prioritize learning outcomes while creating inspiring spaces.",
            features: [
              "Master planning for educational campuses",
              "Classroom design optimization",
              "Specialized learning environments",
              "Integration of outdoor learning spaces",
            ],
          },
          {
            title: "Technology Integration",
            description:
              "Implementation of advanced technologies into educational spaces to enhance teaching and learning experiences in today's digital age.",
            features: [
              "Smart classroom designs",
              "Digital collaboration spaces",
              "Distance learning infrastructure",
              "Technology-enabled libraries",
            ],
          },
          {
            title: "Sustainable Campus Solutions",
            description:
              "Creating environmentally responsible educational facilities that reduce operational costs while providing healthy learning environments.",
            features: [
              "Net-zero energy campus designs",
              "Water conservation systems",
              "Sustainable material selection",
              "Indoor air quality optimization",
            ],
          },
          {
            title: "Renovation & Modernization",
            description:
              "Transforming existing educational facilities to meet current standards and future needs while preserving architectural heritage.",
            features: [
              "Historic building renovations",
              "Facility condition assessments",
              "Space repurposing strategies",
              "Phased renovation planning",
            ],
          },
        ]}
        technologies={[
          {
            name: "Smart Learning Environments",
            icon: <GraduationCap className="h-6 w-6 text-primary" />,
            description:
              "Integrated technology systems that enhance teaching and learning through interactive digital tools and adaptive learning spaces.",
          },
          {
            name: "Sustainable Building Design",
            icon: <Building className="h-6 w-6 text-primary" />,
            description:
              "Eco-friendly educational facilities that minimize environmental impact while creating healthy, productive learning environments.",
          },
          {
            name: "Acoustic Engineering",
            icon: <Scale className="h-6 w-6 text-primary" />,
            description:
              "Specialized acoustic solutions that improve speech intelligibility and concentration in learning environments.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="With our specialized expertise in educational facility design, we understand the unique challenges and opportunities in creating spaces that support teaching and learning. Our team brings together architects, engineers, and educational specialists to deliver facilities that enhance student outcomes, optimize operational efficiency, and create inspiring environments for generations of learners. We stay at the forefront of educational design trends, incorporating the latest research and best practices into our solutions."
        downloadBrochure={{
          title: "Education Projects Brochure",
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

export default Education;
