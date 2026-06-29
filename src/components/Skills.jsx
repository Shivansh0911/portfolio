import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants/data';

const FILTERS = ['All', 'Frontend', 'Backend', 'ML/AI', 'Design'];
const HIGHLIGHT = new Set(['Frontend', 'ML/AI']);
const TECHNICAL = SKILL_CATEGORIES.filter(g => g.filter !== 'Interpersonal');
const INTERPERSONAL = SKILL_CATEGORIES.find(g => g.filter === 'Interpersonal')?.skills ?? [];

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = TECHNICAL.filter(g => active === 'All' || g.filter === active);

  return (
    <section id="skills" className="py-24 px-6 md:px-12" style={{ background: '#09090B' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-4xl">

        {/* Technical */}
        <motion.div {...rev} className="mb-8">
          <p className="section-label mb-2">05 — Skills</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Technical skills</h2>
        </motion.div>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.05 }} className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className="px-3 py-1 rounded text-xs font-mono transition-all"
              style={{
                background: active===f ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                color: active===f ? '#60A5FA' : '#52525B',
                border: `1px solid ${active===f ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.06)'}`,
              }}>
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} className="flex flex-col gap-8 mb-20">
            {filtered.map((group, gi) => (
              <div key={group.group}>
                <p className="text-xs font-mono mb-3" style={{ color: '#3F3F46' }}>{group.group}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: gi*0.04 + i*0.03 }}
                      className="px-3 py-1.5 rounded text-xs font-medium border cursor-default transition-all"
                      style={{
                        background: HIGHLIGHT.has(group.filter) ? 'rgba(59,130,246,0.06)' : 'rgba(255,255,255,0.03)',
                        color: HIGHLIGHT.has(group.filter) ? '#93C5FD' : '#71717A',
                        borderColor: HIGHLIGHT.has(group.filter) ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.07)',
                      }}
                      whileHover={{ color: '#FAFAFA', borderColor: 'rgba(59,130,246,0.5)', background: 'rgba(59,130,246,0.1)' }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interpersonal */}
        <div className="divider mb-12" />
        <motion.div {...rev} className="mb-8">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Interpersonal skills</h2>
          <p className="text-sm mt-2" style={{ color: '#52525B' }}>Beyond the technical — how I communicate, lead, and collaborate.</p>
        </motion.div>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.05 }} className="flex flex-wrap gap-2">
          {INTERPERSONAL.map((skill, i) => (
            <motion.span key={skill}
              initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }} viewport={{ once: true }}
              className="px-3 py-2 rounded text-sm border cursor-default transition-all"
              style={{ background: 'rgba(255,255,255,0.02)', color: '#71717A', borderColor: 'rgba(255,255,255,0.07)', fontStyle: 'italic' }}
              whileHover={{ color: '#A1A1AA', borderColor: 'rgba(255,255,255,0.15)' }}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
