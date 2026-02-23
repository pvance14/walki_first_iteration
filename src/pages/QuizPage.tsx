import { Navigation } from '@/components/layout/Navigation';
import { Card, QuizProgress } from '@/components/ui';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <div className="mx-auto max-w-2xl px-4 py-12">
        <Card variant="elevated" className="space-y-6">
          <h1 className="text-3xl font-bold text-slate-900">Motivation Quiz</h1>
          <QuizProgress current={1} total={7} />
          <p className="text-slate-600">Quiz interactions will be completed in the next phase.</p>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;
