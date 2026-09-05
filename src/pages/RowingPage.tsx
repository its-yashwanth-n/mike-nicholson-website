import { PageHero } from "@/components/common/PageHero";
import { FilmGrid } from "@/components/common/FilmGrid";
import { YumpuEmbed } from "@/components/common/YumpuEmbed";
import { rowingCategories, lifeOfRowingUrl } from "@/data/rowing";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function RowingPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Rowing Films"
        intro={
          <>
            <p>
              If you&rsquo;re after films of Melbourne University Boat Club
              [MUBC] training and racing since 1955 to the present day
              you&rsquo;ve come to the right place. This is virtually the entire
              collection filmed by Harvey Nicholson from &rsquo;56 to &rsquo;84
              and Mike Nicholson from &rsquo;78 to this year. Just scroll down
              to the year you&rsquo;re interested in &mdash; or jump straight
              there below.
            </p>
            <a
              href={lifeOfRowingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-hover"
            >
              Click here: A Life of Rowing and Filming
            </a>
          </>
        }
      />

      <nav
        aria-label="Jump to year"
        className="flex flex-wrap gap-2 border-y border-border py-4"
      >
        {rowingCategories.map((category) => (
          <a
            key={category.name}
            href={`#${slugify(category.name)}`}
            className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent-hover hover:text-white"
          >
            {category.name}
          </a>
        ))}
      </nav>

      {rowingCategories.map((category) => (
        <div
          key={category.name}
          id={slugify(category.name)}
          className="scroll-mt-24"
        >
          <FilmGrid category={category} />
          {category.name === "2017-2019" && (
            <div className="mt-6 max-w-2xl">
              <YumpuEmbed id="ekEf2oXUh74nxBg9" title="The New Idea" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
