"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpertiseSectionProps {
  title: string;
  description: string;
  projects: string[];
  deliverables: string[];
  imageSrc: string;
  icon: React.ReactNode;
  learnMoreLink: string;
  isReversed?: boolean;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  title,
  description,
  projects,
  deliverables,
  imageSrc,
  icon,
  learnMoreLink,
  isReversed = false,
}) => {
  const containerOrder = isReversed ? "flex-row-reverse" : "flex-row";
  
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:${containerOrder} items-center gap-12 md:gap-16 lg:gap-20`}>
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 max-w-xl"
          >
            <div className="mb-6 flex items-center">
              <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                {icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
              {description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Key Projects</h3>
                <ul className="space-y-2">
                  {projects.map((project, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Button asChild className="group">
              <a href={learnMoreLink}>
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={imageSrc} 
                  alt={`${title} expertise`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-8 border-white rounded-lg bg-primary/10 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-8 border-white rounded-lg bg-primary/10 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
