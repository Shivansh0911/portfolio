import { useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import HeroText from './HeroText';

const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero() {
  const mousePos = useRef({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: '#09090B' }}
      onMouseMove={(e) => { mousePos.current = { x: e.clientX, y: e.clientY }; }}
    >
      {/* Subtle radial glow — very restrained */}
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

          <div className="w-full lg:w-[58%]">
            <HeroText onScrollToWork={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>

          <div className="w-full lg:w-[42%] h-[380px] lg:h-[520px]">
            <div className="hidden sm:block w-full h-full">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-amber-500/20 animate-pulse" style={{ background: 'rgba(245,158,11,0.05)' }} />
                </div>
              }>
                <Hero3D mousePos={mousePos} />
              </Suspense>
            </div>
            <div className="sm:hidden w-full h-48 rounded-2xl border flex items-center justify-center"
              style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(245,158,11,0.04)' }}>
              <span className="font-display font-extrabold text-6xl" style={{ color: 'rgba(245,158,11,0.2)' }}>SSO</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.4 }}>
          <span className="text-xs font-mono" style={{ color: '#3F3F46' }}>scroll</span>
          <motion.div className="w-px h-8" style={{ background: 'linear-gradient(180deg, #F59E0B, transparent)' }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </div>
    </section>
  );
}
