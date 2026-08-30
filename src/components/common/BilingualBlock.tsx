interface BilingualBlockProps {
  en: string
  jp: string
  as?: 'p' | 'h2'
}

export function BilingualBlock({ en, jp, as = 'p' }: BilingualBlockProps) {
  const Tag = as
  return (
    <div className="space-y-1">
      <Tag className={as === 'h2' ? 'text-xl font-semibold text-text sm:text-2xl' : 'text-text'}>
        {en}
      </Tag>
      <p lang="ja" className="text-text-muted">
        {jp}
      </p>
    </div>
  )
}
