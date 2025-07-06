"use client";

import { motion } from "framer-motion";
import { trackButtonClick } from "@/components/GoogleAnalytics";

export default function HowItWorksSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Function to show consultation popup
  const handleShowConsultation = (e) => {
    e.preventDefault();

    // Track button click
    trackButtonClick('start_journey_how_it_works', 'cta');

    // Store in localStorage that we're manually showing the popup
    localStorage.setItem("popupShown", "true");

    // Dispatch a custom event that the PopupForm component will listen for
    const event = new Event("showConsultationPopup");
    window.dispatchEvent(event);
  };

  const steps = [
    {
      id: "01",
      title: "Sign Up",
      description:
        "Create an account in minutes by providing your details and accessing the student dashboard.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Select a Course",
      description:
        "Browse our wide range of courses, choose your preferred subject, and enroll instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Start Learning",
      description:
        "Access course materials, join interactive lessons, and complete assignments at your own pace.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/95 via-[#0066FF]/90 to-[#FF6B00]/90">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        {/* Decorative circles */}
        <div className="hidden lg:block absolute top-20 right-20 w-64 h-64 border-4 border-white/10 rounded-full"></div>
        <div className="hidden lg:block absolute bottom-20 left-20 w-40 h-40 border-4 border-orange-500/20 rounded-full"></div>
        
        {/* Decorative lines */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm mb-4"
          >
            How It Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Experience Interactive Learning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/90 max-w-3xl mx-auto"
          >
            Discover a wide range of expert-led courses tailored to your personal and professional growth.
          </motion.p>
        </div>

        {/* Steps container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#FF6B00] flex items-center justify-center text-white group-hover:from-[#FF6B00] group-hover:to-[#0052CC] transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <div className="ml-6">
                    <span className="block text-5xl font-bold bg-gradient-to-r from-white to-orange-300 text-transparent bg-clip-text">
                      {step.id}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 flex-grow">{step.description}</p>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-orange-500 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Optional CTA button */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowConsultation}
            className="inline-block bg-gradient-to-r from-[#FF6B00] to-[#FF9D00] hover:from-[#0052CC] hover:to-[#0077FF] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 shadow-xl shadow-blue-900/30"
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </div>
    </section>
  );
} 