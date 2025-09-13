"use client";

import React from 'react';

const ShoeStylesSection = () => {
  const products = [
    {
      id: 1,
      image: "/api/placeholder/300/300",
      title: "Leather Loafer",
      link: "/store/leather-loafer"
    },
    {
      id: 2,
      image: "/api/placeholder/300/300",
      title: "Penny Loafers",
      link: "/store/penny-loafers"
    },
    {
      id: 3,
      image: "/api/placeholder/300/300",
      title: "Leather Sandals",
      link: "/store/leather-sandals"
    },
    {
      id: 4,
      image: "/api/placeholder/300/300",
      title: "Leather Boots",
      link: "/store/leather-boots"
    }
  ];

  const handleProductClick = (link) => {
    // In a real app, you would use React Router or Next.js router
    console.log(`Navigate to: ${link}`);
    // Example: window.location.href = link;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
          EXPLORE THE LATEST STYLES
        </h2>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              {/* Product Image Container */}
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product Button */}
              <button
                onClick={() => handleProductClick(product.link)}
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 flex items-center gap-2 group"
              >
                {product.title}
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoeStylesSection;