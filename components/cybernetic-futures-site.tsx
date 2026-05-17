"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type ExhibitionProject = {
  id: string
  category: "Designing Novel Interactions" | "Game Design"
  coordinate: string
  title: string
  premise?: string
  description: string
  team: string
  materials?: string
  image?: string
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
  coordinatePrefix: "DNI" | "G",
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

const designingNovelInteractionsProjects: ExhibitionProject[] = makePlaceholderProjects(
  "Designing Novel Interactions",
  "dni",
  "DNI",
)

const gameDesignProjects: ExhibitionProject[] = [
  {
    id: "game-01",
    category: "Game Design",
    coordinate: "G1",
    title: "Project 01",
    description:
      "Placeholder description for Game Design project 01. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-02",
    category: "Game Design",
    coordinate: "G2",
    title: "Space Cats",
    image: "/project-images/Space%20Cats.jpg",
    premise:
      "Space Cats is a 3–5 player social deduction and hand management game. Play as one of seven Catronauts stranded in space and race to be the first one home!",
    description:
      "Space Cats' primary objective is to build your spaceship and be the first Catronaut back on Earth. Each player requires a unique combination of ship parts, decided by a randomly drawn spaceship schematic, though multiple players may be gunning for the same parts. Players are assigned one Catronaut with special abilities that can propel their progress or slow others down. Players must track tokens, cards, action histories, and behaviours, reinforcing the theme of distraction.",
    team: "Tyra Saavedra, Katja Zumpe, Sabrina Cahyarani",
    materials:
      "Cards made with Clip Studio Paint, Canva, paper, printer, and laminator. Tokens made with Bambu Lab 3D printer. Sell sheet and rule sheet made with Clip Studio Paint, Canva, paper, printer, and binder. Spaceship schematics made with Canva, Google Slides, paper, printer, and laser cutter. Physical ship parts made with AutoCAD, Bambu Lab 3D Printer, and spray paint.",
  },
  {
    id: "game-03",
    category: "Game Design",
    coordinate: "G3",
    title: "Starchitect",
    image: "/project-images/Starchitects.png",
    premise:
      "Boom! The Big Bang just happened: There’s work to do! Race against other space-fame-hungry Starchitects to create new constellations and write your name in the stars.",
    description:
      "Make your claim through the big-bang space race by creating the most constellations in the system. Place, claim and battle for high-value space realty, play powerful Planet cards against star-struck opponents, and mix up the planisphere with a myriad of space conditions to become the best Starchitect.",
    team: "Phoebe Biggin, Ryan Pham, Matthew McConnell",
    materials:
      "Components include game board panels, 1 dice, 120 star tokens, 12 special star tokens, 10 Environment cards, 60 Constellation cards, 40 Planet cards, score tokens, rules book, box, and pouches. Tools used include Adobe Illustrator, Adobe InDesign, Adobe Photoshop, TinkerCAD, Rhino 3D, laser cutter, 3D printer, and plotter printer.",
  },
  {
    id: "game-04",
    category: "Game Design",
    coordinate: "G4",
    title: "Project 04",
    description:
      "Placeholder description for Game Design project 04. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-05",
    category: "Game Design",
    coordinate: "G5",
    title: "Project 05",
    description:
      "Placeholder description for Game Design project 05. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-06",
    category: "Game Design",
    coordinate: "G6",
    title: "Fame Frenzy",
    image: "/project-images/Fame%20Frenzy.jpg",
    premise:
      "Fame Frenzy is a fast-paced card game for 2–6 players, taking place in a world where clout is everything.",
    description:
      "Fame Frenzy is a turn-based card game where each player’s goal is to accumulate the highest number of fan tokens before the End card is drawn. Players begin with five tokens and a Character card, then choose between safer Action cards and riskier Sabotage cards that can steal tokens, change turn order, or target opponents. The theme of distraction appears through uncertainty, temptation, and high-stakes choices.",
    team: "Uchai Lee, Seoyoung Min, Yeongseo Lee",
    materials:
      "Game components include 38 Action cards, 25 Sabotage cards, 6 Character cards, 60 tokens, and a manual. Cards were made in Figma, printed on 300gsm paper, and placed into transparent card sleeves.",
  },
  {
    id: "game-07",
    category: "Game Design",
    coordinate: "G7",
    title: "Project 07",
    description:
      "Placeholder description for Game Design project 07. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-08",
    category: "Game Design",
    coordinate: "G8",
    title: "Project 08",
    description:
      "Placeholder description for Game Design project 08. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-09",
    category: "Game Design",
    coordinate: "G9",
    title: "Project 09",
    description:
      "Placeholder description for Game Design project 09. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-10",
    category: "Game Design",
    coordinate: "G10",
    title: "Project 10",
    description:
      "Placeholder description for Game Design project 10. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-11",
    category: "Game Design",
    coordinate: "G11",
    title: "Project 11",
    description:
      "Placeholder description for Game Design project 11. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-12",
    category: "Game Design",
    coordinate: "G12",
    title: "Project 12",
    description:
      "Placeholder description for Game Design project 12. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-13",
    category: "Game Design",
    coordinate: "G13",
    title: "Project 13",
    description:
      "Placeholder description for Game Design project 13. Replace this with the final project description when available.",
    team: "TBA",
  },
  {
    id: "game-14",
    category: "Game Design",
    coordinate: "G14",
    title: "Market Movers",
    image: "/project-images/Market%20Movers.jpg",
    premise:
      "When corruption is the aim and collusion is the game, do you have what it takes to lie, cheat, and back-stab your way to the top?",
    description:
      "Market Movers is a competitive card-slinging hidden-role game where players manipulate the value of companies to fulfil daily Objectives and long-term Roles. Set around the charmingly clunky early internet, players place face-down Movers, secretly select Objectives, and reveal lies, backstabs, and corporate manipulation as the market opens.",
    team: "Ethan Wang, Leo Wei, Alex Vu",
    materials:
      "Cards use 600gsm hand-cut cardstock with colour-printed fronts and backs. Player mats and company placemats use 1mm hand-cut cardboard with colour-printed fronts and backs. The valuation tracker uses 3mm timber, laser cutting, book-binder folding, and colour-printed paper. Company tokens use 6mm pony beads. Tools used include Affinity, laser cutter, printer, and general stationery.",
  },
  {
    id: "game-15",
    category: "Game Design",
    coordinate: "G15",
    title: "Voltage",
    image: "/project-images/Voltage.jpeg",
    premise:
      "In a neon-drenched future, rival energy corporations battle to dominate the city’s power grid by redirecting laser beams, deploying mirrors, and sabotaging opponents.",
    description:
      "In Voltage, 2–4 players take the role of rival cyberpunk energy corporations competing to control a futuristic city’s power grid. Each player has a fixed laser emitter and must route their beam through three shared checkpoints. Players place mirrors, rotate mirrors, block beams with walls, and use special tokens to remove obstacles or take two actions in one turn.",
    team: "Arnav Rajesh Salian, Minh Hung Nguyen, Alex Okula",
    materials:
      "Game components include tokens, grid board, power companies, mirror tiles, and wall tiles. Tools and software used include laser cutter and Blender.",
  },
]

const projects: ExhibitionProject[] = [
  ...designingNovelInteractionsProjects,
  ...gameDesignProjects,
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
  const introText = project.premise ?? project.description
  const descriptionText = project.premise ? project.description : ""

  return (
    <article className={`project-card ${expanded ? "is-expanded" : ""}`}>
      <div className={`project-image-placeholder ${project.image ? "has-image" : ""}`}>
        {project.image ? (
          <img src={project.image} alt={`${project.title} project image`} />
        ) : (
          <div className="image-crosshair">
            <span />
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="coordinate-chip">{project.coordinate}</span>
        </div>

        <h3>{project.title}</h3>

        <p className={`project-description ${expanded ? "expanded" : "collapsed"}`}>
          {introText}
        </p>

        {expanded && descriptionText ? (
          <p className="team-line">
            <span>Description</span>
            {descriptionText}
          </p>
        ) : null}

        <p className="team-line">
          <span>Group members</span>
          {project.team}
        </p>

        {expanded && project.materials ? (
          <p className="team-line">
            <span>Materials and tools</span>
            {project.materials}
          </p>
        ) : null}

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
