"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/components/utils/animations";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Wave animation for SVG paths
  const waveVariants = {
    animate: {
      x: [0, -100],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  };

  const services = [
    {
      id: 1,
      icon: "🎓",
      title: "Admissions for Online Degree Programs",
      description: "We help you get enrolled in UGC-recognized online undergraduate and postgraduate degree programs from top institutions. From course selection to application assistance—we simplify it all.",
      bullets: [
        "Undergraduate & Postgraduate Programs",
        "Personalized Admission Guidance",
        "Support Throughout the Process"
      ],
      cta: {
        text: "Browse Degrees",
        link: "/degrees"
      },
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      color: "from-[#0052CC] to-[#0052CC]/70",
      iconBg: "bg-gradient-to-r from-[#0052CC] to-[#0052CC]/80"
    },
    {
      id: 2,
      icon: "💡",
      title: "Skill Development Courses",
      description: "Acquire high-impact skills that employers value. Our course offerings are tailored to current industry demands, with flexible formats for learners at any stage.",
      bullets: [
        "Technology (Python, Data Science, Full-Stack, etc.)",
        "Business & Marketing",
        "Soft Skills & Communication",
        "Workshops & Masterclasses"
      ],
      cta: {
        text: "Explore Courses",
        link: "/courses"
      },
      image: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      color: "from-[#FF6B00] to-[#FF6B00]/70",
      iconBg: "bg-gradient-to-r from-[#FF6B00] to-[#FF6B00]/80"
    },
    {
      id: 3,
      icon: "💼",
      title: "Placement Support",
      description: "We go beyond training by providing real-time career support to ensure you're job-ready.",
      bullets: [
        "Resume Building & LinkedIn Optimization",
        "Mock Interviews with Experts",
        "Access to Job Portals & Company Referrals",
        "1:1 Career Coaching"
      ],
      cta: {
        text: "Get Placement Help",
        link: "/placement"
      },
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      color: "from-[#0052CC] to-[#FF6B00]",
      iconBg: "bg-gradient-to-r from-[#0052CC] to-[#0052CC]/80"
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Enhanced Gradients and Waves */}
      <section className="relative bg-gradient-to-r from-[#0052CC] via-[#1A6AE2] to-[#003D99] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated wave background */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/2" preserveAspectRatio="none">
              <motion.path 
                variants={waveVariants}
                animate="animate"
                fill="rgba(255, 255, 255, 0.05)" 
                d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></motion.path>
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/3" preserveAspectRatio="none">
              <motion.path 
                variants={waveVariants}
                animate="animate"
                fill="rgba(255, 255, 255, 0.08)" 
                d="M0,32L48,64C96,96,192,160,288,181.3C384,203,480,181,576,154.7C672,128,768,96,864,80C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></motion.path>
            </svg>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#FF6B00]/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#0052CC]/20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            className="inline-block mb-4 py-2 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            OUR SERVICES
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-white text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive education and career development solutions tailored to your needs
          </motion.p>
          
          {/* Floating elements for visual interest */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#FF6B00]/20 backdrop-blur-md hidden md:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-[#0052CC]/20 backdrop-blur-md hidden md:block"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
        </div>
      </section>

      {/* Services Overview with Enhanced Cards */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0052CC]/5 group-hover:to-[#0052CC]/10 transition-all duration-300"></div>
                
                <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-br from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description.split('.')[0]}.</p>
                
                <Link href={service.cta.link} className="inline-block relative group">
                  <span className="text-[#0052CC] font-medium group-hover:text-[#FF6B00] transition-colors duration-300">
                    {service.cta.text} 
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services with Enhanced Visuals */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0052CC]/5 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FF6B00]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-32"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.2 } }
                }}
              >
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="relative"
                >
                  {/* Enhanced card effect with deeper gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl transform rotate-3 scale-105`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl transform rotate-1 scale-102 opacity-70`}></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video border-2 border-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-tl ${service.color} opacity-30`}></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={index % 2 === 1 ? slideInLeft : slideInRight}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0052CC] to-[#003D99] bg-clip-text text-transparent">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.bullets.map((bullet, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-1.5 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full mr-3 mt-1 flex-shrink-0">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link href={service.cta.link}>
                      <span className="relative inline-block">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-md blur-md opacity-70 transform transition-transform group-hover:scale-105"></span>
                        <button className="relative bg-gradient-to-r from-[#0052CC] to-[#FF6B00] hover:from-[#FF6B00] hover:to-[#0052CC] text-white py-3 px-8 rounded-md font-medium transition-all duration-300 shadow-lg">
                          {service.cta.text}
                        </button>
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services With Enhanced Styling */}
      <section className="py-24 relative overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F8] via-[#F5F8FC] to-[#E6F0FF] z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B00]"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#0052CC]/10 to-[#FF6B00]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6B00]/10 to-[#0052CC]/10 blur-3xl"></div>
        
        {/* Wavy decorative pattern */}
        <div className="absolute top-10 left-0 right-0 overflow-hidden opacity-50">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="rgba(0, 82, 204, 0.05)" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 py-2 px-6 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 text-[#0052CC] text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WHY CHOOSE US
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B00] bg-clip-text text-transparent mb-4">Why Choose Our Services</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional educational services that help you achieve your career goals.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "⭐",
                title: "Expert Guidance",
                description: "Our advisors bring years of experience in education and career counseling.",
                color: "from-[#0052CC] to-[#003D99]"
              },
              {
                icon: "🔍",
                title: "Personalized Approach",
                description: "We tailor our services to your unique goals, preferences, and learning style.",
                color: "from-[#FF6B00] to-[#FF9500]"
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                description: "From enrollment to placement, we're with you every step of the way.",
                color: "from-[#0052CC] to-[#FF6B00]"
              },
              {
                icon: "📊",
                title: "Proven Results",
                description: "Our success rates speak for themselves, with high placement percentages.",
                color: "from-[#FF6B00] to-[#0052CC]"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative group"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {/* Gradient background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0052CC]/5 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                
                {/* Bottom gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                
                <div className={`w-14 h-14 rounded-full mb-5 flex items-center justify-center shadow-lg bg-gradient-to-r ${feature.color}`}>
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#0052CC] group-hover:to-[#FF6B00] transition-all duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials with Enhanced Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6B00]/5 to-[#0052CC]/5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 py-2 px-6 rounded-full bg-gradient-to-r from-[#0052CC]/10 to-[#FF6B00]/10 text-[#0052CC] text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              TESTIMONIALS
            </motion.div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B00] bg-clip-text text-transparent mb-4">What Our Students Say</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our students have to say about their experience with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The career counseling services at SkillCurve helped me identify my strengths and find the perfect course. I'm now working at my dream company!",
                name: "Priya Sharma",
                title: "Software Engineer",
                image: "https://randomuser.me/api/portraits/women/32.jpg"
              },
              {
                quote: "The placement assistance was exceptional. From resume building to interview preparation, they prepared me for everything. Highly recommended!",
                name: "Rahul Verma",
                title: "Digital Marketing Manager",
                image: "https://randomuser.me/api/portraits/men/44.jpg"
              },
              {
                quote: "Their skill development program in data science transformed my career. The practical projects and industry-aligned curriculum made all the difference.",
                name: "Anjali Desai",
                title: "Data Analyst",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 to-[#FF6B00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 text-5xl font-serif text-[#0052CC]">"</div>
                
                <div className="flex items-center mb-6">
                  <div className="mr-4 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0052CC] to-[#FF6B00] blur-sm -m-0.5 opacity-70"></div>
                    <div className="relative">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={60} 
                        height={60} 
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background gradient with pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC] to-[#003D99] overflow-hidden">
          {/* Animated waves */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/2" preserveAspectRatio="none">
              <motion.path 
                variants={waveVariants}
                animate="animate"
                fill="rgba(255, 255, 255, 0.05)" 
                d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></motion.path>
            </svg>
          </motion.div>
          
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}></div>
          
          {/* Floating elements for visual interest */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#FF6B00]/30 backdrop-blur-md hidden md:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hidden md:block"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-white text-transparent bg-clip-text">Ready to Transform Your Career?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're looking to pursue a degree, acquire new skills, or find your dream job, we're here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                // Dispatch the custom event to show the popup form
                const event = new CustomEvent("showConsultationPopup");
                window.dispatchEvent(event);
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF9500] rounded-md blur-md opacity-70 transform transition-transform group-hover:scale-105"></span>
              <span className="relative block bg-gradient-to-r from-[#FF6B00] to-[#FF9500] hover:from-[#FF9500] hover:to-[#FF6B00] text-white py-4 px-8 rounded-md font-medium text-lg transition-all duration-300 shadow-lg">
                Schedule A Free Consultation
              </span>
            </motion.button>
            <motion.button 
              className="relative group bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 rounded-md border-2 border-white/50 blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></span>
              <span className="relative block border-2 border-white text-white py-4 px-8 rounded-md font-medium text-lg transition-all duration-300 hover:bg-white/10">
                Contact Us
              </span>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
} 