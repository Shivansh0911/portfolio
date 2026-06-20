import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/data';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

function TimelineDot({ index }) {
  return (
    <motion.div
      className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-2"
      style={{ background: '#915EFF', borderColor: '#050816', boxShadow: '0 0 12px rgba(145,94,255,0.8)' }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 300 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: 'rgba(145,94,255,0.4)' }}
        animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
      />
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative" style={{ background: '#0F0F23' }}>
      <div className="container mx-auto max-w-4xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>02. experience</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-line"
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex items-start gap-4 md:hidden">
                  <div className="mt-1">
                    <TimelineDot index={i} />
                  </div>
                  <motion.div
                    {...reveal}
                    transition={{ ...reveal.transition, delay: i * 0.15 }}
                    className="glass-card p-6 flex-1"
                    style={{ borderLeft: '3px solid #915EFF' }}
                  >
                    <ExpCard exp={exp} />
                  </motion.div>
                </div>

                <div className="hidden md:flex w-full items-start gap-0">
                  <div className={`w-[calc(50%-24px)] ${i % 2 === 0 ? 'pr-12' : 'pl-12 order-2'}`}>
                    <motion.div
                      {...reveal}
                      transition={{ ...reveal.transition, delay: i * 0.15 }}
                      className="glass-card p-6"
                      style={{ borderLeft: i % 2 === 0 ? '3px solid #915EFF' : 'none', borderRight: i % 2 !== 0 ? '3px solid #915EFF' : 'none' }}
                    >
                      <ExpCard exp={exp} />
                    </motion.div>
                  </div>

                  <div className="flex justify-center items-start pt-6 w-12 flex-shrink-0">
                    <TimelineDot index={i} />
                  </div>

                  <div className={`w-[calc(50%-24px)] ${i % 2 !== 0 ? 'pr-12' : 'pl-12'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpCard({ exp }) {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <div>
          <h3 className="font-display font-bold text-lg text-white">{exp.title}</h3>
          <p className="font-semibold text-sm mt-0.5" style={{ color: '#915EFF' }}>
            {exp.company} {exp.flag}
            {exp.location && <span style={{ color: '#AAB4C8' }}> · {exp.location}</span>}
          </p>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs" style={{ color: '#AAB4C8' }}>{exp.period}</span>
          <br />
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{ background: 'rgba(145,94,255,0.15)', color: '#915EFF' }}
          >
            {exp.duration}
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-2 mb-4">
        {exp.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#AAB4C8' }}>
            <span style={{ color: '#915EFF', marginTop: 2 }}>▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
    </>
  );
}
