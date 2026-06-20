import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    xTo.current = gsap.quickTo(ring, 'x', { duration: 0.15, ease: 'power3.out' });
    yTo.current = gsap.quickTo(ring, 'y', { duration: 0.15, ease: 'power3.out' });

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      xTo.current(e.clientX);
      yTo.current(e.clientY);
      gsap.set(dot, { x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]');
      if (target) setIsHovered(true);
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]');
      if (target) setIsHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: isHovered ? 60 : 40,
          height: isHovered ? 60 : 40,
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? 'rgba(145,94,255,0.8)' : 'rgba(145,94,255,0.6)'}`,
          background: isHovered ? 'rgba(145,94,255,0.12)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease',
          top: 0,
          left: 0,
          mixBlendMode: 'normal',
        }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#915EFF',
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
