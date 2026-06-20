import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../constants/data';

const LEVEL_STYLES = {
  gold: { border: 'rgba(245,158,11,0.4)', glow: 'rgba(245,158,11,0.25)', color: '#F59E0B', bg: 'rgba(245,158,11,0.06)' },
  silver: { border: 'rgba(0,217,255,0.3)', glow: 'rgba(0,217,255,0.2)', color: '#00D9FF', bg: 'rgba(0,217,255,0.05)' },
  cert: { border: 'rgba(34,197,94,0.3)', glow: 'rgba(34,197,94,0.2)', color: '#22C55E', bg: 'rgba(34,197,94,0.05)' },
  violet: { border: 'rgba(145,94,255,0.4)', glow: 'rgba(145,94,255,0.25)', color: '#915EFF', bg: 'rgba(145,94,255,0.06)' },
};

function ConfettiBurst({ active }) {
  const colors = ['#F59E0B', '#915EFF', '#00D9FF', '#FF6B35', '#22C55E'];
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: colors[i % colors.length],
            top: '50%',
            left: '50%',
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: Math.cos((i / 8) * Math.PI * 2) * 60,
            y: Math.sin((i / 8) * Math.PI * 2) * 60,
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

function AwardCard({ award, index }) {
  const ref = useRef(null);
  const style = LEVEL_STYLES[award.level];

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 flex flex-col gap-3 relative overflow-hidden hover:-translate-y-1 transition-transform group cursor-default"
      style={{ borderColor: style.border, background: style.bg }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ boxShadow: `0 0 25px ${style.glow}` }}
    >
      <div className="flex items-start gap-3">
        <motion.span
          className="text-3xl flex-shrink-0"
          whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.3 }}
        >
          {award.icon}
        </motion.span>
        <div>
          <h3 className="font-display font-bold text-base text-white leading-tight">{award.title}</h3>
          <p className="text-xs mt-1" style={{ color: style.color }}>{award.issuer}</p>
        </div>
      </div>
      {award.desc && (
        <p className="text-sm leading-relaxed" style={{ color: '#AAB4C8' }}>{award.desc}</p>
      )}
    </motion.div>
  );
}

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <span className="font-mono text-sm" style={{ color: '#F59E0B' }}>07. recognition</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {AWARDS.map((award, i) => (
            <div key={award.title} className="break-inside-avoid mb-5">
              <AwardCard award={award} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
