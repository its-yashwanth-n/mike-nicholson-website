import type { TravelVideo } from '@/types/content'

export type BrissyBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  /** The bolded/underlined core proposal from the source essay. */
  | { type: 'highlight'; text: string }
  /** The imagined back-and-forth between WA and SA on the winners' dais. */
  | { type: 'dialogue'; lines: string[] }

export const brissyIntro: BrissyBlock[] = [
  { type: 'heading', text: 'Overview' },
  {
    type: 'paragraph',
    text: 'Hot on the heels of Brisbane being awarded the 2032 Summer Olympics, and the amazing success of the Australian Rowing Team at the Tokyo Olympics, many of those from Victoria, this is an early plan for Victorian men’s and women’s youth rowers and scullers, and in turn can be adopted by the other states.',
  },
  {
    type: 'paragraph',
    text: 'The goal being to have a larger base and the best possible team to compete at Brisbane 2032, most youth rowers are at the age that will make them competitive by Brisbane ’32.',
  },
  {
    type: 'highlight',
    text: 'The key to increasing the base of youth rowers around Australia is to add an Under 21 Interstate race; that is each state would have a SECOND 8 and Quad Scull racing, like the Head of the Rivers.',
  },
  {
    type: 'paragraph',
    text: 'This means many 1st and 2nd crew rowers leaving school would have an additional opportunity to represent their State, straight after leaving school. Certainly Queensland, NSW and Victoria could achieve this easily.',
  },
  {
    type: 'paragraph',
    text: 'There is the fear they may have that it would “diminish” the state singlet, and this is understandable. However, there is also the other vision that it would “enhance or empower” the state singlet. You can imagine the Youth 2nd Interstate 8’s or Quad sculls racing down the course, and the commentator celebrating the depth of Australian schools rowing and now an additional 26 students who have just left school get a chance to represent their state and be part of the Brissy 32 squad, doubling the base numbers, and encouraging them to keep rowing.',
  },
  {
    type: 'paragraph',
    text: 'This would not affect the existing Pathway system at all, which is great. I am sure Rowing Australia would go for it, at least for the immediate next 4 years and see how it goes. As it is, the new initiative to have an Interstate Youth Men’s and Women’s 8 race in Canberra in April/May, is excellent. The largest entry list at the recent Australian Rowing Championships was the school kids U17 Single Sculls, and school regattas have a lot of Quad Sculls, so the enthusiasm for sculling needs to be catered for.',
  },
]

export const brissyApp: BrissyBlock[] = [
  { type: 'heading', text: 'Towards Brissy ’32 App' },
  {
    type: 'paragraph',
    text: 'Once everyone; Youth Pathway rowers, Interstate Under 21 squads, and others, are all signed up by email they could then get a TOWARDS BRISSY 32 TEAM APP. This could be like the LEARNER PERMIT APP, which new drivers fill in after each drive. They click on ‘Submit’. This data would then go to a central place that Rowing Australia people could access. Also, the actual rower could access it. And it could be adapted into graphs, statistics, and analysis. It would be like an easy to do diary and statistics data bank. Then the rower, about each month or so would get an email from TOWARDS BRISSY 32 giving feedback.',
  },
  {
    type: 'paragraph',
    text: 'Why should these changes happen now? Because every young person [and old for that matter] have suddenly discovered that changes happen all the time now, without much notice even, and they are used to it and wouldn’t notice anything.',
  },
  {
    type: 'paragraph',
    text: 'While change is happening, why not introduce Men’s and Women’s Interstate Quad sculls to be raced after the Kings and Queens Cup?',
  },
]

export interface BrissyTrophy {
  name: string
  race: string
  reason: string
}

export const brissyTrophiesIntro =
  'I suggest the Interstate Women’s Quad Scull trophy be named, The Gina Rinehart Cup, and the last race of the day, the Men’s Interstate Quad Scull, be called, The John Coates Cup:'

export const brissyTrophies: BrissyTrophy[] = [
  {
    name: 'The Gina Rinehart Cup',
    race: 'Interstate Women’s Quad Scull',
    reason: 'Because she is financing the entire summer and winter, senior and junior, Australian Olympic Team ’til 2032.',
  },
  {
    name: 'The John Coates Cup',
    race: 'Interstate Men’s Quad Scull (the last race of the day)',
    reason: 'Because he managed to secure both the Sydney and Brisbane Olympics for Australia.',
  },
]

export const brissyOutro: BrissyBlock[] = [
  {
    type: 'paragraph',
    text: 'Normally it’s NSW or Victoria hogging the winners’ dais at the end of the Inter State Regatta. Suddenly, now, other states like WA or SA can say,',
  },
  {
    type: 'dialogue',
    lines: [
      'Well, we have four really good scullets and rowers, so let’s have a tilt at the Quads.',
      'Yes, and if there’s a cross wind, put NSW and Victoria on the two worst stations with an empty lane between them and us.',
    ],
  },
  {
    type: 'paragraph',
    text: 'Change and improvement is essential for Australian Rowing to be up to speed by 2032.',
  },
]

export interface BrissyReview {
  quote: string
  attribution: string
  video: TravelVideo
}

export const brissyReviews: BrissyReview[] = [
  {
    quote:
      'This idea of having a 1st and 2nd Under 21 Men’s and Women’s 8’s and Quad Sculls is a masterstroke. The entire Rowing Community should watch this film on The Australian Rowing Championships held in Tasmania, March 2021:',
    attribution: 'Rowing Victoria, Human Behavioural Science Unit',
    video: { id: '545847675', source: 'vimeo' },
  },
  {
    quote:
      'No-one ever imagined that the MUBC Men’s Quadruple Scull that competed six years prior to the Tokyo 2020 Olympics, in The All-Japan Masters Rowing Championships, at Shimane Prefecture, could have inspired the Australian Men’s and Women’s Quadruple Sculls to win Bronze Medals at the Tokyo Olympics:',
    attribution: 'MUBC Strategic Sub-Committee for Improving Everything',
    video: { id: 'zXiIySXmZek', source: 'youtube' },
  },
]

export const brissySignature = ['Conceived and written by Mike Nicholson,', 'MUBC Coxswain, Sculler and Coach.']

export const brissyPhotos: { src: string; alt: string }[] = [
  { src: '/assets/images/brissy/brissy-1.jpg', alt: 'The MUBC crew competing in the All-Japan Rowing Championships, Tokyo, August 1969' },
  { src: '/assets/images/brissy/brissy-2.jpg', alt: 'Coxswain Mike Nicholson paddling a single scull between training sessions' },
]

export const brissyPhotoCaption =
  'MUBC competing in the All-Japan Rowing Championships in Tokyo, August 1969, and right, the coxswain, Mike Nicholson paddling in a single scull between training sessions as the university student’s study. Forty-five years later half the team returned to compete in the All-Japan Master’s Championships.'
