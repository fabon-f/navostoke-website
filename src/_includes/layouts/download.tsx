import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { WebpImage } from "../../../lib/components.tsx";

export const layout = "layouts/layout.tsx";
export const pageScript = "download";

type Data = {
    title: string;
    description: string;
    contentName: string;
    img: { type: string; src: string }
    archive: string;
    encrypted?: boolean;
    extractOnWeb?: boolean;
}

function imageElement(opt: {type: string; src: string}) {
    if (opt.type === "webp") {
        return <WebpImage {...opt} src={opt.src} />
    } else {
        return <img {...opt} src={opt.src} />
    }
}

function dlMessage(data: Data) {
    if (data.archive.endsWith(".zip") && data.encrypted) {
        return "元データ(暗号化zip)を直接ダウンロードする";
    }
    if (data.archive.endsWith(".zip")) {
        return "元データ(zip)を直接ダウンロードする";
    }
    return "元データを直接ダウンロードする";
}

export default (data: Data) => <main>
    <h1>{data.contentName}<br/>ダウンロードページ</h1>
    { data.img && imageElement(data.img) }
    {
        data.extractOnWeb && <div id="unzip" data-archive-url={data.archive}>
            <label>パスワード: <input type="text" className="unzip-password" /></label>
            <button type="button" className="unzip-dl-button">ダウンロード</button>
            <p className="unzip-progress-message"></p>
            <p><strong className="unzip-error-message"></strong></p>
        </div>
    }
    <div>
        <a href={data.archive}>{dlMessage(data)}</a>
    </div>
</main>
