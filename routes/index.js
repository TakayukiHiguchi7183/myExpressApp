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
router.post('/api/sum', (req, res) => {
  // クライアントから送信されたデータを取得
  const { num1, num2 } = req.body;

  // 数値に変換（もし送信されるデータが文字列の場合に備えて）
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  // 足し算を実行
  const sum = add(number1, number2);

  // 結果をクライアントに返す
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