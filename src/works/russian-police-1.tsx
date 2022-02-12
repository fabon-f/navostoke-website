import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { Data } from "../types.ts";

export const title = "ロシア語警察24時 vol. 1 人名エトセトラ";
export const description = "「ロシア語警察24時 vol. 1 人名エトセトラ」の紹介ページ";
export const ogImage = "/img/works/russian-police-1-cover.png"

export default (data: Data) =>
    <main role="main">
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
    </main>;
