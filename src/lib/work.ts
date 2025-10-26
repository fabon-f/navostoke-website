import { Temporal } from 'temporal-polyfill'
import { isBefore } from 'vremel'

import type { Work, Series } from '../data'

export const isPublished = (work: Work) =>
  work.publishDate !== null &&
  isBefore(Temporal.PlainDate.from(work.publishDate).toZonedDateTime("Asia/Tokyo"), Temporal.Now.zonedDateTimeISO())

export function getBookData(id: string, series: Series[]) {
  for (const s of series) {
      for (const book of s.works ?? []) {
          if (book.id == id) { return book; }
      }
  }
  throw new Error("the book unavailable");
}
