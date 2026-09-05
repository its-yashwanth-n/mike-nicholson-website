import { Play, ZoomIn } from "lucide-react";
import type { BookEntry } from "@/types/content";

interface BookCardProps {
  book: BookEntry;
  onWatchTrailer: (video: {
    id: string;
    source: string;
    title: string;
  }) => void;
  onZoomBonus: (image: { img: string; title: string }) => void;
}

export function BookCard({ book, onWatchTrailer, onZoomBonus }: BookCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <div className="border-b border-border bg-bg px-4 py-3 text-center">
        <h3 className="text-base font-semibold text-text">{book.title}</h3>
        {book.buyUrl && (
          <a
            href={book.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Click here to buy
          </a>
        )}
      </div>

      <a
        href={book.buyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center bg-ink/5 p-4"
      >
        <img
          src={book.coverImg}
          alt={`${book.title} cover`}
          className="h-56 w-auto rounded-md object-contain shadow-card"
        />
      </a>

      {book.embedVideo && (
        <button
          type="button"
          onClick={() =>
            onWatchTrailer({
              ...book.embedVideo!,
              title: `${book.title} - Trailer`,
            })
          }
          className="flex items-center justify-center gap-2 border-t border-border bg-accent-soft px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <Play className="size-4" aria-hidden="true" />
          Watch trailer
        </button>
      )}

      {book.bonusImage && (
        <button
          type="button"
          onClick={() => onZoomBonus(book.bonusImage!)}
          className="flex items-center justify-center gap-2 border-t border-border px-4 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-accent-soft hover:text-accent"
        >
          <ZoomIn className="size-4" aria-hidden="true" />
          {book.bonusImage.title}
        </button>
      )}
    </div>
  );
}
