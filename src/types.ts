import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import type { Helper, Data as LumeData } from "lume/core.ts";

export type Data = {
    events: Event[];
    series: {name:string,description?:string, books?:Book[]}[]
    externalWorks: Circle[];

    title?: string;
    description?: string;
    stylesheet?: string | string[];
    script?: string | string[];
    ogImage?: string;
    twitterCardType?: string;

    url: string;
    children?: React.ReactNode;
}

export type BuiltinFilters = {
    md: (content: string, inline?: boolean) => string;
    njk: (content: string, data?: LumeData) => Promise<string>;
    url: (path?: string, absolute?: boolean) => string;
    htmlUrl: (html?: string, absolute?: boolean) => string;

    date: (date: Date | string, format?: string, locale?: string) => string;
};

export type Filters = Record<string, Helper> & BuiltinFilters;

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

type Circle = {
    name: string;
    works: {name:string;url:string;description:string}[];
}
