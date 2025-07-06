This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Analytics Integration

This project includes comprehensive Google Analytics 4 (GA4) tracking for monitoring user behavior, conversions, and engagement metrics.

### Setup

1. **Get your Google Analytics Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property or use an existing one
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Configure Environment Variables:**
   ```bash
   # Create a .env.local file in the root directory
   cp .env.example .env.local

   # Edit .env.local and add your Measurement ID
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-MEASUREMENT-ID
   ```

3. **Deploy and Verify:**
   - Deploy your application
   - Visit your site and check Google Analytics Real-time reports
   - Verify that page views and events are being tracked

### Tracked Events

The application automatically tracks the following user interactions:

#### **Form Submissions**
- Consultation popup form submissions
- Contact form submissions
- Lead generation conversions

#### **Button Clicks**
- CTA buttons (Schedule Consultation, Browse Courses)
- Navigation menu items
- Course and university interest buttons

#### **Social Media Interactions**
- WhatsApp button clicks
- Instagram and LinkedIn link clicks

#### **Content Engagement**
- Course interest tracking
- University page visits
- Page navigation patterns

#### **Conversions**
- Form submissions marked as conversion events
- Consultation bookings
- Course inquiries

### Custom Events Available

You can use these tracking functions throughout the application:

```javascript
import {
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackCourseInterest,
  trackUniversityInterest,
  trackWhatsAppClick
} from '@/components/GoogleAnalytics';

// Track custom events
trackEvent('custom_action', 'category', 'label', value);

// Track form submissions
trackFormSubmission('form_name', 'lead_generation');

// Track button clicks
trackButtonClick('button_name', 'cta');

// Track course interest
trackCourseInterest('Course Name');

// Track university interest
trackUniversityInterest('University Name');

// Track WhatsApp interactions
trackWhatsAppClick();
```

### Analytics Dashboard

Monitor these key metrics in your Google Analytics dashboard:

1. **Conversions:** Form submissions and consultation bookings
2. **Engagement:** Button clicks, course interests, time on page
3. **Traffic Sources:** How users find your site
4. **User Journey:** Path through your conversion funnel
5. **Popular Content:** Most viewed courses and universities

### Privacy Compliance

The implementation follows privacy best practices:
- Only tracks anonymous user behavior
- No personally identifiable information (PII) is sent to GA
- Respects user privacy preferences
- Compatible with GDPR and other privacy regulations
