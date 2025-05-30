"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { client3, urlForClient3 } from "../../../lib/sanity";

// Define PressRelease type
type PressRelease = {
  _id: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  location: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: string;
};

// Categories for filtering
const categories = [
  "All",
  "Healthcare Infrastructure",
  "Commercial Projects",
  "Residential Development",
  "Awards & Recognition",
  "Company News",
  "Sustainability",
];

const PressRelease = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const query = `*[_type == "post" && defined(mainImage)] | order(publishedAt desc) {
          _id,
          title,
          summary,
          publishedAt,
          category,
          location,
          mainImage,
          "slug": slug.current
        }`;

        const data = await client3.fetch(query);
        setPressReleases(data);
      } catch (error) {
        console.error("Error fetching press releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Filter press releases based on active category
  const filteredReleases =
    activeCategory === "All"
      ? pressReleases
      : pressReleases.filter((release) => release.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Add loading skeleton similar to Blog.tsx */}
          {/* ... existing loading UI ... */}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#211574]/10 py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#211574]">
                Press Releases
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                The latest news and announcements from Capital Engineering
                Consultancy
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases List */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredReleases.map((release) => (
                <Card
                  key={release._id}
                  className="overflow-hidden hover:shadow-md transition-shadow border-[#211574]/10"
                >
                  <Link
                    href={`/newsroom/press-release-details/${release.slug}`}
                    className="flex flex-col md:flex-row"
                  >
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img
                        src={urlForClient3(release.mainImage)
                          .width(640)
                          .height(360)
                          .url()}
                        alt={release.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <Badge className="mb-2">{release.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 hover:text-[#211574] transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{release.summary}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(release.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {release.location}
                        </div>
                      </div>

                      <div className="flex items-center text-[#211574] font-medium">
                        Read Press Release
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}

              {filteredReleases.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    No press releases found for this category.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      className="text-[#211574] hover:bg-[#211574]/10"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="bg-[#211574] hover:bg-[#211574]/90"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      className="text-[#211574] hover:bg-[#211574]/10"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      className="text-[#211574] hover:bg-[#211574]/10"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="bg-[#211574]/5 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-[#211574]">
                Media Contact
              </h2>
              <p className="mb-6 text-gray-600">
                For press inquiries, please contact our communications
                department:
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="border-[#211574] text-[#211574] hover:bg-[#211574]/10"
                >
                  info@capitalengg.com
                </Button>
                <Button className="bg-[#211574] hover:bg-[#211574]/90">
                  +971 6 553 6806
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PressRelease;
