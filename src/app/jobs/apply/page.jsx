"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Create a separate component that uses useSearchParams
function JobApplicationForm() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") || "Job Position";
  
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: ""
  });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending data to an API
    alert("Application submitted successfully! We'll contact you soon.");
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      resume: null,
      coverLetter: ""
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <Link href="/jobs" className="text-purple-600 hover:text-purple-800">
          &larr; Back to Jobs
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-2">Apply for {position}</h1>
      <p className="text-center text-gray-600 mb-8">Fill out the form below to apply for this position</p>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Years of Experience</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Resume/CV</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

// Loading fallback component
function JobApplicationLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Loading application form...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function JobApplyPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-16">
      <Suspense fallback={<JobApplicationLoading />}>
        <JobApplicationForm />
      </Suspense>
    </div>
  );
} 