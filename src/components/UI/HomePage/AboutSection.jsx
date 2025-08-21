import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://picsum.photos/600/400?grayscale"
            alt="About Project"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About This Project</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            This is a demo e-commerce project built with{" "}
            <span className="font-semibold">Next.js 15</span> and{" "}
            <span className="font-semibold">NextAuth.js</span>. You can explore
            products, view their details, and if you are logged in, add new
            products through the dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
