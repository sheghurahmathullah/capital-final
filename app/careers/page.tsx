"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { job_listings } from "@/lib/career-data";
import Link from "next/link";

const Careers = () => {
  const [filteredJobs, setFilteredJobs] = useState(job_listings);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [experienceFilter, setExperienceFilter] = useState(
    "All Experience Levels"
  );
  const [locationFilter, setLocationFilter] = useState("All Locations");

  // Extract unique values for filters
  const uniqueRoles = [
    "All Roles",
    ...new Set(job_listings.map((job) => job.role)),
  ];
  const uniqueExperience = [
    "All Experience Levels",
    ...new Set(job_listings.map((job) => job.experienceLevel)),
  ];
  const uniqueLocations = [
    "All Locations",
    ...new Set(job_listings.map((job) => job.location)),
  ];

  // Filter jobs based on selected filters
  React.useEffect(() => {
    let results = job_listings;

    // Apply search term filter
    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply role filter
    if (roleFilter !== "All Roles") {
      results = results.filter((job) => job.role === roleFilter);
    }

    // Apply experience filter
    if (experienceFilter !== "All Experience Levels") {
      results = results.filter(
        (job) => job.experienceLevel === experienceFilter
      );
    }

    // Apply location filter
    if (locationFilter !== "All Locations") {
      results = results.filter((job) => job.location === locationFilter);
    }

    setFilteredJobs(results);
  }, [searchTerm, roleFilter, experienceFilter, locationFilter]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary py-20 pt-32 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl max-w-2xl">
              Build your career with us and be part of projects that shape the
              future of architecture and engineering.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-10 container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 -mt-12 md:-mt-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search Input */}
              <div>
                <Label
                  htmlFor="search"
                  className="text-sm font-medium mb-2 block"
                >
                  Search
                </Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Role Filter */}
              <div>
                <Label
                  htmlFor="role"
                  className="text-sm font-medium mb-2 block"
                >
                  Job Role
                </Label>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Filter */}
              <div>
                <Label
                  htmlFor="experience"
                  className="text-sm font-medium mb-2 block"
                >
                  Experience
                </Label>
                <Select
                  value={experienceFilter}
                  onValueChange={setExperienceFilter}
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueExperience.map((exp) => (
                      <SelectItem key={exp} value={exp}>
                        {exp}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div>
                <Label
                  htmlFor="location"
                  className="text-sm font-medium mb-2 block"
                >
                  Location
                </Label>
                <Select
                  value={locationFilter}
                  onValueChange={setLocationFilter}
                >
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueLocations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="container mx-auto px-4 py-6 mb-20">
          <h2 className="text-2xl font-bold mb-6">
            Available Positions ({filteredJobs.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="overflow-hidden transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>{job.role}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <Link
                      href={`mailto:hr@capitalengg.com?subject=${encodeURIComponent(
                        `Application for ${job.title}`
                      )}`}
                      className="w-full"
                    >
                      <Button className="w-full">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-lg text-gray-500">
                  No jobs match your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
