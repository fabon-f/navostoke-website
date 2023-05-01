import type { HTMLAttributes } from 'astro/types';

type ImgProps = HTMLAttributes<'img'>;

export type Series = {
  name: string;
  description?: string;
  works?: Work[];
};

export type Work = {
  name: string;
  id: string;
  publishDate: string | null;
  img?: ImgProps;
};

export const series: Series[] = [
  {
    name: 'ロシア語警察24時',
    description: '創作物(主にラノベ・マンガ・アニメ・ゲーム)を題材として、ロシア語などの解説や作品へのツッコミをするシリーズです。',
    works: [
      {
        name: 'vol. 1 人名エトセトラ',
        id: 'russian-police-1',
        publishDate: '2022-02-20',
        img: {
          src: '/img/works/russian-police-1-cover.png',
          width: '765',
          height: '1087',
          alt: 'ロシア語知識不要! ロシア人キャラの正しい命名法 「ここがおかしい!」 ロシア語的ツッコミ付き 変な名前 傾向と対策'
        }
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
  spaceCaveat?: string;
  img?: ImgProps;
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
    spaceCaveat: 'ナヴァストーケ+青葉小路',
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
    spaceCaveat: 'ナヴァストーケ+青葉小路',
    id: 'comiaca21'
  }
]
