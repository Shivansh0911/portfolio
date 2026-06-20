import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT_STATS, ABOUT_TECH } from '../constants/data';
import { ProfilePhoto } from './Hero/HeroText';

function CountUp({ value, suffix, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };
    requestAnimationFrame(step);
  }, [active, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(145,94,255,0.3), transparent)' }}
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>01. about</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="flex flex-col items-center gap-8 lg:w-[40%]">
            <div className="hidden md:block">
              <ProfilePhoto size={200} />
            </div>

            <div ref={statsRef} className="grid grid-cols-2 gap-4 w-full">
              {ABOUT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-5 text-center hover:-translate-y-1 transition-transform"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="font-display font-extrabold text-3xl mb-1"
                    style={{ color: '#915EFF' }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} active={statsInView} />
                  </div>
                  <div className="text-sm" style={{ color: '#AAB4C8' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.2 }}
            className="flex flex-col gap-6 lg:w-[60%]"
          >
            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: '#AAB4C8' }}>
              <p>
                I'm a B.Tech EEE student at <span style={{ color: '#915EFF' }}>BITS Pilani, Hyderabad Campus</span> — passionate about
                building scalable full-stack systems, exploring AI/ML, and representing ideas
                on the international stage through Model United Nations.
              </p>
              <p>
                Currently at <span style={{ color: '#00D9FF' }}>PeopleSense.AI</span>, architecting Glocal — a real-time crowd analytics
                platform serving transit agencies across the US. I've led web development for
                ATMOS, TEDx BITS Pilani Hyderabad, and our Mental Health Support Group.
              </p>
              <p>
                Beyond code, I've chaired international MUN conferences, won national hackathons,
                and received the <span style={{ color: '#F59E0B' }}>Student Achievement Award</span> directly from BITS Pilani's Director.
              </p>
              <p>I believe in shipping things that work — and in conversations that spark change.</p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-mono mb-4" style={{ color: '#915EFF' }}>
                Technologies I work with:
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {ABOUT_TECH.map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#AAB4C8' }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span style={{ color: '#915EFF' }}>▸</span>
                    <span className="font-mono text-xs">{tech}</span>
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
