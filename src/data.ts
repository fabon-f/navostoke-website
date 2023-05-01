export type Series = {
  name: string;
  description?: string;
  works?: Work[];
};

export type Work = {
  name: string;
  id: string;
  publishDate: string | null;
};

export const series: Series[] = [
  {
    name: 'ロシア語警察24時',
    description: '創作物(主にラノベ・マンガ・アニメ・ゲーム)を題材として、ロシア語などの解説や作品へのツッコミをするシリーズです。',
    works: [
      {
        name: 'vol. 1 人名エトセトラ',
        id: 'russian-police-1',
        publishDate: '2022-02-20'
      }
    ]
  },
  {
    name: 'その他(非シリーズもの)',
  }
];

export type Event = {
  name: string;
  date: string;
  id: string;
  status: string;
  url?: string;
  space?: string;
};

export const events: Event[] = [
  {
    name: 'COMITIA139',
    date: '2022-02-20',
    url: 'https://www.comitia.co.jp/html/139.html',
    status: '当選',
    space: 'お20a',
    id: 'comitia139',
  },
  {
    name: 'コミックアカデミー20',
    date: '2022-05-14/2022-05-15',
    url: 'https://comiaca.com/catalog20.html',
    status: '当選',
    space: 'C03',
    id: 'comiaca20'
  },
  {
    name: 'コミックマーケット100',
    date: '2022-08-13',
    url: 'https://www.comiket.co.jp/info-a/C100/C100info.html',
    status: '当選',
    space: '土曜日 東地区 "ペ" ブロック 32b',
    id: 'c100',
  },
  {
    name: 'コミックアカデミー21',
    date: '2022-11-18/2022-11-20',
    url: 'https://comiaca.com/catalog21.html',
    status: '当選',
    space: 'C02',
    id: 'comiaca21'
  }
]
