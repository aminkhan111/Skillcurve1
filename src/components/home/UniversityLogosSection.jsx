"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { trackUniversityInterest } from "@/components/GoogleAnalytics";
import { trackMetaUniversityInterest } from "@/components/MetaPixel";

export default function UniversityLogosSection() {
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

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Real university logos
  const universityLogos = [
    {
      name: "Manipal University",
      logo: "/images/university-logos/Manipal Logo.png",
      urlPath: "manipal"
    },
     
    {
      name: "LPU - Lovely Professional University",
      logo: "/images/university-logos/Lpu Logo.png",
      urlPath: "lpu"
    },
    
    
    {
      name: "Master Union",
      logo: "/images/university-logos/MasterUnion Logo.jpeg",
      urlPath: "masterunion"
    },
    {
      name: "S-Vyasa University",
      logo: "/images/university-logos/Svy University Logo.jpeg",
      urlPath: "svyasa"
    },
    {
      name: "Woxsen University",
      logo: "/images/university-logos/Wex University.png",
      urlPath: "woxsen"
    },
    {
      name: "NMIMS",
      logo: "/images/university-logos/Nmims Logo.png",
      urlPath: "nmims"
    },
    {
      name: "Parul University",
      logo: "/images/university-logos/Parul Logo.png",
      urlPath: "parul"
    }
  ];

  // Create an array with the components
  const logoComponents = universityLogos.map((university, index) => (
    <div key={`original-${university.name}-${index}`} className="flex-shrink-0">
      <Link href={`/universities/partners/${university.urlPath}`}>
        <div
          className="h-32 w-48 md:w-56 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 mx-2 cursor-pointer hover:shadow-md transition-shadow duration-300"
          onClick={() => {
            trackUniversityInterest(university.name);
            trackMetaUniversityInterest(university.name);
          }}
        >
          <div className="relative h-20 w-full">
            <Image
              src={university.logo}
              alt={`${university.name} Logo`}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center"
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  ));

  // Duplicate logos for seamless infinite scroll effect with unique keys
  const duplicatedLogoComponents = universityLogos.map((university, index) => (
    <div key={`duplicate-${university.name}-${index}`} className="flex-shrink-0">
      <Link href={`/universities/partners/${university.urlPath}`}>
        <div
          className="h-32 w-48 md:w-56 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 mx-2 cursor-pointer hover:shadow-md transition-shadow duration-300"
          onClick={() => {
            trackUniversityInterest(university.name);
            trackMetaUniversityInterest(university.name);
          }}
        >
          <div className="relative h-20 w-full">
            <Image
              src={university.logo}
              alt={`${university.name} Logo`}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center"
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  ));

  // Combine the original and duplicated arrays
  const doubledLogoComponents = [...logoComponents, ...duplicatedLogoComponents];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
      {/* Enhanced background decoration elements */}
      {/* Gradient blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-blue-200/30 via-indigo-300/20 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[15%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-orange-200/30 via-amber-300/20 to-yellow-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-[25%] left-[5%] w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      ></motion.div>

      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-16 h-16 rounded-full bg-orange-500/5 border border-orange-500/10"
        variants={pulseAnimation}
        animate="animate"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
            Our University Partners
          </h2>
          
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
                stroke="url(#gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                variants={wavyPathVariant}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2563EB"/>
                  <stop offset="1" stopColor="#F97316"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Partnered with leading universities and educational institutions across India.
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden w-full">
          {/* Single row - scrolling to the left */}
          <motion.div 
            className="flex items-center space-x-8 md:space-x-12 py-4"
            animate={{
              x: [0, -3000], 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {doubledLogoComponents}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 