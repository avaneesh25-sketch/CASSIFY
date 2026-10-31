import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'play'>('default');
  const [visible, setVisible] = useState(false);

  // Position references
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const playBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor for fine pointers (mouse), not touch screens
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check what element is hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const playTrigger = target.closest('[data-cursor="play"], .case-card, .case-link');
      const interactiveTrigger = target.closest('a, button, input, select, textarea, [role="button"], label');

      if (playTrigger) {
        setCursorType('play');
      } else if (interactiveTrigger) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Smooth animation loop for the trailing cursor and violet glow
    const render = () => {
      // Direct positioning for inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp for trailing ring
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.18;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.18;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      if (playBadgeRef.current) {
        playBadgeRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Subtle Violet Trail Glow */}
      <div
        ref={trailRef}
        className={`absolute -top-4 -left-4 rounded-full transition-all duration-200 ease-out will-change-transform ${
          cursorType === 'play'
            ? 'opacity-0 scale-50'
            : cursorType === 'hover'
            ? 'w-10 h-10 -top-5 -left-5 bg-[#c6fa58]/20 border border-[#c6fa58] shadow-[0_0_18px_rgba(139,92,246,0.65),0_0_8px_rgba(198,250,88,0.5)]'
            : 'w-7 h-7 bg-transparent border border-[#8b5cf6]/50 shadow-[0_0_14px_rgba(139,92,246,0.5)]'
        }`}
      />

      {/* Main Lime Dot (hidden during 'play' mode) */}
      <div
        ref={dotRef}
        className={`absolute -top-1 -left-1 w-2 h-2 rounded-full bg-[#c6fa58] shadow-[0_0_6px_#c6fa58] will-change-transform transition-transform duration-100 ${
          cursorType === 'play' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />

      {/* "PLAY" Hover Badge over Case Buttons and Arena Cards */}
      <div
        ref={playBadgeRef}
        className={`absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#c6fa58] text-[#172019] flex items-center justify-center font-extrabold text-[10px] tracking-wider uppercase shadow-[0_0_20px_rgba(198,250,88,0.9),0_0_30px_rgba(139,92,246,0.6)] border border-[#172019]/20 will-change-transform transition-all duration-200 ${
          cursorType === 'play' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        PLAY
      </div>
    </div>
  );
};
