import { PageHero } from '@/components/common/PageHero'
import { FilmGrid } from '@/components/common/FilmGrid'
import { filmCategories, independentFilmmakerUrl } from '@/data/films'

export function FilmsPage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Films"
        intro={
          <a
            href={independentFilmmakerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-hover"
          >
            Click here: Indépendant Film-maker
          </a>
        }
      />

      {filmCategories.map((category) => (
        <FilmGrid key={category.name} category={category} />
      ))}
    </div>
  )
}
