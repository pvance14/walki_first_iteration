# Phase 4: Motivation Quiz - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 4 of 10  
**Timeline:** Days 5-6  
**Status:** Not Started

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Build a fully functional motivation quiz experience from introduction through completion.

---

## Prerequisites
- Phase 0, 1, 2, 3 completed
- Quiz questions and scoring algorithm (Phase 1)
- Quiz components (QuizQuestion, QuizProgress) from Phase 2
- Zustand store available

---

## Tasks

### 1. Quiz Introduction Screen
- Create `src/pages/QuizIntro.tsx` or component within quiz flow
- Welcome message and brief explanation of quiz
- "How it works" (7 questions, ~2 minutes)
- Primary CTA: "Start Quiz"
- Route: `/quiz` or `/quiz/intro`
- Link back to landing page

### 2. Question Flow
- Create `src/pages/QuizPage.tsx` (or QuizFlow.tsx)
- Load 7 questions from `src/data/quizQuestions.ts`
- Display one question at a time
- Use QuizQuestion component
- Track current question index (0-6)
- Transition between questions (slide or fade)

### 3. Answer Selection
- Implement click handler for each answer option
- Store selected answer (by question index)
- Visual feedback: selected state (border, highlight)
- Hover states on options
- Disable double-selection (or allow change until next)

### 4. Progress Indicator
- Use QuizProgress component
- Display "Question X of 7"
- Optional: progress bar (X/7 filled)
- Update on each question change

### 5. Back Button
- "Back" button to return to previous question
- Revise previous answer if needed
- Disable Back on first question (or hide)
- Preserve answers when going back

### 6. Quiz Completion and Scoring
- On last question answer, trigger completion
- Call `calculateQuizResults(answers)` from Phase 1
- Store results in Zustand and LocalStorage
- Navigate to `/results`

### 7. State Management (Zustand)
- Create `src/store/quizStore.ts`
- State: currentQuestionIndex, answers[], isComplete
- Actions: setAnswer, goToNextQuestion, goToPreviousQuestion, completeQuiz
- Persist answers to LocalStorage on each selection
- Restore from LocalStorage on mount (resume incomplete quiz)

### 8. LocalStorage Persistence
- Key: `walki_quiz_answers` or similar
- Store: { answers: number[], completedAt?: string }
- On load: check for incomplete quiz, offer resume or restart
- Clear or archive on completion

### 9. Mobile-Optimized Touch Interactions
- Ensure answer options have 44px min touch target
- No hover-only interactions (touch works)
- Prevent accidental double-tap zoom
- Swipe to next (optional)

### 10. Loading States and Transitions
- Loading state when fetching/storing (minimal - likely instant)
- Transition animation between questions
- Optional: loading spinner before results calculation
- Smooth navigation to results page

### 11. Navigation to Results Page
- Programmatic navigate to `/results` with results in store
- Results page reads from store (no URL params for simplicity)
- Ensure back button from results doesn't re-trigger quiz

---

## Deliverables
- ✅ Quiz introduction screen
- ✅ Question flow with progress indicator
- ✅ Answer selection with hover states
- ✅ Back button to revise answers
- ✅ Quiz completion and scoring
- ✅ Zustand store for quiz state
- ✅ LocalStorage persistence
- ✅ Mobile-optimized touch interactions
- ✅ Loading states and transitions
- ✅ Navigation to results page

---

## Success Criteria
- All 7 questions display correctly
- Answers persist across refresh (incomplete quiz)
- Scoring produces valid QuizResults
- Back button works correctly
- No layout shift during transitions
- Touch targets adequate on mobile

---

## Technical Notes

### Quiz Store Structure
```typescript
interface QuizStore {
  currentQuestionIndex: number;
  answers: (number | null)[];
  isComplete: boolean;
  setAnswer: (questionIndex: number, answerIndex: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  completeQuiz: () => QuizResults;
  resetQuiz: () => void;
}
```

### LocalStorage Key
```typescript
const QUIZ_STORAGE_KEY = 'walki_quiz_progress';
// Store: { answers: number[], timestamp: number }
```

### Resume Logic
```tsx
useEffect(() => {
  const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
  if (stored) {
    const { answers } = JSON.parse(stored);
    if (answers.some(a => a !== null) && !isComplete) {
      // Offer: "Continue where you left off?" or auto-restore
    }
  }
}, []);
```

---

## Common Issues & Solutions

**Issue:** Answers lost on refresh  
**Solution:** Persist to LocalStorage on every answer change; debounce if needed

**Issue:** User can skip questions  
**Solution:** Require answer before Next, or allow skip and handle in scoring (map null to 0 or default)

**Issue:** Back button confuses state  
**Solution:** Keep answers array; Back just decrements index; no need to clear answer

**Issue:** Quiz feels slow  
**Solution:** Preload next question; use CSS transitions (no JS animation delay)

---

## Next Phase
Phase 5: Quiz Results & Persona Showcase (Day 6-7)
