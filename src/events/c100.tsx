import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { getEventData } from "../../lib/helpers.ts";
import { Data } from "../types.ts";

export const title = "コミックマーケット100";
export const description = "C100のイベント参加情報";

function imageElement(opt: {type: string; src: string}) {
    const imgPath= `/img/events/${opt.src}`
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={imgPath} />
    } else {
        return <img {...opt} src={imgPath} />
    }
}

export default (data: Data) => {
    const eventData = getEventData(data);
    if (!eventData) { throw new Error("event not found"); }
    return <main role="main">
        <h1>コミックマーケット100{ eventData.status && ` (${eventData.status})` }</h1>
        {eventData.space && <p>スペース: <strong>{eventData.space}</strong></p>}
        <p>{eventData.url && <ExternalLink href={eventData.url}>イベント公式サイト</ExternalLink>}</p>
        {imageElement(eventData.img)}

        <h2>頒布物</h2>
        <ul>
            <li>新刊 (予定)</li>
            <li><a href="/works/russian-police-1/">ロシア語警察24時 vol. 1 人名エトセトラ</a> (既刊)</li>
        </ul>
    </main>;
}
