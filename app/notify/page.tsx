"use client";

import { useState } from "react";
import NotifyPopup from "@/components/NotifyPopup";

export default function NotifyPage() {
  const [popupOpen, setPopupOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (notifyData: {
    name: string;
    email: string;
    number: string;
  }) => {
    try {
      const response = await fetch(
        "http://localhost:4001/api/notify/createnotify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(notifyData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Show success message immediately
        setShowSuccess(true);

        // Close popup only AFTER 2 seconds (give user time to see message)
        setTimeout(() => {
          setShowSuccess(false);
          setPopupOpen(false);
        }, 2000);
      }

      return {
        success: response.ok,
        message: data.message || (response.ok ? "Success" : "Failed"),
      };
    } catch (error) {
      return { success: false, message: "Something went wrong." };
    }
  };

  return (
    <>
      <NotifyPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSubmit={handleSubmit}
      />

      {showSuccess && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
          Thanks for the response. Our team will reach you soon.
        </div>
      )}
    </>
  );
}
