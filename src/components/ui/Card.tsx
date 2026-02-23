import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type CardVariant = 'default' | 'elevated' | 'accent';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default: 'border border-slate-200 bg-white',
  elevated: 'border border-slate-200 bg-white shadow-md',
  accent: 'border border-slate-900 bg-slate-50',
};

export const Card = ({ variant = 'default', className, ...props }: CardProps) => {
  return <div className={cn('rounded-xl p-5', variantClasses[variant], className)} {...props} />;
};

export type { CardProps };
