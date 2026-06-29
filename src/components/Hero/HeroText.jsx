import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_ROLES } from '../../constants/data';

const PHOTO_URL = 'https://i.postimg.cc/fWtRfPKd/Whats-App-Image-2026-06-19-at-20-34-47.jpg';

export function ProfilePhoto({ size = 160 }) {
  const [err, setErr] = useState(false);
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{
        background: 'conic-gradient(from 0deg, #F59E0B, #34D399, #F59E0B)',
        padding: 2, borderRadius: '50%', animation: 'spin-slow 10s linear infinite',
      }}>
        <div className="w-full h-full rounded-full" style={{ background: '#09090B' }} />
      </div>
      <div className="absolute rounded-full overflow-hidden" style={{ inset: 3 }}>
        {!err
          ? <img src={PHOTO_URL} alt="Shivansh" className="w-full h-full object-cover object-top" onError={() => setErr(true)} loading="eager" />
          : <div className="w-full h-full flex items-center justify-center font-display font-extrabold text-white text-3xl" style={{ background: 'linear-gradient(135deg,#F59E0B,#34D399)' }}>SSO</div>
        }
      </div>
    </div>
  );
}

function Scramble() {
  const ref = useRef(null);
  const idx = useRef(0);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    let interval, timeout;
    function run(target) {
      const el = ref.current; if (!el) return;
      let i = 0; clearInterval(interval);
      interval = setInterval(() => {
        el.textContent = target.split('').map((c, j) =>
          j < i ? c : c === ' ' ? ' ' : chars[Math.floor(Math.random()*chars.length)]
        ).join('');
        if (i >= target.length) clearInterval(interval);
        i += 0.5;
      }, 28);
    }
    function cycle() {
      run(HERO_ROLES[idx.current]);
      idx.current = (idx.current + 1) % HERO_ROLES.length;
      timeout = setTimeout(cycle, 2500);
    }
    timeout = setTimeout(cycle, 500);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  return <span ref={ref} className="font-mono" style={{ color: '#FBBF24' }}>{HERO_ROLES[0]}</span>;
}

const nameWords = ['SHIVANSH', 'SHEKHER', 'OJHA'];
const wordVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 32, skewY: 4 },
  show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroText({ onScrollToWork }) {
  return (
    <div className="flex flex-col gap-5 z-10">

      {/* Status pill */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border"
          style={{ borderColor: 'rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.06)', color: '#22C55E' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities
        </span>
      </motion.div>

      {/* Name — one word per line, never wraps mid-word */}
      <motion.div
        className="flex flex-col leading-none tracking-tight"
        variants={wordVariants} initial="hidden" animate="show"
        style={{ overflow: 'hidden' }}
      >
        {nameWords.map((word, i) => (
          <div key={word} style={{ overflow: 'hidden' }}>
            <motion.span
              variants={wordItem}
              className="block font-display font-extrabold text-white whitespace-nowrap"
              style={{
                fontSize: 'clamp(2.4rem, 8.5vw, 5.5rem)',
                lineHeight: 1.0,
                color: i === 1 ? '#FAFAFA' : i === 2 ? '#A1A1AA' : '#FAFAFA',
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </motion.div>

      {/* Role scramble */}
      <motion.div className="text-base md:text-lg h-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}>
        <Scramble />
      </motion.div>

      {/* Bio */}
      <motion.div className="flex flex-col gap-1 text-sm leading-relaxed max-w-lg"
        style={{ color: '#71717A' }}
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }}>
        <p>Building full-stack platforms &amp; ML-powered products.</p>
        <p>
          <span style={{ color: '#FAFAFA' }}>EEE Junior @ BITS Pilani</span>
          <span style={{ color: '#3F3F46' }}> · </span>
          <span style={{ color: '#FBBF24' }}>Software Engineer @ PeopleSense.AI</span>
        </p>
        <p className="text-xs font-mono" style={{ color: '#3F3F46' }}>
          Full Stack · ML · SEEP 2025 Winner · Student Achievement Award
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.35 }}>
        <button onClick={onScrollToWork} className="btn-primary">
          View My Work →
        </button>
        <a href="/Shivansh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
          View Resume ↗
        </a>
      </motion.div>

      {/* Quick stat row */}
      <motion.div className="flex gap-8 pt-1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.4 }}>
        {[['8+','Projects'],['4','Hackathon wins'],['10+','MUN awards']].map(([n, l]) => (
          <div key={l}>
            <p className="font-display font-bold text-xl text-white">{n}</p>
            <p className="text-xs" style={{ color: '#52525B' }}>{l}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
