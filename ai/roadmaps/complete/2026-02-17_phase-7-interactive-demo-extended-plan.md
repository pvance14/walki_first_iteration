# Phase 7: Interactive Demo - Extended - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 7 of 10  
**Timeline:** Day 8-9  
**Status:** Completed

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Complete remaining demo tabs: Calendar, Personas, and Settings for full demo experience.

---

## Prerequisites
- Phase 6 completed (core demo)
- Demo store with calendar, personas, settings
- Bottom nav with tabs

---

## Tasks

### 1. Calendar View with Streak Visualization
- Create `src/components/demo/CalendarView.tsx`
- Month grid layout (similar to calendar UI)
- Each day: goal met (green/check), freeze (blue), missed (gray)
- Current day highlighted
- Show last 30 days or current month
- Use demo calendar data (18-day streak, 1 freeze, 1 missed)

### 2. Day Detail Modal
- Create `src/components/demo/DayDetailModal.tsx`
- Click on calendar day opens modal
- Display: date, status (goal met / freeze / missed), steps (if available)
- Optional: walking events for that day
- Close button

### 3. Personas Tab
- Create `src/components/demo/PersonasTab.tsx`
- Display all 6 personas with PersonaCard
- Show current weight from quiz results
- "Your mix" summary

### 4. Persona Weight Sliders
- Add sliders to adjust persona weights (0-100% each, or relative)
- Normalize to 100% total
- Update demo store with new weights
- Affects selectNotification() for "Get Motivation"
- Persist to LocalStorage

### 5. Settings Tab
- Create `src/components/demo/SettingsTab.tsx`
- Notification timing (morning, afternoon, evening) - optional toggle
- Daily step goal (default 7,000, editable)
- Optional: units (steps vs km)
- Reset demo button (clear LocalStorage, restore base data)

### 6. Demo Data Updates Based on Settings
- When step goal changed: recalculate progress display
- When weights changed: use in next notification selection
- Settings in demo store, persisted

### 7. Context-Aware Notification Generation
- Ensure selectNotification receives: time of day, goal, steps from settings
- Persona weights from Personas tab
- All context variables up to date

### 8. Streak Freeze Explanation
- Create tooltip or info section explaining freeze
- "You had 1 freeze 5 days ago" - link to explanation
- Brief copy: freeze saves streak when you miss a day
- Show in Calendar or Settings

### 9. All Tab Navigation Working
- Home → Calendar → Personas → Settings
- Each tab renders correct content
- Active tab state in nav
- No route change (single page with tab state)

### 10. Mobile-Optimized Interactions
- Calendar: touch-friendly day cells (44px min)
- Sliders: adequate touch target
- Modals: full-screen on mobile or centered
- Bottom nav: easy thumb reach

---

## Deliverables
- ✅ Calendar view with streak visualization
- ✅ Day detail modal (click calendar day)
- ✅ Personas tab with weight sliders
- ✅ Settings tab (notification timing, goals)
- ✅ Persona weight adjustment
- ✅ Demo data updates from settings
- ✅ Context-aware notification generation
- ✅ Streak freeze explanation
- ✅ All tab navigation working
- ✅ Mobile-optimized interactions

---

## Success Criteria
- Calendar shows correct streak pattern
- Day detail shows accurate data
- Weight sliders affect notification variety
- Settings persist and apply
- All tabs load without errors
- Touch targets adequate

---

## Technical Notes

### Calendar Data Structure
```typescript
// DayData from Phase 1
interface DayData {
  date: string; // YYYY-MM-DD
  steps: number;
  goalMet: boolean;
  freezeUsed?: boolean;
}
```

### Weight Normalization
```typescript
// Ensure weights sum to 1.0
const normalized = weights.map(w => w / sum(weights));
```

### Settings Store Extension
```typescript
interface Settings {
  dailyGoal: number;
  notificationTiming: ('morning' | 'afternoon' | 'evening')[];
  personaWeights: Record<PersonaId, number>;
}
```

---

## Common Issues & Solutions

**Issue:** Calendar grid misaligned  
**Solution:** Use CSS Grid with 7 columns (Sun-Sat); align month start

**Issue:** Sliders jump when normalizing  
**Solution:** Debounce or normalize on slider release only

**Issue:** Reset demo loses quiz results  
**Solution:** Reset only demo state; keep quiz results in separate key

**Issue:** Day detail empty for future days  
**Solution:** Show "No data" or disable click for future

---

## Next Phase
Phase 8: Waitlist & Integration (Day 9)
