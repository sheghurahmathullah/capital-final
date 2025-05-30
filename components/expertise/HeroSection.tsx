"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage = "/images/hero-bg.jpg",
}) => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-wrap gap-4">
              {primaryCTA && (
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  {primaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              {secondaryCTA && (
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  {secondaryCTA}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
