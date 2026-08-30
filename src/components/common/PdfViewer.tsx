import { Download } from 'lucide-react'

interface PdfViewerProps {
  url: string
  title: string
}

export function PdfViewer({ url, title }: PdfViewerProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-3">
        <p className="text-sm text-text-muted">Having trouble viewing the book below?</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          <Download className="size-4" aria-hidden="true" />
          Open in new tab
        </a>
      </div>
      <iframe src={url} title={title} className="h-[80vh] w-full bg-white" />
    </div>
  )
}
