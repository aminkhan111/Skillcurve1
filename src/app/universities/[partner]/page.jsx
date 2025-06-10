"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

// University data organized by partner ID
const universityData = {
  manipal: {
    name: "Manipal University",
    logo: "/images/university-logos/Manipal Logo.png",
    bannerImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Manipal University is one of India's leading educational institutions known for excellence in education, healthcare, and research across various disciplines. Established with a vision to be a world-class university, Manipal has consistently maintained high academic standards and innovative teaching methodologies.",
    location: "Manipal, Karnataka",
    established: "1953",
    ranking: "Top 10 private universities in India",
    accreditations: ["NAAC A++", "UGC Approved", "AICTE"],
    featuredCourses: [
      { name: "Bachelor of Technology", duration: "4 years", fee: "₹2.5 lakhs/year" },
      { name: "Bachelor of Medicine (MBBS)", duration: "5.5 years", fee: "₹6.8 lakhs/year" },
      { name: "Master of Business Administration", duration: "2 years", fee: "₹3.2 lakhs/year" },
      { name: "Bachelor of Pharmacy", duration: "4 years", fee: "₹1.8 lakhs/year" },
      { name: "Bachelor of Design", duration: "4 years", fee: "₹2.1 lakhs/year" },
      { name: "Master of Computer Applications", duration: "2 years", fee: "₹1.5 lakhs/year" }
    ]
  },
  jain: {
    name: "Jain University",
    logo: "/images/university-logos/jain University logo.jpeg",
    bannerImage: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Jain University is a vibrant community of creative and innovative thinkers who are passionate about learning and making a positive impact in the world. With a focus on entrepreneurship, research, and sports, the university offers a comprehensive educational experience tailored to develop well-rounded professionals.",
    location: "Bangalore, Karnataka",
    established: "1990",
    ranking: "NIRF Rank: 85 (University category)",
    accreditations: ["NAAC A++", "UGC Approved"],
    featuredCourses: [
      { name: "Bachelor of Technology", duration: "4 years", fee: "₹1.9 lakhs/year" },
      { name: "BBA (Business Administration)", duration: "3 years", fee: "₹1.5 lakhs/year" },
      { name: "Bachelor of Design", duration: "4 years", fee: "₹1.8 lakhs/year" },
      { name: "MSc in Data Science", duration: "2 years", fee: "₹2.1 lakhs/year" },
      { name: "MBA in Digital Marketing", duration: "2 years", fee: "₹3.2 lakhs/year" },
      { name: "BSc in Animation", duration: "3 years", fee: "₹1.6 lakhs/year" }
    ]
  },
  lpu: {
    name: "LPU - Lovely Professional University",
    logo: "/images/university-logos/Lpu Logo.png",
    bannerImage: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Lovely Professional University (LPU) is a private university located in Phagwara, Punjab. It is recognized by UGC and maintains a strong focus on professional education. With one of the largest campuses in India, LPU offers a diverse range of courses and has a strong emphasis on international education and research.",
    location: "Phagwara, Punjab",
    established: "2005",
    ranking: "NIRF Rank: 38 (University category)",
    accreditations: ["NAAC A++", "UGC Approved", "AIU Member"],
    featuredCourses: [
      { name: "B.Tech in Computer Science", duration: "4 years", fee: "₹1.73 lakhs/year" },
      { name: "Bachelor of Hotel Management", duration: "4 years", fee: "₹1.45 lakhs/year" },
      { name: "B.Sc in Agriculture", duration: "4 years", fee: "₹1.2 lakhs/year" },
      { name: "MBA in International Business", duration: "2 years", fee: "₹2.5 lakhs/year" },
      { name: "B.Design in Fashion Design", duration: "4 years", fee: "₹1.6 lakhs/year" },
      { name: "Ph.D. in Engineering", duration: "3-5 years", fee: "₹1.2 lakhs/year" }
    ]
  },
  amity: {
    name: "Amity University",
    logo: "/images/university-logos/Amity Logo.png",
    bannerImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Amity University is one of India's leading research-driven private universities with a strong global presence. Known for its innovative teaching methodologies and industry-aligned curriculum, Amity provides students with opportunities to develop their academic, professional, and personal skills in a supportive environment.",
    location: "Noida, Uttar Pradesh",
    established: "2003",
    ranking: "QS Asia University Rankings: 301-350 band",
    accreditations: ["NAAC A", "UGC Approved", "WASC Accredited"],
    featuredCourses: [
      { name: "B.Tech in AI & Machine Learning", duration: "4 years", fee: "₹3.2 lakhs/year" },
      { name: "BBA + MBA (Integrated)", duration: "5 years", fee: "₹2.8 lakhs/year" },
      { name: "Bachelor of Journalism", duration: "3 years", fee: "₹1.9 lakhs/year" },
      { name: "B.Arch (Architecture)", duration: "5 years", fee: "₹2.5 lakhs/year" },
      { name: "M.Tech in Cyber Security", duration: "2 years", fee: "₹2.2 lakhs/year" },
      { name: "Bachelor of Design", duration: "4 years", fee: "₹2.4 lakhs/year" }
    ]
  },
  masterunion: {
    name: "Master Union",
    logo: "/images/university-logos/MasterUnion Logo.jpeg",
    bannerImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Masters' Union is a technology-focused business school in Gurugram that combines academic excellence with industry expertise. Founded by leading CEOs, educators, and policy makers, it offers practical business education through case studies, live consulting projects, and technology integration.",
    location: "Gurugram, Haryana",
    established: "2020",
    ranking: "Emerging top business school in India",
    accreditations: ["Industry-endorsed curriculum", "Leadership from top corporations"],
    featuredCourses: [
      { name: "PGP in Technology & Business Management", duration: "16 months", fee: "₹25 lakhs total" },
      { name: "PGP in Digital Finance & Banking", duration: "1 year", fee: "₹18.5 lakhs total" },
      { name: "Executive MBA", duration: "1 year", fee: "₹15.75 lakhs total" },
      { name: "PGP in Product Management", duration: "1 year", fee: "₹16.5 lakhs total" },
      { name: "Global MBA", duration: "2 years", fee: "₹32 lakhs total" },
      { name: "PGP in Data Analytics", duration: "1 year", fee: "₹15 lakhs total" }
    ]
  },
  svyasa: {
    name: "S-Vyasa University",
    logo: "/images/university-logos/Svy University Logo.jpeg",
    bannerImage: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "S-VYASA (Swami Vivekananda Yoga Anusandhana Samsthana) is a unique university focused on yoga, integrative medicine, and holistic wellness. It combines traditional yoga knowledge with modern scientific research to offer innovative academic programs that address both physical and mental wellbeing.",
    location: "Bangalore, Karnataka",
    established: "2002",
    ranking: "NAAC A+",
    accreditations: ["UGC Approved", "Deemed University", "ISO 9001:2015"],
    featuredCourses: [
      { name: "BSc in Yoga Therapy", duration: "3 years", fee: "₹80,000/year" },
      { name: "MSc in Yoga & Consciousness", duration: "2 years", fee: "₹1.2 lakhs/year" },
      { name: "PG Diploma in Yoga Therapy", duration: "1 year", fee: "₹1 lakh total" },
      { name: "PhD in Yoga & Life Sciences", duration: "3-5 years", fee: "₹1.5 lakhs/year" },
      { name: "MD in Yoga & Rehabilitation", duration: "3 years", fee: "₹2.8 lakhs/year" },
      { name: "Certificate in Yoga Instruction", duration: "6 months", fee: "₹45,000 total" }
    ]
  }
};

