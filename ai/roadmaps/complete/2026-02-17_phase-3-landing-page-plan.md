# Phase 3: Landing Page - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 3 of 10  
**Timeline:** Day 4-5  
**Status:** Not Started

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Create a compelling, production-ready landing page that drives users to the motivation quiz.

---

## Prerequisites
- Phase 0 and 1 completed
- Phase 2 completed (component library)
- Navigation component ready
- PersonaCard and shared components available

---

## Tasks

### 1. Hero Section
- Create `src/components/landing/HeroSection.tsx`
- Headline: compelling value proposition (e.g., "Your AI walking companion, tailored to you")
- Subheadline: brief description
- Primary CTA button: "Find Your Persona" → links to `/quiz`
- Secondary CTA (optional): "See How It Works"
- Full-width layout, centered content
- Mobile: stacked layout, larger touch targets

### 2. Problem Statement Section
- Create `src/components/landing/ProblemSection.tsx`
- 2-3 pain points (e.g., generic fitness apps, motivation burnout)
- Simple icons or illustrations (optional, can use emoji)
- Concise copy - no walls of text

### 3. Solution Overview with Persona Previews
- Create `src/components/landing/SolutionSection.tsx`
- Brief "How Walki is different" statement
- Use PersonaCard components to preview 6 personas
- Grid layout: 2 columns mobile, 3 columns tablet, 6 columns desktop
- Link to quiz from section

### 4. How It Works Section
- Create `src/components/landing/HowItWorksSection.tsx`
- 3-step flow: Take Quiz → Get Your Persona → Receive Motivation
- Numbered or icon-based steps
- Minimal copy per step
- Visual flow (arrow or line connecting steps)

### 5. Privacy Promise Section
- Create `src/components/landing/PrivacySection.tsx`
- Key message: "Your data stays yours" or similar
- 2-3 bullet points (no tracking, no ads, privacy-first)
- Differentiator from other fitness apps

### 6. Footer
- Create `src/components/landing/Footer.tsx`
- Links: Terms of Service, Privacy Policy (placeholder if not yet created)
- Social links (optional)
- Copyright notice
- CTA reminder (Find Your Persona)

### 7. Mobile Responsive Design
- Test all sections at 320px, 375px, 768px, 1024px
- Ensure CTAs remain visible above fold on mobile
- Adequate spacing and touch targets (44px min)
- No horizontal scroll

### 8. Animations and Micro-interactions
- Subtle fade-in on scroll (Intersection Observer or Framer Motion)
- Button hover/active states
- Section stagger (optional) for polish
- Keep animations lightweight (< 300ms)

### 9. Meta Tags for SEO and Social Sharing
- Add to `index.html` or via React Helmet:
  - Title, description, keywords
  - Open Graph tags (og:title, og:description, og:image)
  - Twitter card tags
- Prepare placeholder og:image (1200x630) or use gradient

### 10. Assemble Landing Page
- Create `src/pages/LandingPage.tsx`
- Compose all sections in order
- Include Navigation
- Set route `/` to LandingPage
- Verify scroll behavior and anchor links

---

## Deliverables
- ✅ Hero section with headline and CTA
- ✅ Problem statement section
- ✅ Solution overview with persona previews
- ✅ How It Works section
- ✅ Privacy promise section
- ✅ Footer with links
- ✅ Mobile-responsive design
- ✅ Animations and micro-interactions
- ✅ Meta tags for SEO and social sharing
- ✅ CTAs linked to quiz

---

## Success Criteria
- Page loads in <3 seconds
- All CTAs navigate to `/quiz`
- No layout issues at any breakpoint
- Accessible (semantic HTML, heading hierarchy)
- Meta tags render correctly for sharing

---

## Technical Notes

### Section Structure
```tsx
// LandingPage.tsx
<section id="hero">...</section>
<section id="problem">...</section>
<section id="solution">...</section>
<section id="how-it-works">...</section>
<section id="privacy">...</section>
<Footer />
```

### Intersection Observer for Scroll Animations
```tsx
const ref = useRef(null);
const [visible, setVisible] = useState(false);
useEffect(() => {
  const ob = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
  ob.observe(ref.current);
  return () => ob.disconnect();
}, []);
```

### Open Graph Tags
```html
<meta property="og:title" content="Walki - Your AI Walking Companion" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Common Issues & Solutions

**Issue:** Hero CTA not above fold on mobile  
**Solution:** Reduce hero height, move subheadline; ensure CTA visible without scroll

**Issue:** Persona cards overflow on small screens  
**Solution:** Use 2-column grid on mobile, scroll horizontally or wrap

**Issue:** Animations feel slow  
**Solution:** Reduce duration to 200-300ms; use transform only

**Issue:** Meta tags not updating for SPA  
**Solution:** Use react-helmet-async or ensure index.html has defaults

---

## Next Phase
Phase 4: Motivation Quiz (Days 5-6)
