import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-secondary to-accent px-6 py-16 text-center text-white">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-lg text-white/90">We can't find the page you're looking for.</p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
      >
        Go to home page
      </Link>
    </div>
  )
}
