import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const awardsData = [
  {
    id: 7,
    imageSrc: "/award/Capital Best Consultant.webp",
    title: "BEST CONSULTANT",
  },
  {
    id: 8,
    imageSrc: "/award/BIN MOOSA Certificate Of Appreciation_001.png",
    title: "BIN MOOSA & DALY LTD. LLC",
  },
  {
    id: 9,
    imageSrc: "/award/Audex Appreciation.jpg",
    title: "AUDEX PTE LTD",
  },
  {
    id: 10,
    imageSrc: "/award/MEED Culture Project of the Year - Certificate.webp",
    title: "MEED PROJECT AWARD 2024",
  },
  {
    id: 11,
    imageSrc: "/award/RAKEZ Certificate.png",
    title: "RAKEZ",
  },
  {
    id: 12,
    imageSrc: "/award/TESORO CASA Certificate of Appreciation (3) (1)_001.png",
    title: "TESORO CASA LUXURY HOMEWARE",
  },
  {
    id: 13,
    imageSrc: "/award/HAWK Certificate of appreciation (1)_001.png",
    title: "HAWK FREIGHT SERVICES LLC",
  },
  {
    id: 14,
    imageSrc: "/award/polyfab.jpg",
    title: "POLYFAB PLASTIC INDUSTRY L.L.C",
  },
  {
    id: 15,
    imageSrc: "/award/BalaCapitalDrKalamAward.jpg",
    title: "DR. APJ ABDUL KALAM AWARD",
  },
  {
    id: 16,
    imageSrc:
      "/award/CAPITAL ENGINEERING CONSULTANCY CERTIFICATE OF APPRECIATION 2025 (2)_001.png",
    title: "LANDMARK LEISURE",
  },
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % awardsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + awardsData.length) % awardsData.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & Recognition
          </h2>
          <div className="w-20 h-1 bg-[#211574] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Celebrating excellence and industry recognition
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[450px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="relative h-full bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                  <img
                    src={awardsData[currentIndex].imageSrc}
                    alt={awardsData[currentIndex].title}
                    className="w-full h-full object-contain p-8"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-[#211574] flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {awardsData[currentIndex].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
              <Button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg pointer-events-auto"
                variant="ghost"
              >
                <ChevronLeft className="h-6 w-6 text-[#211574]" />
              </Button>
              <Button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg pointer-events-auto"
                variant="ghost"
              >
                <ChevronRight className="h-6 w-6 text-[#211574]" />
              </Button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {awardsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-[#211574]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
