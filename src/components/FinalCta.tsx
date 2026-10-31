import React from 'react';

export const FinalCta: React.FC = () => {
  return (
    <section className="wrap text-center pt-20 pb-16 reveal-on-scroll">
      <div className="text-[12px] tracking-[1.65px] font-bold text-[#172019] flex justify-center items-center gap-2 mb-4">
        YOUR FIRST LEVEL IS WAITING
      </div>

      <h2 className="text-[38px] sm:text-[53px] font-bold tracking-[-2px] leading-[1.1] text-[#172019] my-6">
        You’ve got potential.
        <br />
        Let’s put it <span className="serif text-[#172019]">to play.</span>
      </h2>

      <a
        href="#challenges"
        className="button-primary text-sm sm:text-base py-4 px-7 rounded-[7px] inline-flex items-center gap-6"
      >
        <span>Try a free challenge</span>
        <span className="text-xl">↗</span>
      </a>

      <p className="text-[12px] text-[#62675f] mt-5">
        Early levels free. Advanced play with premium or campus access.
      </p>
    </section>
  );
};
