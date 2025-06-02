"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
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
import CountUp from "react-countup";

const PowerInfrastructure = () => {
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
              poster="/expertise/photos/power/banner.jpg"
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
                Advanced Power Infrastructure Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Comprehensive power engineering services that deliver reliable,
                efficient, and sustainable electrical infrastructure for
                critical facilities, industrial complexes, and large-scale
                developments across the globe.
              </p>
              <Button className="group bg-white text-primary hover:bg-gray-100 uppercase">
                Explore Power Services
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
                <h3 className="text-2xl font-bold">
                  <CountUp end={7200} duration={2.5} separator="," suffix="+" />
                </h3>
                <p className="text-gray-600">Projects Delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">
                  <CountUp end={20} duration={2.5} suffix="+" />
                </h3>
                <p className="text-gray-600">Years of Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <HandshakeIcon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">
                  <CountUp end={600} duration={2.5} suffix="+" />
                </h3>
                <p className="text-gray-600">Expert Engineers</p>
              </motion.div>
            </div>

            <p className="text-center mt-8 text-gray-600">
              Trusted by developers, ministries, and global brands across 3
              continents.
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
                Comprehensive Power Infrastructure Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From concept to commissioning, our power engineering team
                delivers integrated solutions that ensure reliable power
                distribution, optimize energy usage, and create resilient
                electrical infrastructure for mission-critical facilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                name="Green Mountain Substation"
                image="/expertise/power/green mountain.jpg"
                insight="132/33kV substation with GIS technology, featuring advanced protection relays and automated SCADA controls for grid stability."
              />
              <ProjectCard
                name="Hatta Transmission Network"
                image="/expertise/power/hatta.jpg"
                insight="220kV overhead transmission lines with composite towers, designed for mountainous terrain and extreme weather resilience."
              />
              <ProjectCard
                name="Multifuel Waste-to-Energy Plant"
                image="/expertise/power/Multifuel.jpg"
                insight="50MW facility integrating waste incineration with biogas generation, supplying power to 120,000 homes via grid synchronization."
              />
              <ProjectCard
                name="Ferro Plant Power System"
                image="/expertise/power/Ferro plant.jpeg"
                insight="Dedicated 66kV substation with harmonic filters and SVC units to support high-load smelting operations."
              />
            </div>

            <div className="flex justify-center mt-12">
              <Link href={"/portfolio"}>
                <Button variant="outline" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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
                  Integrated Power Engineering Excellence
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    At Capital Engineering Consultancy, our Power Infrastructure
                    division delivers robust electrical systems that form the
                    backbone of modern facilities. We combine technical
                    expertise with innovative approaches to create reliable,
                    efficient, and resilient power networks.
                  </p>

                  <p className="text-lg">
                    Our multidisciplinary teams collaborate closely with
                    utilities, developers, and clients to ensure power systems
                    are perfectly aligned with overall project goals—optimizing
                    reliability while minimizing operational costs and
                    environmental impact.
                  </p>

                  <div className="pt-4">
                    <Button className="group bg-primary text-white hover:bg-primary/90">
                      Request Power Infrastructure Consultation
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
                    src="/expertise/photos/power/1.jpg"
                    alt="Power infrastructure and electrical systems"
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
                Our Power Infrastructure Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creating resilient power systems that balance reliability,
                efficiency, and sustainability through innovative engineering
                and forward-thinking design.
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
                  title: "Reliability & Resilience",
                  description:
                    "Robust power systems designed to maintain operations during outages, with redundancy, fault tolerance, and rapid recovery capabilities.",
                  icon: <Shield className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Sustainable Power",
                  description:
                    "Innovative strategies to integrate renewable energy sources, reduce carbon footprint, and optimize energy efficiency across the grid.",
                  icon: <Leaf className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Smart Grid Technology",
                  description:
                    "Forward-thinking designs that incorporate digital monitoring, automation, and intelligent control for enhanced grid management.",
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
              The Capital EC Power Infrastructure Advantage
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FeatureItem>
                  Digital Twin Technology — Advanced 3D modeling and simulation
                  for optimized power system design and operation
                </FeatureItem>
                <FeatureItem>
                  Load Flow & Fault Analysis — Comprehensive power system
                  studies to ensure stability, protection coordination, and code
                  compliance
                </FeatureItem>
                <FeatureItem>
                  Grid Modernization — Smart grid solutions with advanced
                  metering, automation, and distributed energy resource
                  integration
                </FeatureItem>
                <FeatureItem>
                  Energy Storage Systems — Battery and alternative storage
                  solutions to enhance grid stability and renewable integration
                </FeatureItem>
                <FeatureItem>
                  Comprehensive Commissioning — Rigorous testing and
                  verification to ensure all power systems perform as designed
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
                src="/expertise/photos/power/left.jpg"
                alt="Power substation engineering team meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[500px]">
              <img
                src="/expertise/photos/power/right.jpg"
                alt="Electrical substation with power infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="container py-16 relative -mt-32 md:-mt-40 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-3xl mx-auto shadow-lg rounded-lg">
              <blockquote className="text-xl md:text-2xl font-display italic text-center">
                "The true measure of power infrastructure excellence is found in
                systems that deliver uninterrupted service through all
                conditions—creating reliability, resilience, and efficiency that
                powers progress."
                <footer className="mt-4 text-sm text-gray-600 font-normal">
                  – Capital EC Director of Power Engineering
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
                From utility-scale power generation to critical facility
                infrastructure, Capital Engineering Consultancy delivers power
                solutions that exceed expectations. Our technical expertise,
                innovative approach, and commitment to quality have made us the
                preferred power engineering partner for discerning clients
                across diverse sectors.
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

export default PowerInfrastructure;
