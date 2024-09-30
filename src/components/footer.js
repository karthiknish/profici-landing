import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Profici. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;