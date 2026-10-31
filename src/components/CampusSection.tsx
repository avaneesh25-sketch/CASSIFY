import React from 'react';

interface CampusSectionProps {
  onOpenInstitutionalModal: () => void;
}

export const CampusSection: React.FC<CampusSectionProps> = ({ onOpenInstitutionalModal }) => {
  return (
    <div className="wrap reveal-on-scroll">
      <section
        className="bg-[#172019] text-[#f8f9f4] rounded-[18px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 p-8 sm:p-14 my-10 shadow-[0_20px_45px_rgba(23,32,25,0.25)] card-lift relative overflow-hidden"
        id="campus"
      >
        {/* Subtle radial glow inside card */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c6fa58]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-[10px] tracking-[1.65px] font-bold text-[#c6fa58] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6fa58] animate-pulse" />
            FOR UNIVERSITIES, CLUBS & CASE SOCIETIES
          </div>
          <h2 className="text-[30px] sm:text-[38px] font-bold tracking-[-1.5px] leading-[1.18] text-[#f8f9f4] my-5">
            A stronger cohort.
            <br />
            A sharper <span className="serif text-[#f8f9f4]">competitive edge.</span>
          </h2>
          <p className="text-[14px] text-[#b3bdae] leading-relaxed max-w-[480px]">
            Give students a structured way to prepare, together. Cassify’s institutional vision
            brings practice, progression, and friendly competition into one shared learning space.
          </p>

          <button
            onClick={onOpenInstitutionalModal}
            className="button-lime mt-7 text-xs sm:text-sm py-3.5 px-6 rounded-[7px] cursor-pointer"
          >
            <span>Explore institutional access</span>
            <span className="text-lg">↗</span>
          </button>
        </div>

        <div className="relative z-10 flex flex-col justify-center divide-y divide-white/15">
          <article className="flex gap-5 py-5 first:pt-0">
            <span className="text-[11px] font-bold text-[#c6fa58] pt-1">01</span>
            <div>
              <h3 className="text-[17px] font-bold text-white mb-1.5">One home for case prep</h3>
              <p className="text-[13px] text-[#b3bdae] leading-relaxed">
                A guided learning path that complements your club sessions and classroom teaching.
              </p>
            </div>
          </article>

          <article className="flex gap-5 py-5">
            <span className="text-[11px] font-bold text-[#c6fa58] pt-1">02</span>
            <div>
              <h3 className="text-[17px] font-bold text-white mb-1.5">
                Access for the whole cohort
              </h3>
              <p className="text-[13px] text-[#b3bdae] leading-relaxed">
                Advanced challenges through university or club access, alongside individual premium
                plans.
              </p>
            </div>
          </article>

          <article className="flex gap-5 py-5 last:pb-0">
            <span className="text-[11px] font-bold text-[#c6fa58] pt-1">03</span>
            <div>
              <h3 className="text-[17px] font-bold text-white mb-1.5">Progress you can follow</h3>
              <p className="text-[13px] text-[#b3bdae] leading-relaxed">
                A planned cohort view to help mentors spot momentum and support students who need a
                nudge.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
