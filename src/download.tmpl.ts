import type { Data } from "./types.ts";

export const layout = "layouts/download.tsx";

export default function*(data: Data) {
    for (const item of data.downloads) {
        yield {
            url: `/downloads/${item.id}/`,
            contentName: item.title,
            title: `${item.title} ダウンロード`,
            description: `${item.title}のダウンロードページ`,
            ogImage: item.ogImage,
            img: item.img,
            archive: item.archive,
            encrypted: item.encrypted,
            extractOnWeb: item.extractOnWeb
        }
    }
}
