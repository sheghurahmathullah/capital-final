"use client";
// // import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import ExpertiseSection from "@/components/ExpertiseSection";
import SectorsGrid from "@/components/SectorsGrid";
import CapitalAdvantage from "@/components/CapitalAdvantage";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LeadershipInsight from "@/components/LeadershipInsight";

import ContactCTA from "@/components/ContactCTA";
import ExperienceCards from "@/components/ExperienceCards";
import NewsroomTeasers from "@/components/NewsroomTeasers";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Footer from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <main>
//         {/* <Hero /> */}
//         {/* <About/> */}
//         <ClientLogos />
//         {/* <ExpertiseSection /> */}
//         {/* Space for future 3JS Experience Section */}
//         <div className="py-20 bg-gray-50 text-center">
//           <div className="container">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision in Motion</h2>
//             <p className="text-xl text-gray-400">Space reserved for 3JS Experience</p>
//           </div>
//         </div>
//         {/* <SectorsGrid /> */}
//         {/* <ProjectsShowcase /> */}
//         {/* <CapitalAdvantage />
//         <ExperienceCards /> */}
//         {/* <TestimonialsSlider /> */}
//         {/* <LeadershipInsight /> */}
//         {/* <NewsroomTeasers /> */}
//         <FAQSection />
//         {/* <ContactCTA /> */}
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Index;

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Building from "@/components/Canvas/Building";

import { useScroll } from "./lib/use-scroll";
import { cn } from "@/lib/utils";
// import App from "./App";
import FAQSection from "@/components/FAQSection";
const Page = () => {
  const { state, scrollingThreshold, setScrolling, setState } = useScroll();
  const buildingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const twoDRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const prevTopRef = useRef<number>(0);
  const afterRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = useRef([
    { ref: useRef<HTMLDivElement>(null), name: "hero" },
    { ref: useRef<HTMLDivElement>(null), name: "about" },
    { ref: useRef<HTMLDivElement>(null), name: "clientLogos" },
    { ref: useRef<HTMLDivElement>(null), name: "expertise" },
  ]);

  // Initial load effect to ensure starting at the top
  useEffect(() => {
    // Force scroll to top on initial load
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use 'instant' instead of 'smooth'
    });

    // Ensure first section (Hero) is visible
    if (sections.current[0].ref.current) {
      sections.current[0].ref.current.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }

    // Reset current section to 0 (Hero)
    setCurrentSection(0);
  }, []);

  // State change effects
  useEffect(() => {
    console.log("Current State:", state);

    // Consistent state handling
    switch (state) {
      case "before-3d":
        twoDRef.current?.focus();
        document.body.style.overflow = "auto";
        break;
      case "after-3d":
        twoDRef.current?.focus();
        document.body.style.overflow = "auto";
        break;
      case "3d":
        canvasRef.current?.focus();
        if (buildingRef.current) {
          window.scrollTo({
            top:
              buildingRef.current.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
          document.body.style.overflow = "hidden";
        }
        break;
    }
  }, [state]);

  // Scroll optimization and section tracking
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        if (state === "before-3d") {
          const viewportHeight = window.innerHeight;
          const currentScrollPos = window.scrollY;

          // Find the most visible section with more robust calculation
          let maxVisibility = 0;
          let mostVisibleIndex = 0; // Default to first section (Hero)

          sections.current.forEach((section, index) => {
            if (section.ref.current) {
              const rect = section.ref.current.getBoundingClientRect();
              const visibility =
                Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

              if (visibility > maxVisibility) {
                maxVisibility = visibility;
                mostVisibleIndex = index;
              }
            }
          });

          // Always ensure Hero section is the default starting point
          if (mostVisibleIndex !== currentSection) {
            setCurrentSection(mostVisibleIndex);
            const targetSection =
              sections.current[mostVisibleIndex].ref.current;
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [state, currentSection]);

  return (
    <>
      <main
        className={cn(
          "relative no-scrollbar",
          state === "3d" ? "overflow-hidden" : "overflow-visible"
        )}
        ref={twoDRef}
      >
        <Navbar />
        <div
          className={cn(
            state === "before-3d" || scrollingThreshold === 0
              ? "visible h-auto opacity-100"
              : "invisible -z-10 opacity-0",
            "transition-all duration-500 ease-in-out"
          )}
        >
          {sections.current.map((section, index) => (
            <div
              key={section.name}
              ref={section.ref}
              className={cn(
                "snap-start",
                index === 2 ? "min-h-[30vh]" : "min-h-screen",
                index === 2 ? "mb-0" : "mb-0"
              )}
            >
              {index === 0 && <Hero />}
              {index === 1 && <About />}
              {index === 2 && (
                <div className="h-full flex items-center">
                  <ClientLogos />
                </div>
              )}
              {index === 3 && <ExpertiseSection />}
            </div>
          ))}
        </div>

        <div className="">
          <Building containerRef={buildingRef} canvasRef={canvasRef} />
        </div>
        <div
          ref={afterRef}
          className={cn(
            "opacity-100 overflow-visible  transition-all",
            state === "after-3d"
              ? "h-auto max-h-auto"
              : "h-0 max-h-0 overflow-hidden"
          )}
        >
          <SectorsGrid />
          <ProjectsShowcase />
          <CapitalAdvantage />
          <ExperienceCards />
          <TestimonialsSlider />
          <LeadershipInsight />
          <NewsroomTeasers />
          <FAQSection />
          <ContactCTA />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Page;
