
import React from "react";
import { History, Users, Handshake } from "lucide-react";

const ExperienceCards = () => {
  const cards = [
    {
      title: "Our Experience",
      description: "With 20+ years of field-tested excellence, we're a name clients trust.",
      icon: <History className="h-10 w-10 text-primary" />
    },
    {
      title: "Our People",
      description: "Expert professionals with unmatched attention to detail and dedication.",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "Our Partners",
      description: "We build long-term collaborations rooted in value, reliability, and mutual respect.",
      icon: <Handshake className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Relationships. Sustained by Reputation.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-lg">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;
