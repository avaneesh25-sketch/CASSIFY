import React from 'react';

export const Ribbon: React.FC = () => {
  return (
    <section className="border-t border-b border-[#dce0d5] bg-[#f8f9f4]">
      <div className="wrap flex flex-wrap justify-between items-center gap-4 sm:gap-6 py-6 text-[#172019]">
        <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#62675f] max-w-[160px]">
          BUILT FOR YOUR NEXT BIG STAGE
        </span>
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold">
          <span>Case competitions</span>
          <span className="text-[#7c8b68] text-xl">✳</span>
          <span>Consulting clubs</span>
          <span className="text-[#7c8b68] text-xl">✳</span>
          <span>Business classrooms</span>
        </div>
      </div>
    </section>
  );
};
