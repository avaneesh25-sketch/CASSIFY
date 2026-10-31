import React from 'react';

interface FooterProps {
  onNavigate: (view: 'showcase' | 'dashboard' | 'billing' | 'privacy') => void;
  onOpenPrivacySettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacySettings }) => {
  return (
    <footer className="border-t border-[#dce0d5] bg-[#f8f9f4]">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 py-6 text-sm text-[#62675f]">
        <button
          onClick={() => onNavigate('showcase')}
          className="brand-font text-[22px] font-extrabold tracking-[-1.3px] flex items-center gap-[7px] text-[#172019]"
        >
          <span className="inline-grid place-items-center bg-[#c6fa58] w-[27px] h-[29px] rounded-[6px] text-[22px] font-semibold text-[#172019] leading-none">
            ↯
          </span>
          cassify.
        </button>

        <span className="text-[12px] text-[#62675f]">Think sharper. Play higher.</span>

        <span className="text-[11px] text-[#8c9484]">Concept prototype · 2026</span>

        <div className="flex items-center gap-4 text-xs">
          <button
            onClick={() => onNavigate('billing')}
            className="text-[#172019] hover:text-[#668822] font-semibold transition"
          >
            Premium test checkout ↗
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('privacy')}
            className="text-[#62675f] hover:text-[#172019] transition"
          >
            Privacy notice
          </button>
          <span>·</span>
          <button
            onClick={onOpenPrivacySettings}
            className="text-[#62675f] hover:text-[#172019] transition"
          >
            Privacy choices
          </button>
        </div>
      </div>
    </footer>
  );
};
