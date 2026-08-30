import type { BookEntry, Film } from "@/types/content";

export const stores = [
  {
    name: "Readings",
    location: "Carlton",
    logo: "/assets/images/home/readings_logo.png",
  },
  {
    name: "Abbey's",
    location: "Sydney",
    logo: "/assets/images/home/abbeys_logo.png",
  },
];

export const featuredBooks: BookEntry[] = [
  {
    title: "The Mosaic Escalator",
    coverImg: "/assets/images/books/mosaic_escalator_cover.png",
    buyUrl:
      "https://www.amazon.com.au/MOSAIC-ESCALATOR-Mr-Michael-Nicholson/dp/B0CPDQLZHS",
    embedVideo: { id: "1016399714", source: "vimeo" },
    bonusImage: {
      img: "/assets/images/books/mosaic_info.jpg",
      title: "Finalist - Best Fiction Book Nomination",
    },
  },
  {
    title: "Daughter to Bligh",
    coverImg: "/assets/images/books/book2_thumbnail.png",
    buyUrl:
      "https://www.amazon.com.au/Daughter-Bligh-amazing-love-life/dp/B0CVLP1CJG",
    embedVideo: { id: "zqYgpU5o7f8", source: "youtube" },
  },
  {
    title: "This Imaginary Feeling of Being Australian",
    coverImg: "/assets/images/books/book_cover.jpg",
    buyUrl:
      "https://www.amazon.com.au/This-Imaginary-Feeling-Being-Australian/dp/B0CVVMZGWZ",
    embedVideo: { id: "935029383", source: "vimeo" },
  },
];

export const adCards: Film[] = [
  {
    id: "qrW5PZDh1_w",
    title: "Canon Ad",
    source: "youtube",
    img: "/assets/images/home/canon_ad.png",
  },
  {
    id: "1148849554",
    title: "Specsavers Ad",
    source: "vimeo",
    img: "/assets/images/home/specsavers_ad.jpeg",
  },
];

export const films: Film[] = [
  { id: "1135208607", title: "Urban Gorilla", source: "vimeo" },
  { id: "CnQKr_MbRJE", title: "London Olympics 2012", source: "youtube" },
  { id: "923250781", title: "Magpies vs. Lions", source: "vimeo" },
  { id: "779136226", title: "The Land of Thunder Dragon", source: "vimeo" },
  { id: "827546741", title: "Champion Lakes, 2023", source: "vimeo" },
  { id: "955806592", title: "The Garden", source: "vimeo" },
];

export const additionalFilms: Film[] = [
  { id: "1169071235", title: "Choir of Ormond College, 1987", source: "vimeo" },
  {
    id: "1126557723",
    title: "Melbourne University Boat Club Annual Dinner 2025",
    source: "vimeo",
  },
  {
    id: "1010049497",
    title: "Liberty, equality, fraternity",
    source: "vimeo",
    docLink: {
      label: "Film inquiry transcript",
      href: "https://docs.google.com/document/d/1zVucyu9TRH2AxVLMBIOCI0cMpeL37L1a/edit?usp=sharing&ouid=117364602023783316252&rtpof=true&sd=true",
    },
  },
  {
    id: "1038467203",
    title: "Making Australian Rowing Great Again ... again",
    source: "vimeo",
  },
  { id: "i4RDT9yImm8", title: "A Game of Golf", source: "youtube" },
];

export const additionalVideo: Film = {
  id: "334365227",
  title: "Captain Lonsdale's Speech Film",
  source: "vimeo",
};

export const newVideo: Film = {
  id: "955796093",
  title: "101 - Istanbul",
  source: "vimeo",
};
