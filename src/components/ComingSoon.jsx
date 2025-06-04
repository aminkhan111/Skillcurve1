"use client";

import React from "react";
import Link from "next/link";

const ComingSoon = () => {
  // Function to trigger the consultation popup
  const handleConsultationClick = (e) => {
    e.preventDefault();
    
    // Store in localStorage that we're manually showing the popup
    localStorage.setItem("popupShown", "true");
    
    // Dispatch a custom event that the PopupForm component will listen for
    const event = new Event("showConsultationPopup");
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl p-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-500/80 blur-sm"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-orange-400/50"></div>
        <div className="absolute right-1/4 bottom-1/4 w-16 h-16 rounded-lg bg-teal-300/30 rotate-12"></div>
        
        {/* Label */}
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 border border-blue-200">
          COMING SOON
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          We Are Building Something Amazing
        </h2>
        
        {/* Gradient underline */}
        <div className="h-1 w-64 bg-gradient-to-r from-blue-600 to-orange-500 mb-8 rounded-full"></div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl">
          Stay tuned for exciting new features and courses that will transform your learning experience!
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={handleConsultationClick}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-medium rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get Pre-Consultation
        </button>
      </div>
    </div>
  );
};

export default ComingSoon; 