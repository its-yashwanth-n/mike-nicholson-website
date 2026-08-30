interface SectionHeadingProps {
  children: React.ReactNode
  subheading?: React.ReactNode
}

export function SectionHeading({ children, subheading }: SectionHeadingProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-text sm:text-2xl">{children}</h2>
      {subheading && <p className="mt-1 text-sm text-text-muted">{subheading}</p>}
    </div>
  )
}
