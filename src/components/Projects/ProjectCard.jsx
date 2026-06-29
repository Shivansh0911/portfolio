import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const isWin = project.badge?.includes('🏆') || project.badge?.includes('🥇');
  return (
    <motion.div className="card p-5 flex flex-col gap-3.5 h-full group"
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.45 }} viewport={{ once: true }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}>

      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1.5">
          {project.badge && (
            <span className="text-xs font-mono px-2 py-0.5 rounded w-fit border"
              style={{
                background: isWin ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.04)',
                color: isWin ? '#F59E0B' : '#71717A',
                borderColor: isWin ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)',
              }}>
              {project.badge}
            </span>
          )}
          <h3 className="font-display font-bold text-sm text-white leading-snug">{project.title}</h3>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="text-xs font-mono px-2 py-1 rounded border transition-colors"
              style={{ color: '#34D399', borderColor: 'rgba(52,211,153,0.2)', background: 'rgba(52,211,153,0.05)' }}>
              Live ↗
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono px-2 py-1 rounded border transition-colors"
            style={{ color: '#52525B', borderColor: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => e.currentTarget.style.color='#A1A1AA'}
            onMouseLeave={e => e.currentTarget.style.color='#52525B'}>
            GH ↗
          </a>
        </div>
      </div>

      <p className="text-xs leading-relaxed flex-1" style={{ color: '#71717A' }}>{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
      </div>

      {project.date && <p className="text-xs font-mono" style={{ color: '#3F3F46' }}>{project.date}</p>}
    </motion.div>
  );
}
