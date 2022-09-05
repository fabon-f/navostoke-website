import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { getBookData, buildBibtexCitation } from "../../lib/helpers.ts";
import { PageHelpers } from "lume/core.ts";
import { Data } from "../types.ts";

export const title = "ロシア語警察24時 vol. 1 人名エトセトラ";
export const description = "「ロシア語警察24時 vol. 1 人名エトセトラ」の紹介ページ";
export const ogImage = "/img/works/russian-police-1-cover.png"


export default (data: Data, filters: PageHelpers) => {
    const bookData = getBookData(data);
    const bibtexInfo = buildBibtexCitation({
        bookId: bookData.id,
        title: title,
        bookUrl: filters.url(data.url, true),
        publishDate: bookData.publishDate
    });

    return <main role="main">
        <h1>ロシア語警察24時 vol. 1 人名エトセトラ</h1>
        <WebpImage src="/img/works/russian-police-1-cover" width="300" />
        <p>ロシア語を学ぶ筆者による、「オタク趣味×ロシア語」の同人誌です。</p>
        <p>第1巻のテーマは「人名」。いまいち分からないロシア人名の解説、ロシア語知識0の創作者がロシア人の名前を正しく命名する方法など、ロシア人名に関する内容を詰め込みました。雑学から実用的な情報まで、1冊でロシア人名がだいたい分かるお得な本です。</p>
        <p>※ロシア語の知識は前提としませんが、ロシア語を多少知っていればさらに楽しめます。</p>

        <h2>収録内容</h2>
        <ul>
            <li>創作者のためのロシア人名入門</li>
            <li>ここが変だよ! オタク作品のロシア人名</li>
        </ul>

        <h2>通販その他</h2>
        <ul>
            <li><ExternalLink href="https://navostoke.booth.pm/items/3652492">通販(BOOTH)</ExternalLink></li>
            <li><ExternalLink href="https://navostoke.booth.pm/items/3652511">電子版(BOOTH)</ExternalLink></li>
        </ul>

        <h2>サンプル</h2>
        <div className="book-samples">
            <ul>
                <li><a href="/img/works/russian-police-1-sample1.png" data-gallery="sample"><img src="/img/works/russian-police-1-sample1.png" /></a></li>
                <li><a href="/img/works/russian-police-1-sample2.png" data-gallery="sample"><img src="/img/works/russian-police-1-sample2.png" /></a></li>
                <li><a href="/img/works/russian-police-1-sample3.png" data-gallery="sample"><img src="/img/works/russian-police-1-sample3.png" /></a></li>
                <li><a href="/img/works/russian-police-1-sample4.png" data-gallery="sample"><img src="/img/works/russian-police-1-sample4.png" /></a></li>
            </ul>
        </div>

        <h2>正誤表</h2>
        <table className="errata">
            <thead><tr>
                <th>版</th><th>ページ</th><th>誤字の箇所</th><th>誤</th><th>正</th>
            </tr></thead>
            <tbody>
                <tr>
                    <td>初版</td><td>19</td><td>2.1節</td>
                    <td>アレクサンドル・イヴァノヴナ・ポクルィーシキン</td><td>アレクサンドラ・I・ポクルイーシキン</td>
                </tr>
            </tbody>
        </table>

        <h2>書誌情報</h2>
        <table className="book-info">
            <tbody>
                <tr><th>タイトル</th><td>{title}</td></tr>
                <tr><th>発行日</th><td>{filters.date(bookData.publishDate, "yyyy/MM/dd")}</td></tr>
                <tr><th>体裁</th><td>B5サイズ、24ページ、本文グレースケール</td></tr>
                <tr><th>ISDN</th><td><ExternalLink href="https://isdn.jp/2784548637017">278-4-548637-01-7</ExternalLink></td></tr>
            </tbody>
        </table>

        <details id="citation-exporter">
            <summary>書誌情報のエクスポート (BibTeX)</summary>
            <textarea readOnly>{bibtexInfo}</textarea>
        </details>
    </main>
};
