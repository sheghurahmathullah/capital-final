"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorTemplate from "@/components/sector/SectorTemplate";
import { Heart, Building, Compass, Award } from "lucide-react";
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

const HealthcareAndHospitality = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch projects from both categories
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "post" && references(*[_type=="category" && (title=="Hospitality" || title=="Healthcare & Pharmaceuticals")]._id)][0...3] {
          _id,
          title,
          description,
          location,
          "area": properties.area,
          "completion": properties.completion,
          mainImage
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
        title="Healthcare & Hospitality"
        subtitle="Creating Spaces for Wellness and Comfort"
        bannerImage="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        introduction="Comprehensive engineering and design solutions for healthcare facilities and hospitality properties. Our integrated approach creates healing environments and exceptional guest experiences through thoughtful design, advanced technologies, and operational efficiency, ensuring both function and comfort."
        capabilities={[
          "Hospitals and medical centers design",
          "Hotels and resorts engineering",
          "Specialized healthcare facilities",
          "Wellness and spa developments",
          "Medical equipment planning and integration",
          "Hotel renovation and repositioning",
        ]}
        services={[
          {
            title: "Healthcare Facility Design",
            description:
              "Comprehensive planning and engineering for hospitals, clinics, and specialized medical facilities focused on patient outcomes and staff efficiency.",
            features: [
              "Hospital master planning",
              "Clinical space optimization",
              "Medical equipment integration",
              "Healing environment design",
            ],
          },
          {
            title: "Hospitality Engineering",
            description:
              "Complete design and engineering services for hotels, resorts, and mixed-use developments that create exceptional guest experiences.",
            features: [
              "Hotel concept development",
              "Guest room optimization",
              "Public space engineering",
              "Food service facility design",
            ],
          },
          {
            title: "Specialized Medical Facilities",
            description:
              "Design and engineering for specialized healthcare environments including diagnostic centers, rehabilitation facilities, and senior living.",
            features: [
              "Imaging and diagnostic centers",
              "Rehabilitation facilities",
              "Outpatient clinics",
              "Long-term care facilities",
            ],
          },
          {
            title: "Wellness Infrastructure",
            description:
              "Creating environments that promote health and wellbeing, from spa and fitness facilities to integrated wellness communities.",
            features: [
              "Wellness center design",
              "Spa engineering",
              "Fitness facility optimization",
              "Therapeutic environments",
            ],
          },
        ]}
        technologies={[
          {
            name: "Medical Technology Integration",
            icon: <Heart className="h-6 w-6 text-primary" />,
            description:
              "Seamless integration of advanced medical equipment and systems within healthcare facilities to enhance diagnosis and treatment.",
          },
          {
            name: "Healing Environment Design",
            icon: <Building className="h-6 w-6 text-primary" />,
            description:
              "Evidence-based design approaches that create spaces proven to reduce stress, improve outcomes, and enhance healing.",
          },
          {
            name: "Guest Experience Systems",
            icon: <Award className="h-6 w-6 text-primary" />,
            description:
              "Integrated technology systems that enhance guest comfort, convenience, and personalization in hospitality environments.",
          },
        ]}
        featuredProjects={featuredProjects}
        whyChooseUs="Our healthcare and hospitality team combines specialized expertise in medical facility planning, hospitality design, and building systems engineering. We understand the unique requirements of environments dedicated to healing and guest experience, balancing technical functionality with human comfort. Our integrated approach ensures that each facility operates efficiently while creating spaces that support health, wellness, and exceptional experiences for patients and guests alike."
        downloadBrochure={{
          title: "Healthcare & Hospitality Projects Brochure",
          url: "#",
        }}
      />
      <Footer />
    </>
  );
};

export default HealthcareAndHospitality;
