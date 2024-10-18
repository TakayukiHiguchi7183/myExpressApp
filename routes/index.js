import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ルートハンドラを修正
router.get('/', (req, res, next) => {
  res.sendFile(path.join(dirname, '../public/index.html'));  // 静的なindex.htmlを返す
});

// 足し算結果を取得するAPI
router.get('/api/sum', (req, res) => {
  const sum = add(1,7);
  res.json({ sum: sum });
});

// 日付を取得するAPI
router.get('/api/date', (req, res) => {
  const today = getCurrentDate();
  res.json({ date: today });
});

//足し算を実行する関数
export function add(a, b) {
  return a + b;
}

//今日の日付を文字列で取得
export function getCurrentDate() {
  const date = new Date();
  return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
}

export default router;