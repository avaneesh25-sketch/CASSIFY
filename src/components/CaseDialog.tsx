import React, { useEffect, useState } from 'react';
import { CaseItem } from '../data/cases';

interface CaseDialogProps {
  caseItem: CaseItem | null;
  onClose: () => void;
  savedAnswer?: number;
  onSelectAnswer: (caseId: number, answerIndex: number) => void;
  isUserSignedIn: boolean;
}

export const CaseDialog: React.FC<CaseDialogProps> = ({
  caseItem,
  onClose,
  savedAnswer,
  onSelectAnswer,
  isUserSignedIn,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<number | undefined>(savedAnswer);

  useEffect(() => {
    setSelectedChoice(savedAnswer);
  }, [savedAnswer, caseItem]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseItem) return null;

  const handleChoiceClick = (index: number) => {
    setSelectedChoice(index);
    onSelectAnswer(caseItem.id, index);
  };

  const hasAnswered = selectedChoice !== undefined;
  const isCorrect = selectedChoice === caseItem.answer;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[620px] bg-[#f8f9f4] border border-[#dce0d5] rounded-[16px] p-6 sm:p-10 shadow-2xl text-[#172019] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-light text-[#62675f] hover:text-[#172019] transition-colors leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5"
          aria-label="Close dialog"
        >
          ×
        </button>

        {/* Eyebrow Label */}
        <div className="text-[11px] tracking-[1.5px] font-bold text-[#62675f] uppercase mb-2">
          {caseItem.label}
        </div>

        {/* Title */}
        <h2 id="dialog-title" className="text-[26px] sm:text-[33px] font-bold tracking-[-1.5px] mb-4 text-[#172019]">
          {caseItem.title}
        </h2>

        {/* Brief */}
        <p className="text-[15px] sm:text-[16px] text-[#42473f] leading-relaxed mb-6">
          {caseItem.brief}
        </p>

        {/* Interaction section */}
        <div className="border-t border-[#dce0d5] pt-6 mb-6">
          <h3 className="text-[17px] font-bold text-[#172019] mb-3">
            Where would you start?
          </h3>

          <div className="grid gap-2.5">
            {caseItem.choices.map((choice, idx) => {
              const isSelected = selectedChoice === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleChoiceClick(idx)}
                  className={`text-left p-3.5 sm:p-4 rounded-[6px] border text-[14px] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#e3f3c8] border-[#90af5b] text-[#172019] font-medium shadow-xs'
                      : 'bg-white border-[#dce0d5] hover:bg-[#f1f6ea] hover:border-[#b4c498] text-[#172019]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-[#4a642c] bg-[#4a642c] text-white font-bold'
                          : 'border-[#bdc4b3] text-[#62675f]'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-snug">{choice}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback message */}
          {hasAnswered && (
            <div
              className={`mt-4 p-4 rounded-lg text-[14px] font-medium leading-relaxed ${
                isCorrect
                  ? 'bg-[#e9f5d6] text-[#2c4815] border border-[#a4c979]'
                  : 'bg-[#f7edeb] text-[#7a2e24] border border-[#dfb3ab]'
              }`}
              role="status"
            >
              <div className="font-bold mb-1">
                {isCorrect ? '✓ Strong starting point.' : 'ℹ Consider another angle.'}
              </div>
              <p className="text-[13px]">{caseItem.feedback}</p>
            </div>
          )}
        </div>

        {/* Note at bottom */}
        <div className="flex items-center justify-between text-[12px] text-[#62675f] pt-4 border-t border-[#dce0d5]/60">
          <p>
            {isUserSignedIn
              ? hasAnswered
                ? '✓ Answer saved to your personal progress.'
                : 'Select an answer to save your progress.'
              : 'Showcase demo — answers saved locally. Sign in to sync across devices.'}
          </p>
          {hasAnswered && (
            <span className="font-bold text-[#4a642c]">+{caseItem.xp} XP</span>
          )}
        </div>
      </div>
    </div>
  );
};
