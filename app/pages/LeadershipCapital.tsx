"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leader } from "@/lib/types";

const Leadership = () => {
  const leadershipTeam: Leader[] = [
    // Board of Directors
    {
      name: "Engr. Balaskandan Raghunathan",
      title: "Founder & Managing Director",
      quote:
        "As Founder and Managing Director, we believe true engineering defies limits and challenges the impossible. At Capital Engineering, our vision is to be a top global consultant. If it hasn't been done, we'll do it first. If it seems impossible, we'll make it inevitable.",
      category: "board",
      image:
        "/team/Engr. Balaskandan Raghunathan - Founder & Managing Director.JPG",
    },
    {
      name: "Mr. Krishna Thyagarajan",
      title: "Director - Group Operations",
      quote:
        "As Director - Group Operations at Capital Engineering, we leave no stone unturned, while leaving an edifice with lasting legacy. We believe that Engineering is an obsession for methodical perfection. We don't wait for the Future, we are immersed in making it our Present.",
      category: "board",
      image: "/team/Mr. Krishna Thyagarajan - Operations Director.JPG",
    },

    // Partners

    {
      name: "Ali Khalid Al Hammadi",
      title: "Partner & Executive Director",
      quote:
        "We believe in the strength of collaboration and innovation to deliver impactful engineering solutions. By combining diverse expertise with a shared vision, we turn challenges into opportunities and create lasting value for our clients and communities.",
      category: "partners",
      image: "/team/Ali Khalid Al Hammadi.png",
    },

    // Executive Profiles

    {
      name: "Engr. Aman Alqaisy",
      title: "Head of Operations",
      location: "Sharjah",
      category: "executive",
      image: "/team/Engr. Aman Alqaisy - Head of Operations (Sharjah).webp",
    },
    {
      name: "Engr. Eslam Mohammed Ali",
      title: "Head of Operations",
      location: "Dubai & Egypt",
      category: "executive",
      image:
        "/team/Engr. Eslam Mohammed Ali - Head of Operations (Dubai & Egypt) - Copy.JPG",
    },
    {
      name: "Engr. Senthilram Palavesamuthu",
      title: "Head of Operations",
      location: "Abu Dhabi",
      category: "executive",
      image:
        "/team/Engr. Senthilram Palavesamuthu - Head of Operations (Abu Dhabi).webp",
    },
    {
      name: "Engr. Ravikumar Mahalingam",
      title: "Head of Operations",
      location: "Ras Al Khaimah",
      category: "executive",
      image:
        "/team/Engr. Ravikumar M. - Head of Operations (Ras Al Khaimah) - Copy.JPG",
    },
    {
      name: "Mr. Subith Sreenivasan",
      title: "Head of Operations",
      location: "Umm Al Quwain",
      category: "executive",
      image:
        "/team/Mr. Subith Sreenivasan - Head of Operations (Umm Al Quwain).webp",
    },
    {
      name: "Engr. Rolan Cabahug Carpi",
      title: "Head of Operations",
      location: "Ajman",
      category: "executive",
      image: "/team/Engr. Rolan Cabahug Carpi - Head of Operations (Ajman).JPG",
    },
    {
      name: "Engr. Shobanbaabu Arumugam",
      title: "Head of Operations",
      location: "Saudi Arabia",
      category: "executive",
      image:
        "/team/Engr. Shobanbaabu Arumugam - Head of Operations (Saudi Arabia).webp",
    },
    {
      name: "Engr. Navas Mohammed",
      title: "Head of Operations",
      location: "Oman",
      category: "executive",
      image: "/team/Engr. Navas Mohammed - Head of Operations (Oman).JPG",
    },
    {
      name: "Mr. Saravanan Ellappan",
      title: "Operations Manager",
      category: "executive",
      image: "/team/Mr. Saravanan Ellappan - Operations Manager.JPG",
    },
    {
      name: "Arch. B.K. Kulkarni",
      title: "Architectural Design Director",
      category: "executive",
      image: "/team/Arch.  B.K. Kulkarni - Architectural Design Director.JPG",
    },
    {
      name: "Engr. Anurag Varun",
      title: "MEP Manager",
      category: "executive",
      image: "/team/Engr. Anurag Varun - MEP Manager.JPG",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-[#211574]">
                Our Leadership
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                The visionaries, strategists, and experts who drive Capital
                Engineering's innovation and excellence across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-[#211574]">
              Board of Directors
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipTeam
                .filter((leader) => leader.category === "board")
                .map((leader, index) => (
                  <PremiumLeaderCard
                    key={index}
                    leader={leader}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#211574]">
              Partners
            </h2>
            <div className="grid md:grid-cols-2 gap-8 place-items-center">
              <div className="col-span-2 max-w-2xl w-full">
                {leadershipTeam
                  .filter((leader) => leader.category === "partners")
                  .map((leader, index) => (
                    <PremiumLeaderCard
                      key={index}
                      leader={leader}
                      index={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-[#211574]">
              Executive Profiles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipTeam
                .filter((leader) => leader.category === "executive")
                .map((leader, index) => (
                  <ExecutiveLeaderCard
                    key={index}
                    leader={leader}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

const PremiumLeaderCard = ({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0 h-full flex flex-col md:flex-row">
          <div className="relative md:w-1/3 h-[500px] md:h-auto group">
            {leader.image ? (
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image Coming Soon</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
            <p className="text-[#211574] font-medium mb-4">{leader.title}</p>
            {leader.quote && (
              <p className="text-gray-600 text-sm leading-relaxed">
                "{leader.quote}"
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExecutiveLeaderCard = ({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative h-[400px]">
            {leader.image ? (
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image Coming Soon</span>
              </div>
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
            <p className="text-[#211574] font-medium mb-2">{leader.title}</p>
            {leader.location && (
              <p className="text-gray-500 text-sm">{leader.location}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Leadership;
