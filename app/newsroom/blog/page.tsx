"use client";
import React, { useState, useEffect } from "react";
import { Newspaper, Clock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import Link from "next/link";
import { client2, urlForClient2 } from "../../../lib/sanity";

// Define Blog post type
type BlogPost = {
  _id: string;
  title: string;
  snippet: string;
  content: any[];
  publishedAt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  readTime?: string;
  slug: string;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const query = `*[_type == "post" && defined(mainImage)] | order(publishedAt desc) {
          _id,
          title,
          "snippet": excerpt,
          content,
          publishedAt,
          mainImage,
          "readTime": estimatedReadingTime,
          "slug": slug.current
        }`;

        const data = await client2.fetch(query);
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
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

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="bg-[#211574]/10 py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#211574]">
                  Capital Blog
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Expert insights, construction innovations, and industry
                  analysis from Capital Engineering Consultancy's building
                  specialists
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card
                    key={item}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full animate-pulse border-t-4 border-t-[#211574]"
                  >
                    <div className="h-48 bg-gray-200"></div>
                    <CardContent className="pt-6 flex-1">
                      <div className="h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-0 pb-6">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    </CardFooter>
                    <div className="px-6 pb-6">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
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
        <section className="bg-[#211574]/10 py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#211574]">
                Capital Engineering Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Expert insights, construction innovations, and industry analysis
                from Capital Engineering Consultancy's building specialists
              </p>
              {/* Search input */}
              <div className="max-w-md mx-auto relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 border-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full animate-fade-in border-t-4 border-t-[#211574]"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={urlForClient2(post.mainImage)
                        .width(640)
                        .height(360)
                        .url()}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <CardContent className="pt-6 flex-1">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-[#211574] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.snippet}
                    </p>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center pt-0 pb-6">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.publishedAt)}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime || "5 min read"}
                    </div>
                  </CardFooter>

                  <div className="px-6 pb-6">
                    <Link
                      href={`/newsroom/blog-details/${post.slug}`}
                      className="text-[#211574] font-medium hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Newspaper className="w-16 h-16 mx-auto text-[#211574]/50 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#211574]">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're
                  looking for.
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
                      className="hover:text-[#211574]"
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="bg-[#211574] hover:bg-[#211574]/90 text-white"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="hover:text-[#211574]">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="hover:text-[#211574]">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="hover:text-[#211574]" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 border-t">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#211574]">
                Stay Updated with Capital Engineering Insights
              </h2>
              <p className="mb-8 text-gray-600">
                Subscribe to our newsletter to receive the latest engineering
                insights and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 border-gray-300"
                />
                <Button className="bg-[#211574] text-white hover:bg-[#211574]/90">
                  Subscribe
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

export default Blog;
