"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type ExhibitionProject = {
  id: string
  category: "Designing Novel Interactions" | "Game Design"
  coordinate: string
  title: string
  description: string
  team: string
}

type Organiser = {
  id: string
  name: string
  role: string
}

type ArchivePanel = {
  id: string
  label: string
  subtitle: string
}

const eventTickerText =
  "Friday 29 May (11am–5pm: public showcase, 6–8pm: awards ceremony). Melbourne Connect, Superfloor, 700 Swanston St, Carlton VIC 3053"

const projects: ExhibitionProject[] = [
  {
    id: "dni-01",
    category: "Designing Novel Interactions",
    coordinate: "D5",
    title: "Soul Capture Communicator",
    description:
      "A future-facing artefact that invites participants to imagine how communication with absent or departed presences could become tactile, intimate, and emotionally charged. The work explores memory, ritual, and speculative interaction design through a responsive interface.",
    team: "Team Alpha",
  },
  {
    id: "dni-02",
    category: "Designing Novel Interactions",
    coordinate: "D6",
    title: "Frank",
    description:
      "A provocative interaction project using a tangible object to examine how users form attachments to machine-like entities. The project asks how agency, empathy, and discomfort shift when playful or uncanny artefacts begin to feel socially present.",
    team: "Team Beta",
  },
  {
    id: "dni-03",
    category: "Designing Novel Interactions",
    coordinate: "D9",
    title: "Danceblaster",
    description:
      "An interactive prototype that turns movement, rhythm, and physical expression into a playful technological encounter. The project investigates how embodiment, feedback, and performance can reshape everyday interactions.",
    team: "Team PSP",
  },
  {
    id: "game-01",
    category: "Game Design",
    coordinate: "G1",
    title: "Who Pulls the Strings?",
    description:
      "A game design project exploring control, manipulation, and autonomy through interactive systems. Players are invited to question who directs actions in a mixed human-machine environment and where authorship truly sits.",
    team: "Studio Phoenix",
  },
  {
    id: "game-02",
    category: "Game Design",
    coordinate: "D8",
    title: "Insight",
    description:
      "An immersive game and narrative experience focused on reconstruction, perception, and virtual investigation. The project examines how environmental storytelling and sensory feedback influence belief, memory, and player interpretation.",
    team: "Studio Hydra",
  },
  {
    id: "game-03",
    category: "Game Design",
    coordinate: "D12",
    title: "Fate.exe",
    description:
      "A speculative game exploring algorithmic judgment, choice, and system authority. The project asks whether players can resist computational fate and what agency remains when decisions are shaped by opaque rules.",
    team: "Studio Delta",
  },
]

const organisers: Organiser[] = [
  { id: "org-01", name: "TBA", role: "Exhibition Coordination" },
  { id: "org-02", name: "TBA", role: "Curatorial Support" },
  { id: "org-03", name: "TBA", role: "Technical Support" },
  { id: "org-04", name: "TBA", role: "Event Assistance" },
]

const archivePanels: ArchivePanel[] = [
  {
    id: "archive-01",
    label: "Past Showcase",
    subtitle: "Interactive works / archive feed",
  },
  {
    id: "archive-02",
    label: "Prototype Table",
    subtitle: "Process, testing, exhibition builds",
  },
  {
    id: "archive-03",
    label: "Awards Night",
    subtitle: "Captured moments / event memory",
  },
]

