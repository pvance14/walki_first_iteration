import { useMemo } from 'react';
import type { PersonaId } from '@/types';
import { cn } from '@/lib/cn';
import { PERSONA_HEX } from '@/lib/persona';

type ProgressBarProps = {
  steps: number;
  goal: number;
  persona?: PersonaId;
};

export const ProgressBar = ({ steps, goal, persona = 'sunny' }: ProgressBarProps) => {
  const progress = useMemo(() => {
    if (goal <= 0) {
      return 0;
    }

    return Math.min(100, Math.round((steps / goal) * 100));
  }, [steps, goal]);

  const isComplete = progress >= 100;

  return (
    <div className="w-full max-w-xl space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-slate-700">
        <span>{steps.toLocaleString()} / {goal.toLocaleString()} steps</span>
        <span>{progress}%</span>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className={cn(
            'h-full transition-[width] duration-500 ease-out motion-reduce:transition-none',
            isComplete && 'ring-2 ring-emerald-300',
          )}
          style={{ width: `${progress}%`, backgroundColor: PERSONA_HEX[persona] }}
        />
      </div>
      {isComplete ? <p className="text-sm font-semibold text-emerald-700">Milestone reached!</p> : null}
    </div>
  );
};

export type { ProgressBarProps };
