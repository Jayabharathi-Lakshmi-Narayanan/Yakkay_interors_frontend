export type Highlight = {
  title: string;
  image: string;
};

export type HowItWorksStep = {
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type KeyFeature = {
  title: string;
  description: string;
};

export type ProjectData = {
  id: number;
  title: string;
  description: string;
  highlights: Highlight[];
  howItWorks: HowItWorksStep[];
  faqs: FAQItem[];
  keyFeatures?: KeyFeature[];
};

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Contemporary Apartment",
    description:
      "Welcome to our Contemporary Apartment project. We focus on open layouts and natural lighting to create comfortable living spaces.",
    highlights: [
      { title: "Open Layout", image: "/Contemporary Appartment/1.jpeg" },
      { title: "Natural Lighting", image: "/Contemporary Appartment/2.jpeg" },
    ],
    howItWorks: [
      {
        title: "Consultation",
        description: "Discuss your vision and needs with our design team.",
      },
      {
        title: "Space Planning",
        description: "Create functional and aesthetic layouts.",
      },
      {
        title: "Material Selection",
        description: "Choose finishes and materials that match your style.",
      },
      {
        title: "Design Development",
        description: "Develop detailed plans and 3D renderings.",
      },
      {
        title: "Execution",
        description: "Implement the design with skilled craftsmanship.",
      },
    ],
    faqs: [
      {
        question: "How long does the project take?",
        answer: "Typically 8-12 weeks depending on scope.",
      },
      {
        question: "Can I customize the design?",
        answer: "Absolutely, we tailor every project to your needs.",
      },
      {
        question: "What is included in the consultation?",
        answer: "We discuss your goals, preferences, and budget.",
      },
      {
        question: "Do you handle permits and approvals?",
        answer: "Yes, we manage all necessary paperwork.",
      },
      {
        question: "Can I make changes during the project?",
        answer: "Yes, with some considerations on timing and cost.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Tailor every detail to your liking.",
      },
      {
        title: "10 year warranty",
        description: "Flat 10 year warranty on all work.",
      },
      {
        title: "Easy EMIs",
        description: "Flexible payment options available.",
      },
      {
        title: "45 day delivery",
        description: "Project completion within 45 days.",
      },
      {
        title: "4.5 rating",
        description: "Highly rated by our satisfied clients.",
      },
    ],
  },
  {
    id: 2,
    title: "Luxury Villa",
    description:
      "Welcome to our Luxury Villa project, designed for elegant living with premium materials and smart home technology.",
    highlights: [
      {
        title: "Grand Entrance",
        image: "/Contemporary Appartment/3.jpeg",
      },
      {
        title: "Infinity Pool",
        image: "/Contemporary Appartment/4.jpeg",
      },
    ],
    howItWorks: [
      {
        title: "Initial Meeting",
        description: "Understanding your lifestyle and expectations.",
      },
      {
        title: "Concept Creation",
        description: "Designing elegant spaces that inspire luxury living.",
      },
      {
        title: "Material Selection",
        description: "Choosing premium materials and finishes.",
      },
      {
        title: "Project Scheduling",
        description: "Setting timelines to ensure smooth progress.",
      },
      {
        title: "Project Delivery",
        description: "Ensuring quality and timely completion.",
      },
    ],
    faqs: [
      {
        question: "What luxury features are included?",
        answer: "Smart home tech, premium materials, custom furnishings.",
      },
      {
        question: "Do you manage landscaping?",
        answer: "Yes, we coordinate outdoor design and maintenance.",
      },
      {
        question: "Are high-end appliances included?",
        answer: "Yes, we specify and install premium appliances.",
      },
      {
        question: "Can I visit the site during construction?",
        answer: "Yes, we schedule regular walkthroughs.",
      },
      {
        question: "Is warranty provided on the work?",
        answer: "We offer warranties based on the scope and materials.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Exclusive, luxurious custom design options.",
      },
      {
        title: "10 year warranty",
        description: "Comprehensive warranty for peace of mind.",
      },
      {
        title: "Easy EMIs",
        description: "Flexible EMI plans to fit your budget.",
      },
      {
        title: "45 day delivery",
        description: "Efficient project management for timely delivery.",
      },
      {
        title: "4.5 rating",
        description: "Highly praised by luxury homeowners.",
      },
    ],
  },
  {
    id: 3,
    title: "Urban Studio",
    description:
      "Discover our Urban Studio project focusing on compact design and creative storage solutions.",
    highlights: [
      { title: "Compact Design", image: "/Contemporary Appartment/5.jpeg" },
      { title: "Creative Storage", image: "/Contemporary Appartment/6.jpeg" },
    ],
    howItWorks: [
      {
        title: "Space Planning",
        description: "Maximizing every square foot for functionality.",
      },
      {
        title: "3D Visualization",
        description: "Providing detailed renderings for approval.",
      },
      {
        title: "Material Selection",
        description: "Choosing durable and stylish materials.",
      },
      {
        title: "Furniture Layout",
        description: "Optimizing placement for flow and use.",
      },
      {
        title: "Final Touches",
        description: "Adding personality with decor and lighting.",
      },
    ],
    faqs: [
      {
        question: "Is this design budget-friendly?",
        answer: "Yes, we optimize cost without compromising style.",
      },
      {
        question: "Can I see 3D renders?",
        answer: "Definitely, we provide detailed visualizations.",
      },
      {
        question: "What storage solutions are offered?",
        answer: "Custom built-ins and multi-functional furniture.",
      },
      {
        question: "How do you handle small spaces?",
        answer: "With smart layouts and minimal clutter.",
      },
      {
        question: "Can I choose colors and materials?",
        answer: "Yes, we work closely with you on selections.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Smart and space-saving solutions.",
      },
      {
        title: "10 year warranty",
        description: "Long-term quality assurance.",
      },
      { title: "Easy EMIs", description: "Affordable monthly installments." },
      {
        title: "45 day delivery",
        description: "Quick turnaround for small spaces.",
      },
      {
        title: "4.5 rating",
        description: "Clients love the efficient design.",
      },
    ],
  },
  {
    id: 4,
    title: "Rustic Cabin",
    description:
      "Experience rustic charm with our Rustic Cabin project, featuring wood accents and cozy fireplaces.",
    highlights: [
      { title: "Wood Accents", image: "/Contemporary Appartment/7.jpeg" },
      { title: "Cozy Fireplace", image: "/Contemporary Appartment/8.jpeg" },
    ],
    howItWorks: [
      {
        title: "Concept Approval",
        description: "We discuss rustic themes and preferences.",
      },
      {
        title: "Material Sourcing",
        description: "Selecting natural and reclaimed wood.",
      },
      {
        title: "Structural Planning",
        description: "Ensuring sturdy and safe construction.",
      },
      {
        title: "Craftsmanship",
        description: "Building with attention to rustic details.",
      },
      {
        title: "Interior Decoration",
        description: "Adding rustic charm with furnishings and textiles.",
      },
    ],
    faqs: [
      {
        question: "Are eco-friendly materials used?",
        answer: "Yes, sustainability is a priority.",
      },
      {
        question: "Do you provide outdoor furniture?",
        answer: "Yes, custom rustic outdoor pieces included.",
      },
      {
        question: "How long does construction take?",
        answer: "Usually 10-14 weeks depending on design.",
      },
      {
        question: "Can I visit the cabin during work?",
        answer: "Yes, visits are welcome with prior scheduling.",
      },
      {
        question: "Do you help with interior decor?",
        answer: "Yes, including furniture and textiles.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Authentic rustic style tailored for you.",
      },
      { title: "10 year warranty", description: "Durability guaranteed." },
      { title: "Easy EMIs", description: "Budget-friendly payment plans." },
      { title: "45 day delivery", description: "On time cabin completion." },
      { title: "4.5 rating", description: "Loved by cabin owners." },
    ],
  },
  {
    id: 5,
    title: "Minimalist Loft",
    description:
      "Our Minimalist Loft project offers clean, clutter-free interiors with neutral palettes and open space.",
    highlights: [
      { title: "Open Space", image: "/Contemporary Appartment/2.jpeg" },
      { title: "Neutral Palette", image: "/Contemporary Appartment/4.jpeg" },
    ],
    howItWorks: [
      {
        title: "Vision Meeting",
        description: "Understanding minimalist lifestyle and needs.",
      },
      {
        title: "Design Development",
        description: "Creating clean, clutter-free interiors.",
      },
      {
        title: "Material Selection",
        description: "Picking simple and quality finishes.",
      },
      {
        title: "Space Optimization",
        description: "Arranging furniture to maximize openness.",
      },
      {
        title: "Review & Adjust",
        description: "Incorporating client feedback throughout.",
      },
    ],
    faqs: [
      {
        question: "Is the design easy to maintain?",
        answer: "Yes, simplicity aids easy upkeep.",
      },
      {
        question: "Can we add personal art?",
        answer: "Absolutely, personalized touches encouraged.",
      },
      {
        question: "Are custom furnishings included?",
        answer: "Yes, we offer custom minimalist pieces.",
      },
      {
        question: "How is lighting handled?",
        answer: "With natural light and simple fixtures.",
      },
      {
        question: "Can I live in the loft during renovation?",
        answer: "Usually yes, depending on project scope.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Sleek, modern minimalism.",
      },
      {
        title: "10 year warranty",
        description: "Peace of mind with long warranty.",
      },
      { title: "Easy EMIs", description: "Affordable monthly payments." },
      {
        title: "45 day delivery",
        description: "Fast and efficient turnaround.",
      },
      { title: "4.5 rating", description: "Highly rated by minimalists." },
    ],
  },
  {
    id: 6,
    title: "Coastal Retreat",
    description:
      "Relax with our Coastal Retreat project that maximizes natural light and seamless indoor-outdoor living.",
    highlights: [
      { title: "Beachfront View", image: "/Contemporary Appartment/6.jpeg" },
      { title: "Light & Airy", image: "/Contemporary Appartment/8.jpeg" },
    ],
    howItWorks: [
      {
        title: "Site Analysis",
        description: "Assessing environment and light conditions.",
      },
      {
        title: "Custom Design",
        description: "Blending coastal aesthetics with comfort.",
      },
      {
        title: "Material Selection",
        description: "Choosing weather-resistant materials.",
      },
      {
        title: "Outdoor Living",
        description: "Creating seamless indoor-outdoor spaces.",
      },
      {
        title: "Project Finalization",
        description: "Ensuring client satisfaction before handover.",
      },
    ],
    faqs: [
      {
        question: "Is the design weatherproof?",
        answer: "Yes, materials withstand coastal conditions.",
      },
      {
        question: "Are outdoor spaces included?",
        answer: "Yes, patios, decks, and gardens designed.",
      },
      {
        question: "Do you manage landscaping?",
        answer: "Yes, tailored to coastal plants and style.",
      },
      {
        question: "Is natural lighting maximized?",
        answer: "Absolutely, large windows and open layouts.",
      },
      {
        question: "Are sustainable materials used?",
        answer: "Yes, eco-friendly choices prioritized.",
      },
    ],
    keyFeatures: [
      {
        title: "Customisable Designs",
        description: "Perfect coastal vibe tailored for you.",
      },
      {
        title: "10 year warranty",
        description: "Durability even in harsh environments.",
      },
      { title: "Easy EMIs", description: "Flexible payment plans." },
      { title: "45 day delivery", description: "On schedule completion." },
      { title: "4.5 rating", description: "Clients love the coastal feel." },
    ],
  },
];
