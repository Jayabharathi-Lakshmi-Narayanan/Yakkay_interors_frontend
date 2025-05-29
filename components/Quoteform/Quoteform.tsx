"use client";

import { useState, useEffect } from "react";

interface QuoteFormProps {
  projectId: string;
  allServices: { id: string; numericId: number; title: string }[];
  styleOptions: string[];
}

export default function QuoteForm({
  projectId,
  allServices,
  styleOptions,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    area: "",
    style: "",
    service: projectId, // preselect using projectId
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          service: projectId,
        });
      } else {
        const data = await response.json();
        setFeedback(data.message || "Submission failed.");
      }
    } catch (error) {
      setFeedback("Something went wrong.");
    }
  };

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="area"
        value={formData.area}
        onChange={handleChange}
        placeholder="Area (sq.ft)"
        className="w-full border p-2 rounded"
        required
      />

      {/* Service Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Service
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select Service</option>
          {allServices.map((service) => (
            <option
              key={service.numericId}
              value={service.numericId.toString()}
            >
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Style Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Preferred Style
        </label>
        <select
          name="style"
          value={formData.style}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select Style</option>
          {styleOptions.map((style, idx) => (
            <option key={idx} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      {feedback && (
        <p className="text-sm text-center text-blue-600">{feedback}</p>
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Submit Quote Request
      </button>
    </form>
  );
}
