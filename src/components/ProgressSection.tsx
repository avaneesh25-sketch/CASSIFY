import React from 'react';
import { COHORT_LEADERS } from '../data/cases';

interface ProgressSectionProps {
  earnedXp: number;
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({ earnedXp }) => {
  // Base demonstration XP is 650, plus any extra earned from newly answered cases
  const totalUserXp = 650 + earnedXp;
  const targetXp = 1000;
  const progressRatio = Math.min(totalUserXp / targetXp, 1);

  // Determine current player level designation based on XP
  let currentLevelTitle = 'Level 02 · The Analyst';
  if (totalUserXp >= 1000) {
    currentLevelTitle = 'Level 03 · The Strategist';
  }

  return (
    <section className="wrap py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center reveal-on-scroll">
      {/* Left Copy */}
      <div className="progress-copy">
        <div className="text-[12px] tracking-[1.65px] font-bold text-[#172019] mb-4">
          04 / MAKE PROGRESS VISIBLE
        </div>
        <h2 className="text-[34px] sm:text-[44px] font-bold tracking-[-1.5px] leading-[1.17] text-[#172019] mb-6">
          Compete a little.
          <br />
          Grow <span className="serif text-[#172019]">a lot.</span>
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#62675f] leading-relaxed max-w-[420px] mb-8">
          Turn “I should practice” into “one more case.” Track your progress, celebrate your
          breakthroughs, and find your place on the campus leaderboard.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4.5 p-2 rounded-lg hover:bg-white/50 transition-colors">
            <span className="w-[35px] h-[35px] border border-[#dce0d5] rounded-[7px] grid place-items-center text-[18px] text-[#172019] flex-shrink-0 bg-white shadow-xs">
              ↗
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-[#172019]">Your growth, at a glance</h3>
              <p className="text-[13px] text-[#62675f] mt-0.5">Every challenge adds to your skill set.</p>
            </div>
          </div>

          <div className="flex items-center gap-4.5 p-2 rounded-lg hover:bg-white/50 transition-colors">
            <span className="w-[35px] h-[35px] border border-[#dce0d5] rounded-[7px] grid place-items-center text-[18px] text-[#172019] flex-shrink-0 bg-white shadow-xs">
              ✦
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-[#172019]">A little friendly competition</h3>
              <p className="text-[13px] text-[#62675f] mt-0.5">Learn alongside your club and cohort.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Dashboard Card with card-lift */}
      <div className="bg-white border border-[#dce0d5] rounded-[16px] p-6 sm:p-7 shadow-[0_12px_38px_rgba(40,57,24,0.06)] card-lift">
        <div className="flex items-center justify-between gap-2 pb-5 border-b border-[#dce0d5]">
          <strong className="text-[14px] font-bold text-[#172019]">Your campus arena</strong>
          <span className="text-[9px] tracking-[1px] font-bold text-[#7d8375] uppercase">
            COHORT PREVIEW
          </span>
        </div>

        {/* Player stats */}
        <div className="flex items-center gap-3.5 my-6">
          <div className="w-[38px] h-[38px] rounded-full bg-[#c6fa58] text-[#172019] grid place-items-center font-bold text-xs flex-shrink-0 shadow-[0_0_10px_#c6fa58]">
            YO
          </div>
          <div>
            <strong className="text-[14px] font-bold text-[#172019] block leading-tight">
              You’re finding your edge.
            </strong>
            <p className="text-[11px] text-[#62675f]">{currentLevelTitle}</p>
          </div>
          <span className="ml-auto text-[13px] font-bold text-[#172019]">{totalUserXp} XP</span>
        </div>

        {/* Meter */}
        <div className="mb-6">
          <div className="flex justify-between text-[11px] text-[#62675f] mb-2 font-medium">
            <span>Next stop: The Strategist</span>
            <span>{totalUserXp} / {targetXp} XP</span>
          </div>
          <div className="w-full bg-[#edf0e8] h-[7px] rounded-full overflow-hidden">
            <div
              className="bg-[#99c63e] h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_6px_#c6fa58]"
              style={{ width: `${Math.round(progressRatio * 100)}%` }}
            />
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <div className="flex justify-between items-center gap-2 mb-3">
            <h3 className="text-[13px] font-bold text-[#172019]">This week’s top thinkers</h3>
            <span className="text-[9px] font-bold text-[#62675f] tracking-wide">DEMO COHORT</span>
          </div>

          <div className="divide-y divide-[#edf0e8]">
            {COHORT_LEADERS.map((leader) => (
              <div key={leader.rank} className="flex items-center gap-3 py-3 px-2 text-[12px] hover:bg-slate-50 rounded transition-colors">
                <span className="text-[#879079] text-[11px] font-mono font-medium w-4">
                  {leader.rank}
                </span>
                <span
                  className="w-[29px] h-[29px] rounded-full text-[10px] font-bold grid place-items-center text-[#172019]"
                  style={{ backgroundColor: leader.avatarColor }}
                >
                  {leader.initials}
                </span>
                <strong className="text-[#172019] font-medium">{leader.name}</strong>
                <span className="ml-auto font-medium text-[#172019]">{leader.xp} XP</span>
              </div>
            ))}

            {/* Current user */}
            <div className="flex items-center gap-3 py-3 px-2 text-[12px] bg-[#f1f8e8] rounded-md mt-1 border-0 shadow-xs">
              <span className="text-[#879079] text-[11px] font-mono font-medium w-4">03</span>
              <span className="w-[29px] h-[29px] rounded-full bg-[#c6fa58] text-[10px] font-bold grid place-items-center text-[#172019]">
                YO
              </span>
              <div>
                <strong className="text-[#172019] font-bold block leading-none">You</strong>
                <small className="text-[9px] text-[#6a7f4b] font-medium">Keep climbing ↗</small>
              </div>
              <span className="ml-auto font-bold text-[#172019]">{totalUserXp} XP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
