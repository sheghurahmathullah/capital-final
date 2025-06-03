import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import localFont from "next/font/local";

const camber = localFont({
  src: [
    {
      path: "../public/fonts/CamberTRIAL-Lt.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--body-font",
});

const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote:
        "Capital Engineering's professionalism, timeliness, and innovation made all the difference during our ADNOC project.",
      author: "Hazem Eltawi",
      position: "Director of Contracting & Maintenance, NIGM",
      company: "NIGM",
    },
    {
      quote:
        "Their commitment to sustainable solutions helped us achieve our environmental goals while maintaining budget constraints.",
      author: "Sarah Al Mansoori",
      position: "Head of Development",
      company: "Aldar Properties",
    },
    {
      quote:
        "The attention to detail and quality of engineering was exceptional. They delivered beyond our expectations.",
      author: "Mohammed Al Hashimi",
      position: "Project Director",
      company: "Dubai Municipality",
    },
  ];

  return (
    <section
      className={`py-24 bg-gradient-to-b from-white to-slate-50 ${camber.variable}`}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#211574] font-[--body-font]">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#211574] mx-auto opacity-70 rounded-full mb-6"></div>
          <p className="text-slate-600 font-[--body-font]">
            What our clients say about our engineering excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-xl bg-white rounded-2xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col h-full">
                        <div className="bg-[#211574] p-6 relative">
                          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rotate-45 bg-[#211574]"></div>
                        </div>
                        <div className="p-10 pt-12 md:p-12 md:pt-14 flex flex-col flex-grow">
                          <div className="mb-8 flex-grow">
                            <Quote className="h-10 w-10 text-[#211574] opacity-20 mb-6 float-left mr-4" />
                            <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic font-[--body-font]">
                              "{testimonial.quote}"
                            </p>
                          </div>
                          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#211574] to-[#4a3cb5] flex items-center justify-center text-white font-bold font-[--body-font]">
                                  {testimonial.author.charAt(0)}
                                </div>
                                <p className="font-bold text-[#211574] font-[--body-font]">
                                  {testimonial.author}
                                </p>
                              </div>
                              <p className="text-sm text-slate-600 mt-1 font-[--body-font]">
                                {testimonial.position}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-[#211574] font-[--body-font]">
                                {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10">
              <CarouselPrevious className="relative static transform-none mx-2 bg-white shadow-md border-none text-[#211574] hover:bg-[#211574] hover:text-white transition-all duration-300" />
              <div className="flex space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-[#211574]" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static transform-none mx-2 bg-white shadow-md border-none text-[#211574] hover:bg-[#211574] hover:text-white transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
