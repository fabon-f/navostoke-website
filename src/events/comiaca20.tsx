import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage, DateExpression } from "../../lib/components.tsx";
import { getEventData } from "../../lib/helpers.ts";
import { Data } from "../types.ts";

export const title = "コミックアカデミー20";
export const description = "コミックアカデミー20のイベント参加情報";

export default (data: Data) => {
    const eventData = getEventData(data);
    return <main role="main">
        <h1>コミックアカデミー20{ eventData.status && ` (${eventData.status})` }</h1>
        <p>開催日: <DateExpression date={eventData.date} /></p>
        {eventData.space && <p>スペース: <strong>{eventData.space}</strong> (ナヴァストーケ+青葉小路)</p>}
        <p>{eventData.url && <ExternalLink href={eventData.url}>イベント公式サイト</ExternalLink>}</p>

        <h2>頒布物</h2>
        <ul>
            <li><a href="/works/russian-police-1/">ロシア語警察24時 vol. 1 人名エトセトラ</a> (既刊)</li>
        </ul>

        <h2>通販その他</h2>
        <h3>ロシア語警察24時 vol. 1 人名エトセトラ</h3>
        <ul>
            <li><ExternalLink href="https://navostoke.booth.pm/items/3652492">通販(BOOTH)</ExternalLink></li>
            <li><ExternalLink href="https://navostoke.booth.pm/items/3652511">電子版(BOOTH)</ExternalLink></li>
        </ul>
    </main>;
}
