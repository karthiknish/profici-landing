import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyOrWebsite: "",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        // Reset form or show success message
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Show error message to user
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Get Your Website Ready for 2025!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Phone
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="companyOrWebsite"
            name="companyOrWebsite"
            value={formData.companyOrWebsite}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors"
            placeholder=" "
          />
          <label
            htmlFor="companyOrWebsite"
            className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Company Name / Website URL
          </label>
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-700 font-medium">
              Select a package:
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="brochure"
                  name="package"
                  value="brochure"
                  checked={formData.package === "brochure"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>Brochure Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="business"
                  name="package"
                  value="business"
                  checked={formData.package === "business"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>Business Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="ecommerce"
                  name="package"
                  value="ecommerce"
                  checked={formData.package === "ecommerce"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>E-commerce Website</span>
              </label>
            </div>
          </div>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-gray-500 transition-all peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145] peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Message
          </label>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
