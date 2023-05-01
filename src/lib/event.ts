import type { Event } from '../data';

export function getFutureEvents(events: Event[]) {
  return events.filter(event => (
    Date.now() < Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`)
  ))
}

export function getPastEvents(events: Event[]) {
  return events.filter(event => (
    Date.now() >= Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`)
  ))
}

export function getEventData(id: string, events: Event[]) {
  const event = events.find(e => e.id === id);
  if (!event) { throw new Error("the event unavailable"); }
  return event;
}
