import type { PersonaId } from '@/types';

export const PERSONA_HEX: Record<PersonaId, string> = {
  sunny: '#F97316',
  'dr-quinn': '#3B82F6',
  pep: '#EC4899',
  rico: '#EF4444',
  fern: '#10B981',
  rusty: '#6B7280',
};

export const PERSONA_TINT_HEX: Record<PersonaId, string> = {
  sunny: '#FFF7ED',
  'dr-quinn': '#EFF6FF',
  pep: '#FDF2F8',
  rico: '#FEF2F2',
  fern: '#ECFDF5',
  rusty: '#F3F4F6',
};

export const PERSONA_ICON: Record<PersonaId, string> = {
  sunny: '☀️',
  'dr-quinn': '🧠',
  pep: '🎉',
  rico: '🥊',
  fern: '🌿',
  rusty: '😈',
};

export const PERSONA_INITIALS: Record<PersonaId, string> = {
  sunny: 'SU',
  'dr-quinn': 'DQ',
  pep: 'PE',
  rico: 'RI',
  fern: 'FE',
  rusty: 'RU',
};
