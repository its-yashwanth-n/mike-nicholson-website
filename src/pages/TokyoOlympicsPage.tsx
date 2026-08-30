import { Link } from 'react-router-dom'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BilingualBlock } from '@/components/common/BilingualBlock'
import { FilmGrid } from '@/components/common/FilmGrid'
import {
  gridSectionCopy,
  heroCopy,
  historicPhotoCaption,
  introCopy,
  longevityFilm,
  mubcTokyoTripLink,
  recentNewsSectionCopy,
  tokyoBayCourse,
  tokyoOlympicsFilms,
} from '@/data/tokyoOlympics'

export function TokyoOlympicsPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Tokyo Olympic Regatta">
        <BilingualBlock as="h2" en={heroCopy.en} jp={heroCopy.jp} />
      </PageHero>

      <section className="space-y-4 text-center">
        <BilingualBlock as="p" en={introCopy.en} jp={introCopy.jp} />
        <BilingualBlock as="p" en={historicPhotoCaption.en} jp={historicPhotoCaption.jp} />
      </section>

      <FilmGrid category={{ name: 'Featured Video', films: [longevityFilm] }} />

      <FilmGrid
        category={{
          name: gridSectionCopy.en,
          subheading: gridSectionCopy.jp,
          films: tokyoOlympicsFilms,
        }}
      />

      <section>
        <SectionHeading subheading={recentNewsSectionCopy.jp}>
          {recentNewsSectionCopy.en}
        </SectionHeading>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-card">
            <img
              src={tokyoBayCourse.img}
              alt=""
              className="aspect-video w-full object-cover"
            />
            <figcaption className="p-3 text-center text-sm text-text-muted">
              {tokyoBayCourse.caption}
            </figcaption>
          </figure>

          <Link
            to={mubcTokyoTripLink.to}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-card transition-transform hover:-translate-y-0.5 hover:border-accent/50"
          >
            <img
              src={mubcTokyoTripLink.img}
              alt=""
              className="size-16 shrink-0 rounded-lg object-cover"
            />
            <span className="truncate text-sm font-medium text-text">
              {mubcTokyoTripLink.title}
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
