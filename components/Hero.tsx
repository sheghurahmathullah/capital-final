"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building, Globe, HandshakeIcon } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const camber = localFont({
  src: [
    {
      path: "../public/fonts/CamberTRIAL-Lt.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--body-font",
});

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Our Vision",
      src: "/hero.webm",
    },
    {
      id: 2,
      title: "Our Vision",
      src: "/hero1.webm",
    },
    {
      id: 3,
      title: "Our Vision",
      src: "/hero2.webm",
    },
    // {
    //   id: 4,
    //   title: "Our Vision",
    //   src: "/hero3.webm",
    // },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className={`relative h-screen w-full overflow-hidden ${camber.variable}`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentVideo ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                src={video.src}
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                style={{ filter: "brightness(0.6)" }}
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center h-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mb-8 animate-fade-in text-white">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-[--body-font]`}
              >
                Your Premier Partner in Engineering Design
              </h1>
              <p
                className={`text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-[--body-font]`}
              >
                Capital Engineering Consultancy provides innovative design and
                engineering solutions to meet global construction demands
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#211574] text-white hover:bg-[#211574]/90"
                >
                  Know More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Video Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
                    index === currentVideo
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/70"
                  } transition-all duration-300`}
                  aria-label={`View video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#211574]/5 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-[#211574]" />
              </div>
              <h3 className="text-3xl font-bold text-[#211574] mb-2">
                <CountUp end={7200} duration={2.5} separator="," suffix="+" />
              </h3>
              <p className="text-gray-600">Projects Delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#211574]/5 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#211574]" />
              </div>
              <h3 className="text-3xl font-bold text-[#211574] mb-2">
                <CountUp end={20} duration={2.5} suffix="+" />
              </h3>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#211574]/5 rounded-full flex items-center justify-center mb-4">
                <HandshakeIcon className="h-8 w-8 text-[#211574]" />
              </div>
              <h3 className="text-3xl font-bold text-[#211574] mb-2">
                <CountUp end={600} duration={2.5} suffix="+" />
              </h3>
              <p className="text-gray-600">Expert Engineers</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-gray-600"
          >
            Trusted by developers, ministries, and global brands across 3
            continents
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Hero;
