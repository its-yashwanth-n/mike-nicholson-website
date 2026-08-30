import type { Film } from '@/types/content'

export const artFilms: Film[] = [
  { id: '676506818', title: 'Museum of Modern Art', source: 'vimeo' },
  { id: 'lyxzNF480gI', title: 'Dromana Estate Exhibition', source: 'youtube' },
]

const exhibitionFiles = [
  '1a.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '7.jpeg', '5.jpg', '6.jpeg', '8.jpg',
  '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg',
  '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg',
]

export const exhibitionImages = exhibitionFiles.map((file, i) => ({
  src: `/assets/images/art/exhibition/${file}`,
  alt: `Exhibition photo ${i + 1}`,
}))

export const galleryImages = [
  { src: '/assets/images/art/flower_image.jpeg', alt: 'Painting of a flower' },
  { src: '/assets/images/art/art_image_1.jpeg', alt: 'Artwork 1' },
  { src: '/assets/images/art/art_image_2.png', alt: 'Artwork 2' },
  { src: '/assets/images/art/exhib11.jpg', alt: 'Exhibition artwork' },
  { src: '/assets/images/art/art_image_4.jpeg', alt: 'Artwork 4' },
  { src: '/assets/images/art/PHOTOG.jpg', alt: 'Photography' },
]
