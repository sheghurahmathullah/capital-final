"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Award, Users, Globe, MessageCircle, X } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Dynamically import CountUp with SSR disabled
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

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

  // State to manage full-screen image
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  // Function to open full-screen image
  const openFullScreenImage = (imageSrc: string) => {
    setFullScreenImage(imageSrc);
  };

  // Function to close full-screen image
  const closeFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeFullScreenImage}
        >
          <button
            className="absolute top-4 right-4 text-white z-60"
            onClick={closeFullScreenImage}
          >
            <X className="h-10 w-10" />
          </button>
          <img
            src={fullScreenImage}
            alt="Full Screen Award"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

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
                delivering impactful projects for over 20 years across 5+
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
              <MetricCard number="7200+" label="Projects Completed" />
              <MetricCard number="600+" label="Expert Engineers" />
              <MetricCard number="10+" label="Industries" />
            </div>
            <p className="text-center mt-10 text-gray-600">
              Delivering engineering excellence across multiple industries.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="section bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vision & Mission
              </h2>
              <div className="w-24 h-1 bg-[#211574] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-[#211574]">
                <div className="flex items-center mb-6">
                  <div className="bg-[#211574] p-3 rounded-lg mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#211574]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  "To be a globally recognized multidisciplinary consultancy,
                  shaping the construction landscape with innovative, reliable,
                  and sustainable solutions, and emerging as one of the top
                  consultants in the world."
                </p>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-[#211574]">
                <div className="flex items-center mb-6">
                  <div className="bg-[#211574] p-3 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#211574]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  "We deliver unparalleled value through tailored engineering
                  solutions, leveraging advanced technologies and a culturally
                  diverse and skilled team. Committed to sustainability, we
                  enhance the built environment, foster development, and create
                  lasting value worldwide."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="section bg-gradient-to-b from-white to-gray-50 py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Philosophy
              </h2>
              <div className="w-24 h-1 bg-[#211574] mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Guiding principles that shape our approach to engineering
                excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20">
                <div className="bg-[#211574]/5 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#211574]/10 transition-colors duration-300">
                  <Users className="h-8 w-8 text-[#211574]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#211574]">
                  Collaboration as the Cornerstone
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We foster teamwork and knowledge sharing to drive innovation.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20">
                <div className="bg-[#211574]/5 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#211574]/10 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-[#211574]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#211574]">
                  Client-Centric Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We build lasting relationships by understanding client needs.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20">
                <div className="bg-[#211574]/5 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#211574]/10 transition-colors duration-300">
                  <Award className="h-8 w-8 text-[#211574]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#211574]">
                  Adaptability and Agility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Embracing change ensures efficient project execution.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20">
                <div className="bg-[#211574]/5 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#211574]/10 transition-colors duration-300">
                  <Globe className="h-8 w-8 text-[#211574]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#211574]">
                  Beyond Technical Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We excel in communication, problem-solving, and project
                  delivery.
                </p>
              </div>

              <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20">
                <div className="bg-[#211574]/5 p-4 rounded-lg w-fit mb-6 group-hover:bg-[#211574]/10 transition-colors duration-300">
                  <Award className="h-8 w-8 text-[#211574]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#211574]">
                  A Culture of Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We care deeply about results and relationships.
                </p>
              </div>

              <div className="group bg-[#211574] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-white/10 p-4 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Our Expert Team
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Our expert team, client focus, and innovation shape a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Awards & Recognition
              </h2>
              <div className="w-24 h-1 bg-[#211574] mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Celebrating excellence and industry recognition
              </p>
            </div>
            <div className="overflow-hidden relative">
              <div
                className="flex gap-8 py-4"
                style={{
                  animation: "awardScroll 40s linear infinite",
                  width: "max-content",
                }}
              >
                {portfolioData2.map((award) => (
                  <div
                    key={award.id}
                    className="min-w-[300px] bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20 group"
                    onClick={() => openFullScreenImage(award.imageSrc)}
                  >
                    <div className="h-56 w-full mb-6 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#211574]">
                        {award.title}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#211574]/5 flex items-center justify-center group-hover:bg-[#211574]/10 transition-colors duration-300">
                        <Award className="h-4 w-4 text-[#211574]" />
                      </div>
                    </div>
                  </div>
                ))}
                {portfolioData2.slice(0, 4).map((award) => (
                  <div
                    key={`duplicate-${award.id}`}
                    className="min-w-[300px] bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#211574]/20 group"
                    onClick={() => openFullScreenImage(award.imageSrc)}
                  >
                    <div className="h-56 w-full mb-6 overflow-hidden rounded-lg bg-gray-50">
                      <img
                        src={award.imageSrc}
                        alt={award.title}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#211574]">
                        {award.title}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#211574]/5 flex items-center justify-center group-hover:bg-[#211574]/10 transition-colors duration-300">
                        <Award className="h-4 w-4 text-[#211574]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes awardScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-300px * 7 - 2rem * 7));
                }
              }
            `}</style>
          </div>
        </section>

        {/* CEO Message */}
        <section className="section bg-gradient-to-b from-white to-gray-50 py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Message from our CEO
                </h2>
                <div className="w-24 h-1 bg-[#211574] mx-auto mb-8"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-[#211574]/5 rounded-lg flex items-center justify-center mb-4">
                        <MessageCircle className="h-7 w-7 text-[#211574]" />
                      </div>
                      <blockquote className="text-gray-700 leading-relaxed">
                        <p className="mb-4">
                          "Established in 2006 and headquartered in the UAE,
                          Capital Engineering Consultancy is a leading
                          multidisciplinary firm present across KSA, Oman,
                          Egypt, India and Iraq. Blending tradition with
                          innovation, we deliver practical and sustainable
                          solutions across architecture, structural engineering,
                          roads, infrastructure, and oil & gas."
                        </p>
                        <p>
                          "Driven by excellence and commitment, we reshape the
                          engineering landscape with quality and transformative
                          outcomes."
                        </p>
                      </blockquote>
                      <footer className="mt-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-[#211574]/5 flex items-center justify-center mr-3">
                            <Users className="h-5 w-5 text-[#211574]" />
                          </div>
                          <div>
                            <p className="font-bold text-[#211574]">
                              Balaskandan Raghunathan
                            </p>
                            <p className="text-gray-600 text-sm">
                              CEO & Managing Director
                            </p>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                  <div className="relative h-[400px]">
                    <img
                      src="/about/c3.png"
                      alt="CEO of Capital Engineering Consultancy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Behind the Vision */}
        <section className="section bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Team Behind the Vision
              </h2>
              <div className="w-24 h-1 bg-[#211574] mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Meet the dedicated professionals driving innovation and
                excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about/our-team.jpg"
                    alt="Capital Engineering Consultancy Team"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211574]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#211574] rounded-full opacity-10"></div> */}
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#211574]/5 p-4 rounded-lg mr-4">
                      <Users className="h-8 w-8 text-[#211574]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#211574]">
                      Expert Team
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Capital Engineering Consultancy's success is driven by a
                    dedicated team of experts in architecture, structural
                    engineering, MEP services, BIM, roads, and infrastructure,
                    committed to delivering innovative and high-quality
                    solutions.
                  </p>
               
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#211574]/5 p-4 rounded-lg mr-4">
                      <Globe className="h-8 w-8 text-[#211574]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#211574]">
                      Global Impact
                    </h3>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Clients
            </h2>
             <div className="w-24 h-1 bg-[#211574] mx-auto mb-8"></div>
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

const MetricCard = ({ number, label }: { number: string; label: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Extract the numeric value from the number string
  const numericValue = parseFloat(number.replace("+", ""));

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-md shadow-sm">
      <div className="text-4xl lg:text-5xl font-bold text-[#211574] mb-2">
        {typeof window !== "undefined" && inView ? (
          <CountUp
            end={numericValue}
            duration={2}
            suffix={number.includes("+") ? "+" : ""}
          />
        ) : (
          number
        )}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

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
