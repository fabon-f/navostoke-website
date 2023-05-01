import { useState } from 'preact/hooks';
import { ZipReader, HttpReader, BlobWriter, ERR_INVALID_PASSWORD, ERR_ENCRYPTED } from '@zip.js/zip.js';

import type { DownloadItem } from '../data';

export type Props = {
  item: DownloadItem;
};

async function download(url: string, password: string) {
  const downloadUrl = new URL(url, location.href).toString();
  const reader = new ZipReader(new HttpReader(downloadUrl));
  const entries = await reader.getEntries();
  const a = document.createElement('a');
  a.style.display = 'none';
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

export default function UnzipDownloader({ item }: Props) {
  const [password, setPassword] = useState('');
  const [infoMessage, setInfoMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleClick = async () => {
    try {
      setInfoMessage('ダウンロード中……');
      setErrorMessage('');
      await download(item.archive, password);
      setInfoMessage('');
    } catch (e: any) {
      setInfoMessage('');
      if (e.message === ERR_INVALID_PASSWORD) {
        setErrorMessage('パスワードが間違っています。');
      } else if (e.message === ERR_ENCRYPTED) {
        setErrorMessage('パスワードを入力してください');
      } else {
        setErrorMessage('不明なエラーが発生しました。');
      }
    }
  }

  return <div>
    <label>パスワード: <input type="text" value={password} onInput={e => { setPassword(e.currentTarget.value) }} /></label>
    <button type="button" onClick={handleClick}>ダウンロード</button>
    <p>{infoMessage}</p>
    <p><strong>{errorMessage}</strong></p>
  </div>
}
