"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackCourseInterest } from "@/components/GoogleAnalytics";
import { trackMetaCourseInterest } from "@/components/MetaPixel";
import { cardVariants } from "@/components/utils/animations";

export default function FeaturedCoursesSection() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const updateWidth = () => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        const visibleItems = isMobile ? 1 : 3; // Show fewer items on mobile
        const calculatedMaxIndex = Math.max(0, courses.length - visibleItems);
        setMaxIndex(calculatedMaxIndex);
      };

      updateWidth();
      window.addEventListener('resize', updateWidth);
      
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [width, isMobile]);

  // Function to show consultation popup
  const handleShowConsultation = (e) => {
    e.preventDefault();
    
    // Store in localStorage that we're manually showing the popup
    localStorage.setItem("popupShown", "true");
    
    // Dispatch a custom event that the PopupForm component will listen for
    const event = new Event("showConsultationPopup");
    window.dispatchEvent(event);
  };

  // Auto scroll functionality
  useEffect(() => {
    // Only enable auto-scrolling on non-mobile devices
    if (!isMobile) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          setActiveIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
        }
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [maxIndex, isMobile]);  // Add isMobile as dependency to re-evaluate when screen size changes

  useEffect(() => {
    if (carouselRef.current) {
      // For mobile, center the card precisely
      const cardWidth = isMobile ? carouselRef.current.offsetWidth : carouselRef.current.scrollWidth / 5;
      const scrollAmount = cardWidth * activeIndex;
      
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }, [activeIndex, isMobile]);

  // Navigation functions
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  // Touch event handlers for better mobile experience
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    // Threshold to determine swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < maxIndex) {
        // Swiped left
        handleNextClick();
      } else if (diff < 0 && activeIndex > 0) {
        // Swiped right
        handlePrevClick();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Course data with Unsplash images
  const courses = [
    {
      id: 1,
      title: "Understanding Cloud Computing Essentials",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      category: "Cloud",
      hours: 26,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 2,
      title: "Online Privacy and Security Basics",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Security",
      hours: 26,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 3,
      title: "Mastering Time Management Techniques",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGltZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      category: "Time",
      hours: 26,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 4,
      title: "SQL for Data Science Beginners",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      category: "SQL",
      hours: 18,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 5,
      title: "Python Programming Fundamentals",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      category: "Programming",
      hours: 32,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      category: "Marketing",
      hours: 24,
      certified: true,
      popular: true,
      instructor: "Skill Curve"
    },
    {
      id: 7,
      title: "High-Order Thinking Skills (HOTS) Development",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JpdGljYWwlMjB0aGlua2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      category: "Critical Thinking",
      hours: 32,
      certified: true,
      popular: true,
      instructor: "Skill Curve",
      description: "Develop critical thinking, analysis, evaluation, and creation skills that drive innovation and problem-solving in any career.",
      status: "Round 2",
      applications: "Open",
      duration: "4 Months",
      learningFormat: "Interactive learning experiences with real-world projects",
      format: "Blended Learning",
      features: ["Optional In-Person Workshops"]
    }
  ];

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

  // Arrow animation variants
  const arrowVariants = {
    initial: { opacity: 0.7, scale: 1 },
    hover: { opacity: 1, scale: 1.1 },
    tap: { scale: 0.95 }
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

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
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
        className="absolute top-[25%] right-[15%] w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
      ></motion.div>

      <motion.div 
        className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        custom={1}
      ></motion.div>

      {/* Geometric patterns */}
      <motion.div 
        className="absolute top-[40%] left-[5%] w-40 h-40 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(79, 70, 229, 0.2)" d="M45.5,-51.2C59.1,-34.7,70.3,-17.3,72.5,2.2C74.7,21.7,67.9,43.4,54.2,57.9C40.6,72.3,20.3,79.6,0.8,78.8C-18.7,78,-37.5,69.2,-52.1,54.8C-66.7,40.3,-77.1,20.2,-77.6,-0.5C-78.1,-21.1,-68.7,-42.3,-54.1,-58.8C-39.4,-75.4,-19.7,-87.5,-1.1,-86.3C17.4,-85.1,34.9,-70.7,45.5,-51.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-[10%] right-[5%] w-32 h-32 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(245, 158, 11, 0.2)" d="M48.2,-46.1C58.4,-29.1,60.5,-9.7,58.7,10.4C56.9,30.4,51.2,51,37.2,61C23.3,71,1,70.3,-17.6,62.3C-36.1,54.3,-51,39,-59.1,19.7C-67.2,0.3,-68.6,-23.1,-58.5,-40.8C-48.4,-58.6,-26.8,-70.8,-4.7,-67.2C17.3,-63.5,38,-63.1,48.2,-46.1Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Light rays */}
      <div className="absolute -top-20 left-1/4 w-1/2 h-60 bg-gradient-to-b from-blue-400/10 to-transparent transform -rotate-45 blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-1/2 h-60 bg-gradient-to-t from-orange-400/10 to-transparent transform rotate-45 blur-3xl"></div>
      
      {/* Animated light beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="bg-beam absolute top-[10%] -left-[10%] w-[40%] h-20 bg-gradient-to-r from-blue-400/5 via-blue-500/10 to-indigo-500/5 rounded-full blur-3xl transform -rotate-12"></div>
        <div className="bg-beam absolute bottom-[20%] -right-[5%] w-[35%] h-24 bg-gradient-to-r from-orange-400/5 via-amber-500/10 to-yellow-500/5 rounded-full blur-3xl transform rotate-12" style={{ animationDelay: '3s' }}></div>
        <div className="bg-beam absolute top-[40%] -right-[15%] w-[30%] h-16 bg-gradient-to-r from-green-400/5 via-emerald-500/10 to-teal-500/5 rounded-full blur-3xl transform -rotate-6" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
            Our Popular Courses
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
            Explore our most popular courses from top universities and institutions.
          </p>
        </motion.div>

        {/* Carousel container with navigation arrows */}
        <div className="relative">
          {/* Left Navigation Arrow */}
          <motion.button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-20 md:translate-x-0 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg border border-white/40"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Previous slide"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </motion.button>

          <motion.div 
            ref={carouselRef}
            className="overflow-hidden touch-pan-y px-0 sm:px-4"
            whileTap={{ cursor: "grabbing" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div 
              className={`flex ${isMobile ? 'gap-0' : 'gap-3 sm:gap-6'} pb-8`}
              drag={isMobile ? false : "x"}
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {courses.map((course) => (
                <motion.div 
                  key={course.id}
                  className={`${isMobile ? 'min-w-full' : 'min-w-[280px] sm:min-w-[320px] md:min-w-[350px]'} bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex-shrink-0`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Course image */}
                  <div className="relative h-40 sm:h-48 md:h-52 w-full">
                    <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm py-1 px-2 sm:px-3 rounded-full">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{course.category}</span>
                    </div>
                    <Image 
                      src={course.image} 
                      alt={course.title} 
                      fill
                      style={{objectFit: "cover"}}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Course details */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center mb-3 md:mb-4 text-xs sm:text-sm">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-600">{course.hours} Hours, </span>
                      <span className="text-gray-600 ml-1"> Certified</span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 line-clamp-2">{course.title}</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <span className="text-2xs sm:text-xs font-medium">{course.instructor.slice(0, 2)}</span>
                        </div>
                        <span className="text-gray-700 text-xs sm:text-sm">{course.instructor}</span>
                      </div>
                      
                      <Link href="/coming-soon">
                        <span
                          className="py-1.5 sm:py-2 px-3 sm:px-5 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors text-xs sm:text-sm whitespace-nowrap"
                          onClick={() => {
                            trackCourseInterest(course.title);
                            trackMetaCourseInterest(course.title, course.category);
                          }}
                        >
                          View Course
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Navigation Arrow */}
          <motion.button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-20 md:translate-x-0 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg border border-white/40"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            aria-label="Next slide"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 w-8" 
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Banner - Now placed after the cards & pagination */}
        <motion.div 
          className="mt-12 sm:mt-16 max-w-6xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 backdrop-blur-lg bg-white/20 py-6 sm:py-8 px-4 sm:px-8 rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#0052CC]/30 to-[#FF6B00]/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#FF6B00]/30 to-[#0052CC]/30 blur-3xl"></div>
            
            {/* Animated floating elements */}
            <motion.div 
              className="absolute top-8 right-16 w-10 h-10 rounded-full bg-gradient-to-r from-[#0052CC]/70 to-[#0052CC]/40 shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-16 w-6 h-6 rounded-full bg-gradient-to-r from-[#FF6B00]/70 to-[#FF6B00]/40 shadow-lg"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>

            <motion.div 
              className="absolute top-1/2 right-1/4 w-12 h-12 rounded-md rotate-45 bg-gradient-to-r from-[#00CC99]/40 to-[#00CC99]/20 shadow-lg"
              animate={{ rotate: [45, 90, 45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block mb-3 py-1 px-4 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 text-[#0052CC] text-xs font-semibold backdrop-blur-md border border-white/30"
              >
                COMING SOON
              </motion.div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B00] bg-clip-text text-transparent mb-2">
                We Are Building Something Amazing
              </h3>
              
              <div className="w-32 sm:w-48 h-1.5 ml-0 mb-4 sm:mb-5 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full shadow-sm"></div>
              
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
                Stay tuned for exciting new features and courses that will transform your learning experience!
              </p>
              
              {/* Optional: Countdown or email sign up could go here */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowConsultation}
                className="mt-4 relative inline-block group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-md blur-md opacity-70 transform transition-transform group-hover:scale-105"></span>
                <span className="relative block bg-gradient-to-r from-[#0052CC] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#0052CC] text-white py-2 px-6 rounded-md font-medium text-sm transition-all duration-300">
                  Get Pre-Consultation
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 