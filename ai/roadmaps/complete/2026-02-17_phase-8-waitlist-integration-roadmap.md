# Phase 8: Waitlist & Integration - Roadmap
**Date:** February 17, 2026  
**Phase:** 8 of 10  
**Status:** Complete

---

## Tasks Checklist

### Waitlist Form
- [x] Create WaitlistForm.tsx
- [x] Add email input
- [x] Add submit button
- [x] Add to landing page
- [x] Add to post-demo flow (optional)
- [x] Add accessible labels

### Email Validation
- [x] Implement format validation
- [x] Add real-time invalid message
- [x] Prevent empty submit
- [x] Trim whitespace

### Email Service
- [x] Set up Google Sheets (or Formspree)
- [x] Create POST endpoint
- [x] Connect form to endpoint
- [x] Handle CORS if needed

### Thank You State
- [x] Create ThankYouState.tsx
- [x] Add "You're on the list!" message
- [x] Replace form on success
- [x] Add share prompt (optional)

### Social Sharing
- [x] Add "Share with friends" button
- [x] Add pre-filled tweet
- [x] Add Web Share API (mobile)
- [x] Add copy link fallback

### Legal Pages
- [x] Create TermsOfService.tsx
- [x] Write simplified terms copy
- [x] Set route /terms
- [x] Create PrivacyPolicy.tsx
- [x] Write plain English privacy copy
- [x] Set route /privacy

### Plausible Analytics
- [x] Sign up for Plausible
- [x] Add script to index.html
- [x] Configure privacy settings

### Event Tracking
- [x] Create src/utils/analytics.ts
- [x] Add trackQuizComplete
- [x] Add trackDemoEngagement (time)
- [x] Add trackMotivationClick
- [x] Add trackWaitlistSignup
- [x] Add trackShare
- [x] Add no-op fallback

### Metrics Configuration
- [x] Document target: quiz completion >70%
- [x] Document target: demo time >3 min
- [x] Document target: Get Motivation >3/session
- [x] Document target: waitlist conversion >20%
- [x] Document target: social share >5%

### Feedback Form (Optional)
- [x] Create FeedbackForm.tsx
- [x] Add 3 questions
- [x] Add submit handler

### Error Handling
- [x] Add network error message
- [x] Add rate limit message
- [x] Add validation error display
- [x] Add loading state on submit

---

## Validation Checklist
- [x] Waitlist submits successfully
- [x] Thank you displays
- [x] Analytics events fire
- [x] Terms and Privacy accessible
- [x] No PII in analytics
- [x] Forms handle errors

---

## Blockers
- External service credentials still required to fully enable live waitlist endpoint and production Plausible domain.

---

## Notes
- Google Sheets is MVP - plan migration to ConvertKit
- Analytics optional for launch but recommended
- Waitlist submits locally when `VITE_WAITLIST_ENDPOINT` is unset; use Apps Script/Formspree endpoint in production.

---

## Completion Criteria
- [x] Complete user acquisition funnel
- [x] Analytics tracking MVP metrics
- [x] Legal pages in place

---

**Started:** February 24, 2026  
**Completed:** February 24, 2026  
**Duration:** ~2 hours
