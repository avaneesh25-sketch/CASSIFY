import React from 'react';

interface AnalyticsConsentProps {
  isOpen: boolean;
  onConsent: (granted: boolean) => void;
  onViewPrivacy: () => void;
}

export const AnalyticsConsent: React.FC<AnalyticsConsentProps> = ({
  isOpen,
  onConsent,
  onViewPrivacy,
}) => {
  if (!isOpen) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-[#172019] text-white p-5 rounded-xl shadow-2xl border border-white/10 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300"
      aria-label="Analytics privacy preferences"
    >
      <div className="mb-3">
        <strong className="block text-white text-[15px] font-bold mb-1">
          Help us improve Cassify?
        </strong>
        <p className="text-xs text-[#b3bdae] leading-relaxed">
          With your permission, analytics records anonymous interactions to help us improve this
          showcase. Advertising consent stays off.{' '}
          <button
            onClick={onViewPrivacy}
            className="underline hover:text-white transition-colors"
          >
            Privacy details
          </button>
        </p>
      </div>

      <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-white/10">
        <button
          type="button"
          onClick={() => onConsent(false)}
          className="text-xs px-3.5 py-1.5 rounded-md border border-white/20 text-[#c2c6bc] hover:text-white hover:bg-white/5 transition"
        >
          Decline analytics
        </button>
        <button
          type="button"
          onClick={() => onConsent(true)}
          className="text-xs font-bold px-3.5 py-1.5 rounded-md bg-[#c6fa58] text-[#172019] hover:bg-[#b5f53d] transition"
        >
          Allow analytics
        </button>
      </div>
    </aside>
  );
};
