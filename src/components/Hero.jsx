"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample shoe data - replace with your actual shoe images and details
  const shoes = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      alt: "Brown Leather Loafer",
      style: "Classic Comfort"
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      alt: "Black Oxford Shoes",
      style: "Elegant Design"
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      alt: "Brown Moccasin",
      style: "Premium Quality"
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      alt: "Leather Brogues",
      style: "Timeless Style"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % shoes.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [shoes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % shoes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + shoes.length) % shoes.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Backdrop Logo with Reduced Opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gray-200 opacity-10 select-none transform rotate-[-5deg]">
          LUONA
        </div>
      </div>

      {/* Crown/Lion Logo Backdrop */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] opacity-5">
          {/* Placeholder for crown/lion logo - replace with actual logo */}
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-400">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M50 20 L60 40 L50 35 L40 40 Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center">
        
        {/* Top Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Wear LUONA...
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-light">
            the emblem of Kings
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative w-full max-w-4xl mb-12 md:mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Slide Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {shoes.map((shoe, index) => (
                <div key={shoe.id} className="w-full flex-shrink-0 px-8 py-12 md:px-16 md:py-20">
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

                    {/* More Style Text */}
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

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {shoes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gray-800 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
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

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;