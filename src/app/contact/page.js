"use client";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Get your Website Ready for 2025
      </h1>
      <iframe
        src="//profici.co.uk/gfembed/?f=7"
        width="70%"
        height="1200"
        frameBorder="1"
        className="gfiframe mx-auto block border-2 p-2 border-black rounded-lg"
      />
      <script
        src="//profici.co.uk/wp-content/plugins/gravity-forms-iframe-master/assets/scripts/gfembed.min.js"
        type="text/javascript"
      />
    </div>
  );
};

export default ContactPage;
