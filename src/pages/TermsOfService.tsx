import { Navigation } from '@/components/layout/Navigation';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Legal</p>
          <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-sm text-slate-600">Last updated: February 24, 2026</p>
        </header>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Demo use only</h2>
          <p className="text-sm text-slate-700">
            Walki is currently a demo experience for product validation. Features may change, pause, or be removed at any time.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">No medical advice</h2>
          <p className="text-sm text-slate-700">
            Walki content is informational and motivational only. It is not medical advice, diagnosis, or treatment. Always use your own judgment and consult a qualified professional when needed.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Use at your own risk</h2>
          <p className="text-sm text-slate-700">
            You are responsible for how you use this demo. Walki is provided "as is" without guarantees of availability, accuracy, or fitness results.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="text-sm text-slate-700">Questions about these terms: hello@walki.app</p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
