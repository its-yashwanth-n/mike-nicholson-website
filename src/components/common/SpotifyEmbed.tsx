import { ExternalLink } from "lucide-react";

interface SpotifyEmbedProps {
  /** A normal open.spotify.com link, e.g. https://open.spotify.com/episode/{id} */
  href: string;
  title?: string;
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1ED760" />
      <path
        fill="#14110f"
        d="M17.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
      />
    </svg>
  );
}

function toEmbedUrl(href: string) {
  const url = new URL(href);
  return `https://open.spotify.com/embed${url.pathname}?utm_source=generator&theme=0`;
}

export function SpotifyEmbed({ href, title = "Spotify player" }: SpotifyEmbedProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-card">
      <div className="flex items-center justify-between gap-2 border-b border-border bg-surface px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-medium text-text">
          <SpotifyIcon className="size-5 shrink-0" />
          Listen on Spotify
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 rounded-full p-1.5 text-text-muted transition-colors hover:bg-accent-soft hover:text-accent"
          aria-label="Open in Spotify (opens in new tab)"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
      <iframe
        src={toEmbedUrl(href)}
        title={title}
        className="h-[152px] w-full"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