export default function CyberneticFuturesSite() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const groupedProjects = useMemo(() => {
    return {
      "Designing Novel Interactions": projects.filter(
        (project) => project.category === "Designing Novel Interactions",
      ),
      "Game Design": projects.filter((project) => project.category === "Game Design"),
    }
  }, [])

  useEffect(() => {
    let animationFrame = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const animateCursorGlow = () => {
      currentX += (targetX - currentX) * 0.16
      currentY += (targetY - currentY) * 0.16

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }

      animationFrame = requestAnimationFrame(animateCursorGlow)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationFrame = requestAnimationFrame(animateCursorGlow)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const toggleCard = (id: string) => {
    setExpandedCards((current) => ({
      ...current,
      [id]: !current[id],
    }))
  }

  return (
    <main className="cyber-site">
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      <Hero />

      <section className="floor-plan-section" aria-labelledby="floor-plan-heading">
        <div className="section-heading-row">
          <h2 id="floor-plan-heading">Exhibition Floor Plan</h2>
        </div>

        <div className="floor-plan-frame">
          <div className="floor-plan-placeholder">
            <div className="floor-plan-grid">
              <span className="floor-node node-one">DNI</span>
              <span className="floor-node node-two">GD</span>
              <span className="floor-node node-three">ENTRY</span>
              <span className="floor-node node-four">AWARDS</span>
            </div>
          </div>

          <p className="floor-plan-caption">
            Placeholder floor plan. Coordinates shown on each project card can later be mapped to this exhibition layout.
          </p>
        </div>
      </section>

      <section className="showcase-section" aria-label="Exhibition project listings">
        <ProjectColumn
          title="Designing Novel Interactions"
          projects={groupedProjects["Designing Novel Interactions"]}
          expandedCards={expandedCards}
          onToggle={toggleCard}
        />

        <ProjectColumn
          title="Game Design"
          projects={groupedProjects["Game Design"]}
          expandedCards={expandedCards}
          onToggle={toggleCard}
        />
      </section>

      <section className="organisers-section" aria-labelledby="organisers-heading">
        <div className="section-heading-row">
          <h2 id="organisers-heading">Organisers</h2>
        </div>

        <div className="organisers-grid">
          {organisers.map((organiser) => (
            <article key={organiser.id} className="organiser-card">
              <h3>{organiser.name}</h3>
              <p>{organiser.role}</p>
            </article>
          ))}
        </div>
      </section>

      <BottomTicker />
    </main>
  )
}

function Hero() {
  return (
    <header className="cyber-hero">
      <div className="hero-copy">
        <p className="hero-eyebrow">University of Melbourne Showcase</p>
        <h1>Cybernetic Futures 2026: Distraction</h1>
      </div>

      <HeaderFlavorVisual />
    </header>
  )
}

function HeaderFlavorVisual() {
  return (
    <div className="header-flavor" aria-hidden="true">
      <div className="flavor-screen">
        <div className="screen-noise" />
        <div className="scan-line" />
        <div className="screen-copy">
          <span className="screen-kicker">Archive Signal</span>
          <strong>Showcase Memory Loop</strong>
          <p>Past installations / process / event atmosphere</p>
        </div>

        <div className="signal-cube">
          <div className="signal-cube-face face-front" />
          <div className="signal-cube-face face-back" />
          <div className="signal-cube-face face-left" />
          <div className="signal-cube-face face-right" />
          <div className="signal-cube-face face-top" />
          <div className="signal-cube-face face-bottom" />
        </div>
      </div>

      <div className="archive-strip">
        {archivePanels.map((panel) => (
          <article key={panel.id} className="archive-card">
            <div className={`archive-card-media ${panel.id}`} />
            <div className="archive-card-copy">
              <span>{panel.label}</span>
              <p>{panel.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function ProjectColumn({
  title,
  projects,
  expandedCards,
  onToggle,
}: {
  title: ExhibitionProject["category"]
  projects: ExhibitionProject[]
  expandedCards: Record<string, boolean>
  onToggle: (id: string) => void
}) {
  return (
    <div className="project-column">
      <div className="column-heading">
        <h2>{title}</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={Boolean(expandedCards[project.id])}
            onToggle={() => onToggle(project.id)}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: ExhibitionProject
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <article className={`project-card ${expanded ? "is-expanded" : ""}`}>
      <div className="project-image-placeholder" aria-label={`Placeholder image for ${project.title}`}>
        <div className="image-crosshair">
          <span />
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="coordinate-chip">{project.coordinate}</span>
        </div>

        <h3>{project.title}</h3>

        <p className={`project-description ${expanded ? "expanded" : "collapsed"}`}>{project.description}</p>

        <p className="team-line">
          <span>Group members</span>
          {project.team}
        </p>

        <button className="read-more-button" type="button" onClick={onToggle} aria-expanded={expanded}>
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </article>
  )
}

function BottomTicker() {
  return (
    <aside className="bottom-ticker" aria-label="Event date, time and location">
      <div className="ticker-window">
        <div className="ticker-marquee">
          <div className="ticker-track">
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
          </div>

          <div className="ticker-track" aria-hidden="true">
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
            <span>{eventTickerText}</span>
            <span className="ticker-separator">◆</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
