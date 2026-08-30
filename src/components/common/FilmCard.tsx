import { Play, ZoomIn } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { useVimeoThumbnail } from '@/hooks/useVimeoThumbnail'
import { youtubeThumbnail } from '@/lib/videoThumbnail'
import type { Film } from '@/types/content'

interface FilmCardProps {
  film: Film
  onOpenVideo: (film: Film) => void
  onOpenImage: (image: { img: string; title: string }) => void
}

/** A film entry with only `img`+`title` (no id/source) is a standalone photo. */
function isPhoto(film: Film): film is Film & { img: string } {
  return !film.source && !film.id && !!film.img
}

export function FilmCard({ film, onOpenVideo, onOpenImage }: FilmCardProps) {
  const photo = isPhoto(film)
  // Pages like Rowing mount 100+ cards at once — only fire the Vimeo oEmbed fetch once a card
  // is actually scrolled near the viewport, instead of every card firing on mount.
  const { ref, inView } = useInView<HTMLDivElement>()
  const vimeoThumb = useVimeoThumbnail(
    inView && !photo && film.source === 'vimeo' && !film.img ? film.id : undefined,
  )

  const thumbnail =
    film.img ??
    (!photo && film.source === 'youtube' && film.id ? youtubeThumbnail(film.id) : undefined) ??
    (!photo && film.source === 'vimeo' ? vimeoThumb : undefined)

  const handleClick = () => {
    if (photo) {
      onOpenImage({ img: film.img, title: film.title })
    } else {
      onOpenVideo(film)
    }
  }

  return (
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-xl border bg-surface shadow-card transition-transform hover:-translate-y-0.5 ${
        film.featured ? 'border-accent ring-1 ring-accent/40' : 'border-border'
      }`}
    >
      <button type="button" onClick={handleClick} className="flex flex-1 flex-col text-left">
        <span className="relative aspect-video w-full overflow-hidden bg-ink/10">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt=""
              loading="lazy"
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="flex size-full items-center justify-center bg-accent-soft text-accent">
              {photo ? (
                <ZoomIn className="size-6" aria-hidden="true" />
              ) : (
                <Play className="size-6" aria-hidden="true" />
              )}
            </span>
          )}
          <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/20">
            <span className="flex size-10 items-center justify-center rounded-full bg-surface/90 text-accent opacity-0 shadow-card transition-opacity group-hover:opacity-100">
              {photo ? (
                <ZoomIn className="size-5" aria-hidden="true" />
              ) : (
                <Play className="size-5 translate-x-0.5" aria-hidden="true" />
              )}
            </span>
          </span>
          {film.featured && (
            <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white">
              Featured
            </span>
          )}
        </span>
        <span className="px-3 py-2.5 text-sm font-medium text-text">{film.title}</span>
      </button>
      {film.docLink && (
        <a
          href={film.docLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-t border-border px-3 py-2 text-xs font-medium text-accent hover:underline"
        >
          {film.docLink.label}
        </a>
      )}
    </div>
  )
}
