import { useEffect } from 'react';
import { DemoHome } from '@/components/demo/DemoHome';
import { FeedbackForm } from '@/components/waitlist/FeedbackForm';
import { WaitlistForm } from '@/components/waitlist/WaitlistForm';
import { trackDemoEngagement } from '@/utils/analytics';

const DemoPage = () => {
  useEffect(() => {
    const startedAt = Date.now();

    return () => {
      const durationSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
      trackDemoEngagement(durationSeconds);
    };
  }, []);

  return (
    <>
      <DemoHome />
      <section className="border-t border-slate-200 bg-white px-4 py-10">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Next Step</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">Join the waitlist</h2>
            <p className="mb-4 mt-2 text-sm text-slate-700">Get early access when Walki launches.</p>
            <WaitlistForm source="demo" />
          </div>
          <FeedbackForm />
        </div>
      </section>
    </>
  );
};

export default DemoPage;
