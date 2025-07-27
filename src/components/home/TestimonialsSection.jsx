"use client";
  
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariants, staggerContainer } from "@/components/utils/animations";

export default function TestimonialsSection() {
  // Wavy line animation variant
  const wavyLineVariant = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const wavyPathVariant = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
      },
    },
  };
  
  // Float animation for background elements
  const floatAnimation = {
    initial: { y: 0, opacity: 0.7 },
    animate: {
      y: [-20, 20, -20],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const rotateAnimation = {
    initial: { rotate: 0, opacity: 0.4 },
    animate: {
      rotate: 360,
      opacity: [0.4, 0.6, 0.4],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-indigo-50/30 to-white">
      {/* Enhanced background decoration elements */}
      {/* Gradient blob backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-blue-200/30 via-indigo-300/20 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[15%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-orange-200/30 via-amber-300/20 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-[15%] w-[45%] h-[40%] bg-gradient-to-bl from-green-200/20 via-emerald-300/15 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Animated floating shapes */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
      ></motion.div>

      <motion.div 
        className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20"
        variants={floatAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "2s" }}
      ></motion.div>

      {/* Geometric patterns */}
      <motion.div 
        className="absolute bottom-[10%] left-[5%] w-40 h-40 opacity-20"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(245, 158, 11, 0.2)" d="M48.2,-46.1C58.4,-29.1,60.5,-9.7,58.7,10.4C56.9,30.4,51.2,51,37.2,61C23.3,71,1,70.3,-17.6,62.3C-36.1,54.3,-51,39,-59.1,19.7C-67.2,0.3,-68.6,-23.1,-58.5,-40.8C-48.4,-58.6,-26.8,-70.8,-4.7,-67.2C17.3,-63.5,38,-63.1,48.2,-46.1Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Light rays */}
      <div className="absolute -top-20 left-1/4 w-1/2 h-60 bg-gradient-to-b from-blue-400/10 to-transparent transform -rotate-45 blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-1/2 h-60 bg-gradient-to-t from-orange-400/10 to-transparent transform rotate-45 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text mb-4">What Our Students Say</h2>
          
          {/* Animated wavy line */}
          <motion.div 
            className="w-48 h-6 mx-auto mb-6"
            variants={wavyLineVariant}
            initial="initial"
            animate="animate"
          >
            <motion.svg width="160" height="24" viewBox="0 0 160 24" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M2 12C2 12 22 4 42 12C62 20 82 4 102 12C122 20 142 4 158 12" 
                stroke="url(#testimonial-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round"
                fill="none"
                variants={wavyPathVariant}
              />
              <defs>
                <linearGradient id="testimonial-gradient" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#2563EB"/>
                  <stop offset="1" stopColor="#F97316"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers through SkillCurve.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Testimonial 1 */}
          <motion.div 
            className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0052CC]/5 group-hover:to-[#0052CC]/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="h-12 w-12 rounded-full mr-4 overflow-hidden relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0052CC] to-[#FF6B00] blur-sm -m-0.5 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative h-full w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Sarah Johnson"
                    fill
                    style={{objectFit: "cover", objectPosition: "center"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#0052CC] group-hover:to-[#FF6B00] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Santosh JT</h4>
                <p className="text-gray-700"> MCA </p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "I was skeptical about online degrees, I enrolled for MCA program with the help of SkillCurve ,but Manipal changed my mind.The course content was in-depth, the LMS was easy to use, and mentors were very responsive. I transitioned into a software development role mid-course"
=======
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#0052CC] group-hover:to-[#FF6B00] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Praveen Kumar</h4>
                <p className="text-gray-700">Data Scientist</p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "The Data Science course was exactly what I needed to transition into a new career. The career counseling helped me prepare for interviews, and I landed my dream job within weeks of completing the course."
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B00]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div 
            className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FF6B00]/5 group-hover:to-[#FF6B00]/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#0052CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="h-12 w-12 rounded-full mr-4 overflow-hidden relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#0052CC] blur-sm -m-0.5 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative h-full w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Michael Chen"
                    fill
                    style={{objectFit: "cover", objectPosition: "center top"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#0052CC] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Ritu Agarwal</h4>
                <p className="text-gray-700">MBA</p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "The online MBA from Manipal was everything I needed — flexibility, real-time support, and practical knowledge. Even while managing a full-time job, I could complete the course smoothly. The industry projects truly added value."
=======
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#0052CC] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Sumit Kumar</h4>
                <p className="text-gray-700">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "I was stuck in my career until I found SkillCurve. Their web development course was comprehensive and practical, and the placement support helped me secure a position at a top tech company."
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B00]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div 
            className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30 relative overflow-hidden group"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0052CC]/5 group-hover:to-[#0052CC]/10 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="h-12 w-12 rounded-full mr-4 overflow-hidden relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0052CC] to-[#FF6B00] blur-sm -m-0.5 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative h-full w-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1592085550638-e6bc180a731e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Jessica Patel"
                    fill
                    style={{objectFit: "cover", objectPosition: "center"}}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
<<<<<<< HEAD
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#0052CC] group-hover:to-[#FF6B00] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Sneha Borkar</h4>
                <p className="text-gray-700">BBA</p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "Being from a small town, access to quality education was always tough. The online BBA from Manipal gave me access to top-notch faculty, recorded classes, and real-world business insights. I feel more confident and career-ready now."
=======
                <h4 className="font-semibold group-hover:bg-gradient-to-r group-hover:from-[#0052CC] group-hover:to-[#FF6B00] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Jessica Patel</h4>
                <p className="text-gray-700">Marketing Director</p>
              </div>
            </div>
            <p className="text-gray-700 relative z-10">
              "The MBA program at SkillCurve gave me the business acumen I needed for a leadership role. The counselors provided valuable guidance, helping me navigate my career path with confidence."
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
            </p>
            <div className="flex mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B00]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