export default function UniversityDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const { partner } = useParams();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Check if university data exists for the given partner ID
  if (!universityData[partner]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">University Not Found</h1>
          <p className="text-gray-600 mb-6">The university you are looking for does not exist in our database.</p>
          <Link href="/universities" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Back to Universities
          </Link>
        </div>
      </div>
    );
  }
  
  const university = universityData[partner];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={university.bannerImage} 
            alt={`${university.name} campus`} 
            fill
            priority
            style={{objectFit: "cover"}}
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <div className="bg-white rounded-xl p-3 mr-6 shadow-lg">
              <div className="relative h-20 w-20">
                <Image
                  src={university.logo}
                  alt={`${university.name} Logo`}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center"
                  }}
                />
              </div>
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              {university.name}
            </motion.h1>
          </div>
          <motion.div
            className="flex items-center text-white/90 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{university.location}</span>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className="bg-white dark:bg-gray-800 shadow-md relative -mt-10 z-10 rounded-xl mx-4 md:mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Established</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{university.established}</p>
          </div>
          <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Ranking</h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{university.ranking}</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Accreditations</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {university.accreditations.map((accreditation, index) => (
                <span key={index} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                  {accreditation}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About University */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About the University</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                {university.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">World-Class Facilities</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    State-of-the-art laboratories, modern classrooms, well-stocked libraries, and excellent sports facilities.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-100 dark:border-orange-800">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Industry Connections</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Strong ties with leading companies ensuring excellent internships and placement opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Why Choose {university.name}?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Academic excellence and innovative teaching</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-relevant curriculum</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Global exposure and exchange programs</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rich tradition of research and innovation</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vibrant campus life and cultural diversity</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-400/30">
                <Link href="#courses">
                  <button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-md transition-colors">
                    View Featured Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section id="courses" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our most popular academic programs designed to prepare you for success in today's competitive world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {university.featuredCourses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.name}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{course.fee}</span>
                    <Link href={`/courses/${partner}/${encodeURIComponent(course.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                      <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/apply">
              <button className="bg-gradient-to-r from-[#0052CC] to-[#003D99] hover:from-[#003D99] hover:to-[#002266] text-white py-3 px-8 rounded-md font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center gap-2 mx-auto">
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey at {university.name}?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Our education consultants are ready to guide you through the application process and help you secure admission to your dream course.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-8 rounded-md font-medium transition-colors">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/universities">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md font-medium transition-colors">
                Explore Other Universities
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 