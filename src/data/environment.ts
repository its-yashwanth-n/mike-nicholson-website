import type { Film, LinkEntry } from '@/types/content'

export const environmentFilms: Film[] = [
  { id: 'zz45AJZ1eeA', title: 'Greening Yarra Bridges', source: 'youtube' },
  { id: '342895670', title: 'Yellowcake', source: 'vimeo' },
  { id: 'oiaEZ8-M1_w', title: 'The Amazing Dream They Had About Mining', source: 'youtube' },
  { id: 'BubDm7rvvZ0', title: 'Wilderness', source: 'youtube' },
  { id: '8hq7DogzJGM', title: 'Earth Hour - The Making Of', source: 'youtube' },
  { id: 'NLP2E8RPOgI', title: 'Tarkine Motion Picture', source: 'youtube' },
]

const envFiles = [
  { name: '/assets/images/links/IMG_2317.jpeg', alt: 'Environment photo 1' },
  { name: '/assets/images/environment/ROAR2U.JPG', alt: 'Environment photo 2' },
  { name: '/assets/images/environment/RAOR2V.JPG', alt: 'Environment photo 3' },
  { name: '/assets/images/environment/MN_Env1.jpg', alt: 'Environment photo 4' },
  { name: '/assets/images/environment/MN_Env2.jpg', alt: 'Environment photo 5' },
  { name: '/assets/images/environment/MN_Env3.jpg', alt: 'Environment photo 6' },
  { name: '/assets/images/environment/MN_Env4.jpg', alt: 'Environment photo 7' },
  { name: '/assets/images/environment/MN_Env5.jpg', alt: 'Environment photo 8' },
  { name: '/assets/images/environment/MN_Env6.jpg', alt: 'Environment photo 9' },
  { name: '/assets/images/environment/MN_Env7.jpg', alt: 'Environment photo 10' },
  { name: '/assets/images/environment/MN_Env8.png', alt: 'Environment photo 11' },
  { name: '/assets/images/environment/MN_Env9.png', alt: 'Environment photo 12' },
  { name: '/assets/images/environment/MN_Env10.png', alt: 'Environment photo 13' },
]

export const environmentImages = envFiles.map((f) => ({ src: f.name, alt: f.alt }))

export const environmentLinks: LinkEntry[] = [
  {
    title: 'Greening Yarra Bridges',
    url: 'https://greeningyarrabridges.com',
    img: '/assets/images/links/ACZ9t-7O_400x400.jpeg',
  },
  {
    title: 'Bob Brown Foundation',
    url: 'https://bobbrown.org.au',
    img: '/assets/images/links/bob-brown.png',
  },
]

export const environmentBookPromo = {
  title: 'This Imaginary Feeling of Being Australian',
  coverImg: '/assets/images/links/book-cover.png',
  buyUrl: 'https://www.amazon.com.au/This-Imaginary-Feeling-Being-Australian/dp/B0CVVMZGWZ',
}
