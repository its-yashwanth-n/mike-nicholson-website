import type { NavItem } from '@/types/content'

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/books' },
  { label: 'Films', to: '/films' },
  { label: 'Art', to: '/art' },
  { label: 'Rowing', to: '/rowing' },
  { label: 'Rubbery Figures', to: '/rubbery-figures' },
  { label: 'Travel', to: '/travel' },
]

/** Folded into a "More" menu so the topbar doesn't overflow. */
export const moreNav: NavItem[] = [
  { label: 'Environment', to: '/environment' },
  { label: 'Tokyo Olympics', to: '/tokyo-olympics' },
  { label: 'Links', to: '/links' },
]
