import Image from "next/image";
import { Award, Users, Globe, Hexagon } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Award size={24} className="text-gold-500" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <Users size={24} className="text-gold-500" />,
      value: "250+",
      label: "Happy Clients",
    },
    {
      icon: <Globe size={24} className="text-gold-500" />,
      value: "2",
      label: "Countries",
    },
    {
      icon: <Hexagon size={24} className="text-gold-500" />,
      value: "500+",
      label: "Projects Completed",
    },
  ];

  return (
    <section id="about" className="section-padding lg:pt-8 lg:pb-8 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <Image
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
                alt="Luxury interior design"
                width={600}
                height={700}
                className="rounded-lg shadow-lg object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-[250px] h-[200px] z-0 hidden lg:block">
              <Image
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
                alt="Interior design detail"
                width={250}
                height={200}
                className="rounded-lg shadow-lg object-cover h-full w-full border-4 border-white"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold-500 rounded-full -z-10 opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 right-20 w-40 h-40 bg-ruby-green-500 rounded-full -z-10 opacity-20 blur-2xl"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Crafting Exceptional Interior Design{" "}
              <span className="gold-text">Experiences</span>
            </h3>
            <p className="text-gray-600 mb-6">
              At YAKKAY Interiors, we believe that great design transforms
              spaces and enhances lives. With over 15 years of experience, our
              team of talented designers creates stunning, functional, and
              personalized interior solutions that reflect your unique style and
              meet your specific needs.
            </p>
            <p className="text-gray-600 mb-8">
              From residential to commercial projects, we bring a perfect blend
              of creativity, expertise, and attention to detail to every project
              we undertake. Our philosophy is centered on understanding our
              clients&#39; vision and turning it into reality through thoughtful
              design, quality craftsmanship, and exceptional service.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h4 className="text-2xl font-bold mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
