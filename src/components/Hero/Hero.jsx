import { useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import HeroText from './HeroText';

const Hero3D = lazy(() => import('./Hero3D'));

function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(145,94,255,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: -100,
          left: -100,
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: -100,
          right: -100,
        }}
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
    </div>
  );
}

function MobileGradientCanvas() {
  return (
    <div
      className="w-full h-64 rounded-2xl relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(145,94,255,0.2), rgba(0,217,255,0.1))' }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'conic-gradient(from 0deg, #915EFF22, #00D9FF22, #915EFF22)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-extrabold text-8xl gradient-text opacity-30">SSO</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const mousePos = useRef({ x: 0, y: 0 });

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center grid-bg"
      onMouseMove={(e) => { mousePos.current = { x: e.clientX, y: e.clientY }; }}
    >
      <AnimatedGradientBg />

      <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-[60%]">
            <HeroText onScrollToWork={scrollToWork} />
          </div>

          <div className="w-full lg:w-[40%] h-[400px] lg:h-[550px]">
            <div className="hidden sm:block w-full h-full">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full animate-pulse"
                      style={{ background: 'rgba(145,94,255,0.2)' }}
                    />
                  </div>
                }
              >
                <Hero3D mousePos={mousePos} />
              </Suspense>
            </div>
            <div className="sm:hidden w-full h-full flex items-center justify-center">
              <MobileGradientCanvas />
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="text-xs font-mono" style={{ color: '#6B7280' }}>scroll</span>
          <motion.div
            className="w-[1px] h-8"
            style={{ background: 'linear-gradient(180deg, #915EFF, transparent)' }}
            animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
