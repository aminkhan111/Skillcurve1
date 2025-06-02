"use client";

import { useLoading } from "../ui/LoadingProvider";

/**
 * Custom hook that provides navigation functions with loading state
 * 
 * @returns {Object} Navigation helper functions
 */
export function useNavigation() {
  const { navigateWithLoading, setIsLoading } = useLoading();
  
  /**
   * Navigate to a new page with loading animation
   * @param {string} url - The URL to navigate to
   */
  const navigate = (url) => {
    navigateWithLoading(url);
  };
  
  /**
   * Show loading animation for any action
   * @param {Function} callback - Function to execute during loading
   * @param {number} duration - How long to show the loader (ms)
   */
  const withLoading = async (callback, duration = 800) => {
    setIsLoading(true);
    
    try {
      if (callback) {
        if (callback.then) {
          await callback();
        } else {
          callback();
        }
      }
    } finally {
      // Ensure loader is shown for at least the minimum duration
      setTimeout(() => {
        setIsLoading(false);
      }, duration);
    }
  };
  
  return {
    navigate,
    withLoading
  };
} 