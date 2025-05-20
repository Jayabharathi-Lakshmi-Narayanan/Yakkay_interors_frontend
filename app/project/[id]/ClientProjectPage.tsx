"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "@/lib/data/projectdes";
import { ChevronDown, ChevronUp } from "lucide-react";

type ClientProjectPageProps = {
  project: ProjectData;
};

const HighlightTitle = ({ title }: { title: string }) => {
  const words = title.split(" ");
  const lastWord = words.pop();
  return (
    <h2 className="text-4xl font-bold text-center mb-12">
      {words.join(" ")} <span className="text-yellow-500">{lastWord}</span>
    </h2>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded p-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{question}</h3>
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {open && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

const ClientProjectPage = ({ project }: ClientProjectPageProps) => {
  const keyFeatures = project.keyFeatures ?? [];

  return (
    <main className="space-y-24">
      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <HighlightTitle title={`${project.title} Highlights`} />
          <div className="grid md:grid-cols-2 gap-10">
            {project.highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full h-[433px]">
                  {" "}
                  {/* increased height by 30% */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        {" "}
        {/* reduced vertical padding */}
        <div className="max-w-6xl mx-auto px-4">
          <HighlightTitle title="How It Works" />
          <div className="flex flex-wrap justify-center items-center gap-8">
            {project.howItWorks.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Step Bubble & Content */}
                <div className="text-center max-w-[200px]">
                  <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white font-bold rounded-full mx-auto mb-2">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm mt-1 text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not after last step) */}
                {index < project.howItWorks.length - 1 && (
                  <div className="text-yellow-500 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <section className="py-16 bg-gray-100">
          {" "}
          {/* reduced vertical padding */}
          <div className="max-w-7xl mx-auto px-4">
            <HighlightTitle title="Key Features" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              {keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-yellow-400 text-black py-16 text-center">
        {" "}
        {/* reduced vertical padding */}
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your <span className="text-white">Space?</span>
          </h3>
          <p className="mb-8 text-lg">
            Let&apos;s collaborate to create a space that reflects your style,
            meets your needs, and exceeds your expectations.
          </p>
          <Link
            href={`/getQuoteform/${project.id}`}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HighlightTitle title="Frequently Asked Questions" />
          <div className="space-y-4">
            {project.faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientProjectPage;
