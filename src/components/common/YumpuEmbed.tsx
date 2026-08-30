interface YumpuEmbedProps {
  /** The id from a yumpu.com/en/embed/view/{id} URL. */
  id: string
  title: string
}

export function YumpuEmbed({ id, title }: YumpuEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-card">
      <div className="relative aspect-[500/639] w-full max-w-2xl mx-auto">
        <iframe
          src={`https://www.yumpu.com/en/embed/view/${id}`}
          title={title}
          className="absolute inset-0 size-full"
          frameBorder={0}
          allowFullScreen
        />
      </div>
    </div>
  )
}
