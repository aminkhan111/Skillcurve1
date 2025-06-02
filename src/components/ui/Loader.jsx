"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "./LoadingProvider";

export default function Loader() {
  const { isLoading } = useLoading();
  
  // SVG animation variants
  const shieldVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const barVariants = {
    hidden: { scaleY: 0 },
    visible: (custom) => ({
      scaleY: 1,
      transition: { 
        delay: custom * 0.15, 
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  
  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        delay: 0.4,
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-95 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-32 h-32"
            variants={shieldVariants}
            initial="hidden"
            animate="visible"
          >
            <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Shield background */}
              <motion.path 
                d="M100 0L0 60V130C0 178.513 42.5066 220 100 220C157.493 220 200 178.513 200 130V60L100 0Z" 
                fill="#0052CC"
              />
              
              {/* Bars */}
              <motion.rect 
                x="40" y="140" width="25" height="60" fill="white" 
                variants={barVariants} 
                custom={0}
                initial="hidden"
                animate="visible"
                style={{ originY: 1 }}
              />
              
              <motion.rect 
                x="85" y="110" width="25" height="90" fill="white" 
                variants={barVariants} 
                custom={1}
                initial="hidden"
                animate="visible"
                style={{ originY: 1 }}
              />
              
              <motion.rect 
                x="130" y="80" width="25" height="120" fill="white" 
                variants={barVariants} 
                custom={2}
                initial="hidden"
                animate="visible"
                style={{ originY: 1 }}
              />
              
              {/* Arrow */}
              <motion.path 
                d="M50 90C80 60 100 60 145 70C120 85 100 110 130 150" 
                stroke="white" 
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
            
            {/* Spinner around the logo */}
            <motion.div 
              className="absolute inset-0 border-4 border-t-transparent border-[#0052CC] rounded-full -m-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 