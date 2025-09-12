"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Refs for dropdowns
  const menuRef = useRef();
  const contactRef = useRef();
  const searchRef = useRef();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#menuBtn")
      ) {
        setMenuOpen(false);
      }
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target) &&
        !event.target.closest("#contactBtn")
      ) {
        setContactOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest("#searchBtn")
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">Luona</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            id="contactBtn"
            onClick={() => setContactOpen(!contactOpen)}
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <FiPhone /> Contact
          </button>

          <button
            id="searchBtn"
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-2 hover:text-gray-600"
          >
            <FiSearch /> Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Contact Dropdown */}
      {contactOpen && (
        <div
          ref={contactRef}
          className="absolute top-16 right-20 bg-white shadow-lg p-4 rounded-md w-48"
        >
          <p className="font-semibold">Call Us</p>
          <p className="text-gray-600">+234 800 123 4567</p>
          <p className="mt-2 font-semibold">Email</p>
          <p className="text-gray-600">support@luona.com</p>
        </div>
      )}

      {/* Search Dropdown */}
      {searchOpen && (
        <div
          ref={searchRef}
          className="absolute top-16 right-5 bg-white shadow-lg p-4 rounded-md w-64"
        >
          <input
            type="text"
            placeholder="Search shoes..."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          />
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4"
        >
          <a href="#" className="block py-2 hover:text-gray-600">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-600">
            Shop
          </a>
          <a href="#" className="block py-2 hover:text-gray-600">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
