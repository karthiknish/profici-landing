"use client";

import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6">
        Your form has been successfully submitted. We appreciate your input and
        will get back to you soon.
      </p>
      <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
        Return to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
