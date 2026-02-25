# Phase 8: Waitlist & Integration - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 8 of 10  
**Timeline:** Day 9  
**Status:** Not Started

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Capture user interest via waitlist, integrate analytics, and add legal pages.

---

## Prerequisites
- Phases 0-7 completed
- Landing page and demo accessible
- Email service option (Google Sheets for MVP)

---

## Tasks

### 1. Waitlist Form Design
- Create `src/components/waitlist/WaitlistForm.tsx`
- Email input field
- Submit button
- Minimal fields (email only for MVP)
- Place on landing page and/or after demo
- Accessible labels and ARIA

### 2. Email Validation
- Client-side: format validation (regex or library)
- Real-time feedback (invalid format message)
- Prevent empty submission
- Trim whitespace

### 3. Integration with Email Service
- Google Sheets: use Google Apps Script or form action
- Alternative: Formspree, ConvertKit (later migration)
- POST to endpoint with email
- Handle CORS if client-side fetch

### 4. Thank You State After Signup
- Create `src/components/waitlist/ThankYouState.tsx`
- "You're on the list!" message
- Optional: share prompt
- Replace form with thank you on success

### 5. Social Sharing from Waitlist
- "Share with friends" buttons (Twitter, copy link)
- Pre-filled tweet: "I joined the Walki waitlist - AI walking motivation!"
- Web Share API on mobile

### 6. Create Terms of Service Page
- Create `src/pages/TermsOfService.tsx`
- Simplified for demo (not full legal)
- Key points: demo only, no guarantee, use at own risk
- Route: `/terms`

### 7. Draft Privacy Policy
- Create `src/pages/PrivacyPolicy.tsx`
- Plain English per prd.md Appendix C
- Sections: what we collect, how we use, sharing, cookies, contact
- Route: `/privacy`

### 8. Plausible Analytics Integration
- Sign up for Plausible (or alternative)
- Add script to index.html
- Configure for privacy (no cookies, GDPR compliant)

### 9. Configure Analytics Event Tracking
- Quiz completion: fire on navigate to /results
- Demo engagement: time on /demo (track duration)
- "Get Motivation" click: fire on each click
- Waitlist signup: fire on successful submit
- Social share: fire when share triggered

### 10. MVP Metrics Targets (Configure Events)
- Quiz completion rate (target >70%)
- Demo engagement time (target >3 min)
- "Get Motivation" click rate (target >3/session)
- Waitlist conversion (target >20%)
- Social share rate (target >5%)

### 11. Event Tracking Implementation
- Create `src/utils/analytics.ts`
- Functions: trackQuizComplete, trackDemoEngagement, trackMotivationClick, trackWaitlistSignup, trackShare
- No-op if analytics not loaded
- Privacy-compliant (no PII in events)

### 12. Feedback Form (Optional)
- Create `src/components/waitlist/FeedbackForm.tsx`
- 3 questions: What did you like? What could improve? Would you use this?
- Submit to same backend or separate
- Optional - can defer to Phase 11

### 13. Error Handling for Form Submission
- Network error: show retry message
- Rate limit: show "Try again later"
- Validation error: show field-level message

---

## Deliverables
- ✅ Waitlist form design
- ✅ Email validation
- ✅ Email service integration (Google Sheets)
- ✅ Thank you state
- ✅ Social sharing from waitlist
- ✅ Terms of Service page
- ✅ Privacy Policy page
- ✅ Plausible analytics integration
- ✅ Event tracking for MVP metrics
- ✅ Privacy-compliant analytics
- ✅ Optional feedback form
- ✅ Error handling for forms

---

## Success Criteria
- Waitlist form submits successfully
- Thank you displays on success
- Analytics events fire correctly
- Terms and Privacy pages accessible
- No PII sent to analytics
- Forms handle errors gracefully

---

## Technical Notes

### Google Sheets Integration (Apps Script)
```javascript
// Deploy as Web App, POST to doPost
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.email]);
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Analytics Helper
```typescript
export const analytics = {
  trackQuizComplete: () => {
    if (window.plausible) window.plausible('Quiz Complete');
  },
  trackMotivationClick: () => {
    if (window.plausible) window.plausible('Get Motivation Click');
  },
  // ...
};
```

### MVP Metrics Dashboard
- Create custom dashboard in Plausible for:
  - Quiz completes / Quiz starts
  - Avg time on /demo
  - Get Motivation clicks per session
  - Waitlist signups / Demo visitors
  - Share events

---

## Common Issues & Solutions

**Issue:** Google Sheets CORS  
**Solution:** Use Apps Script Web App; set CORS headers or use serverless proxy

**Issue:** Analytics not loading  
**Solution:** Wrap in try/catch; ensure script loads from CDN

**Issue:** Duplicate waitlist signups  
**Solution:** Check existing emails in sheet; or allow duplicates (dedupe later)

**Issue:** Form submit fails silently  
**Solution:** Always show feedback (success or error); add loading state

---

## Next Phase
Phase 9: Polish & Optimization (Day 10)
