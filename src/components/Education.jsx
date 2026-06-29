import { motion } from 'framer-motion';
import { EDUCATION } from '../constants/data';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12" style={{ background: '#09090B' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-3xl">
        <motion.div {...rev} className="mb-14">
          <p className="section-label mb-2">03 — Education</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Academic background</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {EDUCATION.map((e, i) => (
            <motion.div key={e.institution} {...rev} transition={{ ...rev.transition, delay: i * 0.08 }}
              className="card p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-transform">
              <span className="text-2xl mt-0.5 flex-shrink-0">{e.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="font-display font-bold text-sm text-white">{e.institution}</h3>
                  <span className="font-mono text-xs flex-shrink-0" style={{ color: '#52525B' }}>{e.period}</span>
                </div>
                <p className="text-xs mt-1" style={{ color: '#71717A' }}>{e.degree}</p>
                {e.note && <p className="text-xs mt-1 font-mono" style={{ color: '#FBBF24' }}>{e.note}</p>}
                {e.highlight && <p className="text-xs mt-1" style={{ color: '#F59E0B' }}>{e.highlight}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
