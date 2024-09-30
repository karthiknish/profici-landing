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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row min-h-[400px] items-center">
          <h2 className="text-3xl font-bold mb-8 md:w-1/3 md:flex md:items-center md:justify-center">
            Our Onboarding Process
          </h2>
          <div className="md:w-2/3">
            <AnimatedList
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto p-4 rounded-lg"
              delay={2000}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="absolute top-0 left-0 bg-[#FDC145] text-white font-bold rounded-br-lg px-2 py-1 text-sm">
                    {index + 1}
                  </div>
                  <div className="flex items-center mb-2 mt-6">
                    <div className="w-10 h-10 rounded-full bg-[#FDC145] flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-white"
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
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                      backgroundSize: "200% 200%",
                      animation: "shine 5s infinite",
                    }}
                  ></div>
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default OnboardingProcess;
