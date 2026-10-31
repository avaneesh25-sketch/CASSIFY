import React from 'react';

interface AccountPanelProps {
  user: { email: string; name: string } | null;
  savedCount: number;
  totalXp: number;
  onSignIn: () => void;
  onSignOut: () => void;
  onViewPrivacy: () => void;
}

export const AccountPanel: React.FC<AccountPanelProps> = ({
  user,
  savedCount,
  totalXp,
  onSignIn,
  onSignOut,
  onViewPrivacy,
}) => {
  return (
    <section className="wrap mt-14 reveal-on-scroll" id="my-progress">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 sm:p-10 border border-[#bdc6b5] rounded-[20px] bg-[#eef3e5] shadow-xs card-lift">
        <div>
          <div className="text-[12px] tracking-[1.65px] font-bold text-[#172019] mb-3">
            YOUR PERSONAL PRACTICE
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold tracking-[-1px] text-[#172019] my-2">
            Pick up where you left off.
          </h2>

          <p className="text-[15px] text-[#525b4b] mt-2 mb-1 max-w-[650px]" role="status">
            {user
              ? `Signed in as ${user.name} (${user.email}). Your practice is saved privately.`
              : 'Sign in to save your answers and track XP across devices, or continue practicing locally.'}
          </p>

          <p className="text-[14px] font-semibold text-[#172019] mt-2">
            {savedCount > 0
              ? `${savedCount} of 3 sample cases practised · ${totalXp} practice XP earned`
              : 'No cases completed yet. Try "The coffee shop conundrum" above!'}
          </p>
        </div>

        <div className="flex flex-col gap-3 min-w-[220px] w-full lg:w-auto">
          {user ? (
            <button
              onClick={onSignOut}
              className="button-primary justify-center text-sm py-3.5 px-6 rounded-[7px] font-semibold text-center"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={onSignIn}
              className="button-primary justify-center text-sm py-3.5 px-6 rounded-[7px] font-semibold text-center flex items-center gap-3"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.47 0 2.82.525 3.87 1.395l2.4-2.4C16.89 3.495 14.7 2.6 12.24 2.6 7.02 2.6 2.76 6.84 2.76 12.06s4.26 9.46 9.48 9.46c5.445 0 9.06-3.825 9.06-9.225 0-.615-.06-1.215-.165-1.785H12.24z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          )}

          <button
            onClick={onViewPrivacy}
            className="text-[13px] text-[#525b4b] hover:text-[#172019] underline text-center"
          >
            How your data is saved
          </button>
        </div>
      </div>
    </section>
  );
};
