"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      text: "YAKKAY Interiors transformed our home beyond our expectations. Their attention to detail and ability to understand our vision resulted in a space that truly feels like us, but elevated.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      text: "Working with YAKKAY for our office renovation was a seamless experience. They delivered a professional, inspiring workspace that perfectly represents our brand and has improved team productivity.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Hotel Manager",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      text: "The design work YAKKAY did for our boutique hotel has received countless compliments from guests. Their ability to blend luxury with functionality has truly set our property apart from competitors.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="testimonials"
      className="section-padding lg:pt-8 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ruby-green-50 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-ruby-green-500 font-medium mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            What Our Clients <span className="gold-text">Say About Us</span>
          </h3>
          <p className="text-gray-600">
            We take pride in exceeding our clients&#39; expectations and
            creating spaces that bring joy and functionality to their lives.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 text-gold-300 opacity-50">
            <Quote size={80} />
          </div>

          <div className="relative overflow-hidden">
            <div
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl p-8 md:p-12 shadow-md border border-gray-100">
                    <p className="text-gray-600 italic text-lg mb-8 relative z-10">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-serif font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gold-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gold-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold-500 w-10" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
