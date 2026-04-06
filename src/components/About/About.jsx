import { useRef } from 'react'
import { motion } from 'framer-motion'
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

function GoodreadsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.525 15.977V.49h-2.059v2.906h-.064a5.855 5.855 0 0 0-2.016-2.56C14.473.317
        13.3 0 11.857 0c-1.123 0-2.103.21-2.94.63a5.97 5.97 0 0 0-2.073 1.73 7.556 7.556 0 0
        0-1.262 2.626A11.61 11.61 0 0 0 5.19 8.012a14.888 14.888 0 0 0 .35 3.2 8.05 8.05 0 0
        0 1.117 2.755 5.916 5.916 0 0 0 1.97 1.92c.804.484 1.763.727 2.877.727 1.355 0
        2.541-.316 3.557-.948a5.553 5.553 0 0 0 2.23-2.685h.063v2.145c0 3.51-1.714 5.26-5.14
        5.26-1.355 0-2.49-.29-3.405-.87a5.53 5.53 0 0 1-1.985-2.35l-1.793.98a7.187 7.187 0 0
        0 2.626 3.054c1.234.79 2.73 1.188 4.493 1.188 1.186 0 2.234-.167 3.144-.5a6.06 6.06 0
        0 0 2.29-1.49 6.486 6.486 0 0 0 1.4-2.403c.318-.95.477-2.03.477-3.238zm-7.588-.28c-.824
        0-1.54-.175-2.146-.526a4.48 4.48 0 0 1-1.495-1.4 6.43 6.43 0 0 1-.873-2.006 9.468
        9.468 0 0 1-.28-2.32c0-.832.1-1.618.298-2.36a6.501 6.501 0 0 1 .904-2.006 4.709 4.709
        0 0 1 1.5-1.4c.6-.35 1.3-.528 2.1-.528.755 0 1.437.163 2.05.49.61.326 1.13.775
        1.556 1.346a6.214 6.214 0 0 1 .96 2.005 8.999 8.999 0 0 1 .33 2.45c0 .818-.1
        1.609-.297 2.374a6.748 6.748 0 0 1-.88 2.02 4.716 4.716 0 0 1-1.509 1.4c-.61.35-1.313.525-2.117.525z"/>
    </svg>
  )
}

function SpotifyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521
        17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179
        -.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301
        1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12
        -1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181
        .54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721
        -.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419
        1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { label: 'GitHub',    href: 'https://github.com/javiermfriedman',                          Icon: GitHubIcon,    external: true  },
  { label: 'LinkedIn',  href: 'www.linkedin.com/in/javier-friedman-ab08112a9',                     Icon: LinkedInIcon,  external: true  },
  { label: 'Goodreads', href: 'https://www.goodreads.com/user/show/181135757-javi-friedman',                       Icon: GoodreadsIcon, external: true  },
  { label: 'Spotify',   href: 'https://open.spotify.com/user/javier.friedman85?si=b04d412187b6427c',               Icon: SpotifyIcon,   external: true  },
  { label: 'Email',     href: 'mailto:hello@javiermfriedman.com',                            Icon: EmailIcon,     external: false },
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

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.inner}>

        {/* ── Portrait ──────────────────────────────────────────────── */}
        <motion.div
          className={styles.portraitWrap}
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
            JAVIER FRIEDMAN
          </motion.h1>

          <motion.p className={styles.bio} variants={textItem}>
            Bonjour! I’m a Tufts-trained computer scientist based in Boston, dedicated to building applied AI products end-to-end. My background covers the entire AI lifecycle, starting in the weeds of machine learning and model training before evolving into a product-focused engineer working across the full stack (with the occasional mobile project on the side just for fun). I thrive in fast-paced environments and building from scratch, but outside of the terminal, I’m a New Yorker at heart (Go Knicks) who loves reading fantasy, skiing, going to spin classes, generating tracks on Suno, or digging for new music on Spotify.
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
