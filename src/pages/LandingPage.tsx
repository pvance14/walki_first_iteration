import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { PrivacySection } from '@/components/landing/PrivacySection';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { WaitlistSection } from '@/components/waitlist/WaitlistSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PrivacySection />
        <WaitlistSection />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
