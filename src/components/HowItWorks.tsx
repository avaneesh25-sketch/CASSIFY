import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="wrap pt-9 pb-16 sm:pb-20 reveal-on-scroll">
      <div className="text-[11px] tracking-[1.65px] font-bold text-[#172019] border-t border-[#dce0d5] pt-9 mb-7">
        02 / HOW IT WORKS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8">
        <div>
          <h2 className="text-[28px] sm:text-[34px] font-bold tracking-[-1px] leading-[1.2] text-[#172019]">
            One case.
            <br />
            One breakthrough.
            <br />
            <span className="serif text-[#172019]">One level up.</span>
          </h2>
        </div>

        <article className="border-t md:border-t-0 border-[#dce0d5] pt-5 md:pt-0 p-3 rounded-lg hover:bg-white/60 transition-colors card-lift">
          <span className="text-[11px] text-[#77826b] tracking-[1px] font-bold block mb-4 sm:mb-6">
            01 / PICK
          </span>
          <h3 className="text-[17px] font-bold text-[#172019] mb-2">Find your challenge</h3>
          <p className="text-[14px] text-[#62675f] leading-relaxed">
            Start at your level. Explore cases across strategy, growth, operations, and more.
          </p>
        </article>

        <article className="border-t md:border-t-0 border-[#dce0d5] pt-5 md:pt-0 p-3 rounded-lg hover:bg-white/60 transition-colors card-lift">
          <span className="text-[11px] text-[#77826b] tracking-[1px] font-bold block mb-4 sm:mb-6">
            02 / SOLVE
          </span>
          <h3 className="text-[17px] font-bold text-[#172019] mb-2">Make your case</h3>
          <p className="text-[14px] text-[#62675f] leading-relaxed">
            Work through the brief, challenge your assumptions, and build a recommendation.
          </p>
        </article>

        <article className="border-t md:border-t-0 border-[#dce0d5] pt-5 md:pt-0 p-3 rounded-lg hover:bg-white/60 transition-colors card-lift">
          <span className="text-[11px] text-[#77826b] tracking-[1px] font-bold block mb-4 sm:mb-6">
            03 / LEVEL UP
          </span>
          <h3 className="text-[17px] font-bold text-[#172019] mb-2">See yourself grow</h3>
          <p className="text-[14px] text-[#62675f] leading-relaxed">
            Earn experience, reflect on your approach, and unlock a harder challenge.
          </p>
        </article>
      </div>
    </section>
  );
};
