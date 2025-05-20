"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQItem[];
};

const FAQSection = ({ faqs }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4">
        <h2 id="faq-heading" className="text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {question}
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-yellow-500" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4 text-gray-700 text-base"
                  >
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
