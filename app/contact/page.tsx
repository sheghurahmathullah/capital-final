"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MapPin, Globe, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import WorldMap from "@/components/ui/world-map";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("UAE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would be implemented here
    alert("Thank you for your message. We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Map */}
        <section className="bg-[#f9f9f9] min-h-screen pt-20 md:pt-24 flex items-start py-5 md:py-10">
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <div className="max-w-[2000px] mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] relative">
              {/* Overlay Text Container */}
              <div className="absolute top-4 md:top-10 left-4 md:left-10 z-10 max-w-xl backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-sm">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                  Let's Build Something Big.
                </h1>
                <div className="flex items-center mb-3 md:mb-4">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 mr-2 text-primary" />
                  <h2 className="text-lg md:text-xl font-medium">
                    Our Offices Around the World
                  </h2>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-gray-700">
                  Connect with one of our global offices... or feel free to just
                  send us a nifty postcard. We won't mind!
                </p>
              </div>

              {/* Map Component */}
              <div className="w-full h-full">
                <WorldMap
                  // scale={400}
                  // center={[55.4209, 25.3463]}
                  // minZoom={200}
                  // maxZoom={800}
                  // showLocationLabels
                  // labelStyle={
                  //   {
                  //     fontSize: 12,
                  //     fontWeight: 500,
                  //     fill: "#2563eb",
                  //     textShadow: "1px 1px 1px rgba(0,0,0,0.2)",
                  //   } as React.CSSProperties
                  // }
                  // locations={[
                  //   { name: "Sharjah", coordinates: [55.392, 25.3576] },
                  //   { name: "Dubai", coordinates: [55.2708, 25.2048] },
                  //   { name: "Abu Dhabi", coordinates: [54.3773, 24.4539] },
                  //   { name: "Ras Al Khaimah", coordinates: [55.9754, 25.7869] },
                  //   { name: "Ajman", coordinates: [55.4788, 25.4052] },
                  //   { name: "Umm Al Quwain", coordinates: [55.5552, 25.5856] },
                  //   { name: "Riyadh", coordinates: [46.7219, 24.7136] },
                  //   { name: "Muscat", coordinates: [58.4059, 23.588] },
                  //   { name: "Cairo", coordinates: [31.2357, 30.0444] },
                  //   { name: "Chennai", coordinates: [80.2707, 13.0827] },
                  //   { name: "Kerala", coordinates: [76.2711, 10.8505] },
                  // ]}
                  // dots={[
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 25.2048, lng: 55.2708 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 24.4539, lng: 54.3773 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 25.7869, lng: 55.9754 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 25.4052, lng: 55.4788 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 25.5856, lng: 55.5552 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 24.7136, lng: 46.7219 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 23.588, lng: 58.4059 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 30.0444, lng: 31.2357 },
                  //   },
                  //   {
                  //     start: { lat: 25.3576, lng: 55.392 },
                  //     end: { lat: 13.0827, lng: 80.2707 },
                  //   },
                  //   {
                  //     start: { lat: 13.0827, lng: 80.2707 },
                  //     end: { lat: 10.8505, lng: 76.2711 },
                  //   },
                  // ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="min-h-screen bg-white py-20 md:py-40 lg:py-60">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12 border-b overflow-x-auto">
              <div className="flex flex-nowrap md:flex-wrap min-w-max md:min-w-0">
                {["UAE", "KSA", "Oman", "Egypt", "India"].map((country) => (
                  <button
                    key={country}
                    onClick={() => setActiveTab(country)}
                    className={cn(
                      "px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium transition-colors whitespace-nowrap",
                      activeTab === country
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-600 hover:text-primary"
                    )}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Cards Container */}
            <div className="mt-8">
              {/* UAE Locations */}
              {activeTab === "UAE" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <LocationCard
                    city="Sharjah HQ"
                    address="Unit 203, Sama 2 Tower, Abu Shagara, Sharjah, UAE"
                    phone="+971 65536806"
                  />

                  <LocationCard
                    city="Dubai"
                    address="Unit 2109, 21st Floor Regal Tower, Business Bay, Dubai, UAE"
                    phone="+971 42546155"
                  />

                  <LocationCard
                    city="Abu Dhabi"
                    address="Unit M 1, 2, 3 & 4, Building No: C402, Shabia Musaffah, Sector - 10, Abu Dhabi, UAE"
                    phone="+971 25537568"
                  />

                  <LocationCard
                    city="Ras Al Khaimah"
                    address="Unit 1506, Julphar Tower, Al Nakheel, RAK, UAE"
                    phone="+971 72338744"
                  />

                  <LocationCard
                    city="Ajman"
                    address="Unit 101, Al Mashriq Building, Rashideya 2, Ajman, UAE"
                    phone="+971 557973127"
                  />

                  <LocationCard
                    city="Umm Al Quwain"
                    address="Unit 1005, Shomook Business Complex, Etihad Road, UAQ, UAE"
                    phone="+971 6766 5567"
                  />
                </div>
              )}

              {/* KSA Locations */}
              {activeTab === "KSA" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <LocationCard
                    city="Riyadh"
                    address="2808 Jarir, Al Malaz District, Unit No. 8, PO Box: 12831, Riyadh, KSA"
                    phone="+966 53 276 9180"
                  />
                </div>
              )}

              {/* Oman Locations */}
              {activeTab === "Oman" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <LocationCard
                    city="Muscat"
                    address="Unit no. 11, Building no. 155, Azaiba, Muscat, Oman"
                    phone="+968 94775486"
                  />
                </div>
              )}

              {/* Egypt Locations */}
              {activeTab === "Egypt" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <LocationCard
                    city="Cairo"
                    address="Cairo Governorate 289, Dream House, 3233433 Egypt"
                    phone="+968 94775486"
                  />
                </div>
              )}

              {/* India Locations */}
              {activeTab === "India" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <LocationCard
                    city="Chennai"
                    address="Unit No. 4/2, Lloyds Avenue, Adambakkam, P.O Box 600 088, India"
                    phone="+91 8144558889 / +91 443598226"
                  />

                  <LocationCard
                    city="Kerala"
                    address="Room No. 5A, Municipal Townhall Building, Kurishupally Junction, Pala - 686575"
                    phone="+91 9048820002"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-gray-50 py-12 md:py-20">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Have Any Project on Your Mind?
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Great! We're excited to hear from you. Let's start something.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium mb-2"
                  >
                    Website Link (Optional)
                  </label>
                  <Input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    How Can We Help You
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Let's Create It Together
                </Button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  From concept to completion, we engineer success. Contact us
                  today to bring your project to life!
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* General Inquiries Section */}
        <section className="section py-8 md:py-12">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                General Inquiries
              </h3>
              <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm md:text-base">
                    info@capitalengg.com
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm md:text-base">+971 42546155</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const LocationCard = ({
  city,
  address,
  phone,
}: {
  city: string;
  address: string;
  phone: string;
}) => (
  <div className="bg-white p-4 md:p-6 shadow-sm rounded-md hover:shadow-md transition-shadow">
    <div className="flex items-start">
      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2">{city}</h3>
        <address className="not-italic text-gray-600 text-sm md:text-base">
          <p className="mb-2">{address}</p>
          <div className="flex items-center mt-2">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <span>{phone}</span>
          </div>
        </address>
      </div>
    </div>
  </div>
);

export default Contact;
