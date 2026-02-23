import type { Persona } from '@/types';
import { cn } from '@/lib/cn';
import { PERSONA_ACCENT_CLASS, PERSONA_BG_TINT_CLASS } from '@/lib/persona';

type PersonaCardProps = {
  persona: Persona;
  onClick?: (personaId: Persona['id']) => void;
};

export const PersonaCard = ({ persona, onClick }: PersonaCardProps) => {
  const accentClass = PERSONA_ACCENT_CLASS[persona.id];

  return (
    <button
      type="button"
      onClick={() => onClick?.(persona.id)}
      className={cn(
        'w-full rounded-xl border p-4 text-left transition duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2',
        accentClass,
        PERSONA_BG_TINT_CLASS[persona.id],
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={cn('h-10 w-10 rounded-full border', accentClass, 'bg-white')} aria-hidden="true" />
        <div>
          <h3 className="text-base font-semibold text-slate-900">{persona.name}</h3>
          <p className="text-sm text-slate-600">{persona.title}</p>
        </div>
      </div>
      <p className="text-sm text-slate-700">{persona.description}</p>
    </button>
  );
};

export type { PersonaCardProps };
