import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';
import LandingPage from './pages/LandingPage';
import QuizIntroPage from './pages/QuizIntroPage';
import QuizPage from './pages/QuizPage';
import QuizResultsPage from './pages/QuizResultsPage';
import DemoPage from './pages/DemoPage';
import ComponentShowcasePage from './pages/ComponentShowcasePage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizIntroPage />} />
          <Route path="/quiz/questions" element={<QuizPage />} />
          <Route path="/results" element={<QuizResultsPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/showcase" element={<ComponentShowcasePage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
