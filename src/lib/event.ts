import { Temporal } from 'temporal-polyfill'
import { endOfDay, isAfter } from 'vremel';
import type { Event } from '../data';

function isFutureEvent(event: Event) {
  return isAfter(
    endOfDay(
      Temporal.PlainDate.from(
        event.date.includes("/") ? event.date.split("/")[1]! : event.date,
      ).toZonedDateTime("Asia/Tokyo"),
    ),
    Temporal.Now.zonedDateTimeISO(),
  );
}

export function getFutureEvents(events: Event[]) {
  return events.filter(event => isFutureEvent(event))
}

export function getPastEvents(events: Event[]) {
  return events.filter(event => !isFutureEvent(event))
}

export function getEventData(id: string, events: Event[]) {
  const event = events.find(e => e.id === id);
  if (!event) { throw new Error("the event unavailable"); }
  return event;
}
