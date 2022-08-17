/// <reference lib="dom" />
/*!
dependencies:
zip.js https://github.com/gildas-lormeau/zip.js 3-Clause BSD License
*/
import { ZipReader, HttpReader, BlobWriter, ERR_INVALID_PASSWORD } from "https://deno.land/x/zipjs@v2.6.14/index.js";

async function download(url: string, password: string) {
    const downloadUrl = new URL(url, location.href).toString();
    const reader = new ZipReader(new HttpReader(downloadUrl));
    const entries = await reader.getEntries();
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    if (entries.length < 3) {
        for (const entry of entries) {
            if (!entry.getData) { continue; }
            const data = await entry.getData(new BlobWriter(), {
                password
            });
            const blobUrl = URL.createObjectURL(data);
            a.href = blobUrl;
            a.download = entry.filename;
            a.click();
            URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        }
    }
}

(() => {
    const elem = document.getElementById("unzip");
    if (!elem) { return; }
    const url = elem.dataset.archiveUrl;
    if (!url) { return; }
    const input = elem.getElementsByClassName("unzip-password")[0];
    if (!(input instanceof HTMLInputElement)) { return; }
    const dlButton = elem.getElementsByClassName("unzip-dl-button")[0];
    if (!(dlButton instanceof HTMLButtonElement)) { return; }
    const progressField = elem.getElementsByClassName("unzip-progress-message")[0];
    if (!progressField) { return; }
    const errorField = elem.getElementsByClassName("unzip-error-message")[0];
    if (!errorField) { return; }

    dlButton.addEventListener("click", async () => {
        errorField.textContent = "";
        try {
            progressField.textContent = "ダウンロード中……";
            await download(url, input.value);
            progressField.textContent = "";
        } catch (e) {
            progressField.textContent = "";
            if (e.message === ERR_INVALID_PASSWORD) {
                errorField.textContent = "パスワードが間違っています。";
            } else {
                errorField.textContent = "不明なエラーが発生しました。";
            }
        }
    });
}) ();
