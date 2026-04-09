"use client"

const gearPath = "M50 10 L53 10 L54 15 C58 15.5 61.5 16.5 64.5 18 L68 14 L70.5 16 L68 21 C71 23.5 73.5 26.5 75.5 30 L81 28 L82.5 31 L78 35 C79.5 38.5 80.5 42 81 46 L86 47 L86 50 L81 51 C80.5 55 79.5 58.5 78 62 L82.5 66 L81 69 L75.5 67 C73.5 70.5 71 73.5 68 76 L70.5 81 L68 83 L64.5 79 C61.5 80.5 58 81.5 54 82 L53 87 L50 87 L49 82 C45 81.5 41.5 80.5 38.5 79 L35 83 L32.5 81 L35 76 C32 73.5 29.5 70.5 27.5 67 L22 69 L20.5 66 L25 62 C23.5 58.5 22.5 55 22 51 L17 50 L17 47 L22 46 C22.5 42 23.5 38.5 25 35 L20.5 31 L22 28 L27.5 30 C29.5 26.5 32 23.5 35 21 L32.5 16 L35 14 L38.5 18 C41.5 16.5 45 15.5 49 15 L50 10 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35"

export function GearBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large gear top right */}
      <svg
        className="absolute -top-20 -right-20 w-96 h-96 text-gray-500 opacity-[0.40] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Large gear bottom left */}
      <svg
        className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] text-gray-600 opacity-[0.35] animate-spin-slow-reverse"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Medium gear center right */}
      <svg
        className="absolute top-1/2 -right-12 w-56 h-56 text-gray-500 opacity-[0.38] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Medium gear top left */}
      <svg
        className="absolute top-32 -left-16 w-48 h-48 text-gray-600 opacity-[0.32] animate-spin-slow-reverse"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Small gear top center */}
      <svg
        className="absolute top-20 left-1/3 w-32 h-32 text-gray-500 opacity-[0.30] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Small gear bottom right */}
      <svg
        className="absolute bottom-40 right-20 w-40 h-40 text-gray-600 opacity-[0.32] animate-spin-slow-reverse"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Tiny gear center left */}
      <svg
        className="absolute top-2/3 left-20 w-24 h-24 text-gray-500 opacity-[0.28] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>

      {/* Medium gear bottom center */}
      <svg
        className="absolute -bottom-8 left-1/2 w-44 h-44 text-gray-600 opacity-[0.32] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d={gearPath} />
      </svg>
    </div>
  )
}
