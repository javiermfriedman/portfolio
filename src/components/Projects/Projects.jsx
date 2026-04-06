import styles from './Projects.module.css'

// When you have real screenshots, add them to src/assets/projects/ and swap null for the import:
import elaraImg       from '../../assets/projects/elara.png'
import delphiImg      from '../../assets/projects/delphi.png'
// import clinicalImg    from '../../assets/projects/clinical-trial.png'

const PROJECTS = [
  {
    id: 'elara',
    name: 'ELARA',
    headline: 'A real-time AI voice agent platform for phone-based interactions.',
    description:
      'Built with FastAPI, Twilio, Deepgram, ElevenLabs, OpenAI, and React. Designed for low-latency conversational systems and mission-control style orchestration.',
    tags: ['FastAPI', 'React', 'Twilio', 'OpenAI', 'Deepgram', 'ElevenLabs'],
    github: '#',
    image: elaraImg,
  },
  {
    id: 'delphi',
    name: 'DELPHI',
    headline: 'A vocabulary oracle that curates and delivers daily words through WhatsApp.',
    description:
      'An LLM-powered full-stack application designed around ritual, memory, and language learning.',
    tags: ['React', 'FastAPI', 'LangChain', 'GitHub Actions', 'WhatsApp'],
    github: '#',
    image: delphiImg
  },
  {
    id: 'clinical',
    name: 'Clinical Trial Matching System',
    headline: 'A HIPAA-compliant AI system for matching patients to clinical studies.',
    description:
      'Built to ingest structured and unstructured medical data and determine trial eligibility with high accuracy.',
    tags: ['Python', 'RAG', 'PostgreSQL', 'FastAPI', 'AWS'],
    github: '#',
    image: null, // replace with clinicalImg
  },
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

        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.card}>

              <div className={styles.cardContent}>
                <span className={styles.projectName}>{project.name}</span>
                <h2 className={styles.headline}>{project.headline}</h2>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.cardImage}>
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <div className={styles.imagePlaceholder} />
                  )}
                </div>
                <div className={styles.buttons}>
                  <a href={project.github} className={styles.btn}>GitHub</a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
