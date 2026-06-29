import { motion } from 'framer-motion';
import { AWARDS } from '../constants/data';

const LEVEL = {
  gold:   { color: '#F59E0B', bg: 'rgba(245,158,11,0.07)',  border: 'rgba(245,158,11,0.18)'  },
  silver: { color: '#94A3B8', bg: 'rgba(148,163,184,0.05)', border: 'rgba(148,163,184,0.14)' },
  cert:   { color: '#22C55E', bg: 'rgba(34,197,94,0.06)',   border: 'rgba(34,197,94,0.14)'   },
  violet: { color: '#A78BFA', bg: 'rgba(167,139,250,0.05)', border: 'rgba(167,139,250,0.14)' },
};

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 md:px-12" style={{ background: '#0C0C0F' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-4xl">

        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">06 — Recognition</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Awards & achievements</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          Hackathons, competitions, and institutional recognition.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS.map((a, i) => {
            const s = LEVEL[a.level] || LEVEL.cert;
            return (
              <motion.div key={a.title} {...rev} transition={{ ...rev.transition, delay: i * 0.06 }}
                className="card p-5 flex gap-4 hover:-translate-y-0.5 transition-transform">
                <span className="text-2xl flex-shrink-0 mt-0.5">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-sm text-white leading-snug mb-1">{a.title}</h3>
                  <p className="text-xs font-mono mb-1" style={{ color: s.color }}>{a.issuer}</p>
                  {a.desc && <p className="text-xs leading-relaxed" style={{ color: '#52525B' }}>{a.desc}</p>}
                  {a.date && <p className="text-xs mt-2 font-mono" style={{ color: '#3F3F46' }}>{a.date}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
