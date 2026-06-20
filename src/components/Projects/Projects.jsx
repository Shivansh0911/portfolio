import { motion } from 'framer-motion';
import { FEATURED_PROJECTS, PROJECTS } from '../../constants/data';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative" style={{ background: '#0F0F23' }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div {...reveal} className="mb-4 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>04. projects</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="text-center mb-16 text-sm"
          style={{ color: '#AAB4C8' }}
        >
          Full-stack platforms, ML systems, and real-world tools — all shipped.
        </motion.p>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.15 }}
          className="mb-4"
        >
          <p className="text-xs font-mono mb-6" style={{ color: '#915EFF' }}>
            ★ Featured Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FEATURED_PROJECTS.map((proj, i) => (
              <FeaturedProject key={proj.title} project={proj} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
          <p className="text-xs font-mono mb-6" style={{ color: '#AAB4C8' }}>
            Other Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((proj, i) => (
              <ProjectCard key={proj.title} project={proj} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
