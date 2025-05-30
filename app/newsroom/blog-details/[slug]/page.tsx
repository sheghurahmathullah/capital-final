"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client2, urlForClient2 } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

// Define the BlogPost type
type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  projectDescription?: string;
  projectOverview?: any[];
  publishedAt: string;
  author?: {
    name: string;
    role?: string;
    image?: {
      asset: {
        _ref: string;
      };
    };
  };
  readTime?: string;
  tags?: string[];
};

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        // Query to fetch the blog post by slug
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          mainImage,
          projectDescription,
          projectOverview,
          publishedAt,
          author->{
            name,
            role,
            image
          },
          "readTime": estimatedReadingTime,
          "tags": categories[]->title
        }`;

        const data = await client2.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-primary">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Button asChild>
              <Link href="/newsroom/blog">Return to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10"></div>
          {post.mainImage && (
            <img
              src={urlForClient2(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              className="w-full h-[50vh] object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 right-0 z-20 container py-16">
            <div className="max-w-3xl">
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <Tag className="w-4 h-4" />
                  {post.tags.map((tag: string, index: number) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {index < post.tags!.length - 1 && <span>•</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80 gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild>
              <Link href="/newsroom/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            {post.author && (
              <div className="flex items-center gap-4 mb-8">
                {post.author.image && (
                  <img
                    src={urlForClient2(post.author.image)
                      .width(100)
                      .height(100)
                      .url()}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-bold">{post.author.name}</div>
                  {post.author.role && (
                    <div className="text-sm text-gray-500">
                      {post.author.role}
                    </div>
                  )}
                </div>
              </div>
            )}

            <Separator className="mb-8" />

            {/* Project Description */}
            {post.projectDescription && (
              <div className="prose lg:prose-lg max-w-none mb-8">
                <p className="lead">{post.projectDescription}</p>
              </div>
            )}

            {/* Project Overview - Portable Text Content */}
            {post.projectOverview && (
              <div className="prose lg:prose-lg max-w-none">
                <PortableText value={post.projectOverview} />
              </div>
            )}

            <Separator className="my-8" />

            {/* Related Posts or Share Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Share This Article</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
