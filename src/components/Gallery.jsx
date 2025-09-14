"use client";

import React from 'react';

export default function FootwearSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Image - Comic Print Loafers */}
          <div className="relative">
            <img 
              src="/loafers 10.jpg" 
              alt="Black loafers with colorful comic book print design"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Right Image - Tan Suede Loafers */}
          <div className="relative">
            <img 
              src="/poster 2.jpg" 
              alt="Tan suede loafers with gold buckle detail being worn"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            Wear footwear that speaks your value.
          </h2>
        </div>
      </div>
    </section>
  );
}