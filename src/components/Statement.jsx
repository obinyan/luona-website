"use client";

import React from 'react';

export default function VisionMissionSection() {
  return (
    <section className="py-16 px-6 bg-gray-50 pt-24">
      <div id='vision' className="max-w-6xl mx-auto">
        {/* Vision and Mission Cards */}
        <div id='mission' className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We build luxury leather shoes that speaks class and style.
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to handcrafting exceptional leather shoes using ethical sourced materials. 
                We honor traditional techniques while offering our customers footwears that stand out.
              </p>
            </div>
          </div>
        </div>
        
        {/* Promotional Section */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Product Image */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <img 
                src="/sandals 23.png" 
                alt="Gray textured slides with woven upper detail"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            
            {/* Promotional Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
              <h4 className="text-lg font-medium text-gray-600 mb-2 tracking-wide uppercase">
                JOIN THE KINGS
              </h4>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                GET 10% OFF YOUR ORDER
              </h3>
              <li>
                <a 
                  href="https://www.instagram.com/invites/contact/?igsh=1ofafxbo394x3&utm_content=pw07qmj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Claim Offer
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}