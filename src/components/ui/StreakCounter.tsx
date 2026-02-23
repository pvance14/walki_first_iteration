import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

type StreakCounterProps = {
  streak: number;
};

const milestoneMap: Record<number, string> = {
  7: 'Week one unlocked',
  14: 'Two-week momentum',
  21: 'Habit cemented',
};

export const StreakCounter = ({ streak }: StreakCounterProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = window.setTimeout(() => setAnimate(false), 450);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [streak]);

  return (
    <div className={cn('inline-flex flex-col rounded-xl border border-amber-300 bg-amber-50 p-4')}>
      <span className="text-sm font-medium text-amber-800">Current streak</span>
      <span
        className={cn(
          'text-4xl font-bold text-amber-900 transition-transform duration-300 motion-reduce:transition-none',
          animate && 'scale-110',
        )}
      >
        🔥 {streak}
      </span>
      {milestoneMap[streak] ? (
        <span className="mt-1 text-sm font-semibold text-amber-700">{milestoneMap[streak]}</span>
      ) : null}
    </div>
  );
};

export type { StreakCounterProps };
