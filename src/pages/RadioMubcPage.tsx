import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { ExternalLinkCard } from '@/components/common/ExternalLinkCard'
import { SpotifyEmbed } from '@/components/common/SpotifyEmbed'
import { FilmCard } from '@/components/common/FilmCard'
import { VideoModal } from '@/components/common/VideoModal'
import { radioTranscript, type RadioBlock } from '@/data/radioMubc'
import type { Film } from '@/types/content'

function Block({ block, onOpenVideo }: { block: RadioBlock; onOpenVideo: (film: Film) => void }) {
  switch (block.type) {
    case 'line': {
      const isHost = block.speaker === 'host'
      return (
        <div
          className={`rounded-xl border-l-4 p-4 shadow-card ${
            isHost ? 'border-secondary bg-secondary-soft/40' : 'border-accent bg-accent-soft/50'
          }`}
        >
          <p className={`text-xs font-bold tracking-wide uppercase ${isHost ? 'text-secondary' : 'text-accent'}`}>
            {isHost ? 'Radio MUBC' : 'Mike'}
          </p>
          <p className="mt-1 text-base leading-relaxed text-text">{block.text}</p>
        </div>
      )
    }
    case 'link':
      return <ExternalLinkCard title={block.href} url={block.href} compact />
    case 'video':
      return (
        <div className="max-w-sm">
          <FilmCard film={block.film} onOpenVideo={onOpenVideo} onOpenImage={() => {}} />
        </div>
      )
    case 'spotify':
      return <SpotifyEmbed href={block.href} title="MUBC Radio interview on Spotify" />
    case 'images':
      return (
        <div className={`grid gap-3 ${block.items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {block.items.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full rounded-xl border border-border object-cover shadow-card"
            />
          ))}
        </div>
      )
  }
}

export function RadioMubcPage() {
  const [openVideo, setOpenVideo] = useState<Film | null>(null)

  return (
    <div className="space-y-12">
      <PageHero title="Radio MUBC" intro="A special guest interview with Mike Nicholson.">
        <Link
          to="/brissy-32"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Rowing Towards Brissy ’2032
        </Link>
      </PageHero>

      <article className="mx-auto max-w-3xl space-y-4">
        {radioTranscript.map((block, i) => (
          <Block key={i} block={block} onOpenVideo={setOpenVideo} />
        ))}
      </article>

      <VideoModal film={openVideo} onClose={() => setOpenVideo(null)} />
    </div>
  )
}
