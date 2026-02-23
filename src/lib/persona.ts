import type { PersonaId } from '@/types';

export const PERSONA_COLOR_CLASS: Record<PersonaId, string> = {
  sunny: 'bg-persona-sunny border-persona-sunny text-white',
  'dr-quinn': 'bg-persona-drQuinn border-persona-drQuinn text-white',
  pep: 'bg-persona-pep border-persona-pep text-white',
  rico: 'bg-persona-rico border-persona-rico text-white',
  fern: 'bg-persona-fern border-persona-fern text-white',
  rusty: 'bg-persona-rusty border-persona-rusty text-white',
};

export const PERSONA_ACCENT_CLASS: Record<PersonaId, string> = {
  sunny: 'text-persona-sunny border-persona-sunny',
  'dr-quinn': 'text-persona-drQuinn border-persona-drQuinn',
  pep: 'text-persona-pep border-persona-pep',
  rico: 'text-persona-rico border-persona-rico',
  fern: 'text-persona-fern border-persona-fern',
  rusty: 'text-persona-rusty border-persona-rusty',
};

export const PERSONA_BG_TINT_CLASS: Record<PersonaId, string> = {
  sunny: 'bg-persona-sunnyTint',
  'dr-quinn': 'bg-persona-drQuinnTint',
  pep: 'bg-persona-pepTint',
  rico: 'bg-persona-ricoTint',
  fern: 'bg-persona-fernTint',
  rusty: 'bg-persona-rustyTint',
};
