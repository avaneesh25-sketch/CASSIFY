import React from 'react';

interface BillingTestProps {
  onBack: () => void;
  onViewPrivacy: () => void;
}

export const BillingTest: React.FC<BillingTestProps> = ({ onBack, onViewPrivacy }) => {
  return (
    <div className="min-h-screen bg-[#f8f9f4] text-[#172019]">
      <main className="max-w-[800px] mx-auto px-6 py-14">
        <button
          onClick={onBack}
          className="text-xs font-bold text-[#62675f] hover:text-[#172019] mb-8 inline-flex items-center gap-1.5"
        >
          ← Back to the arena
        </button>

        <div className="text-[12px] tracking-[1.5px] font-bold text-[#78a831] uppercase mb-3">
          PAYMENT INTEGRATION · TEST MODE
        </div>

        <h1 className="text-[40px] sm:text-[60px] font-extrabold tracking-[-2px] leading-[1.05] mb-6 text-[#172019]">
          Your next level,
          <br />
          in the making.
        </h1>

        <p className="text-[16px] text-[#62675f] leading-relaxed mb-8">
          Explore the planned Premium checkout. This is a sandbox demonstration, not a purchase of
          access.
        </p>

        <section className="border border-[#ccc] rounded-[20px] p-8 sm:p-10 my-8 bg-[#f5f7ef] shadow-xs">
          <div className="text-[11px] font-bold tracking-[1.5px] text-[#62675f] uppercase mb-2">
            CASSIFY PREMIUM — TEST
          </div>

          <div className="text-[44px] sm:text-[48px] font-bold text-[#172019] my-4">
            ₹200 <small className="text-[18px] font-normal text-[#62675f]">/ month · tax included</small>
          </div>

          <p className="text-[15px] text-[#525b4b] leading-relaxed mb-6">
            The proposed Premium plan covers advanced business-case practice. Student accounts and
            paid access are still being built.
          </p>

          <a
            className="button-primary py-3.5 px-6 rounded-[7px] inline-flex items-center gap-3 text-sm font-semibold mb-6"
            href="https://test.checkout.dodopayments.com/buy/pdt_0NpzXMK1UMHHFSWaw7WZ0?quantity=1"
            target="_blank"
            rel="noreferrer"
          >
            <span>Open Dodo test checkout</span>
            <span>↗</span>
          </a>

          <div className="p-4 bg-white/70 rounded-lg border border-[#dce0d5] text-xs text-[#525b4b] space-y-1.5 leading-relaxed">
            <p className="font-bold text-[#172019]">No real payment. No premium access unlocked.</p>
            <p>
              Use only Dodo test details if you try the payment flow. Do not enter real card
              details. Any monthly subscription shown is simulated in Dodo’s test environment.
            </p>
          </div>
        </section>

        <p className="text-xs text-[#62675f] leading-relaxed mb-4">
          Dodo hosts the checkout. Information you choose to enter there is processed by Dodo;
          Cassify does not collect payment-card information. No Clarity analytics runs on this page.
        </p>

        <button
          onClick={onViewPrivacy}
          className="text-xs text-[#172019] underline font-medium hover:text-[#668822]"
        >
          Privacy details
        </button>
      </main>
    </div>
  );
};
