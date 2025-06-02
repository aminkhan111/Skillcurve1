"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, staggerContainer, cardVariants } from "@/components/utils/animations";
import PopupForm from "@/components/PopupForm";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleShowPopup = () => {
    // Create and dispatch a custom event to show the popup
    const event = new Event('showConsultationPopup');
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen">
      <PopupForm />
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
            alt="Team collaboration" 
            fill
            priority
            style={{objectFit: "cover"}}
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 to-blue-800/85"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-orange-500 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">About Us</span>
            </h1>
            <motion.div 
              className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            <h2 className="text-2xl md:text-4xl font-light italic mb-6">
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Shaping Careers. Empowering Futures.</span>
            </h2>
            <p className="text-lg md:text-xl max-w-3xl">
              At SkillCurve, we believe education should be accessible, practical, and career-focused. 
              Founded by passionate educators and professionals, we aim to bridge the gap between learning and employability.
            </p>
          </motion.div>
        </div>
        
        {/* Enhanced Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Our Mission" 
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 via-blue-600/30 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">Our Mission</h2>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 mb-6 rounded-full"></div>
                <p className="text-xl text-gray-700 mb-6">
                  To make quality education, skill development, and career success a reality for every learner.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a student starting your academic journey, a professional aiming to upskill, 
                  or a career switcher seeking guidance—SkillCurve is your trusted partner.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={handleShowPopup}
                    className="py-3 px-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Schedule a Consultation
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-4">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to education and career development.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Value 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-blue-500/10 p-3 w-16 h-16 rounded-full mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text group-hover:text-transparent transition-all duration-300">Accessibility</h3>
              <p className="text-gray-600">
                We believe quality education should be accessible to all. Our programs are designed to remove barriers and open doors.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-orange-500/10 p-3 w-16 h-16 rounded-full mb-6 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text group-hover:text-transparent transition-all duration-300">Innovation</h3>
              <p className="text-gray-600">
                We constantly evolve our approaches and technologies to deliver cutting-edge learning experiences and career solutions.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="bg-blue-500/10 p-3 w-16 h-16 rounded-full mb-6 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text group-hover:text-transparent transition-all duration-300">Mentorship</h3>
              <p className="text-gray-600">
                We believe in personal guidance. Our industry experts and career mentors provide the support needed for success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-4">Meet Our Team</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by founders with extensive experience in education and business.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Founder 1 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                  SB
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text group-hover:text-transparent mb-1 transition-all duration-300">Shahinul Barbhuiya</h3>
                  <p className="text-orange-500 font-medium mb-4">Co-Founder & Chief Executive Officer (CEO)</p>
                  <p className="text-gray-600">
                    A visionary leader with a background in education and product management, Shahinul oversees SkillCurve's strategic direction and growth, ensuring all decisions align with our core mission: empowering students and professionals with accessible, high-quality education and career support.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                  BF
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text group-hover:text-transparent mb-1 transition-all duration-300">Baba Fareed</h3>
                  <p className="text-blue-600 font-medium mb-4">Co-Founder & Chief Business Officer (CBO)</p>
                  <p className="text-gray-600">
                    With over 8 years of experience in the edtech industry, Baba has led admissions, sales, and student acquisition teams at top edtech companies. A former Inside Sales leader and entrepreneur, he drives growth and innovation in the online learning space at SkillCurve.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#0052CC]/10 to-[#FF6B00]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF6B00]/10 to-[#0052CC]/10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="bg-white/30 backdrop-blur-sm py-6 px-6 rounded-2xl border border-white/20 shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0052CC]/20 to-[#FF6B00]/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-gradient-to-br from-[#FF6B00]/20 to-[#0052CC]/20 blur-3xl"></div>
            
            {/* Animated floating elements */}
            <motion.div 
              className="absolute top-8 right-16 w-10 h-10 rounded-full bg-gradient-to-r from-[#0052CC]/60 to-[#0052CC]/40"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-16 w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B00]/60 to-[#FF6B00]/40"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-3 py-1 px-4 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 text-[#0052CC] text-xs font-semibold"
              >
                COMING SOON
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B00] bg-clip-text text-transparent mb-2">
                We Are Building Something Amazing
              </h2>
              
              <div className="w-20 h-1 mx-auto mb-4 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
              
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-5">
                Stay tuned for exciting new features, programs, and resources that will transform your learning experience!
              </p>
              
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleShowPopup}
                  className="relative inline-block group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-md blur-md opacity-70 transform transition-transform group-hover:scale-105"></span>
                  <span className="relative block bg-gradient-to-r from-[#0052CC] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#0052CC] text-white py-2 px-6 rounded-md font-medium transition-all duration-300">
                    Get Notified
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2684&q=80" 
            alt="Education Background" 
            fill
            style={{objectFit: "cover"}}
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-orange-700/30 animate-gradient"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Join Our Educational Journey</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Be part of our mission to transform education and career development for learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button 
                  onClick={handleShowPopup}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-8 rounded-md font-medium text-lg w-full sm:w-auto shadow-lg hover:shadow-orange-500/25 transition-all">
                  Get Started Today
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md font-medium text-lg w-full sm:w-auto transition-all hover:shadow-lg hover:shadow-white/10">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 