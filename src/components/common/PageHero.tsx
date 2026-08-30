interface PageHeroProps {
  title: string
  intro?: React.ReactNode
  children?: React.ReactNode
}

export function PageHero({ title, intro, children }: PageHeroProps) {
  return (
    <header className="mb-8 sm:mb-10">
      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h1>
      {intro && <div className="mt-3 max-w-3xl text-base text-text-muted sm:text-lg">{intro}</div>}
      {children && <div className="mt-4">{children}</div>}
    </header>
  )
}
