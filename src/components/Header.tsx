import React from 'react';

interface HeaderProps {
  currentView: 'showcase' | 'dashboard' | 'billing' | 'privacy';
  onNavigate: (view: 'showcase' | 'dashboard' | 'billing' | 'privacy') => void;
  user: { email: string; name: string } | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  user,
  onOpenAuth,
  onSignOut,
}) => {
  return (
    <header className="max-w-[1440px] mx-auto px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between border-b border-[#dce0d5] gap-4">
      {/* Brand */}
      <button
        onClick={() => onNavigate('showcase')}
        className="brand-font text-[24px] sm:text-[27px] font-extrabold tracking-[-1.3px] flex items-center gap-[9px] text-[#172019] text-left"
      >
        <span className="inline-grid place-items-center bg-[#c6fa58] w-[33px] h-[36px] rounded-[8px] text-[30px] font-semibold tracking-normal text-[#172019] leading-none">
          ↯
        </span>
        cassify<span className="-ml-[9px] text-[#c6fa58]">.</span>
      </button>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#172019]">
        {currentView === 'showcase' ? (
          <>
            <a href="#journey" className="hover:text-[#668822] transition-colors">
              The journey
            </a>
            <a href="#challenges" className="hover:text-[#668822] transition-colors">
              Case arena
            </a>
            <a href="#campus" className="hover:text-[#668822] transition-colors">
              For institutions
            </a>
            <button
              onClick={() => onNavigate('dashboard')}
              className="text-[#62675f] hover:text-[#172019] transition-colors"
            >
              Competitor Workspace
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onNavigate('showcase')}
              className="hover:text-[#668822] transition-colors"
            >
              ← Back to Arena
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`hover:text-[#668822] transition-colors ${currentView === 'dashboard' ? 'font-bold text-[#172019]' : ''}`}
            >
              Workspace
            </button>
            <button
              onClick={() => onNavigate('billing')}
              className={`hover:text-[#668822] transition-colors ${currentView === 'billing' ? 'font-bold text-[#172019]' : ''}`}
            >
              Premium Checkout
            </button>
          </>
        )}
      </nav>

      {/* Action CTA */}
      <div className="flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c6fa58] text-[#172019] flex items-center justify-center font-bold text-xs">
              {user.name ? user.name.slice(0, 2).toUpperCase() : 'JD'}
            </div>
            <button
              onClick={onSignOut}
              className="text-xs font-semibold text-[#62675f] hover:text-red-600 transition"
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="text-xs font-bold text-[#62675f] hover:text-[#172019] px-2 py-1"
          >
            Sign in
          </button>
        )}

        {currentView === 'showcase' ? (
          <a
            href="#challenges"
            className="button-primary text-xs sm:text-sm py-2.5 sm:py-3 px-3.5 sm:px-4.5 rounded-[7px] flex items-center gap-2 font-semibold"
          >
            <span>Enter the arena</span>
            <span className="text-base leading-none">↗</span>
          </a>
        ) : (
          <button
            onClick={() => onNavigate('showcase')}
            className="button-primary text-xs sm:text-sm py-2.5 sm:py-3 px-3.5 sm:px-4.5 rounded-[7px] flex items-center gap-2 font-semibold"
          >
            <span>Case Arena</span>
            <span className="text-base leading-none">↗</span>
          </button>
        )}
      </div>
    </header>
  );
};
