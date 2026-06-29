import { motion } from 'framer-motion';
import { HOBBIES } from '../constants/data';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6 md:px-12" style={{ background: '#0C0C0F' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-4xl">

        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">08 — Hobbies</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Outside the terminal</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          The stuff that keeps me human.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {HOBBIES.map((hobby, i) => (
            <motion.div key={hobby.title} {...rev} transition={{ ...rev.transition, delay: i * 0.08 }}
              className="card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
              style={{ borderLeft: `2px solid ${hobby.accent}30` }}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{hobby.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-base text-white">{hobby.title}</h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: hobby.accent }}>{hobby.subtitle}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{hobby.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {hobby.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded border font-mono"
                    style={{ color: hobby.accent, borderColor: `${hobby.accent}25`, background: `${hobby.accent}08` }}>
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
