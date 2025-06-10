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

const EnvironmentalSolutions = () => {
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
              poster="/expertise/photos/environment/banner.jpg"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-landscape-with-wind-turbines-4814-large.mp4"
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
                Sustainable Environmental Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Pioneering eco-friendly construction practices and sustainable
                building solutions that minimize environmental impact while
                maximizing efficiency and compliance with global standards.
              </p>
              <Button className="group bg-white text-primary hover:bg-gray-100 uppercase">
                Explore Green Solutions
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
                Sustainable Building Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From energy-efficient designs to waste reduction strategies, we
                implement comprehensive environmental solutions that create
                healthier buildings, reduce operational costs, and minimize
                ecological footprints.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                name="Alajda STP"
                image="/expertise/envi/Alajda STP views-images-1.jpg"
                insight="Energy-efficient wastewater plant with biogas recovery, cutting energy use by 40%."
              />
              <ProjectCard
                name="Al Houma STP"
                image="/expertise/envi/shj-2113-al-houma-stp1.jpg"
                insight="MBR technology treatment plant producing reusable water for 50,000 residents."
              />
              <ProjectCard
                name="Dhaid Eagle STP"
                image="/expertise/envi/shj-2220-stp-dhaid-eagle.jpg"
                insight="Compact UV-disinfection system optimized for water-scarce regions."
              />
              <ProjectCard
                name="Massar STP"
                image="/expertise/envi/shj-2238-stp-massar.jpg"
                insight="Smart decentralized system enabling 85% water reuse for irrigation."
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
                  Integrated Environmental Consulting Services
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    At Capital Engineering Consultancy, we integrate
                    environmental considerations into every phase of the
                    construction process. Our holistic approach ensures
                    buildings are not only structurally sound but also
                    environmentally responsible and resource-efficient.
                  </p>

                  <p className="text-lg">
                    Our environmental specialists work alongside architects,
                    engineers, and project managers to implement sustainable
                    practices from concept to completion—creating buildings that
                    minimize ecological impact while maximizing occupant comfort
                    and operational efficiency.
                  </p>

                  <div className="pt-4">
                    <Button className="group bg-primary text-white hover:bg-primary/90">
                      Request Environmental Assessment
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
                    src="/expertise/photos/environment/1.jpg"
                    alt="Sustainable building design meeting"
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
                Our Environmental Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creating sustainable building solutions that balance
                environmental responsibility, economic viability, and social
                impact.
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
                  title: "Carbon Footprint Reduction",
                  description:
                    "Comprehensive strategies to minimize embodied and operational carbon through innovative design, material selection, and energy systems.",
                  icon: <Leaf className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Circular Economy Principles",
                  description:
                    "Implementation of waste reduction, material reuse, and recycling practices throughout the construction lifecycle.",
                  icon: <Globe className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Biodiversity Protection",
                  description:
                    "Thoughtful site planning and landscaping that preserves natural habitats and enhances local ecosystems.",
                  icon: <TreeDeciduous className="h-16 w-16 text-primary" />,
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
              The Capital EC Environmental Advantage
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FeatureItem>
                  Environmental Impact Assessments — Comprehensive analysis of
                  potential environmental effects of construction projects
                </FeatureItem>
                <FeatureItem>
                  Sustainable Design Integration — Embedding green principles
                  into architectural and engineering plans from the outset
                </FeatureItem>
                <FeatureItem>
                  Energy Modeling & Optimization — Advanced simulation tools to
                  maximize energy efficiency and reduce consumption
                </FeatureItem>
                <FeatureItem>
                  Waste Management Strategies — Minimizing construction waste
                  through careful planning and innovative recycling approaches
                </FeatureItem>
                <FeatureItem>
                  Green Building Certification Support — Expert guidance through
                  LEED, BREEAM, Estidama, and other certification processes
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
                src="/expertise/photos/environment/left.jpg"
                alt="Green building design meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[500px]">
              <img
                src="/expertise/photos/environment/right.jpg"
                alt="Sustainable building with green features"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="container py-16 relative -mt-32 md:-mt-40 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-3xl mx-auto shadow-lg rounded-lg">
              <blockquote className="text-xl md:text-2xl font-display italic text-center">
                "The most sustainable building is the one that harmonizes human
                needs with environmental stewardship, creating spaces that
                nurture both people and planet."
                <footer className="mt-4 text-sm text-gray-600 font-normal">
                  – Capital EC Director of Environmental Solutions
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Global Enterprises Trust Capital EC */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trusted by Environmentally Conscious Organizations
            </h2>

            <div className="mb-12">
              <p className="text-lg text-center max-w-3xl mx-auto">
                From green commercial developments to sustainable
                infrastructure, Capital Engineering Consultancy delivers
                environmental solutions that exceed regulatory requirements. Our
                integrated approach ensures that every project we undertake
                achieves the perfect balance between environmental
                responsibility, economic viability, and social benefit.
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
        {/* <ContactCTA /> */}
        <section className="py-16 bg-[#f7f9fa]">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f3a7d] mb-6">
              Ready to Design Your Vision?
              </h2>
              <p className="text-lg text-black mb-8">
                Let’s collaborate to create spaces that inspire and endure. Get
                in touch with our team today.
              </p>
              <Link href="/contact">
                <Button className="bg-[#1f3a7d] text-white hover:bg-[#1f3a7d]/90 px-6 py-3 rounded-lg uppercase">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
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

export default EnvironmentalSolutions;
