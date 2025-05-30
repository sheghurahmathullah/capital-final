
import React from "react";
import { FileText, Newspaper, Tv, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewsroomTeasers = () => {
  const sections = [
    {
      title: "Blog Articles",
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: "Insights on engineering trends and innovations",
      link: "/newsroom/blogs"
    },
    {
      title: "Press Releases",
      icon: <Newspaper className="h-8 w-8 text-primary" />,
      description: "Latest announcements from Capital EC",
      link: "/newsroom/press-release"
    },
    {
      title: "Media Coverage",
      icon: <Tv className="h-8 w-8 text-primary" />,
      description: "Our appearances in global media",
      link: "/newsroom/media-coverage"
    },
    {
      title: "Letters from the CEO",
      icon: <Mail className="h-8 w-8 text-primary" />,
      description: "Strategic vision and leadership perspectives",
      link: "/newsroom/ceo-letter"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Capital Voices — Insight. Innovation. Impact.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <Link href={section.link} key={index} className="bg-white p-8 rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="mb-6">{section.icon}</div>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-700 mb-6">{section.description}</p>
              <div className="text-primary font-medium hover:underline">Read More</div>
            </Link>
          ))}
        </div>
{/*         
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/newsroom">Visit Newsroom</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default NewsroomTeasers;
