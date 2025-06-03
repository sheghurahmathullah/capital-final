"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

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

const FounderInsights: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const handleClose = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { scale: 1.05, opacity: 0.9 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className={`py-24 overflow-hidden ${camber.variable}`}>
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video Container */}
            <motion.div
              className="relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnim}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                {!isPlaying ? (
                  <>
                    <motion.img
                      src="/ceo-thumbnail.png"
                      alt="Mr. Balaskandan Raghunathan, Sugee Managing Director"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={handlePlay}
                    >
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-white/20 animate-ping"></div>
                        <PlayCircle
                          className="h-20 w-20 text-white opacity-90 hover:opacity-100 hover:scale-110 transition-all relative z-10"
                          strokeWidth={1}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      controls
                      className="w-full h-full object-cover"
                      poster="/ceo-thumbnail.png"
                    >
                      <source src="/homepage/video/ceo.mp4" type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4  bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
                      aria-label="Close video"
                    >
                      <X size={24} />
                    </button>
                  </>
                )}
              </div>
              {!isPlaying && (
                <div className="absolute -inset-4 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              className="text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="uppercase tracking-wider text-blue-300 font-medium text-sm font-[--body-font]">
                Leadership Insights
              </span>
              <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-white font-[--body-font]">
                Words from Our Founder
              </h2>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-300 font-[--body-font]">
                <p>
                  In this exclusive video, our Managing Director,{" "}
                  <strong className="text-white">
                    Mr. Balaskandan Raghunathan
                  </strong>
                  , shares his expert insights on organizational growth, vision,
                  and the impact of leadership in driving success.
                </p>
                <p>
                  Watch as Mr. Raghunathan discusses the journey, challenges,
                  and future prospects, offering a deeper look into the factors
                  that shape a thriving business.
                </p>
                <blockquote className="pl-4 border-l-4 border-blue-400 italic text-blue-200 my-6">
                  "Our commitment to excellence is unwavering. We believe in
                  creating value through innovative thinking and meticulous
                  execution."
                </blockquote>
              </div>

              <Button
                onClick={handlePlay}
                size="lg"
                className="mt-8 bg-white text-blue-900 hover:bg-blue-50 group font-[--body-font]"
              >
                {isPlaying ? "Now Playing" : "Watch the Full Video"}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderInsights;
