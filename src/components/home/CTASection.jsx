"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/utils/animations";
import { trackButtonClick } from "@/components/GoogleAnalytics";
import { trackMetaButtonClick, trackMetaConsultationRequest } from "@/components/MetaPixel";

export default function CallToActionSection() {
  const handleConsultationClick = () => {
    // Track button click in Google Analytics
    trackButtonClick('schedule_consultation_cta', 'cta');

    // Track button click in Meta Pixel
    trackMetaButtonClick('schedule_consultation_cta', 'cta');
    trackMetaConsultationRequest();

    // Dispatch custom event to trigger the popup form
    window.dispatchEvent(new Event("showConsultationPopup"));
  };

  const handleBrowseCoursesClick = () => {
    // Track button click in Google Analytics
    trackButtonClick('browse_courses_cta', 'cta');

    // Track button click in Meta Pixel
    trackMetaButtonClick('browse_courses_cta', 'cta');
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] skew-y-3 z-0 shadow-xl"></div>
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-1/3 -translate-x-1/2 text-white/5" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,0 100,0 0,100" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-full w-1/3 translate-x-1/2 text-white/5" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center transform -skew-y-3">
          <div className="transform skew-y-3">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] inline-block text-transparent bg-clip-text">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let our experts guide you through every step of the process, from selecting the right course to securing admission at your dream university.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button 
                  onClick={handleConsultationClick}
                  className="bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-xl shadow-lg shadow-blue-200/50"
                >
                  Schedule A Free Consultation
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/courses">
                  <button
                    className="bg-gradient-to-r from-[#FF6B00] to-[#FF9D00] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-xl shadow-lg shadow-orange-200/50"
                    onClick={handleBrowseCoursesClick}
                  >
                    Browse Our Courses
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 