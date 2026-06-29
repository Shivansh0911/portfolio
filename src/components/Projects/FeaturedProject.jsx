import { motion } from 'framer-motion';

const BADGE_STYLE = {
  live:   { bg: 'rgba(239,68,68,0.1)',   color: '#F87171', border: 'rgba(239,68,68,0.25)' },
  gold:   { bg: 'rgba(245,158,11,0.1)',  color: '#F59E0B', border: 'rgba(245,158,11,0.25)' },
  silver: { bg: 'rgba(148,163,184,0.1)', color: '#94A3B8', border: 'rgba(148,163,184,0.25)' },
};

export default function FeaturedProject({ project, index }) {
  const bs = BADGE_STYLE[project.badgeType] || BADGE_STYLE.silver;
  return (
    <motion.div
      className="card p-7 flex flex-col gap-5 group"
      style={{ borderTop: '2px solid #3B82F6' }}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }}
      whileHover={{ y: -4, borderColor: '#60A5FA', transition: { duration: 0.15 } }}
    >
      <div className="flex items-start justify-between flex-wrap gap-3">
        <span className="text-xs font-mono px-2.5 py-1 rounded-full border"
          style={{ background: bs.bg, color: bs.color, borderColor: bs.border }}>
          {project.badge}
        </span>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="text-xs font-mono transition-colors"
          style={{ color: '#3F3F46' }}
          onMouseEnter={e => e.currentTarget.style.color='#FAFAFA'}
          onMouseLeave={e => e.currentTarget.style.color='#3F3F46'}>
          GitHub ↗
        </a>
      </div>

      <h3 className="font-display font-extrabold text-xl text-white">{project.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{project.description}</p>

      {project.stats && (
        <div className="flex flex-wrap gap-2">
          {project.stats.map(s => (
            <span key={s} className="text-xs font-mono px-2.5 py-1 rounded border"
              style={{ background: 'rgba(52,211,153,0.06)', color: '#34D399', borderColor: 'rgba(52,211,153,0.2)' }}>
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
    </motion.div>
  );
}
