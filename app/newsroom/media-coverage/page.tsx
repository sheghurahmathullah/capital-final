"use client";
import React, { useState, useEffect } from "react";
import { Newspaper, Link as LinkIcon, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";
import { client4, urlForClient4 } from "../../../lib/sanity";

// Define MediaCoverage type
type MediaCoverage = {
  _id: string;
  title: string;
  outlet: string;
  summary: string;
  publishedAt: string;
  link: {
    url: string;
    label: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
};

const MediaCoverage = () => {
  const [mediaCoverage, setMediaCoverage] = useState<MediaCoverage[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaCoverage = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          outlet,
          summary,
          publishedAt,
          link,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`;

        const data = await client4.fetch(query);
        setMediaCoverage(data);
      } catch (error) {
        console.error("Error fetching media coverage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaCoverage();
  }, []);

  // Filter media based on search term
  const filteredMedia = mediaCoverage.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.outlet.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-[#211574]/10 py-16 pt-32">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#211574]">
                  Media Coverage
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Capital Engineering Consultancy in the press and media
                </p>
              </div>
            </div>
          </section>

          {/* Media Coverage Grid */}
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((item) => (
                  <Card
                    key={item}
                    className="overflow-hidden animate-pulse border-[#211574]/20"
                  >
                    <CardContent className="p-6">
                      <div className="h-60 bg-gray-200 rounded-md mb-6"></div>
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-6"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        <div className="h-8 w-32 bg-gray-200 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
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
        <section className="bg-[#211574]/10 py-16 pt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#211574]">
                Media Coverage
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Capital Engineering Consultancy in the press and media
              </p>
            </div>
          </div>
        </section>

        {/* Media Coverage Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredMedia.map((item) => (
                <Card
                  key={item._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in border-[#211574]/20"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-6 h-60 relative">
                        <img
                          src={urlForClient4(item.mainImage).url()}
                          alt={item.outlet}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-[#211574]">
                        {item.title}
                      </h3>
                      {/* <p className="text-gray-600 mb-6">{item.summary}</p> */}

                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-sm text-gray-500">
                          {new Date(item.publishedAt).toLocaleDateString()}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 border-[#211574] text-[#211574] hover:bg-[#211574]/10"
                        >
                          <a
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {"Read Coverage"}
                            <LinkIcon className="w-4 h-4 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredMedia.length === 0 && (
              <div className="text-center py-16">
                <Newspaper className="w-16 h-16 mx-auto text-[#211574]/50 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#211574]">
                  No media coverage found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search to find what you're looking for.
                </p>
              </div>
            )}

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
                      className="bg-[#211574] text-white hover:bg-[#211574]/90"
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

        {/* CTA Section */}
        <section className="bg-[#211574]/10 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#211574]">
                Media Inquiries
              </h2>
              <p className="mb-8 text-gray-600">
                For press inquiries, interview requests, or additional
                information about Capital Engineering Consultancy, please
                contact our media relations team.
              </p>
              <Button
                size="lg"
                className="bg-[#211574] hover:bg-[#211574]/90 text-white"
              >
                Contact Press Team
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MediaCoverage;
