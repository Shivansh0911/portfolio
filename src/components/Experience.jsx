import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants/data';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12" style={{ background: '#0C0C0F' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-3xl">
        <motion.div {...rev} className="mb-14">
          <p className="section-label mb-2">02 — Experience</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Where I've worked</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={exp.company} {...rev} transition={{ ...rev.transition, delay: i * 0.1 }}>
              <div className="card-accent p-6 md:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">{exp.title}</h3>
                    <p className="text-sm mt-0.5" style={{ color: '#60A5FA' }}>
                      {exp.company} {exp.flag}
                      {exp.location && <span style={{ color: '#3F3F46' }}> · {exp.location}</span>}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="font-mono text-xs" style={{ color: '#52525B' }}>{exp.period}</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA' }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: '#71717A' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
