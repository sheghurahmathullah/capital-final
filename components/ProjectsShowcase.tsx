"use client";
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProjectsShowcase = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const projects = [
    {
      id: 1,
      title: "Commercial Bank International",
      location: "Plot No: 895, Al Majaz Area-2, Sharjah, UAE",
      category: "Commercial",
      overview:
        "Interior design by Capital Engineering Consultancy for the Commercial Bank International branch in Sharjah.",
      scope:
        "Comprehensive interior design services including space planning, material selection, and on-site design supervision.",
      image: "/homepage/projects/commercial.jpg",
    },
    {
      id: 2,
      title: "ChangeFood KEZAD",
      location: "KEZAD, Abu Dhabi, UAE",
      category: "Food & Beverages",
      overview:
        "Design, approvals, and supervision by Capital Engineering Consultancy for a state-of-the-art food processing facility at KEZAD.",
      scope:
        "Structural and MEP design, authority approvals, and project supervision for advanced food processing units, storage, and quality control areas.",
      image: "/homepage/projects/Change Foods kezad - Food & Beverages .jpg",
    },
    {
      id: 3,
      title: "Polyfab",
      location: "Plot 44B, KHIA8, Al Ma'mourah, Abu Dhabi, UAE",
      category: "Industrial & Logistics",
      overview:
        "Engineering and design services by Capital Engineering Consultancy for the construction of a warehouse, admin building, and other facilities for Polyfab Plastic Industry LLC.",
      scope:
        "Preparation of detailed engineering and design drawings for all project facilities.",
      image: "/homepage/projects/industrial-project.jpg",
    },
    {
      id: 4,
      title: "Hidd Saddiyat",
      location: "Abu Dhabi, UAE",
      category: "Marine & Ports",
      overview:
        "The project involves the construction of a new floating marina designed to accommodate 108 berths for boats ranging in size from 10 meters to 30 meters.",
      scope:
        "Design, supply, and construct a fully equipped floating marina at Sadiyat Island with 108 berths, quay wall, slipway, floating breakwater, and complete marine utilities.",
      image: "/homepage/projects/marine-project.jpg",
    },
    {
      id: 5,
      title: "G+1 Dubai Hills Segrex Villa",
      location: "Hadaeq Sheikh Mohammed Bin Rashid, Dubai Hills, Dubai, UAE",
      category: "Residential & Villa",
      overview:
        "Proposed construction of a Basement + Ground + First Floor + Roof (B+G+1+Roof) villa on Plot No. 6314204 (075) at Hadaeq Sheikh Mohammed Bin Rashid, Dubai Hills, Dubai, UAE.",
      scope:
        "Design, Authority Approvals, Tender Documentation, and Supervision",
      image: "/homepage/projects/residential-project.webp",
    },
    {
      id: 6,
      title: "STP JADA, ARADA Development LLC",
      location: "Plot No: 92, Al Jada, Sharjah, UAE",
      category: "Wastewater Treatment Plants",
      overview:
        "Preparation of authority submission drawings (Architectural, Civil/Structural & Services), obtaining authority approvals, and supervision for the Sewerage Treatment Plant (STP) at Al Jada, Sharjah, UAE.",
      scope:
        "Design, authority submission, approval acquisition, and supervision for the Sewerage Treatment Plant (STP) at Al Jada, Sharjah, UAE.",
      image: "/homepage/projects/WTP-project.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Legacy of Precision and Impact
          </h2>
        </div>

        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="lg:w-1/2 h-64 lg:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="mb-4">
                      <span className="inline-block bg-[#211574] text-white text-sm px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.location}</p>

                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Project Overview:</h4>
                      <p className="text-gray-700">{project.overview}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold mb-2">Scope of Work:</h4>
                      <p className="text-gray-700">{project.scope}</p>
                    </div>

                    <div className="mt-auto">
                      <Button className="bg-[#211574] text-white hover:bg-[#211574]/90">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2" />
          <CarouselNext className="absolute right-4 top-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
