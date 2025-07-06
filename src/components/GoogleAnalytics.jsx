"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-L0HKV1HFTM';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName, formType = 'lead_generation') => {
  trackEvent('form_submit', 'form_interaction', formName, 1);
  
  // Track as conversion for lead generation forms
  if (formType === 'lead_generation' && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GA_MEASUREMENT_ID,
      event_category: 'lead_generation',
      event_label: formName,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonType = 'cta') => {
  trackEvent('click', 'button_interaction', buttonName, 1);
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', 'social_interaction', 'whatsapp_button', 1);
};

// Track course interest
export const trackCourseInterest = (courseName) => {
  trackEvent('course_interest', 'course_interaction', courseName, 1);
};

// Track university interest
export const trackUniversityInterest = (universityName) => {
  trackEvent('university_interest', 'university_interaction', universityName, 1);
};

// Track navigation clicks
export const trackNavigation = (pageName) => {
  trackEvent('navigation_click', 'navigation', pageName, 1);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};

// Track time on page (call when user leaves page)
export const trackTimeOnPage = (timeInSeconds, pageName) => {
  trackEvent('time_on_page', 'engagement', pageName, timeInSeconds);
};

// Track video interactions (if you add videos later)
export const trackVideoInteraction = (action, videoTitle) => {
  trackEvent(`video_${action}`, 'video_interaction', videoTitle, 1);
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', 'download', `${fileName}.${fileType}`, 1);
};

// Track search queries (if you add search functionality)
export const trackSearch = (searchTerm, resultsCount = 0) => {
  trackEvent('search', 'search_interaction', searchTerm, resultsCount);
};

// Track consultation booking success
export const trackConsultationBooked = (consultationType = 'general') => {
  trackEvent('consultation_booked', 'conversion', consultationType, 1);

  // Track as a conversion event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GA_MEASUREMENT_ID,
      event_category: 'consultation',
      event_label: consultationType,
    });
  }
};

// Component to handle route changes and track page views
function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize GA on component mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      const url = window.location.href;
      const title = document.title;
      trackPageView(url, title);
    }
  }, [pathname, searchParams]);

  return null;
}

// Wrap the component with Suspense to handle useSearchParams
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  );
}
