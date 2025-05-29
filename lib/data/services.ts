export type Service = {
  id: string; // slug for routing
  numericId: number; // numeric ID for backend or quote form
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  highlights?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
  styleExamples?: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }[];
  offerings?: string[];
  techFeatures?: {
    title: string;
    description: string;
  }[];
  warranties?: string[];
  priceBenefits?: string[];
};

export const services: Service[] = [
  {
    id: "residential-interiors",
    numericId: 1,
    title: "Residential Interiors",
    description: "Transform your home into a stylish, functional space.",
    longDescription:
      "We specialize in creating residential interiors that reflect your lifestyle, preferences, and personality. From space planning to custom furniture, we ensure every detail turns your house into a home.",
    images: ["/images/Residence1.jpg", "/images/Residence2.jpg"],
    highlights: [
      "Personalised designs",
      "Flat 10-year warranty¹",
      "Transparent pricing",
    ],
    stats: [
      { label: "#LivspaceHomes", value: "100000+" },
      { label: "designers", value: "3500+" },
      { label: "cities", value: "40" },
      { label: "countries", value: "4" },
    ],
    styleExamples: [
      {
        title: "Monochromatic Grey 2 BHK",
        subtitle: "Monochromatic Grey 2 BHK",
        description: "Add the cloudy hues to your space.",
        image: "/Contemporary Appartment/1.jpeg",
      },
      {
        title: "Royal & Elegant 3 BHK",
        subtitle: "Royal & Elegant 3 BHK",
        description: "Add textural and magnificent touch.",
        image: "/Contemporary Appartment/2.jpeg",
      },
      {
        title: "Contemporary & Classy 4 BHK",
        subtitle: "Contemporary & Classy 4 BHK",
        description: "Classic and crisp geometric designs.",
        image: "/Contemporary Appartment/3.jpeg",
      },
    ],
    offerings: [
      "Modular kitchens",
      "Modular wardrobes",
      "Lighting",
      "Flooring",
      "Electrical work",
      "Civil work",
      "False ceiling",
      "Wall design & painting",
    ],
    warranties: [
      "FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.",
      "Up to 1-year on-site service warranty¹ - Warranty on on-site services such as painting, electrical, plumbing and more.",
    ],
    techFeatures: [
      {
        title: "AquaBloc® Technology",
        description:
          "Hermetically sealed edges that ensure no moisture enters the panels of your modular cabinets.",
      },
      {
        title: "AntiBubble® Technology",
        description:
          "Super seamless panels without air bubbles for your modular cabinets.",
      },
      {
        title: "DuraBuild™ Technology",
        description:
          "Robust structure for modular cabinets, making them strong and long-lasting.",
      },
      {
        title: "Design Science",
        description:
          "Modular kitchens with improved accessibility that makes daily tasks more efficient and reduces stress on the body.",
      },
    ],
    priceBenefits: [
      "Price-match guarantee³ - Match valid quotes from branded players.",
      "Flexible payment options - EMI and schemes from leading finance partners.",
      "No hidden costs - Transparent pricing without surprises.",
    ],
  },
  {
    id: "commercial-spaces",
    numericId: 2,
    title: "Commercial Spaces",
    description: "Create inspiring workplaces that enhance productivity.",
    longDescription:
      "Our commercial interior solutions are tailored to align with your brand identity and business goals. From office layouts to retail aesthetics, we craft engaging environments that perform and impress.",
    images: [
      "/Contemporary Appartment/4.jpeg",
      "/Contemporary Appartment/5.jpeg",
    ],
    highlights: [
      "Brand-aligned aesthetics",
      "Functional layouts",
      "Ergonomic design",
    ],
    stats: [
      { label: "Projects completed", value: "8000+" },
      { label: "Clients served", value: "2000+" },
      { label: "Industries", value: "20+" },
    ],
    offerings: [
      "Office furniture planning",
      "Workstation zoning",
      "Lighting optimization",
      "Acoustic treatment",
      "Brand integration",
      "Conference and meeting room setups",
    ],
    warranties: ["Up to 5-year product warranty", "1-year maintenance service"],
    techFeatures: [
      {
        title: "Smart Layouts",
        description:
          "Utilize IoT and tech-enabled designs for maximum productivity.",
      },
      {
        title: "Eco-conscious Materials",
        description:
          "Sustainable choices for energy-efficient and green certifications.",
      },
    ],
    priceBenefits: [
      "Competitive commercial pricing",
      "Volume discounts for bulk setups",
      "Clear and concise quotations",
    ],
  },
  {
    id: "space-planning",
    numericId: 3,
    title: "Space Planning",
    description: "Optimize your space layout for maximum functionality.",
    longDescription:
      "Our space planning services ensure that every inch of your space is used effectively, combining aesthetics with function to create balanced, comfortable environments.",
    images: ["/images/space-planning1.jpg", "/images/space-planning2.jpg"],
    highlights: ["Efficient layouts", "Maximized flow", "Customized solutions"],
    stats: [
      { label: "Projects handled", value: "5000+" },
      { label: "Satisfied clients", value: "3000+" },
    ],
    offerings: [
      "Zoning and partitioning",
      "Furniture arrangement",
      "Traffic flow optimization",
    ],
    warranties: ["1-year design review warranty"],
    techFeatures: [
      {
        title: "3D Modeling",
        description: "Visualize your space before implementation.",
      },
    ],
    priceBenefits: ["Affordable consultation fees"],
  },
  {
    id: "color-consultation",
    numericId: 4,
    title: "Color Consultation",
    description: "Select the perfect color palette for your space.",
    longDescription:
      "Our experts help you choose colors that set the right mood and complement your style, ensuring harmony and balance in your interiors.",
    images: ["/images/color1.jpg", "/images/color2.jpg"],
    highlights: ["Expert color advice", "Personalized palettes"],
    offerings: ["Color selection", "Palette matching", "Sample testing"],
    warranties: ["Satisfaction guaranteed"],
    priceBenefits: ["Competitive pricing"],
  },
  {
    id: "furniture-selection",
    numericId: 5,
    title: "Furniture Selection",
    description: "Find the perfect furniture balancing style and comfort.",
    longDescription:
      "We assist in choosing furniture pieces that complement your design, ensuring comfort without compromising aesthetics.",
    images: ["/images/furniture1.jpg", "/images/furniture2.jpg"],
    highlights: ["Curated furniture", "Ergonomic choices"],
    offerings: ["Furniture sourcing", "Custom orders", "Styling advice"],
    warranties: ["Manufacturer warranties applicable"],
    priceBenefits: ["Bulk order discounts"],
  },
  {
    id: "design-consultation",
    numericId: 6,
    title: "Design Consultation",
    description: "Expert advice to guide your design decisions.",
    longDescription:
      "Get professional insights and recommendations to ensure your design vision becomes a reality with flawless execution.",
    images: ["/images/design1.jpg", "/images/design2.jpg"],
    highlights: ["Experienced designers", "Personalized plans"],
    offerings: ["Concept development", "Budget planning", "Project management"],
    warranties: ["Consultation satisfaction guarantee"],
    priceBenefits: ["Flexible pricing packages"],
  },
];
