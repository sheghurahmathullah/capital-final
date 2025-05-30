"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    {
      id: 4,
      title: "Our Vision",
      src: "/hero3.webm",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Premier Partner in Engineering & Construction
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
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
  );
};

export default Hero;
