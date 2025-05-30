"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar, FileText, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { client3, urlForClient3 } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define PressRelease type
type PressRelease = {
  _id: string;
  title: string;
  subtitle: string;
  content: any[];
  paragraph1: any[];
  paragraph2: any[];
  publishedAt: string;
  category: string;
  location: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  contactName: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  slug: string;
};

const PressReleaseDetail = async ({ params }: { params: { slug: string } }) => {
  const release = await client3.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      content,
      paragraph1,
      paragraph2,
      publishedAt,
      category,
      location,
      mainImage,
      contactName,
      contactTitle,
      contactEmail,
      contactPhone,
      "slug": slug.current
    }`,
    { slug: params.slug }
  );

  if (!release) {
    notFound();
  }

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-primary/5 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Button variant="ghost" className="mb-6" asChild>
                <Link
                  href="/newsroom/press-release"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Press Releases
                </Link>
              </Button>

              <Badge className="mb-4">{release.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {release.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(release.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{release.location}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700">{release.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            {release.mainImage && (
              <div className="mb-8">
                <img
                  src={urlForClient3(release.mainImage)
                    .width(1200)
                    .height(675)
                    .url()}
                  alt={release.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {release.paragraph1 && (
              <div className="mb-6 text-gray-700">
                <PortableText value={release.paragraph1} />
              </div>
            )}

            {release.paragraph2 && (
              <div className="mb-6 text-gray-700">
                <PortableText value={release.paragraph2} />
              </div>
            )}

            <div className="prose lg:prose-lg max-w-none">
              <PortableText value={release.content} />
            </div>

            <Separator className="my-8" />

            {/* Static Media Contact and Company Information */}
            <div className="mt-8 space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">For Media Inquiries</h3>
                <p className="mb-2">Email: info@capitalengg.com</p>
                <p className="mb-2">Phone: +971 6 553 6806</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">About Rook</h3>
                <p className="text-gray-700">
                  Rook is a leading digital technology company specializing in
                  web development, strategic design, and branding solutions.
                  With a focus on sparking innovation, Rook empowers brands to
                  make impactful digital impressions.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  About Capital Engineering Consultancy
                </h3>
                <p className="text-gray-700">
                  Capital Engineering Consultancy is a premier firm offering
                  architectural, structural, and engineering services worldwide.
                  With a commitment to excellence and cultural integration, they
                  deliver transformative projects that shape the future of urban
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PressReleaseDetail;
