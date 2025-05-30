
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-4">
                These Terms and Conditions govern your use of Capital Engineering Consultancy's website and services. 
                By accessing our website or engaging our services, you agree to these terms in full.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">2. Intellectual Property</h2>
              <p className="mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of 
                Capital Engineering Consultancy and is protected by copyright and other intellectual property laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">3. Limitation of Liability</h2>
              <p className="mb-4">
                Capital Engineering Consultancy provides this website and services "as is" without any warranties, 
                expressed or implied. We do not guarantee the accuracy or completeness of any information on our website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">4. Use of Services</h2>
              <p className="mb-4">
                You agree to use our website and services for lawful purposes only and in a way that does not infringe 
                upon the rights of others or restrict their use of our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">5. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or restrict your access to our website and services 
                if you violate these Terms and Conditions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the 
                United Arab Emirates, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">7. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms and Conditions, please contact us at legal@capitalec.com.
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

export default Terms;
