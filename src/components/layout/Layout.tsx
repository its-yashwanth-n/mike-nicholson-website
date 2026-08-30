import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <a href="#main-content" className="sr-only-focusable">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
