import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'
import { FilmGrid } from '@/components/common/FilmGrid'
import { Carousel } from '@/components/common/Carousel'
import { artFilms, exhibitionImages, galleryImages } from '@/data/art'

export function ArtPage() {
  return (
    <div className="space-y-12">
      <PageHero title="My Art Gallery" />

      <FilmGrid category={{ name: 'Art House Films', films: artFilms }} />

      <section>
        <SectionHeading>Exhibition</SectionHeading>
        <Carousel images={exhibitionImages} label="Exhibition photos" />
      </section>

      <section>
        <SectionHeading>Gallery</SectionHeading>
        <Carousel images={galleryImages} label="Gallery photos" />
      </section>
    </div>
  )
}
