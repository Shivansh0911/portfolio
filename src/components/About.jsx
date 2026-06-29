import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT_STATS, ABOUT_TECH } from '../constants/data';
import { ProfilePhoto } from './Hero/HeroText';

function CountUp({ value, suffix, active }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start; const dur = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(step); else setN(value);
    };
    requestAnimationFrame(step);
  }, [active, value]);
  return <span>{n}{suffix}</span>;
}

const rev = { initial: { opacity: 0, y: 48 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] }, viewport: { once: true, margin: '-80px' } };

export default function About() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6 md:px-12" style={{ background: '#09090B' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-5xl">
        <motion.div {...rev} className="mb-14">
          <p className="section-label mb-2">01 — About</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">
            The person behind the code
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <motion.div {...rev} transition={{ ...rev.transition, delay: 0.05 }} className="flex flex-col items-center gap-8 lg:w-[36%]">
            <div className="hidden md:block">
              <ProfilePhoto size={180} />
            </div>
            <div ref={statsRef} className="grid grid-cols-2 gap-3 w-full">
              {ABOUT_STATS.map((s, i) => (
                <motion.div key={s.label} className="card p-4 text-center"
                  initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                  <p className="font-display font-extrabold text-2xl text-white">
                    <CountUp value={s.value} suffix={s.suffix} active={inView} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#52525B' }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...rev} transition={{ ...rev.transition, delay: 0.1 }} className="flex flex-col gap-5 lg:w-[64%]">
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: '#71717A' }}>
              <p>I'm a B.Tech EEE student at <span className="text-white font-medium">BITS Pilani, Hyderabad Campus</span> — passionate about building scalable full-stack systems and exploring applied ML.</p>
              <p>Currently at <span style={{ color: '#FBBF24' }} className="font-medium">PeopleSense.AI</span>, architecting Glocal — a real-time crowd analytics platform serving enterprise clients and transit agencies across the US. Deployed live at BITSAA Global Meet 2026, for which I received the <span className="text-white">Student Achievement Award</span> from BITS Pilani's Director.</p>
              <p>I've won national hackathons, led web development for ATMOS and TEDx BITS Pilani, and represented ideas on the international MUN stage as both delegate and chair.</p>
              <p>I believe in shipping things that work — and in conversations that spark change.</p>
            </div>

            <div className="mt-2">
              <p className="text-xs font-mono mb-4" style={{ color: '#F59E0B' }}>// Technologies I work with</p>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                {ABOUT_TECH.map((t, i) => (
                  <motion.div key={t} className="flex items-center gap-2 text-xs font-mono" style={{ color: '#71717A' }}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }} viewport={{ once: true }}>
                    <span style={{ color: '#F59E0B' }}>→</span> {t}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
