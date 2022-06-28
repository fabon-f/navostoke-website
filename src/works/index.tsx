import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { Data, Filters } from "../types.ts";

export const title = "作品一覧";
export const description = "作品の一覧ページ";

function imageElement(opt: {type: string; src: string}) {
    const imgPath= `/img/works/${opt.src}`
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={imgPath} />
    } else {
        return <img {...opt} src={imgPath} />
    }
}

export default (data: Data, filters: Filters) => {
    const books = data.series.filter(series => Array.isArray(series.books)).map(series =>
        <div>
            <h2>{series.name}</h2>
            {series.description && <p>{series.description}</p>}
            {series.books && series.books.map(book => <div>
                <p><a href={`./${book.id}/`}>{book.name}</a>{book.published ? ` (${filters.date(book.publishDate, "yyyy/MM/dd")}発行)` : " (未発売)"}</p>
                {book.img && <a href={`./${book.id}/`}>{imageElement(book.img)}</a>}
            </div>)}
        </div>
    );
    return <main role="main">
        <h1>作品一覧</h1>
        {books}

        <h2>寄稿・制作協力</h2>

        <h3>東京大学きらら同好会</h3>
        <ul>
            <li><ExternalLink href="https://utkiraracircle.github.io/posts/find-our-stars-1">#FindOurStars Vol.1</ExternalLink> 寄稿(評論「東大生猪瀬舞概念」) </li>
            <ul>
                <li><ExternalLink href="https://yuyusuki.hatenablog.com/entry/2022/06/12/190000">「東大生猪瀬舞概念」全文</ExternalLink></li>
            </ul>
            <li><ExternalLink href="https://utkiraracircle.github.io/posts/micare-1">Micare Vol.1</ExternalLink> 寄稿(評論「まちカドまぞく vs. ウクライナ語警察」)</li>
            <li><ExternalLink href="https://utkiraracircle.github.io/posts/find-our-stars-2">#FindOurStars Vol.2</ExternalLink> 寄稿(二次創作小説「ナナチカ探偵団と不可能な虹」「拝啓、海の向こうの空へ」)</li>
            <ul>
                <li><ExternalLink href="https://www.pixiv.net/novel/show.php?id=16190901">「拝啓、海の向こうの空へ」全文</ExternalLink></li>
            </ul>
        </ul>
    </main>;
}
