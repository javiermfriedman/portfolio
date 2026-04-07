import styles from './Projects.module.css'

// When you have real screenshots, add them to src/assets/projects/ and swap null for the import:
import elaraImg       from '../../assets/projects/elara.png'
import delphiImg      from '../../assets/projects/delphi.png'
import jarvisImg      from '../../assets/projects/jarvis.png'
import falconImg      from '../../assets/projects/falconU.png'
import chipkingIMg   from '../../assets/projects/chipking.png'  
import gtzanImg      from '../../assets/projects/mel.png'
import sotdImg      from '../../assets/projects/sotd.png'
const PROJECTS = [
  {
    id: 'elara',
    name: 'E.L.A.R.A.',
    headline: 'Enhanced Language Acquisition & Response Agent',
    description:
        'A full-stack app for deploying configurable voice AI agents on live outbound phone calls, powered by real-time speech-to-text, LLM, and text-to-speech pipelines over WebSockets, with a mission-control UI for launching calls and replaying recordings',
    tags: ['FastAPI', 'React', 'Twilio', 'Pipecat', 'Deepgram', 'ElevenLabs', 'OpenAI','WebSockets', 'JWT'],
    github: 'https://github.com/javiermfriedman/E.L.A.R.A',
    image: elaraImg,
  },
  {
    id: 'delphi',
    name: 'D.E.L.P.H.I.',
    headline: 'Daily Elocution & Lexical Processing Heuristic Intelligence',
    description:
      'A full-stack word-of-the-day app with a web UI for browsing past words, scheduling upcoming ones (either manually or via an LLM-powered “Oracle” that generates batches), and a daily GitHub Action that delivers each word to WhatsApp',
    tags: ['LangChain','LangGraph','Supabase', 'FastAPI', 'Uvicorn', 'GitHub Actions', 'Docker','React', 'Twilio'],
    github: 'https://github.com/javiermfriedman/D.E.L.P.H.I',
    image: delphiImg
  },
  {
    id: 'jarvis',
    name: 'J.A.R.V.I.S.',
    headline: 'Just A Rather Very Intelligent System',
    description:
      'A personal AI assistant for everyday task handling (calendar, email, and messaging) that you can spin up locally with a cinematic ignition sequence and a voice modeled after J.A.R.V.I.S. from Iron Man 2',
    tags: ['Pipecat', 'Deepgram', 'OpenAI', 'ElevenLabs', 'Silero', 'RTVI','WebRTC', 'FastAPI','React', 'Vite', 'Google APIs', 'Twilio',],
    github: '#',
    image: jarvisImg
  },
  {
    id: 'falcon',
    name: 'Falcon University',
    headline: 'AI-powered university platform',
    description:
      'A university-facing system where staff define and maintain academic program requirements, students engage in guided conversations with an AI agent to explore programs and assess eligibility, and staff review both programs and eligibility conversations from a centralized platform',
    tags: ['Django', 'Gunicorn', 'PostgreSQL', 'LangGraph', 'LangChain','LangSmith', 'pypdf','Pydantic','RAG','React', 'Vite', 'Docker','OpenAI API'],
    github: 'https://github.com/javiermfriedman/Falcon_University',
    image: falconImg
  },
  {
    id: 'chipking',
    name: 'ChipKing',
    headline: 'Who is the best poker player? An app to find out.',
    description:
      'An iOS app for tracking poker series over time: you run multiple series, add players, log games and buy-ins, and see standings and how performance changes.',
    tags: ['Swift', 'iOS', 'App Store Connect', 'SwiftUI', 'UIKit', 'PhotosUI', 'Codable','Xcode', 'MVVM'],
    github: 'https://github.com/javiermfriedman/ChipKing',
    image: chipkingIMg
  },
  {
    id: 'gtzan',
    name: 'Song Genre Classifier',
    headline: 'Deep learning + music = the future',
    description:
      'A Convolutional Neural Network trained on the GTZAN dataset (30-second song clips) to predict music genre',
    tags: ['TensorFlow(Keras)', 'Adam', 'scikit-learn', 'Librosa', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Supervised learning', 'Regularization'],
    github: 'https://github.com/javiermfriedman/SongGenreClassifier',
    image: gtzanImg
  },
  {
    id: 'sotd',
    name: 'Song of the Day',
    headline: 'A platform for discovering and sharing daily music recommendations.',
    description:
      'An iOS application (and home-screen widget) that presents one featured track per day with links to open it on major streaming platforms, supported by a backend with tooling and automation to ingest, store, and maintain the catalog over time.',
    tags: ['SwiftUI', 'UIKit', 'Foundation', 'WidgetKit', 'Python', 'Supabase', 'Pandas', 'Supabase', 'Spotify Web API', 'GitHub Actions'],
    github: 'https://github.com/javiermfriedman/SOTD',
    image: sotdImg
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
