import Image from "next/image"

function LightningBolt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

export function FloorPlan() {
  return (
    <section className="py-6 px-4 bg-primary relative overflow-hidden">
      {/* Background Lightning Bolts - Yellow and Animated */}
      <div className="absolute inset-0 pointer-events-none">
        <LightningBolt className="absolute top-4 left-8 w-12 h-12 text-yellow-400/60 animate-bounce-float-1" />
        <LightningBolt className="absolute top-8 right-12 w-8 h-8 text-yellow-300/50 animate-bounce-float-2" />
        <LightningBolt className="absolute bottom-6 left-16 w-10 h-10 text-yellow-400/40 animate-bounce-float-3" />
        <LightningBolt className="absolute bottom-4 right-8 w-14 h-14 text-yellow-300/60 animate-bounce-float-1" />
        <LightningBolt className="absolute top-1/2 left-4 w-6 h-6 text-yellow-400/35 animate-bounce-float-2" />
        <LightningBolt className="absolute top-1/3 right-4 w-10 h-10 text-yellow-300/45 animate-bounce-float-3" />
        <LightningBolt className="absolute bottom-1/3 left-1/4 w-8 h-8 text-yellow-400/40 animate-bounce-float-1" />
        <LightningBolt className="absolute top-6 left-1/3 w-6 h-6 text-yellow-300/50 animate-bounce-float-2" />
        <LightningBolt className="absolute bottom-8 right-1/4 w-12 h-12 text-yellow-400/45 animate-bounce-float-3" />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
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
