import { motion } from 'framer-motion';
import { LEADERSHIP } from '../constants/data';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 md:px-12" style={{ background: '#09090B' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-4xl">

        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">07 — Leadership</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Beyond the code</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          Clubs, fests, and communities I help build and run.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEADERSHIP.map((item, i) => (
            <motion.div key={item.title} {...rev} transition={{ ...rev.transition, delay: i * 0.07 }}
              className="card p-5 flex gap-4 hover:-translate-y-0.5 transition-transform">
              <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <h3 className="font-display font-bold text-sm text-white mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#71717A' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
