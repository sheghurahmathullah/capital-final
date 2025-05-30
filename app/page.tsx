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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    console.log({
      state,
    });

    if (state === "before-3d") {
      twoDRef.current?.focus();

      document.body.style.overflow = "auto";
    }
    if (state === "after-3d") {
      twoDRef.current?.focus();
      // window.scrollTo({
      //   top: afterRef.current!.getBoundingClientRect().top + window.scrollY,
      //   behavior: "smooth",
      // });

      document.body.style.overflow = "auto";
    }
    if (state === "3d") {
      canvasRef.current?.focus();
      window.scrollTo({
        top: buildingRef!.current!.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
      setTimeout(() => {
        window.scrollTo({
          top:
            buildingRef!.current!.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
        document.body.style.overflow = "hidden";
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    if (buildingRef.current) {
      const bounding = buildingRef.current.getBoundingClientRect();
      const isScrolledUp = prevTopRef.current < bounding.top;

      if (isScrolledUp && bounding.top >= 0) {
        setScrolling("up");
        setState("before-3d");
        document.body.style.overflow = "auto";

        // Smooth transition to expertise section
        const expertiseSection = sections.current[3].ref.current;
        if (expertiseSection) {
          expertiseSection.scrollIntoView({ behavior: "smooth" });
        }
      }

      prevTopRef.current = bounding.top;
    }
  }, []);

  // Optimize scroll handler with debounce
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

          // Find the most visible section
          let maxVisibility = 0;
          let mostVisibleIndex = currentSection;

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

          // Only update if section changed
          if (mostVisibleIndex !== currentSection) {
            setCurrentSection(mostVisibleIndex);
            const targetSection =
              sections.current[mostVisibleIndex].ref.current;
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }
        }
      }, 50); // Small delay to prevent rapid firing
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
