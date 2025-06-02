"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/components/utils/animations";

export default function UniversitiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // University data organized by Indian states
  const universities = [
    {
      id: 1,
      name: "Indian Institute of Technology Bombay",
      country: "India",
      state: "maharashtra",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#1 in India, #172 Worldwide",
      description: "Founded in 1958, IIT Bombay is a premier engineering institution known for technical excellence, innovative research, and distinguished alumni across the globe.",
      programsOffered: ["Engineering", "Computer Science", "Design", "Management", "Science"],
      partnershipType: "Exchange & Dual Degree"
    },
    {
      id: 2,
      name: "Indian Institute of Science (IISc)",
      country: "India",
      state: "karnataka",
      logo: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#2 in India, #155 Worldwide",
      description: "Established in 1909, IISc Bangalore is India's premier research institution, fostering scientific excellence through advanced research and education in science and engineering.",
      programsOffered: ["Engineering", "Science", "Mathematics", "Physics", "Biological Sciences"],
      partnershipType: "Research & Exchange"
    },
    {
      id: 3,
      name: "Indian Institute of Technology Delhi",
      country: "India",
      state: "delhi",
      logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#3 in India, #185 Worldwide",
      description: "IIT Delhi is a center of excellence for teaching, research, and industry collaboration, particularly known for its cutting-edge technological innovations and entrepreneurship initiatives.",
      programsOffered: ["Engineering", "Computer Science", "Design", "Management", "Humanities"],
      partnershipType: "Exchange & Joint Research"
    },
    {
      id: 4,
      name: "Indian Institute of Technology Madras",
      country: "India",
      state: "tamilnadu",
      logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#4 in India, #255 Worldwide",
      description: "IIT Madras is recognized globally for its outstanding education, research, and industry collaboration, particularly in fields like engineering, technology, and management sciences.",
      programsOffered: ["Engineering", "Aerospace", "Data Science", "Management", "Humanities"],
      partnershipType: "Dual Degree & Research"
    },
    {
      id: 5,
      name: "Delhi University",
      country: "India",
      state: "delhi",
      logo: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#5 in India, #521 Worldwide",
      description: "Founded in 1922, Delhi University is one of India's premier educational institutions, known for excellence in humanities, social sciences, and arts education.",
      programsOffered: ["Arts", "Commerce", "Law", "Science", "Social Sciences"],
      partnershipType: "Exchange & Joint Programs"
    },
    {
      id: 6,
      name: "Indian Institute of Management Ahmedabad",
      country: "India",
      state: "gujarat",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#1 in Business, #41 Worldwide for MBA",
      description: "IIM Ahmedabad is India's premier business school, known for its rigorous MBA program and influential research in management practices and policy-making.",
      programsOffered: ["MBA", "Executive Education", "Ph.D.", "Management", "Entrepreneurship"],
      partnershipType: "Exchange & Dual Degree"
    },
    {
      id: 7,
      name: "Indian Institute of Technology Kanpur",
      country: "India",
      state: "uttarpradesh",
      logo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#6 in India, #291 Worldwide",
      description: "IIT Kanpur is renowned for its technological innovation, research contributions, and distinguished alumni who lead technological advancements globally.",
      programsOffered: ["Engineering", "Sciences", "Humanities", "Management", "Design"],
      partnershipType: "Exchange & Research"
    },
    {
      id: 8,
      name: "Jawaharlal Nehru University",
      country: "India",
      state: "delhi",
      logo: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#7 in India, #561 Worldwide",
      description: "JNU is a leading university in social sciences and international relations, known for its intellectual vibrancy, critical thinking, and politically active campus.",
      programsOffered: ["International Relations", "Social Sciences", "Languages", "Environmental Studies", "Arts"],
      partnershipType: "Exchange & Joint Programs"
    },
    {
      id: 9,
      name: "All India Institute of Medical Sciences",
      country: "India",
      state: "delhi",
      logo: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#1 in Medical, #321 Worldwide",
      description: "AIIMS is India's premier medical institution, delivering excellence in medical education, research, and specialized healthcare services across multiple specialties.",
      programsOffered: ["Medicine", "Surgery", "Pediatrics", "Cardiology", "Neuroscience"],
      partnershipType: "Exchange & Collaborative Research"
    },
    {
      id: 10,
      name: "Indian Institute of Management Bangalore",
      country: "India",
      state: "karnataka",
      logo: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#2 in Business, #53 Worldwide for MBA",
      description: "IIM Bangalore is renowned for its academic excellence in management education, entrepreneurship focus, and strong industry connections across India and globally.",
      programsOffered: ["MBA", "Executive MBA", "Business Analytics", "Public Policy", "Digital Enterprise"],
      partnershipType: "Research & Exchange"
    },
    {
      id: 11,
      name: "Indian Institute of Technology Kharagpur",
      country: "India",
      state: "westbengal",
      logo: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#8 in India, #298 Worldwide",
      description: "The oldest IIT, Kharagpur is a multi-disciplinary institution known for its engineering excellence, research output, and entrepreneurial ecosystem.",
      programsOffered: ["Engineering", "Architecture", "Law", "Medical Science", "Management"],
      partnershipType: "Exchange & Research"
    },
    {
      id: 12,
      name: "Banaras Hindu University",
      country: "India",
      state: "uttarpradesh",
      logo: "https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ranking: "#10 in India, #651 Worldwide",
      description: "One of Asia's largest residential universities, BHU offers a comprehensive range of courses blending traditional Indian knowledge systems with modern education.",
      programsOffered: ["Arts", "Sciences", "Engineering", "Sanskrit Studies", "Medicine"],
      partnershipType: "Exchange & Dual Degree"
    }
  ];

  const filteredUniversities = activeFilter === "all" 
    ? universities 
    : universities.filter(uni => uni.state === activeFilter);
    
  const filters = [
    { id: "all", label: "All Universities" },
    { id: "maharashtra", label: "Maharashtra" },
    { id: "karnataka", label: "Karnataka" },
    { id: "delhi", label: "Delhi" },
    { id: "tamilnadu", label: "Tamil Nadu" },
    { id: "gujarat", label: "Gujarat" },
    { id: "uttarpradesh", label: "Uttar Pradesh" },
    { id: "westbengal", label: "West Bengal" }
  ];

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

      {/* Filter Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`py-2 px-4 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? "bg-[#0052CC] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured University */}
      {activeFilter === "all" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Featured University" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 lg:hidden">
                    <h2 className="text-3xl font-bold text-white">Indian Academic Excellence</h2>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 hidden lg:block">Indian Academic Excellence</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Our network of partner universities spans across India, offering students access to the finest education institutions in the country. From prestigious IITs and IIMs to renowned medical and research institutions, our partnerships provide a gateway to world-class Indian education.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-blue-50 text-[#0052CC] px-4 py-2 rounded-full text-sm font-medium">
                      12+ Partner Universities
                    </div>
                    <div className="bg-blue-50 text-[#0052CC] px-4 py-2 rounded-full text-sm font-medium">
                      State-wide Presence
                    </div>
                    <div className="bg-blue-50 text-[#0052CC] px-4 py-2 rounded-full text-sm font-medium">
                      Dual Degree Opportunities
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* University Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredUniversities.map((university) => (
              <motion.div
                key={university.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={university.image}
                    alt={university.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full h-16 w-16 p-2 shadow-lg flex items-center justify-center">
                    <Image
                      src={university.logo}
                      alt={`${university.name} Logo`}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                    <span className="text-xs bg-blue-50 text-[#0052CC] px-2 py-1 rounded-full">
                      {university.partnershipType}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{university.country}, {filters.find(f => f.id === university.state)?.label} • {university.ranking}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{university.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Programs Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programsOffered.slice(0, 3).map((program, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {program}
                        </span>
                      ))}
                      {university.programsOffered.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{university.programsOffered.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link href={`/universities/${university.id}`}>
                    <button className="w-full py-2 px-4 bg-[#0052CC] text-white rounded-md hover:bg-[#003D99] transition-colors font-medium">
                      View University
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Exchange Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Hear from students who have benefited from our university partnerships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "My semester at IIT Bombay through SkillCurve's partnership was transformative. Being exposed to such brilliant minds and advanced research facilities gave me a new perspective on engineering and technology.",
                name: "Rahul Mehta",
                program: "Computer Science Exchange Program",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The dual degree program between SkillCurve and IIM Bangalore gave me the perfect blend of theoretical knowledge and practical business experience. This credential opened doors to opportunities I never thought possible.",
                name: "Priya Sharma",
                program: "Management Studies",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 23.3333C15.1743 23.3333 16.6667 21.841 16.6667 20C16.6667 18.159 15.1743 16.6667 13.3333 16.6667C11.4924 16.6667 10 18.159 10 20C10 21.841 11.4924 23.3333 13.3333 23.3333Z" fill="#0052CC" fillOpacity="0.2"/>
                    <path d="M26.6667 23.3333C28.5076 23.3333 30 21.841 30 20C30 18.159 28.5076 16.6667 26.6667 16.6667C24.8257 16.6667 23.3333 18.159 23.3333 20C23.3333 21.841 24.8257 23.3333 26.6667 23.3333Z" fill="#0052CC" fillOpacity="0.2"/>
                    <path d="M36.6667 20C36.6667 29.2 29.2 36.6667 20 36.6667C10.8 36.6667 3.33334 29.2 3.33334 20C3.33334 10.8 10.8 3.33334 20 3.33334C29.2 3.33334 36.6667 10.8 36.6667 20Z" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={56} 
                      height={56} 
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0052CC] to-[#003D99] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Indian Education Opportunities?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with our admissions team to learn more about our university partnerships and how you can benefit from them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white text-[#0052CC] py-3 px-8 rounded-md font-medium text-lg transition-all duration-300 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md font-medium text-lg transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download University Guide
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
} 