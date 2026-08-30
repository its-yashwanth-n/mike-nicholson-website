import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { bookList, heroBook, signingPhotos } from "@/data/books";

export function BooksPage() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <img
          src={heroBook.coverImg}
          alt="This Imaginary Feeling of Being Australian - book cover"
          className="mx-auto max-h-[28rem] w-auto rounded-lg shadow-card"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">
            {heroBook.quote}
          </h1>
          <p className="mt-2 text-lg font-semibold text-accent">
            {heroBook.tagline}
          </p>
          <a
            href={heroBook.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Click here to purchase
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {signingPhotos.map((photo) => (
          <figure key={photo.src}>
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full rounded-xl shadow-card"
            />
            <figcaption className="mt-2 text-center text-sm text-text-muted">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <section>
        <SectionHeading>Books</SectionHeading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {bookList.map((book) => (
            <article
              key={book.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-card sm:flex-row"
            >
              {book.embedVideo ? (
                <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-ink sm:w-56">
                  <iframe
                    className="size-full"
                    src={`https://player.vimeo.com/video/${book.embedVideo.id}`}
                    title={book.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={book.coverImg}
                  alt={`${book.title} cover`}
                  className="h-40 w-full shrink-0 rounded-lg object-contain sm:w-32"
                />
              )}
              <div className="flex flex-1 flex-col">
                <h3 className="font-semibold text-text">{book.title}</h3>
                {book.blurb && (
                  <p className="mt-1.5 flex-1 text-sm text-text-muted">
                    {book.blurb}
                  </p>
                )}
                <div className="mt-3">
                  {book.buyUrl && (
                    <a
                      href={book.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                    >
                      Buy now
                    </a>
                  )}
                  {book.readFreeRoute && (
                    <Link
                      to={book.readFreeRoute}
                      className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-hover"
                    >
                      Read for FREE!
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
