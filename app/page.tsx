import { GearBackground } from "@/components/gear-background"
import { HeroCarousel } from "@/components/hero-carousel"
import { FloorPlan } from "@/components/floor-plan"
import { ProjectsSection } from "@/components/projects-section"
import { OrganisersSection } from "@/components/organisers-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <GearBackground />
      <main className="relative z-10">
        <HeroCarousel />
        <FloorPlan />
        <ProjectsSection />
        <OrganisersSection />
      </main>
      <SiteFooter />
    </div>
  )
}
