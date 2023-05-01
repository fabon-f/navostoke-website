import type { Work, Series } from '../data'

export const isPublished = (work: Work) => work.publishDate !== null && Date.parse(`${work.publishDate}T00:00:00+0900`) < Date.now()

export function getBookData(id: string, series: Series[]) {
  for (const s of series) {
      for (const book of s.works ?? []) {
          if (book.id == id) { return book; }
      }
  }
  throw new Error("the book unavailable");
}
