import React, { useState, useEffect } from 'react';

interface MentorAvatarProps {
  onOpenCase: (caseId: number) => void;
  onNavigateToWorkspace: () => void;
  earnedXp: number;
}

interface TourStep {
  targetId: string;
  title: string;
  message: string;
  actionText?: string;
  stickAngle: string; // CSS rotation for pointer stick
}

const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'journey',
    title: 'Welcome, Strategist!',
    message: 'I’m Prof. Cass, your case competition mentor! Every champion starts at Level 01. Follow the 4-level journey from Rookie to Contender.',
    actionText: 'Next: The Case Arena →',
    stickAngle: 'rotate-[-45deg]',
  },
  {
    targetId: 'challenges',
    title: 'The Case Arena',
    message: 'This is where you sharpen your business instincts. Solve real scenarios: revenue leaks, city expansions, and defense playbooks!',
    actionText: 'Next: Track Your XP →',
    stickAngle: 'rotate-[-20deg]',
  },
  {
    targetId: 'my-progress',
    title: 'Your Personal Practice',
    message: 'Your answers and XP are saved privately. Complete all 3 sample cases to earn 650+ practice XP and rank up!',
    actionText: 'Next: Campus Leaderboard →',
    stickAngle: 'rotate-[15deg]',
  },
  {
    targetId: 'campus',
    title: 'Campus & Competitions',
    message: 'Prepare with your consulting club or university cohort. When you’re ready, head over to the Competitor Workspace to upload pitch decks!',
    actionText: 'Got it, let’s study! ✓',
    stickAngle: 'rotate-[-60deg]',
  },
];

const STUDY_TIPS = [
  "Rule #1 of case competitions: Always separate price from volume before diagnosing a profit slump!",
  "Aarav K. is sitting at 920 XP on the cohort board. You can overtake him with just 2 cases!",
  "Remember the MECE principle: Mutually Exclusive, Collectively Exhaustive. Structure is 80% of the score.",
  "Bean & Co added delivery and profits dropped from ₹80k to ₹50k... Have you checked the aggregator commission cuts?",
  "Market sizing tip: Always sanity check your top-down TAM with a bottom-up unit estimate!",
  "Practice builds executive presence. The more cases you crack here, the calmer you’ll be on competition day."
];

