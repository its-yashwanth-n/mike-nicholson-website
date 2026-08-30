import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FilmGrid } from "@/components/common/FilmGrid";
import { Carousel } from "@/components/common/Carousel";
import { ExternalLinkCard } from "@/components/common/ExternalLinkCard";
import {
  environmentBookPromo,
  environmentFilms,
  environmentImages,
  environmentLinks,
} from "@/data/environment";

export function EnvironmentPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Environment" />

      <FilmGrid category={{ name: "Films", films: environmentFilms }} />

      <section>
        <SectionHeading>Photos</SectionHeading>
        <Carousel images={environmentImages} label="Environment photos" />
      </section>

      <section>
        <SectionHeading>Links</SectionHeading>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {environmentLinks.map((link) => (
            <ExternalLinkCard
              key={link.url}
              title={link.title}
              url={link.url}
              img={link.img}
            />
          ))}
          <a
            href={environmentBookPromo.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${environmentBookPromo.title} - click here to purchase`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-card transition-transform hover:-translate-y-0.5 hover:border-accent/50"
          >
            <img
              src={environmentBookPromo.coverImg}
              alt=""
              className="size-16 shrink-0 rounded-lg object-cover"
            />
            <span>
              <span className="block text-sm font-medium text-text">
                This book is out now.
              </span>
              <span className="block text-sm text-accent">
                Click here to purchase
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
