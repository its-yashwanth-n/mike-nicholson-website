import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { MobileNav } from '@/components/layout/MobileNav'

/** Top bar shown only below the md breakpoint; desktop navigation lives in Sidebar. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border md:hidden">
      <div className="flex h-16 items-center justify-between bg-surface/90 px-4 backdrop-blur sm:px-6">
        <NavLink to="/" className="font-wordmark text-xl font-light tracking-wide text-text">
          <span className="align-top text-sm">Mike</span>Nicholson
        </NavLink>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-full p-2 text-text"
          aria-label="Open menu"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
