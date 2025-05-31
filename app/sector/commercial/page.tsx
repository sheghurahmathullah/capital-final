"use client";
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
        // bannerAlt="Commercial sector hero image"
        // bannerPriority={true}
        // disableBannerAnimation={true}
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
          {
            title: "Intelligent Building Systems",
            description:
              "Seamlessly integrated mechanical, electrical, and plumbing solutions that create responsive, efficient, and sustainable commercial environments.",
            features: [
              "Smart building automation",
              "Energy optimization systems",
              "Indoor environmental quality enhancement",
              "Integrated renewable energy solutions",
            ],
          },
          {
            title: "Precision Project Delivery",
            description:
              "Meticulous management of commercial projects ensuring exceptional quality, optimized timelines, and value-driven outcomes through sophisticated methodologies.",
            features: [
              "Strategic phasing and sequencing",
              "Value engineering expertise",
              "Digital delivery systems",
              "Comprehensive risk management",
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
      />
      <Footer />
    </>
  );
};

export default Commercial;
