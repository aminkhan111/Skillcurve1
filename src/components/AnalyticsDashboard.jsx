"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// This is a simple client-side analytics dashboard component
// For production, you'd want to use Google Analytics Reporting API
// or a third-party analytics service for more comprehensive data

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    formSubmissions: 0,
    buttonClicks: 0,
    courseInterests: 0,
    universityInterests: 0,
    whatsappClicks: 0,
  });

  useEffect(() => {
    // In a real implementation, you would fetch this data from your analytics API
    // For now, we'll simulate some data or get it from localStorage
    const getStoredAnalytics = () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('skillcurve_analytics');
        if (stored) {
          return JSON.parse(stored);
        }
      }
      return analytics;
    };

    setAnalytics(getStoredAnalytics());
  }, []);

  const analyticsCards = [
    {
      title: 'Page Views',
      value: analytics.pageViews,
      icon: '👁️',
      color: 'from-blue-500 to-blue-600',
      description: 'Total page views'
    },
    {
      title: 'Form Submissions',
      value: analytics.formSubmissions,
      icon: '📝',
      color: 'from-green-500 to-green-600',
      description: 'Consultation forms submitted'
    },
    {
      title: 'Button Clicks',
      value: analytics.buttonClicks,
      icon: '🖱️',
      color: 'from-purple-500 to-purple-600',
      description: 'CTA button interactions'
    },
    {
      title: 'Course Interests',
      value: analytics.courseInterests,
      icon: '📚',
      color: 'from-orange-500 to-orange-600',
      description: 'Course page visits'
    },
    {
      title: 'University Interests',
      value: analytics.universityInterests,
      icon: '🎓',
      color: 'from-indigo-500 to-indigo-600',
      description: 'University page visits'
    },
    {
      title: 'WhatsApp Clicks',
      value: analytics.whatsappClicks,
      icon: '💬',
      color: 'from-green-400 to-green-500',
      description: 'WhatsApp button clicks'
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Monitor your website performance and user engagement</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {analyticsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center text-white text-xl`}>
                  {card.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{card.value.toLocaleString()}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics Integration Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-800 font-medium">Google Analytics 4</span>
              <span className="text-green-600 text-sm">✅ Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-800 font-medium">Event Tracking</span>
              <span className="text-blue-600 text-sm">✅ Configured</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-purple-800 font-medium">Conversion Tracking</span>
              <span className="text-purple-600 text-sm">✅ Enabled</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-2">View Full Analytics</h3>
          <p className="text-blue-100 mb-4">
            For comprehensive analytics data, visit your Google Analytics dashboard.
          </p>
          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Open Google Analytics
          </a>
        </motion.div>
      </div>
    </div>
  );
}
