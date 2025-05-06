// D:/jb/interior_design/yakkay_interiors - Copy/frontend_yakkay_interiors/project/lib/data/projects.ts

export type Project = {
  id: number;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "office";
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Contemporary Apartment",
    category: "residential",
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    description: "Modern living space with minimalist design",
  },
  {
    id: 2,
    title: "Luxury Villa",
    category: "residential",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Elegant interior with gold accents",
  },
  {
    id: 3,
    title: "Hotel Lobby",
    category: "hospitality",
    image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
    description: "Welcoming space with luxurious details",
  },
  {
    id: 4,
    title: "Corporate Headquarters",
    category: "office",
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
    description: "Modern workspace promoting collaboration",
  },
  {
    id: 5,
    title: "Boutique Store",
    category: "commercial",
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
    description: "Unique retail space with custom fixtures",
  },
  {
    id: 6,
    title: "Family Home",
    category: "residential",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    description: "Comfortable living space with elegant touches",
  },
];
