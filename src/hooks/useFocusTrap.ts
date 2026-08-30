import { useEffect } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Belt-and-braces Tab/Shift+Tab containment inside `containerRef`, active only while `enabled`.
 * Native <dialog> already contains focus in modern browsers; this covers older engines and
 * any embedded iframes that could otherwise pull focus outside the modal.
 */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return
    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.offsetParent !== null)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [containerRef, enabled])
}
