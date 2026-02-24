import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui';

type FeedbackFormProps = {
  className?: string;
};

export const FeedbackForm = ({ className = '' }: FeedbackFormProps) => {
  const [liked, setLiked] = useState('');
  const [improve, setImprove] = useState('');
  const [wouldUse, setWouldUse] = useState('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof window !== 'undefined') {
      const raw = window.localStorage.getItem('walki_feedback_entries');
      const entries = raw ? (JSON.parse(raw) as Array<Record<string, string>>) : [];
      entries.push({
        liked: liked.trim(),
        improve: improve.trim(),
        wouldUse,
        createdAt: new Date().toISOString(),
      });
      window.localStorage.setItem('walki_feedback_entries', JSON.stringify(entries));
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 ${className}`}>
        Thanks for the feedback.
      </div>
    );
  }

  return (
    <form className={`space-y-3 rounded-xl border border-slate-200 bg-white p-4 ${className}`} onSubmit={handleSubmit}>
      <h3 className="text-base font-semibold text-slate-900">Quick feedback</h3>
      <p className="text-sm text-slate-600">Optional: tell us what stood out in this demo.</p>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-800">What did you like most?</span>
        <textarea
          className="min-h-20 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          value={liked}
          onChange={(event) => setLiked(event.target.value)}
          maxLength={300}
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-800">What should we improve?</span>
        <textarea
          className="min-h-20 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          value={improve}
          onChange={(event) => setImprove(event.target.value)}
          maxLength={300}
        />
      </label>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-800">Would you use Walki regularly?</span>
        <select
          className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          value={wouldUse}
          onChange={(event) => setWouldUse(event.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="maybe">Maybe</option>
          <option value="no">No</option>
        </select>
      </label>

      <Button type="submit" variant="outline">Submit Feedback</Button>
    </form>
  );
};

export type { FeedbackFormProps };
