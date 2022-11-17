import { Data } from "../src/types.ts";

export function getEventData(data: Data) {
    const paths = data.url.split("/");
    if (paths[1] !== "events") {
        throw new Error("invalid event page url");
    }
    const event = data.events.find(e => e.id === paths[2]);
    if (!event) { throw new Error("the event unavailable"); }
    return event;
}

export function getBookData(data: Data) {
    const paths = data.url.split("/");
    if (paths[1] !== "works") {
        throw new Error("invalid event page url");
    }
    for (const s of data.series) {
        for (const book of s.books || []) {
            if (book.id == paths[2]) { return book; }
        }
    }
    throw new Error("the book unavailable");
}

export function getFutureEvents(data: Data) {
    return data.events.filter(event => Date.now() - Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`) < 0);
}

type CitationInfo = {
    bookId: string,
    author?: string,
    title: string,
    publisher?: string,
    bookUrl: string,
    publishDate: Date,
    series?: string,
    number?: string
};

export const buildBibtexCitation = (opts: CitationInfo) => `@book { navostoke-${opts.bookId},
author = "${opts.author || "ふぁぼん"}",
title = "${opts.title}",
${opts.series ? `series = "${opts.series}",` : ""}
${opts.number ? `number = "${opts.number}",` : ""}
publisher = "${opts.publisher || "ナヴァストーケ"}",
year = "${opts.publishDate.getFullYear()}",
URL = "${opts.bookUrl}"
}`.replace(/\n+/g, "\n");

export function formatDate(date: string) {
    return date.replaceAll("/", "〜").replaceAll("-", "/");
}
