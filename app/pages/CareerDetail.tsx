"use client";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { job_listings } from "@/lib/career-data";
import { MapPin, Briefcase, Clock, ChevronLeft } from "lucide-react";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import Link from "next/link";

const CareerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showApplicationForm, setShowApplicationForm] = React.useState(false);

  // Find the job from our data
  const job = job_listings.find((job) => job.id === id);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
            <p className="mb-8">
              The job posting you're looking for doesn't exist or has been
              removed.
            </p>
            <Link href="/careers" className="inline-block">
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Hero Section */}
        <section className="bg-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <Link
              href="/careers"
              className="inline-flex items-center text-white hover:underline mb-6"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to all jobs
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>

            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>{job.role}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{job.experience}</span>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                <p className="mb-6">{job.description}</p>

                <h3 className="text-xl font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 mb-8 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {!showApplicationForm && (
                  <Button
                    className="mt-6"
                    size="lg"
                    onClick={() => setShowApplicationForm(true)}
                  >
                    Apply Now
                  </Button>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-4">Job Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 text-sm">Job ID</p>
                      <p className="font-medium">{job.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Department</p>
                      <p className="font-medium">{job.department}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Employment Type</p>
                      <p className="font-medium">{job.employmentType}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Posted Date</p>
                      <p className="font-medium">{job.postedDate}</p>
                    </div>
                  </div>
                </div>

                {!showApplicationForm && (
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">
                      Ready to Apply?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Submit your application now to join our team of
                      professionals.
                    </p>
                    <Button
                      className="w-full"
                      onClick={() => setShowApplicationForm(true)}
                    >
                      Apply for this position
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Application Form */}
            {showApplicationForm && (
              <div className="mt-10 pt-8 border-t">
                <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                <JobApplicationForm
                  jobId={job.id}
                  jobTitle={job.title}
                  onCancel={() => setShowApplicationForm(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerDetail;
