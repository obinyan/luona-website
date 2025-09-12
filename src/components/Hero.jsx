"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample shoe data
  const shoes = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      alt: "Brown Leather Loafer",
      style: "Classic Comfort",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      alt: "Black Oxford Shoes",
      style: "Elegant Design",
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      alt: "Brown Moccasin",
      style: "Premium Quality",
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      alt: "Leather Brogues",
      style: "Timeless Style",
    },
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shoes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shoes.length]);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center
      bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background logo image (faded, centered) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/logo.png')" }} // replace with your actual logo file in public/
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
        
        {/* Top Heading - inline */}
        <div className="flex items-center justify-center mb-12 md:mb-16 space-x-3">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
            Wear LUONA...
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-black">
            the emblem of Kings
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative w-full max-w-4xl mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {shoes.map((shoe) => (
                <div
                  key={shoe.id}
                  className="w-full flex-shrink-0 px-8 py-12 md:px-16 md:py-20"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                    
                    {/* Shoe Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={shoe.image}
                        alt={shoe.alt}
                        className="relative w-80 h-60 md:w-96 md:h-72 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Shoe Text */}
                    <div className="text-center md:text-left">
                      <div className="mb-4">
                        <span className="text-sm md:text-base font-medium text-gray-600 tracking-widest uppercase">
                          MORE
                        </span>
                      </div>
                      <div className="mb-6">
                        <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                          STYLE
                        </span>
                      </div>
                      <p className="text-lg md:text-xl text-gray-600 font-light">
                        {shoe.style}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center z-20 relative">
          <button className="group inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-transparent border-2 border-black text-black font-semibold text-lg md:text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span className="mr-3">Shop Now</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
