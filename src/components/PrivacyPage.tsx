import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
  analyticsConsent: boolean | null;
  onUpdateConsent: (granted: boolean) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({
  onBack,
  analyticsConsent,
  onUpdateConsent,
}) => {
  return (
    <div className="min-h-screen bg-[#f8f9f4] text-[#172019]">
      <main className="wrap max-w-[850px] pt-12 pb-20">
        <button
          onClick={onBack}
          className="text-xs font-bold text-[#62675f] hover:text-[#172019] mb-8 inline-flex items-center gap-1.5"
        >
          ← Back to Cassify
        </button>

        <h1 className="text-[36px] sm:text-[44px] font-extrabold tracking-[-2px] mb-3 text-[#172019]">
          Privacy choices
        </h1>
        <p className="text-sm text-[#62675f] mb-8">
          Updated 28 October 2026. This notice covers the Cassify showcase.
        </p>

        <div className="space-y-8 text-[#42473f] text-[15px] leading-relaxed">
          <section>
            <h2 className="text-[22px] font-bold text-[#172019] mb-3">The current prototype</h2>
            <p>
              Google sign-in is optional. When you sign in, your profile is linked to create your
              Cassify account. We save your selected answers to the three sample cases against your
              account ID so you can return on another device. Other students cannot read your saved
              answers.
            </p>
            <p className="mt-2.5">
              Practice XP is calculated from your saved sample cases. The campus leaderboard remains
              an illustrative cohort demonstration. For account or data-deletion requests, contact{' '}
              <a href="mailto:avaneeshpramod25@gmail.com" className="underline text-[#172019]">
                avaneeshpramod25@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-[#172019] mb-3">
              Optional Microsoft Clarity analytics
            </h2>
            <p>
              If you select Allow analytics, anonymous interaction metrics help us understand how
              visitors navigate our learning platform, including case dialog completion. We mask
              all inputs and dialog notes, and do not send case answers or email addresses.
              Advertising-storage consent remains strictly denied.
            </p>
            <p className="mt-2.5">
              Declining analytics does not prevent you from using any part of the showcase or case
              arena.
            </p>
          </section>

          <section className="p-6 bg-[#edf0e8] rounded-xl border border-[#dce0d5]">
            <h2 className="text-[20px] font-bold text-[#172019] mb-2">Change your choice</h2>
            <p className="text-sm text-[#62675f] mb-4">
              Current setting:{' '}
              <strong className="text-[#172019]">
                {analyticsConsent === true
                  ? 'Analytics Allowed'
                  : analyticsConsent === false
                  ? 'Analytics Declined'
                  : 'Not yet selected'}
              </strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onUpdateConsent(false)}
                className={`text-xs font-semibold px-4 py-2 rounded-md border ${
                  analyticsConsent === false
                    ? 'bg-[#172019] text-white border-[#172019]'
                    : 'bg-white border-[#dce0d5] text-[#172019] hover:bg-black/5'
                }`}
              >
                Decline analytics
              </button>
              <button
                onClick={() => onUpdateConsent(true)}
                className={`text-xs font-semibold px-4 py-2 rounded-md border ${
                  analyticsConsent === true
                    ? 'bg-[#c6fa58] text-[#172019] border-[#a0d930] font-bold'
                    : 'bg-white border-[#dce0d5] text-[#172019] hover:bg-black/5'
                }`}
              >
                Allow analytics
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-[22px] font-bold text-[#172019] mb-3">
              Search performance and payments
            </h2>
            <p>
              Google Search Console helps understand performance. Live payments and premium access
              are not active on this showcase. A clearly labelled Dodo test checkout is available at
              the billing test route. If you test it, use only sandbox credentials. Do not enter real
              payment-card details.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};
