"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function JobsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobs = [
    {
      title: "Senior Data Scientist",
      company: "SkillCurve",
      location: "Noida",
      experience: "3-6 Years",
      type: "Full Time",
      category: "Data Science",
      description: "Lead data science initiatives and develop ML models to drive business decisions.",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"]
    },
    {
      title: "Frontend Developer (React)",
      company: "SkillCurve",
      location: "Remote",
      experience: "1-3 Years",
      type: "Full Time",
      category: "Development",
      description: "Build responsive and interactive web applications using modern frontend technologies.",
      skills: ["React", "JavaScript", "HTML/CSS", "NextJS"]
    },
    {
      title: "Backend Developer (Node.js)",
      company: "SkillCurve",
      location: "Noida",
      experience: "2-4 Years",
      type: "Full Time",
      category: "Development",
      description: "Design and develop scalable backend services and APIs for our platform.",
      skills: ["Node.js", "Express", "MongoDB", "API Design"]
    },
    {
      title: "DevOps Engineer",
      company: "SkillCurve",
      location: "Hybrid",
      experience: "3-5 Years",
      type: "Full Time",
      category: "DevOps",
      description: "Implement and manage CI/CD pipelines and cloud infrastructure.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "UI/UX Designer",
      company: "SkillCurve",
      location: "Noida",
      experience: "2-4 Years",
      type: "Full Time",
      category: "Design",
      description: "Create beautiful, intuitive interfaces for web and mobile applications.",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
    },
    {
      title: "Product Manager",
      company: "SkillCurve",
      location: "Noida",
      experience: "3-6 Years",
      type: "Full Time",
      category: "Management",
      description: "Drive product vision, strategy, and roadmap to deliver exceptional user experiences.",
      skills: ["Product Strategy", "Agile", "Market Research", "Data Analysis"]
    },
    {
      title: "Technical Content Writer",
      company: "SkillCurve",
      location: "Remote",
      experience: "1-3 Years",
      type: "Part Time",
      category: "Content",
      description: "Create high-quality technical content including tutorials, guides, and documentation.",
      skills: ["Technical Writing", "SEO", "Documentation", "Markdown"]
    },
    {
      title: "Machine Learning Engineer",
      company: "SkillCurve",
      location: "Noida",
      experience: "2-5 Years",
      type: "Full Time",
      category: "Data Science",
      description: "Develop and deploy machine learning models for production environments.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"]
    },
  ];

  const categories = ["All", ...new Set(jobs.map(job => job.category))];
  const filteredJobs = activeFilter === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeFilter);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0052CC] to-[#FF6B35] text-white overflow-hidden">
        {/* Mesh gradient background overlay */}
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover bg-center"></div>
        </div>
        
        {/* White overlay elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large glass panels */}
          <div className="absolute bottom-40 -left-20 w-80 h-80 bg-white opacity-5 rounded-3xl -rotate-12 backdrop-blur-xl"></div>
          
          {/* Horizontal streaks */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
              opacity: [0, 0.07, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-0 h-20 w-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -rotate-3"
          ></motion.div>
          
          <motion.div
            animate={{
              x: ["200%", "-100%"],
              opacity: [0, 0.05, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute top-2/3 left-0 h-10 w-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform rotate-2"
          ></motion.div>
          
          {/* White particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100],
                  opacity: [0, 0.3, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
          
          {/* Pulsing rings */}
          <div className="absolute top-1/3 right-1/4">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
                animate={{
                  width: ["0px", "100px"],
                  height: ["0px", "100px"],
                  opacity: [0.4, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute top-1/4 right-[15%] w-24 h-24 bg-white opacity-5 rounded-full"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 left-[15%] w-16 h-16 bg-white opacity-5 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          
          {/* Abstract shapes */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400 to-transparent opacity-10 rounded-tr-3xl rotate-12"
            animate={{
              rotate: [12, 20, 12],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-bl from-orange-400 to-transparent opacity-10 rounded-bl-3xl -rotate-12"
            animate={{
              rotate: [-12, -20, -12],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          ></motion.div>
          
          {/* Animated dots grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-28 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Find Your</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative inline-block"
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100"> Dream Career</span>
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-orange-500 to-transparent opacity-20 rounded-full z-0"
                  ></motion.span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">With SkillCurve</span>
                </motion.div>
              </h1>
              
              <motion.p 
                className="text-xl max-w-xl mt-6 mb-8 text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                Join our team of innovators and problem-solvers to make an impact while growing your skills in a collaborative environment that values creativity and excellence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link href="#job-listings">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-[#0052CC] font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center"
                  >
                    Browse Openings
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                  >
                    Contact HR
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Stats */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold">20+</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold">100+</div>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
            
            {/* Hero image/illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden md:block relative"
            >
              <div className="relative h-96 w-full">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-dashed border-white border-opacity-30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    
                    <motion.div 
                      className="absolute inset-4 rounded-full border-2 border-dashed border-white border-opacity-20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    
                    <div className="absolute inset-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center overflow-hidden">
                      {/* Unsplash image instead of illustration */}
                      <Image 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                        alt="Team of professionals working together" 
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] to-[#FF6B35] opacity-30 mix-blend-overlay rounded-full"></div>
                    </div>
                    
                    {/* Enhanced floating icons with glass effect */}
                    <motion.div 
                      className="absolute -top-4 right-10 w-20 h-20 bg-gradient-to-br from-[#0052CC] to-blue-400 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backdrop-blur-sm"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-10"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-4 left-10 w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-orange-400 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backdrop-blur-sm"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <div className="absolute inset-0 bg-white opacity-10"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </motion.div>
                    
                    {/* Additional floating elements */}
                    <motion.div
                      className="absolute bottom-20 right-0 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                      animate={{
                        y: [0, -5, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs font-medium">Hiring Active</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Improved wave SVG that fits content better */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 200" 
            className="w-full" 
            preserveAspectRatio="none" 
            style={{ height: "80px" }}
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div id="job-listings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 gap-2"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#0052CC] to-[#FF6B35] text-white font-medium shadow-xl transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:shadow-md hover:scale-105 transform"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredJobs.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-semibold bg-blue-100 text-[#0052CC] px-3 py-1 rounded-full">{job.category}</span>
                    <h2 className="text-xl font-bold mt-2 text-gray-800 group-hover:text-[#0052CC] transition-colors">{job.title}</h2>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-2 mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-blue-50 group-hover:text-[#0052CC] transition-colors">{skill}</span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.experience}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.type}
                  </div>
                </div>
                
                <Link 
                  href={`/jobs/apply?position=${encodeURIComponent(job.title)}`}
                  className="block"
                >
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] rounded-lg text-white font-medium shadow-md transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Apply Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-r from-[#0052CC] to-[#FF6B35] rounded-xl p-8 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Don't See a Position That Fits?</h2>
          <p className="max-w-2xl mx-auto mb-6 relative z-10">
            We're always looking for talented individuals to join our team. Send us your resume and we'll contact you when a suitable position becomes available.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-[#0052CC] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg relative z-10 group"
          >
            Contact HR Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 