"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type ExhibitionProject = {
  id: string
  category: "Designing Novel Interactions" | "Game Design"
  coordinate: string
  title: string
  entries: [string, string, string]
  description: string
  team: string
}

const eventTickerText =
  "Friday 29 May (11am–5pm: public showcase, 6–8pm: awards ceremony). Melbourne Connect, Superfloor, 700 Swanston St, Carlton VIC 3053"

const projects: ExhibitionProject[] = [
  {
    id: "dni-01",
    category: "Designing Novel Interactions",
    coordinate: "DNI-01 / GRID A3",
    title: "Haptic Feedback Glove System",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "An innovative exploration of human-computer interaction through novel input methods and immersive feedback systems. This project investigates the potential of wearable haptic devices to enhance user engagement in virtual environments. Our team developed a prototype glove that provides precise tactile feedback, allowing users to feel virtual textures and objects. The system integrates pressure sensors, vibration motors, and thermal elements to create a multi-sensory experience.",
    team: "Team Alpha",
  },
  {
    id: "dni-02",
    category: "Designing Novel Interactions",
    coordinate: "DNI-02 / GRID B1",
    title: "Interactive Experience 2",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "A speculative interaction project exploring how responsive environments can shift attention, perception, and presence. The work combines physical interfaces, digital feedback, and experimental interaction patterns to question how users move through mediated spaces.",
    team: "Team Beta",
  },
  {
    id: "dni-03",
    category: "Designing Novel Interactions",
    coordinate: "DNI-03 / GRID B4",
    title: "Interactive Experience 3",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "A prototype-driven investigation into embodied interaction, sensory disruption, and the boundaries between human intention and machine response. The project invites users to test how subtle interface changes alter behaviour and interpretation.",
    team: "Team Gamma",
  },
  {
    id: "dni-04",
    category: "Designing Novel Interactions",
    coordinate: "DNI-04 / GRID C2",
    title: "Interactive Experience 4",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "An experimental interface system that studies attention, feedback, and interactive ambiguity. The project uses real-time input, reactive visuals, and physical cues to produce a layered digital experience.",
    team: "Team Delta",
  },
  {
    id: "game-01",
    category: "Game Design",
    coordinate: "GD-01 / GRID D1",
    title: "Game Project 1",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "A compelling game design project that pushes the boundaries of player engagement and narrative storytelling. The game explores how distraction, decision-making, and visual rhythm can influence the player’s sense of agency.",
    team: "Studio Phoenix",
  },
  {
    id: "game-02",
    category: "Game Design",
    coordinate: "GD-02 / GRID D3",
    title: "Game Project 2",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "A digital game experience focused on tension, movement, and player interpretation. The project examines how rule systems, feedback loops, and interactive uncertainty create meaningful play.",
    team: "Studio Hydra",
  },
  {
    id: "game-03",
    category: "Game Design",
    coordinate: "GD-03 / GRID E2",
    title: "Game Project 3",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "A game design prototype exploring atmosphere, player motivation, and emergent behaviour. The experience uses layered mechanics and environmental storytelling to create a distinct sense of progression.",
    team: "Studio Neon",
  },
  {
    id: "game-04",
    category: "Game Design",
    coordinate: "GD-04 / GRID F1",
    title: "Game Project 4",
    entries: ["TBA", "TBA", "TBA"],
    description:
      "An experimental playable system that investigates distraction as both obstacle and mechanic. Players must navigate competing signals, unstable feedback, and shifting objectives.",
    team: "Studio Voltage",
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
        <div className="section-kicker">Navigation / Exhibition Map</div>
        <div className="section-heading-row">
          <h2 id="floor-plan-heading">Exhibition Floor Plan</h2>
          <span className="coordinate-chip">MAP-00 / SUPERFLOOR</span>
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
        <p className="hero-subheading">University of Melbourne</p>
      </div>

      <div className="hero-emblem" aria-hidden="true">
        <CyberSkull />
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
        <span>{projects.length.toString().padStart(2, "0")} exhibits</span>
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

        <div className="entry-grid" aria-label="Exhibition text entries">
          {project.entries.map((entry, index) => (
            <div className="entry-pill" key={`${project.id}-entry-${index}`}>
              <span>Entry {index + 1}</span>
              <strong>{entry}</strong>
            </div>
          ))}
        </div>

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
      <div className="ticker-label">Event Details</div>
      <div className="ticker-window">
        <div className="ticker-vertical">
          <span>{eventTickerText}</span>
          <span>{eventTickerText}</span>
          <span>{eventTickerText}</span>
          <span>{eventTickerText}</span>
        </div>
      </div>
    </aside>
  )
}

function CyberSkull() {
  return (
    <svg viewBox="0 0 260 260" role="img" aria-label="Pink cybernetic skull emblem">
      <defs>
        <filter id="pink-glow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M130 18 C74 18 40 56 40 110 C40 142 54 162 73 176 L73 213 L101 213 L101 193 L117 193 L117 213 L143 213 L143 193 L159 193 L159 213 L187 213 L187 176 C206 162 220 142 220 110 C220 56 186 18 130 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinejoin="round"
        filter="url(#pink-glow)"
      />

      <path
        d="M77 106 L104 88 L126 108 L105 131 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M183 106 L156 88 L134 108 L155 131 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      <path d="M130 126 L116 158 L144 158 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />

      <path d="M91 174 L169 174" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M102 190 L158 190" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

      <path d="M22 130 L2 130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M258 130 L238 130" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 2 L130 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 236 L130 258" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

      <circle cx="130" cy="130" r="118" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="130" cy="130" r="84" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    </svg>
  )
}
