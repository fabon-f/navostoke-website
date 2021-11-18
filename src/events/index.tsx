import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink, WebpImage } from "../../lib/components.tsx";
import { Data } from "../types.ts";

export const title = "イベント参加情報";
export const description = "過去のものを含む全てのイベント参加情報";

export default (data: Data) =>
    <main role="main">
        <h1>イベント参加情報</h1>
    </main>;
