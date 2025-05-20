"use client";

import { useEffect, useState } from "react";

export default function QuoteForm({ projectId }: { projectId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    area: "",
    style: "",
    service: "",
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, mobile, email, location, area, style, service } = formData;

    if (
      !name ||
      !mobile ||
      !email ||
      !location ||
      !area ||
      !style ||
      !service
    ) {
      setFeedback("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4001/api/quoteform/createquoteform",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, projectId }),
        }
      );

      if (response.ok) {
        setFeedback("Thank you! Our design team will contact you soon.");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          location: "",
          area: "",
          style: "",
          service: "",
        });
      } else {
        const data = await response.json();
        setFeedback(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setFeedback("Something went wrong. Please try again later.");
    }
  };

  // Auto-hide feedback after 4 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <div className="p-6 bg-white text-black rounded-xl shadow-lg flex flex-col justify-start pb-4">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Phone Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location of the Site"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          name="area"
          placeholder="Total Built Area (sqft)"
          value={formData.area}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <select
          name="style"
          value={formData.style}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select Service</option>
          <option value="residential">Residential Design</option>
          <option value="commercial">Commercial Design</option>
          <option value="space-planning">Space Planning</option>
          <option value="color-consultation">Color Consultation</option>
          <option value="furniture-selection">Furniture Selection</option>
          <option value="other">Other</option>
        </select>

        <div className="relative">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-medium py-2 px-4 rounded hover:bg-yellow-600"
          >
            Get Quote
          </button>
          {feedback && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-yellow-500 text-white text-center text-base py-3 px-6 rounded shadow-lg animate-fade-in">
                {feedback}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
