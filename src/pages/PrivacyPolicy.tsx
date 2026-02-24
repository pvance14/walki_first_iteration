import { Navigation } from '@/components/layout/Navigation';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Legal</p>
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-600">Last updated: February 24, 2026</p>
        </header>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">What we collect</h2>
          <p className="text-sm text-slate-700">
            In this demo, most data stays in your browser (quiz progress, demo settings, and generated messages). If you join the waitlist, we collect your email address.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">How we use data</h2>
          <p className="text-sm text-slate-700">
            We use waitlist emails only for product updates and launch announcements. We use aggregate analytics events to understand feature usage and improve the product.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Sharing</h2>
          <p className="text-sm text-slate-700">
            We do not sell personal data. We do not include email addresses or other personal identifiers in analytics events.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Cookies and analytics</h2>
          <p className="text-sm text-slate-700">
            We use Plausible Analytics configured without third-party ad tracking cookies. Event data is limited to anonymous usage metrics.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="text-sm text-slate-700">Questions or deletion requests: hello@walki.app</p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
