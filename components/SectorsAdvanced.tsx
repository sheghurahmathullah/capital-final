
import React from "react";

const SectorsAdvanced = () => {
  const sectors = [
    {
      title: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Oil & Gas",
      image: "https://images.unsplash.com/photo-1574110906643-8311b0a29e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Industrial & Logistics",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Residential & Villa",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Road & Infrastructure",
      image: "https://images.unsplash.com/photo-1545459681-7d357a6587aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Healthcare & Hospitality",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="sectors" className="section py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Versatile. Scalable. Tailored Solutions.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${sector.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-xl font-bold mb-4 text-center">{sector.title}</h3>
                <span className="px-4 py-2 border border-white rounded-full opacity-0 transform translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore Sector
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsAdvanced;
