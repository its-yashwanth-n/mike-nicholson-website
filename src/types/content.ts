export type VideoSource = 'youtube' | 'vimeo' | 'local'

/**
 * A single grid entry. Entries with `id` + `source` are videos (open VideoModal).
 * Entries with only `img` + `title` (no id/source) are standalone photos (open ImageLightbox).
 */
export interface Film {
  id?: string
  title: string
  source?: VideoSource
  img?: string
  featured?: boolean
  /** local video file path, only when source === 'local' */
  src?: string
  /** e.g. Home's "Liberty, equality, fraternity" film inquiry transcript */
  docLink?: { label: string; href: string }
}

export interface FilmLink {
  title: string
  url: string
  img?: string
}

export interface FilmCategory {
  name: string
  films: Film[]
  links?: FilmLink[]
  subheading?: string
  bgUrl?: string
}

export interface BookEntry {
  title: string
  coverImg: string
  blurb?: string
  buyUrl?: string
  buyLabel?: string
  readFreeRoute?: string
  embedVideo?: { id: string; source: VideoSource }
  bonusImage?: { img: string; title: string }
}

export interface LinkEntry {
  title: string
  url: string
  img?: string
  internal?: boolean
}

export interface TravelVideo {
  id: string
  source: VideoSource
}

export interface TravelSection {
  id: string
  heading: string
  video?: TravelVideo
  videos?: TravelVideo[]
  images?: { src: string; alt: string }[]
  narrative?: string[]
  pdfLink?: { href: string; label: string }
}

export interface NavItem {
  label: string
  to: string
}
