import styles from './Experience.module.css'

// ─── Logos ────────────────────────────────────────────────────────────────────
// Add company logo files to src/assets/experience/
// (e.g. startup.png, techinnovate.png, appdynamics.png, tufts.png)
// Then import them here and set the `logo` field on each entry:
//   import startupLogo from '../../assets/experience/startup.png'
// If `logo` is null a placeholder initial badge is shown instead.

import sarviaLogo from '../../assets/experience/sarvia.png'
import cpLogo from '../../assets/experience/cp_logo.png'
import tuftsLogo from '../../assets/experience/tufts.png'
import paviaLogo from '../../assets/experience/pavia.png'
import medicalLogo from '../../assets/experience/medical.png'
import ihihLogo from '../../assets/experience/ihih.png'
import uc3mLogo from '../../assets/experience/uc3m.png'
import jumboLogo from '../../assets/experience/jumbo.png'
import { p } from 'framer-motion/client'

const SKILLS = [
  { category: 'Languages', items: ['Python', 'C++', 'JavaScript', 'SQL', 'Swift'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'FastAPI', 'Django', 'LangChain / LangGraph', 'PyTorch', 'Pydantic', 'Pipecat'] },
  { category: 'Infrastructure & DevOps', items: ['AWS (EC2, ECS, Fargate, S3, RDS)', 'VPC Networking', 'IAM', 'Docker', 'Git', 'CI/CD (GitHub Actions)'] },
  { category: 'Databases & Vector', items: ['PostgreSQL (pgvector)', 'Supabase', 'FAISS', 'MySQL', 'Redis'] },
]

