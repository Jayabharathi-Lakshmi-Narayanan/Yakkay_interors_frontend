"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects"; // Importing projects data

type Category = "all" | "residential" | "commercial" | "hospitality" | "office";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // Define categories explicitly as per the Category type
  const categories: Category[] = [
    "all",
    "residential",
    "commercial",
    "hospitality",
    "office",
  ];

  // Filter projects based on the active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (categoryId: Category) => {
    setActiveCategory(categoryId);
  };

  return (
    <section
      id="portfolio"
      className="section-padding lg:pt-8 lg:pb-8 bg-gray-50"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
            Our Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Explore Our Latest <span className="gold-text">Projects</span>
          </h3>
          <p className="text-gray-600">
            Browse through our collection of meticulously designed spaces that
            showcase our expertise, creativity, and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)} // No need to cast, it's already Category
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gold-500 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gold-50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md card-hover"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs text-gold-300 uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-serif font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <Link
                    href={`/project/${project.id}`}
                    className="inline-block mt-4 text-gold-500 hover:text-gold-400 font-medium text-sm"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border-2 border-gold-500 text-gold-500 font-medium rounded-md hover:bg-gold-500 hover:text-white transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
