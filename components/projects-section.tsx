"use client"

import { ProjectCard } from "@/components/project-card"

const dniProjects = Array.from({ length: 20 }, (_, i) => ({
  id: `D${i + 1}`,
  title: `Interactive Experience ${i + 1}`,
  description: "An innovative exploration of human-computer interaction through novel input methods and immersive feedback systems.",
  team: `Team ${["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa"][i % 10]}`,
}))

const gameProjects = Array.from({ length: 20 }, (_, i) => ({
  id: `G${i + 1}`,
  title: `Game Project ${i + 1}`,
  description: "A compelling game design that pushes the boundaries of player engagement and narrative storytelling.",
  team: `Studio ${["Phoenix", "Dragon", "Griffin", "Sphinx", "Chimera", "Hydra", "Cerberus", "Minotaur", "Kraken", "Pegasus"][i % 10]}`,
}))

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - DNI Projects */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground bg-background py-4 border-b border-border flex-shrink-0">
              Designing Novel Interactions
            </h2>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin">
              {dniProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  team={project.team}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Game Design Projects */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground bg-background py-4 border-b border-border flex-shrink-0">
              Game Design
            </h2>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin">
              {gameProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  team={project.team}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
