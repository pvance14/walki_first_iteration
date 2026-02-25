# Phase 0: Foundation - Implementation Plan
**Date:** February 17, 2026  
**Phase:** 0 of 10  
**Timeline:** Days 1-2  
**Status:** ✅ Completed

---

## Core Principle
**AVOID:** Over-engineering, legacy compatibility, unnecessary dependencies, technical debt  
**EMBRACE:** Modern ES2022+, simple readable code, built-in APIs, minimal dependencies

---

## Goal
Set up development environment and core infrastructure for the Walki web demo MVP.

---

## Prerequisites
- Node.js 18+ installed
- Git configured
- Code editor (VS Code recommended)
- Vercel or Netlify account
- GitHub repository created

---

## Tasks

### 1. Initialize React + TypeScript + Vite Project
- Run `npm create vite@latest walki-demo -- --template react-ts`
- Navigate to project directory
- Install dependencies (`npm install`)
- Test dev server (`npm run dev`)
- Verify hot reload works

### 2. Configure TailwindCSS
- Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
- Initialize config: `npx tailwindcss init -p`
- Configure `tailwind.config.js` with content paths
- Add Tailwind directives to `src/index.css`
- Test with utility class in App.tsx
- Configure mobile-first breakpoints

### 3. Set Up Git Workflow
- Initialize git (if not done): `git init`
- Create `.gitignore` (node_modules, dist, .env, etc.)
- Initial commit with base Vite setup
- Push to GitHub remote
- Set up branch protection (optional)

### 4. Configure Deployment Pipeline
- Create Vercel/Netlify account
- Connect GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Output directory: `dist`
  - Node version: 18.x
- Deploy and verify staging URL works
- Test auto-deploy on push

### 5. Install Essential Dependencies
```bash
npm install react-router-dom zustand
npm install -D @types/node
```
- React Router (v6) for navigation
- Zustand for state management
- TypeScript type definitions

### 6. Create Base File Structure
```
src/
├── components/
│   ├── landing/
│   ├── quiz/
│   ├── personas/
│   ├── demo/
│   ├── shared/
│   └── waitlist/
├── data/
├── hooks/
├── utils/
├── store/
├── types/
├── pages/
└── styles/
```

### 7. Set Up Routing
- Create basic route structure in `App.tsx`
- Define routes: `/`, `/quiz`, `/results`, `/demo`
- Test navigation between routes
- Add 404 fallback route

### 8. Configure TypeScript Strict Mode
- Enable strict mode in `tsconfig.json`
- Configure path aliases (`@/` for src)
- Set up proper module resolution
- Test with sample typed component

### 9. Implement Error Boundaries
- Create `ErrorBoundary` component
- Wrap App with error boundary
- Add fallback UI for errors
- Test with intentional error

### 10. Test Deployment Pipeline
- Make trivial change (update title)
- Commit and push
- Verify auto-deploy triggers
- Check staging URL reflects changes
- Test rollback capability

---

## Deliverables
- ✅ Working empty app deployed to staging URL
- ✅ Git repository with clean commit history
- ✅ TailwindCSS configured and tested
- ✅ Routing structure in place
- ✅ Error boundaries implemented
- ✅ TypeScript strict mode enabled
- ✅ Auto-deploy pipeline verified

---

## Success Criteria
- Dev server starts in <5 seconds
- Hot reload works consistently
- Deployment completes in <3 minutes
- Staging URL loads in <2 seconds
- No TypeScript errors
- No console errors in browser

---

## Technical Notes

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### TailwindCSS Mobile-First Breakpoints
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
}
```

### TypeScript Path Aliases
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Common Issues & Solutions

**Issue:** Vite dev server won't start  
**Solution:** Check Node version (18+), delete node_modules and reinstall

**Issue:** Tailwind styles not applying  
**Solution:** Verify content paths in tailwind.config.js include all files

**Issue:** Deployment fails  
**Solution:** Check build command matches exactly, verify output directory is `dist`

**Issue:** TypeScript errors after strict mode  
**Solution:** Add explicit types, use `unknown` instead of `any` when unsure

---

## Next Phase
Phase 1: Data Foundation (Days 2-3)
