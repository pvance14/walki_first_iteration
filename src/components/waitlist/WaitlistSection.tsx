import { Reveal } from '@/components/landing/Reveal';
import { WaitlistForm } from './WaitlistForm';

export const WaitlistSection = () => {
  return (
    <section id="waitlist" className="border-t border-slate-200 bg-slate-50" aria-labelledby="waitlist-heading">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 sm:items-start sm:py-20">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Early access</p>
            <h2 id="waitlist-heading" className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Join the Walki waitlist
            </h2>
            <p className="mt-3 max-w-md text-base text-slate-600">
              Get launch updates and first access to the iOS/Android release.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <WaitlistForm source="landing" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
