"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer id='connect' className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Signup Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest text-gray-300 mb-4">
            SIGN UP FOR LUONA BRAND UPDATES
          </h2>
          <h3 className="text-2xl lg:text-3xl font-light mb-8 max-w-2xl mx-auto">
            Get exclusive updates on the collection's launch
          </h3>
          <a 
            href="/signup" 
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
          >
            <span className="mr-2 text-lg">+</span>
            <span className="font-medium">Subscribe</span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* The Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              THE COMPANY
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Luona
                </a>
              </li>
              <li>
                <a 
                  href="/#vision" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Vision
                </a>
              </li>
              <li>
                <a 
                  href="/#mission" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Mission
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              CONNECT WITH US
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://facebook.com/luonabrand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/invites/contact/?igsh=1ofafxbo394x3&utm_content=pw07qmj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/luonabrand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@luonabrand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-6 text-white">
              SERVICES
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/book-appointment" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Book An Appointment
                </a>
              </li>
              <li>
                <a 
                  href="/made-to-order" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Made - to - Order
                </a>
              </li>
              <li>
                <a 
                  href="/care-repair" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Care and Repair
                </a>
              </li>
              <li>
                <a 
                  href="/warranty" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 font-medium">
            © 2025 LUONABRAND
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;