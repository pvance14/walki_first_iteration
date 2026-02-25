# Changelog

This is meant to be a CONCISE list of changes to track as we develop this project. When adding to this file, keep comments short and summarized. Always add references back to the source plan docs for each set of changes.

---

## Phase 8: Waitlist & Integration - Feb 24, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-8-waitlist-integration-roadmap.md`

- Added waitlist components in `src/components/waitlist` (`WaitlistForm`, `ThankYouState`, `WaitlistSection`) with email validation, loading/error states, and post-signup sharing (Web Share, X intent, clipboard)
- Added optional 3-question feedback capture UI in `src/components/waitlist/FeedbackForm.tsx` and integrated it after the demo experience
- Added waitlist submission utility in `src/utils/waitlist.ts` with trimmed/lowercased email normalization, typed error handling, endpoint POST support via `VITE_WAITLIST_ENDPOINT`, and local-storage fallback when endpoint is not configured
- Added analytics helper in `src/utils/analytics.ts` with no-op fallback and event functions for quiz completion, demo engagement duration, motivation clicks, waitlist signups, and share events
- Wired analytics events into `src/pages/QuizPage.tsx`, `src/pages/DemoPage.tsx`, `src/components/demo/DemoHome.tsx`, and `src/pages/QuizResultsPage.tsx`
- Added legal pages `src/pages/TermsOfService.tsx` and `src/pages/PrivacyPolicy.tsx`, routes `/terms` + `/privacy`, and fixed footer links to those routes
- Added Plausible tagged-events script to `index.html` and documented MVP metric targets in `aiDocs/metrics.md`
- Updated and moved phase 8 plan/roadmap docs to `ai/roadmaps/complete/`
- `npm run type-check` passes
- `npm run build` passes (existing bundle size warning remains)

## Structured Logging - Feb 24, 2026
**Reference:** User request (structured logging + AI debugging docs)

- Added pino-style structured logger at [`src/lib/logger.ts`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/lib/logger.ts) with JSON output, numeric levels, session/sequence IDs, and child scoped loggers
- Added in-browser ring buffer (`window.__walkiLogs`, max 500 entries) to support AI/debug inspection without relying only on console history
- Instrumented app boot, global error boundary, quiz store, demo store, message selection, demo motivation flow, and results sharing actions with structured events
- Added logging/testing guide at [`ai/guides/testing.md`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/ai/guides/testing.md) describing where logs are emitted and how to query them
- `npm run type-check` passes

## UI Updates - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-23_ui-updates-roadmap.md`

- Added cinematic persona reveal in `src/pages/QuizResultsPage.tsx` with a 2.4s analysis state, persona icon cycling/slowdown, skip action, and replay action
- Added staggered spring entrance for top-3 persona cards on results (`delay: 0.2, 0.4, 0.6`) in `src/pages/QuizResultsPage.tsx`
- Added slot-machine style motivation flow in `src/components/demo/DemoHome.tsx`: pulsing CTA, 1s persona typing/thinking bubble, and duplicate-click guard
- Added spring slide-in for newest notification card in `src/components/demo/NotificationFeed.tsx` using highlighted ID targeting (stiffness 200, damping 15)
- Extended demo state in `src/store/demoStore.ts` with `recentPersonaId` and `recentPersonaColor` persistence for dynamic persona-aware UI shifts
- Added dynamic environment theming in `src/components/demo/DemoHome.tsx` (subtle persona tint gradient, Pep glow on streak counter, Rusty desaturation/border treatment)
- Added breathing streak animation in `src/components/ui/StreakCounter.tsx` with reduced-motion fallback
- Added goal-hit confetti celebration via `src/components/demo/GoalConfetti.tsx`, triggered from step-entry goal crossing logic in `src/components/demo/DemoHome.tsx`
- Roadmap updated and moved to complete: `ai/roadmaps/complete/2026-02-23_ui-updates-roadmap.md`
- `npm run type-check` passes
- `npm run build` passes
- `npm run test:run` still has 7 existing failures in `src/utils/streakCalculator.test.ts` (pre-existing)

## Phase 7: Interactive Demo - Extended - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-7-interactive-demo-extended-roadmap.md`

- Added fully interactive tab navigation in `src/components/demo/BottomNav.tsx` and wired active tab state in `src/store/demoStore.ts`
- Added `src/components/demo/CalendarView.tsx` with month grid statuses (goal met/freeze/missed), today highlight, and freeze summary copy
- Added `src/components/demo/DayDetailModal.tsx` and calendar day click flow from `src/components/demo/DemoHome.tsx`
- Added `src/components/demo/PersonasTab.tsx` with all 6 persona cards, live sliders, and normalized 100% persona-weight controls persisted in demo store
- Added `src/components/demo/SettingsTab.tsx` with notification window toggles, goal editor, freeze explainer, and reset-demo action
- Extended `src/store/demoStore.ts` with persisted settings/persona weights/active tab, daily-goal recalculation, quiz-weight hydration support, and demo reset behavior
- Updated notification context usage in `src/components/demo/DemoHome.tsx` + `src/utils/messageSelector.ts` to pass time-of-day and current goal/settings-driven context
- `npm run type-check` passes
- `npm run build` passes
- `npm run test:run` still has 7 existing failures in `src/utils/streakCalculator.test.ts` (pre-existing)

## Phase 6: Interactive Demo - Core - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-6-interactive-demo-core-roadmap.md`

