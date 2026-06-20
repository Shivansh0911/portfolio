import { motion } from 'framer-motion';
import { LEADERSHIP } from '../constants/data';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 md:px-12 relative" style={{ background: '#0F0F23' }}>
      <div className="container mx-auto max-w-5xl">
        <motion.div {...reveal} className="mb-16 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>08. leadership</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Beyond the <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEADERSHIP.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-6 flex gap-4 hover:-translate-y-1 transition-transform group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ boxShadow: '0 0 20px rgba(145,94,255,0.3)' }}
            >
              <motion.span
                className="text-3xl flex-shrink-0 mt-0.5"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.icon}
              </motion.span>
              <div>
                <h3 className="font-display font-bold text-base text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#AAB4C8' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
