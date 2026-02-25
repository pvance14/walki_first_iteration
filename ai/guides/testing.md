# Testing Guide: Structured Logging

## Overview
Walki now uses pino-style structured JSON logging via [`src/lib/logger.ts`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/lib/logger.ts).

Each log is a single JSON object with stable fields:
- `level`: pino-compatible numeric level (`10, 20, 30, 40, 50, 60`)
- `time`: ISO timestamp
- `msg`: event name (snake_case)
- `app`: `walki-web`
- `env`: Vite mode
- `sessionId`: per-page-load ID
- `seq`: monotonic sequence number
- `scope`: logger scope (store/component/module)
- event-specific fields (IDs, counts, state summaries)

## Log Sources
Primary instrumentation points:
- App boot: [`src/main.tsx`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/main.tsx)
- Global React errors: [`src/components/common/ErrorBoundary.tsx`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/components/common/ErrorBoundary.tsx)
- Quiz state lifecycle: [`src/store/quizStore.ts`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/store/quizStore.ts)
- Demo state lifecycle: [`src/store/demoStore.ts`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/store/demoStore.ts)
- Motivation generation flow: [`src/components/demo/DemoHome.tsx`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/components/demo/DemoHome.tsx)
- Notification template selection/fallbacks: [`src/utils/messageSelector.ts`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/utils/messageSelector.ts)
- Result sharing outcomes: [`src/pages/QuizResultsPage.tsx`](/Users/prestonvance/Documents/school/ai applied projects/walki 1.0/src/pages/QuizResultsPage.tsx)

## How To Access Logs
In browser devtools:
1. Open Console to see raw JSON log lines.
2. Logs are also mirrored to `window.__walkiLogs` (ring buffer, latest 500 entries).

Useful snippets:

```js
window.__walkiLogs
```

```js
(window.__walkiLogs || []).filter((entry) => entry.scope === 'demo-store')
```

```js
(window.__walkiLogs || []).filter((entry) => entry.level >= 50)
```

```js
(window.__walkiLogs || []).filter((entry) => entry.msg === 'notification_template_selected')
```

## Log Level Control
Set `VITE_LOG_LEVEL` before starting Vite:

```bash
VITE_LOG_LEVEL=trace npm run dev
```

Supported values: `trace`, `debug`, `info`, `warn`, `error`, `fatal`.

Defaults:
- Dev: `debug`
- Non-dev: `info`
