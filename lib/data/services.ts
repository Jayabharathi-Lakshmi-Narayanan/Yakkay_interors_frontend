// lib/data/services.ts

export type Service = {
  id: string; // used for routing: /services/[id]
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
    title: "Space Planning",
    description: "Optimize your layout for functionality and flow.",
    longDescription:
      "We offer intelligent space planning services to maximize the potential of your environment. By analyzing movement patterns, purpose, and aesthetics, we design layouts that make every square foot work harder.",
    images: [
      "/Contemporary Appartment/6.jpeg",
      "/Contemporary Appartment/7.jpeg",
    ],
    highlights: [
      "Tailored layouts",
      "User-centric flow",
      "Optimal space utility",
    ],
    stats: [
      { label: "Projects optimized", value: "3000+" },
      { label: "Years experience", value: "10+" },
    ],
    offerings: [
      "Zoning and circulation",
      "Furniture arrangement",
      "Workflow optimization",
      "Layout drawing and modeling",
    ],
    techFeatures: [
      {
        title: "3D Visualization",
        description:
          "Preview space usage before execution with precise modeling.",
      },
      {
        title: "AI-Driven Planning",
        description: "Smart analytics to recommend the most efficient layouts.",
      },
    ],
    priceBenefits: [
      "Detailed floor plans",
      "Modular layout packages",
      "Transparent quotes",
    ],
  },
  {
    id: "color-consultation",
    title: "Color Consultation",
    description: "Choose the right palette to enhance your space.",
    longDescription:
      "Our color experts help you pick hues that create the right ambiance, elevate mood, and match your furnishings. Whether bold or serene, we ensure your color scheme feels just right.",
    images: [
      "/Contemporary Appartment/8.jpeg",
      "/Contemporary Appartment/1.jpeg",
    ],
    highlights: [
      "Mood-enhancing palettes",
      "Theme consistency",
      "Expert-backed choices",
    ],
    stats: [
      { label: "Color schemes created", value: "5000+" },
      { label: "Palette libraries", value: "100+" },
    ],
    offerings: [
      "Interior and exterior color selection",
      "Accent wall strategies",
      "Material-palette coordination",
      "Custom swatch samples",
    ],
    warranties: [
      "1-year service assistance",
      "Touch-up recommendations included",
    ],
    techFeatures: [
      {
        title: "Digital Palette Previews",
        description:
          "Visualize your palette on real room images before you commit.",
      },
      {
        title: "Mood-Based Suggestions",
        description:
          "AI-curated hues to suit emotions, lighting, and room function.",
      },
    ],
    priceBenefits: [
      "Budget-based color planning",
      "Flexible service packages",
      "No-cost revisions (up to 2)",
    ],
  },
  {
    id: "furniture-selection",
    title: "Furniture Selection",
    description: "Find furniture that balances style and comfort.",
    longDescription:
      "We guide you in selecting the ideal furniture pieces that complement your interior, meet your needs, and reflect your taste. From custom designs to curated collections, we handle it all.",
    images: [
      "/Contemporary Appartment/2.jpeg",
      "/Contemporary Appartment/3.jpeg",
    ],
    highlights: [
      "Comfort meets elegance",
      "Tailored to theme",
      "Durability assured",
    ],
    stats: [
      { label: "Furniture items delivered", value: "7000+" },
      { label: "Supplier network", value: "150+" },
    ],
    offerings: [
      "Custom-built furniture",
      "Sofa and lounge curation",
      "Bedroom and dining setups",
      "Space-saving modular options",
    ],
    warranties: [
      "Up to 5-year structural warranty",
      "2-year upholstery service coverage",
    ],
    techFeatures: [
      {
        title: "Ergonomic Mapping",
        description: "Furniture designed for comfort, posture, and health.",
      },
      {
        title: "Virtual Room Staging",
        description:
          "Test furniture in virtual mockups of your space before ordering.",
      },
    ],
    priceBenefits: [
      "Bulk furniture discounts",
      "Combo set savings",
      "Flexible delivery and assembly packages",
    ],
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    description: "Expert guidance for your interior design journey.",
    longDescription:
      "Have questions or need direction? Our design consultations provide personalized advice on themes, layouts, materials, and execution, helping you make confident decisions.",
    images: [
      "/Contemporary Appartment/4.jpeg",
      "/Contemporary Appartment/5.jpeg",
    ],
    highlights: [
      "Expert-led advice",
      "Theme and layout clarity",
      "Custom material suggestions",
    ],
    stats: [
      { label: "Clients consulted", value: "12000+" },
      { label: "Average consult time", value: "45 mins" },
    ],
    offerings: [
      "Moodboard creation",
      "Material and fixture suggestions",
      "Color and theme alignment",
      "Feasibility and budgeting advice",
    ],
    warranties: [
      "Follow-up support for 1 month",
      "One-time plan revision included",
    ],
    techFeatures: [
      {
        title: "Live Design Sessions",
        description:
          "One-on-one video consults with screen share and annotation.",
      },
      {
        title: "Design Intelligence Engine",
        description:
          "Automated suggestions based on budget, layout, and preferences.",
      },
    ],
    priceBenefits: [
      "Free first consultation",
      "Discounts on bundled services",
      "No-obligation expert calls",
    ],
  },
];
