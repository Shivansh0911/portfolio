import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants/data';

const FILTERS = ['All', 'Frontend', 'Backend', 'ML/AI', 'Design', 'DevOps'];

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

const HIGHLIGHT = new Set(['Frontend', 'ML/AI']);

const TECHNICAL_CATEGORIES = SKILL_CATEGORIES.filter((g) => g.filter !== 'Interpersonal');
const INTERPERSONAL_SKILLS = SKILL_CATEGORIES.find((g) => g.filter === 'Interpersonal')?.skills ?? [];

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = TECHNICAL_CATEGORIES.filter(
    (g) => active === 'All' || g.filter === active
  );

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Technical Skills */}
        <motion.div {...reveal} className="mb-8 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>05. skills</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === f ? 'rgba(145,94,255,0.2)' : 'rgba(255,255,255,0.03)',
                color: active === f ? '#915EFF' : '#AAB4C8',
                border: `1px solid ${active === f ? 'rgba(145,94,255,0.5)' : 'rgba(145,94,255,0.1)'}`,
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10 mb-24"
          >
            {filtered.map((group, gi) => {
              const isHighlight = HIGHLIGHT.has(group.filter);

              return (
                <div key={group.group}>
                  <p className="text-xs font-mono mb-4" style={{ color: '#915EFF' }}>
                    {group.group}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: gi * 0.05 + i * 0.04 }}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 cursor-default"
                        style={{
                          background: isHighlight
                            ? 'rgba(145,94,255,0.12)'
                            : 'rgba(255,255,255,0.04)',
                          color: isHighlight ? '#C4B5FD' : '#AAB4C8',
                          borderColor: isHighlight
                            ? 'rgba(145,94,255,0.35)'
                            : 'rgba(145,94,255,0.12)',
                        }}
                        whileHover={{
                          scale: 1.05,
                          background: 'rgba(145,94,255,0.2)',
                          borderColor: 'rgba(145,94,255,0.5)',
                          color: '#fff',
                          boxShadow: '0 0 12px rgba(145,94,255,0.3)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Interpersonal Skills — separate heading */}
        <div
          className="w-full h-[1px] mb-16"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(145,94,255,0.2), transparent)' }}
        />

        <motion.div {...reveal} className="mb-10 text-center">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl">
            Interpersonal <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#AAB4C8' }}>
            Beyond the technical — how I communicate, collaborate, and lead.
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {INTERPERSONAL_SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-xl text-sm font-medium border cursor-default transition-all duration-200"
              style={{
                background: 'rgba(145,94,255,0.07)',
                color: '#C4B5FD',
                borderColor: 'rgba(145,94,255,0.2)',
                fontStyle: 'italic',
              }}
              whileHover={{
                scale: 1.06,
                background: 'rgba(145,94,255,0.18)',
                borderColor: 'rgba(145,94,255,0.5)',
                color: '#fff',
                boxShadow: '0 0 14px rgba(145,94,255,0.3)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
