# Phase 6: Interactive Demo - Core - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 6 of 10  
**Timeline:** Days 7-8  
**Status:** Not Started

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Build primary demo functionality: home screen, streak, progress, notifications, and step entry.

---

## Prerequisites
- Phases 0-5 completed
- Demo data (18-day streak, 6,247/7,000 steps)
- Notification selection and context injection (Phase 1)
- ProgressBar, StreakCounter, NotificationCard (Phase 2)
- Quiz results in store (persona weights)

---

## Tasks

### 1. Demo Home Screen Layout
- Create `src/pages/DemoPage.tsx` and `src/components/demo/DemoHome.tsx`
- Route: `/demo`
- Header: app title, optional settings icon
- Main content area for streak and progress
- Bottom nav placeholder (or full nav if ready)

### 2. Streak Counter Display
- Display 18-day current streak
- Use StreakCounter component
- Data from demo store (initialized from demoData.ts)
- Prominent placement (hero of home screen)

### 3. Progress Bar (Steps Toward Goal)
- Display 6,247/7,000 steps
- Use ProgressBar component
- Goal: 7,000 steps per demo spec
- Show percentage and/or visual bar

### 4. Step Entry Modal
- Create `src/components/demo/StepEntryModal.tsx`
- "Add Steps" or "Log Walk" button opens modal
- Input field: number of steps (or quick-add buttons: +500, +1000, +2000)
- Submit updates demo state
- Close modal on submit or cancel

### 5. "Get Motivation" Notification Generator
- Create "Get Motivation" button
- On click: call selectNotification() with current context
- Context: time of day, streak, steps remaining, persona weights from quiz
- Use injectContext() to fill template variables
- Display notification in feed
- Store in notification history

### 6. Notification History Feed
- Create `src/components/demo/NotificationFeed.tsx`
- List of NotificationCards (newest first)
- Scrollable, max height or virtualized if many
- Each card: persona, message, timestamp
- Initialize with 0-2 sample notifications (optional)

### 7. Bottom Navigation
- Create `src/components/demo/BottomNav.tsx`
- Tabs: Home, Calendar, Personas, Settings
- Home: current (DemoHome)
- Calendar: placeholder or basic (Phase 7)
- Personas: placeholder or basic (Phase 7)
- Settings: placeholder or basic (Phase 7)
- Active tab highlight

### 8. State Management for Demo Session
- Create `src/store/demoStore.ts` (Zustand)
- State: currentSteps, streak, calendarData, notifications[], settings
- Actions: addSteps, addNotification, updateStreak
- Initialize from demoData.ts

### 9. LocalStorage for Session Persistence
- Key: `walki_demo_state`
- Persist: currentSteps, notifications, modifications to calendar
- Restore on load
- Merge with base demo data (don't overwrite base)

### 10. Real-Time Updates When Steps Added
- On addSteps: update progress bar immediately
- Recalculate steps_remaining for context
- Trigger milestone check (see below)
- Persist to LocalStorage

### 11. Milestone Celebration Modal
- Create `src/components/demo/MilestoneModal.tsx`
- Trigger when: steps reach 7,000 (goal), or streak hits 7/14/21
- Show celebration message
- Dismiss button
- Use persona-weighted message if applicable

---

## Deliverables
- ✅ Demo home screen layout
- ✅ Streak counter display (18 days)
- ✅ Progress bar (steps toward goal)
- ✅ Step entry modal
- ✅ "Get Motivation" notification generator
- ✅ Notification history feed
- ✅ Bottom navigation (Home, Calendar, Personas, Settings)
- ✅ Demo state management
- ✅ LocalStorage persistence
- ✅ Real-time updates on step add
- ✅ Milestone celebration modal

---

## Success Criteria
- Demo loads with correct initial data (18 streak, 6,247 steps)
- Adding steps updates progress immediately
- "Get Motivation" returns context-appropriate message
- Notifications display in feed with persona styling
- State persists across refresh
- Milestone modal triggers at goal

---

## Technical Notes

### Demo Store Structure
```typescript
interface DemoStore {
  currentSteps: number;
  streak: number;
  calendarData: DayData[];
  notifications: Notification[];
  addSteps: (amount: number) => void;
  addNotification: (n: Notification) => void;
  getContext: () => NotificationContext;
}
```

### Context for selectNotification
```typescript
const context = {
  timeOfDay: 'morning' | 'afternoon' | 'evening',
  streakLength: 18,
  stepsRemaining: 753,
  stepsTaken: 6247,
  dailyGoal: 7000,
  dayOfWeek: 'Wednesday',
};
```

### LocalStorage Merge
- Base demo data in code
- User modifications (steps added, notifications) in LocalStorage
- On load: apply modifications on top of base

---

## Common Issues & Solutions

**Issue:** Persona weights not available (user skipped quiz)  
**Solution:** Use equal weights or default to Sunny; add "Take quiz to personalize" prompt

**Issue:** Too many notifications in feed  
**Solution:** Cap at 20-50; or "Load more" pagination

**Issue:** Milestone fires multiple times  
**Solution:** Track lastCelebratedMilestone; only fire once per milestone

**Issue:** Steps input allows invalid values  
**Solution:** Validate range (0-50000); prevent negative

---

## Next Phase
Phase 7: Interactive Demo - Extended (Day 8-9)
