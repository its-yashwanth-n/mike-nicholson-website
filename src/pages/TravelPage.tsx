import { Download } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { travelSections } from "@/data/travel";
import type { TravelVideo } from "@/types/content";

function videoSrc(video: TravelVideo) {
  return video.source === "youtube"
    ? `https://www.youtube.com/embed/${video.id}?rel=0`
    : `https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0`;
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
  );
}

export function TravelPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="Travel"
        intro="A travel diary in film and photographs - trips, treks, and adventures across three decades."
      />

      <div className="space-y-16">
        {travelSections.map((section) => (
          <article
            key={section.id}
            className="mx-auto max-w-3xl space-y-6 border-t border-border pt-10 first:border-t-0 first:pt-0"
          >
            <h2 className="text-center text-2xl font-bold tracking-tight text-text sm:text-3xl">
              {section.heading}
            </h2>

            {section.video && (
              <VideoEmbed video={section.video} title={section.heading} />
            )}

            {section.videos && (
              <div className="grid gap-4 sm:grid-cols-3">
                {section.videos.map((video, i) => (
                  <VideoEmbed
                    key={video.id}
                    video={video}
                    title={`${section.heading} ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {section.images && (
              <div
                className={
                  section.images.length > 1 ? "grid gap-4 sm:grid-cols-2" : ""
                }
              >
                {section.images.map((image) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-xl border border-border object-cover shadow-card"
                  />
                ))}
              </div>
            )}

            {section.narrative && (
              <div className="space-y-4 text-base leading-relaxed text-text-muted">
                {section.narrative.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.pdfLink && (
              <div className="flex justify-center">
                <a
                  href={section.pdfLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {section.pdfLink.label}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
