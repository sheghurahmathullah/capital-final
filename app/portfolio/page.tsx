"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { client1, urlForClient1 } from "../../lib/sanity";

// Separate type for Sanity categories
type Categories = {
  _id: string;
  title: string;
  text: string;
};

// New type for sector categories
type SectorCategory = {
  id: string;
  text: string;
};

type Project = {
  _id: string;
  title: string;
  location: string;
  category: string;
  mainImage: any;
  slug: string;
  categories: Categories[];
};

// Update the sector categories definition
const sector_categories: SectorCategory[] = [
  { id: "all", text: "All" },
  { id: "3", text: "Railway" },
  { id: "4", text: "Oil & Gas" },
  { id: "5", text: "Religious" },
  { id: "6", text: "Industrial & Logistics" },
  { id: "7", text: "Education" },
  { id: "9", text: "Healthcare & Hospitality" },
  { id: "11", text: "Commercial" },
  { id: "13", text: "Power & Energy" },
  { id: "14", text: "Residential & Villa" },
  { id: "15", text: "Roads & Infrastructure" },
  { id: "16", text: "Marine & Ports" },
  { id: "21", text: "WTP, RO & Desalination Plants" },
];

// Add this category mapping object
type CategoryGroup = { text: string; includes: string[] };
const categoryMapping: { [key: string]: CategoryGroup } = {
  "11": {
    // Commercial ID
    text: "Commercial",
    includes: ["Commercial", "Automobile", "Food & Beverages"],
  },
  "6": {
    // Industrial & Logistics ID
    text: "Industrial & Logistics",
    includes: ["Industrial", "Logistics & Warehouses"],
  },
  "21": {
    // WTP, RO & Desalination Plants ID
    text: "WTP, RO & Desalination Plants",
    includes: ["Wastewater Treatment Plants", "RO & Desalination Plants"],
  },
  "9": {
    // Healthcare & Hospitality ID
    text: "Healthcare & Hospitality",
    includes: ["Healthcare & Pharmaceuticals", "Hospitality"],
  },
};

const Portfolio = () => {
  const [activeSector, setActiveSector] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const projectsPerPage = 6;

  // Update the fetchData function to remove categories fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          location,
          category,
          mainImage,
          "slug": slug.current,
          categories[]->{
            _id,
            title,
            text
          }
        }`;
        const data = await client1.fetch(query);
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update the filtering useEffect
  useEffect(() => {
    if (activeSector === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.some((cat) => {
          // Check if this sector has grouped categories
          const groupedCategory = categoryMapping[activeSector];

          if (groupedCategory) {
            // If it's a grouped category, check if the category title is in the includes array
            return groupedCategory.includes.includes(cat.title);
          } else {
            // For non-grouped categories, use the original logic
            const sectorCategory = sector_categories.find(
              (sc) => sc.id === activeSector
            );
            return sectorCategory && cat.title === sectorCategory.text;
          }
        })
      );
      setFilteredProjects(filtered);
    }
    setCurrentPage(1);
  }, [activeSector, projects]);

  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <div className="flex-1 py-16 pt-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section with background */}
          <div className="relative mb-16 rounded-3xl overflow-hidden bg-[#211574]">
            <div className="absolute inset-0 opacity-10 bg-pattern-grid"></div>
            <div className="relative z-10 py-16 px-8 md:px-16 text-white">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-white">
                Our Portfolio
              </h1>
              <div className="w-24 h-1.5 bg-white/50 rounded-full mb-6"></div>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                Discover our comprehensive portfolio of projects across various
                industries and sectors, showcasing our expertise and innovation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="md:w-72 w-full md:sticky">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 md:sticky md:top-24 overflow-hidden h-fit">
                <div className="p-3 border-b border-gray-100 bg-[#211574] text-white">
                  <h2 className="text-lg font-semibold">Categories</h2>
                </div>
                <div className="py-2">
                  <SidebarProvider>
                    <SidebarMenu>
                      {sector_categories.map((category) => (
                        <SidebarMenuItem key={category.id}>
                          <SidebarMenuButton
                            isActive={activeSector === category.id}
                            onClick={() => setActiveSector(category.id)}
                            className={`w-full justify-start px-4 py-2 transition-all duration-300 text-left ${
                              activeSector === category.id
                                ? "text-[#211574] font-medium bg-indigo-50"
                                : "text-gray-600 hover:text-[#211574] hover:bg-gray-50"
                            }`}
                          >
                            {category.text}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarProvider>
                </div>
              </div>
            </div>

            {/* Right Main Content Area */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentProjects.length > 0 ? (
                  currentProjects.map((project) => (
                    <div
                      key={project._id}
                      className="animate-fade-in transition-all duration-500"
                    >
                      <Link href={`/portfolio-details/${project.slug}`}>
                        <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-xl group">
                          <div className="relative aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-[#211574] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                            {project.mainImage && (
                              <img
                                src={urlForClient1(project.mainImage)
                                  .width(800)
                                  .url()}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              />
                            )}
                          </div>
                          <CardHeader className="pb-2">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "8px",
                                  flexWrap: "wrap",
                                }}
                              >
                                {project.categories &&
                                  project.categories
                                    .slice(0, 2)
                                    .map((category, index) => (
                                      <span
                                        key={index}
                                        style={{
                                          fontSize: "12px",
                                          padding: "4px 10px",
                                          borderRadius: "20px",
                                          background: "rgba(74, 58, 255, 0.08)",
                                          color: "#4a3aff",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {category.title}
                                      </span>
                                    ))}
                              </div>
                            </div>
                            <CardTitle className="text-xl font-bold">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-1">
                              {project.location}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center py-16 bg-white rounded-xl shadow-sm">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 font-medium mb-2">
                        No projects found for this sector.
                      </p>
                      <p className="text-sm text-gray-500">
                        Try selecting a different category from the sidebar.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => paginate(currentPage - 1)}
                            className="hover:bg-[#211574]/10 border border-gray-200"
                          />
                        </PaginationItem>
                      )}

                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        // Show current page, first, last, and pages around current
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={pageNumber}>
                              <PaginationLink
                                onClick={() => paginate(pageNumber)}
                                isActive={pageNumber === currentPage}
                                className={
                                  pageNumber === currentPage
                                    ? "bg-[#211574] text-white border-[#211574]"
                                    : "hover:bg-[#211574]/10 border border-gray-200"
                                }
                              >
                                {pageNumber}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          (pageNumber === currentPage - 2 && currentPage > 3) ||
                          (pageNumber === currentPage + 2 &&
                            currentPage < totalPages - 2)
                        ) {
                          return (
                            <PaginationItem key={pageNumber}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext
                            onClick={() => paginate(currentPage + 1)}
                            className="hover:bg-[#211574]/10 border border-gray-200"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
