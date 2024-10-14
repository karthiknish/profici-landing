import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyOrWebsite: "",
    packages: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.companyOrWebsite.trim())
      newErrors.companyOrWebsite = "Company Name / Website URL is required";
    if (!formData.packages) newErrors.packages = "Please select a package";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      try {
        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            name: "",
            phone: "",
            email: "",
            companyOrWebsite: "",
            packages: "",
            message: "",
          });
          // Redirect to thank you page
          router.push("/thank-you");
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
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
      {submitStatus === "success" && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          Form submitted successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          An error occurred. Please try again.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`peer w-full px-4 py-3 border-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors`}
            placeholder=" "
          />
          <label
            htmlFor="name"
            className={`absolute left-4 -top-6 text-sm ${
              errors.name ? "text-red-500" : "text-gray-500"
            } transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145]`}
          >
            Name
          </label>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`peer w-full px-4 py-3 border-2 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors`}
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className={`absolute left-4 -top-6 text-sm ${
              errors.phone ? "text-red-500" : "text-gray-500"
            } transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145]`}
          >
            Phone
          </label>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`peer w-full px-4 py-3 border-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors`}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`absolute left-4 -top-6 text-sm ${
              errors.email ? "text-red-500" : "text-gray-500"
            } transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145]`}
          >
            Email
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            id="companyOrWebsite"
            name="companyOrWebsite"
            value={formData.companyOrWebsite}
            onChange={handleChange}
            required
            className={`peer w-full px-4 py-3 border-2 ${
              errors.companyOrWebsite ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:border-[#FDC145] transition-colors`}
            placeholder=" "
          />
          <label
            htmlFor="companyOrWebsite"
            className={`absolute left-4 -top-6 text-sm ${
              errors.companyOrWebsite ? "text-red-500" : "text-gray-500"
            } transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145]`}
          >
            Company Name / Website URL
          </label>
          {errors.companyOrWebsite && (
            <p className="text-red-500 text-xs mt-1">
              {errors.companyOrWebsite}
            </p>
          )}
        </div>
        <div className="relative">
          <div className="flex flex-col space-y-2">
            <label
              className={`text-gray-700 font-medium ${
                errors.packages ? "text-red-500" : ""
              }`}
            >
              Select a package:
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="brochure"
                  name="packages"
                  value="brochure"
                  checked={formData.packages === "brochure"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>Brochure Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="business"
                  name="packages"
                  value="business"
                  checked={formData.packages === "business"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>Business Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="ecommerce"
                  name="packages"
                  value="ecommerce"
                  checked={formData.packages === "ecommerce"}
                  onChange={handleChange}
                  className="form-radio text-[#FDC145] focus:ring-[#FDC145]"
                />
                <span>E-commerce Website</span>
              </label>
            </div>
          </div>
          {errors.packages && (
            <p className="text-red-500 text-xs mt-1">{errors.packages}</p>
          )}
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
            className="absolute left-4 -top-6 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:-top-6 peer-focus:text-[#FDC145]"
          >
            Message
          </label>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
