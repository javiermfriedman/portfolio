import styles from './Experience.module.css'

const PLACEHOLDER_ENTRIES = [
  {
    id: 1,
    role: 'Role',
    company: 'Company',
    period: '20XX — Present',
  },
  {
    id: 2,
    role: 'Role',
    company: 'Company',
    period: '20XX — 20XX',
  },
  {
    id: 3,
    role: 'Role',
    company: 'Company',
    period: '20XX — 20XX',
  },
]

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Experience</h1>
          <p className={styles.subtext}>
            Where I've built, shipped, and grown.
          </p>
        </div>

        <div className={styles.list}>
          {PLACEHOLDER_ENTRIES.map(({ id, role, company, period }) => (
            <div key={id} className={styles.entry}>
              <div className={styles.entryMeta}>
                <span className={styles.period}>{period}</span>
              </div>
              <div className={styles.entryBody}>
                <p className={styles.role}>{role}</p>
                <p className={styles.company}>{company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
