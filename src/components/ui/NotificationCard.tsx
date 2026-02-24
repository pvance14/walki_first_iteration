import type { Notification } from '@/types';
import { PERSONA_HEX, PERSONA_ICON, PERSONA_INITIALS, PERSONA_TINT_HEX } from '@/lib/persona';

type NotificationCardProps = {
  notification: Notification;
};

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  const accentColor = PERSONA_HEX[notification.personaId];
  const tintColor = PERSONA_TINT_HEX[notification.personaId];

  return (
    <article
      className="rounded-xl border-l-4 bg-white p-4 transition-shadow hover:shadow-md"
      style={{
        borderLeftColor: accentColor,
        borderColor: '#E2E8F0',
        boxShadow: `-10px 0 20px -16px ${accentColor}, 0 10px 24px -20px ${accentColor}`,
        backgroundImage: `linear-gradient(to right, ${accentColor}24 0, ${accentColor}10 14px, #ffffff 42px)`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm"
          style={{ borderColor: accentColor, backgroundColor: tintColor }}
          aria-hidden="true"
        >
          <span>{PERSONA_ICON[notification.personaId] ?? PERSONA_INITIALS[notification.personaId]}</span>
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
