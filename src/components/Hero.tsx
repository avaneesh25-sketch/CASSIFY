import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="wrap py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[1.06fr_1fr] gap-8 lg:gap-11 items-center relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#c6fa58]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Copy */}
      <div className="hero-copy">
        <div className="text-[12px] tracking-[1.65px] font-bold flex items-center gap-2 text-[#172019]">
          <span className="w-[7px] h-[7px] bg-[#78a831] inline-block rounded-xs shadow-[0_0_8px_#c6fa58]"></span>
          BIG IDEAS. HIGHER LEVELS.
        </div>

        <h1 className="text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.06] tracking-[-3px] lg:tracking-[-4px] my-6 font-extrabold text-[#172019]">
          Serious skills.
          <br />
          A little <span className="serif text-[#172019]">unfair</span>
          <br />
          advantage<span className="text-[#81a536]">.</span>
        </h1>

        <p className="max-w-[440px] text-[16px] sm:text-[17px] leading-[1.7] text-[#62675f] mb-8">
          Turn case competition prep into your next obsession. Solve business challenges, unlock
          new levels, and become the teammate everyone wants.
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-8">
          <a
            href="#challenges"
            className="button-primary py-4 px-6 rounded-[7px] inline-flex items-center gap-6 text-[14px] font-semibold"
          >
            <span>Play your first case</span>
            <span className="text-xl leading-none">↗</span>
          </a>
          <a
            href="#journey"
            className="text-[14px] font-semibold text-[#172019] hover:text-[#668822] flex items-center gap-2 transition-colors"
          >
            <span>Explore the journey</span>
            <span>↓</span>
          </a>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-[#62675f]">
          <span className="border border-[#bdc4b3] rounded-full w-[25px] h-[25px] grid place-items-center text-[10px] font-semibold text-[#172019] bg-white">
            01
          </span>
          Start free. Build confidence. Raise your game.
        </div>
      </div>

      {/* Dark Glowing Hero Art with Animated Orbit Rings */}
      <div className="h-[440px] sm:h-[480px] lg:h-[510px] rounded-[16px] bg-[#111613] text-white relative overflow-hidden flex flex-col justify-between shadow-[0_24px_50px_rgba(17,22,19,0.35)] border border-[#263128] group">
        {/* Deep ambient glow layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.18)_0%,_rgba(198,250,88,0.12)_35%,_rgba(17,22,19,0.95)_75%)] pointer-events-none" />

        {/* Top Header inside card */}
        <div className="relative z-10 flex justify-between items-center p-6 text-[10px] tracking-[1.5px] text-[#c2c6bc] border-b border-white/10 backdrop-blur-xs">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6fa58] animate-ping" />
            YOUR NEXT MOVE MATTERS
          </span>
          <span className="text-[#c6fa58] text-xl font-bold">↗</span>
        </div>

        {/* Center Stage: Glowing Cassify Symbol & Animated Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Pulsing Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#8b5cf6]/15 blur-2xl animate-glow-pulse" />
          <div className="absolute w-48 h-48 rounded-full bg-[#c6fa58]/20 blur-xl animate-glow-pulse" />

          {/* Outer Orbit Ring (300px) */}
          <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-white/10 animate-orbit-reverse" />

          {/* Middle Orbit Ring (220px) with Orbiting Satellite Node */}
          <div className="absolute w-[215px] h-[215px] rounded-full border border-[#8b5cf6]/30 animate-orbit">
            {/* Orbiting Satellite Node */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c6fa58] shadow-[0_0_10px_#c6fa58,0_0_20px_#8b5cf6]" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
          </div>

          {/* Inner Orbit Ring (140px) */}
          <div className="absolute w-[138px] h-[138px] rounded-full border border-[#c6fa58]/35 animate-orbit-fast" />

          {/* Glowing Center Core with Cassify Symbol */}
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1d261e] to-[#121713] border border-[#c6fa58]/50 shadow-[0_0_35px_rgba(198,250,88,0.4),0_0_50px_rgba(139,92,246,0.25)] flex items-center justify-center backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <span className="text-4xl font-extrabold text-[#c6fa58] leading-none drop-shadow-[0_0_12px_rgba(198,250,88,0.9)] select-none">
              ↯
            </span>
          </div>
        </div>

        {/* Floating Glassmorphism Card */}
        <div className="relative z-10 mx-6 mb-16 flex items-center gap-3.5 p-4 border border-white/20 bg-[#1c241cdf]/80 backdrop-blur-md rounded-[12px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] card-lift">
          <span className="w-[38px] h-[38px] rounded-full grid place-items-center bg-[#c6fa58] text-[#172019] text-[20px] flex-shrink-0 shadow-[0_0_12px_#c6fa58]">
            ✦
          </span>
          <div>
            <small className="block text-[9px] tracking-[1.5px] text-[#c6cbbe] mb-0.5 uppercase font-medium">
              THE NEXT VERSION OF YOU
            </small>
            <strong className="text-[16px] font-bold">Strategist in the making</strong>
          </div>
        </div>

        {/* Bottom Footer inside card */}
        <div className="relative z-10 flex justify-between items-center p-6 text-[10px] tracking-[1.5px] text-[#c2c6bc] border-t border-white/10 backdrop-blur-xs">
          <span>LEVEL 01 → LEVEL ∞</span>
          <span>THINK. SOLVE. REPEAT.</span>
        </div>
      </div>
    </section>
  );
};
