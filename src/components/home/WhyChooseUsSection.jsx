"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/animations";

export default function WhyChooseUsSection() {
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

  // Float animation for background elements
  const floatAnimation = {
    initial: { y: 0, opacity: 0.7 },
    animate: {
      y: [-20, 20, -20],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const rotateAnimation = {
    initial: { rotate: 0, opacity: 0.4 },
    animate: {
      rotate: 360,
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
      {/* Enhanced background decoration elements */}
      {/* Gradient blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-blue-200/30 via-indigo-300/20 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[15%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-orange-200/30 via-amber-300/20 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-[15%] w-[45%] h-[40%] bg-gradient-to-bl from-green-200/20 via-emerald-300/15 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      ></motion.div>

      <motion.div 
        className="absolute top-[50%] right-[15%] w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      ></motion.div>

      {/* Geometric patterns */}
      <motion.div 
        className="absolute top-[20%] left-[5%] w-40 h-40 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(79, 70, 229, 0.2)" d="M45.5,-51.2C59.1,-34.7,70.3,-17.3,72.5,2.2C74.7,21.7,67.9,43.4,54.2,57.9C40.6,72.3,20.3,79.6,0.8,78.8C-18.7,78,-37.5,69.2,-52.1,54.8C-66.7,40.3,-77.1,20.2,-77.6,-0.5C-78.1,-21.1,-68.7,-42.3,-54.1,-58.8C-39.4,-75.4,-19.7,-87.5,-1.1,-86.3C17.4,-85.1,34.9,-70.7,45.5,-51.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Light rays */}
      <div className="absolute -top-20 left-1/4 w-1/2 h-60 bg-gradient-to-b from-blue-400/10 to-transparent transform -rotate-45 blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-1/2 h-60 bg-gradient-to-t from-orange-400/10 to-transparent transform rotate-45 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-4">Why We're the Best Choice?</h2>
          
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
                stroke="url(#why-us-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                variants={wavyPathVariant}
              />
              <defs>
                <linearGradient id="why-us-gradient" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2563EB"/>
                  <stop offset="1" stopColor="#F97316"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what makes SkillCurve the preferred choice for students seeking quality education.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-blue-600/70 via-blue-500/30 to-transparent"></div>
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
              alt="Student using laptop" 
              fill
              style={{objectFit: "cover"}}
              className="rounded-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full flex items-center justify-center text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Top Course Comparison</h3>
                <p className="text-gray-700">Compare courses from leading providers to find the perfect match for your goals.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full flex items-center justify-center text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Exclusive Benefits</h3>
                <p className="text-gray-700">Access scholarships, special pricing, and flexible payment options for your education.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full flex items-center justify-center text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Comprehensive Support</h3>
                <p className="text-gray-700">Enjoy continuous guidance and assistance throughout your educational journey.</p>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-6"
            >
              <Link href="/why-us">
                <span className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                  Why Choose Us
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 