const EXPERIENCE = [
  {
    id: 'startup',
    company: 'Sarvia AI',
    role: 'Software Engineer',
    period: 'Jan 2026 – Present',
    location: 'Cambridge, MA',
    logo: sarviaLogo,
    bullets: [
    'At Sarvia, I worked as a full-stack software engineer with a primary focus on applied AI and backend systems, taking significant ownership over core platform features from early design through production iteration.',
    'I built the patient-to-trial matching system end to end, designing a workflow that ingested complex patient histories along with both structured and unstructured electronic health record data, then evaluated them against clinical trial eligibility criteria to identify strong candidate matches',
    'I built the frontend, backend services, APIs, and AWS-backed infrastructure for this workflow.',    
    'I optimized Sarvia’s real-time voice AI screening agent, reducing end-to-end latency by 35% through bidirectional WebSocket audio streaming, low-latency model selection, improved VAD endpointing, and deferred background processing.',
    'I also expanded the voice agent’s MCP tool layer with actions such as ending calls, handling multilingual interactions, checking clinic calendar availability, scheduling appointments, and sending follow-up emails, making the system substantially more capable in real-world workflows.',
    'I participated in product pilots and business-facing meetings, using user feedback to inform product and engineering decisions.',
    ],
  },
  {
    id: 'tufts',
    company: 'Tufts University',
    role: 'AI Research Assistant',
    period: 'Sep 2025 – Present',
    location: 'Medford, MA',
    logo: tuftsLogo,
    bullets: [
    'I collaborated with a faculty-led research team of PhD and graduate students at the Tufts’ Liulab to architect data infrastructure for Seasonal-to-Subseasonal (S2S) extreme weather predictive modeling.',
    'I engineered a high-dimensional ETL pipeline in Python using Xarray and Dask to ingest, preprocess, and normalize 63 years (1960–2023) of global geospatial climate data, generating standardized datasets for downstream deep learning workflows.',
    'I validated label integrity through spatiotemporal analysis, benchmarking extreme-event labels against historical meteorological records and quantifying agreement via Precision, Recall, and F1-score metrics.',
    'I leveraged the Tufts High-Performance Computing (HPC) cluster to execute large-scale, GPU-accelerated parallel computations.',
    ],
  },
  {
    id: 'cp',
    company: 'Core Perform',
    role: 'AI Engineer Intern',
    period: 'Aug 2025 – Dec 2025',
    location: 'Medford, MA',
    logo: cpLogo,
    bullets: [
    'As an AI Engineer Intern at Core Perform, I worked alongside the other interns to develop and deploy a suite of RAG agents that automated client onboarding, personalized plan generation, weekly progress tracking, and offboarding, reducing manual operational workload for Core Perform’s coaches by over 500%.',
    'I worked directly with internal teams, coaches, and clients to run pilots, gather feedback, and iteratively refine agent behavior to improve reliability in real-world use.',
    'I also led the design of the PostgreSQL schema, implementing B-tree indexing and query optimization to improve retrieval performance.',
    ],
  },
  {
    id: 'uc3m',
    company: 'Universidad Carlos III de Madrid',
    role: 'ML/AI Research Intern',
    period: 'Jan 2025 – Aug 2025',
    location: 'Madrid, Spain',
    logo: uc3mLogo,
    bullets: [
    'At UC3M’s Machine Learning Lab, I collaborated with a professor on the development of DARE-DQ, a novel evaluation metric for offline reinforcement learning trajectories that combines episode reward with empirical state density to better assess policy quality.',
    'I designed, implemented, and fine-tuned deep learning architectures in PyTorch to learn compact low-dimensional representations of high-dimensional continuous state observations across diverse reinforcement learning environments.',
    'I applied clustering methods, including K-Means, to latent state representations in order to identify and remove sparse or non-informative states, improving policy quality, training stability, and downstream agent performance.',
    'This approach reduced training time by up to 7x across multiple OpenAI Gym Atari environments without materially compromising model accuracy or performance.',
    ],
  },
  {
    id: 'jumbo',
    company: 'Jumbo Code',
    role: 'Full-Stack Engineer',
    period: 'Sep 2023 – May 2024',
    location: 'Medford, MA',
    logo: jumboLogo,
    bullets: [
    'As a full-stack engineer at Jumbo Code, I helped build a comprehensive internal website for a local nonprofit as part of the organization’s pro bono software initiative.',
    'I collaborated cross-functionally with designers, developers, and project managers in an agile, sprint-based workflow to ensure cohesive design, functionality, and on-time delivery.',
    'I built and integrated features across a React frontend and Django backend, working in a shared Git-based codebase to support collaborative full-stack development.',
    ],
  },
  {
    id: 'pavia',
    company: 'Pavia University',
    role: 'Data Science Fellow',
    period: 'Jun 2024 – Jul 2024',
    location: 'Pavia, Italy',
    logo: paviaLogo,
    bullets: [
    'As a Data Science Fellow in Tufts Global Education’s study abroad program in Pavia, Italy, I engaged in a mentored academic experience combining technical coursework with immersive study of Italian language and culture.',
    'I developed a foundation in machine learning by working with supervised and unsupervised methods, including regression models and clustering techniques, to analyze structured datasets and understand model behavior.',
    'Through this experience, I strengthened my ability to learn and apply technical concepts in an international setting while adapting to a new academic and cultural environment.',
    ],
  },
  {
    id: 'gb',
    company: 'Global Brigades',
    role: 'Volunteer Clinician',
    period: 'Jul 2023 – Aug 2023',
    location: 'Pavia, Italy',
    logo: medicalLogo,
    bullets: [
    'As a Volunteer Clinician in Panama with Global Brigades, I supported the delivery of healthcare services in a community clinic, working directly with patients and medical staff in a fast-paced, resource-constrained setting.',
    'I worked in triage by taking patient vitals, recording medical information, and helping organize patient intake to support efficient clinic flow and ensure patients were directed to the appropriate stage of care.',
    'I also assisted in the pharmacy by helping retrieve and organize medications for distribution, while contributing to the broader clinic environment through hands-on service and community engagement, including spending time with and entertaining local children.',
    ],
  },
  {
    id: 'ihih',
    company: 'Ice Hockey In Harlem',
    role: 'Volunteer Coach',
    period: 'Dec 2018 – Feb 2022',
    location: 'New York, NY',
    logo: ihihLogo,
    bullets: [
    'As a Volunteer Coach with Ice Hockey in Harlem, I taught fundamental hockey skills and mentored young players from underrepresented communities, helping create greater access to the sport through a mission-driven nonprofit program.',
    'I worked to build an inclusive, supportive team environment that encouraged confidence, discipline, and personal growth both on and off the ice, with a particular focus on making players feel welcomed, challenged, and supported.',
    'Through coaching, I helped reinforce values of teamwork, accountability, and perseverance while contributing to a program centered on youth development, academic enrichment, and equitable access to hockey opportunities.',
    ],
  },

]

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <h1 className={styles.heading}>Experience</h1>
          <p className={styles.subtext}>A few chapters from the path that brought me here.</p>
        </div>

        <div className={styles.body}>

          {/* ── Sticky sidebar ─────────────────────────────────────────────── */}
          <aside className={styles.sidebar}>
            <p className={styles.sidebarLabel}>Technical Skills</p>
            {SKILLS.map(({ category, items }) => (
              <div key={category} className={styles.skillGroup}>
                <p className={styles.skillCategory}>{category}</p>
                <ul className={styles.skillList}>
                  {items.map(item => (
                    <li key={item} className={styles.skillItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* ── Experience cards ────────────────────────────────────────────── */}
          <div className={styles.timeline}>
            {EXPERIENCE.map(({ id, company, role, period, location, logo, bullets }) => (
              <div key={id} className={styles.card}>

                <div className={styles.cardHeader}>
                  <div className={styles.cardLeft}>
                    <div className={styles.logo}>
                      {logo
                        ? <img src={logo} alt={company} className={styles.logoImg} />
                        : <span className={styles.logoInitial}>{company[0]}</span>
                      }
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.company}>{company}</span>
                      <span className={styles.role}>{role}</span>
                    </div>
                  </div>
                  <div className={styles.cardRight}>
                    <span className={styles.period}>{period}</span>
                    {location && <span className={styles.location}>{location}</span>}
                  </div>
                </div>

                <div className={styles.divider} />

                <ul className={styles.bullets}>
                  {bullets.map((b, i) => (
                    <li key={i} className={styles.bullet}>{b}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
