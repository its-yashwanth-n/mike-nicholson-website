import { NavLink } from "react-router-dom";
import { primaryNav } from "@/data/nav";
import { usePageViews } from "@/hooks/usePageViews";

export function Footer() {
  const views = usePageViews();

  return (
    <footer className="border-t border-border bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-wordmark text-lg font-light tracking-wide text-white">
              <span className="align-top text-xs">Mike</span>Nicholson
            </p>
            <p className="mt-2 text-sm text-white/60">
              Hello there - you've navigated your way to my website, where you
              can find my art, books, films and other things of interest.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:flex sm:gap-6"
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-white/70 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mike Nicholson. All rights reserved.</p>
          {views !== null && <p>{views.toLocaleString()} views</p>}
        </div>
      </div>
    </footer>
  );
}
