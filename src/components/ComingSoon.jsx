"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to a date 30 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <header className="py-6 px-6 md:px-10 w-full">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Return to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-orange-400/10 blur-xl"></div>
              <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-teal-300/10 blur-lg"></div>
              <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full bg-purple-300/10 blur-xl"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  {/* Label */}
                  <motion.div 
                    className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-8 border border-blue-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    COMING SOON
                  </motion.div>
                  
                  {/* Heading */}
                  <motion.h1 
                    className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    We Are Building Something Amazing
                  </motion.h1>
                  
                  {/* Gradient underline */}
                  <motion.div 
                    className="h-1.5 w-48 md:w-64 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] mb-8 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "16rem" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  ></motion.div>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-xl text-gray-600 mb-10 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    We're working on building a revolutionary learning platform that will transform your educational journey. Stay tuned for exciting new features, courses, and learning opportunities tailored just for you.
                  </motion.p>
                  
                  {/* Countdown */}
                  <motion.div 
                    className="grid grid-cols-4 gap-4 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-center">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-800">{countdown.days}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Days</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-800">{countdown.hours}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Hours</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-800">{countdown.minutes}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Minutes</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-800">{countdown.seconds}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">Seconds</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Newsletter form */}
                  <motion.div 
                    className="mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Get notified when we launch:</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                      />
                      <button className="px-6 py-3 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] text-white font-medium rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Notify Me
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <button 
                      onClick={handleConsultationClick}
                      className="px-8 py-4 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] text-white font-medium rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Get Pre-Launch Consultation
                    </button>
                  </motion.div>
                </div>
                
                {/* Illustration */}
                <motion.div 
                  className="hidden lg:block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="relative h-[500px] w-full">
                    <Image
                      src="/images/coming-soon-illustration.svg"
                      alt="Coming Soon Illustration"
                      fill
                      className="object-contain"
                      onError={(e) => {
                        // Fallback if the image doesn't exist
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Fallback if the image doesn't exist */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="text-6xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent">
                          Soon
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center space-x-6">
            {/* Social links */}
            <a href="https://www.instagram.com/skillcurve_careerlabs/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0052CC]">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/skill-curve-619841366/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0052CC]">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://wa.me/919901937926?text=Hi there, can you share more info on this" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0052CC]">
              <span className="sr-only">WhatsApp</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SkillCurve. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon; 