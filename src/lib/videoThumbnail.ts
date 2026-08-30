export function youtubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
}

const vimeoCache = new Map<string, Promise<string | null>>()

/** Fetches a Vimeo thumbnail via the modern oEmbed endpoint, caching in-flight/completed requests. */
export function fetchVimeoThumbnail(id: string): Promise<string | null> {
  const cached = vimeoCache.get(id)
  if (cached) return cached

  const promise = fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`)
    .then((res) => (res.ok ? res.json() : null))
    .then((data: { thumbnail_url?: string } | null) => data?.thumbnail_url ?? null)
    .catch(() => null)

  vimeoCache.set(id, promise)
  return promise
}
