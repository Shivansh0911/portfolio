import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfilePhoto } from './Hero/HeroText';

const EMAIL = 'ssojha0911@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/shivansh-shekher-ojha/';
const GITHUB_URL = 'https://github.com/ssojha0911';

const rev = { initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, transition:{duration:0.55,ease:[0.25,0.46,0.45,0.94]}, viewport:{once:true,margin:'-80px'} };

function ContactRow({ label, value, href, copyValue }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue || value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center justify-between gap-4 py-4"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div>
        <p className="text-xs font-mono mb-0.5" style={{ color: '#3F3F46' }}>{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {copyValue && (
          <button onClick={handleCopy}
            className="text-xs font-mono px-3 py-1.5 rounded border transition-all"
            style={{
              color: copied ? '#22C55E' : '#F59E0B',
              borderColor: copied ? 'rgba(34,197,94,0.3)' : 'rgba(245,158,11,0.25)',
              background: copied ? 'rgba(34,197,94,0.07)' : 'rgba(245,158,11,0.06)',
            }}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        )}
        {href && (
          <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
            className="text-xs font-mono px-3 py-1.5 rounded border transition-all"
            style={{ color: '#71717A', borderColor: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={e => { e.currentTarget.style.color='#FAFAFA'; e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color='#71717A'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; }}>
            Open ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12" style={{ background: '#0C0C0F' }}>
      <div className="divider mb-16" />
      <div className="container mx-auto max-w-xl">

        <motion.div {...rev} className="mb-4">
          <p className="section-label mb-2">10 — Contact</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Let's connect</h2>
        </motion.div>
        <motion.p {...rev} transition={{ ...rev.transition, delay: 0.05 }}
          className="mb-14 text-sm" style={{ color: '#52525B' }}>
          Open to full-time roles, internships, hackathons, and interesting conversations.
        </motion.p>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.08 }}
          className="flex items-center gap-4 mb-12 card p-5">
          <ProfilePhoto size={64} />
          <div>
            <h3 className="font-display font-bold text-base text-white">Shivansh Shekher Ojha</h3>
            <p className="text-xs mt-0.5 font-mono" style={{ color: '#F59E0B' }}>EEE · BITS Pilani Hyderabad</p>
          </div>
        </motion.div>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.1 }} className="mb-10">
          <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} copyValue={EMAIL} />
          <ContactRow label="LinkedIn" value="linkedin.com/in/shivansh-shekher-ojha" href={LINKEDIN_URL} />
          <ContactRow label="GitHub" value="github.com/ssojha0911" href={GITHUB_URL} />
          <ContactRow label="Location" value="BITS Pilani, Hyderabad Campus · India" />
        </motion.div>

        <motion.div {...rev} transition={{ ...rev.transition, delay: 0.14 }} className="flex flex-wrap gap-3">
          <a href="/Shivansh_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="btn-primary px-6 py-2.5 rounded text-sm font-semibold">
            View Resume ↗
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
            className="btn-ghost px-6 py-2.5 rounded text-sm font-semibold">
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
