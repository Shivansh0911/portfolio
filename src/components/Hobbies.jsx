import { motion } from 'framer-motion';
import { HOBBIES } from '../constants/data';

const ICON_CLASSES = {
  '🏏': 'cricket-ball',
  '⚽': 'football-icon',
  '🎾': 'racket-icon',
  '🎬': 'film-icon',
};

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(145,94,255,0.3), transparent)' }}
      />

      <div className="container mx-auto max-w-5xl">
        <motion.div {...reveal} className="mb-4 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>09. hobbies</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Outside the <span className="gradient-text">Terminal</span>
          </h2>
        </motion.div>
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="text-center mb-16 text-sm"
          style={{ color: '#AAB4C8' }}
        >
          The stuff that keeps me human.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HOBBIES.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              className={`glass-card p-8 flex flex-col gap-4 bg-gradient-to-br ${hobby.color}`}
              style={{ borderColor: hobby.border }}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                rotate: 2,
                y: -6,
                boxShadow: `0 20px 50px ${hobby.border}`,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-5xl ${ICON_CLASSES[hobby.icon] || ''}`}
                  style={{ display: 'inline-block' }}
                >
                  {hobby.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">{hobby.title}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: hobby.accent }}>
                    {hobby.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#AAB4C8' }}>{hobby.desc}</p>

              <div className="flex flex-wrap gap-2">
                {hobby.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border font-medium"
                    style={{
                      color: hobby.accent,
                      borderColor: hobby.border,
                      background: `${hobby.accent}15`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
