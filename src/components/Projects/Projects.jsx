import styles from './Projects.module.css'

// Screenshots are WebP, resized to 800px wide (see git history for originals).
import elaraImg       from '../../assets/projects/elara.webp'
import delphiImg      from '../../assets/projects/delphi.webp'
import jarvisImg      from '../../assets/projects/jarvis.webp'
import falconImg      from '../../assets/projects/falconU.webp'
import chipkingIMg   from '../../assets/projects/chipking.webp'  
import gtzanImg      from '../../assets/projects/mel.webp'
import sotdImg      from '../../assets/projects/sotd.webp'
import shadowImg     from '../../assets/projects/shadow.webp'
import portfolioImg   from '../../assets/projects/portfolio.webp'
const PROJECTS = [
  {
    id: 'elara',
    name: 'E.L.A.R.A.',
    headline: 'Enhanced Language Acquisition & Response Agent',
    description:
        'A full-stack platform for deploying configurable voice AI agents on live outbound phone calls, powered by real-time STT → LLM → TTS pipelines over WebSockets, with a mission-control interface for launching calls and replaying recordings.',
    tags: ['FastAPI', 'React', 'Twilio', 'Pipecat', 'Deepgram', 'ElevenLabs', 'OpenAI','WebSockets', 'JWT'],
    github: 'https://github.com/javiermfriedman/E.L.A.R.A',
    image: elaraImg,
    imageWidth: 800,
    imageHeight: 626,
  },
  {
    id: 'jarvis',
    name: 'J.A.R.V.I.S.',
    headline: 'Just A Rather Very Intelligent System',
    description:
      'A personal AI assistant for everyday task handling (calendar, email, and messaging) that you can spin up locally with a cinematic ignition sequence and a voice modeled after J.A.R.V.I.S. from Iron Man.',
    tags: ['Pipecat', 'Deepgram', 'OpenAI', 'ElevenLabs', 'Silero', 'RTVI','WebRTC', 'FastAPI','React', 'Vite', 'Google APIs', 'Twilio',],
    github: 'https://github.com/javiermfriedman/J.A.R.V.I.S',
    demo: 'https://youtu.be/XrMCy3w5bsM',
    image: jarvisImg,
    imageWidth: 307,
    imageHeight: 307
  },
  {
    id: 'delphi',
    name: 'D.E.L.P.H.I.',
    headline: 'Daily Elocution & Lexical Processing Heuristic Intelligence',
    description:
      'A full-stack word-of-the-day app with a web UI for browsing past words, scheduling upcoming ones (either manually or via an LLM-powered “Oracle” that generates batches), and a daily GitHub Action that delivers each word via WhatsApp.',
    tags: ['LangChain','LangGraph','Supabase', 'FastAPI', 'Uvicorn', 'GitHub Actions', 'Docker','React', 'Twilio'],
    github: 'https://github.com/javiermfriedman/D.E.L.P.H.I',
    demo: 'https://youtu.be/UiADcmmo-nc',
    image: delphiImg,
    imageWidth: 800,
    imageHeight: 1200
  },
  {
    id: 'falcon',
    name: 'Falcon University',
    headline: 'AI-powered university platform',
    description:
      'A university-facing platform where staff define and manage academic program requirements, students engage in guided conversations with an AI agent to explore programs and assess eligibility, and staff review both programs and eligibility conversations from a centralized interface.',
    tags: ['Django', 'Gunicorn', 'PostgreSQL', 'LangGraph', 'LangChain','LangSmith', 'pypdf','Pydantic','RAG','React', 'Vite', 'Docker','OpenAI API'],
    github: 'https://github.com/javiermfriedman/Falcon_University',
    image: falconImg,
    imageWidth: 800,
    imageHeight: 500
  },
  {
    id: 'chipking',
    name: 'ChipKing',
    headline: 'Who is the best poker player? An app to find out',
    description:
      'An iOS app for tracking poker series over time: create series, add players, log games and buy-ins, and analyze standings and performance trends.',
    tags: ['Swift', 'iOS', 'App Store Connect', 'SwiftUI', 'UIKit', 'PhotosUI', 'Codable','Xcode', 'MVVM'],
    github: 'https://github.com/javiermfriedman/ChipKing',
    image: chipkingIMg,
    imageWidth: 800,
    imageHeight: 1200
  },
  {
    id: 'gtzan',
    name: 'Song Genre Classifier',
    headline: 'Deep learning + music = the future',
    description:
      'A convolutional neural network trained on the GTZAN dataset (30-second audio clips) to classify music genres.',
    tags: ['TensorFlow (Keras)', 'Adam', 'scikit-learn', 'Librosa', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Supervised learning', 'Regularization'],
    github: 'https://github.com/javiermfriedman/SongGenreClassifier',
    image: gtzanImg,
    imageWidth: 800,
    imageHeight: 397
  },
  {
    id: 'sotd',
    name: 'Song of the Day',
    headline: 'A platform for discovering and sharing daily music recommendations',
    description:
      'An iOS application (and home-screen widget) that presents one featured track per day with links to open it across major streaming platforms, supported by backend tooling and automation to ingest, store, and maintain the catalog over time.',
    tags: ['SwiftUI', 'UIKit', 'Foundation', 'WidgetKit', 'Python', 'Supabase', 'Pandas', 'Spotify Web API', 'GitHub Actions'],
    github: 'https://github.com/javiermfriedman/SOTD',
    image: sotdImg,
    imageWidth: 800,
    imageHeight: 1200
  },
  {
    id: 'shadow',
    name: 'Shadow Claw',
    headline: 'Nine lives, one graveyard, zero rules',
    description:
      'A 2D top-down Unity game where you play a black cat in a graveyard, using ghost powers to slip through walls, sneak past enemies, and collect fragments to advance the story.',
    tags: ['Unity (2D)', 'C#', 'Unity UI (uGUI)', 'TextMesh Pro', '2D Tilemaps', 'Physics 2D'],
    github: 'https://github.com/javiermfriedman/ShadowClaw',
    demo: 'https://www.youtube.com/watch?v=un1I_a93Lpg',
    live: 'https://ellavoorhees1.wixsite.com/my-site',
    image: shadowImg,
    imageWidth: 800,
    imageHeight: 392
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    headline: 'A website about me, made by me, for you to think highly of me',
    description:
      'Spent more time picking fonts than sleeping. Rebuilt it four times. Told myself it was “almost done” for three weeks. You\'re looking at the result of that psychological damage.',
    tags: ['React', 'Vite', 'CSS Modules', 'Existential Dread', 'Too Many Fonts', 'Perfectionism'],
    github: 'https://github.com/javiermfriedman/portfolio',
    live: 'https://www.javierfriedman.com/',
    image: portfolioImg,
    imageWidth: 800,
    imageHeight: 359
  }
]
export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Projects</h1>
          <p className={styles.subtext}>
            A small collection of things I felt compelled to build.
          </p>
        </div>

        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.card}>

              <div className={styles.cardContent}>
                <h2 className={styles.projectName}>{project.name}</h2>
                <p className={styles.headline}>{project.headline}</p>
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
                    <img
                      src={project.image}
                      alt={project.name}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} />
                  )}
                </div>
                <div className={styles.buttons}>
                  {project.live  && <a href={project.live}  className={styles.btn} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live site (opens in a new tab)`}>Live</a>}
                  {project.demo  && <a href={project.demo}  className={styles.btn} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} demo video (opens in a new tab)`}>Demo</a>}
                  <a href={project.github} className={styles.btn} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub (opens in a new tab)`}>GitHub</a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
