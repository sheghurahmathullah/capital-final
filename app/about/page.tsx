"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, MessageCircle } from "lucide-react";

const About = () => {
  const portfolioData2 = [
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
      imageSrc:
        "/award/TESORO CASA Certificate of Appreciation (3) (1)_001.png",
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
  ];

  const logos = [
    { img: "/brands/logo-8.webp" },
    { img: "/brands/logo-7.png" },
    { img: "/brands/logo-6.jpg" },
    { img: "/brands/logo-5.png" },
    { img: "/brands/logo-3.avif" },
    { img: "/brands/logo-4.svg" },
    { img: "/brands/logo-2.svg" },
    { img: "/brands/logo-1.svg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#f9f9f9]">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Engineering Legacy.
                <br />
                <span style={{ color: "#211574", fontWeight: "bold" }}>
                  Building the Future.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Capital Engineering Consultancy is a multi-disciplinary firm
                delivering impactful projects for over 17 years across 5+
                countries.
              </p>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <MetricCard number="20+" label="Years of Experience" />
              <MetricCard number="7,200+" label="Projects Completed" />
              <MetricCard number="500+" label="Expert Engineers" />
              <MetricCard number="10+" label="Industries" />
            </div>
            <p className="text-center mt-10 text-gray-600">
              Delivering engineering excellence across multiple industries.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  "To be a globally recognized multidisciplinary consultancy,
                  shaping the construction landscape with innovative, reliable,
                  and sustainable solutions."
                </p>
              </div>

              <div className="bg-white p-8 rounded-md shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  "We deliver unparalleled value through tailored engineering
                  solutions, leveraging advanced technologies and a skilled
                  team. Committed to sustainability, we enhance the built
                  environment, foster development, and create lasting value
                  worldwide."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Philosophy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PhilosophyCard
                title="Collaboration as the Cornerstone"
                description="We foster teamwork and knowledge sharing to drive innovation."
                icon={<Users className="h-8 w-8 text-[#211574]" />}
              />

              <PhilosophyCard
                title="Client-Centric Approach"
                description="We build lasting relationships by understanding client needs."
                icon={<MessageCircle className="h-8 w-8 text-[#211574]" />}
              />

              <PhilosophyCard
                title="Adaptability and Agility"
                description="Embracing change ensures efficient project execution."
                icon={<Award className="h-8 w-8 text-[#211574]" />}
              />

              <PhilosophyCard
                title="Beyond Technical Excellence"
                description="We excel in communication, problem-solving, and project delivery."
                icon={<Globe className="h-8 w-8 text-[#211574]" />}
              />

              <PhilosophyCard
                title="A Culture of Excellence"
                description="We care deeply about results and relationships."
                icon={<Award className="h-8 w-8 text-[#211574]" />}
              />

              <div className="bg-[#211574] text-white p-8 rounded-md flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Our Expert Team</h3>
                <p className="opacity-90">
                  Our expert team, client focus, and innovation shape a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Awards & Recognition
            </h2>
            <div className="overflow-hidden relative">
              <div
                className="flex gap-6 py-4"
                style={{
                  animation: "scroll 40s linear infinite",
                  width: "max-content",
                }}
              >
                {portfolioData2.map((award) => (
                  <div
                    key={award.id}
                    className="min-w-[280px] bg-white p-6 rounded-md shadow-sm flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-52 w-full mb-4 overflow-hidden rounded">
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-medium">{award.title}</span>
                  </div>
                ))}
                {/* Duplicate first few items for seamless looping */}
                {portfolioData2.slice(0, 4).map((award) => (
                  <div
                    key={`duplicate-${award.id}`}
                    className="min-w-[280px] bg-white p-6 rounded-md shadow-sm flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-52 w-full mb-4 overflow-hidden rounded">
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-medium">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-280px * 8 - 6rem * 8)); /* Width of 8 cards + gaps */
                }
              }
            `}</style>
          </div>
        </section>

        {/* CEO Message */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Message from our CEO
              </h2>
              <div className="bg-white p-8 rounded-md shadow-sm flex flex-col md:flex-row gap-8">
                <blockquote className="text-gray-700 leading-relaxed md:w-2/3">
                  <p className="mb-6">
                    "Established in 2006 and headquartered in the UAE, Capital
                    Engineering Consultancy is a leading multidisciplinary firm
                    present across KSA, Oman, Egypt, India and Iraq. Blending
                    tradition with innovation, we deliver practical and
                    sustainable solutions across architecture, structural
                    engineering, roads, infrastructure, and oil & gas."
                  </p>
                  <p>
                    "Driven by excellence and commitment, we reshape the
                    engineering landscape with quality and transformative
                    outcomes."
                  </p>
                  <footer className="mt-6 font-bold">
                    — Balaskandan Raghunathan, CEO & Managing Director
                  </footer>
                </blockquote>
                <div className="md:w-1/3 flex items-center justify-center">
                  <div className="w-full h-64 md:h-full rounded-md overflow-hidden">
                    <img
                      src="/about/c3.png"
                      alt="CEO of Capital Engineering Consultancy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Behind the Vision */}
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Team Behind the Vision
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="rounded-md overflow-hidden">
                  <img
                    src="/about/our-people.JPG"
                    alt="Capital Engineering Consultancy Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-md shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Capital Engineering Consultancy's success is driven by a
                    dedicated team of experts in architecture, structural
                    engineering, MEP services, BIM, roads, and infrastructure,
                    committed to delivering innovative and high-quality
                    solutions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By embracing challenges and continuous learning, we stay at
                    the forefront of industry advancements, blending creativity
                    and precision to create lasting impacts for clients,
                    stakeholders, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="section">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Clients
            </h2>
            <div className="overflow-hidden relative">
              <div
                className="flex gap-6 py-4"
                style={{
                  animation: "clientScroll 30s linear infinite",
                  width: "max-content",
                }}
              >
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="min-w-[200px] h-24 flex items-center justify-center bg-white border border-gray-100 rounded-md p-4"
                  >
                    <img
                      src={logo.img}
                      alt={`Client Logo ${idx + 1}`}
                      className="h-full max-h-13 object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless looping */}
                {logos.map((logo, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="min-w-[200px] h-24 flex items-center justify-center bg-white border border-gray-100 rounded-md p-4"
                  >
                    <img
                      src={logo.img}
                      alt={`Client Logo ${idx + 1}`}
                      className="h-full max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <style>{`
              @keyframes clientScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-200px * ${logos.length} - 6rem * ${logos.length})); /* Width of all logos + gaps */
                }
              }
            `}</style>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

const MetricCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-6 bg-white rounded-md shadow-sm">
    <div className="text-4xl lg:text-5xl font-bold text-[#211574] mb-2">
      {number}
    </div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const PhilosophyCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white p-8 rounded-md shadow-sm">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AwardBadge = ({ name }: { name: string }) => (
  <div className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center justify-center text-center">
    <Award className="h-10 w-10 text-[#211574] mb-3" />
    <span className="font-medium">{name}</span>
  </div>
);

const TeamMember = ({ name, title }: { name: string; title: string }) => (
  <div className="group relative overflow-hidden bg-white rounded-md shadow-sm">
    <div className="aspect-square bg-gray-200 flex items-center justify-center">
      <Users className="h-16 w-16 text-gray-400" />
    </div>
    <div className="p-4">
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
    <div className="absolute inset-0 bg-[#211574] bg-opacity-90 text-white p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="font-bold mb-2">{name}</h3>
      <p className="text-sm">{title}</p>
      <p className="text-xs mt-2 opacity-80">
        Expert with over 15 years of industry experience in global projects.
      </p>
    </div>
  </div>
);

export default About;
