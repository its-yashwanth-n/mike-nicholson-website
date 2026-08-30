import { useState } from 'react'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ExternalLinkCard } from '@/components/common/ExternalLinkCard'
import { VideoModal } from '@/components/common/VideoModal'
import { familyAndFriendLinks, linksBookPromo, tarkineFilm, topLinks } from '@/data/links'
import { youtubeThumbnail } from '@/lib/videoThumbnail'
import type { Film } from '@/types/content'

export function LinksPage() {
  const [openVideo, setOpenVideo] = useState<Film | null>(null)

  return (
    <div className="space-y-12">
      <PageHero title="Useful Links" />

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {topLinks.map((link) => (
          <ExternalLinkCard
            key={link.url}
            title={link.title}
            url={link.url}
            internal={link.internal}
          />
        ))}
      </section>

      <a
        href={linksBookPromo.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-card sm:flex-row sm:text-left"
      >
        <img
          src={linksBookPromo.coverImg}
          alt="This Imaginary Feeling of Being Australian cover"
          className="h-48 w-auto rounded-lg shadow-card"
        />
        <div>
          <p className="text-lg font-semibold text-text">This book is out now.</p>
          <p className="mt-1 font-medium text-accent">Click here to purchase</p>
        </div>
      </a>

      <section>
        <SectionHeading>Family &amp; Friends</SectionHeading>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {familyAndFriendLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center shadow-card transition-transform hover:-translate-y-0.5"
            >
              <img src={link.img} alt="" className="h-16 w-auto object-contain" />
              <span className="text-sm font-medium text-text">{link.title}</span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => setOpenVideo(tarkineFilm)}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 text-center shadow-card transition-transform hover:-translate-y-0.5"
          >
            <img src={youtubeThumbnail(tarkineFilm.id!)} alt="" className="h-16 w-auto rounded object-cover" />
            <span className="text-sm font-medium text-text">{tarkineFilm.title}</span>
          </button>
        </div>
      </section>

      <VideoModal film={openVideo} onClose={() => setOpenVideo(null)} />
    </div>
  )
}
