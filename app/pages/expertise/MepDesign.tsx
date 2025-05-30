"use client";
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/ContactCTA";
import {
  ArrowRight,
  CheckCircle,
  Leaf,
  HandshakeIcon,
  Building,
  Globe,
  Shield,
  TreeDeciduous,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const MepDesign = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this CSS for the marquee animation
  const marqueeStyles = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
      min-width: 100%;
    }
  `;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <style>{marqueeStyles}</style>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1684497404598-6e844dff9cde?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-building-being-built-43593-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="container relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Integrated MEP Design Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Comprehensive Mechanical, Electrical, and Plumbing engineering
                services that optimize building performance, energy efficiency,
                and occupant comfort for projects of all scales and
                complexities.
              </p>
              <Button className="group bg-white text-primary hover:bg-gray-100 uppercase">
                Explore MEP Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Credibility Snapshot */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <Building className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">750+</h3>
                <p className="text-gray-600">MEP Projects Completed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-gray-600">Years of MEP Expertise</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <Leaf className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">40%</h3>
                <p className="text-gray-600">Average Energy Savings</p>
              </motion.div>
            </div>

            <p className="text-center mt-8 text-gray-600">
              Delivering innovative MEP solutions across the MENA region,
              Europe, and Asia with a focus on efficiency, sustainability, and
              technical excellence.
            </p>
          </div>
        </section>

        {/* Signature Work */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive MEP Design Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From concept to commissioning, our MEP engineering team delivers
                integrated solutions that enhance building performance, optimize
                energy usage, and create comfortable, sustainable environments
                for occupants.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                name="JSW Cement Fujairah Clinker Plant"
                image="/expertise/mep/JSW Cement – Fujairah Clinker Plant1.jpeg"
                insight="High-capacity dust extraction and process ventilation systems for cement production, ensuring optimal air quality and operational efficiency."
              />
              <ProjectCard
                name="Dulsco Re-Refinery Plant"
                image="/expertise/mep/Dulsco Re-Refinery Plant – Jebel Ali, UAE.jpeg"
                insight="Hazardous-area electrical systems and explosion-proof installations for safe oil re-refining operations."
              />
              <ProjectCard
                name="Lime Kiln Factory"
                image="/expertise/mep/Lime Kiln Factory – ICAD III, Abu Dhabi.jpeg"
                insight="High-temperature process cooling and specialized wastewater treatment for lime manufacturing."
              />
              <ProjectCard
                name="Chlor Alkali Chemical Plant"
                image="/expertise/mep/Chlor-Alkali Chemical Plant – Sur Industrial City, Oman.jpg"
                insight="Corrosion-resistant MEP systems for chlorine processing, including acid fume extraction and emergency showers."
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="group">
                View All MEP Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Comprehensive Solutions */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Integrated MEP Engineering Excellence
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    At Capital Engineering Consultancy, our MEP division
                    delivers seamlessly integrated systems that form the
                    operational backbone of modern buildings. We combine
                    technical expertise with innovative approaches to create
                    efficient, sustainable, and resilient building systems.
                  </p>

                  <p className="text-lg">
                    Our multidisciplinary teams collaborate closely with
                    architects, structural engineers, and clients to ensure MEP
                    systems are perfectly aligned with overall project
                    goals—optimizing performance while minimizing operational
                    costs and environmental impact.
                  </p>

                  <div className="pt-4">
                    <Button className="group bg-primary text-white hover:bg-primary/90">
                      Request MEP Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1710661184714-8da83aaf8ecc?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="MEP systems design and coordination"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Core Commitment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our MEP Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creating intelligent building systems that balance technical
                performance, energy efficiency, and occupant comfort through
                innovative engineering.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Performance Optimization",
                  description:
                    "Advanced system modeling and analysis to maximize efficiency, reliability, and performance throughout the building lifecycle.",
                  icon: <Building className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Energy Efficiency",
                  description:
                    "Innovative strategies to reduce energy consumption through smart system design, renewable integration, and passive techniques.",
                  icon: <Leaf className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Future-Ready Solutions",
                  description:
                    "Forward-thinking designs that incorporate smart building technology, flexibility for future adaptation, and long-term sustainability.",
                  icon: <Globe className="h-16 w-16 text-primary" />,
                },
              ].map((value, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="mb-6 text-primary">{value.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Client-Centric Promise */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Capital EC MEP Advantage
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FeatureItem>
                  BIM-Enabled Coordination — Advanced 3D modeling for clash
                  detection and seamless integration with architectural and
                  structural elements
                </FeatureItem>
                <FeatureItem>
                  Energy Performance Analysis — Detailed simulations to optimize
                  system efficiency and reduce operational costs
                </FeatureItem>
                <FeatureItem>
                  Smart Building Integration — Intelligent control systems for
                  automation, monitoring, and enhanced building management
                </FeatureItem>
                <FeatureItem>
                  Sustainable Design Practices — Eco-friendly solutions that
                  reduce resource consumption and environmental impact
                </FeatureItem>
                <FeatureItem>
                  Comprehensive Commissioning — Rigorous testing and
                  verification to ensure all systems perform as designed
                </FeatureItem>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MEP systems coordination meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Building mechanical room with MEP systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="container py-16 relative -mt-32 md:-mt-40 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-3xl mx-auto shadow-lg rounded-lg">
              <blockquote className="text-xl md:text-2xl font-display italic text-center">
                "The true measure of MEP excellence is found in systems that
                operate so seamlessly that occupants never have to think about
                them—creating comfort, safety, and efficiency that simply feels
                natural."
                <footer className="mt-4 text-sm text-gray-600 font-normal">
                  – Capital EC Director of MEP Engineering
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Global Enterprises Trust Capital EC */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trusted by Industry Leaders
            </h2>

            <div className="mb-12">
              <p className="text-lg text-center max-w-3xl mx-auto">
                From commercial high-rises to healthcare facilities, Capital
                Engineering Consultancy delivers MEP solutions that exceed
                expectations. Our technical expertise, innovative approach, and
                commitment to quality have made us the preferred MEP partner for
                discerning clients across diverse sectors.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-marquee space-x-8">
                {[
                  { img: "/brands/logo-8.webp" },
                  { img: "/brands/logo-7.png" },
                  { img: "/brands/logo-6.jpg" },
                  { img: "/brands/logo-5.png" },
                  { img: "/brands/logo-3.avif" },
                  { img: "/brands/logo-4.svg" },
                  { img: "/brands/logo-2.svg" },
                  { img: "/brands/logo-1.svg" },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="bg-white h-24 w-40 flex items-center justify-center rounded-md p-4 flex-shrink-0"
                  >
                    <img
                      src={logo.img}
                      alt={`Client logo ${i + 1}`}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

// Helper components

const ProjectCard = ({
  name,
  image,
  insight,
}: {
  name: string;
  image: string;
  insight: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="h-64 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{insight}</p>
      </div>
    </motion.div>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-start"
    >
      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
      <p className="text-lg">{children}</p>
    </motion.div>
  );
};

export default MepDesign;
