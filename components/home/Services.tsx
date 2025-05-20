import {
  Home,
  Building2,
  LayoutGrid,
  Users2,
  Palette,
  Sofa,
} from "lucide-react";
import { services } from "@/lib/data/services"; // Import the services data

const Services = () => {
  // Define the mapping between the icons and the services dynamically
  const getIconForService = (serviceId: string) => {
    switch (serviceId) {
      case "residential-interiors":
        return <Home className="h-10 w-10 text-ruby-green-500" />;
      case "commercial-spaces":
        return <Building2 className="h-10 w-10 text-ruby-green-500" />;
      case "space-planning":
        return <LayoutGrid className="h-10 w-10 text-ruby-green-500" />;
      case "color-consultation":
        return <Palette className="h-10 w-10 text-ruby-green-500" />;
      case "furniture-selection":
        return <Sofa className="h-10 w-10 text-ruby-green-500" />;
      case "design-consultation":
        return <Users2 className="h-10 w-10 text-ruby-green-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="section-padding lg:pt-8 lg:pb-8">
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
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm card-hover group"
            >
              <div className="mb-6 bg-gray-50 rounded-full p-4 w-fit group-hover:bg-gold-50 transition-colors">
                {getIconForService(service.id)}{" "}
                {/* Render the icon dynamically */}
              </div>
              <h4 className="text-xl font-serif font-semibold mb-3 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={`/services/${service.id}`} // Dynamically link to the specific service page
                className="text-ruby-green-500 font-medium hover:text-gold-500 transition-colors flex items-center"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
