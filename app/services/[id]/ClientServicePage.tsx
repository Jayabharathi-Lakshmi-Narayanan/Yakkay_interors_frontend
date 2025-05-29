"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import QuoteForm from "@/components/Quoteform/Quoteform";
import { services } from "@/lib/data/services";

function HeadingWithHighlight({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  const lastWord = words.pop();
  return (
    <h2 className={className}>
      {words.join(" ")} <span className="text-yellow-500">{lastWord}</span>
    </h2>
  );
}

const styleOptions = [
  "Italian Style",
  "Roman Style",
  "Asian Style",
  "Indian Style",
  "Spanish Style",
  "American Style",
  "Royal Style",
  "Contemporary Style",
];

export default function ClientServicePage({ service }: { service: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container-custom pt-24 pb-16 space-y-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-center">
        {(() => {
          const words = service.title.split(" ");
          const lastWord = words.pop();
          return (
            <>
              {words.join(" ")}{" "}
              <span className="text-yellow-500">{lastWord}</span>
            </>
          );
        })()}
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        {service.longDescription}
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.images.map((img: string, index: number) => (
          <div
            key={index}
            className="relative h-64 w-full rounded-lg overflow-hidden"
          >
            <Image
              src={img}
              alt={`${service.title} image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Highlights */}
      {service.highlights && (
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <HeadingWithHighlight
            text="Why Choose This Service"
            className="text-xl font-semibold mb-4"
          />
          <ul className="list-disc list-inside space-y-2">
            {service.highlights.map((highlight: string, idx: number) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats */}
      {service.stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {service.stats.map((stat: any, idx: number) => (
            <div key={idx} className="bg-white shadow p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Style Examples */}
      {service.styleExamples && (
        <div>
          <HeadingWithHighlight
            text="Style Inspirations"
            className="text-2xl font-semibold mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.styleExamples.map((style: any, idx: number) => (
              <div key={idx} className="bg-white p-4 rounded shadow">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-2">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{style.title}</h3>
                <p className="text-sm text-gray-600">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Offerings */}
      {service.offerings && (
        <div>
          <HeadingWithHighlight
            text="Our Offerings"
            className="text-xl font-semibold mb-2"
          />
          <ul className="list-disc list-inside space-y-2">
            {service.offerings.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Features */}
      {service.techFeatures && (
        <div>
          <HeadingWithHighlight
            text="Technology & Science"
            className="text-xl font-semibold mb-2"
          />
          <ul className="space-y-2">
            {service.techFeatures.map((tech: any, idx: number) => (
              <li key={idx}>
                <strong>{tech.title}: </strong>
                {tech.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Warranties */}
      {service.warranties && (
        <div>
          <HeadingWithHighlight
            text="Warranty"
            className="text-xl font-semibold mb-2"
          />
          <ul className="list-disc list-inside space-y-2">
            {service.warranties.map((warranty: string, idx: number) => (
              <li key={idx}>{warranty}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Price Benefits */}
      {service.priceBenefits && (
        <div>
          <HeadingWithHighlight
            text="Price Benefits"
            className="text-xl font-semibold mb-2"
          />
          <ul className="list-disc list-inside space-y-2">
            {service.priceBenefits.map((benefit: string, idx: number) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Get Started Today
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-center text-2xl font-bold mb-6">
            Get <span className="text-yellow-500">Quote</span>
          </h2>
          <QuoteForm
            projectId={service.numericId.toString()}
            allServices={services}
            styleOptions={styleOptions}
          />
        </Modal>
      )}
    </div>
  );
}
