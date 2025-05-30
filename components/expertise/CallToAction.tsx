"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to Transform Your Vision into Reality?",
  subtitle = "Partner with Capital Engineering Consultancy for excellence in every detail.",
  primaryCTA = "Speak to Our Experts",
  secondaryCTA = "View Our Portfolio",
}) => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              {primaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {secondaryCTA && (
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                {secondaryCTA}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
