"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



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
        <div className="text-center z-20 relative pt-10">
          <Link
  href="/store"
  className="group inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-transparent border-2 border-black text-black font-semibold text-lg md:text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
>
  <span className="mr-3">Shop Now</span>
  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
</Link>

        </div>
      </div>
    </section>
  );
};

export default ShoeShowcase;
