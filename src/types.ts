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

export type BuiltinFilters = {
    md: (content: string, inline?: boolean) => string;
    njk: (content: string, data?: any) => Promise<string>;
    url: (path?: string, absolute?: boolean) => string;
    htmlUrl: (html?: string, absolute?: boolean) => string;

    date: (date: Date | number, format: string, opt?: { locale: any, weekStartsOn: 0|1|2|3|4|5|6, firstWeekContainsDate: number, useAdditionalWeekYearTokens: boolean, useAdditionalDayOfYearTokens: boolean }) => string;
};

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
