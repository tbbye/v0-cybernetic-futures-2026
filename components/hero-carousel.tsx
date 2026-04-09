"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  { id: 1, alt: "Exhibition showcase 1" },
  { id: 2, alt: "Exhibition showcase 2" },
  { id: 3, alt: "Exhibition showcase 3" },
  { id: 4, alt: "Exhibition showcase 4" },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`/placeholder.svg?height=800&width=1600&text=Exhibition+Image+${slide.id}`}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        </div>
      ))}
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight text-balance">
          Cybernetic Futures 2026
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-light">
          University of Melbourne Showcase
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
