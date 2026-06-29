import { motion } from 'framer-motion';
import { FEATURED_PROJECTS, PROJECTS } from '../../constants/data';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12" style={{ background: '#0C0C0F' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-5xl">
        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">04 — Projects</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Things I've built</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          Full-stack platforms, ML systems, and real-world tools — all shipped.
        </motion.p>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.08 }} className="mb-14">
          <p className="text-xs font-mono mb-5" style={{ color: '#F59E0B' }}>// Featured</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURED_PROJECTS.map((p, i) => <FeaturedProject key={p.title} project={p} index={i} />)}
          </div>
        </motion.div>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.12 }}>
          <p className="text-xs font-mono mb-5" style={{ color: '#3F3F46' }}>// Other projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
