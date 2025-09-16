"use client";

import React, { useState } from 'react';

const ShoesForKings = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    0: { size: '', quantity: 1 },
    1: { size: '', quantity: 1 },
    2: { size: '', quantity: 1 },
    3: { size: '', quantity: 1 }
  });

  const products = [
    {
      id: 0,
      name: "Men's Brogues",
      price: 50000,
      image: "/brogues 4.jpg",
      colors: ['white', 'black']
    },
    {
      id: 1,
      name: "Men's Brogues",
      price: 50000,
      image: "/brogues 2.jpg",
      colors: ['brown', 'beige']
    },
    {
      id: 2,
      name: "Men's Brogues",
      price: 50000,
      image: "/brogues 11.jpg",
      colors: ['navy', 'gray']
    },
    {
      id: 3,
      name: "Men's Brogues",
      price: 50000,
      image: "/brogues 6.jpg",
      colors: ['brown', 'tan']
    }
  ];

  const handleSizeChange = (productId, size) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: { ...prev[productId], size }
    }));
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: { ...prev[productId], quantity }
    }));
  };

  const handleAddToCart = (productId) => {
    const product = selectedProducts[productId];
    console.log(`Added to cart: Product ${productId}, Size: ${product.size}, Quantity: ${product.quantity}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-12 tracking-wide">
          SHOES FOR KINGS
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-2">
                <div className="w-full h-full  rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Shoe Image</span>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
                
                {/* Color Options */}
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-6 h-6 rounded border-2 border-gray-300 cursor-pointer ${
                        color === 'white' ? 'bg-white' :
                        color === 'black' ? 'bg-black' :
                        color === 'brown' ? 'bg-amber-800' :
                        color === 'beige' ? 'bg-amber-100' :
                        color === 'navy' ? 'bg-blue-900' :
                        color === 'gray' ? 'bg-gray-400' :
                        color === 'tan' ? 'bg-amber-600' : 'bg-gray-300'
                      }`}
                      title={color}
                    />
                  ))}
                </div>
                
                {/* Size and Quantity Selection */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-900 mb-1">Size</label>
                    <select
                      value={selectedProducts[product.id].size}
                      onChange={(e) => handleSizeChange(product.id, e.target.value)}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      <option value="">-</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                    </select>
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-xs text-gray-900 mb-1">Quantity</label>
                    <select
                      value={selectedProducts[product.id].quantity}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded text-xs font-medium hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-colors flex items-center justify-center gap-1"
                >
                  Add to cart
                  <span className="text-gray-900">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoesForKings;