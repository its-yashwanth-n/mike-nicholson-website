import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface CarouselProps {
  images: { src: string; alt: string }[]
  label: string
  autoPlay?: boolean
  intervalMs?: number
}

export function Carousel({ images, label, autoPlay = true, intervalMs = 6000 }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const goTo = (next: number) => setIndex((next + images.length) % images.length)

  useEffect(() => {
    if (!autoPlay || reducedMotion || paused || images.length <= 1) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs)
    return () => window.clearInterval(id)
  }, [autoPlay, reducedMotion, paused, images.length, intervalMs])

  if (images.length === 0) return null
  const current = images[index]

  return (
    // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- carousel container needs hover/focus/swipe handling; all controls inside are focusable buttons
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="relative overflow-hidden rounded-2xl border border-border bg-ink shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goTo(index - 1)
        if (e.key === 'ArrowRight') goTo(index + 1)
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 40) goTo(delta > 0 ? index - 1 : index + 1)
        touchStartX.current = null
      }}
    >
      <div className="aspect-[4/3] w-full sm:aspect-video">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="size-full object-contain"
        />
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {images.length}: {current.alt}
      </p>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-ink shadow-card transition-colors hover:bg-surface"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-ink shadow-card transition-colors hover:bg-surface"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`size-2 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
