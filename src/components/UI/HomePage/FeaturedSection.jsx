import React from "react";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transform transition"
            >
              <img
                src={`https://picsum.photos/400/250?random=${id}`}
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Product {id}</h3>
                <p className="text-gray-300 mb-4">$ {(id * 20).toFixed(2)}</p>
                <Link
                  href="#"
                  className="text-blue-400 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
