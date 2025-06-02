"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlacementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-orange-100/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-tr-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
                Placement Support Services
              </h1>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mb-8"></div>
              
              <p className="text-xl text-gray-700 mb-8">
                We provide comprehensive placement assistance to help you land your dream job. From resume building to interview preparation, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#placement-services" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                >
                  Explore Services
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl border border-blue-100 transition duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Placement Services"
                  width={600}
                  height={300}
                  className="w-full h-[280px] object-cover object-center"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-300 rounded-full opacity-80 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full opacity-80 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="placement-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              Our Placement Services
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a variety of placement support services designed to help you secure your ideal career opportunity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Resume Building</h3>
              <p className="text-gray-600">
                Our experts will help you create a professional resume that highlights your strengths and achievements to stand out to potential employers.
              </p>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">Interview Preparation</h3>
              <p className="text-gray-600">
                Prepare for interviews with mock sessions, feedback, and expert tips on handling common and technical questions in your field.
              </p>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">Employer Connections</h3>
              <p className="text-gray-600">
                Connect with our network of partner companies and organizations looking to hire talented professionals in your field.
              </p>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">Job Application Support</h3>
              <p className="text-gray-600">
                Get assistance with job applications, including cover letter writing, portfolio preparation, and application tracking.
              </p>
            </motion.div>
            
            {/* Service 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">Career Advancement Planning</h3>
              <p className="text-gray-600">
                Develop a long-term career plan with expert guidance to help you achieve your professional goals and aspirations.
              </p>
            </motion.div>
            
            {/* Service 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">Salary Negotiation</h3>
              <p className="text-gray-600">
                Learn effective strategies for negotiating your salary and benefits package to secure the compensation you deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Companies Hiring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              Top Companies Hiring
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading companies across industries to provide excellent career opportunities for our candidates.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Company Logo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
                  alt="Microsoft"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="IBM"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
                  alt="Google"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Infosys_logo.svg/2560px-Infosys_logo.svg.png"
                  alt="Infosys"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
                  alt="TCS"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                  alt="Amazon"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 7 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Wipro_logo.svg/2560px-Wipro_logo.svg.png"
                  alt="Wipro"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 8 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Accenture.svg/2560px-Accenture.svg.png"
                  alt="Accenture"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 9 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Deloitte.svg/2560px-Deloitte.svg.png"
                  alt="Deloitte"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 10 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Oracle_logo.svg/2560px-Oracle_logo.svg.png"
                  alt="Oracle"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 11 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
                  alt="HDFC Bank"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>

            {/* Company Logo 12 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Reliance_Logo.svg/800px-Reliance_Logo.svg.png"
                  alt="Reliance"
                  width={120}
                  height={40}
                  className="max-h-full w-auto"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/partners"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View all hiring partners
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-6">
              Our Placement Process
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to help you land your dream job. Here's how it works:
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-orange-500 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-20">
              {/* Step 1 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 lg:pr-16 lg:text-right mb-10 lg:mb-0"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">1. Initial Assessment</h3>
                    <p className="text-gray-600">
                      We begin with a thorough evaluation of your skills, experience, and career goals to understand your unique profile and aspirations.
                    </p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block absolute top-0 left-1/2 w-10 h-10 bg-blue-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 lg:pl-16 lg:ml-auto"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">2. Profile Enhancement</h3>
                    <p className="text-gray-600">
                      We help you enhance your professional profile, including resume optimization, LinkedIn profile improvement, and portfolio development.
                    </p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block absolute top-0 left-1/2 w-10 h-10 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 lg:pr-16 lg:text-right mb-10 lg:mb-0"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">3. Interview Preparation</h3>
                    <p className="text-gray-600">
                      We conduct mock interviews, provide industry-specific preparation, and offer feedback to improve your interview performance.
                    </p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block absolute top-0 left-1/2 w-10 h-10 bg-blue-700 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 lg:pl-16 lg:ml-auto"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">4. Job Matching & Application</h3>
                    <p className="text-gray-600">
                      We connect you with suitable job opportunities from our network and assist with the application process to maximize your chances.
                    </p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block absolute top-0 left-1/2 w-10 h-10 bg-orange-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 lg:pr-16 lg:text-right"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">5. Ongoing Support</h3>
                    <p className="text-gray-600">
                      Our support continues even after placement with follow-ups, mentorship, and guidance for professional growth and advancement.
                    </p>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block absolute top-0 left-1/2 w-10 h-10 bg-orange-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 100 100">
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Accelerate Your Career?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto relative z-10">
              Take the first step toward landing your dream job. Schedule a consultation with our placement experts today!
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition duration-300 transform hover:-translate-y-1"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/jobs" 
                className="px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-white/10 transition duration-300 transform hover:-translate-y-1"
              >
                Browse Opportunities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 