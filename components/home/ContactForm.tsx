"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";

// ✅ Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormState {
  isSubmitting: boolean;
  submitStatus: "success" | "error" | null;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    submitStatus: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ isSubmitting: true, submitStatus: null });

    try {
      const response = await fetch(
        "http://localhost:4001/api/form/createform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to submit");

      setFormState({ isSubmitting: false, submitStatus: "success" });
      reset();

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitStatus: null }));
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState({ isSubmitting: false, submitStatus: "error" });
    }
  };

  return (
    <section id="contact" className="section-padding lg:pt-8 lg:pb-8 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get In <span className="gold-text">Touch</span> With Us
          </h3>
          <p className="text-gray-600">
            Have questions or ready to start your design journey? Reach out to
            our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:order-2">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h4 className="text-2xl font-serif font-semibold mb-6">
                Contact Information
              </h4>

              {/* Office Locations */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold-500 mr-4 mt-1" size={24} />
                  <div>
                    <h5 className="font-medium text-lg mb-1">India Office</h5>
                    <p className="text-gray-600">
                      RMPA Tower, No.18, 3rd Main Rd,
                      <br />
                      Jeyachandran Nagar, Pallikaranai,
                      <br />
                      Chennai, Tamil Nadu, India - 600100
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-gold-500 mr-4" size={24} />
                  <div>
                    <h5 className="font-medium text-lg mb-1">Phone</h5>
                    <p className="text-gray-600">WhatsApp: +91 9043976715</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-gold-500 mr-4" size={24} />
                  <div>
                    <h5 className="font-medium text-lg mb-1">Email</h5>
                    <p className="text-gray-600">contact@yakkayinteriors.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h5 className="font-medium text-lg mb-4">Business Hours</h5>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:order-1">
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
              <h4 className="text-2xl font-serif font-semibold mb-6">
                Send Us a Message
              </h4>

              {/* Success and Error Feedback */}
              {formState.submitStatus === "success" && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded-md mb-6">
                  Thank you for your message! We&#39;ll get back to you soon.
                </div>
              )}

              {formState.submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                  There was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="space-planning">Space Planning</option>
                      <option value="color-consultation">
                        Color Consultation
                      </option>
                      <option value="furniture-selection">
                        Furniture Selection
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className={`flex items-center justify-center w-full px-6 py-3 text-white font-medium rounded-md transition-colors ${
                    formState.isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gold-500 hover:bg-gold-600"
                  }`}
                >
                  {formState.isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
