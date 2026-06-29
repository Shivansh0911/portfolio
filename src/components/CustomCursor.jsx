import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    xTo.current = gsap.quickTo(ring, 'x', { duration: 0.15, ease: 'power3.out' });
    yTo.current = gsap.quickTo(ring, 'y', { duration: 0.15, ease: 'power3.out' });

    const move = (e) => {
      xTo.current(e.clientX); yTo.current(e.clientY);
      gsap.set(dot, { x: e.clientX, y: e.clientY });
    };
    const over = (e) => { if (e.target.closest('a,button,[data-hover]')) setHovered(true); };
    const out  = (e) => { if (e.target.closest('a,button,[data-hover]')) setHovered(false); };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="fixed pointer-events-none z-[9999]" style={{
        width: hovered ? 48 : 32, height: hovered ? 48 : 32, borderRadius: '50%',
        border: '1px solid rgba(245,158,11,0.7)',
        background: hovered ? 'rgba(245,158,11,0.1)' : 'transparent',
        transform: 'translate(-50%,-50%)', top: 0, left: 0,
        transition: 'width 0.15s,height 0.15s,background 0.15s',
      }} />
      <div ref={dotRef} className="fixed pointer-events-none z-[9999]" style={{
        width: 4, height: 4, borderRadius: '50%', background: '#F59E0B',
        transform: 'translate(-50%,-50%)', top: 0, left: 0,
      }} />
    </>
  );
}
