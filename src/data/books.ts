import type { BookEntry } from '@/types/content'

export const heroBook = {
  coverImg: '/assets/images/books/book_cover.jpg',
  quote: '"...And now, the Australian President is Missing..."',
  tagline: 'OUT NOW!',
  buyUrl: 'https://www.amazon.com.au/This-Imaginary-Feeling-Being-Australian/dp/1642680087',
}

export const signingPhotos = [
  { src: '/assets/images/book-signing/book-signing.jpeg', caption: 'Book signing in Sydney, 27th Sept 2019.' },
  {
    src: '/assets/images/book-signing/queue.jpeg',
    caption: 'Is that a queue down the road, or people waiting at a bus stop?',
  },
]

export const bookList: BookEntry[] = [
  {
    title: 'The Mosaic Escalator',
    coverImg: '/assets/images/books/mosaic_escalator_cover.png',
    embedVideo: { id: '893214388', source: 'vimeo' },
  },
  {
    title: "Towards Brissy '32",
    coverImg: '/assets/images/books/towards-brissy.jpeg',
    readFreeRoute: '/brissy-32',
  },
  {
    title: 'Daughter to Bligh',
    coverImg: '/assets/images/books/book2_thumbnail.png',
    blurb:
      'The absorbing story of how Mary, the young daughter of William Bligh, the Governor of New South Wales, became the First Lady.',
    buyUrl: 'https://www.amazon.com.au/dp/B0CVLP1CJG/',
  },
  {
    title: 'Frend and Flier',
    coverImg: '/assets/images/books/book1_thumbnail.jpg',
    blurb:
      'What will Australia be like in the middle of the 20th Century where people can fly and there are Television Frends? This exciting story explains.',
    buyUrl:
      'http://www.lulu.com/shop/michael-nicholson/frend-and-flier/paperback/product-20472484.html',
  },
  {
    title: 'A Tunnel into Uluru',
    coverImg: '/assets/images/books/book4_thumbnail.jpg',
    blurb:
      'A mysterious opening into Uluru is discovered by a group of university students, and we follow their amazing adventures down the tunnel inside it.',
    buyUrl:
      'http://www.lulu.com/shop/michael-nicholson/a-tunnel-into-uluru/paperback/product-20472559.html',
  },
  {
    title: 'A Memoir',
    coverImg: '/assets/images/books/book3_thumbnail.jpg',
    blurb:
      'An honest Memoir by Mike Nicholson revealing his first fifty years; his upbringing, art, films, animation and writing, plus a lot more.',
    buyUrl: 'http://www.lulu.com/shop/michael-nicholson/a-memoir/paperback/product-20444514.html',
  },
  {
    title: 'The New Idea',
    coverImg: '/assets/images/books/the-new-idea_thumbnail.jpg',
    blurb:
      'The University High School Rowing Club revolutionised school rowing in 2019, and it will probably take a few years before the Private School rowing programmes ever catch up. This book sets out to explain how this transformation evolved; the students involved, and how this was achieved, in just three years.',
    readFreeRoute: '/the-new-idea',
  },
  {
    title: 'MUBC Tokyo Trip',
    coverImg: '/assets/images/tokyo-olympics/mubc_tokyo_trip_thumb.jpg',
    readFreeRoute: '/mubc-tokyo-trip',
  },
]
