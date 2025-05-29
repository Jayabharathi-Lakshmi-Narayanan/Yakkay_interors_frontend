"use client";

import React, { useState, useEffect } from "react";

type NotifyPopupProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (notifyData: {
    name: string;
    email: string;
    number: string;
  }) => Promise<{ success: boolean; message?: string }>;
};

const NotifyPopup: React.FC<NotifyPopupProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [notifyData, setNotifyData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setNotifyData({ name: "", email: "", number: "" });
      setErrors({});
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotifyData({ ...notifyData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!notifyData.name.trim()) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(notifyData.email))
      newErrors.email = "Enter a valid email.";
    if (!/^\d{10}$/.test(notifyData.number))
      newErrors.number = "Enter a 10-digit phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    if (!validate()) return;

    setSubmitting(true);
    await onSubmit(notifyData);
    setSubmitting(false);
    // Do NOT close popup here!
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close popup"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4">Get Notified</h2>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 mb-1 w-full rounded"
            value={notifyData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 mb-1 w-full rounded"
            value={notifyData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
          )}

          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="border p-2 mb-1 w-full rounded"
            value={notifyData.number}
            onChange={handleChange}
          />
          {errors.number && (
            <p className="text-red-500 text-sm mb-2">{errors.number}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            {submitting ? "Submitting..." : "Notify Me"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotifyPopup;
