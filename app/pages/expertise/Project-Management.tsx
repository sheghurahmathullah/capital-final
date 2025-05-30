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

const Projectmanagement = () => {
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
              poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-a-crane-in-the-city-1823-large.mp4"
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
                Project Management Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Delivering projects on time, within budget, and to the highest
                quality standards through strategic planning, meticulous
                execution, and proactive risk management.
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
                <h3 className="text-2xl font-bold">1,200+</h3>
                <p className="text-gray-600">Projects Managed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-gray-600">Countries Served</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <HandshakeIcon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold">950+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </motion.div>
            </div>

            <p className="text-center mt-8 text-gray-600">
              Trusted by developers, corporations, and government entities
              across the MENA region, Europe, and Asia.
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
                Projects Delivered with Precision
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From complex infrastructure to commercial developments, we
                manage projects with meticulous attention to detail, ensuring
                successful outcomes that exceed client expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                name="Aidhafra Commercial Complex"
                image="/expertise/project/aidhafra.jpeg"
                insight="End-to-end project management of a mixed-use development, overseeing design coordination, contractor procurement, and phased delivery within tight urban constraints."
              />
              <ProjectCard
                name="Iraq Infrastructure Project"
                image="/expertise/project/iraq1.jpg"
                insight="Orchestrated cross-border mega-project involving 22 subcontractors and 3 government agencies, delivering critical infrastructure ahead of schedule despite geopolitical challenges."
              />
              <ProjectCard
                name="MNR Multi-Speciality Hospital"
                image="/expertise/project/mnr1.jpeg"
                insight="Turnkey healthcare facility management from schematic design to operational handover, implementing stringent infection control protocols and medical equipment integration timelines."
              />
              <ProjectCard
                name="Future Food Factory"
                image="/expertise/project/future_food.jpg"
                insight="Agile management of a Grade-A food processing plant, synchronizing cleanroom construction, machinery installation, and regulatory compliance for seamless commissioning."
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
                  Comprehensive Project Management Solutions
                </h2>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg">
                    At Capital Engineering Consultancy, we deliver end-to-end
                    project management services that transform client visions
                    into successful realities. Our integrated approach combines
                    strategic planning with meticulous execution, ensuring
                    optimal project outcomes.
                  </p>

                  <p className="text-lg">
                    Our specialized teams handle everything from initial
                    planning and scheduling to resource allocation, risk
                    management, and quality control—creating a seamless project
                    delivery experience that consistently meets or exceeds
                    client expectations.
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
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Project management meeting"
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
                Our Project Management Philosophy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Creating project delivery systems that balance efficiency,
                quality, and stakeholder satisfaction.
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
                  title: "Proactive Risk Management",
                  description:
                    "Systematic identification and mitigation of project risks before they impact timelines, budgets, or quality outcomes.",
                  icon: <Shield className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Transparent Communication",
                  description:
                    "Clear, consistent reporting and stakeholder engagement that builds trust and enables informed decision-making throughout the project lifecycle.",
                  icon: <Building className="h-16 w-16 text-primary" />,
                },
                {
                  title: "Sustainable Practices",
                  description:
                    "Integration of environmental considerations and sustainable methodologies into project planning and execution processes.",
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
              The Capital EC Project Management Advantage
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <FeatureItem>
                  Full-Lifecycle Management — From initiation and planning to
                  execution, monitoring, and closure
                </FeatureItem>
                <FeatureItem>
                  Integrated Expertise — Project managers, technical
                  specialists, and construction professionals working as one
                  team
                </FeatureItem>
                <FeatureItem>
                  Value Engineering — Optimizing project delivery to maximize
                  efficiency and minimize costs
                </FeatureItem>
                <FeatureItem>
                  Advanced Methodologies — Utilizing Agile, Lean, and
                  traditional approaches tailored to project requirements
                </FeatureItem>
                <FeatureItem>
                  Global Best Practices — Bringing international standards and
                  methodologies to every local project
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
                src="/expertise/project/port1.jpg"
                alt="Project planning session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Project team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="container py-16 relative -mt-32 md:-mt-40 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 max-w-3xl mx-auto shadow-lg rounded-lg">
              <blockquote className="text-xl md:text-2xl font-display italic text-center">
                "Exceptional project management is the invisible force that
                transforms complexity into clarity, chaos into order, and vision
                into reality."
                <footer className="mt-4 text-sm text-gray-600 font-normal">
                  – Capital EC Director of Project Management
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Global Enterprises Trust Capital EC */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trusted by Leading Organizations
            </h2>

            <div className="mb-12">
              <p className="text-lg text-center max-w-3xl mx-auto">
                From complex infrastructure to commercial developments, Capital
                Engineering Consultancy delivers project management solutions
                that exceed expectations. Our multidisciplinary approach ensures
                that every project we manage perfectly balances time, cost, and
                quality objectives.
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

export default Projectmanagement;
