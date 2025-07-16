"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Meta Pixel ID - replace with your actual Meta Pixel ID
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'YOUR_PIXEL_ID_HERE';

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (typeof window !== 'undefined' && META_PIXEL_ID && META_PIXEL_ID !== 'YOUR_PIXEL_ID_HERE') {
    // Initialize Facebook Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

// Track page views
export const trackMetaPageView = () => {
  if (typeof window !== 'undefined' && window.fbq && META_PIXEL_ID !== 'YOUR_PIXEL_ID_HERE') {
    window.fbq('track', 'PageView');
  }
};

// Track custom events
export const trackMetaEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.fbq && META_PIXEL_ID !== 'YOUR_PIXEL_ID_HERE') {
    window.fbq('track', eventName, parameters);
  }
};

// Track standard events
export const trackMetaLead = (value = 0, currency = 'USD', contentName = '') => {
  trackMetaEvent('Lead', {
    value: value,
    currency: currency,
    content_name: contentName,
  });
};

export const trackMetaCompleteRegistration = (value = 0, currency = 'USD') => {
  trackMetaEvent('CompleteRegistration', {
    value: value,
    currency: currency,
  });
};

export const trackMetaContact = (contentName = '') => {
  trackMetaEvent('Contact', {
    content_name: contentName,
  });
};

export const trackMetaViewContent = (contentName = '', contentCategory = '', value = 0) => {
  trackMetaEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
    value: value,
    currency: 'USD',
  });
};

export const trackMetaSearch = (searchString = '', contentCategory = '') => {
  trackMetaEvent('Search', {
    search_string: searchString,
    content_category: contentCategory,
  });
};

export const trackMetaInitiateCheckout = (value = 0, currency = 'USD', contentName = '') => {
  trackMetaEvent('InitiateCheckout', {
    value: value,
    currency: currency,
    content_name: contentName,
  });
};

// Custom events for SkillCurve
export const trackMetaConsultationRequest = (courseName = '', universityName = '') => {
  trackMetaLead(0, 'USD', `Consultation Request - ${courseName || universityName || 'General'}`);
  
  // Also track as custom event
  trackMetaEvent('ConsultationRequest', {
    content_name: courseName || universityName || 'General',
    content_category: courseName ? 'Course' : universityName ? 'University' : 'General',
  });
};

export const trackMetaCourseInterest = (courseName = '', courseCategory = '') => {
  trackMetaViewContent(courseName, courseCategory || 'Course', 0);
  
  // Custom event for course interest
  trackMetaEvent('CourseInterest', {
    content_name: courseName,
    content_category: courseCategory || 'Course',
  });
};

export const trackMetaUniversityInterest = (universityName = '') => {
  trackMetaViewContent(universityName, 'University', 0);
  
  // Custom event for university interest
  trackMetaEvent('UniversityInterest', {
    content_name: universityName,
    content_category: 'University',
  });
};

export const trackMetaFormSubmission = (formName = '', formType = 'lead') => {
  if (formType === 'lead') {
    trackMetaLead(0, 'USD', formName);
  } else {
    trackMetaCompleteRegistration(0, 'USD');
  }
  
  // Custom event for form tracking
  trackMetaEvent('FormSubmission', {
    content_name: formName,
    content_category: formType,
  });
};

export const trackMetaButtonClick = (buttonName = '', buttonType = 'cta') => {
  trackMetaEvent('ButtonClick', {
    content_name: buttonName,
    content_category: buttonType,
  });
};

export const trackMetaSocialClick = (platform = '') => {
  trackMetaEvent('SocialClick', {
    content_name: platform,
    content_category: 'Social Media',
  });
};

// Component to handle route changes and track page views
function MetaPixelInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Meta Pixel on component mount
    initMetaPixel();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      trackMetaPageView();
    }
  }, [pathname, searchParams]);

  return null;
}

// Wrap the component with Suspense to handle useSearchParams
export default function MetaPixel() {
  return (
    <Suspense fallback={null}>
      <MetaPixelInner />
    </Suspense>
  );
}
