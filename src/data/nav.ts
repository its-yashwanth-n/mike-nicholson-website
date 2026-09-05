import type { NavItem } from '@/types/content'

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Books', to: '/books' },
  { label: 'Films', to: '/films' },
  { label: 'Art', to: '/art' },
  { label: 'Rowing', to: '/rowing' },
  { label: 'Rubbery Figures', to: '/rubbery-figures' },
  { label: 'Travel', to: '/travel' },
  // Hidden for now - uncomment (and restore the matching <Route> in App.tsx) to bring back.
  // { label: 'Environment', to: '/environment' },
  // { label: 'Tokyo Olympics', to: '/tokyo-olympics' },
  { label: 'Links', to: '/links' },
]
