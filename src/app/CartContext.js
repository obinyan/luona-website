"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Add to cart (handles duplicates)
  const addToCart = (product, size, quantity) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIndex !== -1) {
        // update quantity if product already exists
        const updatedCart = [...prev];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      }

      // add new product
      return [...prev, { ...product, size, quantity }];
    });
  };

  // ✅ Remove item by product id + size
  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // ✅ Calculate total price
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // ✅ Calculate total items
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartTotal, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
