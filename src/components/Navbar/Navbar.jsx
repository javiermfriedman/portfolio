import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
]

export default function Navbar({ activePage }) {
  return (
    <motion.header
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <img src="/portfolio_favicon.png" alt="Javier Friedman" className={styles.brandLogo} />

      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#/${id}`}
            className={`${styles.link} ${activePage === id ? styles.linkActive : ''}`}
            aria-current={activePage === id ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
