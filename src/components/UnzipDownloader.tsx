import { useState } from 'preact/hooks';
import { ZipReader, HttpReader, BlobWriter, ERR_INVALID_PASSWORD, ERR_ENCRYPTED } from '@zip.js/zip.js';

import type { DownloadItem } from '../data';

export type Props = {
  item: DownloadItem;
};

async function sha256sum(str: string) {
  const buf = new TextEncoder().encode(str);
  const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', buf)));
  return digest.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function validatePassword(str: string, hash: string) {
  // return true if sha256sum function doesn't work properly
  try {
    if (await sha256sum('a') !== 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb') {
      return true;
    }
  } catch {
    return true;
  }
  return await sha256sum(str) === hash
}

async function download(url: string, password: string) {
  const downloadUrl = new URL(url, location.href).toString();
  const reader = new ZipReader(new HttpReader(downloadUrl));
  const entries = await reader.getEntries();
  const a = document.createElement('a');
  a.style.display = 'none';
  document.body.appendChild(a);
  if (entries.length < 3) {
    for (const entry of entries) {
      if (entry.directory) { continue; }
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
    setInfoMessage('ダウンロード中……');
    setErrorMessage('');
    if (!await validatePassword(password, item.passwordHash)) {
      setInfoMessage('');
      setErrorMessage('パスワードが間違っています。');
      return;
    }
    try {
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