- Rebuilt `/demo` around a new mobile-first app shell in `src/components/demo/DemoHome.tsx` with dedicated header and placeholder bottom navigation
- Added Zustand demo session state in `src/store/demoStore.ts` with base data hydration, LocalStorage persistence (`walki_demo_state`), and merge behavior on restore
- Added step logging flow via `src/components/demo/StepEntryModal.tsx` with input validation and quick-add actions (+500, +1000, +2000)
- Added motivation generation on demand using `selectNotification` + `injectContext`, using quiz persona weights when available and fallback demo weights otherwise
- Added scrollable notification history via `src/components/demo/NotificationFeed.tsx` rendering persona-styled `NotificationCard`s newest-first
- Added milestone celebration flow via `src/components/demo/MilestoneModal.tsx`, triggered once per milestone (goal reached and streak milestones 7/14/21)
- Updated `src/pages/DemoPage.tsx` to mount the new core demo experience
- `npm run build` passes
- `npm run test:run` still has 7 existing failures in `src/utils/streakCalculator.test.ts` (pre-existing)

## Phase 5: Quiz Results & Persona Showcase - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-5-quiz-results-persona-showcase-roadmap.md`

- Rebuilt `src/pages/QuizResultsPage.tsx` into a full results experience with top-persona callout, ranked percentages, and redirect guard when results are missing
- Added responsive Recharts persona breakdown (horizontal bar chart) with persona-specific colors and reduced-motion-aware animation behavior
- Added scrollable all-persona showcase using `PersonaCard`, including persona voice details and demo deep-link CTA actions
- Added example message sections per persona using existing persona definitions and `NotificationCard` rendering
- Added share flow with Web Share API first, clipboard fallback, share status messaging, and local analytics event tracking (`walki:share`)
- Added retake-quiz confirmation modal that clears quiz state via store reset and navigates back to `/quiz`
- Added results-page CTA section with value proposition and `Try the Demo` path to `/demo`
- `npm run build` passes
- `npm run test:run` still has 7 existing failures in `src/utils/streakCalculator.test.ts` (pre-existing)

## Phase 4: Motivation Quiz - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-4-motivation-quiz-roadmap.md`

- Added quiz state store in `src/store/quizStore.ts` with Zustand actions for answer selection, back/next navigation, completion scoring, and reset
- Added LocalStorage persistence/resume using `walki_quiz_progress` with hydration on quiz entry and serialization of results timestamp
- Added dedicated quiz intro route/page in `src/pages/QuizIntroPage.tsx` with start/continue/restart controls and back-to-landing link
- Rebuilt `src/pages/QuizPage.tsx` into a full 10-question flow (from `quizQuestions.ts`) with per-question rendering, transition animation, progress updates, and back behavior
- Added quiz completion navigation and minimal results route/page in `src/pages/QuizResultsPage.tsx` with persona percentages plus retake/demo CTAs
- Updated routing in `src/App.tsx` to support `/quiz`, `/quiz/questions`, and `/results`
- Updated quiz/mobile UX polish by switching progress copy to "Question X of Y" and adding `touch-manipulation` to core answer/CTA buttons
- `npm run build` passes

## Phase 3: Landing Page - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-3-landing-page-roadmap.md`

- Added full landing page composition in `src/pages/LandingPage.tsx` with dedicated sections and `Navigation`
- Implemented new section components under `src/components/landing` (Hero, Problem, Solution, How It Works, Privacy, Footer) with responsive layouts
- Added scroll-reveal and stagger animations in `src/components/landing/Reveal.tsx` with reduced-motion handling and sub-300ms durations
- Integrated all landing-page CTAs to `/quiz` and added persona preview grid using existing `PersonaCard` data
- Updated app routing so `/` now serves the new landing page
- Expanded SEO/social metadata in `index.html` (title, description, Open Graph, Twitter)
- Added social preview image asset at `public/og-image-1200x630.svg`
- `npm run build` passes

## Phase 2: Component Library - Feb 23, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-2-component-library-roadmap.md`

- Added reusable UI library in `src/components/ui` (Button, Input, Modal, Card, ProgressBar, StreakCounter, NotificationCard, PersonaCard, QuizQuestion, QuizProgress)
- Added responsive app `Navigation` with mobile/desktop patterns and route links
- Added component export barrel and route/page wiring for `/showcase`
- Added `ComponentShowcasePage` with sample data for all phase-2 components
- Added persona theme tokens (Tailwind + CSS vars) and Framer Motion animation variants with reduced-motion support
- Updated Home, Quiz, and Demo pages to use shared components/navigation
- `npm run type-check` passes
- Existing unrelated failing tests remain in `src/utils/streakCalculator.test.ts` (7 failures)
- shadcn CLI init remains blocked by offline npm access (`ENOTFOUND registry.npmjs.org`)

## Phase 0: Foundation - Feb 18, 2026
**Reference:** `ai/roadmaps/complete/2026-02-17_phase-0-foundation-roadmap.md`

- Vite + React 19 + TypeScript initialized
- TailwindCSS v4 configured with PostCSS
- React Router v6 and Zustand installed
- Project structure created (components, pages, hooks, utils, store, types, data, styles)
- TypeScript strict mode + path aliases configured
- ErrorBoundary component implemented
- Basic routing setup (Home, Quiz, Demo pages)
- Vercel deployment config created
- README with project docs
- Personas data and type definitions added
- Dev server verified working with hot reload
- Production build tested successfully
- Git commits with clean history
