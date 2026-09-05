import type { Film } from '@/types/content'

export type RadioSpeaker = 'host' | 'mike'

export type RadioBlock =
  | { type: 'line'; speaker: RadioSpeaker; text: string }
  | { type: 'link'; href: string }
  | { type: 'video'; film: Film }
  | { type: 'spotify'; href: string }
  | { type: 'images'; items: { src: string; alt: string }[] }

const IMG = '/assets/images/brissy/radio'

export const radioTranscript: RadioBlock[] = [
  { type: 'line', speaker: 'host', text: 'Welcome to our first edition of RADIO MUBC, and our special guest is Mike Nicholson.' },
  { type: 'line', speaker: 'mike', text: 'Thank you for having me; it’s quite an honour.' },
  { type: 'line', speaker: 'host', text: 'The question on everyone’s mind is where should they hold the Brisbane Olympics regatta?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'It’s an interesting one, since Rockhampton’s Fitzroy River needs major upgrades, at a potential cost of half a billion dollars for the 2032 Olympics. And the possibility of a ‘Lay Down Sally’ moment with a crocodile lunging over the boat and eating her would be worse than feeding her to the media.',
  },
  {
    type: 'images',
    items: [{ src: `${IMG}/radio-1.jpg`, alt: 'Concept rendering of a proposed Brisbane 2032 Olympic regatta venue, with grandstands lining the course' }],
  },
  { type: 'link', href: 'https://c.org/Y68TPHHrxZ' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'This was set up by Ray Ebert, one of Australia’s best commentators, retired now, but a mentor to the new wave of commentators, and let’s face it, listening to these new girls and guys is as good as hearing a Shakespearean sonnet. However, l prefer the Yarra River; three lanes, lots of bridges, bends and curves, dolphins everywhere, it would be perfect.',
  },
  {
    type: 'line',
    speaker: 'host',
    text: 'And bang the Dutch and the Americans on the north station, Brits and Germans on the south, cancel Kiwi visas obviously, and pop Australia in the centre station for all races and it’s a gold medal windfall for the Aussies, but tricky for Quad sculls; they don’t have coxes.',
  },
  {
    type: 'line',
    speaker: 'mike',
    text: 'Who cares about quadruple sculls anyway? Rowing Australia certainly does not; even though Australia has been more successful in Quad sculls than eights at the Olympics.',
  },
  { type: 'line', speaker: 'host', text: 'And l notice this is just text and not actual voices like what MERCANTILE RADIO presents.' },
  { type: 'line', speaker: 'mike', text: 'Not so, simply cut and paste this into your Cox Box and the whole crew can hear, loud and clear.' },
  { type: 'line', speaker: 'host', text: 'Of course. So, let’s get back to the Quad issue, what are you getting at?' },
  { type: 'line', speaker: 'mike', text: 'Well l said it already, it’s all there.' },
  { type: 'video', film: { id: '827546741', title: 'Champion Lakes, 2023', source: 'vimeo' } },
  {
    type: 'line',
    speaker: 'host',
    text: 'Wasn’t there a rumour that the 1986 gold medal Men’s 8 didn’t want future 8’s to win so they were the only ones!! Hold the record forever?',
  },
  {
    type: 'line',
    speaker: 'mike',
    text: 'Well back in 2023 l had long talks with various Olympic luminaries and they didn’t think having 1st and 2nd Youth State 8’s, never mind quad sculls that are completely excluded anyway, would encourage school rowers to keep rowing or sculling when they leave school. Then there is the apparel gear; rugby jumpers, hoodies, zooties, beanies, scarves, towels, caps, flags, blazers, pens, etc, youth state representatives would get; it’s something they have for life, and a lot of school rowers start in year 8 and go through to year 12, October to December, rowing camps in January, then full on from February to April, it’s a lot of rowing. Quite often they don’t win any regattas, yet each crew has a standout member, but this has all fallen on deaf ears. Rowing Australia simply doesn’t care.',
  },
  {
    type: 'line',
    speaker: 'host',
    text: 'Well, that fits in with your conspiracy theory that they don’t want to encourage up and coming rowers and scullers or even give them a chance to emerge as future Australian rowers, since representing your state is the next step up from school rowing.',
  },
  {
    type: 'line',
    speaker: 'mike',
    text: 'I do tend to think that NSW and Sydney University are the culprits here ~ they seem to run Rowing Australia ~ and l have no idea why they are blocking simple progress. It’s the old ‘carrot and stick’ thing. The phrase ‘carrot and stick’ is a metaphor for when two different methods of incentivisation are simultaneously employed: the “carrot”, being my idea, referring to the promising and giving of desired rewards in exchange for co-operation; and the “stick” [NSW, Sydney Uni and Rowing Australia], referring to the threat of undesired consequences in response to noncompliance, just blocking progress.',
  },
  { type: 'line', speaker: 'host', text: 'What would Quad sculls achieve as the last races of the day at the King’s Cup regatta?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'Well, what we have is either Victoria or NSW winning the King’s Cup every year, except this year when Queensland won after an 87-year drought. So, by introducing men’s and women’s quads it would mean the states that never win the King’s Cup can put their best rowers and scullers into a quad scull and would have a good chance of winning and would add a bit of variety to that day. Holding those two races at the end would give the Presidents Cup scullers time to recover, they would sure to have a seat in the states Quad.',
  },
  {
    type: 'line',
    speaker: 'host',
    text: 'This is big; you were blocked even after winning two Herald Shields, the Winter Sculling Series on the Yarra River? I bet the legal silks at Mubc, and lesser beings, will get onto this idiot, Ian Thompson. Our sound technicians here are sobbing onto each other’s shoulders, tears streaming into puddles of lost hope into a river of shattered dreams, while weeping mothers wash, tumble-dry and iron zooties without the Big White V on them.',
  },
  {
    type: 'images',
    items: [{ src: `${IMG}/radio-2.png`, alt: 'Screenshot of a Wikipedia “blocked” notice on the talk page of user Michael John Nicholson' }],
  },
  { type: 'line', speaker: 'host', text: 'We’re into the red buoys of this absorbing interview. What’s Greening Bridges about?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'The King Street Bridge is one of the ugliest bridges on Earth. Many unattractive bridges could be easily improved, and the King Street Bridge could be transformed into a beautiful rainforest feature; ferns, ivy, lighting effects at night. It would be a highlight for crews paddling under it and tourists around the world on those ferry sight-seeing tours along the Yarra River.',
  },
  {
    type: 'images',
    items: [
      { src: `${IMG}/radio-3.jpg`, alt: 'The King Street Bridge underside as it looks today, plain concrete over the Yarra River' },
      { src: `${IMG}/radio-4.jpg`, alt: 'Concept painting of the King Street Bridge underside “greened” with ferns and palms' },
      { src: `${IMG}/radio-5.jpg`, alt: 'Another view of the King Street Bridge underside as it looks today' },
      { src: `${IMG}/radio-6.jpg`, alt: 'Another concept painting of the King Street Bridge greened with rainforest planting' },
    ],
  },
  { type: 'video', film: { id: 'zz45AJZ1eeA', title: 'Greening Yarra Bridges', source: 'youtube' } },
  {
    type: 'line',
    speaker: 'host',
    text: 'Why do you think RA and RV don’t promote Mercantile Radio podcasts and Decent Rowing coaching videos on each of their newsletters and websites?',
  },
  { type: 'line', speaker: 'mike', text: 'It’s a real mystery. I think they don’t want to promote rowing as a sport.' },
  { type: 'line', speaker: 'host', text: 'But they run the sport of rowing, and are paid good wages, you would think they could join the dots or puddles.' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'Decent Rowing’s coaching videos are the best I’ve seen in the World Rowing arena. Any smart coach would share the relevant ones with crew members to give them top-level coaching tips. And then there are the Mercantile Radio podcasts done by Drew Ginn; absorbing, informative and entertaining.',
  },
  { type: 'line', speaker: 'host', text: 'Any standout ones of the over 40 so far recorded that people can access for free?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'There are many excellent ones, but Drew’s interview with Sue Chapman-Popa stands out as the best, and the most controversial. It traces her rowing journey as an Olympic bronze medallist and her role in raising her daughter, Rosemary, who went on to win gold at Tokyo in 2021. And she set up and runs Rowing School Victoria where she has taught thousands of people how to row.',
  },
  {
    type: 'images',
    items: [
      { src: `${IMG}/radio-7.jpg`, alt: 'An Australian women’s rowing crew on the podium in gold uniforms, holding flowers and medals' },
      { src: `${IMG}/radio-8.jpg`, alt: 'Sue Chapman-Popa with her daughter Rosemary at a regatta' },
      { src: `${IMG}/radio-9.jpg`, alt: 'Graphic celebrating an Australian gold medal crew at the Tokyo 2020 Olympics' },
    ],
  },
  { type: 'line', speaker: 'host', text: 'What was controversial about it?' },
  { type: 'line', speaker: 'mike', text: 'Sue said that when she first met her future husband, Ion Popa, she thought he was stupid.' },
  {
    type: 'line',
    speaker: 'host',
    text: 'Oh my gosh, this will inspire rowing wives all around the world! Did Mercantile Radio really leave that in? Their days are numbered! Ion defected from Romania and rowed in the seven seat of the Australian eight that won gold in 1986!',
  },
  { type: 'spotify', href: 'https://open.spotify.com/episode/3pGSyhrqg4cahaKCi5GpI6' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'Well, there are other things l think are stupid like the Yarra Yarra Rowing Club President terminating my University High rowing club. Mubc would never do that, their Presidents have courage; firm handshakes and look you in the eye.',
  },
  {
    type: 'images',
    items: [
      { src: `${IMG}/radio-10.jpg`, alt: 'Cover of “The New Idea” by Michael Nicholson, featuring the University High School Rowing Club' },
      { src: `${IMG}/radio-11.jpg`, alt: 'Whimsical collage of a rowing crew carrying a boat past dinosaurs, stormtroopers and a robot' },
    ],
  },
  { type: 'line', speaker: 'host', text: 'Wow, that really was stupid. What happened?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'He simply sent an email saying, ‘Uni High is terminated,’ without having the guts to phone me, reply to my emails, or even introduce himself to the Uni High students who rowed out of YYRC.',
  },
  { type: 'line', speaker: 'host', text: 'I thought YYRC wanted to encourage school rowing? Was he angry about the music you used in some of your films?' },
  { type: 'video', film: { id: 'u_7xHJzZo04', title: 'The Barwon River', source: 'youtube' } },
  {
    type: 'line',
    speaker: 'mike',
    text: 'The private schools produce heaps of excellent videos on their rowing seasons, online; it’s a great way of showing the school kids what they have done. But Rowing Victoria never put them in their newsletters, or even their website, neither does Rowing Australia. They could run a fantastic nationwide competition for the best school rowing video.',
  },
  { type: 'line', speaker: 'host', text: 'What other bright ideas do you have?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'There are no regattas on the Yarra anymore, during winter, or all year round, other than a couple of marathons, Henley etc, because it’s too hard for Rowing Victoria. They are public servants who should be shunted off to other sports.',
  },
  { type: 'line', speaker: 'host', text: 'Like to the AFL? The MCG still doesn’t have solar panels. Any other big ideas?' },
  {
    type: 'line',
    speaker: 'mike',
    text: 'MUBC and Mercs are the top clubs on the Yarra River, so have races between Mubc and Mercs every Thursday night; 8’s, 4’s quads etc over 2000 metres, like training, all year round, no permission needed, Rowing Victoria not involved, coaches start them and follow on their bikes as umpires. If a ferry comes along, or some crew turning in the way, simply stop the race, then once the river is clear, start them again from where they left off. No entry fees, no medals, just racing.',
  },
  {
    type: 'line',
    speaker: 'host',
    text: 'So, you really want Australian rowing to go forwards and not backwards? Many thanks for this interview. What do you think of the new management at Mubc?',
  },
  { type: 'line', speaker: 'mike', text: 'Will be excellent.' },
  { type: 'video', film: { id: 'NF5cE4wggT4', title: '776BC Backwards Vs Forwards', source: 'youtube' } },
  { type: 'line', speaker: 'host', text: 'By the way, what happened with your idea for BC776 to produce Mubc tea towels?' },
  { type: 'line', speaker: 'mike', text: 'Didn’t reply to my email.' },
  { type: 'line', speaker: 'host', text: 'That’s understandable because they didn’t have computers in 776 BC.' },
  {
    type: 'images',
    items: [{ src: `${IMG}/radio-12.jpg`, alt: 'Painting of the Melbourne University Boat Club boathouse with rowers on the water out front' }],
  },
]
