"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedCoursesSection from "@/components/home/FeaturedCoursesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CTASection";
import UniversityLogosSection from "@/components/home/UniversityLogosSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <UniversityLogosSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
} 