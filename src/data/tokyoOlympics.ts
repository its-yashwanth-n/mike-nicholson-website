import type { Film } from '@/types/content'

/** Featured video, shown prominently above the historical grid (it also appears within the
 * grid itself as the "1956 MELBOURNE" entry — the old site featured it twice). */
export const longevityFilm: Film = {
  id: 'hBcO5tCVoHg',
  title: 'Longevity in Rowing',
  source: 'youtube',
  featured: true,
}

/** Previous Olympic Regattas, newest to oldest. */
export const tokyoOlympicsFilms: Film[] = [
  { id: 'FLNrRcw_vls', title: '2016 Rio Rowing', source: 'youtube' },
  { id: 'j__SayRU6W0', title: 'RIO ROWING Promo', source: 'youtube' },
  {
    id: 'JP4LHhPU28k',
    title: 'Australian Gold Medal M4X and MLW4 training',
    source: 'youtube',
  },
  { id: 'CnQKr_MbRJE', title: 'London Olympics, 2012', source: 'youtube' },
  { id: 'Qyo9hQoFLyw', title: '2012 LONDON, KIWI MAHE DRYSDALE', source: 'youtube' },
  { id: '5GypGm2koJM', title: 'Beijing Olympics, 2008', source: 'youtube' },
  { id: 'a8nJ6rXtUXI', title: "2008 BEIJING, MEN'S 2X & 4-", source: 'youtube' },
  { id: '8BD0XNeXqIU', title: '2000 SYDNEY', source: 'youtube' },
  { id: 'bJ-vea6kmgg', title: '1996 ATLANTA', source: 'youtube' },
  { id: '374PGBy3SBI', title: '1988 SEOUL', source: 'youtube' },
  { id: 'JcHwAgEYR-o', title: '1980 MOSCOW', source: 'youtube' },
  { id: 'hBcO5tCVoHg', title: '1956 MELBOURNE', source: 'youtube', featured: true },
]

interface BilingualCopy {
  en: string
  jp: string
}

/** The page's H1 pairing: "TOKYO OLYMPIC REGATTA" / Japanese, plus "20/20 VISION" / Japanese. */
export const heroCopy: BilingualCopy = {
  en: '20/20 Vision',
  jp: '東京オリンピック　ボート競技大会　2020ビジョン',
}

export const introCopy: BilingualCopy = {
  en: 'The honourable Mike Nicholson presents news and information on the 2020 Tokyo Olympic Regatta.',
  jp: 'MUBCマイクニコルソンより、2020年開催の東京オリンピック　ボート競技大会に関する興味ある情報をお届けします。',
}

export const historicPhotoCaption: BilingualCopy = {
  en: "The ageless 1956 Japanese Men's 8 competing in the FISA World Masters Games at Lake Wendouree, Ballarat, 2014.",
  jp: '1956年メルボルンオリンピック出場の日本代表クルーは、2014年　五輪会場のウエンドリー湖で開催されたFISA世界マスターズ大会に出漕。50年以上の時を経ても衰えぬ情熱で大会に臨んだ。',
}

export const gridSectionCopy: BilingualCopy = {
  en: "Previous Olympic Regatta's",
  jp: 'オリンピックボート競技の歴史',
}

export const recentNewsSectionCopy: BilingualCopy = {
  en: 'Recent News',
  jp: '最近のニュース',
}

export const tokyoBayCourse = {
  img: '/assets/images/tokyo-olympics/tokyoOlmpCourse.jpg',
  caption: 'The proposed Tokyo Bay Olympic Rowing Course.',
}

export const mubcTokyoTripLink = {
  title: 'MUBC Tokyo Trip',
  img: '/assets/images/tokyo-olympics/mubc_tokyo_trip_thumb.jpg',
  to: '/mubc-tokyo-trip',
}
