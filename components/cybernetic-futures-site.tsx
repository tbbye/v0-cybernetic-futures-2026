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

const projects: ExhibitionProject[] = [
  {
    id: "dni-01",
    category: "Designing Novel Interactions",
    coordinate: "DNI-01 / GRID A3",
    title: "Haptic Feedback Glove System",
    description:
      "An innovative exploration of human-computer interaction through novel input methods and immersive feedback systems. This project investigates the potential of wearable haptic devices to enhance user engagement in virtual environments. Our team developed a prototype glove that provides precise tactile feedback, allowing users to feel virtual textures and objects. The system integrates pressure sensors, vibration motors, and thermal elements to create a multi-sensory experience.",
    team: "Team Alpha",
  },
  {
    id: "dni-02",
    category: "Designing Novel Interactions",
    coordinate: "DNI-02 / GRID B1",
    title: "Interactive Experience 2",
    description:
      "A speculative interaction project exploring how responsive environments can shift attention, perception, and presence. The work combines physical interfaces, digital feedback, and experimental interaction patterns to question how users move through mediated spaces.",
    team: "Team Beta",
  },
  {
    id: "game-01",
    category: "Game Design",
    coordinate: "GD-01 / GRID D1",
    title: "Game Project 1",
    description:
      "A compelling game design project that pushes the boundaries of player engagement and narrative storytelling. The game explores how distraction, decision-making, and visual rhythm can influence the player’s sense of agency.",
    team: "Studio Phoenix",
  },
  {
    id: "game-02",
    category: "Game Design",
    coordinate: "GD-02 / GRID D3",
    title: "Game Project 2",
    description:
      "A digital game experience focused on tension, movement, and player interpretation. The project examines how rule systems, feedback loops, and interactive uncertainty create meaningful play.",
    team: "Studio Hydra",
  },
]

const organisers: Organiser[] = [
  {
    id: "org-01",
    name: "TBA",
    role: "Exhibition Coordination",
  },
  {
    id: "org-02",
    name: "TBA",
    role: "Curatorial Support",
  },
  {
    id: "org-03",
    name: "TBA",
    role: "Technical Support",
  },
  {
    id: "org-04",
    name: "TBA",
    role: "Event Assistance",
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
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14

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

      <div className="hero-emblem" aria-hidden="true">
        <GearCluster />
      </div>
    </header>
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
          <span className="coordinate-chip small">{project.coordinate}</span>
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

function GearCluster() {
  return (
    <div className="gear-cluster">
      <svg className="gear gear-large" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="60" cy="60" r="18" />
          <circle cx="60" cy="60" r="34" />
          <path d="M60 8v16M60 96v16M8 60h16M96 60h16M23 23l11 11M86 86l11 11M97 23L86 34M34 86L23 97" />
        </g>
      </svg>

      <svg className="gear gear-medium" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="5">
          <circle cx="50" cy="50" r="14" />
          <circle cx="50" cy="50" r="28" />
          <path d="M50 6v12M50 82v12M6 50h12M82 50h12M20 20l9 9M71 71l9 9M80 20l-9 9M29 71l-9 9" />
        </g>
      </svg>

      <svg className="gear gear-small" viewBox="0 0 80 80" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <circle cx="40" cy="40" r="12" />
          <circle cx="40" cy="40" r="22" />
          <path d="M40 6v10M40 64v10M6 40h10M64 40h10M16 16l7 7M57 57l7 7M64 16l-7 7M23 57l-7 7" />
        </g>
      </svg>
    </div>
  )
}
