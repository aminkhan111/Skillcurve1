"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

// Create context
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

// Hook to use the loading context
export const useLoading = () => useContext(LoadingContext);

// Provider component
export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // Enhanced navigation function that shows loader
  const navigateWithLoading = useCallback((url) => {
    setIsLoading(true);
    
    try {
      // Check if on mobile
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      
      // Set up timeout to ensure the loader is eventually closed
      const safetyTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Longer timeout as safety measure
      
      // For mobile, try both approaches with preference for direct navigation
      if (isMobile) {
        try {
          window.location.href = url;
        } catch (mobileError) {
          console.error("Mobile direct navigation failed, trying router:", mobileError);
          router.push(url);
        }
      } else {
        // For desktop, use Next.js router
        router.push(url);
      }
      
      // Hide loader after a consistent delay for better UX
      setTimeout(() => {
        setIsLoading(false);
        clearTimeout(safetyTimeout);
      }, 800);
    } catch (error) {
      console.error("Navigation error:", error);
      // Final fallback to direct navigation
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
      setIsLoading(false);
    }
  }, [router]);
  
  const value = {
    isLoading,
    setIsLoading,
    navigateWithLoading,
  };
  
  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
} 