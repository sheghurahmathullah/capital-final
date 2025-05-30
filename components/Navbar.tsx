"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
// import Link from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add this useEffect for scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [usePathname()]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Define sectors for dropdown
  const sectors = [
    { title: "Commercial", path: "/sector/commercial" },
    { title: "Education", path: "/sector/education" },
    { title: "Railways", path: "/sector/railways" },
    { title: "Shelters", path: "/sector/shelters" },
    { title: "Oil & Gas", path: "/sector/oil-gases" },
    { title: "Power & Energy", path: "/sector/power-energy" },
    { title: "Marine & Ports", path: "/sector/marine-ports" },
    {
      title: "Healthcare & Hospitality",
      path: "/sector/healthcare-hospitality",
    },
    {
      title: "Industrial & Logistics",
      path: "/sector/industrial-logistics",
    },
    {
      title: "Roads & Infrastructure",
      path: "/sector/road-infrastructure",
    },
    { title: "WTP, RO & Desalination", path: "/sector/wtp-ro" },
  ];

  // Define expertise areas for dropdown
  const expertiseAreas = [
    {
      title: "Architecture & Landscape",
      path: "/expertise/architecture-landscape",
    },
    { title: "Fit Out & Interior Design", path: "/expertise/fitout-interior" },
    {
      title: "Structural Engineering",
      path: "/expertise/structural-engineering",
    },
    { title: "Project Management", path: "/expertise/project-management" },
    {
      title: "Environmental Solutions",
      path: "/expertise/environmental-solution",
    },
    {
      title: "MEP Design and Services",
      path: "/expertise/mep-design",
    },
    {
      title: "Power & Infrastructure",
      path: "/expertise/power-infrastructure",
    },
    { title: "BIM Services", path: "/expertise/bim-service" },
    { title: "Oil & Gas", path: "/expertise/oil-and-gas" },
  ];

  // Define newsroom topics for dropdown
  const newsroomTopics = [
    { title: "Blog", path: "/newsroom/blog" },
    { title: "Press Release", path: "/newsroom/press-release" },
    { title: "Media Coverage", path: "/newsroom/media-coverage" },
    { title: "Letter from the CEO", path: "/newsroom/ceo-letter" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/capital-logo.png" alt="CapitalEC Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* <NavLink href="/">HOME</NavLink> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group text-sm font-medium transition-colors flex items-center text-gray-700 hover:text-primary">
                OUR EXPERTISE
                <ChevronDown className="h-4 w-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-64 p-2 rounded-lg shadow-lg border-0">
              {expertiseAreas.map((area, index) => (
                <DropdownMenuItem
                  key={index}
                  className="py-2.5 cursor-pointer hover:bg-gray-50 rounded-md"
                >
                  <Link href={area.path} className="w-full">
                    {area.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group text-sm font-medium transition-colors flex items-center text-gray-700 hover:text-primary">
                SECTORS
                <ChevronDown className="h-4 w-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-56 p-2 rounded-lg shadow-lg border-0 max-h-[70vh] overflow-y-auto">
              {sectors.map((sector, index) => (
                <DropdownMenuItem
                  key={index}
                  className="py-2.5 cursor-pointer hover:bg-gray-50 rounded-md"
                >
                  <Link href={sector.path} className="w-full">
                    {sector.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group text-sm font-medium transition-colors flex items-center text-gray-700 hover:text-primary">
                NEWSROOM
                <ChevronDown className="h-4 w-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-56 p-2 rounded-lg shadow-lg border-0">
              {newsroomTopics.map((topic, index) => (
                <DropdownMenuItem
                  key={index}
                  className="py-2.5 cursor-pointer hover:bg-gray-50 rounded-md"
                >
                  <Link href={topic.path} className="w-full">
                    {topic.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/careers">CAREERS</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>

          <Button
            variant="outline"
            className="ml-4 uppercase text-primary border-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href="/contact">GET IN TOUCH</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              HOME
            </Link>

            <MobileAccordion title="OUR EXPERTISE">
              {expertiseAreas.map((area, index) => (
                <Link
                  key={index}
                  href={area.path}
                  className="block py-2 pl-4 text-sm"
                >
                  {area.title}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion title="SECTORS">
              {sectors.map((sector, index) => (
                <Link
                  key={index}
                  href={sector.path}
                  className="block py-2 pl-4 text-sm"
                >
                  {sector.title}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion title="NEWSROOM">
              {newsroomTopics.map((topic, index) => (
                <Link
                  key={index}
                  href={topic.path}
                  className="block py-2 pl-4 text-sm"
                >
                  {topic.title}
                </Link>
              ))}
            </MobileAccordion>

            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-gray-700"
            >
              CONTACT
            </Link>

            <Button asChild className="w-full mt-4 uppercase" variant="outline">
              <Link href="/contact">LET'S TALK</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm font-medium relative text-gray-700 hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
  >
    {children}
  </Link>
);

const MobileAccordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full py-2 text-sm font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-2 border-l-2 border-gray-100">{children}</div>
      )}
    </div>
  );
};

export default Navbar;
