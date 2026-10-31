import React, { useState } from 'react';
import { LEVELS_DATA } from '../data/cases';

export const JourneySection: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const currentLevel = LEVELS_DATA[activeLevel] || LEVELS_DATA[0];

  return (
    <section className="wrap pt-16 sm:pt-20 pb-12 sm:pb-14 reveal-on-scroll" id="journey">
      {/* Section Head */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-9">
        <div>
          <div className="text-[12px] tracking-[1.65px] font-bold text-[#172019] mb-4">
            01 / THE JOURNEY
          </div>
          <h2 className="text-[34px] sm:text-[44px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.17] text-[#172019]">
            Every great strategist
            <br />
            starts at <span className="serif text-[#172019]">level one.</span>
          </h2>
        </div>
        <p className="text-[14px] sm:text-[15px] text-[#62675f] max-w-[360px] leading-[1.8]">
          Less “where do I even start?”
          <br />
          More “what’s my next challenge?”
          <br />A clear path from curious to competition-ready.
        </p>
      </div>

      {/* Level Cards Grid with card-lift */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {LEVELS_DATA.map((lvl) => {
          const isActive = activeLevel === lvl.id;
          return (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id)}
              aria-pressed={isActive}
              className={`border text-left rounded-[10px] p-5 cursor-pointer card-lift ${
                isActive
                  ? 'bg-[#c6fa58] border-[#c6fa58] shadow-[0_10px_24px_rgba(198,250,88,0.35)] -translate-y-1'
                  : 'bg-transparent border-[#dce0d5] hover:border-[#b5bcae] hover:bg-[#c6fa58]/15'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] tracking-[1px] font-bold mb-1">
                <span>LEVEL {lvl.levelNumber}</span>
                <span className="text-[9px] px-1.5 py-0.5 border border-[#172019]/25 rounded text-[#172019]">
                  {lvl.tier}
                </span>
              </div>

              <span
                className={`block font-manrope text-[52px] sm:text-[58px] font-bold tracking-[-3px] leading-tight ${
                  isActive ? 'text-[#223311]' : 'text-[#87907c]'
                }`}
              >
                {lvl.levelNumber}
              </span>

              <h3 className="text-[19px] font-bold text-[#172019] mt-1">{lvl.title}</h3>
              <p className="text-[13px] text-[#525b4b] min-h-[40px] mt-1.5 leading-snug">
                {lvl.subtitle}
              </p>

              <div className="border-t border-[#172019]/15 pt-3.5 mt-4 flex justify-between items-center text-[12px] font-medium text-[#172019]">
                <span>{lvl.footLabel}</span>
                <span className="text-[18px] leading-none">↗</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Level Detail Callout */}
      <div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-6 p-4 rounded-lg bg-[#edf0e8]/80 border border-[#dce0d5] shadow-xs"
        aria-live="polite"
      >
        <span className="text-[10px] tracking-[1px] font-bold text-[#172019] whitespace-nowrap">
          YOUR MISSION
        </span>
        <p className="text-[14px] text-[#62675f] flex-1 max-w-[680px]">
          {currentLevel.description}
        </p>
        <a
          href="#challenges"
          className="text-[12px] font-bold text-[#172019] hover:text-[#668822] whitespace-nowrap"
        >
          Find your challenge ↗
        </a>
      </div>
    </section>
  );
};
