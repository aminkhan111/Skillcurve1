"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Wave animation for SVG paths
  const waveVariants = {
    animate: {
      x: [0, -100],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section with Gradients and Waves */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Wavy background decoration */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003D99]/95 via-[#0052CC]/90 to-[#FF6B00]/80"></div>
          
          {/* Animated waves */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/2" preserveAspectRatio="none">
              <motion.path 
                variants={waveVariants}
                animate="animate"
                fill="rgba(255, 255, 255, 0.05)" 
                d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></motion.path>
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/3" preserveAspectRatio="none">
              <motion.path 
                variants={waveVariants}
                animate="animate"
                fill="rgba(255, 255, 255, 0.08)" 
                d="M0,32L48,64C96,96,192,160,288,181.3C384,203,480,181,576,154.7C672,128,768,96,864,80C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></motion.path>
            </svg>
          </motion.div>
          
          {/* Decorative shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#FF6B00]/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#0052CC]/20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient badge */}
            <motion.div 
              className="inline-block mb-4 py-2 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WHY CHOOSE SKILLCURVE
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-white text-transparent bg-clip-text">
              What Makes Us Stand Out?
            </h1>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore top online courses from leading institutions with personalized recommendations,
              exclusive scholarships, and flexible learning options tailored to your schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Left side image */}
            <motion.div 
              className="md:col-span-2 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border-[3px] border-white/20 rounded-2xl z-10"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                  alt="Student using laptop" 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right side feature cards */}
            <motion.div 
              className="md:col-span-3 order-1 md:order-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#0052CC]/50 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#0052CC] to-[#003D99] rounded-xl inline-block text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-white to-orange-100 text-transparent bg-clip-text">Top Course Comparison</h3>
                  <p className="text-white/80">
                    Access India's leading online course comparison platform for effortless discovery and comparison of top providers.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#FF6B00]/50 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#FF6B35] to-[#E55A24] rounded-xl inline-block text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-white to-orange-100 text-transparent bg-clip-text">Personalized Guidance</h3>
                  <p className="text-white/80">
                    Receive tailored career mentoring and unbiased course recommendations to help you make informed decisions.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#0052CC]/50 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#0052CC] to-[#003D99] rounded-xl inline-block text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-white to-orange-100 text-transparent bg-clip-text">Exclusive Benefits</h3>
                  <p className="text-white/80">
                    Enjoy exclusive scholarships, special offers, and no-cost EMI options to make education more accessible.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#FF6B00]/50 transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-[#FF6B35] to-[#E55A24] rounded-xl inline-block text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-white to-orange-100 text-transparent bg-clip-text">Comprehensive Support</h3>
                  <p className="text-white/80">
                    Benefit from extensive post-enrollment support, including community access and placement assistance.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Benefits with enhanced gradients and waves */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F0F4F8] to-[#E6F0FF] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B00]"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#0052CC]/10 to-[#FF6B00]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6B00]/10 to-[#0052CC]/10 blur-3xl"></div>
        
        {/* Wavy decorative pattern */}
        <div className="absolute top-10 left-0 right-0 overflow-hidden opacity-50">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="rgba(0, 82, 204, 0.05)" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-block mb-4 py-2 px-6 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 text-[#0052CC] text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              OUR DIFFERENCE
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines technology, expertise, and personalized attention to ensure your success.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Benefit 1 - Enhanced card with gradients */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] to-[#FF6B00] opacity-90"></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -bottom-2 -right-2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  <circle cx="60" cy="60" r="60" fill="white" />
                </svg>
              </div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-white mb-4">
                  <div className="p-3 bg-white/10 rounded-xl inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">AI-Powered Course Matching</h3>
                  <p className="text-white/90">
                    Our proprietary algorithm analyzes your skills, goals, and learning style to recommend the most suitable courses.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#0052CC] opacity-90"></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -bottom-2 -right-2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  <circle cx="60" cy="60" r="60" fill="white" />
                </svg>
              </div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-white mb-4">
                  <div className="p-3 bg-white/10 rounded-xl inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Industry Expert Mentors</h3>
                  <p className="text-white/90">
                    Connect with professionals who provide real-world insights and guidance throughout your learning journey.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/90 via-[#634FD8]/90 to-[#FF6B00]/90"></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -bottom-2 -right-2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  <circle cx="60" cy="60" r="60" fill="white" />
                </svg>
              </div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-white mb-4">
                  <div className="p-3 bg-white/10 rounded-xl inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Satisfaction Guarantee</h3>
                  <p className="text-white/90">
                    If you're not satisfied with a course within the first 7 days, we'll help you find an alternative or provide a refund.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call to action */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background gradient + pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/90 to-[#FF6B00]/90 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/90 to-transparent z-10"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Students collaborating" 
                  fill
                  style={{objectFit: "cover"}}
                />
                
                {/* Floating elements for visual interest */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#FF6B00]/30 backdrop-blur-md z-20"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-[#0052CC]/30 backdrop-blur-md z-20"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                ></motion.div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-white to-orange-100 text-transparent bg-clip-text">Ready to Take the Next Step?</h2>
                  <p className="text-lg text-white/90 mb-8">
                    Schedule a free consultation with our education advisors to discover how SkillCurve can help you achieve your career goals.
                  </p>
                  <motion.a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // Dispatch the custom event to show the popup form
                      const event = new CustomEvent("showConsultationPopup");
                      window.dispatchEvent(event);
                    }}
                    className="inline-block relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF9500] rounded-lg blur-md opacity-70"></span>
                    <button className="relative bg-gradient-to-r from-[#FF6B00] to-[#FF9500] hover:from-[#FF9500] hover:to-[#FF6B00] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg">
                      Schedule a Free Consultation
                    </button>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 