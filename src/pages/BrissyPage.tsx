import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import {
  brissyIntro,
  brissyApp,
  brissyTrophiesIntro,
  brissyTrophies,
  brissyOutro,
  brissyReviews,
  brissySignature,
  brissyPhotos,
  brissyPhotoCaption,
  type BrissyBlock,
} from '@/data/brissy'
import type { TravelVideo } from '@/types/content'

function videoSrc(video: TravelVideo) {
  return video.source === 'youtube'
    ? `https://www.youtube.com/embed/${video.id}?rel=0`
    : `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`
}

function VideoEmbed({ video, title }: { video: TravelVideo; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-ink shadow-card">
      <iframe
        className="size-full"
        src={videoSrc(video)}
        title={title}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function Block({ block }: { block: BrissyBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-xl font-bold tracking-tight text-text sm:text-2xl">{block.text}</h2>
    case 'paragraph':
      return <p className="text-base leading-relaxed text-text-muted">{block.text}</p>
    case 'highlight':
      return (
        <p className="rounded-xl border border-accent/30 bg-accent-soft p-5 text-base font-semibold leading-relaxed text-text underline decoration-accent/40 underline-offset-4">
          {block.text}
        </p>
      )
    case 'dialogue':
      return (
        <blockquote className="space-y-2 border-l-4 border-secondary bg-secondary-soft/40 py-3 pl-5 pr-4 text-base italic leading-relaxed text-text">
          {block.lines.map((line, i) => (
            <p key={i}>&lsquo;{line}&rsquo;</p>
          ))}
        </blockquote>
      )
  }
}

export function BrissyPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Rowing Towards Brissy ’2032" intro="A Rowing Plan" />

      <article className="mx-auto max-w-3xl space-y-10">
        <section className="space-y-4">
          {brissyIntro.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>

        <section className="space-y-4">
          {brissyApp.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>

        <section className="space-y-4">
          <p className="text-base leading-relaxed text-text-muted">{brissyTrophiesIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {brissyTrophies.map((trophy) => (
              <div key={trophy.name} className="rounded-xl border border-border bg-surface p-5 shadow-card">
                <p className="text-lg font-bold italic text-accent">{trophy.name}</p>
                <p className="mt-1 text-sm font-medium text-text-muted">{trophy.race}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{trophy.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          {brissyOutro.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>

        <section className="space-y-8 border-t border-border pt-10">
          <h2 className="text-xl font-bold tracking-tight text-text sm:text-2xl">Reviews</h2>
          {brissyReviews.map((review) => (
            <figure key={review.attribution} className="space-y-4">
              <blockquote className="text-base italic leading-relaxed text-text-muted">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <VideoEmbed video={review.video} title={review.attribution} />
              <figcaption className="text-right text-sm font-bold text-text">~ {review.attribution}.</figcaption>
            </figure>
          ))}
        </section>

        <section className="space-y-1 border-t border-border pt-8 text-sm text-text-muted">
          {brissySignature.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </section>

        <section className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {brissyPhotos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="w-full rounded-xl border border-border object-cover shadow-card"
              />
            ))}
          </div>
          <p className="text-center text-sm italic text-text-muted">{brissyPhotoCaption}</p>
        </section>

        <Link
          to="/brissy-32/radio-interview"
          className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-accent"
        >
          <span>
            <span className="block text-lg font-bold text-text">Read the full RADIO MUBC interview transcript</span>
            <span className="mt-1 block text-sm text-text-muted">
              Mike sits down for an in-depth chat about crocodiles, King Street Bridge, and the future of Australian rowing.
            </span>
          </span>
          <ArrowRight className="size-6 shrink-0 text-accent" aria-hidden="true" />
        </Link>
      </article>
    </div>
  )
}
