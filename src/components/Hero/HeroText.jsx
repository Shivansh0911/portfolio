import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_ROLES } from '../../constants/data';

const PHOTO_URL = 'https://i.postimg.cc/fWtRfPKd/Whats-App-Image-2026-06-19-at-20-34-47.jpg';

function ProfilePhoto({ size = 160 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #915EFF, #00D9FF, #915EFF)',
          padding: 3,
          borderRadius: '50%',
          animation: 'spin-slow 8s linear infinite',
        }}
      >
        <div className="w-full h-full rounded-full" style={{ background: '#050816' }} />
      </div>
      <div
        className="absolute rounded-full overflow-hidden"
        style={{ inset: 4, boxShadow: '0 0 30px rgba(145,94,255,0.5)' }}
      >
        {!imgError ? (
          <img
            src={PHOTO_URL}
            alt="Shivansh Shekher Ojha"
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
            loading="eager"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-display font-extrabold text-white text-4xl"
            style={{ background: 'linear-gradient(135deg, #915EFF, #00D9FF)' }}
          >
            SSO
          </div>
        )}
      </div>
    </div>
  );
}

function ScrambleText() {
  const ref = useRef(null);
  const roleIdx = useRef(0);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';

  useEffect(() => {
    let interval;
    let timeout;

    function scrambleTo(target) {
      const el = ref.current;
      if (!el) return;
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        el.textContent = target
          .split('')
          .map((c, i) => {
            if (i < iteration) return c;
            return c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        if (iteration >= target.length) clearInterval(interval);
        iteration += 0.5;
      }, 30);
    }

    function cycle() {
      scrambleTo(HERO_ROLES[roleIdx.current]);
      roleIdx.current = (roleIdx.current + 1) % HERO_ROLES.length;
      timeout = setTimeout(cycle, 2500);
    }

    timeout = setTimeout(cycle, 400);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  return (
    <span ref={ref} className="font-mono" style={{ color: '#00D9FF' }}>
      {HERO_ROLES[0]}
    </span>
  );
}

const nameLetters = 'SHIVANSH SHEKHER OJHA'.split('');

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
};
const letterVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function HeroText({ onScrollToWork }) {
  return (
    <div className="flex flex-col gap-5 z-10 relative">

      {/* Pill + photo row */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <ProfilePhoto size={72} />
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
          style={{
            background: 'rgba(145,94,255,0.1)',
            borderColor: 'rgba(145,94,255,0.3)',
            color: '#915EFF',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities
        </span>
      </motion.div>

      {/* Name — letter stagger */}
      <motion.div
        className="font-display font-extrabold leading-[0.9] tracking-tight overflow-hidden"
        style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {nameLetters.map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            className="inline-block"
            style={{ color: letter === ' ' ? 'transparent' : '#FFFFFF', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter === ' ' ? ' ' : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Scramble role */}
      <motion.div
        className="text-xl md:text-2xl h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.3 }}
      >
        <ScrambleText />
      </motion.div>

      {/* Subtext */}
      <motion.div
        className="flex flex-col gap-1 text-base md:text-lg"
        style={{ color: '#AAB4C8', maxWidth: 520 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.45 }}
      >
        <p>Building full-stack platforms &amp; ML-powered products.</p>
        <p>
          <span style={{ color: '#915EFF' }}>EEE Junior @ BITS Pilani</span>
          {' · '}
          <span style={{ color: '#00D9FF' }}>Intern @ PeopleSense.AI</span>
        </p>
        <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
          Full Stack Engineer · ML Engineer · SEEP 2025 Winner
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <button
          onClick={onScrollToWork}
          className="shimmer-btn px-8 py-3 rounded-xl font-semibold text-white text-sm tracking-wide transition-transform hover:scale-105 active:scale-95"
          style={{ boxShadow: '0 0 20px rgba(145,94,255,0.4)' }}
        >
          View My Work →
        </button>
        <a
          href="/Shivansh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl font-semibold text-sm tracking-wide border transition-all hover:scale-105 active:scale-95"
          style={{
            borderColor: 'rgba(145,94,255,0.4)',
            color: '#915EFF',
            background: 'rgba(145,94,255,0.05)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.05)')}
        >
          View Resume ↗
        </a>
      </motion.div>
    </div>
  );
}

export { ProfilePhoto };
