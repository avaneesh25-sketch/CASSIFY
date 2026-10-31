import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#111613] text-white py-16 sm:py-24 border-b border-[#263128]">
      {/* =========================================================================
          ENTIRE HERO BACKGROUND: ANIMATED ORBITS & COSMIC GLOW
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Deep ambient radial lighting: lime & violet glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.2)_0%,_rgba(198,250,88,0.12)_35%,_rgba(17,22,19,0.98)_75%)]" />

        {/* Ambient violet and lime glow orbs */}
        <div className="absolute w-[680px] h-[680px] rounded-full bg-[#8b5cf6]/15 blur-3xl animate-glow-pulse" />
        <div className="absolute w-[460px] h-[460px] rounded-full bg-[#c6fa58]/15 blur-2xl animate-glow-pulse" />

        {/* Orbit Ring 1 (Extremely large outer orbit - 1050px) */}
        <div className="absolute w-[1050px] h-[1050px] rounded-full border border-dashed border-white/10 animate-orbit-reverse" />

        {/* Orbit Ring 2 (Outer orbit - 820px) with satellite */}
        <div className="absolute w-[820px] h-[820px] rounded-full border border-[#8b5cf6]/20 animate-orbit">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c6fa58] shadow-[0_0_14px_#c6fa58,0_0_25px_#8b5cf6]" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8b5cf6] shadow-[0_0_12px_#8b5cf6]" />
        </div>

        {/* Orbit Ring 3 (Middle orbit - 580px) with dashed ticks */}
        <div className="absolute w-[580px] h-[580px] rounded-full border border-dashed border-[#c6fa58]/25 animate-orbit-reverse">
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c6fa58] shadow-[0_0_10px_#c6fa58]" />
        </div>

        {/* Orbit Ring 4 (Inner orbit - 360px) */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-[#c6fa58]/40 animate-orbit-fast">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c6fa58] shadow-[0_0_10px_#c6fa58]" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
        </div>

        {/* Center Glowing Orbit Core with Cassify Lightning Symbol */}
        <div className="absolute w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1d261e] to-[#121713] border border-[#c6fa58]/60 shadow-[0_0_45px_rgba(198,250,88,0.5),0_0_75px_rgba(139,92,246,0.35)] flex items-center justify-center backdrop-blur-md transition-transform duration-700 hover:scale-110">
          <span className="text-5xl font-extrabold text-[#c6fa58] leading-none drop-shadow-[0_0_18px_rgba(198,250,88,0.95)] select-none">
            ↯
          </span>
        </div>
      </div>

      {/* =========================================================================
          HERO CONTENT CONTAINER (ELEVATED ABOVE THE GLOWING ORBIT BACKGROUND)
          ========================================================================= */}
      <div className="wrap relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        {/* Left Column: Hero Text & Call-to-actions */}
        <div className="hero-copy">
          {/* Top Banner: YOUR NEXT MOVE MATTERS */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-[1.5px] text-[#c2c6bc] mb-6 backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#c6fa58] animate-ping" />
            <span className="font-bold text-white uppercase tracking-[1.5px]">
              YOUR NEXT MOVE MATTERS
            </span>
            <span className="text-[#c6fa58] font-bold">↗</span>
          </div>

          <div className="text-[12px] tracking-[1.65px] font-bold flex items-center gap-2 text-[#c6fa58] mb-3">
            <span className="w-[7px] h-[7px] bg-[#c6fa58] inline-block rounded-xs shadow-[0_0_8px_#c6fa58]"></span>
            BIG IDEAS. HIGHER LEVELS.
          </div>

          <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.04] tracking-[-3px] lg:tracking-[-4px] my-5 font-extrabold text-white drop-shadow-sm">
            Serious skills.
            <br />
            A little <span className="serif text-white">unfair</span>
            <br />
            advantage<span className="text-[#c6fa58]">.</span>
          </h1>

          <p className="max-w-[460px] text-[16px] sm:text-[18px] leading-[1.7] text-[#c2c6bc] mb-8 font-normal">
            Turn case competition prep into your next obsession. Solve business challenges, unlock
            new levels, and become the teammate everyone wants.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-8">
            <a
              href="#challenges"
              className="button-lime py-4 px-7 rounded-[7px] inline-flex items-center gap-6 text-[14px] font-bold shadow-[0_0_24px_rgba(198,250,88,0.4)]"
            >
              <span>Play your first case</span>
              <span className="text-xl leading-none">↗</span>
            </a>
            <a
              href="#journey"
              className="text-[14px] font-semibold text-white/90 hover:text-[#c6fa58] flex items-center gap-2 transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
            >
              <span>Explore the journey</span>
              <span>↓</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[12px] text-[#a4aca0]">
            <span className="border border-white/20 rounded-full w-[25px] h-[25px] grid place-items-center text-[10px] font-bold text-white bg-white/5">
              01
            </span>
            Start free. Build confidence. Raise your game.
          </div>
        </div>

        {/* Right Column: Floating Cockpit Cards with Glassmorphism */}
        <div className="flex flex-col gap-5 relative">
          {/* Top Status Card */}
          <div className="p-5 border border-white/15 bg-[#172019]/75 backdrop-blur-xl rounded-[14px] shadow-[0_16px_36px_rgba(0,0,0,0.4)] card-lift flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#c6fa58]/15 border border-[#c6fa58]/40 text-[#c6fa58] flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(198,250,88,0.3)]">
                ⚡
              </span>
              <div>
                <span className="text-[10px] tracking-[1.5px] uppercase font-bold text-[#c6cbbe] block">
                  COHORT STATUS
                </span>
                <strong className="text-sm text-white font-semibold">
                  Arena Matchmaking Active
                </strong>
              </div>
            </div>
            <span className="text-xs bg-[#c6fa58] text-[#172019] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
              LIVE
            </span>
          </div>

          {/* Main Floating Strategist Glass Card */}
          <div className="p-6 sm:p-7 border border-white/20 bg-[#1c241cdf]/80 backdrop-blur-xl rounded-[16px] text-white shadow-[0_20px_45px_rgba(0,0,0,0.5)] card-lift relative overflow-hidden group">
            {/* Subtle glow edge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c6fa58]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-5">
              <span className="w-[44px] h-[44px] rounded-full grid place-items-center bg-[#c6fa58] text-[#172019] text-[22px] flex-shrink-0 shadow-[0_0_16px_#c6fa58]">
                ✦
              </span>
              <div>
                <small className="block text-[10px] tracking-[1.5px] text-[#c6cbbe] mb-0.5 uppercase font-bold">
                  THE NEXT VERSION OF YOU
                </small>
                <strong className="text-[18px] sm:text-[20px] font-bold text-white">
                  Strategist in the making
                </strong>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b3bdae] leading-relaxed mb-5">
              Analyze market dynamics, stress-test revenue drivers, and craft executive pitches that
              win case judges.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[1.2px] text-[#c2c6bc] font-semibold uppercase">
              <span>LEVEL 01 → LEVEL ∞</span>
              <span className="text-[#c6fa58]">THINK. SOLVE. REPEAT.</span>
            </div>
          </div>

          {/* Quick Challenge Launcher Card */}
          <a
            href="#challenges"
            className="p-4 border border-[#c6fa58]/30 bg-gradient-to-r from-[#172019]/90 to-[#202920]/90 backdrop-blur-md rounded-[12px] flex items-center justify-between card-lift hover:border-[#c6fa58] transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#c6fa58] text-[#172019] flex items-center justify-center font-bold text-xs">
                01
              </span>
              <div>
                <p className="text-xs font-bold text-white group-hover:text-[#c6fa58] transition-colors">
                  Sample Case: The Coffee Shop Conundrum
                </p>
                <span className="text-[10px] text-[#a4aca0]">15 min · Free · +100 XP</span>
              </div>
            </div>
            <span className="text-sm font-bold text-[#c6fa58] group-hover:translate-x-1 transition-transform">
              Play ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
