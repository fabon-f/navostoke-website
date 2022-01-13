import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../lib/components.tsx"
import { Data } from "./types.ts"

export const title = "サークル「ナヴァストーケ」";
export const description = "ふぁぼんの個人サークル「ナヴァストーケ」の公式サイト";

function imageElement(opt: {type: string; src: string}) {
    const imgPath= `/img/events/${opt.src}`
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={imgPath} />
    } else {
        return <img {...opt} src={imgPath} />
    }
}

export default (data: Data) => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h3>{series.name}</h3>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div><a href={`./works/${book.id}/`}>{book.name}</a>{book.published || " (未発売)"}</div>)}
        </div>
    )
    const futureEvents = data.events.filter(event => Date.now() - Date.parse(`${event.date}T23:59:59+0900`) < 0).map(event =>
        <div>
            <h3>{event.name}{` (${event.status})` || ""}</h3>
            {event.url && <ExternalLink href={event.url}>イベント公式サイト</ExternalLink>}
            <p>開催日: <time dateTime={event.date}>{`${event.date.replaceAll("-", "/")}`}</time></p>
            {event.img && <a href={`./events/${event.id}/`}>{imageElement(event.img)}</a>}
            {event.id && <p><a href={`./events/${event.id}/`}>イベント参加情報</a></p>}
        </div>
    );
    const pastEvents = data.events.filter((event => Date.now() - Date.parse(`${event.date}T23:59:59+0900`) >= 0));
    pastEvents.reverse();
    const pastEventElements = pastEvents.slice(0, 5).map(event => <li>
        {event.id ? <a href={`./events/${event.id}/`}>{event.name}</a> : <span>{event.name}</span>}
    </li>);
    const isEventAll = pastEvents.length === pastEventElements.length;
    return <main role="main">
        <div id="center_logo">
            <WebpImage src="/img/logo" width="772" height="435" alt="ナヴァストーケのアイコン" className="transparent-bg-img" />
        </div>
        <section>
            <h1>サークル「ナヴァストーケ」</h1>
            <p>ふぁぼんの個人サークルです。科学、コンピュータ、ロシア語、旧ソ連、鉄道や船やバスや旅行など、節操なしにいろいろ書きます。</p>
            <p>評論・情報系の本がメインですが、一次/二次創作の小説も出すかもしれません。</p>
            <p>※サークル名の「ナヴァストーケ」はロシア語で「на востоке」すなわち「東で」を意味します。</p>
        </section>

        <ExternalLink href="https://navostoke.booth.pm">BOOTH(通販・ダウンロード販売)</ExternalLink>

        <section>
            <h2>作品一覧</h2>
            {books}
        </section>

        <section>
            <h2>今後のサークル参加予定</h2>
            {futureEvents}
        </section>

        <section>
            <h2>過去のサークル参加情報</h2>
            {pastEventElements.length === 0 ? <p>過去の参加イベントはありません。</p> : pastEventElements}
            {isEventAll || <a href="./events/">全て見る</a>}
        </section>
    </main>
}
