"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function OneOnOneMentorshipPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mentorship benefits
  const benefits = [
    "Personalized guidance tailored to your career goals",
    "Direct access to industry experts and professionals",
    "Custom-built development plan to accelerate your growth",
    "Regular feedback and progress assessment",
    "Networking opportunities with industry leaders",
    "Skill gap analysis and improvement strategies"
  ];

  // Mentorship process steps
  const mentorshipSteps = [
    {
      number: "01",
      title: "Discovery Session",
      description: "We begin with a thorough assessment of your current situation, career aspirations, and goals to understand your unique needs."
    },
    {
      number: "02",
      title: "Mentor Matching",
      description: "Based on your career path and goals, we'll match you with the perfect mentor who has expertise in your desired field."
    },
    {
      number: "03",
      title: "Development Plan",
      description: "Together with your mentor, you'll create a personalized development plan with clear milestones and objectives."
    },
    {
      number: "04",
      title: "Regular Mentoring",
      description: "Engage in scheduled one-on-one sessions focused on guidance, skill development, and overcoming challenges."
    },
    {
      number: "05",
      title: "Progress Tracking",
      description: "We continuously monitor your progress, making adjustments to your development plan as you grow and evolve."
    }
  ];

  // Testimonials from mentorship participants
  const testimonials = [
    {
      quote: "The one-on-one mentorship program transformed my career trajectory. My mentor provided insights that I couldn't find anywhere else.",
      name: "Aisha P.",
      role: "Software Engineer",
      company: "Tech Solutions Inc."
    },
    {
      quote: "Having a dedicated mentor helped me identify blind spots in my professional development and create strategies to overcome them.",
      name: "Rajiv M.",
      role: "Marketing Director",
      company: "Global Brands"
    },
    {
      quote: "The personalized attention and expert guidance I received helped me secure a promotion within just six months of starting the program.",
      name: "Sarah T.",
      role: "Finance Analyst",
      company: "Investment Partners"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              One-on-One Career Mentorship
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized guidance from experienced professionals who will help you navigate your career path and achieve your professional goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-r from-blue-600 to-orange-500 opacity-10 absolute"></div>
                <Image
                  src="/images/mentorship-hero.jpg"
                  alt="One-on-One Mentorship"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Transform Your Career With Expert Guidance</h2>
              <p className="text-gray-600 mb-6">
                Our one-on-one mentorship program pairs you with experienced industry professionals who provide personalized guidance to help you achieve your career goals faster and more effectively.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors">
                Start Your Mentorship Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              Why Choose One-on-One Mentorship?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of personalized career guidance from experienced professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg"
              >
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              The Mentorship Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear roadmap to your career success through our structured mentorship program.
            </p>
          </motion.div>

          <div className="space-y-8 relative">
            {/* Line connecting the steps */}
            <div className="absolute left-[42px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500 hidden md:block"></div>
            
            {mentorshipSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="flex items-start gap-8"
              >
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers through our mentorship program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg"
              >
                <svg className="w-10 h-10 text-orange-500 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Accelerate Your Career Growth?
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8">
              Join our one-on-one mentorship program today and get the personalized guidance you need to achieve your professional goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold">
                Apply for Mentorship
              </Link>
              <Link href="/contact" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Schedule a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 