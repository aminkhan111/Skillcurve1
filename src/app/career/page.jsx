"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CareerPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample career paths
  const careerPaths = [
    {
      title: "Technical Career Path",
      description: "Grow your career in technology roles including software development, data science, and IT infrastructure.",
      image: "/images/career-tech.jpg",
    },
    {
      title: "Education Career Path",
      description: "Explore opportunities in teaching, curriculum development, and educational leadership.",
      image: "/images/career-education.jpg",
    },
    {
      title: "Business Career Path",
      description: "Build your career in business operations, marketing, sales, and general management.",
      image: "/images/career-business.jpg",
    }
  ];

  // Sample career benefits
  const benefits = [
    "Competitive compensation packages",
    "Professional development opportunities",
    "Work-life balance",
    "Health and wellness benefits",
    "Collaborative work environment",
    "Growth potential",
    "Learning & development programs",
    "Cutting-edge technologies"
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">Shape Your Future with SkillCurve</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting career opportunities that match your passion and skills. 
              Join our team of dedicated professionals making a difference in education and career development.
            </p>
          </motion.div>

          {/* Career Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Grow Your Skills</h3>
              <p className="text-gray-600">Continuous learning and development opportunities to enhance your professional expertise.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules and policies that support your personal and professional life.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Collaborative Culture</h3>
              <p className="text-gray-600">Work in a supportive environment that values teamwork and creative solutions.</p>
            </div>
          </motion.div>

          {/* Career Paths */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-12">Career Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careerPaths.map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-500 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{path.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <Link href="/jobs" className="text-blue-600 font-medium hover:text-orange-500 flex items-center transition-colors">
                      Explore opportunities
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-12">Why Work With Us</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05, ease: "easeOut" }}
                    className="flex items-center"
                  >
                    <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">Join Our Team Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the next step in your professional journey and explore the opportunities waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/jobs" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-orange-500 transition-colors">
                View Open Positions
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-orange-50 hover:text-orange-500 hover:border-orange-500 transition-colors">
                Contact HR
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 