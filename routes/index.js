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
  const sum = 1 + 7;
  res.json({ sum: sum });
});

// 日付を取得するAPI
router.get('/api/date', (req, res) => {
  const today = new Date().toLocaleDateString();
  res.json({ date: today });
});

export default router;