import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants/data';

const GITHUB = 'https://github.com/ssojha0911';
const LINKEDIN = 'https://www.linkedin.com/in/shivansh-shekher-ojha/';

const GH = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LI = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Navbar({ lenisRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id); }, { threshold: 0.3 });
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o?.disconnect());
  }, []);

  const go = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (!el) return;
    lenisRef?.current
      ? lenisRef.current.scrollTo(el, { offset: -80, duration: 1.2 })
      : el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-16"
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          background: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
      >
        <button onClick={() => go('#')} className="font-display font-extrabold text-xl text-white tracking-tight">
          SSO<span style={{ color: '#3B82F6' }}>.</span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => {
            const id = link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-sm font-medium transition-colors duration-150 relative group"
                style={{ color: active === id ? '#FAFAFA' : '#71717A' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-200"
                  style={{ background: '#3B82F6', width: active === id ? '100%' : '0%' }}
                />
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-200" style={{ background: '#3B82F6' }} />
              </button>
            );
          })}
          <div className="flex items-center gap-3 ml-1 pl-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
            {[{ href: GITHUB, Icon: GH }, { href: LINKEDIN, Icon: LI }].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-150">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          {[0,1,2].map(i => (
            <motion.span key={i} className="block h-px w-5 bg-zinc-400"
              animate={{ rotate: menuOpen ? (i===0?45:i===2?-45:0):0, y: menuOpen?(i===0?6:i===2?-6:0):0, opacity: menuOpen&&i===1?0:1 }}
              transition={{ duration: 0.2 }} />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7"
            style={{ background: 'rgba(9,9,11,0.97)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {NAV_LINKS.map((link, i) => (
              <motion.button key={link.href} onClick={() => go(link.href)}
                className="font-display font-bold text-2xl text-zinc-400 hover:text-white transition-colors"
                initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}>
                {link.label}
              </motion.button>
            ))}
            <div className="flex gap-5 mt-2">
              {[{ href: GITHUB, Icon: GH }, { href: LINKEDIN, Icon: LI }].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
