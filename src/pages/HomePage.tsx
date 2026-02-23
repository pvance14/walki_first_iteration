import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold text-slate-900">Welcome to Walki</h1>
        <p className="mb-8 max-w-2xl text-xl text-slate-600">
          Your AI-powered walking companion with persona-driven motivation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/quiz">
            <Button>Take the Quiz</Button>
          </Link>
          <Link to="/demo">
            <Button variant="secondary">Try Demo</Button>
          </Link>
          <Link to="/showcase">
            <Button variant="outline">View Components</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
