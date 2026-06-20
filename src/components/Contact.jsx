import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfilePhoto } from './Hero/HeroText';

const EMAIL = 'ssojha0911@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/shivansh-shekher-ojha/';
const LINKEDIN_DISPLAY = 'linkedin.com/in/shivansh-shekher-ojha';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, margin: '-100px' },
};

function ContactRow({ icon, label, value, href, copyValue }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue || value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="flex items-center justify-between gap-4 p-5 rounded-xl border transition-all duration-200 group"
      style={{
        borderColor: 'rgba(145,94,255,0.15)',
        background: 'rgba(255,255,255,0.02)',
      }}
      whileHover={{
        x: 4,
        borderColor: 'rgba(145,94,255,0.4)',
        boxShadow: '0 0 20px rgba(145,94,255,0.2)',
        background: 'rgba(145,94,255,0.05)',
      }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <p className="text-xs font-mono mb-0.5" style={{ color: '#6B7280' }}>{label}</p>
          <p className="text-sm font-medium text-white">{value}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {copyValue && (
          <button
            onClick={handleCopy}
            className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all"
            style={{
              color: copied ? '#22C55E' : '#915EFF',
              borderColor: copied ? 'rgba(34,197,94,0.4)' : 'rgba(145,94,255,0.3)',
              background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(145,94,255,0.08)',
            }}
          >
            {copied ? 'Copied! ✓' : 'Copy'}
          </button>
        )}
        {href && (
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all"
            style={{
              color: '#00D9FF',
              borderColor: 'rgba(0,217,255,0.3)',
              background: 'rgba(0,217,255,0.06)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,217,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,217,255,0.06)')}
          >
            Open ↗
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative" style={{ background: '#0F0F23' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(145,94,255,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: -100,
            left: '30%',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            bottom: -50,
            right: '20%',
          }}
        />
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div {...reveal} className="mb-4 text-center">
          <span className="font-mono text-sm" style={{ color: '#915EFF' }}>10. contact</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>
        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="text-center mb-12 text-sm"
          style={{ color: '#AAB4C8' }}
        >
          Open to full-time roles, internships, hackathons, and interesting conversations.
        </motion.p>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.15 }}
          className="flex flex-col items-center mb-10"
        >
          <ProfilePhoto size={140} />
          <h3 className="font-display font-bold text-2xl text-white mt-5">Shivansh Shekher Ojha</h3>
          <p className="text-sm mt-1" style={{ color: '#915EFF' }}>
            EEE Junior · BITS Pilani Hyderabad
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.2 }}
          className="flex flex-col gap-3 mb-10"
        >
          <ContactRow
            icon="📧"
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            copyValue={EMAIL}
          />
          <ContactRow
            icon="🔗"
            label="LinkedIn"
            value={LINKEDIN_DISPLAY}
            href={LINKEDIN_URL}
          />
          <ContactRow
            icon="📍"
            label="Location"
            value="BITS Pilani, Hyderabad Campus · India"
          />
        </motion.div>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/Shivansh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn px-8 py-3 rounded-xl font-semibold text-white text-sm hover:scale-105 transition-transform"
            style={{ boxShadow: '0 0 20px rgba(145,94,255,0.4)' }}
          >
            → View Resume
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-semibold text-sm border hover:scale-105 transition-all"
            style={{
              borderColor: 'rgba(145,94,255,0.4)',
              color: '#915EFF',
              background: 'rgba(145,94,255,0.05)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.05)')}
          >
            → Open LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
