import { PageHero } from '@/components/common/PageHero'
import { FilmGrid } from '@/components/common/FilmGrid'
import { rubberyFiguresFilms } from '@/data/rubberyFigures'

const introText =
  "During the politically incorrect 1980's, RUBBERY FIGURES basically ran the government, and the 8 minute series of short films held down the time slot on the, now threatened, ABC TV leading into 4 CORNERS to build its ratings for a few years until finally the ABC had the guts to axe it. Then Steve Vizard wanted RUBBERY FIGURES on his Channel 7, hilarious and really funny, FAST FORWARD to increase the viewership of this already high rating programme on mainstream television until RUBBERY FIGURES completely overshadowed FAST FORWARD. So after a few years of this it was also axed and the puppets were either put down or put out to pasture. Here are a few of the RUBBERY FIGURES short films from their years on the ABC and then Channel 7."

export function RubberyFiguresPage() {
  return (
    <div className="space-y-12">
      <PageHero title="Rubbery Figures" intro={introText}>
        <div className="flex flex-wrap items-center gap-4">
          <img
            src="/assets/images/rubbery-figures/title_image.png"
            alt="Rubbery Figures title card"
            className="h-auto max-w-full sm:max-w-sm"
          />
          <img
            src="/assets/images/rubbery-figures/RUBFIG.jpg"
            alt="Rubbery Figures puppets"
            className="h-auto max-w-full sm:max-w-sm"
          />
        </div>
      </PageHero>

      <FilmGrid category={{ name: 'Rubbery Figures Films', films: rubberyFiguresFilms }} />

      <div className="flex justify-center">
        <a
          href="http://www.nicholsoncartoons.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-center"
        >
          <img src="/assets/images/links/logo_small.gif" alt="" className="h-12 w-auto" />
          <span className="text-sm font-medium text-text">Peter Nicholson</span>
        </a>
      </div>
    </div>
  )
}
