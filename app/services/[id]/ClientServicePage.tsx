"use client";

import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import type { Service } from "@/lib/data/services";
import Image from "next/image";
import Link from "next/link";

// Reusable heading with highlighted last word
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

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) return notFound();

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
        {service.images.map((img, index) => (
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
            {service.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats */}
      {service.stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {service.stats.map((stat, idx) => (
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
          <div className="grid md:grid-cols-3 gap-6">
            {service.styleExamples.map((style, idx) => (
              <div key={idx} className="bg-white p-4 rounded shadow">
                <Image
                  src={style.image}
                  alt={style.title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover mb-2"
                />
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
            {service.offerings.map((item, idx) => (
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
            {service.techFeatures.map((tech, idx) => (
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
            {service.warranties.map((warranty, idx) => (
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
            {service.priceBenefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href={`/getQuoteform/${service.id}`}
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
}
