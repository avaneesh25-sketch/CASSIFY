import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ribbon } from './components/Ribbon';
import { JourneySection } from './components/JourneySection';
import { HowItWorks } from './components/HowItWorks';
import { CaseArena } from './components/CaseArena';
import { CaseDialog } from './components/CaseDialog';
import { AccountPanel } from './components/AccountPanel';
import { ProgressSection } from './components/ProgressSection';
import { CampusSection } from './components/CampusSection';
import { InstitutionDialog } from './components/InstitutionDialog';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AnalyticsConsent } from './components/AnalyticsConsent';
import { Dashboard } from './components/Dashboard';
import { BillingTest } from './components/BillingTest';
import { PrivacyPage } from './components/PrivacyPage';
import { AuthModal } from './components/AuthModal';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { MentorAvatar } from './components/MentorAvatar';
import { IntroSequence } from './components/IntroSequence';
import { useScrollReveal } from './hooks/useScrollReveal';
import { CaseItem, CASES_DATA } from './data/cases';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<'showcase' | 'dashboard' | 'billing' | 'privacy'>('showcase');
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);
  const [isInstitutionModalOpen, setIsInstitutionModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Hook for smooth section scroll reveals
  useScrollReveal();

  // User auth state with LocalStorage persistence
  const [user, setUser] = useState<{ email: string; name: string } | null>(() => {
    try {
      const stored = localStorage.getItem('cassify_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Saved case answers: caseId -> answerIndex
  const [savedAnswers, setSavedAnswers] = useState<Record<number, number>>(() => {
    try {
      const stored = localStorage.getItem('cassify_answers');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Analytics consent state
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean | null>(() => {
    try {
      const stored = localStorage.getItem('casify.analytics-consent.v1');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Date.now() - parsed.time < 180 * 86400000) {
          return parsed.value === 'granted';
        }
      }
      return null;
    } catch {
      return null;
    }
  });

  const [showConsentBanner, setShowConsentBanner] = useState<boolean>(analyticsConsent === null);

  // Save user changes
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('cassify_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('cassify_user');
      }
    } catch {
      // storage unavailable
    }
  }, [user]);

  // Save answer changes
  useEffect(() => {
    try {
      localStorage.setItem('cassify_answers', JSON.stringify(savedAnswers));
    } catch {
      // storage unavailable
    }
  }, [savedAnswers]);

  // Calculate practice XP earned from completed cases
  const earnedXp = Object.keys(savedAnswers).reduce((sum, caseIdStr) => {
    const cId = Number(caseIdStr);
    const item = CASES_DATA.find((c) => c.id === cId);
    return sum + (item ? item.xp : 0);
  }, 0);

  const handleSelectAnswer = (caseId: number, answerIndex: number) => {
    setSavedAnswers((prev) => ({
      ...prev,
      [caseId]: answerIndex,
    }));
  };

  const handleConsentChoice = (granted: boolean) => {
    setAnalyticsConsent(granted);
    setShowConsentBanner(false);
    try {
      localStorage.setItem(
        'casify.analytics-consent.v1',
        JSON.stringify({
          value: granted ? 'granted' : 'denied',
          time: Date.now(),
        })
      );
    } catch {
      // ignore storage error
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9f4] text-[#172019] selection:bg-[#c6fa58] selection:text-[#172019] relative">
      {/* Interactive Custom Cursor: Lime dot/ring that grows over links, turns to PLAY on cases, with violet trail */}
      <CustomCursor />

      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onSignOut={() => setUser(null)}
      />

      {/* Main Content Area depending on active view */}
      {currentView === 'showcase' && (
        <main className="flex-1">
          <Hero />
          <Ribbon />
          <JourneySection />
          <HowItWorks />
          <CaseArena
            onOpenCase={(caseItem) => setActiveCase(caseItem)}
            savedAnswers={savedAnswers}
          />
          <AccountPanel
            user={user}
            savedCount={Object.keys(savedAnswers).length}
            totalXp={earnedXp}
            onSignIn={() => setIsAuthModalOpen(true)}
            onSignOut={() => setUser(null)}
            onViewPrivacy={() => setCurrentView('privacy')}
          />
          <ProgressSection earnedXp={earnedXp} />
          <CampusSection
            onOpenInstitutionalModal={() => setIsInstitutionModalOpen(true)}
          />
          <FinalCta />
        </main>
      )}

      {currentView === 'dashboard' && (
        <Dashboard
          onBackToArena={() => setCurrentView('showcase')}
          user={user}
        />
      )}

      {currentView === 'billing' && (
        <BillingTest
          onBack={() => setCurrentView('showcase')}
          onViewPrivacy={() => setCurrentView('privacy')}
        />
      )}

      {currentView === 'privacy' && (
        <PrivacyPage
          onBack={() => setCurrentView('showcase')}
          analyticsConsent={analyticsConsent}
          onUpdateConsent={handleConsentChoice}
        />
      )}

      {/* Footer */}
      <Footer
        onNavigate={setCurrentView}
        onOpenPrivacySettings={() => setCurrentView('privacy')}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Cinematic Intro Sequence: Background comes first, door opens, professor walks out, bows, casts Abracadabra, launches site */}
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}

      {/* Case Solving Modal */}
      <CaseDialog
        caseItem={activeCase}
        onClose={() => setActiveCase(null)}
        savedAnswer={activeCase ? savedAnswers[activeCase.id] : undefined}
        onSelectAnswer={handleSelectAnswer}
        isUserSignedIn={!!user}
      />

      {/* Institutional Concept Modal */}
      <InstitutionDialog
        isOpen={isInstitutionModalOpen}
        onClose={() => setIsInstitutionModalOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(newUser) => setUser(newUser)}
      />

      {/* Analytics Consent Floating Panel */}
      <AnalyticsConsent
        isOpen={showConsentBanner && currentView === 'showcase'}
        onConsent={handleConsentChoice}
        onViewPrivacy={() => setCurrentView('privacy')}
      />

      {/* Duolingo / Clash of Clans Style Study Guide Avatar (Prof. Cass) */}
      {currentView === 'showcase' && (
        <MentorAvatar
          onOpenCase={(caseId) => {
            const item = CASES_DATA.find((c) => c.id === caseId);
            if (item) setActiveCase(item);
          }}
          onNavigateToWorkspace={() => setCurrentView('dashboard')}
          earnedXp={earnedXp}
        />
      )}
    </div>
  );
};

export default App;
