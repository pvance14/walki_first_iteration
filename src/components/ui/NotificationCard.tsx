import type { Notification } from '@/types';
import { PERSONA_ACCENT_CLASS, PERSONA_BG_TINT_CLASS } from '@/lib/persona';
import { cn } from '@/lib/cn';

type NotificationCardProps = {
  notification: Notification;
};

const initialsByPersona = {
  sunny: 'SU',
  'dr-quinn': 'DQ',
  pep: 'PE',
  rico: 'RI',
  fern: 'FE',
  rusty: 'RU',
};

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  const accentClass = PERSONA_ACCENT_CLASS[notification.personaId];
  const bgTintClass = PERSONA_BG_TINT_CLASS[notification.personaId];

  return (
    <article
      className={cn(
        'rounded-xl border-l-4 border bg-white p-4 transition-shadow hover:shadow-md',
        accentClass,
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold',
            accentClass,
            bgTintClass,
          )}
          aria-hidden="true"
        >
          {initialsByPersona[notification.personaId]}
        </div>
        <div className="space-y-2">
          <p className="text-sm leading-relaxed text-slate-800">{notification.message}</p>
          <p className="text-xs text-slate-500">{notification.timestamp.toLocaleString()}</p>
        </div>
      </div>
    </article>
  );
};

export type { NotificationCardProps };
