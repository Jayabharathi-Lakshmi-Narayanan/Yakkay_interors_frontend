"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

const HowItWorks = ({ steps }: Props) => {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

        {/* Scrollable wrapper */}
        <div className="overflow-x-auto">
          <div className="flex items-center gap-8 min-w-[1024px]">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Box */}
                <div className="flex flex-col items-center w-56 bg-white p-6 rounded-lg shadow-md flex-shrink-0 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white text-lg font-bold rounded-full mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <ArrowRight className="text-yellow-500 w-6 h-6 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
