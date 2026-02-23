import { Navigation } from '@/components/layout/Navigation';
import { Card, ProgressBar, StreakCounter } from '@/components/ui';

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Interactive Demo</h1>
        <Card variant="elevated" className="space-y-4">
          <StreakCounter streak={8} />
          <ProgressBar steps={5600} goal={7000} persona="sunny" />
        </Card>
      </div>
    </div>
  );
};

export default DemoPage;
