import type { PersonaId } from '@/types';

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

type AnalyticsProps = Record<string, string | number | boolean>;

const trackEvent = (eventName: string, props?: AnalyticsProps) => {
  if (typeof window === 'undefined' || typeof window.plausible !== 'function') {
    return;
  }

  window.plausible(eventName, props ? { props } : undefined);
};

export const trackQuizComplete = (topPersona: PersonaId) => {
  trackEvent('Quiz Complete', { topPersona });
};

export const trackDemoEngagement = (durationSeconds: number) => {
  trackEvent('Demo Engagement', {
    durationBucket:
      durationSeconds >= 300
        ? '5m+'
        : durationSeconds >= 180
          ? '3m+'
          : durationSeconds >= 60
            ? '1m+'
            : '<1m',
    durationSeconds,
  });
};

export const trackMotivationClick = () => {
  trackEvent('Get Motivation Click');
};

export const trackWaitlistSignup = (source: 'landing' | 'demo') => {
  trackEvent('Waitlist Signup', { source });
};

export const trackShare = (source: 'results' | 'waitlist', method: 'web-share' | 'twitter' | 'clipboard') => {
  trackEvent('Share', { source, method });
};
