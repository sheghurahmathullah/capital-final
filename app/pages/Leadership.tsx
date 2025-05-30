
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#f9f9f9]">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Led by Engineers.<br />Trusted by Nations.</h1>
              <p className="text-lg md:text-xl text-gray-700">
                Our leadership blends deep technical expertise with decades of international experience.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LeaderCard
                name="John Doe"
                title="Founder & CEO"
                bio="27 years of experience in global infrastructure and oil & gas project management."
              />
              <LeaderCard
                name="Sarah Johnson"
                title="Chief Operations Officer"
                bio="Former director at AECOM with expertise in large-scale government projects across MENA."
              />
              <LeaderCard
                name="Mohammed Al Farsi"
                title="Regional Director, Middle East"
                bio="20+ years specializing in urban development and infrastructure in the GCC."
              />
              <LeaderCard
                name="Priya Sharma"
                title="Head of Architecture"
                bio="Award-winning architect with landmark projects in Dubai, London and Mumbai."
              />
              <LeaderCard
                name="David Chen"
                title="Director of Engineering"
                bio="Technical lead for over 200 oil & gas projects with expertise in sustainable design."
              />
              <LeaderCard
                name="Fatima Al Mazrouei"
                title="Director of Business Development"
                bio="Former advisor to government infrastructure initiatives across the UAE and Saudi Arabia."
              />
            </div>
          </div>
        </section>

        {/* Board of Advisors */}
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Board of Advisors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <AdvisorCard
                name="Sir Richard Thompson"
                title="Former President, Royal Institute of Civil Engineers"
              />
              <AdvisorCard
                name="Dr. Aisha Al Khouri"
                title="Professor of Sustainable Engineering, MIT"
              />
              <AdvisorCard
                name="Robert Williams"
                title="Former CEO, Global Infrastructure Partners"
              />
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

const LeaderCard = ({ name, title, bio }: { name: string; title: string; bio: string }) => (
  <div className="bg-white p-6 shadow-sm rounded-md">
    <div className="aspect-square bg-gray-200 mb-6 overflow-hidden">
      {/* This would be replaced with an actual image */}
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-400">Photo</span>
      </div>
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <h4 className="text-primary font-medium mb-4">{title}</h4>
    <p className="text-gray-600">{bio}</p>
  </div>
);

const AdvisorCard = ({ name, title }: { name: string; title: string }) => (
  <div className="bg-white p-6 shadow-sm rounded-md flex flex-col items-center text-center">
    <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
      {/* This would be replaced with an actual image */}
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <span className="text-gray-400">Photo</span>
      </div>
    </div>
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-gray-600">{title}</p>
  </div>
);

export default Leadership;
