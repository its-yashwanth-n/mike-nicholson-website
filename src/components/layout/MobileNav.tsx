import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { primaryNav } from '@/data/nav'
import { NavExtras } from '@/components/layout/NavExtras'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  useFocusTrap(panelRef, open)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-ink/60"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- a slide-in drawer, not a centered native <dialog>
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute inset-y-0 right-0 flex w-[85vw] max-w-sm flex-col overflow-y-auto bg-surface p-5 shadow-card"
      >
        <div className="mb-6 flex shrink-0 items-center justify-between">
          <span className="font-wordmark text-xl font-light tracking-wide text-text">
            <span className="text-sm align-top">Mike</span>Nicholson
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-text-muted hover:bg-accent-soft hover:text-accent"
            aria-label="Close menu"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Primary" className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                  isActive ? 'bg-accent-soft text-accent' : 'text-text hover:bg-accent-soft/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="my-2 h-px shrink-0 bg-border" />
        <NavExtras variant="light" onNavigate={onClose} />
      </div>
    </div>
  )
}
