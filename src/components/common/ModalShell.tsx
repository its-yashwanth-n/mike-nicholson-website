import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface ModalShellProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  /** Extra classes for the content wrapper, e.g. to control max-width for video vs image content. */
  contentClassName?: string
}

export function ModalShell({ open, onClose, title, children, contentClassName }: ModalShellProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<Element | null>(null)
  const titleId = useId()
  useFocusTrap(dialogRef, open)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      triggerRef.current = document.activeElement
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => {
      onClose()
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus()
      }
    }
    const handleCancel = (event: Event) => {
      // Let the native Escape-to-close behavior fire `close`, we just sync state.
      event.preventDefault()
      dialog.close()
    }
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close()
    }

    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('cancel', handleCancel)
    dialog.addEventListener('click', handleBackdropClick)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('cancel', handleCancel)
      dialog.removeEventListener('click', handleBackdropClick)
    }
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="m-auto max-h-[90vh] w-[min(92vw,64rem)] overflow-hidden rounded-2xl border border-border bg-surface p-0 shadow-card backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className={contentClassName ?? ''}>
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <h2 id={titleId} className="truncate text-base font-semibold text-text">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="shrink-0 rounded-full p-2 text-text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            aria-label="Close"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="max-h-[calc(90vh-3.5rem)] overflow-y-auto">{children}</div>
      </div>
    </dialog>
  )
}
