"use client";

import React, { useState } from "react";
import { useCart } from "@/app/CartContext";

const ShoesForKings = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    0: { size: "", quantity: 1 },
    1: { size: "", quantity: 1 },
    2: { size: "", quantity: 1 },
    3: { size: "", quantity: 1 },
  });

  const products = [
    {
      id: 0,
      name: "Birken Sandals",
      price: 55000,
      image: "/sandals 15.png",
      colors: ["white", "black"],
    },
    {
      id: 1,
      name: "Men's Sandals",
      price: 40000,
      image: "/sandals 5.png",
      colors: ["brown", "beige"],
    },
    {
      id: 2,
      name: "Leather cross-strap Sandals",
      price: 40000,
      image: "/sandals 17.png",
      colors: ["navy", "gray"],
    },
    {
      id: 3,
      name: "Men's Leather Slide Sandals",
      price: 40000,
      image: "/sandals 21.png",
      colors: ["brown", "tan"],
    },
  ];

  const handleSizeChange = (productId, size) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], size },
    }));
  };

  const handleQuantityChange = (productId, quantity) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], quantity },
    }));
  };

  const { addToCart } = useCart();
  
    const handleAddToCart = (productId) => {
      const product = products.find((p) => p.id === productId);
      const selection = selectedProducts[productId];
  
      if (!selection.size) {
        alert("Please select a size before adding to cart");
        return;
      }
  
      addToCart(product, selection.size, selection.quantity);
    };

  return (
    <div className="min-h-screen bg-white py-8 px-4  pb-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white  shadow-sm overflow-hidden"
            >
              {/* Product Image */}
              <div className="flex items-center justify-center h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
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

                

                {/* Size and Quantity Selection */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-900 mb-1">
                      Size
                    </label>
                    <select
                      value={selectedProducts[product.id].size}
                      onChange={(e) =>
                        handleSizeChange(product.id, e.target.value)
                      }
                      className="w-full px-2 py-1.5 text-xs text-gray-900 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                    >
                      <option value="">-</option>
                      {[39, 40, 41, 42, 43, 44, 45].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-gray-900 mb-1">
                      Quantity
                    </label>
                    <select
                      value={selectedProducts[product.id].quantity}
                      onChange={(e) =>
                        handleQuantityChange(product.id, parseInt(e.target.value))
                      }
                      className="w-full px-2 py-1.5 text-xs text-gray-900 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
  disabled={!selectedProducts[product.id].size}
  onClick={() => handleAddToCart(product.id)}
  className={`w-full py-2 px-4 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1
    ${!selectedProducts[product.id].size
      ? " text-black cursor-not-allowed"
      : "bg-white border border-black text-gray-900 hover:bg-black hover:text-white"
    }`}
>
  Add to cart →
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
