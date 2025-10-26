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
  id?: string;
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
  },
  {
    name: 'コミックアカデミー23',
    date: '2023-11-25/2023-11-26',
    url: 'https://comiaca.com/ca23/catalog/',
    status: '当選',
    space: '委託'
  },
  {
    name: 'コミックアカデミー26',
    date: '2025-05-24/2025-05-25',
    url: 'https://comiaca.com/ca26/catalog/',
    status: '当選',
    space: '委託'
  }
]

export type DownloadItem = {
  title: string;
  id: string;
  img?: ImgProps;
  ogImage?: string;
  archive: string;
  encrypted?: boolean;
  extractOnWeb?: boolean;
  /**
   * SHA-256 hash of password
   */
  passwordHash: string;
}

export const downloads: DownloadItem[] = [
  {
    id: 'russian-police-1',
    title: 'ロシア語警察24時 vol. 1 人名エトセトラ (電子版)',
    ogImage: '/img/works/russian-police-1-cover.png',
    archive: '/archives/ruspolice1_e.zip',
    encrypted: true,
    extractOnWeb: true,
    img: { src: '/img/works/russian-police-1-cover.png', width: '765', height: '1087', alt: '' },
    passwordHash: 'f2db474462ff118710368a5ded2d8229d6dd39bafe8858c79f7118862029199a'
  }
]
