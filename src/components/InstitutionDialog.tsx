import React, { useEffect } from 'react';

interface InstitutionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstitutionDialog: React.FC<InstitutionDialogProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[620px] bg-[#f8f9f4] border border-[#dce0d5] rounded-[16px] p-6 sm:p-10 shadow-2xl text-[#172019]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-light text-[#62675f] hover:text-[#172019] leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5"
          aria-label="Close dialog"
        >
          ×
        </button>

        <div className="text-[11px] tracking-[1.5px] font-bold text-[#62675f] uppercase mb-2">
          CAMPUS ACCESS · PRODUCT VISION
        </div>

        <h2 className="text-[26px] sm:text-[33px] font-bold tracking-[-1.5px] mb-4 text-[#172019]">
          Bring your cohort into the game.
        </h2>

        <p className="text-[15px] sm:text-[16px] text-[#42473f] leading-relaxed mb-6">
          Institutional access is planned for universities, consulting clubs, and case societies.
          The proposed package includes advanced case access for a cohort, shared leaderboards, and
          a mentor progress view. This is a concept preview; plans, pricing, and pilot enrolment are
          not live yet.
        </p>

        <div className="bg-[#edf0e8] p-4 rounded-xl border border-[#dce0d5] mb-6 space-y-3">
          <div className="flex items-center gap-3 text-sm font-semibold text-[#172019]">
            <span className="w-6 h-6 rounded-full bg-[#c6fa58] text-[#172019] flex items-center justify-center text-xs">
              ✦
            </span>
            <span>Planned Cohort Features</span>
          </div>
          <ul className="text-xs text-[#62675f] space-y-1.5 ml-9 list-disc">
            <li>Curated problem sets aligned with national & global case competitions</li>
            <li>Club & cohort private leaderboards with verified progress metrics</li>
            <li>Mentor dashboard to track case breakdown velocity and cohort readiness</li>
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#dce0d5]">
          <span className="text-[12px] text-[#62675f]">Interested in early access?</span>
          <button
            onClick={onClose}
            className="button-primary text-xs py-2 px-4 rounded-[6px]"
          >
            Got it ↗
          </button>
        </div>
      </div>
    </div>
  );
};
