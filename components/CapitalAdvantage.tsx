
import React from "react";
import { Check, Award, Clock, Shield, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const CapitalAdvantage = () => {
  const advantages = [
    {
      title: "Unmatched Quality Control",
      description: "Every project meets our rigorous quality standards and exceeds client expectations.",
      icon: Award
    },
    {
      title: "Proven Sustainability Practices",
      description: "Environmentally conscious approaches in all our design and engineering solutions.",
      icon: Leaf
    },
    {
      title: "Design-Led Engineering",
      description: "Blending aesthetics with functionality for solutions that look as good as they perform.",
      icon: Shield
    },
    {
      title: "Global Regulatory Expertise",
      description: "Proven track record of delivering projects on schedule and within budget.",
      icon: Clock
    },
    {
      title: "Client-Centric Execution",
      description: "Implementation of world-class engineering practices and methodologies.",
      icon: Target
    },
    {
      title: "Decades of Field-Proven Results",
      description: "Meticulous attention to detail throughout the project lifecycle.",
      icon: Check
    }
  ];

  return (
    <section className="section py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More than Engineering. It's a Philosophy.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button>Discover Our Approach</Button>
        </div>
      </div>
    </section>
  );
};

export default CapitalAdvantage;
