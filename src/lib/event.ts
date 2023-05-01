import type { Event } from '../data';

export function getFutureEvents(events: Event[]) {
  return events.filter(event => (
    Date.now() < Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`)
  ))
}
