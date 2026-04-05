import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './About.module.css'

// ─── Social icons (inline SVG) ────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482
        0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832
        .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
        -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004
        1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647
        .64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
        0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12
        c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
        3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065
        2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771
        C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
        24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
        2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1
        1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/javierfriedman',      Icon: GitHubIcon,   external: true  },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/javierfriedman', Icon: LinkedInIcon, external: true  },
  { label: 'Resume',   href: '/resume.pdf',                             Icon: ResumeIcon,   download: true  },
  { label: 'Email',    href: 'mailto:hello@javierfriedman.com',         Icon: EmailIcon,    external: false },
]

// ─── Text animation ────────────────────────────────────────────────────────

const textContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
}

const textItem = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ─── Component ────────────────────────────────────────────────────────────

export default function About() {
  const sectionRef = useRef(null)

  // Mouse-reactive parallax for the portrait
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 35, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 35, damping: 22 })
  const tx = useTransform(springX, [-500, 500], [-20, 20])
  const ty = useTransform(springY, [-500, 500], [-14, 14])

  useEffect(() => {
    const el = sectionRef.current
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      mouseX.set(e.clientX - (r.left + r.width  / 2))
      mouseY.set(e.clientY - (r.top  + r.height / 2))
    }
    const onLeave = () => { mouseX.set(0); mouseY.set(0) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [mouseX, mouseY])

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.inner}>

        {/* ── Portrait ──────────────────────────────────────────────── */}
        <motion.div
          className={styles.portraitWrap}
          style={{ x: tx, y: ty }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        >
          {/* The blob frame morphs its border-radius via CSS keyframes */}
          <div className={styles.blobFrame}>
            <img
              className={styles.portraitImg}
              src="/portrait.jpg"
              alt="Javier Friedman"
            />
          </div>
        </motion.div>

        {/* ── Text ──────────────────────────────────────────────────── */}
        <motion.div
          className={styles.textPanel}
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.name} variants={textItem}>
            JAVIER<br />FRIEDMAN
          </motion.h1>

          <motion.p className={styles.bio} variants={textItem}>
            I build intelligent products, real-time systems, and
            production-ready software. My work sits at the intersection
            of AI, backend engineering, and thoughtful product design.
          </motion.p>

          <motion.nav
            className={styles.socialLinks}
            variants={textItem}
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map(({ label, href, Icon, external, download }) => (
              <a
                key={label}
                className={styles.iconBtn}
                href={href}
                aria-label={label}
                title={label}
                {...(download
                  ? { download: true }
                  : external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Icon />
              </a>
            ))}
          </motion.nav>
        </motion.div>

      </div>
    </section>
  )
}
