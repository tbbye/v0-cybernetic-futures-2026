import Image from "next/image"

export function FloorPlan() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-secondary-foreground">
          Exhibition Floor Plan
        </h2>
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-border shadow-sm bg-card">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Floor+Plan+Map"
            alt="Exhibition Floor Plan"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Navigate the exhibition space
        </p>
      </div>
    </section>
  )
}
