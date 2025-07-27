 "use client";
     
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideInRight, slideInUp } from "@/components/utils/animations";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    alt: "Education Background"
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    alt: "Students Collaborating"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    alt: "Virtual Learning"
  }
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCardImage, setCurrentCardImage] = useState(0);
  const timeoutRef = useRef(null);
  const cardTimeoutRef = useRef(null);
  
  // Feature card images from Unsplash
  const featureCardImages = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Online learning setup
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Student studying
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Digital education
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Laptop and notebook
  ];
  
  useEffect(() => {
    const nextSlide = () => {
      setCurrentImage(current => (current === carouselImages.length - 1 ? 0 : current + 1));
    };
    
    timeoutRef.current = setTimeout(nextSlide, 5000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImage]);

  // Effect for feature card image rotation
  useEffect(() => {
    const nextCardImage = () => {
      setCurrentCardImage(current => (current === featureCardImages.length - 1 ? 0 : current + 1));
    };
    
    cardTimeoutRef.current = setTimeout(nextCardImage, 1500);
    
    return () => {
      if (cardTimeoutRef.current) {
        clearTimeout(cardTimeoutRef.current);
      }
    };
  }, [currentCardImage]);

  const goToSlide = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setCurrentImage(index);
  };

  // Animation variants for the animated elements
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Function to show consultation popup
  const handleShowConsultation = (e) => {
    e.preventDefault();
    
    // Store in localStorage that we're manually showing the popup
    localStorage.setItem("popupShown", "true");
    
    // Dispatch a custom event that the PopupForm component will listen for
    const event = new Event("showConsultationPopup");
    window.dispatchEvent(event);
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] h-auto">
      {/* Carousel Background Images with Enhanced Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {carouselImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'} h-full`}
          >
            <Image 
              src={image.url} 
              alt={image.alt} 
              fill
              priority={index === 0}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%"
              }}
              quality={90}
              className="absolute inset-0"
            />
            {/* Re-adding a gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 h-full w-full"></div>
          </div>
        ))}
      </div>
      
      {/* Background decoration elements similar to ServicesSection */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-xl z-[1]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3 blur-xl z-[1]"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-orange-300 rounded-full opacity-15 blur-lg z-[1]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-blue-300 rounded-full opacity-15 blur-lg z-[1]"></div>
      
      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-md z-[1]"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-tl from-orange-400/20 to-orange-600/10 rounded-full blur-md z-[1]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      ></motion.div>
      
      {/* Subtle animated line decoration */}
      <div className="absolute left-0 right-0 top-[25%] opacity-30 overflow-hidden h-20 z-[1]">
        <motion.svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C300,120 900,-20 1200,50"
            stroke="url(#hero-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.5,
              transition: {
                pathLength: { duration: 3, ease: "easeInOut" },
                opacity: { duration: 1 }
              }
            }}
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      
      {/* Small floating particles/dots */}
      <motion.div 
        className="absolute w-3 h-3 rounded-full bg-blue-400/40 blur-sm z-[1]"
        style={{ top: '30%', left: '15%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute w-2 h-2 rounded-full bg-orange-400/40 blur-sm z-[1]"
        style={{ top: '50%', right: '20%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400/30 to-orange-400/30 blur-sm z-[1]"
        style={{ bottom: '40%', right: '30%' }}
        animate={{
          y: [0, -40, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      {/* Decorative Accent Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/20 to-orange-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-600/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      {/* Main content - Reduced padding for more compact layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-4 lg:pt-6 pb-20 text-white min-h-[90vh] flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="pt-0"
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full text-sm font-semibold mb-2 shadow-lg shadow-orange-500/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Future Today
            </motion.span>
            
            {/* Reduced margin and font size for more compact heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Advance Your Career With
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Premium Education
              </span>
            </h1>
            
            <p className="text-base md:text-lg mb-4 text-white font-medium max-w-xl drop-shadow-md">
              Your Career, Supercharged
              Learn. Grow. Get Hired — with SkillCurve.
            </p>
            
            {/* Enhanced Stats Section with more compact styling */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
                <motion.span 
                  className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
<<<<<<< HEAD
                >50+</motion.span>
=======
                >100+</motion.span>
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
                <span className="text-xs text-white drop-shadow-sm">Courses</span>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
                <motion.span 
                  className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >500+</motion.span>
                <span className="text-xs text-white drop-shadow-sm">Students</span>
              </div>
              <div className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm shadow-lg">
                <motion.span 
                  className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-300 bg-clip-text text-transparent drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >95%</motion.span>
                <span className="text-xs text-white drop-shadow-sm">Placement Rate</span>
              </div>
            </div>
            
            {/* Buttons section */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/courses">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 px-8 rounded-md font-medium text-lg transition-all duration-300 w-full sm:w-auto shadow-lg shadow-orange-500/30">
                    Explore Courses
                  </button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button 
                  onClick={handleShowConsultation}
                  className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 hover:from-blue-600/30 hover:to-blue-700/30 border-2 border-white/50 py-2 px-8 rounded-md font-medium text-lg transition-all duration-300 w-full sm:w-auto backdrop-blur-sm text-white shadow-md"
                >
                  Get Career Advice
                </button>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Reduced height for feature card */}
          <motion.div
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative h-[420px] w-full mt-0">
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-orange-500/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/70 to-blue-800/70 border border-white/10">
                  {/* Accent circle decorations */}
                  <motion.div 
                    className="absolute top-5 right-5 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500/30 to-orange-300/30 blur-md"
                    variants={pulseAnimation}
                    animate="animate"
                  ></motion.div>
                  
                  <motion.div 
                    className="absolute bottom-20 left-5 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-300/30 blur-md"
                    variants={pulseAnimation}
                    animate="animate"
                  ></motion.div>
                  
                  {/* Rotating images carousel */}
                  <div className="relative w-full h-3/4 overflow-hidden">
                    {featureCardImages.map((imgSrc, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentCardImage ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <Image 
                          src={imgSrc} 
                          alt={`Education feature ${index + 1}`}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          className="rounded-t-lg opacity-70"
                        />
                      </div>
                    ))}
                    
                    {/* Overlay gradient for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/80"></div>
                    
                    {/* Logo overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <Image 
                        src="/images/logo.svg" 
                        alt="SkillCurve Logo" 
                        width={140}
                        height={140}
                        className="opacity-90"
                      />
                    </div> */}
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 text-white"
                    variants={slideInUp}
                  >
                    <h3 className="font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200 drop-shadow-lg">Start Learning Today</h3>
                    <p className="text-white text-lg drop-shadow-md">Join thousands of successful graduates</p>
                    
<<<<<<< HEAD
                    {/* <div className="mt-4 flex items-center">
=======
                    <div className="mt-4 flex items-center">
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-orange-400 to-orange-500'}`}></div>
                        ))}
                      </div>
                      <span className="ml-4 text-sm text-white drop-shadow-sm">50+ enrolled this week</span>
<<<<<<< HEAD
                    </div> */}
=======
                    </div>
>>>>>>> a56d7d6a8bde50c25d9967c419f234290beafc39
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Carousel Navigation - positioned higher */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex justify-center gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'w-10 bg-gradient-to-r from-blue-500 to-orange-500 shadow-md shadow-orange-500/30' 
                    : 'w-3 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
} 
