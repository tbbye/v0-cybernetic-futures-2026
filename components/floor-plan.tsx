import Image from "next/image"

export function FloorPlan() {
  return (
    <section className="py-6 px-4 bg-primary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 text-white">
          Exhibition Floor Plan
        </h2>
        <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Floor+Plan+Map"
            alt="Exhibition Floor Plan"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-center text-sm text-white/70 mt-3">
          Navigate the exhibition space
        </p>
      </div>
    </section>
  )
}
