"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/components/utils/animations";

export default function UniversitiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // University data organized by Indian states
 
  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0052CC] to-[#003D99] py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay"
            }}></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f8fafc" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4"
          >
            Indian Academic Network
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Partner Universities
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access world-class education across India through our extensive network of prestigious partner institutions
          </motion.p>
        </div>
      </section>

      {/* University Logos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Trusted University Partners</h2>
            <p className="mt-2 text-gray-600">Prestigious institutions across India that collaborate with our programs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {/* Using real university logos from UniversityLogosSection component */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/Manipal Logo.png"
                  alt="Manipal University Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Manipal University</h3>
              <Link href="/universities/partners/manipal" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/jain University logo.jpeg"
                  alt="Jain University Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Jain University</h3>
              <Link href="/universities/partners/jain" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/Lpu Logo.png"
                  alt="LPU - Lovely Professional University Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">LPU - Lovely Professional University</h3>
              <Link href="/universities/partners/lpu" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/Amity Logo.png"
                  alt="Amity University Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Amity University</h3>
              <Link href="/universities/partners/amity" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/MasterUnion Logo.jpeg"
                  alt="Master Union Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Master Union</h3>
              <Link href="/universities/partners/masterunion" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-all duration-300">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src="/images/university-logos/Svy University Logo.jpeg"
                  alt="S-Vyasa University Logo"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">S-VYASA 
                Deemed to be University</h3>
              <Link href="/universities/partners/svyasa" className="mt-2 text-sm text-[#0052CC] hover:text-[#003D99] font-medium flex items-center gap-1">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link href="/courses">
              <button className="bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#003D99] hover:to-[#002266] text-white py-3 px-8 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                View All Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      

      {/* Featured University */}
       

      {/* University Grid */}
      

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our University Partnerships</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our strategic partnerships with top universities across India create exceptional opportunities for our students</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Prestigious Credentials",
                description: "Earn degrees from some of the most respected universities in India, enhancing your career prospects nationwide and globally."
              },
              {
                icon: "🌎",
                title: "Cultural Diversity",
                description: "Study across different Indian states, experiencing the rich cultural diversity and regional perspectives our country offers."
              },
              {
                icon: "🤝",
                title: "Dual Degree Programs",
                description: "Opportunities to earn multiple degrees from different prestigious institutions simultaneously."
              },
              {
                icon: "🔬",
                title: "Research Opportunities",
                description: "Participate in groundbreaking research projects at India's leading research institutions and innovation centers."
              },
              {
                icon: "💼",
                title: "Professional Networks",
                description: "Access to vast alumni networks spanning multiple industries and regions across India's growing economy."
              },
              {
                icon: "🚀",
                title: "Career Advancement",
                description: "Enhanced employment opportunities with leading Indian companies and multinational organizations."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      
      
      {/* CTA Section */}
       
    </main>
  );
} 