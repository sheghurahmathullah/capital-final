"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface SectorTemplateProps {
  title: string;
  subtitle: string;
  bannerImage: string;
  bannerAlt?: string;
  bannerPriority?: boolean;
  disableBannerAnimation?: boolean;
  introduction: string;
  capabilities: string[];
  services: {
    title: string;
    description: string;
    features: string[];
  }[];
  technologies: {
    name: string;
    icon: React.ReactNode;
    description: string;
  }[];
  featuredProjects: {
    title: string;
    description: string;
    image: string;
    details: {
      location: string;
      area: string;
      completion: string;
    };
    slug: string;
  }[];
  whyChooseUs: string;
  downloadBrochure?: {
    title: string;
    url: string;
  };
}

const SectorTemplate: React.FC<SectorTemplateProps> = ({
  title,
  subtitle,
  bannerImage,
  bannerAlt = "Sector banner image",
  bannerPriority = false,
  disableBannerAnimation = false,
  introduction,
  capabilities,
  services,
  technologies,
  featuredProjects,
  whyChooseUs,
  downloadBrochure,
}) => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  const imageAnimation = {
    hidden: { scale: 1.05, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {disableBannerAnimation ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
          />
        ) : (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          />
        )}

        <div className="container relative z-20 h-full mx-auto px-4 flex items-center">
          <motion.div
            className="max-w-3xl text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Explore {title} Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              {title} Expertise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {introduction}
            </p>

            {capabilities && capabilities.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-12">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <p className="text-gray-700">{capability}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our {title} Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="h-full">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-5">{service.description}</p>

                    <div className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            </div>
                          </div>
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Advanced Technologies
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Leveraging cutting-edge solutions for optimal results
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-5 text-primary">{tech.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                    <p className="text-gray-700">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured {title} Projects
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of successful {title.toLowerCase()} projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <Card className="h-full border-none shadow-lg overflow-hidden">
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="h-64 relative overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 cursor-pointer hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-sm space-y-2">
                        <div>
                          <p className="font-semibold text-gray-900">
                            Location
                          </p>
                          <p className="text-gray-600">
                            {project.details.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us for Your {title} Projects
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {whyChooseUs}
              </p>

              {downloadBrochure && (
                <div className="mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {downloadBrochure.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                        Download our comprehensive brochure to get detailed
                        insights into our {title.toLowerCase()} services.
                      </p>
                    </div>
                    <div className="w-full md:w-auto">
                      <Button
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
                        size="lg"
                        onClick={() =>
                          window.open(downloadBrochure.url, "_blank")
                        }
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
        {/* Background SVG Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="circles"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your {title} Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's create something exceptional together. Our team is ready to
              bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Contact Our Specialists{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary/10"
                >
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SectorTemplate;
