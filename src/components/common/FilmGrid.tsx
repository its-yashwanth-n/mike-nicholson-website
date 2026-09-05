import { useState } from "react";
import { FilmCard } from "@/components/common/FilmCard";
import { VideoModal } from "@/components/common/VideoModal";
import { ImageLightbox } from "@/components/common/ImageLightbox";
import { ExternalLinkCard } from "@/components/common/ExternalLinkCard";
import type { Film, FilmCategory } from "@/types/content";

interface FilmGridProps {
  category: FilmCategory;
  /** Heading level for the category name - defaults to h2, use h3 when nested under a page-level h2. */
  headingLevel?: "h2" | "h3";
}

export function FilmGrid({ category, headingLevel = "h2" }: FilmGridProps) {
  const [openVideo, setOpenVideo] = useState<Film | null>(null);
  const [openImage, setOpenImage] = useState<{
    img: string;
    title: string;
  } | null>(null);
  const Heading = headingLevel;
  const hasLinks = Boolean(category.links && category.links.length > 0);
  const isEmpty = category.films.length === 0 && !hasLinks;

  return (
    <section
      className="relative overflow-hidden rounded-2xl"
      style={
        category.bgUrl
          ? {
              backgroundImage: `linear-gradient(rgba(20,17,15,0.55), rgba(20,17,15,0.55)), url(${category.bgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className={category.bgUrl ? "px-4 py-8 sm:px-6" : ""}>
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <Heading
            className={`text-xl font-semibold sm:text-2xl ${category.bgUrl ? "text-white" : "text-text"}`}
          >
            {category.name}
          </Heading>
          {category.subheading && (
            <p
              className={`text-sm ${category.bgUrl ? "text-white/80" : "text-text-muted"}`}
            >
              {category.subheading}
            </p>
          )}
        </div>

        {category.films.length > 0 && (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
            {category.films.map((film, index) => (
              <FilmCard
                key={`${film.id ?? film.img}-${index}`}
                film={film}
                onOpenVideo={setOpenVideo}
                onOpenImage={setOpenImage}
              />
            ))}
          </div>
        )}

        {hasLinks && (
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {category.links!.map((link) => (
              <li key={link.url}>
                <ExternalLinkCard
                  title={link.title}
                  url={link.url}
                  img={link.img}
                  compact
                />
              </li>
            ))}
          </ul>
        )}

        {isEmpty && (
          <p
            className={`rounded-xl border border-dashed px-4 py-6 text-center text-sm ${
              category.bgUrl
                ? "border-white/30 text-white/70"
                : "border-border text-text-muted"
            }`}
          >
            More from {category.name} coming soon.
          </p>
        )}
      </div>

      <VideoModal film={openVideo} onClose={() => setOpenVideo(null)} />
      <ImageLightbox image={openImage} onClose={() => setOpenImage(null)} />
    </section>
  );
}
