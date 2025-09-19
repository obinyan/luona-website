"use client";

import React, { useState } from "react";
import { useCart } from "../app/CartContext";

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
      name: "Black and white leather Oxford wingtip brogues",
      price: 70000,
      image: "/brogues 4.jpg",
      colors: ["white", "black"],
    },
    {
      id: 1,
      name: "Black leather Oxford shoes",
      price: 70000,
      image: "/brogues 2.jpg",
      colors: ["brown", "beige"],
    },
    {
      id: 2,
      name: "Casual Oxford suede brogues",
      price: 70000,
      image: "/brogues 11.jpg",
      colors: ["navy", "gray"],
    },
    {
      id: 3,
      name: "Brown Oxford leather Brogues",
      price: 70000,
      image: "/brogues 6.jpg",
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
    <div className="min-h-screen bg-white py-8 px-4 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-12 tracking-wide">
          SHOES FOR KINGS
        </h1>

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
              <div className="p-2 space-y-4">
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
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : "bg-white border border-gray-500 text-gray-900 hover:bg-black hover:text-white"
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
