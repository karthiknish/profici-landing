import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const PricingCard = ({ title, price, features, isPopular, onSelect }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const borderVariants = {
    animate: {
      borderTopColor: ["#FDC145", "#FFFFFF", "#FDC145", "#FFFFFF"],
      borderRightColor: ["#FDC145", "#FFFFFF", "#FDC145", "#FFFFFF"],
      borderBottomColor: ["#FDC145", "#FFFFFF", "#FDC145", "#FFFFFF"],
      borderLeftColor: ["#FDC145", "#FFFFFF", "#FDC145", "#FFFFFF"],
      borderWidth: "2px",
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const handleGetStarted = () => {
    onSelect(title);
    router.push("/contact");
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col p-8 rounded-3xl relative ${
        isPopular ? "bg-white" : "bg-white"
      }`}
    >
      {isPopular && (
        <motion.div
          variants={borderVariants}
          animate="animate"
          className="absolute inset-0 rounded-3xl border-4 border-transparent pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}
      {isPopular && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          className="absolute top-0 right-0 mt-2 mr-2 transform translate-x-1/4 -translate-y-1/2 text-sm font-semibold mb-4 border border-[#FDC145] text-black py-1 px-3 rounded-full bg-white"
          style={{ zIndex: 2 }}
        >
          Most Popular
        </motion.span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">From £{price}</p>
      <ul className="mb-8 flex-grow space-y-4">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start"
          >
            <svg
              className="w-5 h-5 mr-3 mt-1 text-[#FDC145]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 px-6 rounded-full text-lg font-semibold transition-colors bg-black text-white hover:bg-gray-800"
        onClick={handleGetStarted}
      >
        Get started
      </motion.button>
    </motion.div>
  );
};

const PricingComponent = () => {
  const plans = [
    {
      title: "Brochure Website",
      price: "2,000",
      features: [
        "Up to 5-10 pages",
        "Simple, clean design",
        "Basic contact form",
        "Mobile responsive",
        "Basic SEO setup",
        "Hosting & Domain setup",
      ],
    },
    {
      title: "Business Website",
      price: "3,500",
      features: [
        "10-20 pages",
        "Enhanced custom design",
        "Multiple contact forms",
        "SEO optimization",
        "CMS integration",
        "Analytics setup",
      ],
      isPopular: true,
    },
    {
      title: "E-Commerce Website",
      price: "5,000",
      features: [
        "Fully functional e-commerce",
        "Up to 50 products",
        "Payment gateway integration",
        "Inventory management",
        "User account management",
        "Advanced SEO & analytics",
      ],
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleSelectPlan = (planTitle) => {
    // You can implement the logic to highlight the radio button here
    // For example, you could set a state variable or use a ref to access the radio button
    console.log(`Selected plan: ${planTitle}`);
    // You might want to store this selection in a state or context
    // so that it can be accessed in the contact form
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Simple And Transparent Pricing
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-12"
        >
          Choose the plan that&apos;s right for your business
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} onSelect={handleSelectPlan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
