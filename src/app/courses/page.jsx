"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/utils/animations";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle window width check only on client side
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Course data organized by program type
  const coursesData = {
    undergraduate: [
      {
        id: 1,
        title: "Undergraduate Programme in Technology & Business Management",
        description: "Gain hands-on business experience, with accredited degree from Delhi University or Illinois Institute of Technology, Chicago.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 4",
          status: "Closing soon",
          duration: "4 Years",
          yearDetails: "3 years at Masters' Union with optional 1-year at Illinois Tech, US",
          campus: "On Campus",
          residentialOption: "Opt-in Residential"
        }
      },
      {
        id: 2,
        title: "Undergraduate Programme in Psychology & Marketing",
        description: "Apply behavioural psychology to real-world marketing, with accredited degree from Delhi University or Illinois Institute of Technology, Chicago.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 4",
          status: "Closing soon",
          duration: "4 Years",
          yearDetails: "3 years at Masters' Union with optional 1-year at Illinois Tech, US",
          campus: "On Campus",
          residentialOption: "Opt-in Residential"
        }
      },
      {
        id: 3,
        title: "Undergraduate Programme in Data Science & AI",
        description: "Dive into AI Applications with curriculum designed with industry giants like PwC & Ola Krutrim & accredited degree from IITG/ IITM or Illinois Tech, US.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22731cc35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1581092160607-ee22731cc35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          deadline: "Application Deadline",
          date: "18th June '25",
          duration: "4 Years",
          yearDetails: "3 years at Masters' Union with optional 1-year at Illinois Tech, US",
          campus: "On Campus",
          residentialOption: "Opt-in Residential"
        }
      }
    ],
    postgraduate: [
      {
        id: 4,
        title: "Master of Business Administration (MBA)",
        description: "Accelerate your career with our industry-focused MBA designed for future leaders.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          deadline: "Application Deadline",
          date: "30th May '25",
          duration: "2 Years",
          yearDetails: "Full-time with internship opportunities",
          campus: "On Campus",
          residentialOption: "Opt-in Residential"
        }
      },
      {
        id: 5,
        title: "Master of Data Science",
        description: "Master cutting-edge data science techniques and technologies with real-world projects.",
        image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 3",
          status: "Closing in 2 weeks",
          duration: "18 Months",
          yearDetails: "Intensive program with industry capstone",
          campus: "On Campus/Online Hybrid",
          residentialOption: "Opt-in Residential"
        }
      },
      {
        id: 6,
        title: "Master of Digital Marketing",
        description: "Become an expert in digital marketing strategies with courses taught by industry leaders.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 2",
          status: "Applications open",
          duration: "1 Year",
          yearDetails: "Fast-track program with certifications",
          campus: "Flexible Learning",
          residentialOption: "Remote Learning Available"
        }
      }
    ],
    skillDevelopment: [
      {
        id: 7,
        title: "Professional Certificate in Web Development",
        description: "Master modern web development technologies and build a professional portfolio of web applications.",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          deadline: "Rolling Admissions",
          date: "Next batch: Sept '25",
          duration: "6 Months",
          yearDetails: "Flexible schedule with hands-on projects",
          campus: "Online with Live Sessions",
          residentialOption: "Virtual Learning"
        }
      },
      {
        id: 8,
        title: "Data Analytics Bootcamp",
        description: "Gain in-demand data skills with our intensive bootcamp focused on practical application and industry tools.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          deadline: "Application Deadline",
          date: "15th July '25",
          duration: "3 Months",
          yearDetails: "Intensive full-time program with job placement",
          campus: "Hybrid Format",
          residentialOption: "Weekend In-Person Sessions"
        }
      },
      {
        id: 9,
        title: "UI/UX Design Certification",
        description: "Learn user-centered design principles and create stunning interfaces that deliver exceptional user experiences.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 1",
          status: "Early applications",
          duration: "4 Months",
          yearDetails: "Part-time with portfolio development",
          campus: "Blended Learning",
          residentialOption: "Optional Design Sprints"
        }
      },
      {
        id: 10,
        title: "High-Order Thinking Skills (HOTS) Development",
        description: "Develop critical thinking, analysis, evaluation, and creation skills that drive innovation and problem-solving in any career.",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          round: "Round 2",
          status: "Applications open",
          duration: "4 Months",
          yearDetails: "Interactive learning experiences with real-world projects",
          campus: "Blended Learning",
          residentialOption: "Optional In-Person Workshops"
        }
      },
      {
        id: 11,
        title: "Advanced Digital Marketing Certification",
        description: "Master SEO, social media marketing, email campaigns, and content strategy to excel in this high-demand field.",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        videoThumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        details: {
          deadline: "Application Deadline",
          date: "20th August '25",
          duration: "5 Months",
          yearDetails: "Practical training with industry projects",
          campus: "Online with Live Sessions",
          residentialOption: "Virtual Learning Environment"
        }
      }
    ]
  };

  return (
    <main className="bg-slate-50 overflow-x-hidden max-w-[100vw]">
      {/* Hero Section - Enhanced with more visual elements and better mobile responsiveness */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 lg:py-32 overflow-hidden px-4 md:px-0">
        {/* Animated floating shapes */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-orange-500 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-300 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        {/* Additional decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-8 md:w-12 h-8 md:h-12 bg-orange-400 rounded-full opacity-20 blur-lg"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-10 md:w-16 h-10 md:h-16 bg-blue-400 rounded-full opacity-20 blur-lg"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-1/2 transform translate-x-1/3 text-white/5" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,0 100,0 50,100 0,100" />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#f8fafc" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Enhanced headline with 3D text effect */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4 md:mb-6 drop-shadow-md">
                Our Programmes
              </h1>
              <div className="absolute -inset-1 -z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800/10 blur-sm select-none">
                Our Programmes
              </div>
            </div>
            
            <motion.div 
              className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "6rem", "@media (min-width: 768px)": { width: "8rem" } }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover world-class education designed to launch and accelerate your career
            </motion.p>
            
            {/* Added a call to action button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 px-6 sm:px-8 rounded-md font-medium text-base sm:text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Store in localStorage that we're manually showing the popup
                  localStorage.setItem("popupShown", "true");
                  
                  // Dispatch a custom event that the PopupForm component will listen for
                  const event = new Event("showConsultationPopup");
                  window.dispatchEvent(event);
                }}
              >
                Explore Your Future
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation - Improved for mobile */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl md:rounded-2xl p-1 flex flex-col sm:flex-row overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { id: "undergraduate", label: "Undergraduate" },
              { id: "postgraduate", label: "Postgraduate" },
              { id: "skillDevelopment", label: "Skills" }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 sm:py-4 px-4 sm:px-6 text-center rounded-lg sm:rounded-xl transition-all text-sm sm:text-base flex-1 ${
                  activeTab === tab.id
                    ? "font-bold"
                    : "text-white hover:text-orange-200"
                }`}
                style={{
                  background: activeTab === tab.id ? "white" : "transparent",
                  color: activeTab === tab.id ? "#2563eb" : "",
                }}
                whileHover={activeTab !== tab.id ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.97 }}
              >
                {/* Adding a gradient span for active state */}
                {activeTab === tab.id ? (
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent font-extrabold text-lg sm:text-xl">
                    {tab.id === "skillDevelopment" && isMobile ? "Skills" : tab.label}
                  </span>
                ) : (
                  <span className="font-semibold">
                    {tab.id === "skillDevelopment" && isMobile ? "Skills" : tab.label}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Grid - Improved spacing for mobile */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {coursesData[activeTab].map((course, index) => (
              <motion.div
                key={course.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                custom={index}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4
                }}
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  <Image
                    src={course.videoThumbnail}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/* Course tag */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs py-1 px-3 rounded-full font-medium">
                    {activeTab === "undergraduate" ? "Undergraduate" : 
                     activeTab === "postgraduate" ? "Postgraduate" : "Skill Development"}
                  </div>
                </div>

                {/* Course Information - Improved padding for mobile */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-orange-600">{course.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{course.description}</p>
                  
                  {/* Course Details - More compact on mobile */}
                  <div className="space-y-3 sm:space-y-5 mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs sm:text-sm text-gray-500">{course.details.round || course.details.deadline}</p>
                        <p className="text-xs sm:text-sm font-medium">{course.details.status || course.details.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs sm:text-sm text-gray-500">{course.details.duration}</p>
                        <p className="text-xs sm:text-sm font-medium">{course.details.yearDetails}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs sm:text-sm text-gray-500">{course.details.campus}</p>
                        <p className="text-xs sm:text-sm font-medium">{course.details.residentialOption}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/coming-soon">
                    <motion.button 
                      className="w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-md transition-all font-medium relative overflow-hidden group-hover:shadow-lg text-sm sm:text-base"
                      whileHover={{ 
                        backgroundImage: "linear-gradient(to right, #f97316, #ea580c)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="relative z-10">View Details</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
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
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-blue-600/20 to-orange-500/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-600/20 blur-3xl"></div>
            
            {/* Animated floating elements */}
            <motion.div 
              className="absolute top-8 right-16 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600/60 to-blue-600/40"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-8 left-16 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500/60 to-orange-500/40"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            
            <div className="text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-3 py-1 px-4 rounded-full bg-gradient-to-r from-blue-600/10 to-orange-500/10 text-blue-600 text-xs font-semibold"
              >
                COMING SOON
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                New Courses Being Developed
              </h2>
              
              <div className="w-20 h-1 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
              
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-5">
                We're developing innovative courses in AI, sustainable business, and healthcare technology. Be the first to know when they launch!
              </p>
              
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-block group"
                  onClick={() => {
                    // Store in localStorage that we're manually showing the popup
                    localStorage.setItem("popupShown", "true");
                    
                    // Dispatch a custom event that the PopupForm component will listen for
                    const event = new Event("showConsultationPopup");
                    window.dispatchEvent(event);
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-md blur-md opacity-70 transform transition-transform group-hover:scale-105"></span>
                  <span className="relative block bg-gradient-to-r from-blue-600 to-orange-500 hover:from-orange-500 hover:to-blue-600 text-white py-2 px-6 rounded-md font-medium transition-all duration-300">
                    Get Pre-Consultation
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section - Improved for mobile */}
      <section className="py-10 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-36 md:w-64 h-36 md:h-64 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-36 md:w-64 h-36 md:h-64 bg-orange-100 rounded-full opacity-60 blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-6">Why Study With Us?</h2>
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  className="flex"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h5 className="text-base sm:text-lg font-medium text-gray-900">Industry-Aligned Curriculum</h5>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Our courses are designed in collaboration with industry leaders to ensure you learn skills that are in demand.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h5 className="text-base sm:text-lg font-medium text-gray-900">Expert Faculty</h5>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Learn from experienced professors and industry practitioners who bring real-world knowledge to the classroom.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h5 className="text-base sm:text-lg font-medium text-gray-900">Global Opportunities</h5>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Gain international exposure with our exchange programs and global industry connections.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-64 sm:h-80 lg:h-auto rounded-xl md:rounded-2xl overflow-hidden shadow-xl mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80" 
                alt="Campus Life" 
                fill
                className="object-cover hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium text-base sm:text-lg">Experience the campus life</p>
                <p className="text-xs sm:text-sm text-white/80">Join a thriving community of learners and innovators</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Improved for mobile */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-orange-500 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-blue-300 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Start Your Educational Journey Today</h2>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
              Get in touch with our admissions team to learn more about our programs and find the right fit for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-md font-medium text-base sm:text-lg transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Store in localStorage that we're manually showing the popup
                  localStorage.setItem("popupShown", "true");
                  
                  // Dispatch a custom event that the PopupForm component will listen for
                  const event = new Event("showConsultationPopup");
                  window.dispatchEvent(event);
                }}
              >
                Apply Now
              </motion.button>
              <Link href="/coming-soon">
                <motion.button 
                  className="bg-transparent border-2 border-white text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-md font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Brochure
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Improved for mobile */}
      <section className="py-10 md:py-16 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-36 md:w-64 h-36 md:h-64 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-36 md:w-64 h-36 md:h-64 bg-orange-100 rounded-full opacity-60 blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">Frequently Asked Questions</h2>
            <div className="w-16 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">Find answers to common questions about our programs, admissions process, and more.</p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {[
              {
                question: "What are the eligibility requirements for international students?",
                answer: "International students need to meet the same academic requirements as domestic students. Additionally, they need to demonstrate English proficiency through TOEFL, IELTS, or other recognized tests."
              },
              {
                question: "Is financial aid available for these programs?",
                answer: "Yes, we offer various scholarships, grants, and financial aid packages based on merit and need. Our financial aid office can help you explore all available options."
              },
              {
                question: "Can I transfer credits from another institution?",
                answer: "Yes, we accept transfer credits from accredited institutions. The number of credits that can be transferred depends on the program and the courses you've taken."
              },
              {
                question: "What career support services are available to students?",
                answer: "We offer comprehensive career services including resume building, interview preparation, networking events, industry connections, and job placement assistance."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 