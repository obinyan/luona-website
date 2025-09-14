"use client";

import React from "react";

const BespokeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src="/poster 5.jpg"
                alt="Craftsman"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Get a Bespoke/custom made shoe
              </h2>

              <button className="inline-flex items-center px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
                Get in Touch
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
        </div>
      </div>
    </section>
  );
};

export default BespokeSection;
