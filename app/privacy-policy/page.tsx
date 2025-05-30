"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you contact us 
                through our website or engage our services. This may include your name, email address, 
                phone number, company name, and other information relevant to our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you project updates and important notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">3. Cookies</h2>
              <p className="mb-4">
                Our website uses cookies to enhance your browsing experience. You can manage cookie 
                preferences through your browser settings.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">4. Third-Party Tools</h2>
              <p className="mb-4">
                We use Google Analytics to analyze website traffic and improve our services. 
                Google Analytics may collect data about your use of our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">5. Security Practices</h2>
              <p className="mb-4">
                We implement reasonable security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Request transfer of your personal information</li>
                <li>Withdraw consent</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">7. Contact Information</h2>
              <p className="mb-4">
                For questions about this Privacy Policy, please contact us at privacy@capitalec.com.
              </p>
            </section>
            
            <p className="text-sm text-gray-500 mt-8">
              Last updated: January 1, 2023
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
