import type { Film, LinkEntry } from '@/types/content'

export const topLinks: LinkEntry[] = [
  { title: 'Indépendant Film-maker', url: 'http://www.innersense.com.au/mif/nicholson.html' },
  {
    title: 'A Life of Rowing and Filming',
    url: 'https://heartheboatsing.com/2021/05/20/mike-nicholson-a-life-of-rowing-and-filming/',
  },
  { title: 'Books', url: '/books', internal: true },
  // { title: 'Environment', url: '/environment', internal: true },
]

export const linksBookPromo = {
  coverImg: '/assets/images/books/book_cover.jpg',
  buyUrl: 'https://www.amazon.com.au/This-Imaginary-Feeling-Being-Australian/dp/B0CVVMZGWZ',
}

export const familyAndFriendLinks: LinkEntry[] = [
  {
    title: 'Peter Nicholson',
    url: 'http://www.nicholsoncartoons.com.au/',
    img: '/assets/images/links/logo_small.gif',
  },
  {
    title: 'Joyce Nicholson',
    url: 'http://www.joyce-thorpe-nicholson.info/',
    img: '/assets/images/links/useful1.jpg',
  },
  {
    title: 'Melissa Nicholson',
    url: 'https://melissanicholson.my.canva.site/',
    img: '/assets/images/links/melissa_website.jpg',
  },
  {
    title: 'Greening Yarra Bridges',
    url: 'http://www.greeningyarrabridges.com',
    img: '/assets/images/links/ACZ9t-7O_400x400.jpeg',
  },
  {
    title: 'Bob Brown Foundation',
    url: 'https://www.bobbrown.org.au',
    img: '/assets/images/links/bob-brown.png',
  },
  {
    title: 'The Australian Greens',
    url: 'https://greens.org.au',
    img: '/assets/images/links/greens.png',
  },
]

export const tarkineFilm: Film = {
  id: 'NLP2E8RPOgI',
  title: 'Tarkine Motion Picture',
  source: 'youtube',
}
