import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Building,
  MapPin,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { client1 } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import ImageGallery from "./ImageGallery";
import jsPDF from "jspdf";
import DownloadButton from "./DownloadButton";

interface Project {
  title: string;
  body: any;
  categoryName: string;
  location: string;
  scopeOfWork: string;
  projectStatus: string;
  completionDate: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  gallery: Array<{
    asset: {
      url: string;
    };
  }>;
}

async function getProject(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      categoryName,
      location,
      scopeOfWork,
      projectStatus,
      completionDate,
      mainImage{
        asset->{
          url
        }
      },
      gallery[]{
        asset->{
          url
        }
      }
    }`;

    return await client1.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

async function generatePDF(project: Project) {
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(project.title, 10, 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Category: ${project.categoryName}`, 10, 20);
  doc.text(`Location: ${project.location}`, 10, 30);
  doc.text(`Scope of Work: ${project.scopeOfWork}`, 10, 40);
  doc.text(`Project Status: ${project.projectStatus}`, 10, 50);
  doc.text(`Completion Date: ${project.completionDate}`, 10, 60);

  doc.setFontSize(12);
  doc.text("Description:", 10, 70);
  doc.setFontSize(10);
  doc.text(doc.splitTextToSize(project.body[0].children[0].text, 180), 10, 80);

  doc.save(`${project.title.replace(/\s+/g, "_")}_Details.pdf`);
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client1.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function PortfolioDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10"></div>
          <img
            src={project.mainImage.asset.url}
            alt={project.title}
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute top-0 left-0 right-0 z-20 container py-16">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-primary">{project.categoryName}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container py-16">
          <Button variant="ghost" className="mb-8" asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>

          <DownloadButton project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2 bg-white p-8 rounded-xl shadow-sm">
              <PortableText value={project.body} />
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="text-lg font-bold mb-4">Project Information</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{project.categoryName}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium">{project.scopeOfWork}</p>
                  </div>

                  {/* <div>
                    <p className="text-sm text-gray-500">Project Status</p>
                    <p className="font-medium">{project.projectStatus}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Completion</p>
                    <p className="font-medium">{project.completionDate}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <ImageGallery
              images={project.gallery.map(
                (image: { asset: { url: string } }) => image.asset.url
              )}
              projectTitle={project.title}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
