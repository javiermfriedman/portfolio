import styles from './Projects.module.css'

// When you have real screenshots, add them to src/assets/projects/ and swap null for the import:
import elaraImg       from '../../assets/projects/elara.png'
import delphiImg      from '../../assets/projects/delphi.png'
import jarvisImg      from '../../assets/projects/jarvis.png'
import falconImg      from '../../assets/projects/falconU.png'
import chipkingIMg   from '../../assets/projects/chipking.png'  
import gtzanImg      from '../../assets/projects/mel.png'
const PROJECTS = [
  {
    id: 'elara',
    name: 'E.L.A.R.A.',
    headline: 'Enhanced Language Acquisition & Response Agent',
    description:
      'Built with FastAPI, Twilio, Deepgram, ElevenLabs, OpenAI, and React. Designed for low-latency conversational systems and mission-control style orchestration.',
    tags: ['FastAPI', 'React', 'Twilio', 'OpenAI', 'Deepgram', 'ElevenLabs'],
    github: '#',
    image: elaraImg,
  },
  {
    id: 'delphi',
    name: 'D.E.L.P.H.I.',
    headline: 'Daily Elocution & Lexical Processing Heuristic Intelligence',
    description:
      'An LLM-powered full-stack application designed around ritual, memory, and language learning.',
    tags: ['React', 'FastAPI', 'LangChain', 'GitHub Actions', 'WhatsApp'],
    github: '#',
    image: delphiImg
  },
  {
    id: 'jarvis',
    name: 'J.A.R.V.I.S.',
    headline: 'Just A Rather Very Intelligent System',
    description:
      'Python/FastAPI backend powered by Pipecat framework. You can spin it up locally with a single terminal alias, speak to it in real time, and have it manage your calendar, inbox, and (soon) send messages on your behalf via Twilio — all through natural conversation',
    tags: ['Python', 'RAG', 'PostgreSQL', 'FastAPI', 'AWS'],
    github: '#',
    image: jarvisImg
  },
  {
    id: 'falcon',
    name: 'Falcon University',
    headline: 'A HIPAA-compliant AI system for matching patients to clinical studies.',
    description:
      'Built to ingest structured and unstructured medical data and determine trial eligibility with high accuracy.',
    tags: ['Python', 'RAG', 'PostgreSQL', 'FastAPI', 'AWS'],
    github: '#',
    image: falconImg
  },
  {
    id: 'chipking',
    name: 'ChipKing',
    headline: 'A platform for managing and optimizing chip designs.',
    description:
      'Built with React and Node.js, ChipKing provides a comprehensive solution for chip design and optimization.',
    tags: ['React', 'Node.js', 'Python', 'FastAPI', 'AWS'],
    github: '#',
    image: chipkingIMg
  },
  {
    id: 'gtzan',
    name: 'Song Genre Classifier',
    headline: 'A platform for managing and optimizing chip designs.',
    description:
      'Built with React and Node.js, ChipKing provides a comprehensive solution for chip design and optimization.',
    tags: ['React', 'Node.js', 'Python', 'FastAPI', 'AWS'],
    github: '#',
    image: gtzanImg
  }
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
