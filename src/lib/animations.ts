import type { Variants } from 'framer-motion';

export const motionVariants: Record<'fade' | 'slide' | 'scale', Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.28, ease: 'easeOut' } },
  },
  slide: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: 'easeOut' } },
  },
};

export const getMotionProps = (
  variant: keyof typeof motionVariants,
  reduceMotion: boolean | null,
) => {
  if (reduceMotion) {
    return {
      initial: false as const,
      animate: 'visible' as const,
      variants: { visible: { opacity: 1 } } as Variants,
    };
  }

  return {
    initial: 'hidden' as const,
    animate: 'visible' as const,
    variants: motionVariants[variant],
  };
};
