import { Luminous, LuminousGallery } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css'

const webpSupport = document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0

const table: Record<string, HTMLElement[]> = {};
for (const elem of document.querySelectorAll("a[data-gallery]")) {
  if (elem instanceof HTMLAnchorElement) {
    if (!elem.dataset.gallery) { continue; }

    if (webpSupport && typeof elem.dataset.galleryWebp === 'string') {
      elem.href = elem.dataset.galleryWebp.endsWith(".webp") ? elem.dataset.galleryWebp : elem.href.replace(/\.[^\.]*$/, ".webp")
    }

    if (!Array.isArray(table[elem.dataset.gallery])) {
      table[elem.dataset.gallery] = [];
    }
    table[elem.dataset.gallery]!.push(elem);
  }
}

for (const [_key, elems] of Object.entries(table)) {
  elems.length == 1 ? new Luminous(elems[0]!) : new LuminousGallery(elems);
}

const readOnlyTextareas = Array.from(document.querySelectorAll('textarea[readonly]'));
for (const textarea of readOnlyTextareas) {
  if (!(textarea instanceof HTMLTextAreaElement)) { throw new Error(); }
  textarea.addEventListener('click', () => {
    textarea.select();
  });
}
