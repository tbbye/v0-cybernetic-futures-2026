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

const eventTickerText =
  "Friday 29 May (11am–5pm: public showcase, 6–8pm: awards ceremony). Melbourne Connect, Superfloor, 700 Swanston St, Carlton VIC 3053"

const makePlaceholderProjects = (
  category: ExhibitionProject["category"],
  idPrefix: "dni" | "game",
  coordinatePrefix: "DNI" | "GD",
): ExhibitionProject[] =>
  Array.from({ length: 15 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0")

    return {
      id: `${idPrefix}-${number}`,
      category,
      coordinate: `${coordinatePrefix}${index + 1}`,
      title: `Project ${number}`,
      description:
        `Placeholder description for ${category} project ${number}. Replace this with the final project description when available.`,
      team: "TBA",
    }
  })

const projects: ExhibitionProject[] = [
  ...makePlaceholderProjects("Designing Novel Interactions", "dni", "DNI"),
  ...makePlaceholderProjects("Game Design", "game", "GD"),
]
const organisers: Organiser[] = [
  { id: "org-01", name: "TBA", role: "Exhibition Coordination" },
  { id: "org-02", name: "TBA", role: "Curatorial Support" },
  { id: "org-03", name: "TBA", role: "Technical Support" },
  { id: "org-04", name: "TBA", role: "Event Assistance" },
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
            Placeholder floor plan. Coordinates shown on each project card can later be mapped to this exhibition
            layout.
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

      <HeaderCubeVisual />
    </header>
  )
}

function HeaderCubeVisual() {
  return (
    <div className="header-cube-visual" aria-hidden="true">
      <div className="signal-cube">
        <div className="signal-cube-face face-front" />
        <div className="signal-cube-face face-back" />
        <div className="signal-cube-face face-left" />
        <div className="signal-cube-face face-right" />
        <div className="signal-cube-face face-top" />
        <div className="signal-cube-face face-bottom" />
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
