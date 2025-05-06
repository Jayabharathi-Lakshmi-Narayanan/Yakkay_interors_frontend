"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  image: string;
};

export default function ClientProjectPage({ project }: { project: Project }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    area: "",
    style: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, mobile, email, location, area, style } = formData;
    if (!name || !mobile || !email || !location || !area || !style) {
      alert("Please fill in all fields.");
      return;
    }
    alert(
      "Thank you for sharing the details. Our design team will contact you soon."
    );
    setFormData({
      name: "",
      mobile: "",
      email: "",
      location: "",
      area: "",
      style: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-green-900 via-ruby-700 to-yellow-600 text-white p-8 gap-6 pt-20">
      {/* Left Column: Image */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-start">
        <h1 className="text-4xl font-bold mb-6 border-b border-gold-500 pb-2">
          {project.title}
        </h1>
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Column: Get a Quote Form */}
      <div className="lg:w-1/2 p-6 bg-white text-black rounded-xl shadow-lg flex flex-col justify-start pb-4">
        <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <input
            type="text"
            placeholder="Location of the Site"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <input
            type="text"
            placeholder="Total Built Area (sqft)"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <option value="">Select Style</option>
            <option>Italian Style</option>
            <option>Spanish Style</option>
            <option>South Indian Style</option>
            <option>North Indian Style</option>
            <option>Chettinad Style</option>
            <option>Chinese Style</option>
            <option>Royal Style</option>
            <option>Contemporary Style</option>
            <option>Others</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gold-500 text-white font-medium py-2 px-4 rounded hover:bg-gold-600"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
}
