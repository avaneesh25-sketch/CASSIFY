import React, { useState, useEffect } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

type IntroStage =
  | 'background'      // Background orbit comes first
  | 'door-appear'     // Small door materializes in the center
  | 'door-open'       // Door swings open with bright warm light
  | 'prof-walk'       // Professor with full body walks out of the doorway
  | 'prof-bow'        // Professor halts, takes a theatrical bow & introduces himself
  | 'abracadabra'     // Waves teacher's stick, sparks fly, casts "Abracadabra!"
  | 'launch'          // Screen ripples open and launches the website
  | 'done';

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<IntroStage>('background');
  const [subtitle, setSubtitle] = useState<string>('The strategy arena awaits...');
  const [stickAngle, setStickAngle] = useState<number>(-25);
  const [bowAngle, setBowAngle] = useState<number>(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    // Stage 1: Door appears (1.0s)
    const t1 = setTimeout(() => {
      setStage('door-appear');
      setSubtitle('A mysterious door appears in the cosmic arena...');
    }, 1000);

    // Stage 2: Door opens (2.2s)
    const t2 = setTimeout(() => {
      setStage('door-open');
      setSubtitle('The door creaks open with warm radiant light...');
    }, 2200);

    // Stage 3: Professor walks out (3.4s)
    const t3 = setTimeout(() => {
      setStage('prof-walk');
      setSubtitle('Someone is stepping through the doorway...');
    }, 3400);

    // Stage 4: Professor halts & takes a bow (5.8s)
    const t4 = setTimeout(() => {
      setStage('prof-bow');
      setBowAngle(24);
      setSubtitle('“Greetings, future champion! I am Professor Cass.”');
    }, 5800);

    // Stage 5: Professor stands straight & prepares spell (7.6s)
    const t5 = setTimeout(() => {
      setBowAngle(0);
      setSubtitle('“Ready to unlock your competitive edge? Watch closely...”');
    }, 7600);

    // Stage 6: Abracadabra! (9.0s)
    const t6 = setTimeout(() => {
      setStage('abracadabra');
      setStickAngle(-85);
      setSubtitle('“ABRACADABRA! ✨ AWAKEN CASSIFY!”');

      // Spark particles
      const newSparks = Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 360,
        y: (Math.random() - 0.5) * 360,
        size: Math.random() * 8 + 4,
        color: i % 2 === 0 ? '#c6fa58' : '#8b5cf6',
      }));
      setSparkles(newSparks);
    }, 9000);

    // Stage 7: Portal burst & launch (10.6s)
    const t7 = setTimeout(() => {
      setStage('launch');
    }, 10600);

    // Final: Hand off to live website (11.6s)
    const t8 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 11600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('done');
    onComplete();
  };

  if (stage === 'done') return null;

  const isWalking = stage === 'prof-walk';
  const isLaunching = stage === 'launch';

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0b0e0c] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${
        isLaunching ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* =====================================================================
          1. THE BACKGROUND COMES FIRST: COSMIC ORBITS & AURA
          ===================================================================== */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Pulsing deep radial lighting */}
        <div className="absolute w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.22)_0%,_rgba(198,250,88,0.15)_35%,_rgba(11,14,12,0.98)_75%)] animate-glow-pulse" />

        {/* Orbit Rings */}
        <div className="absolute w-[980px] h-[980px] rounded-full border border-dashed border-white/10 animate-orbit-reverse" />
        <div className="absolute w-[740px] h-[740px] rounded-full border border-[#8b5cf6]/25 animate-orbit">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c6fa58] shadow-[0_0_15px_#c6fa58]" />
        </div>
        <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-[#c6fa58]/30 animate-orbit-reverse" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-[#c6fa58]/50 animate-orbit-fast" />

        {/* Center Lightning Logo */}
        <div className="absolute w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1d261e] to-[#121713] border border-[#c6fa58]/60 shadow-[0_0_40px_rgba(198,250,88,0.5)] flex items-center justify-center backdrop-blur-md opacity-35">
          <span className="text-4xl font-extrabold text-[#c6fa58] leading-none select-none">
            ↯
          </span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 text-xs font-bold px-4 py-2 rounded-full border border-white/20 text-[#c2c6bc] hover:text-white hover:border-[#c6fa58] hover:bg-[#c6fa58]/10 transition-all cursor-pointer shadow-lg backdrop-blur-md"
      >
        Skip Intro ⏩
      </button>

      {/* =====================================================================
          2. THE STAGE: DOOR & PROFESSOR WALKING OUT
          ===================================================================== */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[480px]">
        {/* The Small Door */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            stage === 'background'
              ? 'opacity-0 scale-50 translate-y-10'
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {/* Outer glowing door frame */}
          <div className="w-40 h-64 sm:w-48 sm:h-72 rounded-t-full border-4 border-[#c6fa58] bg-[#1a221b] shadow-[0_0_40px_rgba(198,250,88,0.55),0_0_80px_rgba(139,92,246,0.35)] relative overflow-hidden flex items-end justify-center">
            {/* Interior bright golden light poured out when door opens */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#c6fa58] via-[#ffffaa] to-[#ffffff] transition-opacity duration-700 ${
                stage === 'door-appear' ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Door Leaf (Swings open) */}
            <div
              className={`absolute inset-0 origin-left bg-[#2b382d] border-r-2 border-[#c6fa58]/40 transition-transform duration-1000 ease-in-out rounded-t-full flex items-center justify-end pr-3 ${
                stage === 'door-appear'
                  ? 'transform-none'
                  : 'rotate-[-88deg] skew-y-3 brightness-75'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Brass door knob */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#e6c86e] shadow-md border border-[#8a6820]" />
              <div className="absolute inset-2 border border-white/10 rounded-t-full pointer-events-none" />
            </div>

            {/* Ground Light Beam / Mat */}
            <div className="absolute -bottom-3 w-full h-6 bg-[#c6fa58]/50 blur-md" />
          </div>
        </div>

        {/* =====================================================================
            3. FULL-BODY PROFESSOR CASS (WALKS OUT, BOWS, SPELLCASTS)
            ===================================================================== */}
        {(stage === 'prof-walk' ||
          stage === 'prof-bow' ||
          stage === 'abracadabra' ||
          stage === 'launch') && (
          <div
            className={`absolute flex flex-col items-center transition-all duration-1000 ease-out ${
              stage === 'prof-walk'
                ? 'translate-y-8 scale-85 opacity-90'
                : 'translate-y-16 scale-110 opacity-100'
            }`}
          >
            {/* Full-Body Container with Bow and Walk Bob */}
            <div
              className={`relative w-44 h-64 sm:w-52 sm:h-72 transition-transform duration-500 ease-out ${
                isWalking ? 'animate-walk-bob' : ''
              }`}
              style={{
                transform: `rotate(${bowAngle}deg)`,
                transformOrigin: '50% 70%',
              }}
            >
              {/* Teacher's Pointer Stick in Hand */}
              <div
                className="absolute top-16 -left-12 w-36 h-6 origin-bottom-right transition-transform duration-300 ease-out pointer-events-none z-30"
                style={{ transform: `rotate(${stickAngle}deg)` }}
              >
                {/* Stick graphic */}
                <div className="relative w-full h-2.5 bg-gradient-to-r from-[#e6c86e] via-[#8b5a2b] to-[#3a2010] rounded-full shadow-lg border border-[#231205] flex items-center justify-start">
                  {/* Golden hand pointer tip */}
                  <div className="absolute -left-3 -top-1.5 w-6 h-6 bg-[#c6fa58] border-2 border-[#172019] rounded-full shadow-[0_0_15px_#c6fa58] grid place-items-center">
                    <span className="text-[10px] font-black text-[#172019]">☞</span>
                  </div>

                  {/* Abracadabra Magic Spark Core */}
                  {stage === 'abracadabra' && (
                    <div className="absolute -left-7 -top-5 w-14 h-14 bg-white rounded-full blur-xs shadow-[0_0_30px_#c6fa58,0_0_60px_#8b5cf6] animate-ping" />
                  )}
                </div>
              </div>

              {/* Full Body SVG (Head, Torso, Arms, Legs & Shoes) */}
              <svg
                viewBox="0 0 100 150"
                className="w-full h-full drop-shadow-[0_16px_30px_rgba(0,0,0,0.65)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Scholar Cap */}
                <polygon points="50,6 88,18 50,27 12,18" fill="#172019" />
                <path d="M18 22 C30 10, 70 10, 82 22 C75 27, 25 27, 18 22 Z" fill="#172019" />
                {/* Gold tassel */}
                <circle cx="50" cy="16" r="3" fill="#c6fa58" />
                <path d="M50 16 Q68 20 72 30" stroke="#c6fa58" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="72" cy="30" r="3" fill="#c6fa58" />

                {/* 2. Head / Face */}
                <ellipse cx="50" cy="38" rx="23" ry="21" fill="#ffd1a4" />

                {/* Eyes */}
                {stage === 'prof-bow' ? (
                  <>
                    <path d="M38 34 Q43 28 48 34" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                    <path d="M52 34 Q57 28 62 34" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <ellipse cx="43" cy="36" rx="4" ry="5" fill="#172019" />
                    <circle cx="44.5" cy="34.5" r="1.5" fill="white" />
                    <ellipse cx="57" cy="36" rx="4" ry="5" fill="#172019" />
                    <circle cx="58.5" cy="34.5" r="1.5" fill="white" />
                  </>
                )}

                {/* Scholar Glasses */}
                <rect x="34" y="30" width="16" height="12" rx="3" fill="none" stroke="#172019" strokeWidth="2.5" />
                <rect x="50" y="30" width="16" height="12" rx="3" fill="none" stroke="#172019" strokeWidth="2.5" />
                <line x1="48" y1="36" x2="50" y2="36" stroke="#172019" strokeWidth="2.5" />

                {/* Mustache & Smile */}
                <path d="M42 48 Q50 53 58 48" stroke="#172019" strokeWidth="2.5" strokeLinecap="round" fill="#d45b4b" />
                <path d="M40 45 Q46 42 50 46 Q54 42 60 45" stroke="#6b4c35" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* 3. Torso / Tweed Jacket & Lime Tie */}
                <path d="M26 62 C30 54, 70 54, 74 62 L80 95 L20 95 Z" fill="#172019" />
                {/* White Shirt Collar */}
                <polygon points="42,56 50,62 36,64" fill="white" />
                <polygon points="58,56 50,62 64,64" fill="white" />
                {/* Lime Tie */}
                <polygon points="50,60 54,78 50,85 46,78" fill="#c6fa58" />
                {/* Jacket Buttons */}
                <circle cx="50" cy="88" r="2" fill="#c6fa58" />

                {/* 4. Left Arm (Swinging when walking, on chest when bowing) */}
                {stage === 'prof-bow' ? (
                  <path d="M25 64 Q35 78 45 74" stroke="#172019" strokeWidth="8" strokeLinecap="round" />
                ) : (
                  <path d="M25 64 Q20 78 26 88" stroke="#172019" strokeWidth="7" strokeLinecap="round" />
                )}
                {/* Left hand */}
                <circle cx={stage === 'prof-bow' ? 45 : 26} cy={stage === 'prof-bow' ? 74 : 88} r="4" fill="#ffd1a4" />

                {/* 5. Right Arm (Holding stick) */}
                <path d="M75 64 Q82 74 74 84" stroke="#172019" strokeWidth="7" strokeLinecap="round" />
                <circle cx="74" cy="84" r="4" fill="#ffd1a4" />

                {/* 6. Lower Body / Legs & Oxford Shoes */}
                {/* Left Leg */}
                <g className={isWalking ? 'animate-walk-left' : ''}>
                  {/* Charcoal trouser leg */}
                  <rect x="36" y="95" width="11" height="38" rx="5" fill="#242e26" />
                  {/* Left Shoe */}
                  <path d="M33 131 C33 128, 48 128, 48 131 L48 135 C48 137, 28 137, 28 135 Z" fill="#111111" />
                  <rect x="32" y="134" width="16" height="2" fill="#8a6820" />
                </g>

                {/* Right Leg */}
                <g className={isWalking ? 'animate-walk-right' : ''}>
                  {/* Charcoal trouser leg */}
                  <rect x="53" y="95" width="11" height="38" rx="5" fill="#242e26" />
                  {/* Right Shoe */}
                  <path d="M52 131 C52 128, 67 128, 67 131 L67 135 C67 137, 72 137, 72 135 Z" fill="#111111" />
                  <rect x="52" y="134" width="17" height="2" fill="#8a6820" />
                </g>
              </svg>

              {/* Walking dust / light ripples under his shoes when stepping out */}
              {isWalking && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-none">
                  <div className="w-5 h-2 rounded-full bg-[#c6fa58]/40 blur-xs animate-ping" />
                  <div className="w-5 h-2 rounded-full bg-[#8b5cf6]/40 blur-xs animate-ping" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================================
            4. "ABRACADABRA!" MAGICAL BURST PARTICLES & LIGHTNING
            ===================================================================== */}
        {stage === 'abracadabra' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Shockwave circles */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-4 border-[#c6fa58] animate-ping opacity-80" />
            <div className="absolute w-[680px] h-[680px] rounded-full border-2 border-[#8b5cf6] animate-pulse opacity-70" />

            {/* Flying Sparkles */}
            {sparkles.map((sp) => (
              <div
                key={sp.id}
                className="absolute rounded-full transition-transform duration-700 ease-out"
                style={{
                  width: `${sp.size}px`,
                  height: `${sp.size}px`,
                  backgroundColor: sp.color,
                  boxShadow: `0 0 14px ${sp.color}`,
                  transform: `translate(${sp.x}px, ${sp.y}px)`,
                }}
              />
            ))}

            {/* Floating ABRACADABRA Banner */}
            <div className="absolute -top-16 bg-[#c6fa58] text-[#172019] px-7 py-2.5 rounded-full font-black text-2xl tracking-wider shadow-[0_0_35px_#c6fa58] animate-bounce">
              ⚡ ABRACADABRA! ⚡
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          5. NARRATIVE SUBTITLE & DIALOGUE BAR
          ===================================================================== */}
      <div className="relative z-30 mt-8 max-w-lg w-full px-6 text-center">
        <div className="bg-[#172019]/90 border border-white/20 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-[#c6fa58] mb-1">
            CASSIFY PROLOGUE
          </div>
          <p className="text-base sm:text-lg font-bold text-white transition-all duration-300">
            {subtitle}
          </p>
        </div>

        {/* Sequence Progress Bar */}
        <div className="w-52 mx-auto mt-4 bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#c6fa58] to-[#8b5cf6] transition-all duration-700"
            style={{
              width:
                stage === 'background'
                  ? '15%'
                  : stage === 'door-appear'
                  ? '30%'
                  : stage === 'door-open'
                  ? '45%'
                  : stage === 'prof-walk'
                  ? '60%'
                  : stage === 'prof-bow'
                  ? '75%'
                  : stage === 'abracadabra'
                  ? '90%'
                  : '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};
