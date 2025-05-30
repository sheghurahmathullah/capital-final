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

const ArchitectureLandscape = () => {
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
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
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
                Architecture and Landscape
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                We design Architecture and landscapes that endure — balancing
                function, sustainability, and beauty.
              </p>
              <Button className="group bg-white text-primary hover:bg-gray-100 uppercase">
                Talk to Our Experts
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
                <h3 className="text-2xl font-bold">7200+</h3>
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
                <h3 className="text-2xl font-bold">20+</h3>
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
                <h3 className="text-2xl font-bold">500+</h3>
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
                Designed to Inspire. Engineered to Last.
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Exceptional interiors that blend aesthetics with precision
                engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                name="BAPS Mandir"
                image="/expertise/BAPS.jpg"
                insight="We blended opulence with precision—every detail aligned with the brand's DNA."
              />
              <ProjectCard
                name="Capital Plaza"
                image="/expertise/Capital plaza-1.jpg"
                insight="A revolutionary dining space that redefines hospitality experiences."
              />
              <ProjectCard
                name="Slovenia"
                image="/expertise/Slovenia.jpg"
                insight="Creating luxurious residential spaces where comfort meets sophistication."
              />
              <ProjectCard
                name="Chile Pavilion"
                image="/expertise/Chile.jpg"
                insight="Health-focused design that maintains elegance and customer experience."
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Timeless Design & Innovation */}
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
                  Timeless Design & Innovation
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    At Capital Engineering Consultancy, we create purposeful,
                    efficient, and timeless architectural designs that
                    seamlessly blend innovation with functionality. From concept
                    to execution, our expert team delivers bold, modern, and
                    sustainable structures.
                  </p>

                  <p className="text-lg">
                    Our landscape design enhances natural surroundings with
                    eco-friendly, visually striking spaces, integrating
                    hardscape and softscape elements to promote sustainability.
                  </p>

                  <div className="pt-4">
                    <Button className="group bg-primary text-white hover:bg-primary/90">
                      Get in Touch
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
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Modern architectural design"
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
                Where Innovation Meets Sustainability
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our core values guide our approach to environmental solutions.
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
                  title: "Sustainable Design",
                  description:
                    "Eco-first thinking across all stages of project planning and execution.",
                  icon: <Leaf className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Timely Delivery",
                  description:
                    "Environmental approvals and audits handled efficiently and thoroughly.",
                  icon: <Shield className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Optimal Functionality",
                  description:
                    "Solutions that ensure compliance, community well-being, and cost-efficiency.",
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
              Why Global Clients Choose Capital
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FeatureItem>
                  End-to-End Delivery — From concept to site
                </FeatureItem>
                <FeatureItem>
                  Cross-disciplinary Expertise — Architects, planners, engineers
                  under one roof
                </FeatureItem>
                <FeatureItem>
                  Unmatched Quality — We build for decades, not just deadlines
                </FeatureItem>
                <FeatureItem>
                  Transparent Collaboration — Always human-first
                </FeatureItem>
                <FeatureItem>
                  Strategic Locations — On-ground teams across MENA, India &
                  Europe
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Architectural rendering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1679496470437-a09743179634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Landscaped garden"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="container py-16 relative -mt-32 md:-mt-40 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-3xl mx-auto shadow-lg rounded-lg">
              <blockquote className="text-xl md:text-2xl font-display italic text-center">
                "Great design doesn't shout — it endures."
                <footer className="mt-4 text-sm text-gray-600 font-normal">
                  – Capital Principal Architect
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Global Enterprises Trust Capital EC */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Global Enterprises Trust Capital EC
            </h2>

            <div className="mb-12">
              <p className="text-lg text-center max-w-3xl mx-auto">
                Trusted by nations, loved by clients. With 7200+ built
                environments delivered across 10+ industries, we don't just
                design — we define futures. From Slovenia to Saudi Arabia, from
                pavilions to mega complexes, Capital EC crafts landmarks that
                endure.
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

export default ArchitectureLandscape;
