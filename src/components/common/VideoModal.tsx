import { ModalShell } from '@/components/common/ModalShell'
import type { Film } from '@/types/content'

interface VideoModalProps {
  film: Film | null
  onClose: () => void
}

export function VideoModal({ film, onClose }: VideoModalProps) {
  return (
    <ModalShell open={film !== null} onClose={onClose} title={film?.title ?? ''}>
      {film && (
        <div className="aspect-video w-full bg-ink">
          {film.source === 'youtube' && film.id && (
            <iframe
              className="size-full"
              src={`https://www.youtube.com/embed/${film.id}?autoplay=1&rel=0`}
              title={film.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
          {film.source === 'vimeo' && film.id && (
            <iframe
              className="size-full"
              src={`https://player.vimeo.com/video/${film.id}?autoplay=1`}
              title={film.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
          {film.source === 'local' && film.src && (
            // eslint-disable-next-line jsx-a11y/media-has-caption -- archival home-video footage has no caption track
            <video className="size-full" src={film.src} controls autoPlay poster={film.img} />
          )}
        </div>
      )}
    </ModalShell>
  )
}
