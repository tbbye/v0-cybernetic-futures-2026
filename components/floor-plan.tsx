import Image from "next/image"

function LightningBolt({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

export function FloorPlan() {
  return (
    <section className="py-6 px-4 bg-primary/90 relative overflow-hidden">
      {/* Background Lightning Bolts - Yellow, Erratic, Various Sizes and Orientations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large bolts */}
        <LightningBolt className="absolute top-2 left-[5%] w-16 h-16 text-yellow-400/55 animate-bounce-float-1" style={{ transform: 'rotate(-25deg)' }} />
        <LightningBolt className="absolute bottom-3 right-[8%] w-20 h-20 text-yellow-300/50 animate-bounce-float-2" style={{ transform: 'rotate(35deg)' }} />
        
        {/* Medium bolts */}
        <LightningBolt className="absolute top-[15%] right-[15%] w-10 h-10 text-yellow-400/45 animate-bounce-float-3" style={{ transform: 'rotate(70deg)' }} />
        <LightningBolt className="absolute bottom-[20%] left-[12%] w-12 h-12 text-yellow-300/55 animate-bounce-float-1" style={{ transform: 'rotate(-50deg)' }} />
        <LightningBolt className="absolute top-[40%] left-[3%] w-9 h-9 text-yellow-400/40 animate-bounce-float-2" style={{ transform: 'rotate(120deg)' }} />
        <LightningBolt className="absolute top-[30%] right-[5%] w-14 h-14 text-yellow-300/50 animate-bounce-float-3" style={{ transform: 'rotate(-85deg)' }} />
        
        {/* Small bolts */}
        <LightningBolt className="absolute top-[60%] right-[20%] w-6 h-6 text-yellow-400/60 animate-bounce-float-1" style={{ transform: 'rotate(45deg)' }} />
        <LightningBolt className="absolute bottom-[35%] left-[25%] w-5 h-5 text-yellow-300/45 animate-bounce-float-2" style={{ transform: 'rotate(-135deg)' }} />
        <LightningBolt className="absolute top-[10%] left-[40%] w-7 h-7 text-yellow-400/50 animate-bounce-float-3" style={{ transform: 'rotate(90deg)' }} />
        <LightningBolt className="absolute bottom-[10%] right-[35%] w-8 h-8 text-yellow-300/55 animate-bounce-float-1" style={{ transform: 'rotate(-20deg)' }} />
        
        {/* Tiny bolts */}
        <LightningBolt className="absolute top-[50%] left-[18%] w-4 h-4 text-yellow-400/65 animate-bounce-float-2" style={{ transform: 'rotate(160deg)' }} />
        <LightningBolt className="absolute bottom-[45%] right-[28%] w-4 h-4 text-yellow-300/60 animate-bounce-float-3" style={{ transform: 'rotate(-70deg)' }} />
        <LightningBolt className="absolute top-[75%] right-[45%] w-5 h-5 text-yellow-400/45 animate-bounce-float-1" style={{ transform: 'rotate(110deg)' }} />
        <LightningBolt className="absolute top-[5%] right-[50%] w-6 h-6 text-yellow-300/50 animate-bounce-float-2" style={{ transform: 'rotate(-40deg)' }} />
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
