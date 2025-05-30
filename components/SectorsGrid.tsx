
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SectorsGrid = () => {
  const sectors = [
    {
      title: "Commercial",
      image: "/homepage/sectors/Commercial.webp",
      link: "/sector/commercial"
    },
    {
      title: "Residential & Villa",
      image: "/homepage/sectors/Residential_Villa.webp",
      link: "/sector/residential-villa"
    },
    {
      title: "Oil & Gas",
      image: "/homepage/sectors/oil_gas.webp",
      link: "/sector/oil-gases"
    },
    {
      title: "Healthcare & Hospitality",
      image: "/homepage/sectors/Hospitality_Healthcare.webp",
      link: "/sector/healthcare-hospitality"
    },
    {
      title: "Industrial & Logistics",
      image: "/homepage/sectors/Industrial_logistics.webp",
      link: "/sector/industrial-logistics"
    },
    {
      title: "Roads & Infrastructure",
      image: "/homepage/sectors/Road_Infrastructure.webp",
      link: "/sector/road-infrastructure"
    },
  ];

  return (
    <section id="sectors" className="py-20 bg-gray-50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sectors</h2>
          <div className="h-1 w-16 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Link 
              key={index} 
              href={sector.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div 
                className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${sector.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-bold text-white text-center mb-2">{sector.title}</h3>
                <span className="text-white text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;
