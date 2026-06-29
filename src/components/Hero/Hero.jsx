import { useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import HeroText, { ProfilePhoto } from './HeroText';

const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero() {
  const mousePos = useRef({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: '#09090B' }}
      onMouseMove={(e) => { mousePos.current = { x: e.clientX, y: e.clientY }; }}
    >
      {/* Subtle radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-20%', right: '10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '5%',
          width: 350, height: 350,
          background: 'radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left — text */}
          <div className="w-full lg:w-[58%]">
            <HeroText onScrollToWork={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>

          {/* Right — 3D on desktop/tablet, photo card on mobile */}
          <div className="w-full lg:w-[42%]">

            {/* Desktop/tablet — 3D canvas */}
            <div className="hidden sm:block w-full h-[380px] lg:h-[520px]">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-amber-500/20 animate-pulse"
                    style={{ background: 'rgba(245,158,11,0.05)' }} />
                </div>
              }>
                <Hero3D mousePos={mousePos} />
              </Suspense>
            </div>

            {/* Mobile — profile photo + quick bio card */}
            <motion.div className="sm:hidden flex flex-col items-center gap-6 py-4"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>

              <ProfilePhoto size={140} />

              {/* Stats row */}
              <div className="flex gap-6 w-full justify-center">
                {[['8+', 'Projects'], ['4', 'Hackathon wins'], ['10+', 'MUN awards']].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <p className="font-display font-bold text-xl text-white">{n}</p>
                    <p className="text-xs" style={{ color: '#52525B' }}>{l}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'ML / AI'].map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <motion.div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.4 }}>
          <span className="text-xs font-mono" style={{ color: '#3F3F46' }}>scroll</span>
          <motion.div className="w-px h-8" style={{ background: 'linear-gradient(180deg, #F59E0B, transparent)' }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
}
