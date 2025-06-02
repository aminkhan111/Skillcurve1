"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideInLeft, slideInRight } from "@/components/utils/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    try {
      // In a real app, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: "Something went wrong. Please try again." });
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#FF6B00] py-20 md:py-32">
        {/* Background Elements - lower z-index */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-20 mix-blend-overlay"></div>
          <svg className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 text-white/5" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <svg className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 text-orange-500/10" fill="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f8fafc" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,96C672,96,768,160,864,186.7C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Content - higher z-index */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Text container with enhanced visibility */}
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-blue-900/30 to-orange-900/30 p-8 rounded-2xl inline-block mb-4">
            <motion.div
              className="inline-block p-2 px-6 mb-6 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9D00] text-white font-medium shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-shadow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's <span className="text-orange-400">Connect</span> & Build Your Future
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have questions about our courses or services? Our team is here to help you navigate your educational journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            {/* Email Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#0052CC]"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#0052CC] to-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">Our friendly team is here to help</p>
              <a href="mailto:info@skillcurve.edu" className="text-[#0052CC] font-medium hover:underline text-lg">info@skillcurve.edu</a>
            </motion.div>
            
            {/* Phone Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#FF6B00]"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B00] to-[#FF9D00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">Mon-Fri from 8am to 5pm</p>
              <a href="tel:+1-555-123-4567" className="text-[#FF6B00] font-medium hover:underline text-lg">+1 (555) 123-4567</a>
            </motion.div>
            
            {/* Visit Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-gradient-to-r from-[#0052CC] to-[#FF6B00]"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#0052CC] to-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100/50 shadow-orange-100/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-4">Come say hello at our office</p>
              <p className="text-indigo-600 font-medium text-lg">123 Education Street, Learning City, 10001</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute left-0 top-1/2 w-48 h-48 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-orange-500/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
            >
              <div className="inline-block p-2 px-4 mb-4 rounded-full bg-blue-100 text-[#0052CC] font-medium text-sm">GET IN TOUCH</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">We'd Love To Hear From You</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formStatus.isSubmitted ? (
                <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Career Counseling">Career Counseling</option>
                        <option value="University Admissions">University Admissions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent transition"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  {formStatus.error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {formStatus.error}
                    </div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0052CC] hover:to-[#003D99] text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl ${
                        formStatus.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Map and Office Hours */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Map Embed with Gradient Overlay */}
                <div className="h-[300px] bg-gray-100 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/20 to-[#FF6B00]/20 opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-800 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-600">123 Education Street, Learning City</p>
                    </div>
                  </div>
                </div>
                
                {/* Office Information */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Office</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700 font-medium">Address</p>
                        <p className="text-gray-600">123 Education Street, Learning City, 10001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700 font-medium">Email</p>
                        <p className="text-gray-600">info@skillcurve.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700 font-medium">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B00] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Office Hours
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-blue-50 px-4 py-2 rounded-lg">
                        <span className="text-gray-700 font-medium">Monday - Friday</span>
                        <span className="text-[#0052CC] font-semibold px-3 py-1 bg-white rounded-md shadow-sm">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-orange-50 px-4 py-2 rounded-lg">
                        <span className="text-gray-700 font-medium">Saturday</span>
                        <span className="text-[#FF6B00] font-semibold px-3 py-1 bg-white rounded-md shadow-sm">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-gray-700 font-medium">Sunday</span>
                        <span className="text-gray-500 font-semibold px-3 py-1 bg-white rounded-md shadow-sm">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-blue-500/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-2 px-4 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 text-gray-800 font-medium text-sm">QUESTIONS & ANSWERS</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">Find answers to common questions about our services, courses, and admission process.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How can I schedule a career counseling session?",
                answer: "You can schedule a career counseling session by filling out the form above, calling our office, or clicking the 'Schedule A Free Consultation' button in the navigation bar."
              },
              {
                question: "What documents do I need for university admission?",
                answer: "Required documents typically include academic transcripts, standardized test scores, letters of recommendation, a personal statement, and proof of language proficiency. Specific requirements vary by university and program."
              },
              {
                question: "Do you offer financial aid or scholarships?",
                answer: "Yes, we help students identify and apply for various scholarships, grants, and financial aid options available at partner universities and through external organizations."
              },
              {
                question: "How long does the application process take?",
                answer: "The application process timeline varies depending on the university and program. Generally, it takes 4-8 weeks from submission to decision, but we recommend starting the process at least 6 months before your intended start date."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0052CC] to-[#FF6B00] flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
                <motion.button 
                  className="bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-xl shadow-lg shadow-blue-200/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule A Free Consultation
                </motion.button>
                <motion.button 
                  className="bg-gradient-to-r from-[#FF6B00] to-[#FF9D00] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-xl shadow-lg shadow-orange-200/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Our Courses
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 