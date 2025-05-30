import React from "react";
import { Building, Shield, Cpu, Ship, Home, Truck, Hospital, Droplet, GraduationCap } from "lucide-react";

export const servicesData = [
  {
    title: "Architecture",
    description: "Innovative architectural design solutions that blend aesthetics, functionality, and sustainability to create exceptional spaces that inspire and endure.",
    projects: ["Commercial Buildings", "Residential Developments", "Mixed-Use Complexes", "Cultural Institutions"],
    deliverables: ["Conceptual Design", "3D Visualization", "Construction Documents", "Project Supervision"],
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Building className="h-10 w-10 text-primary" />,
    learnMoreLink: "/architecture"
  },
  {
    title: "Structural Engineering",
    description: "Expert structural engineering that ensures safety, stability, and efficiency in buildings and infrastructure through advanced analysis and innovative design.",
    projects: ["High-Rise Buildings", "Bridges & Tunnels", "Industrial Facilities", "Special Structures"],
    deliverables: ["Structural Analysis", "Design Calculations", "Construction Drawings", "Technical Specifications"],
    imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Shield className="h-10 w-10 text-primary" />,
    learnMoreLink: "/structural-engineering"
  },
  {
    title: "MEP Design",
    description: "Comprehensive mechanical, electrical, and plumbing engineering that optimizes building performance, energy efficiency, and occupant comfort.",
    projects: ["Commercial Complexes", "Data Centers", "Healthcare Facilities", "Educational Institutions"],
    deliverables: ["MEP System Design", "Energy Modeling", "Coordination Drawings", "Commissioning Support"],
    imageSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    learnMoreLink: "/expertise/mep-design"
  },
  {
    title: "Oil & Gas",
    description: "Specialized engineering services for the oil and gas industry, from exploration and production facilities to refineries and distribution networks.",
    projects: ["Refineries", "Processing Plants", "Pipeline Systems", "Storage Facilities"],
    deliverables: ["Facility Design", "Process Engineering", "Safety Analysis", "Regulatory Compliance"],
    imageSrc: "https://images.unsplash.com/photo-1518223462598-6d7d82fadf11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Ship className="h-10 w-10 text-primary" />,
    learnMoreLink: "/expertise/oil-gas"
  },
  {
    title: "Residential & Villa",
    description: "Bespoke residential design that combines luxury, functionality, and sustainability to create homes that reflect the unique lifestyle and aspirations of each client.",
    projects: ["Luxury Villas", "Apartment Complexes", "Townhouse Developments", "Private Residences"],
    deliverables: ["Master Planning", "Interior Design", "Landscape Design", "Smart Home Integration"],
    imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Home className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/residential-and-villa"
  },
  {
    title: "Industrial & Logistics",
    description: "Advanced industrial and logistics facility design that maximizes operational efficiency, safety, and sustainability for manufacturing and distribution operations.",
    projects: ["Manufacturing Plants", "Warehouses", "Distribution Centers", "Industrial Parks"],
    deliverables: ["Facility Planning", "Process Flow Design", "Equipment Layout", "Automation Integration"],
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Truck className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/industrial-and-logistics"
  },
  {
    title: "Healthcare & Hospitality",
    description: "Specialized design for healthcare and hospitality facilities that prioritizes patient/guest experience, operational efficiency, and innovative environments.",
    projects: ["Hospitals", "Medical Centers", "Hotels", "Resorts"],
    deliverables: ["Space Programming", "Medical Planning", "Guest Experience Design", "Regulatory Compliance"],
    imageSrc: "https://images.unsplash.com/photo-1556401615-c909c3d67480?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Hospital className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/healthcare-and-hospitality"
  },
  {
    title: "Roads & Infrastructure",
    description: "Comprehensive infrastructure engineering that connects communities and supports economic growth through sustainable and resilient transportation networks.",
    projects: ["Highways", "Urban Streets", "Bridges", "Public Utilities"],
    deliverables: ["Transportation Planning", "Civil Engineering", "Traffic Analysis", "Construction Management"],
    imageSrc: "https://images.unsplash.com/photo-1545158779-4f1052c8b656?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Building className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/roads-and-infrastructure"
  },
  {
    title: "Water & Desalination",
    description: "Innovative water resource engineering that addresses water scarcity through sustainable desalination, treatment, and distribution systems.",
    projects: ["Desalination Plants", "Water Treatment Facilities", "Distribution Networks", "Wastewater Systems"],
    deliverables: ["Process Design", "Hydraulic Modeling", "Treatment Systems", "Energy Optimization"],
    imageSrc: "https://images.unsplash.com/photo-1468927201227-35e96c16b2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <Droplet className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/water-and-desalination"
  },
  {
    title: "Education",
    description: "Thoughtful educational facility design that creates inspiring learning environments that support modern pedagogical approaches and student development.",
    projects: ["K-12 Schools", "Universities", "Research Centers", "Student Housing"],
    deliverables: ["Campus Planning", "Learning Space Design", "Technology Integration", "Sustainable Design"],
    imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    learnMoreLink: "/sector/education"
  }
];
