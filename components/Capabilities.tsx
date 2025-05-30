
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Capabilities = () => {
  const services = [
    {
      title: "Architecture & Interior",
      description: "Innovative design solutions for commercial and residential spaces.",
      link: "/expertise/architecture"
    },
    {
      title: "Fit-Out & MEP",
      description: "Complete mechanical, electrical and plumbing solutions for modern buildings.",
      link: "/expertise/fit-out"
    },
    {
      title: "Power & Infrastructure",
      description: "Engineering excellence for energy and public infrastructure projects.",
      link: "/expertise/power-infrastructure"
    },
    {
      title: "Oil & Gas Engineering",
      description: "Technical expertise for upstream, midstream, and downstream operations.",
      link: "/expertise/oil-gas"
    },
    {
      title: "PMC & Tendering",
      description: "Professional project management and procurement consulting services.",
      link: "/expertise/pmc"
    },
    {
      title: "Environmental Consulting",
      description: "Sustainable solutions that meet regulatory requirements and global standards.",
      link: "/expertise/environmental"
    },
  ];

  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <div className="h-1 w-16 bg-primary"></div>
          <div className="mt-6">
            <Link href="/expertise" className="inline-flex items-center text-primary font-medium hover:underline">
              Explore all our expertise <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="service-card group">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 arrow transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
