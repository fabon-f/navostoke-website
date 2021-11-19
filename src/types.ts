import React from "https://deno.land/x/react_deno@17.0.2/react.ts";

export type Data = {
    events: Event[];
    series: {name:string,description?:string, books?:Book[]}[]
    externalWorks: Circle[];

    title?: string;
    description?: string;
    stylesheet?: string | string[];
    ogImage?: string;
    twitterCardType?: string;

    url: string;
    children?: React.ReactNode;
}

type Event = {
    name: string;
    date: string;
    url?: string;
    status?: string;
    id?: string;
    img: {type: string; src: string};
}

type Book = {
    name: string;
    id: string;
    published?: boolean;
}

type Circle = {
    name: string;
    works: {name:string;url:string;description:string}[];
}
