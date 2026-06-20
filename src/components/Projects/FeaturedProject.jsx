import { motion } from 'framer-motion';

export default function FeaturedProject({ project, index }) {
  return (
    <motion.div
      className="glass-card p-8 flex flex-col gap-5 group"
      style={{ borderTop: '3px solid rgba(145,94,255,0.6)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(145,94,255,0.25)' }}
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: project.badge.includes('🏆') ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)',
            color: project.badge.includes('🏆') ? '#F59E0B' : '#EF4444',
            border: `1px solid ${project.badge.includes('🏆') ? 'rgba(245,158,11,0.4)' : 'rgba(239,68,68,0.4)'}`,
          }}
        >
          {project.badge}
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-mono transition-colors"
          style={{ color: '#AAB4C8' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#915EFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#AAB4C8')}
        >
          GitHub ↗
        </a>
      </div>

      <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">{project.title}</h3>

      <p className="text-sm md:text-base leading-relaxed" style={{ color: '#AAB4C8' }}>
        {project.description}
      </p>

      {project.stats && (
        <div className="flex flex-wrap gap-3">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="text-xs font-mono px-3 py-1.5 rounded"
              style={{
                background: 'rgba(0,217,255,0.08)',
                color: '#00D9FF',
                border: '1px solid rgba(0,217,255,0.2)',
              }}
            >
              {stat}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>

      <motion.button
        className="mt-auto flex items-center gap-2 text-sm font-semibold w-fit"
        style={{ color: '#915EFF' }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.15 }}
      >
        <span>→ View Project</span>
      </motion.button>
    </motion.div>
  );
}
