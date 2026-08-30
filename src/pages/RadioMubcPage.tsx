import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { ExternalLinkCard } from '@/components/common/ExternalLinkCard'
import { radioTranscript, type RadioBlock } from '@/data/radioMubc'

function linkLabel(href: string) {
  if (href.includes('vimeo.com')) return `Watch on Vimeo — ${href}`
  if (href.includes('youtu.be') || href.includes('youtube.com')) return `Watch on YouTube — ${href}`
  if (href.includes('spotify.com')) return `Listen on Spotify — ${href}`
  return href
}

function Block({ block }: { block: RadioBlock }) {
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
      return <ExternalLinkCard title={linkLabel(block.href)} url={block.href} compact />
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
          <Block key={i} block={block} />
        ))}
      </article>
    </div>
  )
}
