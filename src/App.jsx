import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import useHashRoute, { hasDeepLink } from './hooks/useHashRoute'
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

// ─── Intro gating ─────────────────────────────────────────────────────────
// The name intro plays once per tab session, and only when arriving at the
// bare root URL. Deep links (#/projects), refreshes, and Back/Forward skip it.

const INTRO_KEY = 'introSeen'

function introAlreadySeen() {
  try { return sessionStorage.getItem(INTRO_KEY) === '1' } catch { return false }
}

function markIntroSeen() {
  try { sessionStorage.setItem(INTRO_KEY, '1') } catch { /* storage unavailable */ }
}

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [phase, setPhase] = useState(() =>
    introAlreadySeen() || hasDeepLink() ? 'site' : 'landing'
  ) // 'landing' | 'site'
  const activePage = useHashRoute()

  const handleLandingComplete = useCallback(() => {
    markIntroSeen()
    setPhase('site')
  }, [])

  // Scroll reset happens *between* the outgoing page's fade-out and the incoming
  // page's fade-in, while nothing is on screen. Resetting on hash change instead
  // would visibly yank the old page to the top before it starts fading.
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

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
            <Navbar activePage={activePage} />

            <main className={styles.main}>
              <AnimatePresence mode="wait" onExitComplete={scrollToTop}>

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
