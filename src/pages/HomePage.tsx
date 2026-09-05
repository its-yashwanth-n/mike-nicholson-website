import { useState } from "react";
import { BookCard } from "@/components/common/BookCard";
import { FilmGrid } from "@/components/common/FilmGrid";
import { VideoModal } from "@/components/common/VideoModal";
import { ImageLightbox } from "@/components/common/ImageLightbox";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  additionalFilms,
  additionalVideo,
  adCards,
  featuredBooks,
  films,
  newVideo,
  stores,
} from "@/data/home";
import type { Film } from "@/types/content";

export function HomePage() {
  const [openVideo, setOpenVideo] = useState<Film | null>(null);
  const [openImage, setOpenImage] = useState<{
    img: string;
    title: string;
  } | null>(null);

  return (
    <div className="space-y-12">
      <PageHero
        title="Michael Nicholson's World"
        intro="In print, film and on canvas, the Australian artist Michael Nicholson has created an impressive body of work."
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-text-muted">
          <span>Available at</span>
          {stores.map((store, i) => (
            <span key={store.name} className="flex items-center gap-2">
              {i > 0 && <span>and</span>}
              <img
                src={store.logo}
                alt={store.name}
                className="h-6 w-auto object-contain"
              />
              <span>{store.location}</span>
            </span>
          ))}
        </div>
      </PageHero>

      <section>
        <SectionHeading>Latest Books</SectionHeading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.title}
              book={book}
              onWatchTrailer={(v) =>
                setOpenVideo({
                  id: v.id,
                  source: v.source as Film["source"],
                  title: v.title,
                })
              }
              onZoomBonus={setOpenImage}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Advertisements</SectionHeading>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {adCards.map((ad, i) => (
            <button
              key={ad.id ?? i}
              type="button"
              onClick={() => setOpenVideo(ad)}
              className="group overflow-hidden rounded-xl border border-border bg-surface text-left shadow-card"
            >
              <span className="block aspect-video overflow-hidden">
                <img
                  src={ad.img}
                  alt=""
                  className="size-full object-cover transition-transform group-hover:scale-105"
                />
              </span>
              <span className="block px-3 py-2 text-sm font-medium text-text">
                {ad.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      <FilmGrid category={{ name: "Films", films }} />
      <FilmGrid category={{ name: "More to Watch", films: additionalFilms }} />
      <FilmGrid
        category={{
          name: "Also worth a look",
          films: [additionalVideo, newVideo],
        }}
      />

      <VideoModal film={openVideo} onClose={() => setOpenVideo(null)} />
      <ImageLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </div>
  );
}
