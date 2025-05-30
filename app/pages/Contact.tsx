
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MapPin, Globe, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("UAE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#f9f9f9]">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's Build Something Big.</h1>
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 mr-2 text-primary" />
                <h2 className="text-xl font-medium">Our Offices Around the World</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-700">
                Connect with one of our global offices... or feel free to just send us a nifty postcard. We won't mind!
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section">
          <div className="container">
            <div className="mb-12 border-b">
              <div className="flex flex-wrap">
                {["UAE", "KSA", "Oman", "Egypt", "India"].map((country) => (
                  <button
                    key={country}
                    onClick={() => setActiveTab(country)}
                    className={cn(
                      "px-6 py-3 text-lg font-medium transition-colors",
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
        </section>

        {/* Contact Form Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Any Project on Your Mind?</h2>
              <p className="text-lg text-gray-600">Great! We're excited to hear from you. Let's start something.</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
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
                  <label htmlFor="website" className="block text-sm font-medium mb-2">Website Link (Optional)</label>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">How Can We Help You</label>
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
                  From concept to completion, we engineer success. Contact us today to bring your project to life!
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <span>connect@capitalec.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <span>+971 55 123 4567</span>
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

const LocationCard = ({ city, address, phone }: { city: string; address: string; phone: string }) => (
  <div className="bg-white p-6 shadow-sm rounded-md hover:shadow-md transition-shadow">
    <div className="flex items-start">
      <MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
      <div>
        <h3 className="text-xl font-bold mb-2">{city}</h3>
        <address className="not-italic text-gray-600">
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
