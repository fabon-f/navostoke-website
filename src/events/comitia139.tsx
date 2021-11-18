import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { getEventData } from "../../lib/helpers.ts";
import { Data } from "../types.ts";

export const title = "COMITIA139";
export const description = "COMITIA139のイベント参加情報";

export default (data: Data) => {
    const eventData = getEventData(data);
    if (!eventData) { throw new Error("event not found"); }
    return <main role="main">
        <h1>COMITIA139{ eventData.status && ` (${eventData.status})` }</h1>
        <p>{eventData.url && <ExternalLink href={eventData.url}>イベント公式サイト</ExternalLink>}</p>
        <WebpImage src="/img/events/comitia139_circlecut" alt="新刊 ロシア語警察24時 vol. 1 人名エトセトラ 創作者のためのロシア人名講座 アニメなどに出てくるロシア人の名前に関するあれこれ" />
    </main>;
}
