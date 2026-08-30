import { ArrowUpRight } from 'lucide-react'

interface ExternalLinkCardProps {
  title: string
  url: string
  img?: string
  /** Internal route (no target=_blank, no "opens in new tab" cue) */
  internal?: boolean
  compact?: boolean
}

export function ExternalLinkCard({ title, url, img, internal, compact }: ExternalLinkCardProps) {
  return (
    <a
      href={url}
      {...(!internal && { target: '_blank', rel: 'noopener noreferrer' })}
      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-card transition-transform hover:-translate-y-0.5 hover:border-accent/50"
    >
      {img && (
        <img
          src={img}
          alt=""
          className={`shrink-0 rounded-lg object-cover ${compact ? 'size-12' : 'size-16'}`}
        />
      )}
      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <span className="truncate text-sm font-medium text-text">{title}</span>
        {!internal && (
          <>
            <ArrowUpRight className="size-4 shrink-0 text-text-muted" aria-hidden="true" />
            <span className="sr-only"> (opens in new tab)</span>
          </>
        )}
      </span>
    </a>
  )
}
