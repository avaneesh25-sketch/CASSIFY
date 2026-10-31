import React, { useState, useEffect } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

type IntroStage =
  | 'background'      // Background orbit comes first
  | 'door-appear'     // 3D door materializes in the center
  | 'door-open'       // Door swings open with natural 3D hinge
  | 'prof-walk'       // Professor with natural leg stride walks out of the door
  | 'prof-bow'        // Professor halts, bows politely at waist
  | 'abracadabra'     // Raises teaching stick with grip, casts "Abracadabra!"
  | 'launch'          // Screen ripples open and launches the website
  | 'done';

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<IntroStage>('background');
  const [speech, setSpeech] = useState<string>('');
  const [bowAngle, setBowAngle] = useState<number>(0);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    // Stage 1: Door appears (0.9s)
    const t1 = setTimeout(() => {
      setStage('door-appear');
    }, 900);

    // Stage 2: Door opens naturally (2.0s)
    const t2 = setTimeout(() => {
      setStage('door-open');
    }, 2000);

    // Stage 3: Professor walks out (3.2s)
    const t3 = setTimeout(() => {
      setStage('prof-walk');
    }, 3200);

    // Stage 4: Professor stops, bows & speaks (5.6s)
    const t4 = setTimeout(() => {
      setStage('prof-bow');
      setBowAngle(20);
      setSpeech('Greetings, strategist! I am Professor Cass.');
    }, 5600);

    // Stage 5: Professor stands up & continues speech (7.4s)
    const t5 = setTimeout(() => {
      setBowAngle(0);
      setSpeech('Ready to unlock your competitive edge? Watch closely...');
    }, 7400);

    // Stage 6: Abracadabra! (9.0s)
    const t6 = setTimeout(() => {
      setStage('abracadabra');
      setSpeech('ABRACADABRA! ✨ AWAKEN CASSIFY!');

      // Spark particles
      const newSparks = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 380,
        y: (Math.random() - 0.5) * 380,
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

  const isDoorOpen = stage !== 'background' && stage !== 'door-appear';
  const isWalking = stage === 'prof-walk';
  const hasWalkedOut =
    stage === 'prof-walk' ||
    stage === 'prof-bow' ||
    stage === 'abracadabra' ||
    stage === 'launch';
  const isLaunching = stage === 'launch';

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#0c100d] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${
        isLaunching ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* =====================================================================
          1. BACKGROUND: GLOWING ORBIT SYSTEM
          ===================================================================== */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute w-[880px] h-[880px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.22)_0%,_rgba(198,250,88,0.14)_35%,_rgba(12,16,13,0.98)_75%)] animate-glow-pulse" />
        <div className="absolute w-[980px] h-[980px] rounded-full border border-dashed border-white/10 animate-orbit-reverse" />
        <div className="absolute w-[740px] h-[740px] rounded-full border border-[#8b5cf6]/25 animate-orbit">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c6fa58] shadow-[0_0_15px_#c6fa58]" />
        </div>
        <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-[#c6fa58]/30 animate-orbit-reverse" />
        <div className="absolute w-[340px] h-[340px] rounded-full border border-[#c6fa58]/50 animate-orbit-fast" />

        <div className="absolute w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1d261e] to-[#121713] border border-[#c6fa58]/60 shadow-[0_0_40px_rgba(198,250,88,0.5)] flex items-center justify-center backdrop-blur-md opacity-30">
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
          2. THE STAGE: REALISTIC 3D ARCHED DOOR & PROFESSOR WALK OUT
          ===================================================================== */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl h-[520px]">
        {/* Stone Door Portal & 3D Swinging Door */}
        <div
          className={`perspective-door-container relative transition-all duration-700 ease-out ${
            stage === 'background'
              ? 'opacity-0 scale-50 translate-y-10'
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {/* Outer Arched Stone Frame */}
          <div className="w-48 h-72 sm:w-56 sm:h-80 rounded-t-full border-[6px] border-[#2c382e] bg-[#141a15] shadow-[0_0_50px_rgba(198,250,88,0.35),0_0_90px_rgba(139,92,246,0.3)] relative flex items-end justify-center">
            {/* Stone Keystones & Border highlights */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-5 bg-[#3a4a3c] rounded-sm border border-[#c6fa58]/50 flex items-center justify-center">
              <span className="text-[8px] text-[#c6fa58] font-bold">↯</span>
            </div>

            {/* Interior Warm Radiant Light Chamber */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-[#c6fa58] via-[#ffffd0] to-[#ffffff] transition-opacity duration-1000 ${
                isDoorOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Door Leaf (3D Door that swings naturally on its left hinges) */}
            <div
              className={`door-panel absolute inset-0 rounded-t-full bg-gradient-to-r from-[#2a1c12] via-[#3d281a] to-[#24170d] border-r-4 border-t-2 border-[#543823] flex items-center justify-end pr-4 ${
                isDoorOpen ? 'door-open-3d' : 'transform-none'
              }`}
            >
              {/* Wood Grain Insets */}
              <div className="absolute inset-3 border-2 border-[#1a110a] rounded-t-full pointer-events-none opacity-60 flex flex-col justify-around py-6 px-2">
                <div className="h-16 border border-[#523926] rounded-t-full" />
                <div className="h-16 border border-[#523926] rounded-sm" />
                <div className="h-16 border border-[#523926] rounded-sm" />
              </div>

              {/* Polished Brass Door Handle & Escutcheon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-2.5 h-7 rounded-sm bg-gradient-to-b from-[#d4af37] via-[#fff1a8] to-[#997a15] shadow-md border border-[#5c460a]" />
                <div className="w-1.5 h-2 bg-[#2b1f05] rounded-full mt-1" />
              </div>
            </div>

            {/* Spilling Light Floor Mat / Spotlight */}
            <div
              className={`absolute -bottom-6 w-72 h-16 bg-[radial-gradient(ellipse,_rgba(198,250,88,0.55)_0%,_rgba(255,255,200,0.35)_40%,_transparent_75%)] blur-md transition-opacity duration-700 pointer-events-none ${
                isDoorOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            />
          </div>
        </div>

        {/* =====================================================================
            3. DISTINGUISHED PROFESSOR CASS (NATURAL GAIT, TEACHING STICK & TALK BOX)
            ===================================================================== */}
        {hasWalkedOut && (
          <div
            className={`absolute flex items-center justify-center transition-all duration-1000 ease-out ${
              stage === 'prof-walk'
                ? 'translate-y-6 scale-90 opacity-95'
                : 'translate-y-16 scale-110 opacity-100'
            }`}
          >
            {/* The Professor Body Wrapper */}
            <div
              className={`relative w-48 h-72 sm:w-56 sm:h-80 transition-transform duration-500 ease-out ${
                isWalking ? 'animate-distinguished-walk' : ''
              }`}
              style={{
                transform: `rotate(${bowAngle}deg)`,
                transformOrigin: '50% 68%',
              }}
            >
              {/* ===============================================================
                  TALK BOX (SPEECH BUBBLE) POINTING DIRECTLY TO HIS MOUTH!
                  =============================================================== */}
              {speech && (
                <div className="absolute -top-20 -right-40 sm:-right-48 z-50 w-64 sm:w-72 bg-white border-2 border-[#172019] rounded-2xl p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.45)] text-[#172019] animate-in fade-in zoom-in-95 duration-200">
                  {/* Speech Bubble Pointer Tail (aimed directly at Professor's mouth!) */}
                  <div
                    className="absolute -left-3.5 top-9 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent drop-shadow-[-2px_0_0_#172019]"
                    style={{ transform: 'rotate(5deg)' }}
                  />

                  {/* Character Header inside bubble */}
                  <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-[#dce0d5]">
                    <span className="w-2 h-2 rounded-full bg-[#c6fa58] border border-[#172019] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#172019]">
                      Prof. Cass
                    </span>
                  </div>

                  {/* Speech Text */}
                  <p className="text-[13px] sm:text-[14px] leading-snug font-bold text-[#172019]">
                    {speech}
                  </p>
                </div>
              )}

              {/* Full Body SVG */}
              <svg
                viewBox="0 0 120 180"
                className="w-full h-full drop-shadow-[0_18px_32px_rgba(0,0,0,0.7)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Scholar Beret / Graduation Cap */}
                <polygon points="60,8 104,22 60,33 16,22" fill="#172019" />
                <path d="M22,26 C36,12, 84,12, 98,26 C90,32, 30,32, 22,26 Z" fill="#172019" />
                <circle cx="60" cy="20" r="3" fill="#c6fa58" />
                <path d="M60,20 Q80,24 85,36" stroke="#c6fa58" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="85" cy="36" r="3" fill="#c6fa58" />

                {/* 2. Head & Distinguished Facial Features */}
                <ellipse cx="60" cy="45" rx="25" ry="22" fill="#ffd1a4" />

                {/* Distinguished Sideburns & Hair */}
                <path d="M36,36 C34,46 37,56 41,56 C42,48 40,40 38,36 Z" fill="#8c8f8b" />
                <path d="M84,36 C86,46 83,56 79,56 C78,48 80,40 82,36 Z" fill="#8c8f8b" />

                {/* Eyes */}
                {stage === 'prof-bow' ? (
                  <>
                    <path d="M47,40 Q53,33 59,40" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                    <path d="M63,40 Q69,33 75,40" stroke="#172019" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <ellipse cx="53" cy="42" rx="4" ry="5" fill="#172019" />
                    <circle cx="54.5" cy="40.5" r="1.5" fill="white" />
                    <ellipse cx="69" cy="42" rx="4" ry="5" fill="#172019" />
                    <circle cx="70.5" cy="40.5" r="1.5" fill="white" />
                  </>
                )}

                {/* Gold Scholar Spectacles */}
                <rect x="44" y="36" width="16" height="12" rx="4" fill="none" stroke="#bfa034" strokeWidth="2.5" />
                <rect x="62" y="36" width="16" height="12" rx="4" fill="none" stroke="#bfa034" strokeWidth="2.5" />
                <line x1="60" y1="42" x2="62" y2="42" stroke="#bfa034" strokeWidth="2.5" />

                {/* Distinguished Groomed Mustache */}
                <path d="M48,54 C54,51 58,55 60,57 C62,55 66,51 72,54 C74,57 70,60 60,60 C50,60 46,57 48,54 Z" fill="#4d3a2c" />
                {/* Gentle Smile / Mouth */}
                <path d="M53,61 Q60,66 67,61" stroke="#172019" strokeWidth="2" strokeLinecap="round" />

                {/* 3. Distinguished Tailored Attire */}
                {/* Waistcoat & Suit Jacket */}
                <path d="M34,70 C40,63 80,63 86,70 L92,112 L28,112 Z" fill="#172019" />
                {/* Inner Tweed Vest */}
                <polygon points="50,70 70,70 73,108 47,108" fill="#2d382f" />
                {/* Crisp White Shirt Collar */}
                <polygon points="53,65 60,72 47,75" fill="white" />
                <polygon points="67,65 60,72 73,75" fill="white" />
                {/* Lime Silk Tie */}
                <polygon points="60,72 64,90 60,98 56,90" fill="#c6fa58" />
                {/* Gold Albert Pocket Watch Chain */}
                <path d="M54,94 Q60,102 66,94" stroke="#d4af37" strokeWidth="2" fill="none" />
                {/* Brass Vest Buttons */}
                <circle cx="60" cy="85" r="1.5" fill="#d4af37" />
                <circle cx="60" cy="102" r="1.5" fill="#d4af37" />

                {/* 4. Left Arm & Hand */}
                {stage === 'prof-bow' ? (
                  // Respectful Hand placed over heart
                  <>
                    <path d="M34,72 Q44,88 56,84" stroke="#172019" strokeWidth="9" strokeLinecap="round" />
                    <circle cx="56" cy="84" r="4.5" fill="#ffd1a4" />
                  </>
                ) : (
                  // Dignified arm hanging naturally
                  <>
                    <path d="M34,72 Q28,90 34,104" stroke="#172019" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="34" cy="104" r="4.5" fill="#ffd1a4" />
                  </>
                )}

                {/* 5. Right Arm & PROPERLY HELD TEACHING STICK */}
                {stage === 'abracadabra' ? (
                  // Abracadabra: Arm raised high pointing stick to sky
                  <>
                    <path d="M86,72 Q96,56 88,40" stroke="#172019" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="88" cy="40" r="5" fill="#ffd1a4" />
                    {/* Teaching stick held firmly in hand pointing upward */}
                    <g transform="translate(88, 40) rotate(-65)">
                      {/* Mahogany shaft */}
                      <rect x="-3" y="-55" width="6" height="65" rx="3" fill="#4a2e18" stroke="#2b1704" strokeWidth="1" />
                      {/* Brass handle & ferrules */}
                      <rect x="-4" y="0" width="8" height="12" rx="2" fill="#d4af37" />
                      <rect x="-3" y="-50" width="6" height="4" fill="#d4af37" />
                      {/* Golden hand pointer tip */}
                      <circle cx="0" cy="-56" r="6" fill="#c6fa58" stroke="#172019" strokeWidth="2" />
                      <text x="-3" y="-53" fontSize="8" fontWeight="bold" fill="#172019">☞</text>
                      {/* Magic Spark Core */}
                      <circle cx="0" cy="-58" r="8" fill="white" className="animate-ping opacity-80" />
                    </g>
                  </>
                ) : stage === 'prof-bow' ? (
                  // Bowing: Hand holding stick gracefully tilted back
                  <>
                    <path d="M86,72 Q94,88 88,102" stroke="#172019" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="88" cy="102" r="5" fill="#ffd1a4" />
                    {/* Stick tilted back beside him */}
                    <g transform="translate(88, 102) rotate(35)">
                      <rect x="-3" y="-55" width="6" height="65" rx="3" fill="#4a2e18" stroke="#2b1704" strokeWidth="1" />
                      <rect x="-4" y="0" width="8" height="12" rx="2" fill="#d4af37" />
                      <circle cx="0" cy="-56" r="5" fill="#c6fa58" stroke="#172019" strokeWidth="1.5" />
                      <text x="-2.5" y="-53" fontSize="7" fontWeight="bold" fill="#172019">☞</text>
                    </g>
                  </>
                ) : (
                  // Standing / Walking: Holding stick naturally by his side
                  <>
                    <path d="M86,72 Q94,88 88,102" stroke="#172019" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="88" cy="102" r="5" fill="#ffd1a4" />
                    {/* Stick held naturally in hand pointing slightly forward */}
                    <g transform="translate(88, 102) rotate(-15)">
                      {/* Polished mahogany shaft */}
                      <rect x="-3" y="-55" width="6" height="65" rx="3" fill="#4a2e18" stroke="#2b1704" strokeWidth="1" />
                      {/* Brass handle wrapped in hand */}
                      <rect x="-4" y="0" width="8" height="12" rx="2" fill="#d4af37" />
                      {/* Upper ferrule */}
                      <rect x="-3" y="-50" width="6" height="4" fill="#d4af37" />
                      {/* Golden pointer tip */}
                      <circle cx="0" cy="-56" r="5" fill="#c6fa58" stroke="#172019" strokeWidth="1.5" />
                      <text x="-2.5" y="-53" fontSize="7" fontWeight="bold" fill="#172019">☞</text>
                    </g>
                  </>
                )}

                {/* 6. Lower Body: Tailored Trousers & Oxford Brogues */}
                {/* Left Leg (Thigh, Knee, Calf, Polished Shoe) */}
                <g className={isWalking ? 'animate-stride-left' : ''}>
                  {/* Charcoal trouser with press crease */}
                  <path d="M43,112 L41,154 L52,154 L54,112 Z" fill="#222b24" />
                  <line x1="47" y1="114" x2="46" y2="152" stroke="#172019" strokeWidth="1.5" />
                  {/* Oxford leather shoe with brown welt */}
                  <path d="M37,152 C37,148 53,148 53,152 L53,158 C53,161 32,161 32,158 Z" fill="#121212" />
                  <rect x="34" y="157" width="19" height="2.5" rx="1" fill="#8a6820" />
                </g>

                {/* Right Leg (Thigh, Knee, Calf, Polished Shoe) */}
                <g className={isWalking ? 'animate-stride-right' : ''}>
                  {/* Charcoal trouser with press crease */}
                  <path d="M66,112 L68,154 L79,154 L77,112 Z" fill="#222b24" />
                  <line x1="72" y1="114" x2="73" y2="152" stroke="#172019" strokeWidth="1.5" />
                  {/* Oxford leather shoe with brown welt */}
                  <path d="M67,152 C67,148 83,148 83,152 L83,158 C83,161 88,161 88,158 Z" fill="#121212" />
                  <rect x="67" y="157" width="19" height="2.5" rx="1" fill="#8a6820" />
                </g>
              </svg>
            </div>
          </div>
        )}

        {/* =====================================================================
            4. ABRACADABRA CELESTIAL BURST
            ===================================================================== */}
        {stage === 'abracadabra' && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="absolute w-[440px] h-[440px] rounded-full border-4 border-[#c6fa58] animate-ping opacity-85" />
            <div className="absolute w-[720px] h-[720px] rounded-full border-2 border-[#8b5cf6] animate-pulse opacity-75" />

            {sparkles.map((sp) => (
              <div
                key={sp.id}
                className="absolute rounded-full transition-transform duration-700 ease-out"
                style={{
                  width: `${sp.size}px`,
                  height: `${sp.size}px`,
                  backgroundColor: sp.color,
                  boxShadow: `0 0 16px ${sp.color}`,
                  transform: `translate(${sp.x}px, ${sp.y}px)`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Intro Stage Indicator Dots */}
      <div className="relative z-30 mt-4 flex items-center gap-2">
        {['door-appear', 'door-open', 'prof-walk', 'prof-bow', 'abracadabra'].map((st) => (
          <div
            key={st}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              stage === st
                ? 'bg-[#c6fa58] scale-125 shadow-[0_0_8px_#c6fa58]'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
