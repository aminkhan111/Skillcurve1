"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    courseInterest: "",
    educationLevel: "",
    startPreference: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if it's a client-side render
    setIsClient(true);

    // Use localStorage to check if the popup has been shown in this session
    const hasPopupBeenShown = localStorage.getItem("popupShown");
    
    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Set flag in localStorage
        localStorage.setItem("popupShown", "true");
      }, 5000);
  
      return () => clearTimeout(timer);
    }

    // Add event listener for the custom event from navbar
    const handleShowPopupEvent = () => {
      setShowPopup(true);
    };

    window.addEventListener("showConsultationPopup", handleShowPopupEvent);

    // Clean up event listener
    return () => {
      window.removeEventListener("showConsultationPopup", handleShowPopupEvent);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to HubSpot
      const hubspotData = {
        portalId: "242942346",
        formId: "4651a3f8-945c-4c6f-a5a9-6d2fb77ced71",
        fields: [
          { name: "firstname", value: formData.fullName.split(' ')[0] },
          { name: "lastname", value: formData.fullName.split(' ').slice(1).join(' ') || '' },
          { name: "mobilephone", value: formData.phoneNumber },
          { name: "email", value: formData.email },
          { name: "select_course_interest", value: formData.courseInterest },
          { name: "current_education_level", value: formData.educationLevel },
          { name: "when_to_start_", value: formData.startPreference }
        ],
      };

      // HubSpot Form Submission API endpoint
      const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotData.portalId}/${hubspotData.formId}`;
      
      // Submit to HubSpot using their API
      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(hubspotData)
      });
      
      // Also submit to your own backend if needed
      // This is optional and can be removed if you don't need it
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "firstname", value: formData.fullName },
            { name: "phone", value: formData.phoneNumber },
            { name: "email", value: formData.email },
            { name: "courseInterest", value: formData.courseInterest },
            { name: "educationLevel", value: formData.educationLevel },
            { name: "startPreference", value: formData.startPreference },
          ],
        }),
      });

      setIsSubmitting(false);
      console.log("Form submitted successfully to HubSpot");
      setIsSubmitted(true);
      
      // Close popup after showing success message for 2 seconds
      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form to HubSpot:", error);
      setIsSubmitting(false);
    }
  };

  // Reset form when reopening
  useEffect(() => {
    if (showPopup) {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        courseInterest: "",
        educationLevel: "",
        startPreference: "",
      });
    }
  }, [showPopup]);

  if (!isClient) return null; // Prevent rendering on the server side

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full relative"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                aria-label="Close"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
                type="button"
                onClick={closePopup}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-[#0052CC] to-[#FF6B00] p-6 text-white">
                <h3 className="text-xl font-bold">Take the Next Step in Your Education</h3>
                <p className="mt-1 text-white/90">Get a free consultation with our education experts</p>
              </div>
              
              {/* Form body */}
              <div className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <div>
                      <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        placeholder="Full Name*"
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                          placeholder="Phone Number*"
                          required
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                          placeholder="Email*"
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-white"
                        required
                        name="courseInterest"
                        value={formData.courseInterest}
                        onChange={handleChange}
                      >
                        <option value="">Select Course Interest*</option>
                        <option value="Undergraduate Programs">Undergraduate Programs</option>
                        <option value="Graduate Programs">Graduate Programs</option>
                        <option value="Professional Certification">Professional Certification</option>
                        <option value="Career Counseling">Career Counseling</option>
                        <option value="University Admission">University Admission</option>
                        <option value="Study Abroad">Study Abroad</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-white"
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleChange}
                        >
                          <option value="">Current Education Level</option>
                          <option value="High School">High School</option>
                          <option value="Associate Degree">Associate Degree</option>
                          <option value="Bachelor's Degree">Bachelor's Degree</option>
                          <option value="Master's Degree">Master's Degree</option>
                          <option value="Doctorate">Doctorate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-white"
                          name="startPreference"
                          value={formData.startPreference}
                          onChange={handleChange}
                        >
                          <option value="">When to Start?</option>
                          <option value="Immediately">Immediately</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="Within 3 Months">Within 3 Months</option>
                          <option value="Within 6 Months">Within 6 Months</option>
                          <option value="Next Year">Next Year</option>
                          <option value="Just Exploring">Just Exploring</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center text-sm text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        We protect your privacy and data
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Your information is secure
                      </div>
                    </div>
                    
                    <button
                      className={`w-full py-3 px-4 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] hover:from-[#003D99] hover:to-[#FF5500] text-white font-medium rounded-md shadow-md transition-all transform hover:scale-[1.02] ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopupForm; 