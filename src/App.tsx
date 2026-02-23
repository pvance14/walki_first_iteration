import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import DemoPage from './pages/DemoPage';
import ComponentShowcasePage from './pages/ComponentShowcasePage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/showcase" element={<ComponentShowcasePage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
