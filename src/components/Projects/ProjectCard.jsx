import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col gap-4 group h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          {project.badge && (
            <span
              className="inline-block text-xs font-semibold px-2 py-0.5 rounded w-fit"
              style={{
                background: project.badge.includes('🏆') || project.badge.includes('🥇')
                  ? 'rgba(245,158,11,0.15)'
                  : 'rgba(145,94,255,0.15)',
                color: project.badge.includes('🏆') || project.badge.includes('🥇')
                  ? '#F59E0B'
                  : '#915EFF',
                border: `1px solid ${project.badge.includes('🏆') || project.badge.includes('🥇') ? 'rgba(245,158,11,0.3)' : 'rgba(145,94,255,0.3)'}`,
              }}
            >
              {project.badge}
            </span>
          )}
          <h3 className="font-display font-bold text-base text-white leading-tight">{project.title}</h3>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-2 py-1 rounded transition-colors"
              style={{ color: '#00D9FF', border: '1px solid rgba(0,217,255,0.3)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,217,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Live ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-2 py-1 rounded transition-colors"
            style={{ color: '#AAB4C8', border: '1px solid rgba(145,94,255,0.2)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: '#AAB4C8' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
