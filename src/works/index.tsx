import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { Data, Filters } from "../types.ts";

export const title = "作品一覧";
export const description = "作品の一覧ページ";

export default (data: Data, filters: Filters) => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h2>{series.name}</h2>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div><a href={`./${book.id}/`}>{book.name}</a>{book.published ? ` (${filters.date(book.publishDate, "yyyy/MM/dd")}発行)` : " (未発売)"}</div>)}
        </div>
    );
    const collab = data.externalWorks.map(circle => {
        const works = circle.works.map(book => <div>
            <li>{book.url ? <ExternalLink href={book.url}>{book.name}</ExternalLink> : book.name} {book.description}</li>
        </div>);
        return <div>
            <h3>{circle.name}</h3>
            <ul>{works}</ul>
        </div>;
    });
    return <main role="main">
        <h1>作品一覧</h1>
        {books}

        <h2>寄稿・制作協力</h2>
        {collab}
    </main>;
}
