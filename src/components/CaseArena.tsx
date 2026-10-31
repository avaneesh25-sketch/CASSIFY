import React from 'react';
import { CaseItem, CASES_DATA } from '../data/cases';

interface CaseArenaProps {
  onOpenCase: (caseItem: CaseItem) => void;
  savedAnswers: Record<number, number>;
}

export const CaseArena: React.FC<CaseArenaProps> = ({ onOpenCase, savedAnswers }) => {
  return (
    <section className="bg-[#edf0e8] py-16 sm:py-20 reveal-on-scroll" id="challenges">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10">
          <div>
            <div className="text-[12px] tracking-[1.65px] font-bold text-[#172019] mb-4">
              03 / THE CASE ARENA
            </div>
            <h2 className="text-[34px] sm:text-[44px] font-bold tracking-[-1.5px] leading-[1.17] text-[#172019]">
              Small challenges.
              <br />
              <span className="serif text-[#172019]">Big thinking.</span>
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#62675f] max-w-[320px] leading-relaxed">
            Your next challenge is waiting.
            <br />
            Try an original sample case below.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES_DATA.map((item) => {
            const isSaved = savedAnswers[item.id] !== undefined;

            return (
              <article
                key={item.id}
                data-cursor="play"
                onClick={() => onOpenCase(item)}
                className="case-card border border-[#d8dfce] bg-[#f8f9f4] rounded-[14px] overflow-hidden flex flex-col justify-between shadow-xs card-lift cursor-pointer group"
              >
                {/* Cover Banner */}
                <div
                  className={`h-[210px] p-6 flex flex-col justify-between transition-colors ${
                    item.theme === 'coffee'
                      ? 'bg-[#dbccb7] text-[#483421]'
                      : item.theme === 'growth'
                      ? 'bg-[#d5dfed] text-[#253b56]'
                      : 'bg-[#dce9ba] text-[#344224]'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] tracking-[1.5px] font-bold uppercase opacity-90">
                      {item.categoryNumber}
                    </span>
                    {isSaved && (
                      <span className="bg-[#172019] text-[#c6fa58] text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-xs">
                        ✓ Practised
                      </span>
                    )}
                  </div>

                  <strong className="text-[34px] sm:text-[38px] font-semibold tracking-[-1.5px] leading-[1.07] block transition-transform group-hover:translate-x-1 duration-200">
                    {item.titleHeadline}
                    <br />
                    <i className="serif font-normal">{item.titleItalic}</i>
                  </strong>

                  <span className="text-[10px] tracking-[1.2px] font-bold opacity-80 uppercase">
                    {item.coverBadge}
                  </span>
                </div>

                {/* Case Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.5px] text-[#686d62] mb-3">
                      <span>{item.level}</span>
                      <span>·</span>
                      <span>{item.duration}</span>
                      <span className="ml-auto">
                        {item.isFree ? (
                          <span className="text-[#4a642c] bg-[#e4edd4] px-2 py-0.5 rounded font-semibold">
                            FREE
                          </span>
                        ) : (
                          <span className="text-[#172019] bg-[#dce0d5] px-2 py-0.5 rounded font-semibold">
                            PREMIUM
                          </span>
                        )}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-bold text-[#172019] mb-2 leading-snug group-hover:text-[#456322] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[14px] text-[#62675f] leading-relaxed line-clamp-3">
                      {item.brief}
                    </p>
                  </div>

                  <div className="case-link flex justify-between items-center w-full border-t border-[#dce0d5] pt-4 mt-5 text-[12px] font-bold text-[#172019]">
                    <span className="group-hover:text-[#456322] transition-colors">
                      {item.isFree ? 'Take the challenge' : 'Preview the brief'}
                      {isSaved && ' (Saved)'}
                    </span>
                    <span className="text-[10px] text-[#687c4b] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>+{item.xp} XP</span>
                      <span className="text-xs">↗</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-[11px] text-[#747b6d] mt-5">
          Original illustrative challenges. Times and XP show the planned learning experience.
        </p>
      </div>
    </section>
  );
};
