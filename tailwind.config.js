/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        persona: {
          sunny: '#F97316',
          drQuinn: '#3B82F6',
          pep: '#EC4899',
          rico: '#EF4444',
          fern: '#10B981',
          rusty: '#6B7280',
          sunnyTint: '#FFF7ED',
          drQuinnTint: '#EFF6FF',
          pepTint: '#FDF2F8',
          ricoTint: '#FEF2F2',
          fernTint: '#ECFDF5',
          rustyTint: '#F3F4F6',
        },
      },
    },
  },
};
