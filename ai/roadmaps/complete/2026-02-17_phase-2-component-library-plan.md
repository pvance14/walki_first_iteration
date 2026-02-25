# Phase 2: Component Library - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 2 of 10  
**Timeline:** Days 3-4  
**Status:** Not Started

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Build a complete, reusable UI component library for the Walki web demo MVP.

---

## Prerequisites
- Phase 0 completed (project foundation)
- Phase 1 completed (data and personas with official colors)
- TailwindCSS configured
- TypeScript strict mode enabled

---

## Tasks

### 1. Set Up Shadcn/ui
- Install Shadcn/ui: `npx shadcn-ui@latest init`
- Configure with Tailwind
- Set up CSS variables for theming
- Verify base installation works
- Configure component defaults (per architecture.md)

### 2. Implement Persona Color Scheme
- Create `src/styles/personaColors.ts` or extend Tailwind config
- Define CSS variables for 6 persona colors:
  * **Sunny** - #F97316 (orange-500)
  * **Dr. Quinn** - #3B82F6 (blue-500)
  * **Pep** - #EC4899 (pink-500)
  * **Rico** - #EF4444 (red-500)
  * **Fern** - #10B981 (emerald-500)
  * **Rusty** - #6B7280 (gray-500)
- Ensure colors meet contrast requirements for accessibility
- Export color utilities for component use

### 3. Create Base Components
- **Button:** Primary, secondary, outline variants; loading state; persona-colored variant
- **Input:** Text input with label, error state; mobile-friendly sizing
- **Modal:** Overlay, close button, focus trap, backdrop click to close
- **Card:** Base card with optional header, footer; shadow variants
- Add to `src/components/shared/`
- Export from shared index

### 4. Build ProgressBar Component
- Create `src/components/shared/ProgressBar.tsx`
- Animate progress with CSS or Framer Motion
- Support steps/goal display (e.g., 6,247/7,000)
- Milestone marker styling (optional subtle pulse at 100%)
- Responsive sizing (works on mobile)
- Accept persona color for accent

### 5. Build StreakCounter Component
- Create `src/components/shared/StreakCounter.tsx`
- Display current streak number prominently
- Milestone effects (7, 14, 21 days) - subtle celebration styling
- Fire emoji or icon for streak visualization
- Animate on value change

### 6. Build NotificationCard Component
- Create `src/components/shared/NotificationCard.tsx`
- Persona styling (border color, accent)
- Display message text, timestamp
- Persona avatar/icon
- Hover state for interactivity

### 7. Build PersonaCard Component
- Create `src/components/shared/PersonaCard.tsx`
- Display persona name, title, color
- Hover effects (scale, shadow)
- Optional: avatar placeholder
- Click handler for selection

### 8. Build Quiz Components
- **QuizQuestion:** Question text, 4 answer options, selection state
- **QuizProgress:** Progress indicator (e.g., 2/7)
- Create in `src/components/quiz/`
- Wire to quiz data types from Phase 1

### 9. Implement Responsive Navigation
- Create `src/components/shared/Navigation.tsx`
- Mobile: hamburger menu or bottom nav
- Desktop: horizontal nav bar
- Breakpoint-aware layout
- Links: Home, Quiz, Demo (when available)

### 10. Set Up Framer Motion
- Install: `npm install framer-motion`
- Create reusable animation variants (fade, slide, scale)
- Configure reduced-motion preference respect
- Use for: modal open/close, card hover, progress animation

### 11. Test All Components in Isolation
- Create `src/pages/ComponentShowcase.tsx` (dev-only route)
- Render each component with sample data
- Test responsive breakpoints
- Verify accessibility (keyboard nav, focus states)
- Remove or gate showcase before Phase 9

---

## Deliverables
- ✅ Shadcn/ui configured and themed
- ✅ Persona color scheme implemented
- ✅ Base components (Button, Input, Modal, Card)
- ✅ ProgressBar with animations
- ✅ StreakCounter with milestone effects
- ✅ NotificationCard with persona styling
- ✅ PersonaCard with hover effects
- ✅ Quiz components (QuizQuestion, QuizProgress)
- ✅ Responsive navigation
- ✅ Framer Motion configured
- ✅ Component showcase for testing

---

## Success Criteria
- All components render without errors
- Persona colors match mvp.md specification
- Components are responsive (mobile-first)
- Animations respect prefers-reduced-motion
- No layout shift (CLS) on load
- Components accept typed props from Phase 1 data

---

## Technical Notes

### Shadcn/ui Init
```bash
npx shadcn-ui@latest init
# Select: Default style, Zinc slate, CSS variables
```

### Persona Color Tailwind Config
```javascript
// tailwind.config.js - extend colors
persona: {
  sunny: '#F97316',
  quinn: '#3B82F6',
  pep: '#EC4899',
  rico: '#EF4444',
  fern: '#10B981',
  rusty: '#6B7280',
}
```

### Framer Motion Reduced Motion
```tsx
import { useReducedMotion } from 'framer-motion';
const shouldReduceMotion = useReducedMotion();
// Use duration: shouldReduceMotion ? 0 : 0.3
```

---

## Common Issues & Solutions

**Issue:** Shadcn components don't match design  
**Solution:** Override with Tailwind classes; customize in components.json

**Issue:** Animations feel janky on mobile  
**Solution:** Use transform/opacity only; avoid animating layout properties

**Issue:** Persona colors inconsistent  
**Solution:** Use CSS variables or Tailwind config - single source of truth

**Issue:** Modal focus trap not working  
**Solution:** Ensure Radix/shadcn Dialog has proper aria attributes

---

## Next Phase
Phase 3: Landing Page (Day 4-5)
