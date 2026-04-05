import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import styles from './App.module.css'

// ─── Inter-page transitions (About ↔ Projects ↔ Experience) ───────────────
const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0  },
  exit:    { opacity: 0, y: -6 },
}

const pageTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
}

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [phase, setPhase]           = useState('landing') // 'landing' | 'site'
  const [activePage, setActivePage] = useState('about')

  const handleLandingComplete = useCallback(() => setPhase('site'), [])

  return (
    <div className={styles.app}>
      <AnimatePresence mode="wait">

        {phase === 'landing' ? (
          <Landing key="landing" onComplete={handleLandingComplete} />

        ) : (
          /*
           * Site enter:
           * A brief opacity ramp (0 → 1 over 0.9s) with a tiny delay gives
           * the warm background a single beat of silence after the landing
           * dissolves — like a breath between scenes. The About page's own
           * stagger animation layers on top of this, so the site feels like
           * it is assembling itself from the ground up rather than cutting in.
           */
          <motion.div
            key="site"
            className={styles.site}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          >
            <Navbar activePage={activePage} onNavigate={setActivePage} />

            <main className={styles.main}>
              <AnimatePresence mode="wait">

                {activePage === 'about' && (
                  <motion.div
                    key="about"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                    style={{ height: '100%' }}
                  >
                    <About />
                  </motion.div>
                )}

                {activePage === 'projects' && (
                  <motion.div
                    key="projects"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Projects />
                  </motion.div>
                )}

                {activePage === 'experience' && (
                  <motion.div
                    key="experience"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={pageTransition}
                  >
                    <Experience />
                  </motion.div>
                )}

              </AnimatePresence>
            </main>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
