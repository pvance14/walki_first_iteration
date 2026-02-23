import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-800">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-11 w-full rounded-md border bg-white px-3 text-sm text-slate-900 outline-none transition focus:ring-2',
            error
              ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-200'
              : 'border-slate-300 focus:border-slate-500 focus:ring-slate-200',
            className,
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error ? (
          <p id={`${inputId}-error`} className="text-sm text-rose-600" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export type { InputProps };
