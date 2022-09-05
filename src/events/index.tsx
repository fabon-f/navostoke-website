import { ExternalLink, WebpImage, DateExpression } from "../../lib/components.tsx";
import { Data } from "../types.ts";

export const title = "イベント参加情報";
export const description = "過去のものを含む全てのイベント参加情報";

function imageElement(opt: {type: string; src: string}) {
    const imgPath= `/img/events/${opt.src}`
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={imgPath} />
    } else {
        return <img {...opt} src={imgPath} />
    }
}

export default (data: Data) => {
    const futureEvents = data.events.filter(event => Date.now() - Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`) < 0).map(event =>
        <div>
            <h3>{event.name}{` (${event.status})` || ""}</h3>
            {event.url && <ExternalLink href={event.url}>イベント公式サイト</ExternalLink>}
            <p>開催日: <DateExpression date={event.date} /></p>
            {event.space && <p>スペース: <strong>{event.space}</strong></p>}
            {event.img && <a href={`./${event.id}/`}>{imageElement(event.img)}</a>}
            {event.id && <p><a href={`./${event.id}/`}>イベント参加情報</a></p>}
        </div>
    );

    const pastEvents = data.events.filter(event => Date.now() - Date.parse(`${event.date.includes("/") ? event.date.split("/")[1] : event.date}T23:59:59+0900`) >= 0);
    pastEvents.reverse();
    const pastEventElements = pastEvents.map(event => <li>
        {event.id ? <a href={`./${event.id}/`}>{event.name}</a> : <span>{event.name}</span>} (<DateExpression date={event.date} />)
    </li>);
    return <main role="main">
        <h1>イベント参加情報</h1>

        <section>
            <h2>今後のサークル参加予定</h2>
            {futureEvents}
        </section>

        <section>
            <h2>過去のサークル参加情報</h2>
            {pastEventElements.length === 0 ? <p>過去の参加イベントはありません。</p> : pastEventElements}
        </section>
    </main>;
};
