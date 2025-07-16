# Meta Pixel Integration - SkillCurve

## 🎯 Overview

Meta Pixel (Facebook Pixel) has been integrated into the SkillCurve web application to track conversions, create custom audiences, and optimize Facebook/Instagram advertising campaigns. This implementation provides comprehensive insights into user behavior and enables powerful retargeting capabilities.

## 🚀 Quick Setup

### 1. Get Your Meta Pixel ID

1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Navigate to **Events Manager**
3. Select your Pixel or create a new one
4. Copy your Pixel ID (format: `123456789012345`)

### 2. Configure Environment Variables

```bash
# Add to your .env.local file
NEXT_PUBLIC_META_PIXEL_ID=YOUR_ACTUAL_PIXEL_ID

# Example:
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

### 3. Deploy and Verify

- Deploy your application
- Visit your site and check Facebook Events Manager
- Verify events are being tracked in real-time

## 📊 Tracking Implementation

### Standard Events Tracked

✅ **PageView** - Automatic tracking on all page navigation  
✅ **Lead** - Form submissions and consultation requests  
✅ **CompleteRegistration** - User registrations  
✅ **Contact** - Contact form submissions  
✅ **ViewContent** - Course and university page views  
✅ **Search** - Search functionality (when implemented)  
✅ **InitiateCheckout** - Course enrollment initiation  

### Custom Events Tracked

✅ **ConsultationRequest** - Consultation form submissions  
✅ **CourseInterest** - Course page interactions  
✅ **UniversityInterest** - University page visits  
✅ **FormSubmission** - All form submissions  
✅ **ButtonClick** - CTA button interactions  
✅ **SocialClick** - Social media link clicks  

## 🎯 Key Events for SkillCurve

### Lead Generation Events
- **Lead**: Consultation popup form submissions
- **ConsultationRequest**: All consultation requests
- **Contact**: Contact form submissions

### Engagement Events
- **ViewContent**: Course and university page views
- **CourseInterest**: Course interaction tracking
- **UniversityInterest**: University page visits
- **ButtonClick**: CTA button clicks
- **SocialClick**: Social media interactions

### Conversion Events
- **CompleteRegistration**: User sign-ups
- **InitiateCheckout**: Course enrollment starts

## 📈 Facebook Ads Optimization

### Custom Audiences
Create audiences based on:
- **Website Visitors**: All site visitors
- **Course Interested**: Users who viewed courses
- **University Interested**: Users who viewed universities
- **Consultation Requested**: Users who requested consultations
- **Form Abandoners**: Users who started but didn't complete forms

### Lookalike Audiences
Create lookalike audiences from:
- **Consultation Requesters**: Find similar potential students
- **Course Viewers**: Target users interested in education
- **High-Value Visitors**: Users with multiple page views

### Conversion Campaigns
Optimize for:
- **Lead Generation**: Consultation requests
- **Traffic**: Website visits
- **Engagement**: Course and university interest

## 🔧 Advanced Features

### Event Parameters
All events include relevant parameters:
```javascript
// Course Interest Example
{
  content_name: "Data Science Course",
  content_category: "Technology",
  value: 0,
  currency: "USD"
}

// Consultation Request Example
{
  content_name: "MBA Consultation",
  content_category: "Business",
  value: 0,
  currency: "USD"
}
```

### Custom Tracking Functions

```javascript
import { 
  trackMetaLead,
  trackMetaViewContent,
  trackMetaCourseInterest,
  trackMetaUniversityInterest,
  trackMetaConsultationRequest
} from '@/components/MetaPixel';

// Track lead generation
trackMetaLead(0, 'USD', 'Consultation Form');

// Track content views
trackMetaViewContent('Course Name', 'Education', 0);

// Track course interest
trackMetaCourseInterest('Data Science', 'Technology');

// Track university interest
trackMetaUniversityInterest('Manipal University');

// Track consultation requests
trackMetaConsultationRequest('MBA Program');
```

## 📊 Facebook Events Manager

Monitor these metrics in Events Manager:

### Real-time Events
- Page views and user sessions
- Form submissions and leads
- Button clicks and interactions
- Course and university interests

### Conversion Tracking
- Lead generation rate
- Consultation request volume
- Course interest patterns
- User journey analysis

### Audience Insights
- Demographics and interests
- Device and platform usage
- Geographic distribution
- Behavior patterns

## 🎯 Campaign Optimization

### Lead Generation Campaigns
- Target: Users interested in education
- Optimize for: Lead events
- Audience: Lookalike of consultation requesters

### Retargeting Campaigns
- Target: Website visitors who didn't convert
- Optimize for: Consultation requests
- Audience: Course viewers who didn't submit forms

### Awareness Campaigns
- Target: Broad education-interested audience
- Optimize for: Traffic and engagement
- Audience: Interests in online education, career development

## 🔒 Privacy & Compliance

### Data Protection
- ✅ No PII (Personally Identifiable Information) sent to Meta
- ✅ Anonymous user behavior tracking only
- ✅ GDPR and CCPA compliant implementation
- ✅ Respects user privacy preferences

### Consent Management
- Events only fire for consenting users
- Respects browser privacy settings
- Compatible with cookie consent tools

## 🛠️ Troubleshooting

### Common Issues
1. **Events not showing**: Check Pixel ID configuration
2. **Delayed events**: Allow 15-30 minutes for data processing
3. **Missing parameters**: Verify event implementation

### Testing
1. Use Facebook Pixel Helper browser extension
2. Check Events Manager Test Events tool
3. Verify events in real-time dashboard

## 📞 Support Resources

- [Facebook Business Help Center](https://www.facebook.com/business/help)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [Events Manager Guide](https://www.facebook.com/business/help/898185560232180)

---

**Status**: ✅ Ready for Meta Pixel ID Configuration

**Next Step**: Add your Meta Pixel ID to environment variables and deploy!
