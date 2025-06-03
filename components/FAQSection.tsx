import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of engineering services including architecture & design, structural engineering, MEP design, project management, environmental consulting, and specialized oil & gas engineering solutions.",
    },
    {
      question: "Can you manage residential & commercial projects?",
      answer:
        "Yes, we have extensive experience in both residential and commercial projects of all sizes. Our portfolio includes luxury villas, apartment complexes, office buildings, retail spaces, and mixed-use developments.",
    },
    {
      question: "How do you ensure sustainability?",
      answer:
        "Sustainability is integrated into every stage of our process. We conduct environmental impact assessments, implement energy-efficient designs, utilize renewable materials when possible, and follow green building standards such as LEED and Estidama.",
    },
    {
      question: "What makes Capital different?",
      answer:
        "Our unique combination of local expertise and global standards sets us apart. With over 20 years of experience in the region, we understand local regulations and environmental conditions while implementing international best practices and innovative solutions.",
    },
  ];

  return (
    <section className={`section py-20 ${camber.variable}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[--body-font]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium font-[--body-font]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-[--body-font]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
