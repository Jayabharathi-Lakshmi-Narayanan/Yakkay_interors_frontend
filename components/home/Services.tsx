import {
  Home,
  Building2,
  LayoutGrid,
  Users2,
  Palette,
  Sofa,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-ruby-green-500" />,
      title: "Residential Interiors",
      description:
        "Transform your home into a stylish, functional space that reflects your personal taste and lifestyle.",
      link: "/services/residential-interiors",
    },
    {
      icon: <Building2 className="h-10 w-10 text-ruby-green-500" />,
      title: "Commercial Spaces",
      description:
        "Create inspiring workplaces that enhance productivity, impress clients, and reflect your brand identity.",
      link: "/services/commercial-spaces",
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-ruby-green-500" />,
      title: "Space Planning",
      description:
        "Optimize your space layout for maximum functionality, flow, and aesthetic appeal.",
      link: "/services/space-planning",
    },
    {
      icon: <Palette className="h-10 w-10 text-ruby-green-500" />,
      title: "Color Consultation",
      description:
        "Select the perfect color palette that sets the right mood and complements your space.",
      link: "/services/color-consultation",
    },
    {
      icon: <Sofa className="h-10 w-10 text-ruby-green-500" />,
      title: "Furniture Selection",
      description:
        "Find the perfect furniture pieces that balance style, comfort, and functionality.",
      link: "/services/furniture-selection",
    },
    {
      icon: <Users2 className="h-10 w-10 text-ruby-green-500" />,
      title: "Design Consultation",
      description:
        "Get expert advice and guidance to make informed decisions about your space design.",
      link: "/services/design-consultation",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Comprehensive Interior Design{" "}
            <span className="gold-text">Solutions</span>
          </h3>
          <p className="text-gray-600">
            We offer a wide range of services to meet all your interior design
            needs, from concept development to execution, ensuring a seamless
            and enjoyable design journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm card-hover group"
            >
              <div className="mb-6 bg-gray-50 rounded-full p-4 w-fit group-hover:bg-gold-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="text-ruby-green-500 font-medium hover:text-gold-500 transition-colors flex items-center"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
