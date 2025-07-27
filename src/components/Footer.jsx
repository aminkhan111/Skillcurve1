"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  // Animation state for elements
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-gradient-to-r from-[#00093c] to-[#2d0b00] text-white rounded-tl-[90px] overflow-hidden mt-15">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-1"
          >
            <div className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="SkillCurve Logo" 
                width={150}
                height={40}
                priority
                className="bg-white p-2 rounded-lg hover:shadow-lg transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">SkillCurve</h3>
            <motion.div 
              className="w-12 h-1 bg-gradient-to-r from-white to-transparent mb-4"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                width: ["30px", "50px", "30px"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="mt-4 text-sm text-gray-300">
              Empowering careers through education, counseling, and placement support. Your journey to success starts here.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <motion.div 
              className="w-12 h-1 bg-gradient-to-r from-white to-transparent mb-4"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                width: ["30px", "50px", "30px"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-gray-300 hover:text-white">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <motion.div 
              className="w-12 h-1 bg-gradient-to-r from-white to-transparent mb-4"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                width: ["30px", "50px", "30px"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            />
            <ul className="space-y-2">
              <li>
                <Link href="/universities" className="text-gray-300 hover:text-white">
                  University Partners
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white">
                  Explore Jobs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-gray-300 hover:text-white">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <motion.div 
              className="w-12 h-1 bg-gradient-to-r from-white to-transparent mb-4"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                width: ["30px", "50px", "30px"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
            />
            <p className="text-sm text-gray-300 mb-3">
              Get the latest updates on courses and opportunities.
            </p>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  className="border-2 border-[#FF6B35] px-4 py-2 text-gray-900 focus:ring-[#FF6B35] focus:border-[#FF6B35] block w-full rounded-l-md placeholder-gray-500 outline-none"
                  placeholder="Email address"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF6B35] border-0 px-4 py-2 text-white rounded-r-md hover:bg-[#E55A24] transition-colors duration-300"
                >
                  <span>Join</span>
                </motion.button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-white to-transparent mb-4"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  width: ["30px", "50px", "30px"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 border-t border-gray-700/30 pt-8"
        >
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} SkillCurve. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 