"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariants, staggerContainer } from "@/components/utils/animations";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ServicesSection() {
  const router = useRouter();
  
  // Function to handle card clicks
  const handleCardClick = (path) => {
    // Navigate to the section
    router.push(path);
  };

  // Function to trigger the PopupForm
  const openConsultationForm = () => {
    // Dispatch a custom event to show the PopupForm
    if (typeof window !== "undefined") {
      const event = new Event("showConsultationPopup");
      window.dispatchEvent(event);
    }
  };

  // Wavy line animation variant
  const wavyLineVariant = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const wavyPathVariant = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 section-services relative overflow-hidden" id="services-section">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-orange-700 text-transparent bg-clip-text mb-6">Our Services</h2>
          
          {/* Animated wavy line */}
          <motion.div 
            className="w-48 h-6 mx-auto mb-6"
            variants={wavyLineVariant}
            initial="initial"
            animate="animate"
          >
            <motion.svg width="160" height="24" viewBox="0 0 160 24" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M2 12C2 12 22 4 42 12C62 20 82 4 102 12C122 20 142 4 158 12" 
                stroke="url(#services-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                variants={wavyPathVariant}
              />
              <defs>
                <linearGradient id="services-gradient" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2563EB"/>
                  <stop offset="1" stopColor="#F97316"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students and professionals through world-class online degrees, industry-ready skills, and career placement support.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1: University Programs */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
            onClick={() => handleCardClick("/universities")}
          >
            {/* Enhanced background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full -z-10 opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Enhanced icon with animation */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            {/* Enhanced text with animation */}
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:from-[#FF6B00] group-hover:to-[#0052CC] transition-all duration-300">University Programs</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0052CC] rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
            
            <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">
             <b>Accredited Online Degree Programs</b> 
Partnered with top universities to bring you flexible, affordable, and recognized degrees.
            </p>
            
            {/* Enhanced button with hover effect */}
            <div className="group-hover:shadow-lg">
              <span className="inline-flex items-center text-orange-500 font-semibold group-hover:text-blue-600 transition-colors relative">
                <span>Explore Programs</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </motion.div>

          

          {/* Card 3: Skill Development */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
            onClick={() => handleCardClick("/courses")}
          >
            {/* Enhanced background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full -z-10 opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Enhanced icon with animation */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            {/* Enhanced text with animation */}
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:from-[#FF6B00] group-hover:to-[#0052CC] transition-all duration-300">Skill Development</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0052CC] rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
            
            <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">
            <b>Job-Oriented Skill Development </b> 
            Master in-demand skills through curated courses designed for students and working professionals.
            </p>
            
            {/* Enhanced button with hover effect */}
            <div className="group-hover:shadow-lg">
              <span className="inline-flex items-center text-orange-500 font-semibold group-hover:text-blue-600 transition-colors relative">
                <span>Browse Courses</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </motion.div>


{/* Card 2: Career Counseling */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
            onClick={openConsultationForm}
          >
            {/* Enhanced background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full -z-10 opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Enhanced icon with animation */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            
            {/* Enhanced text with animation */}
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:from-[#FF6B00] group-hover:to-[#0052CC] transition-all duration-300">Career Counseling</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0052CC] rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
            
            <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">
              Get personalized career guidance from experienced counselors to help you make informed decisions.
            </p>
            
            {/* Enhanced button with hover effect */}
            <div className="group-hover:shadow-lg">
              <span onClick={openConsultationForm} className="inline-flex items-center text-orange-500 font-semibold group-hover:text-blue-600 transition-colors relative cursor-pointer">
                <span>Book a Free Consultation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </motion.div>


          {/* Card 4: Placement Support */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
            onClick={() => handleCardClick("/placement")}
          >
            {/* Enhanced background effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-bl-full -z-10 opacity-70 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full -z-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
            
            {/* Enhanced icon with animation */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Enhanced text with animation */}
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:from-[#FF6B00] group-hover:to-[#0052CC] transition-all duration-300">Placement Support</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-[#0052CC] rounded-full mb-3 group-hover:w-32 transition-all duration-500"></div>
            
            <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">
            <b>Placement Support That Works</b> 
            From resume building to interview preparation, we guide you every step of the way to your dream job.
            </p>
            
            {/* Enhanced button with hover effect - Link updated to the new placement page */}
            <div className="group-hover:shadow-lg">
              <span className="inline-flex items-center text-orange-500 font-semibold group-hover:text-blue-600 transition-colors relative">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-[#0052CC] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg font-semibold">
              View All Services
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Consultation Form Popup */}
            </section>
  );
} 