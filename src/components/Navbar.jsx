"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "./utils/navigation";
import { useRouter } from "next/navigation";
import { trackNavigation, trackButtonClick } from "./GoogleAnalytics";
import { trackMetaButtonClick, trackMetaConsultationRequest } from "./MetaPixel";

// Desktop dropdown component
const DesktopDropdown = ({ title, isOpen, toggleDropdown, items, handleNavigation }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`border-transparent ${isOpen ? 'border-[#0052CC] opacity-80' : ''} hover:border-[#0052CC] inline-flex items-center px-1 pt-1 border-b-2 text-base font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer`}
      >
        {title}
        <svg 
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''} text-[#0052CC] pointer-events-none`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-50 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, index) => (
              <div 
                key={index}
                className="text-gray-700 block px-4 py-2 text-base hover:bg-gray-100 cursor-pointer"
                onClick={(e) => { 
                  toggleDropdown();
                  handleNavigation(e, item.href);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile dropdown component - simplified to use direct navigation
const MobileDropdown = ({ title, isOpen, toggleDropdown, items }) => {
  // Direct navigation handler with no dependencies
  const handleDirectNavigation = (href) => {
    // Most direct possible navigation - should work regardless of event issues
    window.location.href = href;
  };

  return (
    <div className="border-l-4 border-transparent hover:border-[#0052CC] block pl-3 pr-4 py-2 hover:bg-gray-50 text-base font-bold">
      <div 
        className="flex justify-between items-center bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent cursor-pointer" 
        onClick={toggleDropdown}
      >
        <span>{title}</span>
        <svg 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''} text-[#0052CC]`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="pl-4 pt-2 space-y-1">
          {items.map((item, index) => (
            // Using div instead of anchor to avoid any potential anchor tag issues
            <div 
              key={index}
              className="block py-1 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent hover:opacity-80 cursor-pointer" 
              onClick={() => handleDirectNavigation(item.href)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// For the section headers in mobile view - make them non-clickable but maintain styling
const SectionHeader = ({ title }) => (
  <div className="block border-l-4 border-[#0052CC] pl-3 pr-4 py-2 bg-gray-50 text-[#0052CC] text-base font-bold">
    {title}
  </div>
);

export default function Navbar() {
  // Navigation items - reordered (removed Courses and Universities)
  const navItems = [
    { name: "Home", href: "/" },
  ];

  // Services dropdown items (added Courses and Universities)
  const servicesItems = [
    { name: "All Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Universities", href: "/universities" },
    { name: "One-on-One Career Mentorship", href: "/services/one-on-one-mentorship" },
  ];

  // About dropdown items
  const aboutItems = [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-us" },
  ];

  // Career dropdown items
  const careerItems = [
    { name: "Career", href: "/career" },
    { name: "Job at SkillCurve", href: "/placement" },
    { name: "Jobs For You", href: "/jobs" },
  ];

  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [showConsultationPopup, setShowConsultationPopup] = useState(false);
  
  // Refs for outside click detection
  const servicesDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const careerDropdownRef = useRef(null);
  
  const { navigate } = useNavigation();
  const router = useRouter();

  // Function to close all menus
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsCareerDropdownOpen(false);
  };

  // Function to handle navigation with loader
  const handleNavigation = (e, href) => {
    e.stopPropagation(); // Prevent the dropdown toggle from being triggered

    // Track navigation click
    const pageName = href === '/' ? 'home' : href.replace('/', '');
    trackNavigation(pageName);

    closeMenu(); // Close the menu
    window.location.href = href; // Force navigation directly
  };

  // Function to show the consultation popup
  const handleConsultationClick = (e) => {
    e.preventDefault();
    closeMenu();

    // Track consultation button click in Google Analytics
    trackButtonClick('schedule_consultation_navbar', 'cta');

    // Track consultation button click in Meta Pixel
    trackMetaButtonClick('schedule_consultation_navbar', 'cta');
    trackMetaConsultationRequest();

    // Store in localStorage that we're manually showing the popup
    localStorage.setItem("popupShown", "true");

    // Dispatch a custom event that the PopupForm component will listen for
    const event = new Event("showConsultationPopup");
    window.dispatchEvent(event);
  };

  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
      if (careerDropdownRef.current && !careerDropdownRef.current.contains(event.target)) {
        setIsCareerDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center" onClick={(e) => handleNavigation(e, "/")}>
              <div className="relative h-12 w-52">
                <Image 
                  src="/images/skillcurve-logo.svg" 
                  alt="SkillCurve Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex-grow flex justify-end">
            <div className="hidden sm:flex sm:space-x-6 items-center">
              {/* Regular navigation items */}
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="border-transparent hover:border-[#0052CC] inline-flex items-center px-1 pt-1 border-b-2 text-base font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services dropdown - moved to after Home */}
              <div ref={servicesDropdownRef}>
                <DesktopDropdown
                  title="Our Services"
                  isOpen={isServicesDropdownOpen}
                  toggleDropdown={() => {
                    setIsServicesDropdownOpen(!isServicesDropdownOpen);
                    setIsAboutDropdownOpen(false);
                    setIsCareerDropdownOpen(false);
                  }}
                  items={servicesItems}
                  handleNavigation={handleNavigation}
                />
              </div>

              {/* AboutUs dropdown */}
              <div ref={aboutDropdownRef}>
                <DesktopDropdown
                  title="AboutUs"
                  isOpen={isAboutDropdownOpen}
                  toggleDropdown={() => {
                    setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    setIsServicesDropdownOpen(false);
                    setIsCareerDropdownOpen(false);
                  }}
                  items={aboutItems}
                  handleNavigation={handleNavigation}
                />
              </div>
              
              {/* Career dropdown */}
              <div ref={careerDropdownRef}>
                <DesktopDropdown 
                  title="Career"
                  isOpen={isCareerDropdownOpen}
                  toggleDropdown={() => {
                    setIsCareerDropdownOpen(!isCareerDropdownOpen);
                    setIsServicesDropdownOpen(false);
                    setIsAboutDropdownOpen(false);
                  }}
                  items={careerItems}
                  handleNavigation={handleNavigation}
                />
              </div>
              
              {/* ContactUs link - moved to end before button */}
              <Link 
                href="/contact" 
                className="border-transparent hover:border-[#0052CC] inline-flex items-center px-1 pt-1 border-b-2 text-base font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
                onClick={(e) => handleNavigation(e, "/contact")}
              >
                ContactUs
              </Link>
              
              {/* Consultation button */}
              <div className="ml-6">
                <a href="#" onClick={handleConsultationClick}>
                  <button className="py-2 px-4 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] text-white rounded-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Schedule A Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0052CC] hover:text-[#FF6B35] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0052CC]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - UPDATED to show all items flat without dropdowns */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Home link */}
            <a
              href="/"
              className="block border-l-4 border-transparent hover:border-[#0052CC] pl-3 pr-4 py-2 hover:bg-gray-50 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent text-lg font-bold cursor-pointer"
            >
              Home
            </a>

            {/* Services Section Header - moved after Home */}
            <SectionHeader title="Our Services" />

            {/* Services items directly listed */}
            {servicesItems.map((item, index) => (
              <a
                key={`service-${index}`}
                href={item.href}
                className="block border-l-4 border-transparent hover:border-[#0052CC] pl-6 pr-4 py-1 hover:bg-gray-50 text-gray-600 text-base cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            {/* About Section Header */}
            <SectionHeader title="AboutUs" />

            {/* About items directly listed */}
            {aboutItems.map((item, index) => (
              <a
                key={`about-${index}`}
                href={item.href}
                className="block border-l-4 border-transparent hover:border-[#0052CC] pl-6 pr-4 py-1 hover:bg-gray-50 text-gray-600 text-base cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            
            {/* Career Section Header */}
            <SectionHeader title="Career" />
            
            {/* Career items directly listed */}
            {careerItems.map((item, index) => (
              <a 
                key={`career-${index}`}
                href={item.href}
                className="block border-l-4 border-transparent hover:border-[#0052CC] pl-6 pr-4 py-1 hover:bg-gray-50 text-gray-600 text-base cursor-pointer"
              >
                {item.name}
              </a>
            ))}
            
            {/* ContactUs link - moved to end before button */}
            <a
              href="/contact"
              className="block border-l-4 border-transparent hover:border-[#0052CC] pl-3 pr-4 py-2 hover:bg-gray-50 bg-gradient-to-r from-[#0052CC] to-[#FF6B35] bg-clip-text text-transparent text-lg font-bold cursor-pointer"
            >
              ContactUs
            </a>
            
            {/* Consultation button */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <a 
                  href="#" 
                  className="w-full cursor-pointer" 
                  onClick={handleConsultationClick}
                >
                  <button className="block w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-[#0052CC] to-[#FF6B35] rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                    Schedule A Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 