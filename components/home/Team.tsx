import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Olivia Parker",
      role: "Principal Designer",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      bio: "Olivia brings over 15 years of experience in luxury interior design with a special focus on residential spaces.",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:olivia@yakkayinteriors.com",
      },
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Senior Architect",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      bio: "With a background in architecture, James specializes in creating harmonious spaces that blend form and function.",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:james@yakkayinteriors.com",
      },
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Design Director",
      image:
        "https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg",
      bio: "Priya's keen eye for color and texture helps clients discover their unique style and bring their vision to life.",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:priya@yakkayinteriors.com",
      },
    },
    {
      id: 4,
      name: "David Chen",
      role: "Project Manager",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "David ensures that all projects run smoothly, on time, and within budget while maintaining quality standards.",
      social: {
        twitter: "#",
        linkedin: "#",
        email: "mailto:david@yakkayinteriors.com",
      },
    },
  ];

  return (
    <section id="team" className="section-padding lg:pt-8 lg:pb-8 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
            Our Team
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Meet The <span className="gold-text">Experts</span> Behind Our
            Designs
          </h3>
          <p className="text-gray-600">
            Our talented team brings together diverse skills and perspectives to
            create exceptional spaces that exceed client expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif font-semibold text-xl mb-1">
                  {member.name}
                </h4>
                <p className="text-ruby-green-500 text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.social.email}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-ruby-green-500 text-white font-medium rounded-md hover:bg-ruby-green-600 transition-colors"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
