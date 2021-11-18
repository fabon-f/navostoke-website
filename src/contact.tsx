import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../lib/components.tsx";
import { Data } from "./types.ts";

export const title = "連絡先"
export const description = "サークル「ナヴァストーケ」の連絡先"

export default (data: Data) =>
    <main role="main">
        <h1>連絡先・リンク</h1>
        <p><WebpImage src="/img/fabon" width="80" height="80" alt="ふぁぼんのアイコン" />サークル主催者: ふぁぼん(Фабон Ильич Фаворский)</p>
        <ul>
            <li><ExternalLink href="https://www.fabon.info">ふぁぼんのホームページ</ExternalLink></li>
            <li><ExternalLink href="https://twitter.com/syobon_hinata">ふぁぼんのTwitterアカウント(DMを開放しています)</ExternalLink></li>
            <li><ExternalLink href="https://www.pixiv.net/users/10536791">ふぁぼんのpixivアカウント(主に二次創作小説)</ExternalLink></li>
        </ul>
    </main>;
