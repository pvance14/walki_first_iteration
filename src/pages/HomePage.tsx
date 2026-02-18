const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Walki
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your AI-powered walking companion
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/quiz" className="btn-primary">
            Take the Quiz
          </a>
          <a href="/demo" className="btn-secondary">
            Try Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
