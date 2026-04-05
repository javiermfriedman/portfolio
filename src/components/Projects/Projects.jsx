import styles from './Projects.module.css'

const PLACEHOLDER_PROJECTS = [
  { id: 1, label: 'Project One' },
  { id: 2, label: 'Project Two' },
  { id: 3, label: 'Project Three' },
]

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Projects</h1>
          <p className={styles.subtext}>
            A selection of products and systems I've designed and built.
          </p>
        </div>

        <div className={styles.grid}>
          {PLACEHOLDER_PROJECTS.map(({ id, label }) => (
            <div key={id} className={styles.card}>
              <div className={styles.cardThumb} />
              <p className={styles.cardLabel}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
