"use client";

import React from "react";

const ShoeShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brogues */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6 border border-gray-200">
              <img
                src="/brogues 3.jpg"
                alt="Brogues"
                className="w-full h-80 object-cover rounded mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wider">
              BROGUES
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Timeless craftsmanship meets modern sophistication — brogues for
              the refined gentleman.
            </p>
          </div>

          {/* Mules */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6 border border-gray-200">
              <img
                src="/mules 6.jpg"
                alt="Mules"
                className="w-full h-80 object-cover rounded mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wider">
              MULES
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Minimal design, maximum distinction — sandals redefined for the
              discerning.
            </p>
          </div>

          {/* Loafers */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6 border border-gray-200">
              <img
                src="/loafers 8.jpg"
                alt="Loafers"
                className="w-full h-80 object-cover rounded mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-wider">
              LOAFERS
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Effortless elegance in every step — loafers crafted for luxury and
              comfort.
            </p>
          </div>
        </div>

        {/* Shop Now Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
            Shop Now
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoeShowcase;
