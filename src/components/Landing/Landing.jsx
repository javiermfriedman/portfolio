import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Landing.module.css'

const NAME = 'Javier Friedman'

// ─── Timing ────────────────────────────────────────────────────────────────
// All values in seconds unless noted.
// Adjust here to tune the cinematic feel without touching animation logic.

const INITIAL_DELAY   = 0.1    // almost immediate — barely a breath
const STAGGER         = 0.042  // quick cadence between letters
const LETTER_DURATION = 0.35   // fast, clean reveal per letter
const HOLD_AFTER_MS   = 1800   // hold: the name sits, breathes, then exits

const REVEAL_COMPLETE_MS =
  (INITIAL_DELAY + (NAME.length - 1) * STAGGER + LETTER_DURATION) * 1000

const AUTO_TRIGGER_MS = REVEAL_COMPLETE_MS + HOLD_AFTER_MS

// ─── Variants ──────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren:  INITIAL_DELAY,
      staggerChildren: STAGGER,
    },
  },
}

const letterVariants = {
  // y offset is very small — this is a material­ization, not a slide
  hidden:  { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: LETTER_DURATION,
      // Slow-start ease: the letter lingers into existence rather than arriving
      ease: [0.45, 0, 0.55, 1],
    },
  },
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function Landing({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, AUTO_TRIGGER_MS)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className={styles.landing}
      // Exit: title softly dissolves with the faintest defocus — like focus
      // pulling away from a title card to reveal the scene behind it
      exit={{
        opacity: 0,
        filter: 'blur(3px)',
        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
      }}
    >
      <motion.div
        className={styles.nameRow}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={NAME}
      >
        {NAME.split('').map((char, i) =>
          char === ' ' ? (
            <motion.span
              key={i}
              className={styles.wordSpace}
              variants={letterVariants}
              aria-hidden="true"
            />
          ) : (
            <motion.span
              key={i}
              className={styles.letter}
              variants={letterVariants}
              aria-hidden="true"
            >
              {char}
            </motion.span>
          )
        )}
      </motion.div>
    </motion.div>
  )
}
