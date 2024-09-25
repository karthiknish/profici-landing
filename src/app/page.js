"use client";
import Image from "next/image";
import Globe from "@/components/magicui/globe";
import PricingComponent from "@/components/pricing";
import ContactForm from "@/components/form";
import OnboardingProcess from "@/components/onboard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IconCloud from "@/components/magicui/icon-cloud";
export default function Home() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyChooseUsRef, whyChooseUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [onboardingRef, onboardingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sanxs)]">
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="p-8 pb-20 sm:p-20"
      >
        <motion.main
          className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20"
          variants={fadeInUp}
        >
          <div className="flex-1 max-w-2xl">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Elevate Your Business with a Strong Online Presence
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Compete with improvements in AI and get your website ready for
              2025
            </motion.h2>
            <motion.p className="text-lg mb-8" variants={fadeInUp}>
              Our expert team will help you create a stunning online presence
              that not only looks great but also drives results. Whether you"re
              a small business or a large enterprise, we have the perfect
              solution tailored to your needs.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
          <motion.div
            className="flex-grow flex justify-start"
            variants={fadeInUp}
          >
            <div className="w-1/2 max-w-md">
              <Globe />
            </div>
          </motion.div>
        </motion.main>
      </motion.div>
      <motion.section
        ref={whyChooseUsRef}
        className="w-full bg-gray-50"
        initial="hidden"
        animate={whyChooseUsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 py-20">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customized Solutions",
                description: "Tailored to fit your business goals",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
              },
              {
                title: "Cutting-Edge Technology",
                description: "Utilizing the latest in design and tech",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Dedicated Support",
                description: "Ongoing maintenance and support",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Proven Success",
                description: "Track record of successful projects",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-[#FDC145] bg-opacity-20 p-4 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-[#FDC145]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.div
        ref={onboardingRef}
        initial="hidden"
        animate={onboardingInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <OnboardingProcess />
      </motion.div>
      <motion.section
        className="bg-gradient-to-br from-gray-50 to-white py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Our Website Builds
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-around">
            <motion.div
              className="w-full md:w-1/3 mb-8 md:mb-0 md:sticky md:top-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div>
            <div className="w-full md:w-1/2">
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="bg-white cursor-pointer p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-4 text-xl font-semibold">
                    Conversion-Focused Design
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Our websites are designed with a focus on improving
                    conversion rates. We use data-driven design principles to
                    ensure that your website not only attracts visitors but also
                    converts them into customers.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Implement latest UX/UI design principles</li>
                    <li>Create intuitive and easy-to-navigate websites</li>
                    <li>Focus on higher conversion rates</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-white p-6 cursor-pointer rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="mb-4 text-xl font-semibold">
                    Data-Driven Improvement
                  </h3>
                  <p className="mb-4 text-gray-600">
                    We integrate advanced analytics tools to track user behavior
                    and make data-informed decisions to continuously improve
                    your website"s performance.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Track user behavior</li>
                    <li>Make data-informed decisions</li>
                    <li>Continuously improve performance</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-lg text-gray-700">
              Our goal is to help you achieve higher conversion rates, increased
              sales, and better customer engagement.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        ref={pricingRef}
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <PricingComponent />
      </motion.div>
      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="p-8 pb-20 sm:p-20"
      ></motion.div>
    </div>
  );
}
