import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { primaryNav } from '@/data/nav'
import { MobileNav } from '@/components/layout/MobileNav'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
    isActive ? 'bg-accent-soft text-accent' : 'text-text hover:bg-accent-soft/60'
  }`

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // `backdrop-blur` must not live on this element: `backdrop-filter` on an ancestor creates a
    // new containing block for `position: fixed` descendants, which collapses MobileNav's
    // fixed-inset overlay down to this header's own height instead of the viewport.
    <header className="sticky top-0 z-40 border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between bg-surface/90 px-4 backdrop-blur sm:px-6">
        <NavLink to="/" className="font-wordmark text-xl font-light tracking-wide text-text">
          <span className="align-top text-sm">Mike</span>Nicholson
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-full p-2 text-text md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
