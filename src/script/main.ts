/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
declare class Luminous {
    constructor(element: HTMLElement)
}
declare class LuminousGallery {
    constructor(elements: ArrayLike<HTMLElement>)
}

const table: Record<string, HTMLElement[]> = {};
for (const elem of document.querySelectorAll("a[data-gallery]")) {
    if (elem instanceof HTMLElement) {
        if (!elem.dataset.gallery) { continue; }
        if (!Array.isArray(table[elem.dataset.gallery])) {
            table[elem.dataset.gallery] = [];
        }
        table[elem.dataset.gallery].push(elem);
    }
}

for (const [_key, elems] of Object.entries(table)) {
    elems.length == 1 ? new Luminous(elems[0]) : new LuminousGallery(elems);
}
