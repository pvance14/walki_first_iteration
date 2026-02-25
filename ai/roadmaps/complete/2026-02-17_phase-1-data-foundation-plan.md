# Phase 1: Data Foundation - Implementation Plan

**Date:** February 17, 2026  
**Phase:** 1 of 10  
**Timeline:** Days 2-3  
**Status:** ✅ Completed

---

## Core Principle

**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal

Create all static data, business logic, and algorithms needed for the MVP.

---

## Prerequisites

- Phase 0 completed (project foundation set up)
- TypeScript strict mode configured
- Access to mvp.md and architecture.md for specifications

---

## Tasks

### 1. Define TypeScript Interfaces

Create `src/types/index.ts` with all data models from architecture.md:

- QuizResults, PersonaScores, PersonaPercentages
- DemoState, DayData, WalkingEvent, Settings
- Notification, NotificationContext, NotificationTemplate
- Persona definition

### 2. Implement 10 Quiz Questions

Create `src/data/quizQuestions.ts`:

- Copy 10 pre-defined questions from mvp.md (lines 143-193)
- Each question has 4 answer options
- Include scoring logic (which answers map to which personas)

### 3. Define 6 Persona Configurations

Create `src/data/personas.ts`:

- **Sunny** (The Companion) - #F97316 (Warm Orange)
- **Dr. Quinn** (The Educator) - #3B82F6 (Deep Blue)
- **Pep** (The Cheerleader) - #EC4899 (Bright Pink)
- **Rico** (The Challenger) - #EF4444 (Bold Red)
- **Fern** (The Sage) - #10B981 (Calming Green)
- **Rusty** (The Pessimist) - #6B7280 (Dark Gray)
- Include: id, name, title, description, voice, color, avatar path, example messages

### 4. Generate Notification Message Library

Create `src/data/notificationLibrary.ts`:

- **50 messages per persona (300 total)**
- Each message is a template with `{{variables}}`
- Context tags: morning, evening, close_to_goal, milestone, encouraging
- Variables: streak_length, steps_remaining, daily_goal, day_of_week

### 5. Create Demo Data

Create `src/data/demoData.ts`:

- 18-day current streak
- 42 total active days
- Calendar data with:
  - 1 freeze used (5 days ago)
  - 1 missed day (20 days ago)
  - Recent 18 days all goal met
- Current progress: 6,247/7,000 steps
- Sample walking events

### 6. Implement Quiz Scoring Algorithm

Create `src/utils/personaScoring.ts`:

- Function: `calculateQuizResults(answers: number[]): QuizResults`
- Maps each answer to persona points
- Calculates total scores and percentages
- Identifies top persona
- Returns complete QuizResults object

### 7. Implement Notification Selection Algorithm

Create `src/utils/messageSelector.ts`:

- Function: `selectNotification()`
- Filters by context (time of day, streak status)
- Excludes recently shown messages
- Weighted selection based on persona preferences
- Returns NotificationTemplate

### 8. Implement Context Injection Utility

Create `src/utils/contextInjection.ts`:

- Function: `injectContext(template: string, context: NotificationContext): string`
- Replaces all `{{variable}}` patterns with actual values
- Supports: streak_length, steps_remaining, steps_taken, daily_goal, day_of_week
- Calculates derived values (minutes_remaining, milestone_next)

### 9. Implement Streak Calculation Logic

Create `src/utils/streakCalculator.ts`:

- Function: `calculateStreak(calendarData: DayData[]): number`
- Counts consecutive days with goal met or freeze used
- Handles edge cases (today not yet complete, gaps)
- Returns current streak length

### 10. Write Unit Tests

Create tests for all algorithms:

- `personaScoring.test.ts` - quiz scoring logic
- `messageSelector.test.ts` - notification selection
- `contextInjection.test.ts` - variable replacement
- `streakCalculator.test.ts` - streak counting

---

## Deliverables

- ✅ Complete TypeScript interfaces (src/types/)
- ✅ Quiz questions with scoring (src/data/quizQuestions.ts)
- ✅ Persona definitions (src/data/personas.ts)
- ✅ 300+ notification templates (src/data/notificationLibrary.ts)
- ✅ Demo data (src/data/demoData.ts)
- ✅ Quiz scoring algorithm (src/utils/personaScoring.ts)
- ✅ Notification selector (src/utils/messageSelector.ts)
- ✅ Context injector (src/utils/contextInjection.ts)
- ✅ Streak calculator (src/utils/streakCalculator.ts)
- ✅ Unit tests for all algorithms

---

## Success Criteria

- All TypeScript interfaces compile without errors
- Quiz scoring produces correct persona percentages
- Notification selection returns appropriate messages
- Context injection replaces all variables correctly
- Streak calculation handles edge cases
- All unit tests pass
- No hardcoded values (everything data-driven)

---

## Data Validation

- Quiz has exactly 10 questions
- Each question has exactly 4 answers
- All 6 personas defined with correct colors
- 50 messages per persona (300 total)
- Demo data matches mvp.md specification
- All message templates use valid context variables

---

## Next Phase

Phase 2: Component Library (Days 3-4)