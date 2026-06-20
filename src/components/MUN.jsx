import { motion } from 'framer-motion';
import { MUN_DELEGATE, MUN_CHAIR } from '../constants/data';

const AWARD_COLOR = {
  best: { color: '#F59E0B', icon: '🏆' },
  outstanding: { color: '#915EFF', icon: '🏅' },
  special: { color: '#00D9FF', icon: '🥈' },
  honourable: { color: '#6EE7B7', icon: '🎖' },
};

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-80px' },
};

export default function MUN() {
  return (
    <section
      id="mun"
      className="py-20 px-6 md:px-12 relative"
      style={{ background: '#0A0A1A' }}
    >
      <div className="container mx-auto max-w-4xl">

        <motion.div {...reveal} className="mb-10">
          <span className="font-mono text-xs" style={{ color: '#4B9CD3' }}>model united nations</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl mt-1 text-white">
            MUN — Awards &amp; Roles
          </h2>
          <p className="text-xs mt-1" style={{ color: '#6B7280' }}>
            10+ international awards across delegate, chair, and secretariat positions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Delegate awards — compact list */}
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.05 }} className="flex-1">
            <p className="text-xs font-mono mb-4 uppercase tracking-widest" style={{ color: '#4B9CD3' }}>
              As Delegate
            </p>
            <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(145,94,255,0.08)' }}>
              {MUN_DELEGATE.map((award, i) => {
                const s = AWARD_COLOR[award.level];
                return (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 py-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">{s.icon}</span>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold" style={{ color: s.color }}>
                        {award.award}
                      </span>
                      <p className="text-sm text-white truncate">{award.conference}</p>
                      <p className="text-xs" style={{ color: '#6B7280' }}>
                        {award.committee}{award.country ? ` · ${award.country}` : ''}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Chair roles — compact list */}
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="lg:w-72 flex-shrink-0">
            <p className="text-xs font-mono mb-4 uppercase tracking-widest" style={{ color: '#915EFF' }}>
              As Chair &amp; Secretariat
            </p>
            <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(145,94,255,0.08)' }}>
              {MUN_CHAIR.map((chair, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 py-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{chair.icon}</span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold" style={{ color: '#915EFF' }}>
                      {chair.role}
                    </span>
                    <p className="text-sm text-white">{chair.conference}</p>
                    {chair.committee && (
                      <p className="text-xs" style={{ color: '#6B7280' }}>{chair.committee}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
