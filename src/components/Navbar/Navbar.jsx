import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
]

export default function Navbar({ activePage, onNavigate }) {
  return (
    <motion.header
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <button
        className={styles.brand}
        onClick={() => onNavigate('about')}
        aria-label="Go to About"
      >
        Javier Friedman
      </button>

      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.link} ${activePage === id ? styles.linkActive : ''}`}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </motion.header>
  )
}
