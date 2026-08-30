import { useEffect, useState } from 'react'
import { fetchVimeoThumbnail } from '@/lib/videoThumbnail'

export function useVimeoThumbnail(id: string | undefined): string | null {
  const [thumbnail, setThumbnail] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    fetchVimeoThumbnail(id).then((url) => {
      if (!cancelled) setThumbnail(url)
    })
    return () => {
      cancelled = true
    }
  }, [id])

  return thumbnail
}
