import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      title: "Architecture & Landscape",
      image: "/homepage/expertise/Architectural & Landscape.webp",
      description:
        "Creating iconic structures and spaces that inspire and endure.",
      link: "/expertise/architecture-landscape",
    },
    {
      title: "Fit-out & Interior Design",
      image: "/homepage/expertise/Fit-out & Interior Design.webp",
      description: "Transforming spaces with function, aesthetics and purpose.",
      link: "/expertise/fitout-interior",
    },
    {
      title: "Structural Engineering",
      image: "/homepage/expertise/Structural Engineering.webp",
      description: "Engineering stability and innovation into every structure.",
      link: "/expertise/structural-engineering",
    },
    {
      title: "Project Management",
      image: "/homepage/expertise/Project management.webp",
      description:
        "Delivering excellence through meticulous planning and execution.",
      link: "/expertise/project-management",
    },
    {
      title: "Environmental Solutions",
      image: "/homepage/expertise/Environmental solution.webp",
      description:
        "Sustainable approaches for a resilient and responsible future.",
      link: "/expertise/environmental-solution",
    },
    {
      title: "MEP Design & Services",
      image: "/homepage/expertise/MEP.webp",
      description:
        "Integrated systems that power and optimize modern buildings.",
      link: "/expertise/mep-design",
    },
  ];

  return (
    <section className="section py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Built on Precision, Driven by Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From concept to completion, we design with intent and build with
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {area.description}
                </p>
                <Link
                  href={area.link}
                  className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-300"
                >
                  <span className="border-b border-transparent group-hover:border-primary">
                    Learn More
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
