import { Data } from "../src/types.ts";

export function getEventData(data: Data) {
    const paths = data.url.split("/");
    if (paths[1] !== "events") {
        throw new Error("invalid event page url");
    }
    return data.events.find(e => e.id === paths[2]);
}
