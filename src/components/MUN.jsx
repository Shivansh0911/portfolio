import { motion } from 'framer-motion';
import { MUN_DELEGATE, MUN_CHAIR } from '../constants/data';

const AWARD_COLOR = {
  best:        { color: '#F59E0B', label: 'Best Delegate'       },
  outstanding: { color: '#60A5FA', label: 'Outstanding Delegate' },
  special:     { color: '#A78BFA', label: 'Special Mention'     },
  honourable:  { color: '#34D399', label: 'Honourable Mention'  },
};

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function MUN() {
  return (
    <section id="mun" className="py-24 px-6 md:px-12" style={{ background: '#09090B' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-4xl">

        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">09 — MUN</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Model United Nations</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          10+ international awards across delegate, chair, and secretariat roles.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Delegate awards */}
          <motion.div {...rev} transition={{ ...rev.transition, delay: 0.08 }} className="flex-1">
            <p className="text-xs font-mono mb-5 uppercase tracking-widest" style={{ color: '#3B82F6' }}>
              // As delegate
            </p>
            <div className="flex flex-col">
              {MUN_DELEGATE.map((award, i) => {
                const s = AWARD_COLOR[award.level] || AWARD_COLOR.honourable;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }} viewport={{ once: true }}
                    className="flex items-start gap-3 py-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                    <div className="min-w-0">
                      <span className="text-xs font-mono" style={{ color: s.color }}>{award.award}</span>
                      <p className="text-sm text-white truncate">{award.conference}</p>
                      <p className="text-xs" style={{ color: '#52525B' }}>
                        {award.committee}{award.country ? ` · ${award.country}` : ''}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Chair & Secretariat */}
          <motion.div {...rev} transition={{ ...rev.transition, delay: 0.1 }} className="lg:w-72 flex-shrink-0">
            <p className="text-xs font-mono mb-5 uppercase tracking-widest" style={{ color: '#3F3F46' }}>
              // As chair & secretariat
            </p>
            <div className="flex flex-col gap-3">
              {MUN_CHAIR.map((chair, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }} viewport={{ once: true }}
                  className="card p-4 flex gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">{chair.icon}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono mb-0.5" style={{ color: '#3B82F6' }}>{chair.role}</p>
                    <p className="text-sm text-white">{chair.conference}</p>
                    {chair.committee && (
                      <p className="text-xs" style={{ color: '#52525B' }}>{chair.committee}</p>
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
