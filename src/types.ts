import type { ComponentChildren } from "preact";

export type Data = {
    events: Event[];
    series: {name:string,description?:string, books?:Book[]}[]
    downloads: DownloadItem[]

    title?: string;
    description?: string;
    stylesheet?: string | string[];
    globalScript?: string | string[];
    pageScript?: string | string[];
    ogImage?: string;
    twitterCardType?: string;

    url: string;
    children?: ComponentChildren;
}

type Event = {
    name: string;
    date: string;
    url?: string;
    status?: string;
    id?: string;
    space?: string;
    img: {type: string; src: string};
}

type Book = {
    name: string;
    id: string;
    published?: boolean;
    publishDate: Date;
    img?: {type: string; src: string};
}

type DownloadItem = {
    title: string;
    id: string;
    img?: { type: string; src: string };
    ogImage?: string;
    archive: string;
    encrypted?: boolean;
    extractOnWeb?: boolean;
}
