"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, Phone, Mail, MessageCircle, ChevronDown, X } from "lucide-react";


const Navbar = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const contactDropdownRef = useRef(null);
  const menuDropdownRef = useRef(null);
  const searchRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
        setIsContactDropdownOpen(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    'Home',
    'Store', 
    'Explore',
    'Vision',
    'Mission',
    'Brogues',
    'Mules',
    'Boots',
    'Loafers',
    'Sandals',
    'Bespoke/Custom made',
    'Connect with us'
  ];

  const contactMethods = [
    { icon: Phone, label: 'Phone', value: '+234 123 456 7890' },
    { icon: Mail, label: 'Email', value: 'contact@luona.com' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
         {/* Desktop Layout */}
          {!isMobile && (
            <>
              {/* Left: Contact Us Dropdown */}
              <div className="relative flex items-center" ref={contactDropdownRef}>
                <button
                  onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-900 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  <span>Contact Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isContactDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Contact Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border transform transition-all duration-300 origin-top ${
                    isContactDropdownOpen
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="py-2">
                    {contactMethods.map((method, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-150"
                      >
                        <method.icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{method.label}</div>
                          <div className="text-sm text-gray-600">{method.value}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center: Logo */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Luona Logo"
                  className="h-16 w-auto" // increased size from h-16 → h-20
                />
              </div>

              {/* Right: Cart, Search, Menu */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative" ref={searchRef}>
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  {/* Search Dropdown */}
                  <div className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border transform transition-all duration-300 origin-top-right ${
                    isSearchOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="p-4">
                      <input
                        type="text"
                        placeholder="Search for products, vision, mission, socials..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Cart */}
                <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>

                {/* Menu Button */}
                <div className="relative" ref={menuDropdownRef}>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                  >
                    <Menu className="w-5 h-5" />
                    <span>MENU</span>
                  </button>
                  
                  {/* Menu Dropdown */}
                  <div className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border transform transition-all duration-300 origin-top-right ${
                    isMenuOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <button
                          key={index}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors duration-150"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Mobile Layout */}
          {isMobile && (
            <>
              {/* Left: Logo */}
              <div className="flex-1 justify-center flex items-center">
                <img 
                  src="/logo.jpg" 
                  alt="Luona Logo" 
                  className="h-8 w-auto"
                />
              </div>

              {/* Right: Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && (
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-gray-200">
              
              {/* Contact Section */}
              <div className="mb-4">
                <button
                  onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-left text-gray-700 hover:bg-gray-50 font-medium"
                >
                  <span>Contact Us</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isContactDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-gray-50 mx-4 rounded-lg mt-2">
                    {contactMethods.map((method, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center space-x-3 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                      >
                        <method.icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{method.label}</div>
                          <div className="text-sm text-gray-600">{method.value}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="mb-4 px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Cart */}
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                <ShoppingBag className="w-5 h-5" />
                <span>Cart (0)</span>
              </button>

              {/* Menu Items */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;