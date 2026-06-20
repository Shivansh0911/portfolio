import { motion } from 'framer-motion';
import { EDUCATION } from '../constants/data';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-3xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>03. education</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-[2px] timeline-line"
          />

          <div className="flex flex-col gap-8 pl-16">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.institution}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.12 }}
                className="relative"
              >
                <div
                  className="absolute -left-[46px] top-4 w-4 h-4 rounded-full border-2 z-10"
                  style={{ background: '#915EFF', borderColor: '#050816', boxShadow: '0 0 10px rgba(145,94,255,0.6)' }}
                />

                <div
                  className="glass-card p-6 hover:-translate-y-1 transition-transform"
                  style={{ borderLeft: '3px solid rgba(145,94,255,0.5)' }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{edu.icon}</span>
                        <h3 className="font-display font-bold text-lg text-white">{edu.institution}</h3>
                      </div>
                      <p className="text-sm" style={{ color: '#AAB4C8' }}>{edu.degree}</p>
                    </div>
                    <span className="font-mono text-xs mt-1" style={{ color: '#915EFF' }}>{edu.period}</span>
                  </div>

                  {edu.note && (
                    <p className="mt-3 text-sm font-mono" style={{ color: '#00D9FF' }}>{edu.note}</p>
                  )}
                  {edu.highlight && (
                    <p className="mt-2 text-sm" style={{ color: '#F59E0B' }}>{edu.highlight}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
