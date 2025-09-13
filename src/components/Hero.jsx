"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide Data (replace image paths with your actual files in /public/shoes/)
  const slides = [
    {
      id: 1,
      image: "/mules 11.png", // replace with your real image
      alt: "More Style",
      title: "MORE",
      highlight: "STYLE",
      
    },
    {
      id: 2,
      image: "/brogues 17.png",
      alt: "More Comfort",
      title: "MORE",
      highlight: "COMFORT",
      
    },
    {
      id: 3,
      image: "/mules 10.png",
      alt: "Affordable Luxury",
      title: "AFFORDABLE",
      highlight: "LUXURY",
      
    },
    {
      id: 4,
      image: "/boots 14.png",
      alt: "Built to Last",
      title: "BUILT TO",
      highlight: "LAST",
      
    },
    {
      id: 5,
      image: "/mules 1.png",
      alt: "Built for Kings",
      title: "BUILT FOR",
      highlight: "KINGS",
      
    },
  ];

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-20 pb-16">
      {/* Background Logo Image (faded) */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-30 pointer-events-none bg-[length:140%]"
        style={{ backgroundImage: "url('/logo main 2.png')" }}
      ></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 min-h-screen flex flex-col justify-center items-center">
        {/* Top Heading (inline) */}
        <div className="flex items-center justify-center pt-12 md:mb-10 space-x-3">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-black">
            Wear LUONA...
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-black">
            the emblem of Kings
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative w-full max-w-5xl mb-10">
          <div className="relative overflow-hidden bg-white/30">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 px-6 py-12 md:px-12 md:py-16"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                    {/* Slide Image */}
                    <div className="relative group">
                      <div className="absolute inset-0 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="relative w-96 h-72 md:w-106 md:h-82 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Slide Text */}
                    <div className="text-center md:text-left">
                      <div className="mb-4">
                        <span className="text-sm md:text-base font-medium text-gray-600 tracking-widest uppercase">
                          {slide.title}
                        </span>
                      </div>
                      <div className="mb-6">
                        <span className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                          {slide.highlight}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl text-gray-600 font-light">
                        {slide.subtitle}
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
 