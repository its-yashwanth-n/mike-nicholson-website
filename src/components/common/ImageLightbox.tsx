import { ModalShell } from '@/components/common/ModalShell'

interface ImageLightboxProps {
  image: { img: string; title: string } | null
  onClose: () => void
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <ModalShell open={image !== null} onClose={onClose} title={image?.title ?? ''}>
      {image && (
        <div className="flex items-center justify-center bg-ink/5 p-4">
          <img
            src={image.img}
            alt={image.title}
            className="max-h-[75vh] w-auto rounded-lg object-contain"
          />
        </div>
      )}
    </ModalShell>
  )
}
