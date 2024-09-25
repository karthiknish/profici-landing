import React from "react";
import { motion } from "framer-motion";
import { AnimatedList } from "@/components/magicui/animated-list";

const OnboardingProcess = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your business needs and goals.",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: "Proposal",
      description:
        "We provide a detailed proposal outlining the project scope and pricing.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      title: "Development",
      description:
        "Our team starts working on your website, keeping you updated throughout the process.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      title: "Review & Launch",
      description:
        "We review the final product with you and launch your new website.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start">
          <h2 className="text-3xl font-bold mb-12 md:w-1/3 md:sticky md:top-1/2 md:transform md:-translate-y-1/2">
            Our Onboarding Process
          </h2>
          <div className="md:w-2/3">
            <AnimatedList
              className="grid grid-cols-1 gap-4 h-[calc(100vh-8rem)] overflow-y-auto"
              delay={2000}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 shadow-md w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FDC145] flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={step.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;