export const MentorAvatar: React.FC<MentorAvatarProps> = ({
  onOpenCase,
  onNavigateToWorkspace,
  earnedXp,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [speechText, setSpeechText] = useState<string>(
    "Psst! I’m Prof. Cass. Ready to crack a business case today? Click 'Tour Arena' and I’ll show you around with my pointer stick!"
  );
  const [speechTitle, setSpeechTitle] = useState<string>("Study Coach Online");
  const [pose, setPose] = useState<'pointing' | 'celebrating' | 'thinking' | 'idle'>('pointing');
  const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);

  // Trigger tour step focus
  const goToTourStep = (index: number) => {
    if (index >= TOUR_STEPS.length) {
      endTour();
      return;
    }

    setCurrentStepIndex(index);
    const step = TOUR_STEPS[index];
    setSpeechTitle(step.title);
    setSpeechText(step.message);
    setPose('pointing');

    const targetEl = document.getElementById(step.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const rect = targetEl.getBoundingClientRect();
      setHighlightRect(rect);
    }
  };

  const startTour = () => {
    setIsTourActive(true);
    setIsOpen(true);
    goToTourStep(0);
  };

  const nextTourStep = () => {
    goToTourStep(currentStepIndex + 1);
  };

  const endTour = () => {
    setIsTourActive(false);
    setHighlightRect(null);
    setSpeechTitle("Great job!");
    setSpeechText("Now pick a case in the arena above. I'll be right here if you need a study tip!");
    setPose('celebrating');
  };

  const getRandomStudyTip = () => {
    const randomTip = STUDY_TIPS[Math.floor(Math.random() * STUDY_TIPS.length)];
    setSpeechTitle("Prof. Cass Study Tip");
    setSpeechText(randomTip);
    setPose('thinking');
    setIsOpen(true);
  };

  const challengeQuickstart = () => {
    const arenaEl = document.getElementById('challenges');
    if (arenaEl) {
      arenaEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    onOpenCase(0); // Open case 0 (Bean & Co)
    setSpeechTitle("Let's do this!");
    setSpeechText("Starting Case 01: The coffee shop conundrum. Remember: unit economics first!");
    setPose('celebrating');
  };

  // Keyboard navigation for tour
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isTourActive) endTour();
        else setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourActive]);

  return (
    <>
      {/* Target Spotlight Highlight Box when on Tour */}
      {isTourActive && (
        <div className="fixed inset-0 pointer-events-none z-30 transition-all duration-500">
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
        </div>
      )}

      {/* Floating Mentor Companion in Bottom Right */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
        {/* Mentor Speech Bubble */}
        {isOpen && (
          <div className="mb-3 max-w-[320px] sm:max-w-[360px] bg-white border-2 border-[#172019] rounded-2xl p-4 sm:p-5 shadow-[0_16px_36px_rgba(23,32,25,0.25)] relative text-[#172019] animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Bubble Triangle pointing to the avatar */}
            <div className="absolute -bottom-2.5 right-10 w-4 h-4 bg-white border-r-2 border-b-2 border-[#172019] rotate-45 transform" />

            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#dce0d5]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c6fa58] border border-[#172019] animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#172019]">
                  {speechTitle}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-[#62675f] hover:text-[#172019] font-bold px-1 rounded-sm hover:bg-slate-100"
                aria-label="Minimize mentor"
                title="Minimize mentor"
              >
                ✕
              </button>
            </div>

            <p className="text-[13px] leading-relaxed text-[#2a332c] font-medium mb-3">
              {speechText}
            </p>

            {/* Interactive Actions */}
            {isTourActive ? (
              <div className="flex items-center justify-between pt-1 gap-2">
                <button
                  onClick={endTour}
                  className="text-[11px] text-[#62675f] hover:text-[#172019] font-semibold underline px-1 py-1"
                >
                  Exit Tour
                </button>
                <button
                  onClick={nextTourStep}
                  className="button-lime text-xs py-2 px-3.5 rounded-lg font-bold shadow-xs flex items-center gap-1.5"
                >
                  <span>{TOUR_STEPS[currentStepIndex].actionText}</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={startTour}
                  className="button-lime text-[11px] py-1.5 px-3 rounded-md font-bold shadow-xs flex items-center gap-1"
                >
                  <span>🎯 Tour the Arena</span>
                </button>
                <button
                  onClick={getRandomStudyTip}
                  className="button-primary text-[11px] py-1.5 px-3 rounded-md font-semibold"
                >
                  <span>💡 Study Tip</span>
                </button>
                <button
                  onClick={challengeQuickstart}
                  className="bg-[#edf0e8] hover:bg-[#dce0d5] text-[#172019] border border-[#bdc6b5] text-[11px] font-bold py-1.5 px-2.5 rounded-md transition"
                >
                  <span>☕ Crack Case #1</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* The Avatar Character (Prof. Cass with Teacher's Pointer Stick) */}
        <div className="relative flex items-end">
          {/* Animated Teacher's Pointer Stick */}
          <div
            className={`absolute -top-12 -left-6 w-28 h-6 origin-bottom-right transition-transform duration-500 ease-out pointer-events-none ${
              isTourActive
                ? TOUR_STEPS[currentStepIndex]?.stickAngle || 'rotate-[-35deg]'
                : pose === 'pointing'
                ? 'rotate-[-45deg]'
                : pose === 'celebrating'
                ? 'rotate-[-85deg]'
                : 'rotate-[-15deg]'
            }`}
          >
            {/* The Pointer Stick graphic */}
            <div className="relative w-full h-2 bg-gradient-to-r from-[#d4af37] via-[#8b5a2b] to-[#4a2e12] rounded-full shadow-md flex items-center justify-start border border-[#2b1704]">
              {/* Golden Tip Hand Pointer */}
              <div className="absolute -left-2 -top-1 w-4 h-4 bg-[#c6fa58] border-2 border-[#172019] rounded-full shadow-[0_0_8px_#c6fa58] grid place-items-center">
                <span className="text-[8px] font-black text-[#172019]">☞</span>
              </div>
              {/* Pointer spark */}
              <div className="absolute -left-3 -top-2 w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
          </div>

          {/* Character Button / Click to interact */}
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (!isOpen) getRandomStudyTip();
            }}
            className="group relative cursor-pointer focus:outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="Ask Prof. Cass for guidance"
            title="Click to interact with Prof. Cass!"
          >
            {/* Notification Badge if minimized */}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c6fa58] border-2 border-[#172019] rounded-full shadow-sm animate-bounce" />
            )}

            {/* Stylized Vector Avatar Graphic */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#f8f9f4] to-[#edf0e8] border-3 border-[#172019] shadow-[0_8px_24px_rgba(23,32,25,0.3)] flex items-center justify-center overflow-hidden relative group-hover:border-[#78a831] transition-colors">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full transform translate-y-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Professor Cap / Beret */}
                <path
                  d="M20 32 C30 18, 70 18, 80 32 C75 36, 25 36, 20 32 Z"
                  fill="#172019"
                />
                <polygon points="50,14 85,26 50,34 15,26" fill="#172019" />
                {/* Gold tassel */}
                <circle cx="50" cy="24" r="3" fill="#c6fa58" />
                <path d="M50 24 Q65 28 68 38" stroke="#c6fa58" strokeWidth="2" strokeLinecap="round" />
                <circle cx="68" cy="38" r="2.5" fill="#c6fa58" />

                {/* Head / Face */}
                <ellipse cx="50" cy="50" rx="26" ry="24" fill="#ffd1a4" />

                {/* Expressive Eyes */}
                {pose === 'celebrating' ? (
                  <>
                    {/* Happy squint eyes ^^ */}
                    <path d="M38 46 Q43 40 48 46" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                    <path d="M54 46 Q59 40 64 46" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <ellipse cx="43" cy="48" rx="4" ry="5" fill="#172019" />
                    <circle cx="44.5" cy="46.5" r="1.5" fill="white" />
                    <ellipse cx="59" cy="48" rx="4" ry="5" fill="#172019" />
                    <circle cx="60.5" cy="46.5" r="1.5" fill="white" />
                  </>
                )}

                {/* Scholar Glasses */}
                <rect x="34" y="42" width="16" height="12" rx="3" fill="none" stroke="#172019" strokeWidth="2.5" />
                <rect x="52" y="42" width="16" height="12" rx="3" fill="none" stroke="#172019" strokeWidth="2.5" />
                <line x1="50" y1="48" x2="52" y2="48" stroke="#172019" strokeWidth="2.5" />

                {/* Cheerful Smile */}
                <path
                  d="M44 60 Q51 68 58 60"
                  stroke="#172019"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="#d45b4b"
                />

                {/* Professor Suit / Sweater */}
                <path
                  d="M26 78 C30 68, 70 68, 74 78 L80 100 L20 100 Z"
                  fill="#172019"
                />
                {/* Lime Tie */}
                <polygon points="50,72 53,86 50,92 47,86" fill="#c6fa58" />
                {/* White Collar */}
                <polygon points="43,70 50,75 40,78" fill="white" />
                <polygon points="57,70 50,75 60,78" fill="white" />
              </svg>
            </div>

            {/* Coach Label Tag */}
            <span className="block text-[10px] font-extrabold uppercase bg-[#172019] text-[#c6fa58] px-2 py-0.5 rounded-full text-center mt-1 border border-[#c6fa58]/40 shadow-xs">
              Prof. Cass
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
